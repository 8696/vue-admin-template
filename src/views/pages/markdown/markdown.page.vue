<template>
  <div class="page">
    <el-row>
      <div class="card">
        <div class="card-body">
          <markdown-component :text="text"/>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
  import MarkdownComponent from '@/views/general/markdown/markdown.component';

  export default {
    components: {MarkdownComponent},

    data() {
      return {
        use:``,
        text: `
# 前端模型的实现

### 一、简单概念

**模型**：在开发中代表的是现实数据中的\`抽象\`(类似interface)，它表示数据库中表名称、表的\`数据结构\`、和表中字段(属性)是什么以及这个字段的\`特征\`、\`约束\`、\`关系\`等其他问题组成

先来看看一个简单的模型来看看\`数据结构\`、\`特征\`、\`约束\`、和\`关系\`的概念理解

\`\`\`javascript
let User = {
  useID: {
    type: Number,
    defaultValue: 0,
    allowEmpty: false,
    references: {
      model: Book,
      key: 'books',
      filed: 'userID'
    }
  },
  username: {
    type: String,
    defaultValue: '',
    allowEmpty: false,
    minLength: 6,
    maxLength: 16
  },
  status: {
    type: Number,
    defaultValue: 0,
    enum: [0, 1]
  }
}
\`\`\`

上面就是可以看做数据库中一个表的抽象，根据上面代码再来看下上面四个概念的简单理解

- 数据结构

可以看出这个模型中具有三个属性\`useID\`、\`username\`、\`status\`。这里就表示该模型下有三个属性，这个属性的个数是固定的。他会根据数据库实际情况同步到数据库中

- 特征

在每个属性都有一个数据类型\`type\`，比如是字符串、整型、布尔类型等。这根据需求可以定义这个字段它到底存的是什么数据类型，默认值\`defaultValue\`是什么，这是数据库的基础

- 约束

约束就是在一个字段数据中要对这个数据进行哪些约束，比如\`allowEmpty\`定义这个数据允不允许是空值、\`minLength\`定义这个数据多可以是多少个字符串、\`enum\`是定义这个数据只能是指定的值之一等等

- 关系

在\`useID\`下有一个\`references\`属性，在这里它作用是描述此字段哪另一个模型进行关联。这里可以简单理解为\`Classes\`模型是和\`User\`模型进行合并，而实际数据关联的桥梁是这个\`userID\`


### 二、实现

**问题**：实际上这个模型的概念在web前端开发中是很少有提及的，所以现在就将模型的概念尝试的引入前端开发中。

在前端提交数据和后端响应数据时一般为一个对象，这里使用\`class\`来实现。例如我希望实现\`new\`一个模型就可以获得一个实例，如下
\`\`\`javascript
class UserModel {
  constructor(data) {
    this.username = data.username
  }
}
let user = new UserModel({username: 'long'});
console.log(user.username); // {username: "long"}
\`\`\`
现在就来为这个\`模型\`添加一些概念：

##### 01、添加\`数据结构\`

\`\`\`javascript
class UserModel {
  constructor(data) {
    const fields = {
      id: {},
      username: {},
    };
    // 遍历字段名称
    Object.keys(fields).forEach(field => {
      // 获取构造参数的数据
      this[field] = data[field];
    });
  }
}
let user = new UserModel({
  id: 2019,
  username: 'long',
  age: 20
});
console.log(user); // UserModel { id: 2019, username: 'long' }
\`\`\`
从log中可以看出在实例模型时传入多余字段，会忽略掉。在这里不会在\`constructor\`写\`this.xxx\`等于什么。而是通过一个对象来表示所有字段，在通过遍历这个对象去批量为本模型添加属性，否则添加特征和约束会麻烦不少

##### 02、添加\`特征\`

\`\`\`javascript
function valueType(value, type) {
  switch (type) {
    case Number:
      if (({}).toString.call(value) !== '[object Number]') throw new Error('数据类型不匹配');
      return true;
    case String:
      if (({}).toString.call(value) !== '[object String]') throw new Error('数据类型不匹配');
      return true;
  }
}
class UserModel {
  constructor(data) {
    const fields = {
      id: {type: Number, defaultValue: ''},
      username: {type: String, defaultValue: ''},
    };
    // 遍历字段名称
    Object.keys(fields).forEach(field => {
      // 判断是否存在属性定义的。否则使用默认值，再将字段定义在本对象下面
      let fieldData = data.hasOwnProperty(field)
        ? data[field]
        : fields[field].defaultValue;
      // 简单判断数据类型
      try {
        if (valueType(fieldData, fields[field].type)) {
          this[field] = fieldData;
        }
      } catch (e) {
        throw new Error('field：' + field + e.message);
      }

    });
  }
}

let user = new UserModel({
  username: 'long',
  id: 2019
});
console.log(user); // UserModel { id: 2019, username: 'long' }
\`\`\`
> 更高级的验证器可以使用 https://github.com/validatorjs/validator.js

##### 03、添加\`约束\`
\`\`\`javascript
function valueType(value, type) {
  switch (type) {
    case Number:
      if (({}).toString.call(value) !== '[object Number]') throw new Error('数据类型不匹配');
      return true;
    case String:
      if (({}).toString.call(value) !== '[object String]') throw new Error('数据类型不匹配');
      return true;
  }
}

let rules = {
  enum(ruleRes, value) {
    return ruleRes.includes(value);
  },
  minLength(ruleRes, value) {
    return value.length >= ruleRes;
  },
  maxLength(ruleRes, value) {
    return value.length <= ruleRes;
  }
};

function validator(value, field) {
  Object.keys(field).forEach(item => {
    if (rules.hasOwnProperty(item)) {
      if (!rules[item](field[item], value)) throw new Error('约束错误：' + item);
    }
  });
  return true;
}

class UserModel {
  constructor(data) {
    const fields = {
      id: {type: Number, defaultValue: '', enum: [0, 1, 2]},
      username: {type: String, defaultValue: '', minLength: 4, maxLength: 10},
    };
    // 遍历字段名称
    Object.keys(fields).forEach(field => {
      // 判断是否存在属性定义的。否则使用默认值，再将字段定义在本对象下面
      let fieldData = data.hasOwnProperty(field)
        ? data[field]
        : fields[field].defaultValue;
      // 简单判断数据类型
      try {
        if (valueType(fieldData, fields[field].type)
          // 约束数据
          && validator(fieldData, fields[field])
        ) {
          this[field] = fieldData;
        }
      } catch (e) {
        throw new Error('field：' + field + e.message);
      }
    });
  }
}

let user = new UserModel({
  username: 'long',
  id: 1
});
console.log(user); // UserModel { id: 2019, username: 'long' }

// Error: field：id约束错误：enum .因为 enum 只允许 存储 [0,1,2]的其中一项
let user2 = new UserModel({
  username: 'long',
  id: 3
});
\`\`\`
##### 04、添加\`关系\`

在关系型数据库中比如\`mysql\`是使用\`sql\`来查询，而被关系中往往是一个模型集合。这里使用一个数组集合来实现模拟关系
\`\`\`javascript
function valueType(value, type) {
  switch (type) {
    case Number:
      if (({}).toString.call(value) !== '[object Number]') throw new Error('数据类型不匹配');
      return true;
    case String:
      if (({}).toString.call(value) !== '[object String]') throw new Error('数据类型不匹配');
      return true;
  }
}

let rules = {
  enum(ruleRes, value) {
    return ruleRes.includes(value);
  },
  minLength(ruleRes, value) {
    return value.length >= ruleRes;
  },
  maxLength(ruleRes, value) {
    return value.length <= ruleRes;
  }
};

function validator(value, field) {
  Object.keys(field).forEach(item => {
    if (rules.hasOwnProperty(item)) {
      if (!rules[item](field[item], value)) throw new Error('约束错误：' + item);
    }
  });
  return true;
}

class UserModel {
  constructor(data, references = []) {
    const fields = {
      userID: {
        type: Number, defaultValue: '', enum: [0, 1, 2],
        references: {
          model: 'Book', // 模型名称
          key: 'books',  // 关联之后的字段
          filed: 'uid'   // 被关联模型字段
        }
      },
      username: {type: String, defaultValue: '', minLength: 4, maxLength: 10},

    };
    // 遍历字段名称
    Object.keys(fields).forEach(field => {
      // 判断是否存在属性定义的。否则使用默认值，再将字段定义在本对象下面
      let fieldData = data.hasOwnProperty(field)
        ? data[field]
        : fields[field].defaultValue;
      // 简单判断数据类型
      try {
        if (valueType(fieldData, fields[field].type)
          // 约束数据
          && validator(fieldData, fields[field])
        ) {
          this[field] = fieldData;

        }
      } catch (e) {
        throw new Error('field：' + field + e.message);
      }
      // 关联
      if (fields[field].hasOwnProperty('references')) {
        // 查找关联集合中配置了该字段和当前字段符合的一项
        let referencesData = references.find(item => {
          // console.log(item.model)
          // console.log(fields[field].references.model)
          return item.filed === field && item.model === fields[field].references.model;
        });
        // console.log(referencesData)
        // return

        // 关联模式 filter 为一对多
        let referenceType = 'filter';
        // find 为一对一
        // let referenceType = 'find';

        if (referencesData !== undefined) {
          // 过滤符合关联本字段的模型集合中数据，并且为本模型添加一个指定字段
          this[fields[field].references.key] = referencesData.list[referenceType](item => {
            return item[fields[field].references.filed] === fieldData;
          });
        } else {
          // 没有匹配到关联集合的一项也要给本模型添加这个指定字段
          this[fields[field].references.key] = referenceType === 'filter' ? [] : {};
        }
      }
    });
  }
}

let books = [
  {uid: 1, name: 'JavaScript 高级程序设计'},
  {uid: 1, name: '你不知道的JavaScript（上）'},
  {uid: 2, name: 'JavaScript模式'},
];

let user = new UserModel({
  username: 'long',
  userID: 1
}, [{filed: 'userID', model: 'Book', list: books}]);

console.log(user);
/*
UserModel {
  userID: 1,
  books: [
    { uid: 1, name: 'JavaScript 高级程序设计' },
    { uid: 1, name: '你不知道的JavaScript（上）' }
  ],
  username: 'long'
}
*/
\`\`\`




### 三、实现基本方法

上述只是展示了本地模型的定义和概念等，最重要的还是和后端的交互。交互中无非就是完成数据查询、添加、更新和删除，这里也可以实现直接调用模型等方法实现，现在来新增几个基本方法
- \`save\` 保存数据
- \`update\` 更新数据
- \`remove\` 删除数据

**铺垫**：为了清晰一点现在将代码恢复到比较原始的状态，并简单改造一下代码，因为每个模型会有这三个方法所以新建一个基类使它继承。并且将数据设置等放入基类中

\`\`\`javascript
class BaseModel {
  constructor(fields, data) {
    // 遍历字段名称
    Object.keys(fields).forEach(field => {
      this[field] = data[field];
    });
  }
}

class UserModel extends BaseModel {
  constructor(data) {
    const fields = {
      userID: {},
      username: {},
    };
    super(fields, data);
  }
}

let user = new UserModel({
  username: 'long',
  userID: 1
});
console.log(user); // UserModel { userID: 1, username: 'long' }
\`\`\`

在开发中\`http\`模块中一般是封装好的，即一个方法接收一个参数调用一个接口，而这个参数一般是一个对象。大概就像下面这样

\`\`\`javascript
class Http {
  constructor(options) {
    // 创建 axios 实例 或者 xhr 等
    // this.axios = axios.create({})
  }
  request(config) {
    return new Promise((resolve, reject) => {
      // this.axios.request(config)
      //   .then()
      //   .catch()
      resolve({code: 0, data: config.data});
    });
  }
}

let userAPI = {
  saveUser(param) {
    return new Http().request({
      url: '/user/save',
      data: param,
      method: 'post'
    });
  },
  updateUser(param) {
    return new Http().request({
      url: '/user/update',
      data: param,
      method: 'post'
    });
  },
  removeUser(param) {
    return new Http().request({
      url: '/user/remove',
      data: param,
      method: 'post'
    });
  },
};
// 使用
userAPI.saveUser({username:'long'})
  .then()
  .catch();
\`\`\`

##### 01、添加save、update、remove

利用如上这种这么简单、普遍的封装，可以很简单的实现模型的三个基本方法，以下是结合http的所有代码
\`\`\`javascript
class Http {
  constructor(options) {
  }

  request(config) {
    return new Promise((resolve, reject) => {
      resolve({code: 0, data: config.data}); // 直接将参数回调
    });
  }
}

let userAPI = {
  saveUser(param) {
    return new Http().request({
      url: '/user/save',
      data: param,
      method: 'post'
    });
  },
  updateUser(param) {
    return new Http().request({
      url: '/user/update',
      data: param,
      method: 'post'
    });
  },
  removeUser(param) {
    return new Http().request({
      url: '/user/remove',
      data: param,
      method: 'post'
    });
  },
};

class BaseModel {
  constructor(fields, data) {
    Object.keys(fields).forEach(field => {
      this[field] = data[field];
    });
  }

  save(api) {
    return api(this);
  }

  update(api) {
    return api(this);
  }

  remove(api) {
    return api(this);
  }
}

class UserModel extends BaseModel {
  constructor(data) {
    const fields = {
      userID: {},
      username: {},
    };
    super(fields, data);
  }
}

let user = new UserModel({
  username: 'long',
  userID: 1
});
// 保存
user.save(userAPI.saveUser)
  .then(res => {
    console.log(res.data); // UserModel { userID: 1, username: 'long' }
  });
// 更新
user.update(userAPI.saveUser)
  .then(res => {
    console.log(res.data); // UserModel { userID: 1, username: 'long' }
  });
// 删除
user.remove(userAPI.removeUser)
  .then(res => {
    console.log(res.data); // UserModel { userID: 1, username: 'long' }
  });
\`\`\`
按照上面代码\`save\`方法举例，该方法接收一个参数\`api\`，直接\`return api(this);\`即可，这个\`api\`就是封装好的那个\`http\`方法引用，而这里\`this\`就是该模型。这样就轻而易举的实现了。

但是这样有点问题，接口中有时候并不需要前端传那么多字段，例如添加保存时并不需要ID、删除只需要一个ID字段即可。像上面的话运行时在\`Http\`的\`request\`里面可以看出都把整个模型提交给后端了。这时候还需要在定义字段时在描述里面添加可以告知接口我要提交哪些参数，哪些参数忽略掉。现在来继续改造代码
\`\`\`javascript
class Http {
  constructor(options) {
  }

  request(config) {
    return new Promise((resolve, reject) => {
      resolve({code: 0, data: config.data}); // 直接将参数回调
    });
  }
}

let userAPI = {
  saveUser(param) {
    return new Http().request({
      url: '/user/save',
      data: param,
      method: 'post'
    });
  },
  updateUser(param) {
    return new Http().request({
      url: '/user/update',
      data: param,
      method: 'post'
    });
  },
  removeUser(param) {
    return new Http().request({
      url: '/user/remove',
      data: param,
      method: 'post'
    });
  },
};

class BaseModel {
  constructor(fields, data) {
    Object.keys(fields).forEach(field => {
      this[field] = data[field];
    });
    // 定义一个不可枚举属性，来隐藏字段的描述
    Object.defineProperty(this, '__fields__',
      {value: fields, enumerable: false});
  }

  // 改造三个方法
  save(api) {
    return api(this.getFieldData('save'));
  }

  update(api) {
    return api(this.getFieldData('update'));
  }

  remove(api) {
    return api(this.getFieldData('remove'));
  }

  // 新增一个方法
  /**
   * @description 获取字段描述中指定需要的类型
   * @param type {String} save | update | remove
   * */
  getFieldData(type) {
    let obj = {};
    // 遍历描述字段
    Object.keys(this.__fields__).forEach(field => {
      // 描述中为 true 的才进行获取
      if (this.__fields__[field][type] === true) {
        obj[field] = this[field];
      }
    });
    return obj;
  }
}

class UserModel extends BaseModel {
  constructor(data) {
    const fields = {
      // 新增
      userID: {save: false, update: true, remove: true},
      username: {save: true, update: true, remove: false},
    };
    super(fields, data);
  }
}

let user = new UserModel({
  username: 'long',
  userID: 1,
});
console.log(user); // UserModel { userID: 1, username: 'long' }

console.log(user.getFieldData('save')); // { username: 'long' }
console.log(user.getFieldData('update')); // { userID: 1, username: 'long' }
console.log(user.getFieldData('remove')); // { userID: 1 }

// 保存
user.save(userAPI.saveUser)
  .then(res => {
    console.log(res.data); // { username: 'long' }
  });
// 更新
user.update(userAPI.saveUser)
  .then(res => {
    console.log(res.data); // { userID: 1, username: 'long' }
  });
// 删除
user.remove(userAPI.removeUser)
  .then(res => {
    console.log(res.data); // { userID: 1 }
  });
\`\`\`
首先在定义字段描述时添加\`save\`、\`update\`、\`remove\`三个属性，然后在模型定义一个不可枚举的\`__fields__\`属性来存储该字段的描述。再添加一个过滤这三个属性的方法\`getFieldData\`。方法中遍历\`__fields__\`，指定类型在为\`true\`才认为可以获取。最后改造三个基本方法即可，从log中可以看到每次发送请求只发送了在字段描述中定义好的数据



### 四、扩展

在后端返回的数据中很难会有直接供前端使用的数据。例如时间戳需要格式化，那么需要在字段描述中和遍历字段时修改方法
\`\`\`javascript
class BaseModel {
  constructor(fields, data) {
    // 遍历字段名称
    Object.keys(fields).forEach(field => {

      this[field] =
        // 判断是否存在map方法，存在则优先调用
        typeof fields[field].map === 'function'
          ? fields[field].map(data)
          // 判断构造参数是否存在该属性，否则使用默认值
          : (data.hasOwnProperty(field) ? data[field] : fields[field].defaultValue);
    });
  }
}

class UserModel extends BaseModel {
  constructor(data) {
    const fields = {
      id: {type: Number, defaultValue: 0},
      username: {type: String, defaultValue: ''},
      createTime: {
        type: String, defaultValue: '',
        // 添加一个map方法，会在遍历字段时调用，接收一个参数：实例构造对象。
        map({createTime}) {
          return new Date(createTime).getFullYear() + '-' + (new Date(createTime).getMonth() + 1);
        }
      },
      // 第二种方法，保留原数据。添加多一个描述，使用map方法实现自动添加属性
      _createTime: {
        type: String, defaultValue: '',
        map({createTime}) {
          return new Date(createTime).getFullYear() + '-' + (new Date(createTime).getMonth() + 1);
        }
      },
    };
    super(fields, data);
  }
}

let user = new UserModel({
  id: 2019,
  username: 'long',
  createTime: new Date().getTime(),
});
console.log(user);
/*
UserModel {
  id: 2019,
  username: 'long',
  createTime: '2020-4',
  _createTime: '2020-4'
}
* */
\`\`\`


`
      };
    },
    mounted() {
      setTimeout(() => {
      }, 3000);
    }
  };
</script>

<style scoped>

</style>

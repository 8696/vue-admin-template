<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h2>Logo配置</h2>
        </div>
        <div class="card-body">

          <h3>获取格式化菜单</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <span>
            this.__getStoreConfig('menuFormatList')
            </span>
          </div>
          <br>
          <h3>配置说明</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <pre>
[
  {
    "title": "首页",
    "icon": "tachometer-alt",
    "routeName": "home",
    "link": "",
    "id": 1,
    "parentID": 0
  }
]
            </pre>
            <span>
              菜单每一项为 title(标题) | icon(图标) | routeName(vue路由名称) | id(唯一ID) | parentID(父ID) | link(外链地址) 组成。
              其中无限级菜单由 id 和 parentID 关联组成。当同时存在 routeName 和 link 优先级为 routeName -> link
            </span>
          </div>
          <br>
          <h3>设置菜单</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <span>
                 this.__setStoreConfig('menuList', menuList); 注意：menuList 为原始数据
            </span>
          </div>
          <br>
          <h3>实例</h3>
          <br>
          <div>
            <el-tree
              ref="tree"
              node-key="id"
              show-checkbox
              @check-change="checkChange"
              :default-checked-keys="defaultCheckedKeys"
              :data="menuFormatList"
              :props="defaultProps"></el-tree>
          </div>
          <br>
          <h3>配置信息</h3>
          <br>
          <div>原始配置</div>
          <br>
          <div style="opacity: .5;font-size: 13px;">
          <pre>
{{__menuList}}
          </pre>
          </div>
          <div>格式化配置</div>
          <br>
          <div style="opacity: .5;font-size: 13px;">
          <pre>
{{__menuFormatList}}
          </pre>
          </div>
        </div>

      </div>
    </el-row>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        menuFormatList: [],
        menuList: [],
        defaultProps: {
          children: 'children',
          label: 'title'
        },
        defaultCheckedKeys: []
      };
    },
    mounted() {
      this.menuFormatList = this.__getStoreConfig('menuFormatList');
      this.menuList = this.__getStoreConfig('menuList');
      this.__getStoreConfig('menuList').forEach(item => {
        this.defaultCheckedKeys.push(item.id);
      });
    },
    computed: {},
    methods: {
      checkChange() {
        // 选中的 ID 集合
        let checkedID = this.$refs.tree.getCheckedNodes(false, true).map(item => {
          return item.id;
        });

        let menuList = this.menuList.filter(item => {
          return checkedID.includes(item.id);
        });

        console.log(JSON.stringify(menuList,null,'\t'))
        this.__setStoreConfig('menuList', menuList);

      }
    }
  };
</script>

<style scoped>

</style>

<template>
  <div>
    <el-row>
      <div class="card">
        <div class="card-header">
          <h1 style="font-size: 28px;padding-top: 12px">菜单列表配置</h1>
        </div>
        <div class="card-body">


          <h3>基本配置</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <pre>
格式：
    [
      {
        title: String,
        icon: String,
        route: String,
        link: String,
        id: Number,
        parentId: Number,
        type: Number,
        order: Number,
        permission: String
      }
    ]

说明：
    title       ->   名称
    icon        ->   图标(支持Font Awesome和element-ui图标)
    route       ->   vue-router名称
    link        ->   外链地址
    id          ->   唯一ID
    parentId    ->   父ID
    type        ->   类型 1: 目录 | 2: 菜单 | 3: 按钮
    order       ->   排序
    permission  ->   权限

其中无限级菜单由 id 和 parentId 关联组成。当同时存在 route 和 link 优先级为 route -> link

完整示例：
    [
      {
        id: 1,
        parentId: 0,
        title: '系统管理',
        type: 0,
        icon: 'cogs',
        order: 0,
        route: '',
        link: '',
        permission: '',
      },
      {
        id: 2,
        parentId: 1,
        title: '用户管理',
        type: 1,
        icon: '',
        order: 0,
        route: 'system-menu',
        link: '',
        permission: 'system-user',
      },
      {
        id: 3,
        parentId: 2,
        title: '用户列表',
        type: 2,
        icon: '',
        order: 0,
        route: '',
        link: '',
        permission: 'system-user',
      },
      {
        id: 4,
        parentId: 2,
        title: '添加用户',
        type: 2,
        icon: '',
        order: 0,
        route: '',
        link: '',
        permission: 'system-add-user',
      },
      {
        id: 5,
        parentId: 2,
        title: '删除用户',
        type: 2,
        icon: '',
        order: 0,
        route: '',
        link: '',
        permission: 'system-remove-user',
      },
      {
        id: 10,
        parentId: 0,
        title: '商家管理',
        type: 0,
        icon: '',
        order: 0,
        route: '',
        link: '',
        permission: '',
      },
      {
        id: 11,
        parentId: 10,
        title: '商家列表',
        type: 1,
        icon: '',
        order: 0,
        route: '',
        link: '',
        permission: '',
      },
      {
        id: 12,
        parentId: 11,
        title: '商家更新',
        type: 2,
        icon: '',
        order: 0,
        route: '',
        link: '',
        permission: 'store-update',
      },
      {
        id: 13,
        parentId: 11,
        title: '商家删除',
        type: 2,
        icon: '',
        order: 0,
        route: '',
        link: '',
        permission: 'store-update',
      }
    ]

格式化后：
    [
      {
        'id': 1,
        'parentId': 0,
        'title': '系统管理',
        'type': 0,
        'icon': 'cogs',
        'order': 0,
        'route': '',
        'link': '',
        'permission': '',
        'children': [{
          'id': 2,
          'parentId': 1,
          'title': '用户管理',
          'type': 1,
          'icon': '',
          'order': 0,
          'route': 'system-menu',
          'link': '',
          'permission': 'system-user',
          'children': [{
            'id': 3,
            'parentId': 2,
            'title': '用户列表',
            'type': 2,
            'icon': '',
            'order': 0,
            'route': '',
            'link': '',
            'permission': 'system-user'
          }, {
            'id': 4,
            'parentId': 2,
            'title': '添加用户',
            'type': 2,
            'icon': '',
            'order': 0,
            'route': '',
            'link': '',
            'permission': 'system-add-user'
          }, {
            'id': 5,
            'parentId': 2,
            'title': '删除用户',
            'type': 2,
            'icon': '',
            'order': 0,
            'route': '',
            'link': '',
            'permission': 'system-remove-user'
          }]
        }]
      }, {
        'id': 10,
        'parentId': 0,
        'title': '商家管理',
        'type': 0,
        'icon': '',
        'order': 0,
        'route': '',
        'link': '',
        'permission': '',
        'children': [{
          'id': 11,
          'parentId': 10,
          'title': '商家列表',
          'type': 1,
          'icon': '',
          'order': 0,
          'route': '',
          'link': '',
          'permission': '',
          'children': [{
            'id': 12,
            'parentId': 11,
            'title': '商家更新',
            'type': 2,
            'icon': '',
            'order': 0,
            'route': '',
            'link': '',
            'permission': 'store-update'
          }, {
            'id': 13,
            'parentId': 11,
            'title': '商家删除',
            'type': 2,
            'icon': '',
            'order': 0,
            'route': '',
            'link': '',
            'permission': 'store-update'
          }]
        }]
      }
    ]
          </pre>

          </div>
          <br>
          <h3>设置菜单</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <span>
                 this.__setStoreConfig('menuList', menuList); 注意：menuList 为原始数据、并且会过滤掉type为2的项目
            </span>
          </div>
          <br>
          <h3>获取格式化菜单</h3>
          <br>
          <div style="opacity: .5;font-size: 13px;">
            <span>
            this.__getStoreConfig('menuFormatList')
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
          label: 'name'
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

import {mapState, mapMutations} from 'vuex';
import {deepCopy, getParentJson} from '../utils/utils';


export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      /**
       * @description 菜单折合状态
       * @type {Boolean}
       * */
      __menuCollapseStatus: state => state.__menu.collapse,
      /**
       * @description 当前菜单的路由父子集合
       * @type {Array}
       * */
      __menuCurrentPaths: state => state.__menu.currentPaths,
      /**
       * @description 原始菜单数据
       * @type {Array}
       * */
      __menuList: state => state.__menu.list,
      /**
       * @description 格式化后的菜单数据
       * @type {Array}
       * */
      __menuFormatList: state => state.__menu.formatList,
      /**
       * @description tags 对象集合
       * @type {Array}
       * */
      __tagsList: state => state.__tags.list,
    }),
    /**
     * @description 当前路由菜单项
     * @type {Array}
     * */
    __currentRoute() {
      return this.__menuCurrentPaths[this.__menuCurrentPaths.length - 1];
    }

  },
  methods: {
    ...mapMutations('__menu', {
      /**
       * @description 设置菜单的折合状态
       * @param {Boolean}
       * */
      __setMenuCollapseStatus: 'setCollapseStatus',
      /**
       * @description 设置当前菜单的路由父子集合
       * @param {Array}
       * */
      __setMenuCurrentPaths: 'setCurrentPaths',
      /**
       * @description 设置原始菜单数据
       * @param {Array}
       * */
      __setMenuList: 'setList',
    }),
    ...mapMutations('__tags', {
      /**
       * @description 往 tsgs 集合里添加一项
       * @param {Object}
       * */
      __pushTagsList: 'pushList',
      /**
       * @description 删除 tags 的一项
       * @param id {Number}
       * */
      __sliceTagsOneItem: 'sliceOneItem',
      /**
       * 根据 ID 设置一项为 active
       * @param id {Number}
       * */
      __setTagsOneItemActive: 'setOneItemActive'
    }),


    /**
     * @description 设置当前菜单的路由父子集合
     * */
    __initMenuCurrentPaths() {
      let routerName = this.$route.name;
      let activeRouteItem = this.__menuList.find(item => {
        return item.routeName === routerName;
      });
      // 匹配首页
      let homeRouteName = this.$router.resolve('/').resolved.name;
      let home = this.__menuList.find(item => {
        return item.routeName === homeRouteName;
      });
      let title = [home];

      if (activeRouteItem) {
        // 合并其他
        title = title.concat(getParentJson(this.__menuList, activeRouteItem.id).map(item => {
          item = deepCopy(item);
          return item;
        }).reverse());

        // 去重,两个都是首页的情况
        if (title[0].routeName === title[1].routeName) {
          title.length = 1;
        }

        this.__setMenuCurrentPaths(title);

      } else {
        title = title.concat([{routerName: '404', title: '404', children: []}]);
        // 404
        this.__setMenuCurrentPaths(title);
      }
      this.__setDocumentTitle();
    },
    /**
     * @description 设置文档标题
     * */
    __setDocumentTitle() {
      let __menuCurrentPaths = deepCopy(this.__menuCurrentPaths);
      if (__menuCurrentPaths.length >= 2) {
        __menuCurrentPaths.splice(0, 1);
      }
      document.title = __menuCurrentPaths.map(item => item.title).join('-') + ' - 后台管理系统';
    }
  }
};


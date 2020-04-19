import {mapState, mapMutations} from 'vuex';
import {deepCopy, getParentJson} from '../utils/utils';


export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      __menuCollapseStatus: state => state.__menu.collapse,
      __menuCurrentPaths: state => state.__menu.currentPaths,
      __menuList: state => state.__menu.list,
      __menuFormatList: state => state.__menu.formatList,
    })
  },
  methods: {
    ...mapMutations('__menu', {
      __setMenuCollapseStatus: 'setCollapseStatus',
      __setMenuCurrentPaths: 'setCurrentPaths',
      __setMenuList: 'setList',
    }),

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
    __setDocumentTitle() {
      let __menuCurrentPaths = deepCopy(this.__menuCurrentPaths);
      if (__menuCurrentPaths.length >= 2) {
        __menuCurrentPaths.splice(0, 1);
      }
      document.title = __menuCurrentPaths.map(item => item.title).join('-') + ' - 后台管理系统';
    }
  }
};


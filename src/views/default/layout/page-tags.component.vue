<template>
  <div class="">

    <vue-scroll :ops="scrollOptions">
      <div @click="navAction" @contextmenu.prevent="navActionRight" class="tags-list">
        <div data-type="to"
             :data-name="item.routeName"
             :data-id="item.id"
             v-for="item in __tagsList" :class="{active: item.active}"
             class="item">
            <span data-type="to"
                  :data-name="item.routeName"
                  :data-id="item.id">{{item.title}}
            </span>
          <i v-if="__tagsList.length > 1" data-type="delete"
             :data-name="item.routeName"
             :data-id="item.id" class="el-icon-close"></i>
        </div>
      </div>
    </vue-scroll>


    <div
      @click="showTagsRightAction = false"
      v-if="showTagsRightAction"
      class="tags-right-action">
      <div v-if="showTagsRightAction" :style="tagsRightActionMenuPosition" class="tags-right-action-menu">
        <el-card class="box-card">
          <div @click="navActionRightHandle('刷新')" class="item">
            <span><i class="el-icon-refresh-right"></i></span>
            <span>刷新</span>
          </div>
          <div :class="{disable: __tagsList.length === 1}" @click.stop="navActionRightHandle('关闭')" class="item">
            <span><i class="el-icon-close"></i></span>
            <span>关闭</span>
          </div>
          <div class="line"></div>
          <div :class="{disable: !currentActionHasOther}" @click.stop="navActionRightHandle('关闭其他标签')" class="item">
            <span></span>
            <span>关闭其他标签</span>
          </div>
          <div :class="{disable: !currentActionHasLeft}" @click.stop="navActionRightHandle('关闭左侧标签')" class="item">
            <span></span>
            <span>关闭左侧标签</span>
          </div>
          <div :class="{disable: !currentActionHasRight}" @click.stop="navActionRightHandle('关闭右侧标签')" class="item">
            <span></span>
            <span>关闭右侧标签</span>
          </div>
          <div class="line"></div>
          <div @click="navActionRightHandle('新窗口打开')" class="item">
            <span></span>
            <span>新窗口打开</span>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import vueScroll from 'vuescroll';
  import {deepCopy} from '@/utils/utils';

  export default {
    components: {vueScroll},
    data() {
      return {
        scrollOptions: {
          vuescroll: {
            detectResize: true
          },
          rail: {
            opacity: 0,
          },
          bar: {
            size: '4px',
            showDelay: 500,
            keepShow: false,
            background: '#868686',
            opacity: .2,
            specifyBorderRadius: '0',
            onlyShowBarOnScroll: false
          }
        },
        tagsRightActionMenuPosition: {
          left: '10px',
          top: '',
          right: '',
          bottom: ''
        },
        showTagsRightAction: false,
        tagsRightActionID: null,
        tagsRightActionName: null,

      };
    },
    computed: {
      /**
       * @description 当前选中的标签是否存在左侧的标签
       * */
      currentActionHasLeft() {
        let index = this.__tagsList.findIndex(item => {
          return this.tagsRightActionID === item.id;
        });
        let __tagsList = deepCopy(this.__tagsList);
        let t = [];
        for (let i = 0; i < __tagsList.length; i++) {
          if (i === index) {
            break;
          }
          t.push(this.__tagsList[i].id);
        }
        return t.length > 0;
      },
      /**
       * @description 当前选中的标签是否存在右侧的标签
       * */
      currentActionHasRight() {
        let index2 = this.__tagsList.findIndex(item => {
          return this.tagsRightActionID === item.id;
        });
        let __tagsList2 = deepCopy(this.__tagsList);
        let t2 = [];
        for (let i = 0; i < __tagsList2.length; i++) {
          if (i <= index2) {
            continue;
          }
          t2.push(this.__tagsList[i].id);
        }
        return t2.length > 0;
      },
      /**
       * @description 当前选中的标签是否存在其他标签
       * */
      currentActionHasOther() {
        return this.__tagsList.length > 1;
      },

    },

    methods: {
      /**
       * @description tags 操作
       * */
      navAction($event, deleteID = null, deleteName = null) {
        let type = '',
          name = '',
          id = '';
        if (deleteID === null) {
          type = $event.target.getAttribute('data-type');
          name = $event.target.getAttribute('data-name');
          id = $event.target.getAttribute('data-id');

        } else {
          type = 'delete';
          id = deleteID;
        }

        if (type === 'to') {
          return this.$router.push2({name}, () => {
          });
        }
        // 删除
        this.__sliceTagsOneItem(id);
        // 删除后最后为 0 项，则跳转至首页
        if (this.__tagsList.length === 0) {
          return this.$router.replace({path: '/'}, () => {
          });
        }
        // 删除后所有 active 为 false ，则挑选最后一项为 active
        let active = this.__tagsList.some(item => {
          return item.active;
        });
        if (!active) {
          this.__setTagsOneItemActive(this.__tagsList[this.__tagsList.length - 1].id);
          this.$router.push2({name: this.__tagsList[this.__tagsList.length - 1].routeName}, () => {
          });
        }

      },
      /**
       * @description tags 一项触发右键
       * */
      navActionRight($event) {
        this.showTagsRightAction = true;
        this.tagsRightActionID = Number($event.target.getAttribute('data-id'));
        this.tagsRightActionName = $event.target.getAttribute('data-name');
        if ($event.pageX + 170 >= window.innerWidth) {
          this.tagsRightActionMenuPosition.left = 'auto';
          this.tagsRightActionMenuPosition.right = '0px';
        } else {
          this.tagsRightActionMenuPosition.left = $event.pageX + 'px';
          this.tagsRightActionMenuPosition.right = 'auto';
        }
        this.tagsRightActionMenuPosition.top = $event.pageY + 'px';
        let c = () => {
          this.showTagsRightAction = false;
          document.removeEventListener('click', c);
        };
        document.addEventListener('click', c);
      },
      /**
       * @description 右键详细操作
       * @param type {String}
       * */
      navActionRightHandle(type) {

        switch (type) {
          case '刷新':
            let activeIndex = this.__tagsList.findIndex(item => {
              return this.tagsRightActionID === item.id;
            });

            this.$router.replace2({
              name: 'reload',
              query: {
                name: this.tagsRightActionName,
                index: activeIndex,
                id: this.tagsRightActionID
              }
            });
            break;
          case '关闭':
            if (this.__tagsList.length > 1) {
              this.showTagsRightAction = false;
            }
            if (this.__tagsList.length === 1) return;
            this.navAction(null, this.tagsRightActionID);
            break;
          case '关闭其他标签':
            if (this.__tagsList.length > 1) {
              this.showTagsRightAction = false;
            }
            this.__tagsList.forEach(item => {
              if (this.tagsRightActionID !== item.id) {
                this.navAction(null, item.id);
              }
            });

            break;
          case '新窗口打开':
            let matchedRoute = this.$router.resolve({name: this.tagsRightActionName});
            window.open(matchedRoute.href);
            break;
          case '关闭左侧标签':
            let index = this.__tagsList.findIndex(item => {
              return this.tagsRightActionID === item.id;
            });
            let __tagsList = deepCopy(this.__tagsList);
            let t = [];
            for (let i = 0; i < __tagsList.length; i++) {
              if (i === index) {
                break;
              }
              t.push(this.__tagsList[i].id);
            }
            t.forEach(item => {
              this.navAction(null, item);
            });
            if (t.length > 0) {
              this.showTagsRightAction = false;
            }

            break;
          case '关闭右侧标签':
            let index2 = this.__tagsList.findIndex(item => {
              return this.tagsRightActionID === item.id;
            });
            let __tagsList2 = deepCopy(this.__tagsList);
            let t2 = [];
            for (let i = 0; i < __tagsList2.length; i++) {
              if (i <= index2) {
                continue;
              }
              t2.push(this.__tagsList[i].id);
            }
            t2.forEach(item => {
              this.navAction(null, item);
            });
            if (t2.length > 0) {
              this.showTagsRightAction = false;
            }

            break;
        }
      }

    }
  };
</script>

<style scoped>

</style>

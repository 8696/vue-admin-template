/**
 * @description fort awesome 字体
 * @doc https://fontawesome.com/
 * */

// 全量引入
/*
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {fas} from '@fortawesome/free-solid-svg-icons';
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
  Object.keys(fas).forEach(item => {
    library.add(fas[item]);
  });
*/

// 按需引入
import {library} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

import {
  faTachometerAlt,
  faFileAlt,
  faChartArea,
  faTable,
  faLink,
  faBars,
  faShoppingCart,
  faUsers,
  faMoneyBillAlt,
  faCity,
  faStickyNote,
  faMarker,
  faMapMarked,
  faFont,
  faCopy,
  faLaptopCode,
  faStore,
  faThumbtack,
  faCode,
  faEdit,
  faBraille,
  faColumns
} from '@fortawesome/free-solid-svg-icons';

library.add(faTachometerAlt);
library.add(faFileAlt);
library.add(faChartArea);
library.add(faTable);
library.add(faLink);
library.add(faBars);
library.add(faShoppingCart);
library.add(faUsers);
library.add(faMoneyBillAlt);
library.add(faCity);
library.add(faMapMarked);
library.add(faMarker);
library.add(faStickyNote);
library.add(faFont);
library.add(faCopy);
library.add(faLaptopCode);
library.add(faStore);
library.add(faThumbtack);
library.add(faCode);
library.add(faEdit);
library.add(faBraille);
library.add(faColumns);


export default function install(Vue) {
  Vue.component('font-awesome-icon', FontAwesomeIcon);
}

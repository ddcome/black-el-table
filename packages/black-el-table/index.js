// 导入组件，组件必须声明 name
import BlackElTable from './src/main.vue';

// 为组件添加 install 方法，用于按需引入
BlackElTable.install = function (Vue) {
	Vue.component(BlackElTable.name, BlackElTable);
};

export default BlackElTable;
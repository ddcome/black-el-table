/**
 * 按需加载 element-ui 组件
 * @description
 * [参考官网 - 按需加载](https://element.eleme.cn/#/zh-CN/component/quickstart#an-xu-yin-ru)
 */
import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';

// 方式一：按需加载
// import { ElTable, ElTag, Loading, Message } from 'element-ui';
//
// Vue.use(ElTable);
// Vue.use(ElTag);
// Vue.use(Loading.directive);
//
// Vue.prototype.$loading = Loading.service;
// Vue.prototype.$message = Message;

// 方式二：完整加载方式
import ElementUI from 'element-ui';
Vue.use(ElementUI, { size: 'small' });

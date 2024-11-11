/*
|--------------------------------------------------------------------------
|
| 这些组件暴露给使用方
|
|--------------------------------------------------------------------------
*/
import App from './App.vue';
import HelloWorld from './HelloWorld.vue';
import Test from './Test.vue';
import * as Tools from './Tools.js';
console.log('Tools', Tools)
export default {
  App,
  HelloWorld,
  Test,
  Tools
};

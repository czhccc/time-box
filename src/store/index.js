import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'

// 1.安装插件
Vue.use(Vuex)

// 2.创建 store（仓库）对象
const state = {
  
}
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

// 3.导出store，挂载到 Vue 实例中
export default store
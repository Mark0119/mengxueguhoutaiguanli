import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  // 数据存储
  state: {
    // 数据渲染所需参数
    total:0,
    size:20,
    current:1,
    // 数据渲染
    newGetList:[],
    // 数据接口对象
    ListObj:{},
  },
  // 数据更改
  mutations: {
    // 静态
    // 数据接口
    lISToBJ(state,val){
      state.ListObj=val
    },
    // 将数据清空
    NEwgETlIST(state){
      state.newGetList=[]
    },



    // 动作
    lISToBJ_Action(state){
      state.ListObj(state.current,state.size).then(res=>{
        state.total=res.data.data.total
        state.newGetList=res.data.data.rows
        console.log(state.newGetList)
      })
    }
  },
  // 数据计算属性
  getters(){

  },
  // 异步更改数据
  actions: {},
  // 模块化
  modules: {}
});

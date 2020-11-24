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
    DELnumID:0,
    // 数据接口对象
    ListObj:{},
    DeltObj:{},
  },
  // 数据更改
  mutations: {
    // 分页器数据
    Current(state,val){
     state.current=val
    },
    Size(state,val){
     state.size=val
    },




    // 静态
    // 数据接口
    lISToBJ(state,val){
      state.ListObj=val
    },
    // 删除接口
    DELoBJ(state,val){
      state.DeltObj=val
    },
    // 将数据清空
    NEwgETlIST(state){
      state.newGetList=[]
    },
    // 将要删除的ID传递
    DELID(state,val){
      state.DELnumID=val
    },



    // 动作
    // 获取数据
    lISToBJ_Action(state){
      state.ListObj(state.current,state.size).then(res=>{
        state.total=res.data.data.total//拿到页数
        state.newGetList=res.data.data.rows//拿到数据
      })
    },
    // 删除单条
    DELGOODS_Action(state){
      state.DeltObj(state.DELnumID).then(res=>{
        if (res.data.code===2000){
          Vue.prototype.$message.success('删除成功')
          this.commit('lISToBJ_Action')
        }else{
          Vue.prototype.$message.error('删除失败')
        }
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

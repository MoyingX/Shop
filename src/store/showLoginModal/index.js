export default {
    namespaced:true,    //开辟内存空间
    state:{
        //登录窗口的显示true或者隐藏false
        isShowLoginModal:true
    },
    mutations:{
        ChangeIsShowLoginModal(state,payload){
            state.isShowLoginModal = payload
        }
    },
    actions:{

    },

}
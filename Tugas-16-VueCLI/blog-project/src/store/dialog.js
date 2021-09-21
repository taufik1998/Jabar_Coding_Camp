export default {
    namespaced : true,
    state : {
        status : false,
        component : '',
        params : {}
    },
    mutations : {
        setstatus : ( state , status) => {
            state.status = status
        },
        setcomponent : (state, {component , params}) => {
            state.component = component
            state.params = params
        },
        actions : {
            setstatus : ({commit} , status) => {
                commit('setstatus' , true)
            },
        },
        getters : {
            status : state => state.status,
            component : state => state.component,
            params : state => state.params,
        }
    }
}
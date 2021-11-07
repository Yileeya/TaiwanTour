import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        isLoading: false,
        authorizationHeader: {}
    },
    mutations: {
        ['UPDATE_LOADING'](state, isLoading) {
            state.isLoading = isLoading;
        },
        ['UPDATE_AUTHORIZATION_HEADER'](state, authorizationHeader) {
            state.authorizationHeader = authorizationHeader;
        },
    },
    actions: {
    },
    getters: {
        // isLoading(state) {
        //     return state.isLoading;
        // },
    },
    modules: {}
});

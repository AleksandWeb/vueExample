import {SET_VIEW} from './mutation-types'

export default {
    state: {
        views: [
            {
                id: 1,
                name: "apiData",
                active: false
            },
            {
                id: 2,
                name: "apiProducts",
                active: false
            },
            {
                id: 3,
                name: "apiCart",
                active: false
            }
        ]
    },
    mutations: {
        [SET_VIEW] (state, viewId) {
            state.views.forEach((view) => {
                view.active = view.id === viewId;
            });
        }
    },
    actions: {
        setView({ commit }, {viewId}) {
            commit('SET_VIEW', viewId);
        }
    }



}
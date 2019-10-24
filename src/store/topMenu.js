import {SET_ACTIVE} from './mutation-types'

export default {
    state: {
        items: [
            {
                id: 1,
                name: "1. Вывод данных",
                active: true,
                viewId: 1
            },
            {
                id: 2,
                name: "2. Вывод товаров категорий",
                active: false,
                viewId: 2
            },
            {
                id: 3,
                name: "Корзина",
                active: false,
                viewId: 3
            },
        ]
    },
    mutations: {
        [SET_ACTIVE](state, item) {
            state.items.forEach((dataItem) => {
                dataItem.active = item.id === dataItem.id;
            });
        }
    },
    actions: {
        topMenuClick({ commit }, {item}) {
            commit('SET_ACTIVE', item);
            commit('SET_VIEW', item.viewId);
        }
    }

}
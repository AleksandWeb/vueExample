import {SET_ACTIVE} from './mutation-types'

export default {
    state: {
        items: [
            {
                id: 1,
                name: "Вывод данных",
                active: true,
                viewId: 1,
                layout: "MainLayout"
            },
            {
                id: 2,
                name: "Вывод товаров",
                active: false,
                viewId: 2,
                layout: "MainLayout"
            },
            {
                id: 3,
                name: "Корзина",
                active: false,
                viewId: 3,
                layout: "CartLayout"
            },
        ],
        layout: "MainLayout"
    },
    mutations: {
        [SET_ACTIVE](state, item) {
            state.items.forEach((dataItem) => {
                if(item.id === dataItem.id) {
                    state.layout = dataItem.layout;
                    dataItem.active = true;
                } else {
                    dataItem.active = false;
                }
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
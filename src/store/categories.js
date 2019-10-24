import {
    SET_CATEGORY_ACTIVE,
    SET_CATEGORY_COMPONENT,
    SET_PRODUCTS
} from "@/store/mutation-types";

export default {
    state: {
        apiUrl: "http://vue-tests.dev.creonit.ru/api/catalog/",
        items: [
            {
                ident: "shiny",
                name: "Шины",
                active: false
            },
            {
                ident: "diski",
                name: "Диски",
                active: false
            }
        ],
        activeItem: {
            ident: "",
            name: "",
            active: false
        },
        fetchResult: "",
        needUpdate: false,
        component: "info"
    },
    mutations: {
        [SET_CATEGORY_ACTIVE](state, ident) {

            if(state.activeItem.ident === ident) {
                state.needUpdate = false;
                return false;
            } else {
                state.items.forEach((item) => {
                    if (ident === item.ident) {
                        item.active = true;
                        state.needUpdate = true;
                        this.commit(SET_CATEGORY_COMPONENT, "preloader");
                        state.activeItem = item;
                    } else {
                        item.active = false;
                    }
                });
            }
        },

        [SET_CATEGORY_COMPONENT](state, name) {
            state.component = name;
        }
    },
    actions: {
        setCategory({ state, commit }, {ident}) {

            commit(SET_CATEGORY_ACTIVE, ident);

            if(state.needUpdate) {
                const requestUrl = state.apiUrl + ident;

                const getOptions = () => {
                    return {
                        method: 'GET',
                        headers: {
                            Accept: 'application/json',
                        }
                    }
                };

                let fetchCategory = fetch(requestUrl, getOptions());

                fetchCategory.then(function(response){
                    response.json().then(function (d) {
                        commit(SET_CATEGORY_COMPONENT, "fetchResult");
                        state.fetchResult = d;
                        if (response.status === 200) {
                            commit(SET_PRODUCTS, d.items);
                        }
                    });
                });
            }
        }
    }
}
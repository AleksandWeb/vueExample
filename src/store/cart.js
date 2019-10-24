import {SET_CART_PRODUCTS, SET_CART_COMPONENT} from "@/store/mutation-types";

export default {
    state: {
        apiUrl: "http://vue-tests.dev.creonit.ru/api/cart/list",
        products: [],
        component: "preloader"
    },
    mutations: {
        [SET_CART_PRODUCTS](state, products) {
            state.products = products;
        },
        [SET_CART_COMPONENT](state, name) {
            state.component = name;
        }
    },
    actions: {

        getCartProducts({state, commit}) {
            commit(SET_CART_COMPONENT, "preloader");
            const getOptions = () => {
                return {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                    }
                }
            };

            let fetchGetCart = fetch(state.apiUrl, getOptions());

            fetchGetCart.then(function(response){
                response.json().then(function (d) {
                    if (response.status === 200) {
                        commit(SET_CART_COMPONENT, "productList");
                        commit(SET_CART_PRODUCTS, d.list);
                    } else {
                        if(typeof d.error.message === "string") {
                            alert(d.error.message);
                        }
                    }
                });
            });

        }

    }

}
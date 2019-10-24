//import {ADD_TO_CART} from "@/store/mutation-types";
import {SET_PRODUCTS} from "@/store/mutation-types";

export default {
    state: {
        apiUrl: "http://vue-tests.dev.creonit.ru/api/cart/product/",
        products: []
    },
    mutations: {
        [SET_PRODUCTS](state, products) {
            state.products = [...products];
        }
    },
    actions: {

        addToCart({state}, {id}) {

            const requestUrl = state.apiUrl + id;

            const getOptions = () => {
                return {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                    }
                }
            };

            let fetchToCart = fetch(requestUrl, getOptions());

            fetchToCart.then(function(response){
                response.json().then(function (d) {
                    if (response.status === 200) {
                        alert('Товар добавлен');
                    } else {
                        if(typeof d.error.message === "string") {
                            alert(d.error.message);
                        } else {
                            alert('error');
                        }
                    }
                });
            });

        }

    }

}
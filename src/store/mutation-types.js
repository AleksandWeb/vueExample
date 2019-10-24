/**topMenu.js Верхнее меню:*/

/** [SET_ACTIVE](state, item)
 *  устанавливает `active: true` у данного элемента, `active: false` у отстальных,
 *  вызывает мутацию SET_VIEW view.js
 */
export const SET_ACTIVE = 'SET_ACTIVE';


/**view.js Шаблоны отображения контента:*/

/** [SET_VIEW](state, viewId)
 *  устанавливает `active: true` у элемента c id = viewId
 */
export const SET_VIEW = 'SET_VIEW';



/**categories.js */

/** [SET_CATEGORY_ACTIVE](state, ident)
 *  устанавливает `active: true` у элемента c таким ident, `active: false` у отстальных
 *  вызывается в actions: setCategory()
 */
export const SET_CATEGORY_ACTIVE = 'SET_CATEGORY_ACTIVE';

/** [SET_CATEGORY_ACTIVE](state, name)
 *  устанавливает компонент который нужно показать
 *  вызывается в actions: setCategory()
 */
export const SET_CATEGORY_COMPONENT = 'SET_CATEGORY_COMPONENT';


/**products.js */

/** [SET_PRODUCTS](state, products)
 *  обновляет state.products пришедшими в запросе товарами
 *  вызывается в actions: setCategory()
 */
export const SET_PRODUCTS = 'SET_PRODUCTS';


/**cart.js */

/** [SET_CART_PRODUCTS](state, products)
 *  обновляет state.products пришедшими в запросе товарами
 *  вызывается в actions: getCartProducts()
 */
export const SET_CART_PRODUCTS = 'SET_CART_PRODUCTS';

/** [SET_CART_COMPONENT](state, name)
 *  устанавливает компонент который нужно показать
 *  вызывается в actions: getCartProducts()
 */
export const SET_CART_COMPONENT = 'SET_CART_COMPONENT';
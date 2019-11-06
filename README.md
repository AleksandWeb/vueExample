# vuelesson

API http://vue-tests.dev.creonit.ru/openapi/
Метод /catalog/{slug}, принимает slug из списка: shiny, diski
Методы /cart/product/ принимают значения: 1,2,3,5

1. Без макетов, просто вывести данные которые приходят из API. Данные вывести в соответствии с собственным чувством прекрасного. 
2. Сделать переключение по категориям и вывод соответствующих категории товаров. 
3. Сделать кнопку добавления в корзину у товаров которые пришли из API. По клику на кнопку должно срабатывать добавление в корзину метод /cart/product/.


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

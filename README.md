# Просмотр проекта

https://currencyconverter-bee8e.web.app/info 

## Задание
Напишите SPA для конвертирования валют. Для получения текущих курсов найдите и используйте любое отрытое API.

Приложение должно состоять из двух страниц:

Конвертер из одной валюты в другую. На этой странице должно быть текстовое поле и блок с выбором валют.

Страница с текущими курсами валют. На этой странице пользователь должен видеть «свежие» курсы валют относительно базовой валюты — например, если базовая валюта — рубль, то пользователь видит, что 1 USD = 63.49 RUB, а 1 EUR = 72.20

## Детали реализации 

Задание выполнено на React.js в связке с Redux toolkit, использовалось API https://www.cbr-xml-daily.ru/daily_json.js 
Для перехода по страницам использовался react-router-dom. 

Страница с текущими курсами валют доступна по пути '/info' - на ней содержится таблица с текущими курсами валют и текстовое поле для поиска валют по названию

Страница с конвертером доступна по пути '/converter' - на ней содержится 2 текстовых поля (для ввода и отображения значения валют), блок для выбора валют.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

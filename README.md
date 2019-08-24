<h1 align="center"> vue-spa </h1>
<p align="center"> 👍 Laravel Application.</p>
## Installing

```shell
npm install -g npm

npm install

npm install vue-router --save
```

#### Create database
```shell
touch database.sqlit

php artisan migrate
```

#### configuration
```
# The domain name of your project
APP_URL=http://127.0.0.1:8000
```

## Usage

#### `resources/js/routes.js`

```js

import VueRouter from 'vue-router'

let routes = [
    {
        path: '/',
        components: require('./components/Home')
    },
    {
        path: '/about',
        components: require('./components/About')
    }
]

export default new VueRouter({
    mode:'history',
    routes
})
```

#### `resources/js/app.js`

```js

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './routes'

Vue.use(VueRouter)

new Vue({
    el: '#app',
    router // router : router
});

```


#### `resources/js/components/About.vue`
```html
<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">About Page</div>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
```

#### `resources/views/layouts/master.blade.php`

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel Vue SPA</title>
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">

</head>
<body>

<div id="app"></div>

<script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
```

#### `routes/web.php`

```php
Route::get('/', function () {
    return view('layouts.master');
});
```



### Node

```shell
npm run watch
```


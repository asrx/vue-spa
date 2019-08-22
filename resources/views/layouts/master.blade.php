<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Laravel Vue SPA</title>
    <link rel="stylesheet" href="{{ asset('/css/app.css') }}">

</head>
<body>

<div id="app">
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">
            <router-link to="/"> Vue-SPA </router-link>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <router-link to="/about" class="p-2 text-dark">
                about
            </router-link>
        </nav>
    </div>

    <router-view></router-view>
</div>

<script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>

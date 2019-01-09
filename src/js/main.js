//=require ../../node_modules/object-fit-images/dist/ofi.min.js

//=require partials/app.js
$(document).ready(function () {
    App.init();
    new WOW().init();
});

$('.comments__main').mCustomScrollbar({
    axis: 'y'
});
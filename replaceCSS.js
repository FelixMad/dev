var incidencia = "WKTIII-000";
var file = "stylesEShopCss";

var server = document.head.querySelector('link[href*="'+file+'"]');

var local = document.createElement('link');
local.type = 'text/css';
local.rel = 'stylesheet';
local.href = 'https://localhost:8888/INCIDENCIAS/'+incidencia+'/'+file+'.css';

document.head.replaceChild(local, server);
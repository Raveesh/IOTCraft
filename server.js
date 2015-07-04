var zetta = require('zetta');
var LED = require(' zetta-led-edison-driver')
var BUZZER = require('zetta-buzzer-edison-driver');
var homeSecurity = require('./apps/homeSecurity');
zetta().name('Raveesh-Sharma').use(LED,13).use(BUZZER,3).listen(1337,function(){
console.log('Zetta server is running on port 1337');
});

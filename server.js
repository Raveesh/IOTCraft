var zetta = require('zetta');
var LED = require(' zetta-led-edison-driver')

zetta().name('Raveesh-Sharma').use(LED,13).listen(1337,function(){
console.log('Zetta server is running on port 1337');
});

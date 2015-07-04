module.exports = function(server) {
 
  var ledQuery = server.where({type: 'led'});
  var pirQuery = server.where({type: 'pir'});
 
  server.observe([ledQuery, pirQuery], function(led, pir){
    pir.streams.motionStatus.on('data', function(m) {
      if (pir.state === 'motion') {
        led.call('turn-on', function() {});
      }
      else {
        led.call('turn-off', function(err) {})
      }
    });
  });
}

var twilio = require('twilio')('AC22f1d324c1e5798b710b52abdb052fb2','f2ef26387abaa59a5e39794b2239a3b6');
module.exports = function(server) {

  var ledQuery = server.where({type: 'led'});
  var pirQuery = server.where({type: 'pir'});

  server.observe([ledQuery, pirQuery], function(led, pir){
    pir.streams.motionStatus.on('data', function(m) {
      if (pir.state === 'motion') {
        twilio.sendMessage({

    to:'+919845677962', // Any number Twilio can deliver to
    from: '+17543336832', // A number you bought from Twilio and can use for outbound communication
    body: 'Test Message' // body of the SMS message

});
        led.call('turn-on', function() {});
      }
      else {
        led.call('turn-off', function(err) {})
      }
    });
  });
}

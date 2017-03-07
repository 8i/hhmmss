module.exports = function(n, options) {
  var options = options || {};

  var h = Math.floor(n / 3600);
  var hours = h > 9 ? h : '0' + h,
    mins = '0' + Math.floor((n % 3600) / 60),
    secs = '0' + Math.floor((n % 60)),
    millis = (n % 1).toFixed(3);

  mins = mins.substr(mins.length - 2);
  secs = secs.substr(secs.length - 2);

  var timestamp = '00:00';

  if(!isNaN(secs)){
    if (h || options.hours){
      timestamp = hours+':'+mins+':'+secs;
    } else {
      timestamp = mins+':'+secs;
    };

    if (options.millis) {
      timestamp += '.' + millis.toString().split('.')[1];
    }
  }

  return timestamp;
};
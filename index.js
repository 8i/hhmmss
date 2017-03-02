
module.exports = function(n, options) {

  var options = options || {};

  var h = Math.floor(n / 3600);
  var hours = h > 9 ? h : '0' + h,
    mins = '0' + Math.floor((n % 3600) / 60),
    secs = '0' + Math.floor((n % 60));

  mins = mins.substr(mins.length - 2);
  secs = secs.substr(secs.length - 2);

  if(!isNaN(secs)){
    if (h || options.hours){
      return hours+':'+mins+':'+secs;
    } else {
      return mins+':'+secs;
    };
  } else {
    return '00:00';
  };

};


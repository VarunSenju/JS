
function getTime() {
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();

  if((hours % 12) < 10) {
    hours = '0' + (hours % 12);
  }
  if(minutes < 10) {
    minutes = '0' + minutes;
  }
  if(seconds < 10) {
    seconds = '0' + seconds;
  }

  var timeForPage = hours + ' : ' + minutes + ' : ' + seconds;
  var hexColorForPage = '#' + hours + minutes + seconds;
  //console.log(hexColorForPage);
  //console.log(timeForPage);

  document.querySelector('#clock').innerHTML = timeForPage;
  document.querySelector('#hex_color').innerHTML = hexColorForPage;

  document.body.style.backgroundColor = hexColorForPage;
}
getTime();
setInterval(getTime, 1000);

setInterval(function(){randomTransform(document.querySelector(".dog"))}, 2000);
setInterval(function(){randomTransform(document.querySelector(".dog2"))}, 2000);
setInterval(function(){randomTransform(document.querySelector(".dog3"))}, 2000);

// set a random css transform on the (el)ement
function randomTransform(el) {
  var trans = "matrix3d("+ran()+", -"+ran()+", "+ran()+", 0, "+ran()+", "+ran()+", "+ran()+", 0, -"+ran()+", 0, "+ran()+", 0, 0, 0, 0, 1)";

  // clear transform
  el.style.transform = "";
  el.style.webkitTransform = "";
  el.style.MozTransform = "";
  el.style.msTransform = "";
  el.style.OTransform = "";
  
  // set random transform
  el.style.webkitTransform = trans;
  el.style.MozTransform = trans;
  el.style.msTransform = trans;
  el.style.OTransform = trans;
  el.style.transform = trans;
}

function ran() {
    return Math.random();
}
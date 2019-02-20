let movement = 0;
window.onscroll = function() {
  movement += 1;
  header();
  body(movement);
};

function header() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("logo").className = "scroll-logo";
    document.getElementById("logo").style.width = "100px";
    let nav = document.getElementsByClassName("nav");
    for (let i = 0; i < nav.length; i++) {
      nav[i].style["font-size"] = "10px";
      nav[i].style["bottom"] = "25px";
      nav[i].style["transition"] = "font-size .3s";
      nav[i].style["transition"] = "bottom .3s";
    }
  } else {
    document.getElementById("logo").style.width = "150px";
    document.getElementById("logo").className = "";
    let nav = document.getElementsByClassName("nav");
    for (let i = 0; i < nav.length; i++) {
      nav[i].style["font-size"] = "15px";
      nav[i].style["bottom"] = "28px";
      nav[i].style["transition"] = "font-size .3s";
      nav[i].style["transition"] = "bottom .3s";
    }
  }
}
function body(x) {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    let videos = document.getElementsByClassName("video-box");
    for (let i = 0; i < videos.length; i++) {
      console.log(i, videos[i].offsetTop);
    }
  } else {
  }
}

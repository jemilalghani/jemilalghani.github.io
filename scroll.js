window.onscroll = function() {
  header();
};

function header() {
  if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    document.getElementById("logo").className = "scroll-logo";
    document.getElementById("logo").style.width = "100px";
    let nav = document.getElementsByClassName("nav");
    for (let i = 0; i < nav.length; i++) {
      nav[i].style["font-size"] = "10px";
      nav[i].style["bottom"] = "20px";
      nav[i].style["transition"] = "font-size .5s";
      nav[i].style["transition"] = "bottom .5s";
    }
  } else {
    document.getElementById("logo").style.width = "150px";
    document.getElementById("logo").className = "";
    let nav = document.getElementsByClassName("nav");
    for (let i = 0; i < nav.length; i++) {
      nav[i].style["font-size"] = "15px";
      nav[i].style["bottom"] = "28px";
      nav[i].style["transition"] = "font-size .5s";
      nav[i].style["transition"] = "bottom .5s";
    }
  }
}

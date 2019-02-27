window.onscroll = function() {
  header();
};

function header() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    let smallLogo = document.getElementById("logo");
    let smallLogoOutline = document.getElementById("logo-outline");
    smallLogo.className = "scroll-logo";
    smallLogo.style.width = "100px";
    smallLogoOutline.style.width = "104px";
    smallLogoOutline.style.height = "105px";
    smallLogoOutline.style.border = "solid 5px rgb(218, 122, 143)";
    let nav = document.getElementsByClassName("nav");
    for (let i = 0; i < nav.length; i++) {
      nav[i].style["font-size"] = "13px";
      nav[i].style["bottom"] = "50px";
      nav[i].style["transition"] = "font-size .3s";
      nav[i].style["transition"] = "bottom 1s";
      nav[i].style["color"] = "rgb(218, 122, 143)";
    }
  } else {
    let bigLogo = document.getElementById("logo");
    let bigLogoOutline = document.getElementById("logo-outline");
    // bigLogo.onmouseout.style.height = "120px";
    bigLogo.style.width = "120px";
    bigLogo.className = "";
    bigLogoOutline.style.width = "120px";
    bigLogoOutline.style.height = "120px";
    bigLogoOutline.style.border = "none";
    bigLogoOutline.style.border = "none;";
    let nav = document.getElementsByClassName("nav");
    for (let i = 0; i < nav.length; i++) {
      nav[i].style["font-size"] = "15px";
      nav[i].style["bottom"] = "60px";
      nav[i].style["transition"] = "font-size .3s";
      nav[i].style["transition"] = "bottom 1s";
      nav[i].style["color"] = "white";
    }
  }
}
function item() {
  const add = "./Anime Food/add-button-inside-black-circle.svg";
  // const one = "Anime Food/yellowsushi.gif";
  const oneB = "./Anime Food/a.png";
  const two = "./Anime Food/b.png";
  const three = "./Anime Food/c.png";
  const four = "./Anime Food/d.png";
  const five = "./Anime Food/e.png";
  const six = "./Anime Food/f.png";
  const seven = "./Anime Food/i.png";
  const eight = "./Anime Food/n.png";
  const nine = "./Anime Food/h.png";
  const ten = "./Anime Food/o.png";
  const eleven = "./Anime Food/p.png";
  const twelve = "./Anime Food/q.png";
  let store = [
    { id: 1, image: oneB, name: "オムライス", cost: "$20" },
    { id: 2, image: two, name: "ラーメン A", cost: "$15" },
    { id: 3, image: three, name: "弁当 C", cost: "$10" },
    { id: 4, image: four, name: "アイスクリーム", cost: "$5" },
    { id: 5, image: five, name: "弁当 A", cost: "$8" },
    { id: 6, image: six, name: "ラーメン B", cost: "$15" },
    { id: 7, image: seven, name: "ラーメン C", cost: "$15" },
    { id: 8, image: eight, name: "鯖の塩焼き", cost: "$10" },
    { id: 9, image: nine, name: "弁当 B", cost: "$10" },
    { id: 10, image: ten, name: "お茶", cost: "$2" },
    { id: 11, image: eleven, name: "握り寿司", cost: "$10" },
    { id: 12, image: twelve, name: "Assorted Bread", cost: "$2" }
  ];
  let parent = document.getElementById("store");
  if (parent.innerHTML.length == 0) {
    for (let i = 0; i < store.length; i++) {
      let totalbox = document.createElement("div");
      let text = document.createElement("div");
      let name = document.createElement("p");
      let cost = document.createElement("p");
      let item = document.createElement("img");
      let plus = document.createElement("img");
      let box = document.createElement("div");
      plus.className = "plus-icon";
      box.className = "force-size";
      item.className = "store-image loading";
      totalbox.className = "store-items";
      text.className = "store-info";
      text.append(name, cost);
      item.setAttribute("src", store[i].image);
      plus.setAttribute("src", add);
      name.append(store[i].name);
      cost.append(store[i].cost);
      box.append(item, plus);
      box.onclick = function() {
        document.getElementById("active-cart").style["display"] = "inherit";
        let escape = document.getElementById("popup");
        escape.style["display"] = "flex";
        let backdrop = document.getElementById("background");
        backdrop.style["display"] = "inherit";
        let populate = document.getElementById("item-cost");
        let populateName = document.getElementById("item-name");
        let populateImage = document.getElementById("item-image");
        // console.log(populate.hasChildNodes());
        if (populate.hasChildNodes()) {
          populate.removeChild(populate.childNodes[0]);
          populate.append(store[i].cost);
        } else {
          populate.append(store[i].cost);
        }
        if (populateImage.hasChildNodes()) {
          populateImage.removeChild(populateImage.childNodes[0]);
          populateImage.setAttribute("src", store[i].image);
        } else {
          populateImage.setAttribute("src", store[i].image);
        }
        if (populateName.hasChildNodes()) {
          populateName.removeChild(populateName.childNodes[0]);
          populateName.append(store[i].name);
        } else {
          populateName.append(store[i].name);
        }
      };
      totalbox.append(box, text);
      parent.append(totalbox);
    }
  }
}

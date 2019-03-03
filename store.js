window.onload = function() {
  let loadinggif = document.getElementsByClassName("load");
  for (let i = 0; i < loadinggif.length; i++) {
    loadinggif[i].style["visibility"] = "visible";
  }
  document.getElementById("gif").style.visibility = "hidden";
  let array = Array.from(document.getElementsByClassName("loading"));
  let load = document.getElementsByClassName("loading");
  let newImgSrc = [
    "Anime Food/j.png",
    "Anime Food/a.png",
    "Anime Food/b.png",
    "Anime Food/c.png",
    "Anime Food/d.png",
    "Anime Food/e.png",
    "Anime Food/f.png",
    "Anime Food/i.png",
    "Anime Food/n.png",
    "Anime Food/h.png",
    "Anime Food/o.png",
    "Anime Food/p.png",
    "Anime Food/q.png"
  ];
  item();
  for (let p = 0; p < load.length; p++) {
    load[p].setAttribute("src", newImgSrc[p]);
  }
};
let myAudio = document.getElementById("chopsound");
function togglePlay() {
  let audioOn = "Anime Food/speaker.svg";
  let audioOff = "Anime Food/speaker (1).svg";
  let audio = document.getElementById("sound");
  audio.getAttribute("src") == audioOff
    ? audio.setAttribute("src", audioOn)
    : audio.setAttribute("src", audioOff);
  myAudio.muted = !myAudio.muted;
}
let cart = document.getElementById("active-cart");
function checkCart() {
  let display = cart.style["display"];
  if (display) {
    if (display === "none") viewCart();
    if (display === "inherit") hideCart();
  } else {
    viewCart();
  }
}
function viewCart() {
  cart.style["display"] = "inherit";
}
function hideCart() {
  cart.style["display"] = "none";
}
function calcTotal() {
  let listOfCart = document.getElementsByClassName("addingItem");
  listOfCart = Array.from(listOfCart);
  let arrOfCart = listOfCart.map(el => {
    let indexOfMoney = el.innerHTML.indexOf("$");
    let costPerItem = el.innerHTML.slice(indexOfMoney + 1);
    if (costPerItem.indexOf("X") === -1) {
      return parseInt(costPerItem);
    } else {
      let indexOfAmount = costPerItem.indexOf("X");
      let a = costPerItem.slice(0, indexOfAmount);
      let b = costPerItem.slice(indexOfAmount + 1);
      return parseInt(a) * parseInt(b);
    }
  });
  let total = document.getElementById("totalCost");

  arrOfCart.length
    ? (total.innerHTML =
        "$" +
        arrOfCart.reduce((acc, curr) => {
          return acc + curr;
        }))
    : (total.innerHTML = "$0");
}
function addToCart() {
  let name = document.getElementById("item-name").innerHTML;
  let price = document.getElementById("item-cost").innerHTML;
  let initAmount = document.getElementById("cart-value").innerHTML;
  let bag = document.getElementById("active-cart");
  let remove = document.createElement("img");
  let removeIcon = "./Anime Food/add-button-inside-black-circle.svg";
  remove.setAttribute("src", removeIcon);
  remove.className = "remove-icon";
  remove.onclick = () => removeFromCart();
  let outdiv = document.createElement("div");
  outdiv.className = "outDiv";
  let outer = document.getElementsByClassName("outDiv");
  let item = document.createElement("div");
  item.className = "addingItem";
  document.getElementById("addToCart").value = "✔";
  let amount = initAmount;
  amount > 1
    ? item.append(name + " " + "$" + price.slice(1) + "X" + amount)
    : item.append(name + " " + "$" + price.slice(1));

  setTimeout(() => {
    editOrAdd(item, outdiv, amount, outer, bag, remove);
    calcTotal();
    esc();
  }, 800);
  setTimeout(() => {
    document.getElementById("addToCart").value = "Add To Cart";
  }, 802);
}
function editOrAdd(
  item,
  outsideDiv,
  amount,
  collectionOfOutsideDiv,
  bag,
  icon
) {
  let check = document.getElementsByClassName("addingItem");
  if (check.length) {
    check = Array.from(check);
    let texttwo = item.innerHTML.indexOf("$");
    let resulttwo = item.innerHTML.slice(0, texttwo + 1);
    let newArray = check.map(el => {
      let text = el.innerHTML.indexOf("$");
      return el.innerHTML.slice(0, text + 1);
    });
    if (newArray.indexOf(resulttwo) == -1) {
      bag.append(outsideDiv);
      outsideDiv.append(item, icon);
    } else {
      for (let i = 0; i < check.length; i++) {
        let innerText = check[i].innerHTML.indexOf("$");
        if (
          check[i].innerHTML.slice(0, innerText) ==
          item.innerHTML.slice(0, innerText)
        ) {
          newouter = Array.from(collectionOfOutsideDiv);

          let newThing = newouter.map(val => {
            let dollarSign = val.outerText.indexOf("$");
            return val.outerText.slice(0, dollarSign);
          });
          let thing = item.innerHTML.slice(0, innerText);
          let index = newThing.indexOf(thing);
          if (collectionOfOutsideDiv[index].innerText.indexOf("X") == -1) {
            amount++;
          } else {
            amount =
              parseInt(
                collectionOfOutsideDiv[index].innerText.slice(
                  collectionOfOutsideDiv[index].innerText.indexOf("X") + 1
                )
              ) + parseInt(amount);
          }
          let k = item.innerHTML.indexOf("X");
          if (amount > 5) amount = 5;
          collectionOfOutsideDiv[index].removeChild(
            collectionOfOutsideDiv[index].childNodes[0]
          );
          collectionOfOutsideDiv[index].removeChild(
            collectionOfOutsideDiv[index].childNodes[0]
          );
          k !== -1
            ? (item.innerHTML = item.innerHTML.slice(0, k) + "X" + amount)
            : (item.innerHTML = item.innerHTML + "X" + amount);
          collectionOfOutsideDiv[index].append(item, icon);
          break;
        }
      }
    }
  } else {
    bag.append(outsideDiv);
    outsideDiv.append(item, icon);
  }
}
function removeFromCart() {
  let parent = document.getElementById("active-cart");
  parent.removeChild(window.event.target.parentNode);
  calcTotal();
}
function esc() {
  document.getElementById("cart-value").innerHTML = 1;
  let escape = document.getElementById("popup");
  let back = document.getElementById("background");
  escape.style["display"] = "none";
  back.style["display"] = "none";
}
function add() {
  let number = document.getElementById("cart-value");
  addvalue = number.innerHTML;
  if (addvalue < 5) {
    addvalue++;
    number.innerHTML = addvalue;
  }
}
function subtract() {
  let number = document.getElementById("cart-value");
  subtractvalue = number.innerHTML;
  if (subtractvalue > 1) {
    subtractvalue--;
    number.innerHTML = subtractvalue;
  }
}

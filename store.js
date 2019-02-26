window.onload = function() {
  let array = Array.from(document.getElementsByClassName("loading"));
  let load = document.getElementsByClassName("loading");
  console.log(
    array.map(el => {
      return el.src;
    })
  );
  for (let p = 0; p < load.length; p++) {
    console.log(load[p].attributes);
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
    let h = el.innerHTML.indexOf("$");
    let he = el.innerHTML.slice(h + 1);
    if (he.indexOf("X") === -1) {
      return parseInt(he);
    } else {
      let l = he.indexOf("X");
      let a = he.slice(0, l);
      let b = he.slice(l + 1);
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
function editOrAdd(item, bag, amount, outer, last, icon) {
  let check = document.getElementsByClassName("addingItem");
  if (check.length) {
    check = Array.from(check);
    let texttwo = item.innerHTML.indexOf("$");
    let resulttwo = item.innerHTML.slice(0, texttwo);
    let newArray = check.map(el => {
      let text = el.innerHTML.indexOf("$");
      return el.innerHTML.slice(0, text);
    });
    if (newArray.indexOf(resulttwo) == -1) {
      last.append(bag);
      bag.append(item, icon);
    } else {
      for (let i = 0; i < check.length; i++) {
        let innerText = check[i].innerHTML.indexOf("$");
        if (
          check[i].innerHTML.slice(0, innerText) ==
          item.innerHTML.slice(0, innerText)
        ) {
          newouter = Array.from(outer);

          let newThing = newouter.map(val => {
            let dollarSign = val.outerText.indexOf("$");
            return val.outerText.slice(0, dollarSign);
          });
          let thing = item.innerHTML.slice(0, innerText);
          let index = newThing.indexOf(thing);
          if (outer[index].innerText.indexOf("X") == -1) {
            amount++;
          } else {
            amount =
              parseInt(
                outer[index].innerText.slice(
                  outer[index].innerText.indexOf("X") + 1
                )
              ) + parseInt(amount);
          }
          let k = item.innerHTML.indexOf("X");
          if (amount > 5) amount = 5;
          outer[index].removeChild(outer[index].childNodes[0]);
          outer[index].removeChild(outer[index].childNodes[0]);
          item.innerHTML = item.innerHTML.slice(0, k) + "X" + amount;
          outer[index].append(item, icon);
          break;
        }
      }
    }
  } else {
    last.append(bag);
    bag.append(item, icon);
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

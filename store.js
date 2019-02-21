const one = require("./Anime Food/a.png");
let store = [{ id: 1, image: one, name: "test", cost: "$20" }];
function item() {
  let parent = document.getElementById("store");
  for (let i = 0; i < store.length; i++) {
    let item = document.createElement("div");
    item.append("Hello World");
    parent.append(item);
  }
}

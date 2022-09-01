function MenuList (item1,item2,item3,item4,item5,item6,item7,item8) {
    this.item1 = item1,
    this.item2 = item2,
    this.item3 = item3,
    this.item4 = item4,
    this.item5 = item5,
    this.item6 = item6,
    this.item7 = item7
}
var main = new MenuList("Pizza", "Burger", "Chicken Tikka", "Biryani", "Pasta", "Roll", "Broast");
var dessert = new MenuList("Chocolate Cake", "Ice-cream", "Waffle", "Fruit Chaat","Chocolate Cake", "Ice-cream", "Waffle")
var drinks = new MenuList("Soft Drinks", "Cold Drinks", "Juices", "Milk Shakes","Mineral water", "Tea", "Coffee");

var menuDiv = document.getElementById("menu-card");
var menu_heading = document.createElement("h2");
menu_heading.setAttribute("id" , "menu-head")
menu_heading.appendChild(document.createTextNode("Our Menu"));
menuDiv.appendChild(menu_heading);

var mainItems = document.createElement("div");
mainItems.setAttribute("id", "main-list")
menuDiv.appendChild(mainItems);
var listName = document.createElement("p")
listName.setAttribute("class", "list-names");
listName.appendChild(document.createTextNode("Main Course"));
mainItems.appendChild(listName);

var mainlist =  document.createElement("ul");
mainItems.appendChild(mainlist);
for(var i in main) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(main[i]));
    mainlist.appendChild(item);
}

var dessertItems = document.createElement("div");
dessertItems.setAttribute("id", "dessert-list")
menuDiv.appendChild(dessertItems);


var listName = document.createElement("p")
listName.setAttribute("class", "list-names");
listName.appendChild(document.createTextNode("Desserts"));
dessertItems.appendChild(listName);
var dessertlist =  document.createElement("ul");
dessertItems.appendChild(dessertlist);
for(var x in dessert) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(dessert[x]));
    dessertlist.appendChild(item);
}

var drinkItems = document.createElement("div");
drinkItems.setAttribute("id", "drink-list")
menuDiv.appendChild(drinkItems);

var listName = document.createElement("p")
listName.setAttribute("class", "list-names");
listName.appendChild(document.createTextNode("Drinks"));
drinkItems.appendChild(listName);
var drinkList =  document.createElement("ul");
drinkItems.appendChild(drinkList);
for(var v in drinks) {
    var item = document.createElement("li");
    item.appendChild(document.createTextNode(drinks[v]));
    drinkList.appendChild(item);
}
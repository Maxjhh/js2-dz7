function Container() {
  this.id = 'container';
  this.className = 'container';
}

Container.prototype.render = function () {
  var div = document.createElement('div');
  div.id = this.id;
  div.className = this.className;
  return div;
}

Container.prototype.myRemove = function () {
  var div = document.getElementById(this.id);
  div.parentElement.removeChild(div);
}

//function remove(e){
//  e.path[1].remove();
//}

function Menu(id, className, items) {
  Container.call(this);
  this.id = id;
  this.className = className;
  this.items = items;
}

Menu.prototype = Object.create(Container.prototype);

Menu.prototype.render = function () {
  var ul = document.createElement('ul');
  ul.className = this.className;
  ul.id = this.id;
  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i] instanceof MenuItem || this.items[i] instanceof subMenu) {
      ul.appendChild(this.items[i].render());
    }
  }
  if(this.mainItem){
    var li = this.mainItem.render();
    li.appendChild(ul);
    return li;
  }
  return ul;
}

Menu.prototype.myRemove = function () {
  var ul = document.getElementById(this.id);
  ul.parentElement.removeChild(ul);
}

function subMenu(id, className, mainItem, items){
  Container.call(this);
  this.id = id;
  this.className = className;
  this.mainItem = mainItem;
  this.items = items;
}

subMenu.prototype = Object.create(Menu.prototype);

subMenu.prototype.myRemove = function () {
  var li = document.getElementById(this.id).parentElement;
  li.parentElement.removeChild(li);
}

function MenuItem(link, label) {
  Container.call(this);
  this.link = link;
  this.label = label;
}

MenuItem.prototype = Object.create(Container.prototype);

MenuItem.prototype.render = function () {
  this.li = document.createElement('li');
  var a = document.createElement('a');
  a.href = this.link;
  a.innerHTML = this.label;

  //var del = document.createElement('a');
  //del.href = '#';
  //del.textContent = '<del>';
  //del.addEventListener('click', remove);

  this.li.appendChild(a);
  //this.li.appendChild(del);

  return this.li;
}

MenuItem.prototype.myRemove = function () {
  this.li.parentElement.removeChild(this.li);
}

function menustart(){
  menuItem1 = new subMenu('submenu1', 'submenu1', new MenuItem('#', 'Главная'), [
    item1_sub1 = new MenuItem('#', 'Подпункт1'),
    item1_sub2 = new subMenu('submenu2', 'submenu2', new MenuItem('#', 'Подпункт2'), [
      sub2_sub1 = new MenuItem('#', 'Подпункт1'),
      sub2_sub2 = new MenuItem('#', 'Подпункт2')
      ]),
    item1_sub3 = new MenuItem('#', 'Подпункт3')
  ]);
  menuItem2 = new MenuItem('#', 'О нас');
  menuItem3 = new MenuItem('#', 'Каталог');
  menuItem4 = new MenuItem('hamburger.html', '<b>Гамбургеры</b>');
  menu = new Menu('menu', 'menu', [menuItem1, menuItem2, menuItem3, menuItem4]);
  document.querySelector('.dz1_1').appendChild(menu.render());
}

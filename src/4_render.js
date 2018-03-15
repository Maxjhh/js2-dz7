var CITYLIM = 10;
var CITYMIN = 3;

var menuItem1 = new subMenu('submenu1', 'submenu1', new MenuItem('#', 'Главная'), [
  item1_sub1 = new MenuItem('#', 'Подпункт1'),
  item1_sub2 = new subMenu('submenu2', 'submenu2', new MenuItem('#', 'Подпункт2'), [
    sub2_sub1 = new MenuItem('#', 'Подпункт1'),
    sub2_sub2 = new MenuItem('#', 'Подпункт2')
    ]),
  item1_sub3 = new MenuItem('#', 'Подпункт3')
]);

var menuItem2 = new MenuItem('#', 'О нас');
var menuItem3 = new MenuItem('#', 'Каталог');
var menuItem4 = new MenuItem('hamburger.html', '<b>Гамбургеры</b>');

var menu = new Menu('menu', 'menu', [menuItem1, menuItem2, menuItem3, menuItem4]);

var form;
var nameerr = document.createElement('div');
nameerr.classList.add('error');
nameerr.innerText = 'Имя должно быть только из букв';
var emailerr = document.createElement('div');
emailerr.classList.add('error');
emailerr.innerText = 'Неверный Email';
var telerr = document.createElement('div');
telerr.classList.add('error');
telerr.innerText = 'Неверный формат номера';
var texterr = document.createElement('div');
texterr.classList.add('error');
texterr.innerText = 'Мало текста';

var POKLIM = 6;
var TOTALLIM = 802;

var pokset = 0;
var upd = 0;
var j = 1;

function rendhtml(){
  var pal = $('<div/>').addClass('pal').html('<a href="../palindrome/index.html">Палиндром</a>');
  var dz1_1 = $('<div/>').addClass('dz1_1').html('<h1>Меню DZ1</h1><a href="#" onclick="setTimeout(function() { sub2_sub2.myRemove(); }, 1);">sub2_sub2.myRemove()</a><br><a href="#" onclick="setTimeout(function() { item1_sub2.myRemove(); }, 1);">item1_sub2.myRemove()</a><br><a href="#" onclick="setTimeout(function() { menuItem1.myRemove(); }, 1);">menuItem1.myRemove()</a><br><a href="#" onclick="setTimeout(function() { menuItem2.myRemove(); }, 1);">menuItem2.myRemove()</a><br><a href="#" onclick="setTimeout(function() { menu.myRemove(); }, 1);">menu.myRemove()</a><br>');
  var dz1_2 = $('<div/>').addClass('dz1_2').html('<h1>Гамбургер DZ1</h1><a href="#" onclick="setTimeout(function() { myHamburger = new Hamburger(\'large\', \'cheese\'); }, 1);">myHamburger = new Hamburger("large", "cheese")</a><br><a href="#" onclick="setTimeout(function() { myHamburger = new Hamburger(\'large\', \'salad\'); }, 1);">myHamburger = new Hamburger("large", "salad")</a><br><a href="#" onclick="setTimeout(function() { myHamburger = new Hamburger(\'large\', \'potato\'); }, 1);">myHamburger = new Hamburger("large", "potato")</a><br><a href="#" onclick="setTimeout(function() { myHamburger = new Hamburger(\'small\', \'cheese\'); }, 1);">myHamburger = new Hamburger("small", "cheese")</a><br><a href="#" onclick="setTimeout(function() { myHamburger = new Hamburger(\'small\', \'salad\'); }, 1);">myHamburger = new Hamburger("small", "salad")</a><br><a href="#" onclick="setTimeout(function() { myHamburger = new Hamburger(\'small\', \'potato\'); }, 1);">myHamburger = new Hamburger("small", "potato")</a><br><br><a href="#" onclick="setTimeout(function() { myHamburger.addTopping(\'mayo\'); }, 1);">myHamburger.addTopping("mayo")</a><br><a href="#" onclick="setTimeout(function() { myHamburger.addTopping(\'spice\'); }, 1);">myHamburger.addTopping("spice")</a><br><a href="#" onclick="setTimeout(function() { myHamburger.removeTopping(\'mayo\'); }, 1);">myHamburger.removeTopping("mayo")</a><br><a href="#" onclick="setTimeout(function() { myHamburger.removeTopping(\'spice\'); }, 1);">myHamburger.removeTopping("spice")</a><br><br><br><div id="res"><b>Результат:</b></div><br><br>');
  var dz3 = $('<div/>').addClass('dz3').html('<div class="container"><h1>DZ3</h1><br><div class="text">Lorem \'ipsum dolor\'s sit amet\', consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco \'laboris nisi ut aliquip\' ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum \'dolor\'e eu fugiat\' nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia \'deserunt mollit anim\' id est Lorem ipsum  dolor sit amet, consectetur adipisicing elit, sed do \'eiusmod tempor\' incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud \'exercitation ullam\'co laboris\' nisi ut aliquip ex ea commod\'o consequat. Duis aute irure dolor in reprehenderit in volupt\'ate velit esse cillum dolo\'re eu \'fugiat nulla pariatur\'. Excepteur \'sint occaecat\' cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><div class="myform"><form action="#" method="POST" class="form1"><label for="name">Имя <em>*</em></label><input type="text" id="name" name="name" placeholder="Имя"><br><label for="email">Email <em>*</em></label><input type="text" id="email" name="email" placeholder="email@server.com"><br><label for="tel">Телефон <em>*</em></label><input type="tel" id="tel" name="tel" placeholder="+7(000)000-0000"><br><label for="text">Текст <em>*</em></label><br><textarea id="text"></textarea><br><input type="submit" name="sub" id="sub" value="Отправить"></form></div></div>');
  var dz4 = $('<div/>').addClass('dz4').html('<h1>DZ4</h1><div class="tabs"><ul class="tabcap"><li class="active">Tab 1</li><li>Tab 2</li><li>Tab 3</li><li>Tab 4</li><li>Tab 5</li></ul><div class="tabcont">Lorem1 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><div class="tabcont">Lorem2 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><div class="tabcont">Lorem3 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo  consequat. Duis aute irure dolor in reprehendstrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><div class="tabcont">Lorem4 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit ulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div><div class="tabcont">Lorem5 ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod empor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div><div><p>Города России на русском, автокомплит от 3-х букв, подгружаются при вводе</p><label>Город: <input id="autocomplete"></label></div>');
  var dz6 = $('<div/>').addClass('dz6').html('<h1 class="dz6_h">DZ6</h1><input type="text" name="datecd" class="datecd" placeholder="Какая-то дата..."><p class="prodcap">Товары: (можно перетаскивать в корзину)</p><p class="prodhead"><span>#</span><span>Название</span><span>Количество</span><span>Цена</span><span>Деёствие</span></p><div class="prod"></div><p class="cartcap">Корзина:</p><div class="cart"></div><div class="amount"><div class="am3">&nbsp;руб</div><div class="amount2">0</div><div class="am2">Сумма:&nbsp;</div></div>');
  var dz2 = $('<div/>').addClass('dz2');

  $('body').append(pal);
  $('body').append(dz1_1);
  $('body').append(dz1_2);
  $('body').append(dz3);
  $('body').append(dz4);
  $('body').append(dz6);
  $('body').append(dz2);
}
(function($) {
  $(function() {
    rendhtml();
    menustart();
    dz3_start();
    dz4_start();
    datepk();
    setcart();
    loadgoods();
    updcart();
    buyclick();
    quanclick();
    delclick();
    dz2_start();
  });
})(jQuery);

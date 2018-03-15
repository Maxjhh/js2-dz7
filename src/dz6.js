function updcart(){
  var cart = $('.cart');
  cart.html('');
  $.ajax({
    url: 'http://localhost:3000/cart',
    dataType: 'json',
    success: function(goods) {
      var amount = 0, price = 0;
      if(!goods.length){
        cart.text('(Пусто)');
      }
      goods.forEach(function(good) {
        price = good.price * good.quantity;
        amount += price;
        var product = $('<div/>').addClass('product');
        product.append( $('<div/>').text(good.id).addClass('prodid'));
        product.append($('<div/>').text(good.name).addClass('prodname'));
        product.append($('<input/>').attr({type: 'number', value: good.quantity, min: 1, max: 1000, class: 'quaninp'}));
        product.append($('<input/>').attr({type: 'button', value: 'OK', class: 'quanbut'}));
        product.append( $('<div/>').text('Удалить').addClass('delbut'));
        product.append($('<div/>').addClass('price').text(good.price + ' руб'));
        cart.append(product);
      });
      $('.amount2').text(amount);
    }
  });
}
function datepk(){
  $('.datecd').datepicker({
    firstDay: 1,
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dateFormat: 'dd.mm.yy'
  })
}
function setcart(){
  $('.cart').sortable().droppable({
    hoverClass:"cartact",
    drop: function(e, dr) {
      dr.draggable.eq(0).children('.buybut').click();
    }
  });
}
function loadgoods(){
  $.ajax({
    url: 'http://localhost:3000/goods',
    dataType: 'json',
    success: function(goods) {
      var prod = $('.prod');
      goods.forEach(function(good) {
        var product = $('<div/>').addClass('product').draggable({
          cursor: 'move',
          helper: function(e) {
            return $('<div/>').css({ width: 700, opacty: 0.5 }).append(e.target.cloneNode(true));
          }
        });
        product.append( $('<div/>').text(good.id).addClass('prodid'));
        product.append($('<div/>').text(good.name).addClass('prodname'));
        product.append($('<input/>').attr({type: 'number', value: 1, min: 1, max: 1000, class: 'quaninp'}));
        product.append( $('<div/>').text('Купить').addClass('buybut'));
        product.append($('<div/>').addClass('price').text(good.price + ' руб'));
        prod.append(product);
      });
      var prodsl = $('.prod').clone().insertAfter('.dz6_h').addClass('prodsl');
      $('.prodsl input, .prodsl .buybut').each(function(i, el){ el.remove(); });
      $('.prodsl').slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 2
      });
    }
  });
}
function buyclick(){
  $('.prod').on('click', '.buybut', function(e) {
    var id = parseInt($(this).parent().children('.prodid').text());
    var price = parseInt($(this).parent().children('.price').text().replace(' руб', ''));
    var name = $(this).parent().children('.prodname').text();
    var quan = parseInt($(this).parent().children('.quaninp')[0].value);
    if(isNaN(quan)){
      quan = 1;
    }
    var ex = 0, i = -1;
    $.ajax({
      url: 'http://localhost:3000/cart/',
      dataType: 'json',
      success: function(res) {
        res.forEach(function(r, j) {
          if(r.id == id){
            ex = 1;
            i = j;
          }
        });
        if(ex){
          $.ajax({
            url: 'http://localhost:3000/cart/' + id,
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify({
              quantity: res[i].quantity + quan
            }),
            success: function(data) {
              updcart();
            },
            error: function(data){
              console.log(data, 'Error');
            }
          });
        }
        else{
          $.ajax({
            url: 'http://localhost:3000/cart',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({
              id: id,
              price: price,
              name: name,
              quantity: quan
            }),
            success: function(data) {
              updcart();
            },
            error: function(data){
              console.log(data, 'Error');
            }
          });
        }
      }
    });
  });
}
function quanclick(){
  $('.cart').on('click', '.quanbut', function(e) {
    var id = parseInt($(this).parent().children('.prodid').text());
    var quan = parseInt($(this).parent().children('.quaninp')[0].value);
    $.ajax({
      url: 'http://localhost:3000/cart/' + id,
      type: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify({
        quantity: quan
      }),
      success: function(data) {
        updcart();
      },
      error: function(data){
        console.log(data, 'Error');
      }
    });
  })
}
function delclick(){
  $('.cart').on('click', '.delbut', function(e) {
    var id = parseInt($(this).parent().children('.prodid').text());
    $.ajax({
      url: 'http://localhost:3000/cart/' + id,
      type: 'DELETE',
      contentType: 'application/json',
      success: function(data) {
        updcart();
      },
      error: function(data){
        console.log(data, 'Error');
      }
    });
  });
}

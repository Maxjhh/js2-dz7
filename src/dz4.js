function dz4_start(){
  $('ul.tabcap').on('click', 'li:not(.active)', function() {
    $(this).addClass('active').animate({
      width: 150,
      height: 50,
      marginTop: 0,
    }, 500);
    $(this).siblings().removeClass('active').animate({
      width: 100,
      height: 30,
      marginTop: 20
    });
    $(this).closest('div.tabs').find('div.tabcont').animate({
      height: 0,
      borderWidth: 0
    }, 500).eq($(this).index()).animate({
      height: 200,
      borderWidth: 2
    }, 500);
  });

  $('#autocomplete').autocomplete({
    source: function(request, response){
      $.ajax({
        url: 'http://kladr-api.ru/api.php',
        dataType: "jsonp",
        type: 'GET',
        data:{
          contentType: 'city',
          query: $('#autocomplete')[0].value,
          limit: CITYLIM
        },
        success: function(data){
          response($.map(data.result, function(item){
            return{
              label: item.name,
              value: item.name
            }
          }));
        }
      });
    },
    minLength: CITYMIN
  });
}

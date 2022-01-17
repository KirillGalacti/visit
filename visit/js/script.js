/*var userChoice
var question = 'Введите желаем тип вашего сайта';
var choises = ["Лендинг", "Сайт-визитка", "Интернет-магазин","Новостные ресурсы"];


while (choises.indexOf(prompt(question)) === 0){
    userChoice = prompt("Выберите цвет: красный, зеленый или синий");
};

const typeWebsite=prompt('Введите желаем тип вашего сайта','Введите цифру от 1 до 4')
  console.log(typeWebsite);
const design=prompt('Введите желаем дизайн вашего сайта','Введите цифру от 1 до 4')
  console.log(design);

  while ( true )
{  
    var question = prompt ('Введите желаем тип вашего сайта');
    var choises = ["Лендинг", "Сайт-визитка", "Интернет-магазин","Новостные ресурсы"];

    if ( question.indexOf(prompt('Введите желаем тип вашего сайта')) === 0);

    alert( "Ошибка, таких сайтов либо не существует. либо нет в моем арсенале!" ); 
}
  //самый нормальный вариант

$(document).ready(function(){
  });

 /* 
  var delay_popup = 5000;
  setTimeout("document.getElementById('#bg_popup').style.display='block'", delay_popup);


  var myModal = document.getElementById('myModal')
  var myInput = document.getElementById('myInput')

  myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
  })


  
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
});

$(document).ready(function(){
  $(".hide-modal").click(function(){
      $("#myModal").modal('hide');
  });
});




function onEntry(entry){
  entry.forEach(change =>{
    if(change.isEntrsecting){
      change.target.classList.add('.show-animation');
    }
  });
};



  var questionOne = prompt ('Введите желаем тип вашего сайта');
  var questionTwo = prompt('Введите желаемый дизайн вашего сайта',"Введите число от 1 до 4");
  var questionThree = prompt('Введите на какие утройства будет акцент на адаптивность',"Введите число от 1 до 4");

  var choisesOne = ["Лендинг", "Сайт-визитка", "Интернет-магазин","Новостные ресурсы"];
  var choisesTwo=["1","2","3","4"];
  var choisesThree=["1","2","3","4"];

  if(questionOne==["Лендинг", "Сайт-визитка", "Интернет-магазин","Новостные ресурсы"]){
    alert("Хороший выбор!");
  } else if(questionTwo==["1","2","3","4"]){
    alert( "Хороший выбор!" );
  } else if(questionThree==["1","2","3","4"]){
    alert( "Хороший выбор!" );
  };

*/

$(document).ready(function () {

  var a = 0;
  $(window).scroll(function() {
  
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
      $('.price').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 1200,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
            }
  
          });
      });
      a = 1;
    }
  
  });


  $('.image-popup-zoom').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true,
        duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
    }
    });



    $(function() {
      $('.calc').change(function(){
        $type_site = $('select#type_site').val();
        $type_design = $('select#type_design').val();
        $adaptability = $('select#adaptability').val();
              $result = parseInt ($type_site) + parseInt($type_design) + parseInt ($adaptability)  
        $('h4#result').text($result);
      });
    });

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
    myInput.focus()
    });

  $('form').submit(function(event){
    if($("#InputEmail").val() == "" || $("#InputName").val() == "")
    event.preventDefault();
    alert("Вы не ввели данные!");
  })
    
});




$(function(){
    //Variavel
    var numb = 10;

    //Funções
    init();
    Themes();
    

    function init(){
        $('button').click(function(){
        
            Progress($('#circleProgress'));
            
            score();
        })

        //Barra de progresso em circulo
        function Progress(el){
            $(el).circleProgress({fill: {color:'navy'},animation:{duration:10000, easing:'circleProgressEasing'},animationStartValue: 1.0,reverse:true})
        }

        function score(){
           const intervalTimer = setInterval(function(){
               numb --;
               $('#number').text(numb)
               if(numb <= 0){
                   $('#number').html('Finish').css('font-size','4.3rem');
                   $('button').html('<i class="fas fa-redo-alt"></i>');
            }
           },1000);

           if(numb < 10){
               numb = 10;
               $('#number').text(numb);
               clearInterval(intervalTimer)
               $('button').html('Start');
           }
           console.log($('#number').text())

        }

    }    

    function Themes(){
        //Funções
        lightTheme();
        darkTheme();
        
        function lightTheme(){
            $('#light').click(function(){
                $(this).css('background-color','white')
                .css('color','#1e2140');
                $('main').css('background-color','white');
                $('#theme').css('border-color','#1e2140');
                $('#box h2').css('color','#1e2140')
                $('#number').css('color','#1e2140');
                $('button').css('background-color','#1e2140')
                .css('color','white');

                //Dark
                $('#dark').css('background-color','#1e2140')
                .css('color','white')
                
            })
        }

        function darkTheme(){
            $('#dark').click(function(){
                $(this).css('background-color','white')
                .css('color','#1e2140');
                $('main').css('background-color','#1e2140');
                $('#theme').css('border-color','white');
                $('#box h2').css('color','white')
                $('#number').css('color','white');
                $('button').css('background-color','white')
                .css('color','#1e2140')

                //Light
            $('#light').css('background-color','#1e2140')
                .css('color','white')
                
        })
        }
    }
    

})
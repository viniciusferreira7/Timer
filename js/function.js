
$(function(){
    //Funções
    init();

    function init(){
        $('button').click(function(){
            Progress($('#circleProgress'));
        })

    //Barra de progresso em circulo
    function Progress(el){
        $(el).circleProgress({fill: {color:'navy'}})
        .on('circle-animation-progress', function(event, progress, stepValue){
            $(this).find('#number').text(String(stepValue.toFixed(2)) +'px')
        })

        
    }
    }

})
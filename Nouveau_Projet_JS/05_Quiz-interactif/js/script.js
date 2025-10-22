/*.Partie javaScript Simple.*/

/* Partie jQuery.js*/
$(document).ready(function(){
   $('.fermer').click(() =>{
      $('.page-jeu').hide() 
   });
   $('.demarrer').click(()=>{
        $('.page-jeu').show()
    });
   $('.agrandir').click(()=>{
       $('.page-jeu').css({
           'width':'100%',
           'height':'100%',
           'position':'fixed',
           'top':'0',
           'padding':'20px'
       })
   });
   $('.reduir').click(()=>{
       $('.page-jeu').css({
    'justify-self':'center',
    'position':'fixed',
    'width':'85%',
    'height':'auto',
    'top':'8%',
    'border': '1px solid',
    'background': 'linear-gradient(to left, #fff, #777)',
    'padding-inline': '20px'
       })
   });
   
})

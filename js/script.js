function main() {

    /* Isotope */
    var $grid = $('.gallery').isotope({
          // main isotope options
          itemSelector: '.item2',
          // set layoutMode
          layoutMode: 'masonry'
        });
    
    /* Resizing fixed header - search bar */
    var headerWidth = $("main").width();
    $("header").width(headerWidth);
    
    /* initialize focus on searchBar - FAQ */
    $(".searchBar").on('click',function(){
       $("#searchFAQ").focus(); 
    });
    
    /* Change line-height automatically */
    
    var searchingP = document.getElementsByTagName('p');
    var numberPs = searchingP.length;
    //console.log("Dit is searching P's "+searchingP);
    //console.log("Het aantal p's zijn "+numberPs);
    for(var i = 0; i < numberPs; i++){
       var style = window.getComputedStyle(searchingP[i]),
           currentLH = style.getPropertyValue('line-height'),
           currentLH = parseInt(currentLH.slice(0,-2)),
           newLH = currentLH + (currentLH /2); 
           
        //console.log("current LH is "+currentLH);
        //console.log("New LH is "+newLH);
        
        searchingP[i].style.lineHeight = newLH+"px";
        
        //console.log("LineHeight has been changed for number "+i);
    };
    
    
    
    /* tussentijdse oplossing */
    
    $('.suggesties .navUL li:nth-of-type(2)').on('click',function(){
        $('.suggesties').toggleClass('hidden');
        $('.aanpassenSuggesties').toggleClass('hidden');
    })
    
    $('.aanpassenSuggesties .navUL li:nth-of-type(1)').on('click',function(){
        $('.suggesties').toggleClass('hidden');
        $('.aanpassenSuggesties').toggleClass('hidden');
    })
    
    
}
window.onload = function() {
       main();
};

window.onresize = function(){
    var headerWidth = $("main").width();
    $("header").width(headerWidth);
};
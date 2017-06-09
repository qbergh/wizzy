function mobileMenu(){
    $('main').toggleClass('hidden');
    $('header').toggleClass('hidden');
    $('footer').toggleClass('hidden');
    $('aside .profielfoto').toggleClass('hidden');  
    $('aside .hamburger').toggleClass('fa-times')
    $('aside .hamburger').toggleClass('fa-bars');   
    
    if($('aside .hamburger').hasClass('fa-times')){
        $('.grid_container').css('background-color',"#979797");
        $('aside').css('background-color',"#979797");
        $('aside .hamburger').css('color','#F0F0F0');
        
        var menu = '<div class="mobileMenu"><ul><li><a href="home.html"><i class="fa fa-home"></i>Home</a></li><li><a href="account.html"><i class="fa fa-user"></i>Mijn account</a></li><li><a href="tvkeuze.html"><i class="fa fa-television"></i>Ontspannen kijken</a></li><li><a href="faq.html"><i class="fa fa-question"></i>Hulpcentrum</a></li><li><a href="instellingen.html"><i class="fa fa-wrench"></i>Instellingen</a></li><li><a href="../index.html"><i class="fa fa-sign-out"></i>Afmelden</a></li></ul><div>';
        
        $(".grid_container").append(menu);
        
    } else if($('aside .hamburger').hasClass('fa-bars')){
        $('.grid_container').css('background-color',"#F0F0F0");
        $('aside').css('background-color',"#E7E7E7");
        $('aside .hamburger').css('color','#AFADAF');
        
        $('.mobileMenu').remove();
    }  
}

function resizeSeries(){
    /* Resizing episodes div */
    
    if($(window).width() < 911){
        $('.serieInfo').addClass('hidden');
    } else if($(window).width() > 910){
        $('.serieInfo').removeClass('hidden');
    }
    
    $('.afleveringen').removeClass('2_grid');
    $('.afleveringen').removeClass('3_grid');
    $('.afleveringen').removeClass('4_grid');

    
    if($(window).width() > 1400) {
            $('.afleveringen').addClass('4_grid'); 
        } else if(($(window).width() < 1400) && ($(window).width() > 760)) {
            $('.afleveringen').addClass('3_grid');
        } else if(($(window).width() < 760)){
            $('.afleveringen').addClass('2_grid');
        } else{
            $('.afleveringen').addClass('3_grid');
        }
    
    var aflClass = $('.afleveringen').attr('class');
    
    switch(aflClass){
        case 'afleveringen 2_grid': 
                                    var widthDiv = $('.aflList').width();
                                    var widthDiv = widthDiv - (40 * 1);
                                    var newDivWidth = widthDiv / 2;
                                    $('.aflList div').each(function(){
                                        $(this).css('width',newDivWidth);
                                        $(this).css('height',newDivWidth);
                                    });
                                    $('.aflList').css('grid-template-columns','repeat(2,1fr)');
                                    break;
            
        case 'afleveringen 3_grid': 
                                    var widthDiv = $('.aflList').width();
                                    var widthDiv = widthDiv - (40 * 2);
                                    var newDivWidth = widthDiv / 3;
                                    $('.aflList div').each(function(){
                                        $(this).css('width',newDivWidth);
                                        $(this).css('height',newDivWidth);
                                    });
                                    $('.aflList').css('grid-template-columns','repeat(3,1fr)');
                                    break;
            
        case 'afleveringen 4_grid':  
                                    var widthDiv = $('.aflList').width();
                                    var widthDiv = widthDiv - (40 * 3);
                                    var newDivWidth = widthDiv / 4;
                                    $('.aflList div').each(function(){
                                        $(this).css('width',newDivWidth);
                                        $(this).css('height',newDivWidth);
                                    });
                                    $('.aflList').css('grid-template-columns','repeat(4,1fr)');
                                    break;
                   };
    }

function popUp(){
    
}

function main() {

    $('.normalBar .fa.fa-star-o').on('click',function(){
        $(this).toggleClass('filledStar');
     });
    
    /* Resizing fixed header - search bar */
    var headerWidth = $("main").width();
    $("header").width(headerWidth);
    
    
    /* pas grootte aan op serie pagina */
    resizeSeries();
    
    
    /* initialize focus on searchBar - FAQ 
    $(".searchBar").on('click',function(){
       $("#searchFAQ").focus(); 
    });*/
    
    /* Change line-height automatically */
    
    var searchingP = document.getElementsByTagName('p');
    var numberPs = searchingP.length;
    for(var i = 0; i < numberPs; i++){
       var style = window.getComputedStyle(searchingP[i]),
           currentLH = style.getPropertyValue('line-height'),
           currentLH = parseInt(currentLH.slice(0,-2)),
           newLH = currentLH + (currentLH /2); 
        searchingP[i].style.lineHeight = newLH+"px";

    };
    
    /* change profile */
    
    $('.secondProfile').on('click',changeProfile);
    
    $('.thirdProfile').on('click',changeProfile);
    
    function changeProfile(){
        var thisProfile = $(this).css('background-image');
        var centerProfile = $('.currentProfile').css('background-image');
        $(this).css('background-image',centerProfile);
        $('.currentProfile').css('background-image',thisProfile);
        $('.profielfoto').css('background-image',thisProfile);
        localStorage.setItem('profielfoto',thisProfile);
    }
    
    var currentProfile = localStorage.getItem('profielfoto');
    $('.profielfoto').css('background-image',currentProfile);
    
    $('.currentProfile').css('background-image',currentProfile);
    console.log(currentProfile);
    
    if($('.currentProfile').css('background-image') === currentProfile && currentProfile === 'url("https://qbergh.github.io/wizzy/img/profielfoto2.jpeg")'){
        $('.secondProfile').css('background-image','url("../img/profielfoto.jpg")');
        console.log('oh darn');
    } else if($('.currentProfile').css('background-image') === 'url("https://qbergh.github.io/wizzy/img/profielfoto3.jpeg")'){
        
        $('.thirdProfile').css('background-image','url("../img/profielfoto.jpg")');
    } else{
        console.log(currentProfile);
    }
    
    /* tussentijdse oplossing */
    
    $('.suggesties .navUL li:nth-of-type(2)').on('click',function(){
        $('.suggesties').toggleClass('hidden');
        $('.aanpassenSuggesties').toggleClass('hidden');
    });
    
    $('.aanpassenSuggesties .navUL li:nth-of-type(1)').on('click',function(){
        $('.suggesties').toggleClass('hidden');
        $('.aanpassenSuggesties').toggleClass('hidden');
    });
    
    /* toggle mobile menu */
    
    $('.hamburger').on('click',mobileMenu);
    
    
}
window.onload = function() {
    main();
    resizeSeries();
};

window.onresize = function(){
    var headerWidth = $("main").width();
    $("header").width(headerWidth);
    
    resizeSeries();
};
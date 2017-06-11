function mobileMenu(){
    /* remove Pop up if active*/
        $('.popUp').remove(); 
        $('body').css('overflow','auto');
        $('.grid_container').css('overflow','auto');
        $('main').removeClass('hidden');
        var headerWidth = $("main").width();
        $("header").width(headerWidth);
    
    /* do everything for mobile menu */
    $('main').toggleClass('hidden');
    $('header').toggleClass('hidden');
    $('footer').toggleClass('hidden');
    $('aside .profielfoto').toggleClass('hidden');  
    $('aside .hamburger').toggleClass('fa-times')
    $('aside .hamburger').toggleClass('fa-bars');   
    
    if($('aside .hamburger').hasClass('fa-times')){
        $('.grid_container').css('background-color',"#979797");
        $('.grid_container').css('overflow','hidden');
         $('body').css('overflow','hidden');
        $('aside').css('background-color',"#979797");
        $('aside .hamburger').css('color','#F0F0F0');
        
        var menu = '<div class="mobileMenu"><ul><li><a href="home.html"><i class="fa fa-home"></i>Home</a></li><li><a href="account.html"><i class="fa fa-user"></i>Mijn account</a></li><li><a href="tvkeuze.html"><i class="fa fa-television"></i>Ontspannen kijken</a></li><li><a href="faq.html"><i class="fa fa-question"></i>Hulpcentrum</a></li><li><a href="instellingen.html"><i class="fa fa-wrench"></i>Instellingen</a></li><li><a href="../index.html"><i class="fa fa-sign-out"></i>Afmelden</a></li></ul><div>';
        
        $(".grid_container").append(menu);
        
    } else if($('aside .hamburger').hasClass('fa-bars')){
        $('.grid_container').css('background-color',"#F0F0F0");
        $('.grid_container').css('overflow','auto');
         $('body').css('overflow','auto');
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
    var popup = $(this).data('popup'),
        popupContent = "<section class='popUp'><div class='popUpBox'>";
    
    if($(window).width() > 540){
        $('body').css('overflow','hidden');
        $('.grid_container').css('overflow','hidden');
    } else if($(window).width() < 540){
        window.scrollTo(0, 0);
    }
    
    switch(popup){
        case 'wachtwoord':      popupContent += "<h4>Wachtwoord wijzigen</h4><div class='inputField'><h5>Huidig wachtwoord</h5><div class='input_item'><i class='fa fa-key' aria-hidden='true'></i><input type='password' class='inlogEmail'></div><h5>Nieuw wachtwoord</h5><div class='input_item'><i class='fa fa-key' aria-hidden='true'></i><input type='password' class='inlogEmail'></div><h5>Bevestig nieuw wachtwoord</h5><div class='input_item'><i class='fa fa-key' aria-hidden='true'></i><input type='password' class='inlogEmail'></div></div>"
                                break;
            
        case 'email':           popupContent += '<h4>E-mail wijzigen</h4><div class="inputField"><h5>Huidig e-mail</h5><div class="input_item"><i class="fa fa-envelope" aria-hidden="true"></i><input type="email" placeholder="jamir.hickle@gmail.com" class="inlogEmail"></div> <h5>Nieuw e-mail</h5><div class="input_item"><i class="fa fa-envelope" aria-hidden="true"></i><input type="email" placeholder="" class="inlogEmail"></div><h5>Bevestig nieuw e-mail</h5><div class="input_item"><i class="fa fa-envelope" aria-hidden="true"></i><input type="email" placeholder="" class="inlogEmail"></div></div>'
                                break;
            
        case 'telefoonnummer':  popupContent += '<h4>Telefoonnummer wijzigen</h4> <div class="inputField"> <h5>Huidig telefoonnummer</h5><div class="input_item"><i class="fa fa-phone" aria-hidden="true"></i><input type="text" placeholder="823-568-7279" class="inlogEmail"></div> <h5>Nieuw telefoonnummer</h5><div class="input_item"><i class="fa fa-phone" aria-hidden="true"></i><input type="text" placeholder="" class="inlogEmail"></div><h5>Bevestig nieuw telefoonnummer</h5><div class="input_item"><i class="fa fa-phone" aria-hidden="true"></i><input type="text" placeholder="" class="inlogEmail"></div></div>'
                                break;
            
        case 'betaalgegevens':  popupContent += '<h4>Betaalgegevens wijzigen</h4><ul class="paymentOptions"><li class="selected" data-option="Paypal"><i class="fa fa-paypal"></i></li><li data-option="Credit card"><i class="fa fa-credit-card"></i></li><li data-option="Visa"><i class="fa fa-cc-visa"></i></li><li data-option="Stripe"><i class="fa fa-cc-stripe"></i></li><li data-option="Mastercard"><i class="fa fa-cc-mastercard"></i></li></ul> <div class="inputField"><h5>Paypal gegevens</h5><div class="input_item"><i class="fa fa-paypal" aria-hidden="true"></i><input type="text" placeholder="**** - **** - 8392" class="inlogEmail"></div></div>'
                                break;
            
        case 'streamingApps':   popupContent += '<h4>Streaming applicaties beheren</h4><ul class="streamingOptions"><li data-option="Netflix" class="selected"><img src="../img/netflix.png"></li><li data-option="Amazon"><img src="../img/amazon_logo.png"></li><li data-option="Hulu"><img src="../img/hulu_logo.png"></li><li data-option="HBO Now"><img src="../img/hbonow_logo.png"></li></ul> <div class="inputField"><h5>Netflix gebruikersnaam</h5><div class="input_item"><i class="fa fa-user" aria-hidden="true"></i><input type="email" placeholder="jamir.hickle@gmail.com" class="inlogEmail"></div><h5>Netflix wachtwoord</h5><div class="input_item"><i class="fa fa-key" aria-hidden="true"></i><input type="password" placeholder="**********" class="inlogEmail"></div></div>'
                                break;  
            
        case 'meldingAflevering': popupContent += '<h4>Melding bij nieuwe aflevering</h4><div class="meldingAflevering"><div class="inputField"><div class="input_item"><i class="fa fa-times"></i><input type="password" placeholder="The Big Bang Theory" class="inlogEmail" disabled ></div><div class="input_item"><i class="fa fa-times"></i><input type="password" placeholder="The Walking Dead" class="inlogEmail" disabled ></div><div class="input_item"><i class="fa fa-times"></i><input type="password" placeholder="Gert Late Night" class="inlogEmail" disabled ></div><div class="input_item"><i class="fa fa-times"></i><input type="password" placeholder="Mijn Pop-Up Restaurant" class="inlogEmail" disabled ></div><div class="input_item"><i class="fa fa-times"></i><input type="password" placeholder="Zie Mij Graag" class="inlogEmail" disabled ></div> <div class="input_item"><i class="fa fa-times"></i><input type="password" placeholder="Perfect 2.0" class="inlogEmail" disabled ></div><div class="input_item"><i class="fa fa-times"></i><input type="password" placeholder="Jani Gaat..." class="inlogEmail" disabled ></div><div class="input_item"><i class="fa fa-times"></i><input type="password" placeholder="Komen Eten" class="inlogEmail" disabled ></div></div><div class="footer"></div></div>'    
            
                                break;
            
        case 'verwijderOpnames': popupContent += ' <h4>Verwijder oude opnames</h4><div class="verwijderOpnames"><div class="inputField"><div class="input_item"><i class="fa fa-check-square-o"></i><input type="text" placeholder="Grimm" class="inlogEmail" disabled ><i class="fa fa-link"></i></div><div class="input_item"><i class="fa fa-check-square-o"></i><input type="text" placeholder="The Walking Dead" class="inlogEmail" disabled ><i class="fa fa-link"></i></div><div class="input_item"><i class="fa fa-check-square-o"></i><input type="text" placeholder="Gert Late Night" class="inlogEmail" disabled ><i class="fa fa-link"></i></div><div class="input_item"><i class="fa fa-check-square-o"></i><input type="text" placeholder="Mijn Pop-Up Restaurant" class="inlogEmail" disabled ><i class="fa fa-link"></i></div><div class="input_item"><i class="fa fa-check-square-o"></i><input type="text" placeholder="Zie Mij Graag" class="inlogEmail" disabled ><i class="fa fa-link"></i></div><div class="input_item"><i class="fa fa-check-square-o"></i><input type="text" placeholder="Perfect 2.0" class="inlogEmail" disabled ><i class="fa fa-link"></i></div><div class="input_item"><i class="fa fa-check-square-o"></i><input type="text" placeholder="Jani Gaat..." class="inlogEmail" disabled ><i class="fa fa-link"></i></div><div class="input_item"><i class="fa fa-check-square-o"></i><input type="text" placeholder="Komen Eten" class="inlogEmail" disabled ><i class="fa fa-link"></i></div></div><div class="footer"></div></div>'
                    
                                break;
                }
    

        /* POP UP op pagina zetten */
        if(popup == 'verwijderOpnames'){
            popupContent+= "<p>Annuleren</p><p>Verwijderen</p></div>/<section>";
        } else {
            popupContent+= "<p>Annuleren</p><p>Opslaan</p></div>/<section>";
        }
    
    
    if($(window).width() > 540){
        $('.grid_container').append(popupContent);
    } else{
        $('.grid_container').append(popupContent);
        $('main').addClass('hidden');
   }
    
    
    /*pop up width geven van body*/
    var bodyWidth = $('body').width();

    if($(window).width() > 540) {
        bodyWidth -= 70; /* body with - aside */
        $('.popUp').width(bodyWidth);
    } else if($(window).width() < 540){
        bodyWidth -= 80;
        $('.popUp').width(bodyWidth);
        $('.footer').width(bodyWidth);
        $('.popUpBox').width(bodyWidth);
    }
    
    
    /* pop up verwijderen bij klik op button */    
    $('.popUp p').on('click',function(){
        $('.popUp').remove(); 
        $('body').css('overflow','auto');
        $('.grid_container').css('overflow','auto');
        $('main').removeClass('hidden');
        var headerWidth = $("main").width();
        $("header").width(headerWidth);
    });
    
    /* payment options - tussen opties kiezen */
    $('.popUpBox .paymentOptions li').on('click',function(){
        $(".popUpBox .paymentOptions .selected").removeClass('selected');
        $(this).addClass('selected');
        var option = $(this).data('option');
        
        $('.input_item i').removeClass();
        $('.input_item i').addClass('fa');
        $('.input_item input').attr('placeholder','');
        $('.input_item input').val('');
        switch(option){
            case 'Paypal':  $('.input_item i').addClass('fa-paypal');
                            $('.input_item input').attr('placeholder','**** - **** - 8392');
                            break;
                
            case 'Credit card':  $('.input_item i').addClass('fa-credit-card');
                            break;
                
            case 'Visa':  $('.input_item i').addClass('fa-cc-visa');
                            break;
                
            case 'Stripe':  $('.input_item i').addClass('fa-cc-stripe');
                            break;
                
            case 'Mastercard':  $('.input_item i').addClass('fa-cc-mastercard');
                            break;
        }

        option += " gegevens";
        $('.inputField h5').html(option);
    });
    
    /* streaming apps options - tussen opties kiezen */
    $('.popUpBox .streamingOptions li').on('click',function(){
        $(".popUpBox .streamingOptions .selected").removeClass('selected');
        $(this).addClass('selected');
        var option = $(this).data('option');
        
        switch(option){
            case 'Netflix': $('.inputField .input_item:nth-of-type(1) input').attr('placeholder','jamir.hickle@gmail.com');
                            $('.inputField .input_item:nth-of-type(2) input').attr('placeholder','**********');
                            break;
                
            case 'Amazon':  $('.inputField .input_item:nth-of-type(1) input').attr('placeholder','jamir.hickle@gmail.com');
                            $('.inputField .input_item:nth-of-type(2) input').attr('placeholder','******');
                            break;
                
            case 'Hulu':    $('.inputField .input_item:nth-of-type(1) input').attr('placeholder','');
                            $('.inputField .input_item:nth-of-type(2) input').attr('placeholder','');
                            break;
                
            case 'HBO Now': $('.inputField .input_item:nth-of-type(1) input').attr('placeholder','');
                            $('.inputField .input_item:nth-of-type(2) input').attr('placeholder','');
                            break;    
        }

        $('.inputField h5:nth-of-type(1)').html(option+' gebruikersnaam');
        $('.inputField h5:nth-of-type(2)').html(option+' wachtwoord');
    });
    
    $('.verwijderOpnames i:nth-of-type(1)').on('click',function(){
        if($(this).hasClass('fa-check-square-o')){
            $(this).removeClass('fa-check-square-o');
            $(this).addClass('fa-square-o');
        } else {
            $(this).addClass('fa-check-square-o');
            $(this).removeClass('fa-square-o');
        }
    });
    
    $('.verwijderOpnames .input_item').hover(
      function() {
        $(this).find('i:nth-of-type(2)').css('display','block');
      }, function() {
        $(this).find('i:nth-of-type(2)').css('display','none');
      }
    );
    
    /* verwijder bij meldingen nieuwe aflevering */
    var meldingCount = 0;
    $('.meldingAflevering .fa.fa-times').on('click',function(){
        $(this).closest('.input_item').remove();
        meldingCount ++
        if( meldingCount == 8 ){
            $('.meldingAflevering .inputField').append("<h6>Er zijn  geen series waarbij u meldingen ontvangt.</h6>");
        }
    });

}

function main() {

    $('.normalBar .fa.fa-star-o').on('click',function(){
        $(this).toggleClass('filledStar');
     });
    
    /* Resizing fixed header - search bar */
    var headerWidth = $("main").width();
    $("header").width(headerWidth);
    //$('.popUp').width(headerWidth);
    
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
    
    /* POP UP */
    
    $('[data-popup]').on('click',popUp);
    var notifications = 0;
    $('.latestNotifications .fa.fa-times').on('click',function(){
        $('.latestNotifications li.hidden:first').removeClass('hidden');
        $(this).closest('li').remove();
        
        notifications ++
        if( notifications == 8 ){
            $('.latestNotifications').append('<p style="float:left;margin-bottom:15px;">Wenst u een melding te krijgen?</p><li><a href="#"><i class="fa fa-square-o"></i></a> <p>24 Legacy</p></li><li><a href="#"><i class="fa fa-square-o"></i></a> <p>Arrow</p></li>');
            
            $('.latestNotifications .fa.fa-square-o').on('click',function(){
                $(this).addClass('fa-check-square-o');
                $(this).removeClass('fa-square-o');
                
            });

            $('.latestNotifications .fa.fa-check-square-o').on('click',function(){
                $(this).addClass('fa-square-o');
                $(this).removeClass('fa-check-square-o');
            });
        }
        
    });
    
}
window.onload = function() {
    main();
    resizeSeries();
};

window.onresize = function(){
    var headerWidth = $("main").width();
    $("header").width(headerWidth);
    
    /* POP UP */
    var bodyWidth = $('body').width();
        if($(window).width() > 540) {
        bodyWidth -= 70; /* body with - aside */
        $('.popUp').width(bodyWidth);
    } else {
        $('.popUp').width(bodyWidth);
    }
    
    resizeSeries();
};
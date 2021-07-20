jQuery(function(){
    $("#navmenu span").on('click', ()=>{
        let navMenuList = $('#navmenu ul'); 
        console.log(navMenuList.css('display')); 
        if(navMenuList.css('display').indexOf('none') === -1){
            navMenuList.css('display', 'none');
        }
        else{
            navMenuList.css('display', 'block');
        }
    });

    $("#splash-expand").on('click', ()=>{
        scrollToElement($("#projects")); 
    }); 

    $("#nav-about").on('click', ()=>{
        scrollToElement($("#about")); 
    }); 

    $("#nav-projects").on('click', ()=>{
        scrollToElement($("#projects")); 
    }); 

    $("#nav-contact").on('click', ()=>{
        scrollToElement($("#contact")); 
    }); 

    $("#contact-email").on('click', ()=>{
        document.location = "mailto:amandajhernandez@outlook.com";
    });

    $("#mfm-read-more").on('click', () => {
        $('#mfm-extended-description').show(); 
        $("#mfm-hide-more").show(); 
        $("#mfm-read-more").hide(); 

    });

    $("#mfm-hide-more").on('click', () => {
        $('#mfm-extended-description').hide(); 
        $("#mfm-hide-more").hide(); 
        $("#mfm-read-more").show(); 
    });

});

function scrollToElement(element){
    var elementTop = element.offset().top; 
    $([document.documentElement, document.body]).animate({
        scrollTop: elementTop - 25
    }, 1000);
}

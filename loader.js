$(document).ready(function(){
    $('.modal').modal();
    $('.pushpin').pushpin();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({full_width: true});
    $('.myreviews').carousel({
        
        numVisible: 7,
        shiftValue: 1,
        padding: 150,
    });
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip({

        inDuration: 0,
        enterDelay: 0,
        exitDelay: 0,
        outDuration: 0,
    });
    $(".dropdown-trigger").dropdown();
    $('.collapsible').collapsible();
    $('.scrollspy').scrollSpy();
    
    
});






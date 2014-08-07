$(".small-logo").on("click", function(e){
  e.preventDefault();
  // e.stopPropagation();
  $("body").toggleClass("show-nav");
});

$('a.smooth').on('click', function(e){
  var target = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000);
  e.preventDefault();
});

$('#projects').waypoint(function(direction) {
  $("nav").toggleClass('is-visible');
}, { offset: 10 });

$(".nav-menu").on('click', function(){$("body").removeClass("show-nav")});

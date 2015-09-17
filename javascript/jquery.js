// $( ".block" ).click(function() {
//   $( ".block" ).fadeOut( "slow", function() {
//     // Animation complete.
//   });
// });

$(document).ready(function() {

$(".hover-background").hover(function() {
                $(".content").toggleClass("purple")
	});

});
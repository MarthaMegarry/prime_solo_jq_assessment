var $stripe;
var $generate = $('#generate');
var counter = 0;
var $stripeBox = $('#stripeBox');
var $stripeName;
var $color;
var $remove;

//document ready loop
$(document).ready(function() {

	//event handler for Generate button
	$generate.on('click', function() {
		//add to counter to keep track of how many times generate has been clicked
		counter++

		//var for line number text
		$stripeName = ('<h2>Line #' + counter + '</h2>');

		//create Change color button in the div with class to call
		$color = $('<button>Change Color</button>').attr('class', 'colorMe');

		//create remove button button in the div with class to call
		$remove = $('<button class="remove">Remove</button>');

		$stripe = $("<div></div>").append($stripeName, $color, $remove);

		//create a new div in the dom
		$stripeBox.append($stripe);	
		

		//ok so these functions below have to go inside the generate event handler...and I don't know why. Maybe because the html elements even though they are in the DOM are actually still only accessable in the scope of the the generate event handler???

		//change color function/event handlers
		$("div").on("click", ".colorMe", function(){
	        $(this).parent().addClass('colorThis');
	        $(this).addClass('clicked');
	    });

		$("div").on('click', ".clicked", function(){
			$(this).parent().removeClass("colorThis");
			$(this).removeClass("clicked");
		});


		//Remove button function/event handler
		$('.remove').on('click', function(){
			console.log(2);
			$(this).parent().remove();

		});
	//end of generate function 	
	});

//end document ready loop
});






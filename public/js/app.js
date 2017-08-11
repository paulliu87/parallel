// var sceneEl = document.querySelector('a-scene');
var box
$(document).ready(function() {
	box = $('a-box');
	var button = $("#button");
	console.log("js worked");
	// Add event listener with `addEventListener`.
	console.log("hello");
	$('#button').on('click', function (e) {
	  // Modify entity with `setAttribute`.
	  console.log("clicked!");
	  box.attr('color','blue');
	});


	// Get data about entity with `getAttribute`.
	console.log("hellp");
	// >> {x: -1, y: 0.5, z: -3}

	// Add event listener with `addEventListener`.
	box.on('click', function () {
	  // Modify entity with `setAttribute`.
	  	box.attr('color', 'green');
	  	console.log("clicked!");
	});
})
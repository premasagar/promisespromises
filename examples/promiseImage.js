var	firstPromise, secondPromise, thirdPromise,
	images = [];

firstPromise  = jQuery.get('http://farm8.staticflickr.com/7010/6751627459_685330f95d_m.jpg', addImage);
secondPromise = jQuery.get('http://farm8.staticflickr.com/7173/6774879243_d81744f248_m.jpg', addImage);
thirdPromise  = jQuery.get('http://farm8.staticflickr.com/7031/6726223445_436d7ac38a_m.jpg', addImage);

function addImage(data) {
	imags.push(data);
}

jQuery
	.when(firstPromise, secondPromise, thirdPromise)
	.then(function(){
		// display images
	});
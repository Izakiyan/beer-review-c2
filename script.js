var beers = []

var updateBeers = function () {
	$('.beers-list').empty();
 
	for (var i = 0; i < beers.length; i++) {
		var beerHTML = "<li>" + beers[i].name /
		+ "-"	+ beers[i].category+"</li>";
		$('.beers-list').append(beerHTML);
	}
}

var addBeer = function (beerName,beerCategory) {
	var newBeer = {
		name: beerName,
		category: beerCategory
	};

	beers.push(newBeer)
};

$('post-beer').on('click', function (event) {
	event.preventDefault();
	var name = $('.beer-input').val();
	var category = $('category-input').val();
	addBeer(name,category);
});
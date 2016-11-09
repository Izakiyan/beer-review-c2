var beers = [];

var addBeer = function(name, category) {
	var beer = new Object();
	beer.name = name;
	beer.category = category;
	beers.push(beer);
};

var updateBeers = function () {
	$('.beers-list').empty();
	for (var i = 0; i < beers.length; i++) {
		$('.beers-list').append('<li>'+beers[i].name+"-"+beers[i].category+'</li>');
	};
};

$('.post-beer').on('click', function () {
	var name = $(".beer-input").val();
	var category = $(".category-input").val();
	addBeer(name,category);
	updateBeers();
});
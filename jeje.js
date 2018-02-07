$(window).on("load", function() {
	$.get("https://www.pokeapi.co/api/v2/pokemon/549/", function (data) {
			$("#id").append(data.id); //ID
			$("#normal").prepend("<img src="+data.sprites.front_default+" />");
			$("#shiny").prepend("<img src="+data.sprites.front_shiny+" />");
			$("#name").append(data.name);
			$("#type").append(data.types[0].type.name);
		}, "json");
});

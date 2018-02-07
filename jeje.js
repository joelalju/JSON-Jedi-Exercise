$(window).on("load", function() {
	$.get("https://www.pokeapi.co/api/v2/pokemon/549/", {ID: "549", Normal: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
			Shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/549.png", Name: "lilligant", Type: "Grass";}, function (data) {
			
			$("#id").append(species.id); //ID
			$("#normal").append(sprites.front_default);
			$("#shiny").append(sprites.front_shiny);
			$("#name").append(species.name);
			$("#type").append(types.0.type.name);
		}
	);
	
}, "json");

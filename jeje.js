var id = 549; 

$(window).on("load", function() {
	getjson();
	$("#next").on("click", function() {
			id++;
			getjson();
	})
});

function getjson() {
	$.get("https://www.pokeapi.co/api/v2/pokemon/"+id+"/", function (data) {
			$("#id").text(data.id); //ID
			$("#normal").html("<img src="+data.sprites.front_default+" />");
			$("#shiny").html("<img src="+data.sprites.front_shiny+" />");
			$("#name").text(data.name);
			$("#type").text(data.types[0].type.name);
			$("#type2").text(data.types[1].type.name);
		}, "json");
}

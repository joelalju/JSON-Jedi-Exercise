var id = 549;
var aux = 549;

$(window).on("load", function() {
	getjson();
	
	$("#next").on("click", function() {
		  aux = id;
			id++;
			getjson();
	})
	
	$("#last").on("click", function() {
		  var aux2 = id;
			id = aux;
			aux = aux2;
			getjson();
	})
	
	$("#search_b").on("click", function() {
		  aux = id;
			id = $("#search").val();
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

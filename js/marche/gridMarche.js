$(document).ready(function () {

	$('#grid_marche').datagrid({
		url:'data/marche/readMarche.cfm',
	    columns:[[
	    	{field:'nomemarca',title:'NOME',width:110}
	    	
	  	]]
	});

});
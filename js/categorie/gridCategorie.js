$(document).ready(function () {

	$('#grid_categorie').datagrid({
		url:'data/categorie/readCategorie.cfm',
	    columns:[[
	    	{field:'nomecategoria',title:'Categoria',width:80}
	    	
	  	]]
	});

});
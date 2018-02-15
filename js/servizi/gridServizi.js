$(document).ready(function () {
	
	$('#grid_servizi').datagrid({
		rownumbers:true,
		fit:true,
		fitColumns:true,
		singleSelect:true,
		//pagination:true,
		//pageSize:20,
		view:groupview,
	        groupField:'nomecategoria',
	        groupFormatter:function(value,rows){
				if (rows.length > 1) {
					var serv = " servizi )";
				} else {
					var serv = " servizio )";
				}
				return value + " ( " + rows.length + serv;
	        },
	    url:'data/servizi/readServizi.cfm',
	    columns:[[
	    	{field:'servizio',title:'Servizio',width:100,sortable:true},
	    	{field:'unita',title:'Unita',align:'center',width:80},
	    	{field:'prezzo',title:'Prezzo del Servizio',align:'center',width:80,sortable:true,
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	
	    	}
	    ]]
	});
});

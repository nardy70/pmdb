$(document).ready(function () {

	$('#grid_inventario2').datagrid({
		title:"INVENTARIO IN DATA: " + data_selez,
		url:'data/inventario/readInv.cfm',
	    columns:[[
			{field:'nome',title:'Prodotto',align:'left',width:'240px',sortable:true},
			{field:'qtyprodvenduti',title:'Venduti',align:'center',width:'57px',sortable:true},
			{field:'orainmagazzino',title:'In Magazzino',align:'center',width:'87px',sortable:true},
			{field:'prezzofattura',title:'Prezzo Fattura',align:'center',width:'88px',sortable:true,
				formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ('0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
	    	{field:'tot',title:'Totale',align:'center',width:'80px',sortable:true,
				formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ('0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	}
	    ]]
	});

});

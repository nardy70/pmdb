$(document).ready(function () {
	
	$('#grid_venditeaiclienti').datagrid({
		url:'data/attivita/prodottoVendutoAiClienti.cfm',
		rownumbers:true,
		fit:true,
		fitColumns:true,
		singleSelect:true,
		pagination:true,
		pageSize:10,
		border:true,
		columns:[[
	    	{field:'data',title:'Data',width:80,sortable:true,align:'center',
				formatter: function(value){
					var d = new Date(value);
					if (isNaN(d)){
						return null;
					} else {
						var giorno = ('0'+d.getDate()).slice(-2);
						var mese = ('0'+(d.getMonth()+1)).slice(-2);
						var anno = d.getFullYear();
						return (giorno + "-" + mese + "-" + anno);
					}
				},
				parser: function(s){
					return new Date(s);
				}
			},
	    	{field:'nomecognome',title:'Nome e Cognome',width:200,sortable:true},
			{field:'prezzo',title:'Prezzo',width:50,align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){ 
	    				return ("\u20ac " + '0,00');		// "\u20ac" = simbolo euro
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
			{field:'prezzoapplicato',title:'P. Applicato',width:65,align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){ 
	    				return ("\u20ac " + '0,00');		// "\u20ac" = simbolo euro
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
			{field:'qty',title:'Q.ta',width:30,align:'center'},
			{field:'staff',title:'Staff',width:65,align:'center'}
		]],
	});
	
});
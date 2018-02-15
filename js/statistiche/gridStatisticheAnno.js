$(document).ready(function () {
	$('#grid_statisticheanno').datagrid({
		url:'data/statistiche/readStatisticheAnno.cfm',
		rownumbers:false,
		fitColumns:true,
		striped:true,
	    columns:[[
	    	{field:'anno',title:'Anno',align:'center'},
				{field:'passaggi',title:'Passaggi',align:'center'},
				{field:'gg_lavoro',title:'gg Lavoro',align:'center'},
				{field:'incasso_servizi',title:'Incasso Servizi',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
				{field:'incasso_prodotti',title:'Incasso Prodotti',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
				{field:'incasso_totale',title:'Incasso Totale',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
	    	{field:'fiche_media_servizi',title:'Fiche Servizi',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ('0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
				{field:'fiche_media_totale',title:'Fiche Totale',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ('0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
				{field:'percentuale_vendite',title:'Percentuale Vendite',align:'center',
					formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ('0,00' + " \u0025");
	    			} else {
	    				return (accounting.formatMoney(value, "", 2, ".", ",") + " \u0025");
	    			}	
	    		}
	    	},
			
			
				{field:'',title:'',
					styler: function(value,row,index){
						return 'background-color:#EFEFEF;';
					}
				},
			
			
				{field:'incasso_servizi_netto',title:'Incasso Netto Servizi',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
				{field:'incasso_prodotti_netto',title:'Incasso Netto Prodotti',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
				{field:'incasso_totale_netto',title:'Incasso Netto Totale',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	}
	    ]]
		//rowStyler: function(index,row){
		//	if (index % 2){
		//		return 'background-color:#EFEFEF;';
		//	}
		//}
	});
});

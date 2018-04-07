$(document).ready(function () {
	$('#grid_statistichegestione').datagrid({
		url:'data/statistiche/readStatisticheGestione.cfm',
		rownumbers:false,
		fitColumns:true,
		striped:true,
	    columns:[[
	    	{field:'data',title:'Data',align:'center',
	    		formatter: function(value){
					var d = new Date(value);
					var giorno = ('0'+d.getDate()).slice(-2);
					var mese = ('0'+(d.getMonth()+1)).slice(-2);
					var anno = d.getFullYear();
					return (giorno + "-" + mese + "-" + anno);
				},
	    	},
	    	{field:'passaggi_donna',title:'Passaggi Donna',align:'center'},
			{field:'stilistici_F',title:'Stilistici F',align:'center'},
			{field:'tecnici_F',title:'Tecnici F',align:'center'},
			{field:'trattamenti_F',title:'Trattamenti F',align:'center'},
			{field:'immagine_F',title:'Immagine F',align:'center'},
			{field:'nr_clienti_rivendita_F',title:'Nr. Clienti Rivendita F',align:'center'},
			{field:'incasso_servizi_F',title:'Incasso Servizi F',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
			{field:'incasso_rivendita_F',title:'Incasso Rivendita F',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
	    	{field:'passaggi_uomo',title:'Passaggi Uomo',align:'center'},
			{field:'stilistici_M',title:'Stilistici M',align:'center'},
			{field:'tecnici_M',title:'Tecnici M',align:'center'},
			{field:'trattamenti_M',title:'Trattamenti M',align:'center'},
			{field:'immagine_M',title:'Immagine M',align:'center'},
			{field:'nr_clienti_rivendita_M',title:'Nr. Clienti Rivendita M',align:'center'},
			{field:'incasso_servizi_M',title:'Incasso Servizi M',align:'center',
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
			{field:'incasso_rivendita_M',title:'Incasso Rivendita M',align:'center',
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

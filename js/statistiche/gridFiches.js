$(document).ready(function () {
	$('#grid_fichemediaservizi').datagrid({
		url:'data/statistiche/readFicheMediaServizi.cfm',
	    columns:[[
			{field:'giorni',title:'gg Lavoro<br>da gen.2015',align:'center',width:'68px'},
			{field:'fichemediaservizi',title:'Fiche Media<br>Servizi',align:'center',width:'90px',
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
	
	$('#grid_fichemediatotale').datagrid({
		url:'data/statistiche/readFicheMediaTotale.cfm',
	    columns:[[
			{field:'giorni',title:'gg Lavoro<br>da gen.2015',align:'center',width:'68px'},
			{field:'fichemediatotale',title:'Fiche Media<br>Totale',align:'center',width:'90px',
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
	
	$('#grid_percentualevendite').datagrid({
		url:'data/statistiche/readPercentualeVendite.cfm',
	    columns:[[
			{field:'percentualevendite',title:'Percentuale<br>%',align:'center',width:'88px',
				formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ('0,00');
	    			} else {
	    				return accounting.formatMoney(value, "", 2, ".", ",");
	    			}	
	    		}
	    	}	    
	    ]]
	});
});

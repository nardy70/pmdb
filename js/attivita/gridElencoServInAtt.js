$(document).ready(function () {

	$('#grid_elencoservinatt').datagrid({
		rownumbers:false,
		fit:true,
		fitColumns:true,
		singleSelect:true,
		//pagination:true,
		//pageSize:20,
		border:false,
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
	    	{field:'servizio',title:'Servizio',width:300,sortable:true},
	    	{field:'unita',title:'Unita',align:'center'},
	    	{field:'prezzo',title:'Prezzo',align:'center',sortable:true,
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	
	    	}
	    ]],
	    
	    onDblClickRow: function(index, row){ 
	      if(clienteSelezionato){
	      	var indiceS = $('#grid_servizialcliente').datagrid('getData');
	      	idx = indiceS.total;
	      	
	      	if(!clickS){
		    	$('#grid_servizialcliente').datagrid('insertRow', {
		    		index:idx,
					row:{
						idservizio: row.id,
						servizio: row.servizio,
						storicoprezzo: row.prezzo,
						prezzoapplicato: row.prezzo,
						tempo: "",
						staff: ""
					}
				});
				
				$('#grid_servizialcliente').datagrid('selectRow',idx);
				$('#grid_servizialcliente').datagrid('beginEdit',idx);
				
				clickS = true;
	      	}
			
		  } else {
		  	$.messager.alert('ATTENZIONE','Devi prima aggiungere o selezionare un cliente dalla tabella <br> \"CLIENTI DEL GIORNO\"','info');
		  }
	    }
	    
	});
	
});

function cercaservinatt() {
	$('#grid_elencoservinatt').datagrid('load',{
		filtronomeservizio: $('#filtro_nomeservizinatt').val()
		});
}

function pulisciservinatt() {
	$('#filtro_nomeservizinatt').searchbox('clear');
	$('#grid_elencoservinatt').datagrid('reload',{
		url: 'data/servizi/readServizi.cfm'
	});
}
var clienteSelezionato;
var clickS;
var clickP;

$(document).ready(function () {
	dt = new Date();
	
	$('#grid_attivitagiorno').datagrid({
		url:'data/attivita/readAttivitaGiorno.cfm',
		rownumbers:true,
		fitColumns:true,
		singleSelect:true,
		showHeader:false,
		queryParams:{data: (dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate())},
	    columns:[[
	    	{field:'id',hidden:'true'},
	    	{field:'data',hidden:'true'},
	    	{field:'idcliente',title:'Nome e Cognome Cliente', sortable:true,
	    		formatter: function(value){
	    			return value.nomecognome;
	    		}
	    	}
	    ]],
	    
	    onClickRow: function(index, row){
	    	clienteSelezionato = true;
			clickS = false;
	    	
	    	var cliente = "<span style='color:blue'>" + row.idcliente['nomecognome'] + "</span>";
	    	var d = new Date(row.data);
	    	var giorno = "<span style='color:blue'>" + ('0'+d.getDate()).slice(-2)+'-'+('0'+(d.getMonth()+1)).slice(-2)+'-'+d.getFullYear() + "</span>";
			var text = "<span style='font-size:18px;'>" + "Attivita al Cliente: " + cliente + " in data: " + giorno + "</span>";
			$('#panel_attCli').panel('setTitle',text );
			
			$('#grid_servizialcliente').datagrid('load',{
				idattivita: row.id
			});
			$('#grid_prodottialcliente').datagrid('load',{
				idattivita: row.id
			});
	    }

	});
	
	$('#calendario').calendar({
		onSelect: function(date){
			dataselez = (date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate());
			$('#grid_attivitagiorno').datagrid('reload',{
				data: dataselez
			});
			$('#panel_attCli').panel('setTitle',' ' );
			$('#grid_servizialcliente').datagrid('load',{
				idattivita: 0
			});
			$('#grid_prodottialcliente').datagrid('load',{
				idattivita: 0
			});
		}
	});
	
	$('#aa').accordion({
		onSelect:function(title,index){
			switch(index){
				case 0: titolo = 'PRODOTTI - (Doppio click per selezionare)'; break;
				case 1: titolo = 'SERVIZI - (Doppio click per selezionare)'; break;
				case 2: titolo = 'STORICO CLIENTI - (Doppio click per selezionare)'; break;
			}
			var pp = $('#aa').accordion('getPanel',index);
			if (pp){
			    pp.panel('setTitle',titolo);
			}
		},
		onUnselect:function(title,index){
			switch(index){
				case 0: titolo = 'PRODOTTI'; break;
				case 1: titolo = 'SERVIZI'; break;
				case 2: titolo = 'STORICO CLIENTI'; break;
			}
			var pp = $('#aa').accordion('getPanel',index);
			if (pp){
			    pp.panel('setTitle',titolo);
			}
		},
	});
	
});

/*$('#grid_attivitagiorno').datagrid('load',{
	data: new Date()
});*/
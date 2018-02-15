$(document).ready(function () {
	
	$('#grid_elencoprodinatt').datagrid({
	    //rownumbers:true,
		fitColumns:true,
		singleSelect:true,
		fit:true,
		//pagination:true,
		//pageSize:20,
		rowStyler: function(index,row){
			if(row.ORAINMAGAZ < 3){
				if(row.ORAINMAGAZ <= 0){
					return 'color:#FF0000';
				} else {
					return 'color:#B88A00';
				} 
			} else {
				return 'color:#009900';
			}
		},
		view:groupview,
        groupField:'nomemarca',
        groupFormatter:function(value,rows){
        	if (rows.length > 1) {
				var art = " articoli )";
			} else {
				var art = " articolo )";
			}
			return value + " ( " + rows.length + art;
        },
		url:'data/prodotti/readProdottiNoVendita.cfm',
		//title:'ELENCO PRODOTTI ',
	    columns:[[
	    	{field:'nome',title:'Nome',width:245,sortable:true},
	    	{field:'SUMVENDUTI',align:'center',title:'n.Vend.',width:45,styler:cellStyler},
	    	{field:'prezzocliente',title:'Prezzo',align:'center',sortable:true,
	    		formatter:function(value){
	    			if (isNaN(value) || value === '' || value === null){ 
	    				return ("\u20ac " + '0,00');		// "\u20ac" = simbolo euro
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
	    	{field:'ORAINMAGAZ',title:'Mgz.',align:'center'}
	    ]],
	    
	    onDblClickRow:function(index, row){
	      var row = $('#grid_elencoprodinatt').datagrid('getSelected');

	      if(row.ORAINMAGAZ>0){

	      	if(clienteSelezionato){
	      	var indiceP = $('#grid_prodottialcliente').datagrid('getData');
	      	idx = indiceP.total;
	      	
	      	if(!clickP){
		    	$('#grid_prodottialcliente').datagrid('insertRow', {
		    		index:idx,
					row:{
						idprodotto: row.id,
						prodotto: row.nome,
						storicoprezzo: row.prezzocliente,
						prezzoapplicato: row.prezzocliente,
						qty: 1,
						staff: ""
					}
				});
			
				$('#grid_prodottialcliente').datagrid('selectRow',idx);
				$('#grid_prodottialcliente').datagrid('beginEdit',idx);
				
				clickP = true;
			}
			
		    } else {
		  		$.messager.alert('ATTENZIONE','Devi prima aggiungere o selezionare un cliente dalla tabella <br> \"CLIENTI DEL GIORNO\"','info');
		  	}

	      } else {
	      	  $.messager.alert('ATTENZIONE','PRODOTTO ESAURITO','error');
	      };
 
	    }

	});
	
});

function cercaprodinatt() {
	$('#grid_elencoprodinatt').datagrid('load',{
		filtronomeprodotto: $('#filtro_nomeprodinatt').val()
		});
}

function barcodeprodinatt() {
	$('#grid_elencoprodinatt').datagrid('load',{
		filtrobarcodeprodotto: $('#filtro_barcodeprodinatt').val()
		});
}

function pulisciprodinatt() {
	$('#filtro_nomeprodinatt').searchbox('clear');
	$('#filtro_barcodeprodinatt').searchbox('clear');
	$('#grid_elencoprodinatt').datagrid('reload',{
		url: 'data/prodotti/readProdotti.cfm'
	});
}

function cellStyler(value,row,index){
        return 'color:black;';
}

function venduti(){
	var row = $('#grid_elencoprodinatt').datagrid('getSelected');
	if(row){
		//console.log(row.id);
		var pvac = "<span style='color:blue'>" + row.nome + "</span>";
		$('#dlg_prodottovendutoaiclienti').dialog('open').dialog('setTitle', 'CLIENTI CHE HANNO ACQUISTATO ' + pvac);
		$('#grid_prodottovendutoaiclienti').datagrid('reload',{ id: row.id });
	}
	else {
	  	$.messager.alert('ATTENZIONE','Devi prima selezionare il Prodotto','info');
	}
	
}
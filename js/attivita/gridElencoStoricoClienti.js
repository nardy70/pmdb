$(document).ready(function () {
	
	$('#grid_elencostoricoclienti').datagrid({
		url:'data/anagrafica/readAnagrafica.cfm',
		rownumbers:true,
		fit:true,
		fitColumns:true,
		singleSelect:true,
		pagination:true,
		pageSize:20,
		border:false,
	    columns:[[
	    	{field:'nome',title:'Nome',width:160,sortable:true},
	    	{field:'cognome',title:'Cognome',width:160,sortable:true},
	    	{field:'registrazione',title:'Registrato il',width:90,sortable:true,align:'center',sortable:true,
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
				}
			}
	    ]],
	    
	    onDblClickRow: function(index, row){
	    	var cliente = "<span style='color:blue'>" + row.nomecognome + "</span>";
	    	$('#dlg_storicocliente').dialog('open').dialog('setTitle','STORICO DI: ' + cliente);
	    	$('#dlg_storicocliente').dialog('refresh', 'data/attivita/attivitaStoricoCliente.cfm?id=' + row.id + '&limit=' +4);
	    	//console.log(index, row);
	    }
	    
	});
	
});

function cercastoricoclienti() {
	$('#grid_elencostoricoclienti').datagrid('load',{
		nome: $('#filtro_nomestoricoclienti').val()
		});
}

function puliscistoricoclienti() {
	$('#filtro_nomestoricoclienti').searchbox('clear');
	$('#grid_elencostoricoclienti').datagrid('reload',{
		url: 'data/anagrafica/readAnagrafica.cfm'
	});
}
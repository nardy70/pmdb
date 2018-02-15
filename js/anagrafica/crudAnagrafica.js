var url;

function newCliente(){
    $('#dlg_anagrafica').dialog('open').dialog('setTitle','NUOVO CLIENTE');
    $('#form_anagrafica').form('clear');
    url = 'data/anagrafica/newAnagrafica.cfm';
}

function editCliente(){
	$('#form_anagrafica').form('clear');
	var row = $('#grid_anagrafica').datagrid('getSelected');
	if (row){
		$('#dlg_anagrafica').dialog('open').dialog('setTitle','CLIENTE DA MODIFICARE');
		$('#form_anagrafica').form('load',row);
		url = 'data/anagrafica/editAnagrafica.cfm?id='+row.id;
	}
}

function saveCliente(){
	$('#form_anagrafica').form('submit',{
		url: url,
		onSubmit: function(){
			return $(this).form('validate');
		},
		success: function(result){
				$('#dlg_anagrafica').dialog('close');
				$('#grid_anagrafica').datagrid('reload');
				$('#idcliente').combobox('reload');
		}
	});
}

function removeCliente(){
	var row = $('#grid_anagrafica').datagrid('getSelected');
	if (row){
		$.messager.confirm('Conferma','Sicuro di rimuovere il cliente selezionato?',function(r){
			if(r){
				$.post('data/anagrafica/removeAnagrafica.cfm',{id:row.id},function(){
					$('#grid_anagrafica').datagrid('reload');
				});
			}
		});
	}
}

function cercacliente() {
	$('#grid_anagrafica').datagrid('load',{
		nome: $('#filtro_nomecliente').val()
		});
}

function puliscicliente() {
	$('#filtro_nomecliente').searchbox('clear');
	$('#grid_anagrafica').datagrid('reload',{
		url: 'data/anagrafica/readAnagrafica.cfm'
	});
}
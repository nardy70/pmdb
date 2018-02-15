var url;

function newMarca(){
    $('#dlg_marca').dialog('open').dialog('setTitle','INSERISCI UNA NUOVA MARCA');
    $('#form_marca').form('clear');
    url = 'data/marche/newMarca.cfm';
}

function editMarca(){
	$('#form_marca').form('clear');
	
	var row = $('#grid_marche').datagrid('getSelected');
	if (row){
		$('#dlg_marca').dialog('open').dialog('setTitle','MARCA DA MODIFICARE');
		$('#form_marca').form('load', row);
		url = 'data/marche/editMarca.cfm?id='+row.id;
	}
}

function saveMarca(){
	$('#form_marca').form('submit',{
		url: url,
		onSubmit: function(){
			return $(this).form('validate');
		},
		success: function(result){
				$('#dlg_marca').dialog('close');
				$('#grid_marche').datagrid('reload');
				$("#dlg_prodotto").dialog('close');
				$('#grid_prodotti').datagrid('reload');
		}
	});
}

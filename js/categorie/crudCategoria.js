var url;

function openCategorie(){
	$('#dlg_categorie').dialog('open').dialog('setTitle','GESTISCI CATEGORIE');
	
}

function newCategoria(){
    $('#dlg_categoria').dialog('open').dialog('setTitle','INSERISCI UNA NUOVA CATEGORIA');
    $('#form_categoria').form('clear');
    url = 'data/categorie/newCategoria.cfm';
}

function editCategoria(){
	$('#form_categoria').form('clear');
	
	var row = $('#grid_categorie').datagrid('getSelected');
	if (row){
		$('#dlg_categoria').dialog('open').dialog('setTitle','CATEGORIA DA MODIFICARE');
		$('#form_categoria').form('load', row);
		url = 'data/categorie/editCategoria.cfm?id='+row.id;
	}
}

function saveCategoria(){
	$('#form_categoria').form('submit',{
		url: url,
		onSubmit: function(){
			return $(this).form('validate');
		},
		success: function(result){
				$('#dlg_categoria').dialog('close');
				$('#grid_categorie').datagrid('reload');
				$("#dlg_servizio").dialog('close');
				$('#grid_servizi').datagrid('reload');
		}
	});
}

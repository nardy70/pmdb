var url;

function newServizio(){
    $('#dlg_servizio').dialog('open').dialog('setTitle','NUOVO SERVIZIO');
    $('#form_servizio').form('clear');
    $('#idc').combobox({
	    formatter:function(row){
	    	return row.nomecategoria;
	    }
    });
    url = 'data/servizi/newServizio.cfm';
}

function editServizio(){
	$('#form_servizio').form('clear');
	
	$('#idc').combobox({
	    formatter:function(row){
	    	return row.nomecategoria;
	    }
    });
	
	var row = $('#grid_servizi').datagrid('getSelected');
	if (row){
		$('#dlg_servizio').dialog('open').dialog('setTitle','SERVIZIO DA MODIFICARE');
		$('#form_servizio').form('load', {
			idcategoria:	row.idc,
			servizio:		row.servizio,
			unita:			row.unita,
			prezzo:			row.prezzo
		});
		url = 'data/servizi/editServizio.cfm?id=' + row.id;
	}
}

function saveServizio(){
	$('#form_servizio').form('submit',{
		url: url,
		onSubmit: function(){
			return $(this).form('validate');
		},
		success: function(data){
			$('#dlg_servizio').dialog('close');
			$('#grid_servizi').datagrid('reload');
		}
	});
}

function removeServizio(){
var row = $('#grid_servizi').datagrid('getSelected');
	if (row){
		$.messager.confirm('Conferma','Sicuro di rimuovere il servizio selezionato?',function(r){
			if(r){
				$.post('data/servizi/removeServizio.cfm',{id:row.id},function(){
					$('#grid_servizi').datagrid('reload');
				});
			}
		});
	}
}

function cercaservizio() {
	$('#grid_servizi').datagrid('load',{
		filtronomeservizio: $('#filtro_nomeservizio').val()
		});
}

function pulisciservizio() {
	$('#filtro_nomeservizio').searchbox('clear');
	$('#grid_servizi').datagrid('reload',{
		url: 'data/servizi/readServizi.cfm'
	});
}

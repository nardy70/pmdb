var urlatt;
var dataselez;

function newAttGiorno() {
	$('#dlg_attgiorno').dialog('open').dialog('setTitle', 'NUOVA ATTIVITA ODIERNA');
	$('#form_attgiorno').form('clear');
	urlatt = 'data/attivita/newAttivitaGiorno.cfm';
}

function removeAttGiorno() {
	var row = $('#grid_attivitagiorno').datagrid('getSelected');
	if (row) {
		$.messager.confirm('Conferma', 'Sicuro di rimuovere dalle attivita il cliente selezionato? Attenzione! Dovrai prima rimuovere i relativi Servizi - Prodotti', function(r) {
			if (r) {
				$.post('data/attivita/removeAttivitaGiorno.cfm', {
					id : row.id
				}, function() {
					$('#grid_attivitagiorno').datagrid('reload');
				});
				$('#panel_attCli').panel('setTitle', '');
			}
		});
	} else {
		$.messager.alert('ATTENZIONE', 'Seleziona il Cliente da rimuovere', 'info');
	}
}

function saveAttGiorno() {
	$('#form_attgiorno').form('submit', {
		url : urlatt,
		onSubmit : function(param) {
			if (dataselez === undefined) {
				dt = new Date();
				dataselez = (dt.getFullYear()+"-"+(dt.getMonth()+1)+"-"+dt.getDate());
			}
			param.dataselez = dataselez;
			return $(this).form('validate');
		},
		success : function(result) {
			$('#dlg_attgiorno').dialog('close');
			$('#grid_attivitagiorno').datagrid('reload', {
				data : dataselez
			});
			$('#grid_servizialcliente').datagrid('load', {
				idattivita : 0
			});
			$('#grid_prodottialcliente').datagrid('load', {
				idattivita : 0
			});
			$('#panel_attCli').panel('setTitle', '');
		}
	});
}

function oggi() {
	var oggi = new Date();
	dataselez = (oggi.getFullYear()+"-"+(oggi.getMonth()+1)+"-"+oggi.getDate());
	$('#calendario').calendar('moveTo', oggi);
	$('#grid_attivitagiorno').datagrid('reload', {
		data : dataselez
	});
	$('#grid_servizialcliente').datagrid('load', {
		idattivita : 0
	});
	$('#grid_prodottialcliente').datagrid('load', {
		idattivita : 0
	});
	$('#panel_attCli').panel('setTitle', '');
}

function compleanni() {
	$('#dlg_compleanni').dialog('clear');
	
	if (typeof dataselez === 'undefined') {
		var today = new Date();
		var dataeu = ('0'+today.getDate()).slice(-2)+'-'+('0'+(today.getMonth()+1)).slice(-2)+'-'+today.getFullYear();
		var dataus = ('0'+(today.getMonth()+1)).slice(-2)+'-'+('0'+today.getDate()).slice(-2)+'-'+today.getFullYear();
	} else {
		var nd = new Date(dataselez);
		var dataeu = (nd.getDate()+"-"+(nd.getMonth()+1)+"-"+nd.getFullYear());
		var dataus = dataselez;
	}
	
	$('#dlg_compleanni').dialog('open').dialog('setTitle', 'COMPLEANNI DEL ' + dataeu);
	$('#dlg_compleanni').dialog('refresh', 'data/attivita/compleanni.cfm?com=' + dataus);
}

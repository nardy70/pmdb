function prodInMagaz(pid, pnome){
	var nn = "<span style='color:blue; font-size:12px; padding-left:1em'>" + pnome + "</span>";
    $('#pn_dettagliomagaz').panel('setTitle','Dettaglio Magazzino di: ' + nn.toUpperCase());
    $('#grid_prodottoinmagazzino').datagrid('load',{
    	id: pid
    });
    $('#grid_prelievomagazzino').datagrid('load',{
    	id: pid
    });
}

function updateActions(index){
	$('#grid_prodottoinmagazzino').datagrid('updateRow',{
		index: index,
		row:{}
	});
}

function getRowIndex(target){
    var tr = $(target).closest('tr.datagrid-row');
    return parseInt(tr.attr('datagrid-row-index'));
}

function editrow(target){
	$('#grid_prodottoinmagazzino').datagrid('selectRow', getRowIndex(target));
    $('#grid_prodottoinmagazzino').datagrid('beginEdit', getRowIndex(target));
}

function saverow(target){
	var row = $('#grid_prodottoinmagazzino').datagrid('getSelected');
	console.log(row);
	$('#grid_prodottoinmagazzino').datagrid('endEdit', getRowIndex(target));
	$.post("data/magazzino/saveMagazzino.cfm", row, "json");
	if(typeof row.idprodotto.id !== 'undefined'){
		var pid = row.idprodotto.id;
	} else {
		var pid = row.idprodotto;
	};
	//console.log(pid);
	$('#grid_prodottoinmagazzino').datagrid('reload');
    $('#grid_prodottoinmagazzino').datagrid('unselectAll');

    $('#grid_prodotti').datagrid('reload');
    $('#grid_prodotti').datagrid('selectRow', pid);

    ricaricaTot(pid);
}

function ricaricaTot(pid){
	$.post("data/magazzino/oraInMagaz.cfm", {id:pid}, function(data){
    	var nn = "<span style='color:blue; font-size:23px; padding-left:1em'>" + data + "</span>";
    	$('#orainmagazzino').panel('setTitle','Ora in Magazzino: ' + nn);
    });
}

function cancelrow(target){
	$('#grid_prodottoinmagazzino').datagrid('cancelEdit', getRowIndex(target));
	$('#grid_prodottoinmagazzino').datagrid('unselectAll');
	$('#grid_prodottoinmagazzino').datagrid('reload');	
}

function insert(){
	var index = 0;
	var objProd = $('#grid_prodotti').datagrid('getSelected');
	if(objProd){
		var d = new Date();
		var data = d.getFullYear() + "-" + ('0'+(d.getMonth()+1)).slice(-2) + "-" + ('0'+d.getDate()).slice(-2);

		$('#grid_prodottoinmagazzino').datagrid('insertRow', {
			index: index,
			row:{
				idprodotto: objProd.id,
				storicoprezzofattura: objProd.prezzofattura,
				data: data
			}
		});

		$('#grid_prodottoinmagazzino').datagrid('selectRow',index);
		$('#grid_prodottoinmagazzino').datagrid('beginEdit',index);
	} else {
		$.messager.alert('Attenzione','Seleziona o Riseleziona Prodotto');
	}
}

function removeselez(){
	var objMag = $('#grid_prodottoinmagazzino').datagrid('getSelected');
	
	if (objMag){
		$.messager.confirm('Conferma','Sicuro di rimuovere la selezione?',function(r){
			if(r){
				$.post('data/magazzino/removeMagazzino.cfm',{id:objMag.id},function(){
					$('#grid_prodottoinmagazzino').datagrid('reload');
					$('#grid_prodotti').datagrid('reload');
					ricaricaTot(objMag.idprodotto.id);
				});
			}
		});
	}
}
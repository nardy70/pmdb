function updateActions2(index){
	$('#grid_prelievomagazzino').datagrid('updateRow',{
		index: index,
		row:{}
	});
}

function getRowIndex2(target){
    var tr = $(target).closest('tr.datagrid-row');
    return parseInt(tr.attr('datagrid-row-index'));
}

function editrow2(target){
	$('#grid_prelievomagazzino').datagrid('selectRow', getRowIndex2(target));
	
	row = $('#grid_prelievomagazzino').datagrid('getSelected');
	row.qty = Math.abs(row.qty);

    $('#grid_prelievomagazzino').datagrid('beginEdit', getRowIndex2(target));	
}

function saverow2(target){
	var row = $('#grid_prelievomagazzino').datagrid('getSelected');
	$('#grid_prelievomagazzino').datagrid('endEdit', getRowIndex2(target));
	$.post("data/magazzino/savePrelievoMagazzino.cfm", row, "json");
	if(typeof row.idprodotto.id !== 'undefined'){
		var pid = row.idprodotto.id;
	} else {
		var pid = row.idprodotto;
	};
	$('#grid_prelievomagazzino').datagrid('reload');
    $('#grid_prelievomagazzino').datagrid('unselectAll');
    
    ricaricaTot(pid);
    
    $('#grid_prodotti').datagrid('load',{id: pid});
}

function cancelrow2(target){
	$('#grid_prelievomagazzino').datagrid('cancelEdit', getRowIndex2(target));
	$('#grid_prelievomagazzino').datagrid('unselectAll');
	$('#grid_prelievomagazzino').datagrid('reload');
}

function insert2(){
	var index = 0;
	var objProd = $('#grid_prodotti').datagrid('getSelected');
	if(objProd){
		var d = new Date();
		var data = d.getFullYear() + "-" + ('0'+(d.getMonth()+1)).slice(-2) + "-" + ('0'+d.getDate()).slice(-2);

		$('#grid_prelievomagazzino').datagrid('insertRow', {
			index: index,
			row:{
				idprodotto: objProd.id,
				storicoprezzofattura: objProd.prezzofattura,
				data: data
			}
		});
		
		$('#grid_prelievomagazzino').datagrid('selectRow',index);
		$('#grid_prelievomagazzino').datagrid('beginEdit',index);
	} else {
		$.messager.alert('Attenzione','Seleziona o Riseleziona Prodotto');
	}
}

function removeselez2(){
	var objMag = $('#grid_prelievomagazzino').datagrid('getSelected');
	
	if (objMag){
		$.messager.confirm('Conferma','Sicuro di rimuovere la selezione?',function(r){
			if(r){
				$.post('data/magazzino/removeMagazzino.cfm',{id:objMag.id},function(){
					$('#grid_prelievomagazzino').datagrid('reload');
					$('#grid_prodotti').datagrid('reload');
					ricaricaTot(objMag.idprodotto.id);
				});
			}
		});
	}
}
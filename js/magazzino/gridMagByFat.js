$(document).ready(function () {
	
	var objprod = [];
	
	$.post('data/prodotti/selectProdotti.cfm', function(data){
		$.each(data, function(index, data){
			objprod.push(data);
		});
	}, 'json');
	
	$('#grid_magbyfat').datagrid({
		idField:'idmagazzino',
		url:'data/magazzino/readMagByFat.cfm',
		fitColumns:true,
		singleSelect:true,
		rownumbers:true,
		columns:[[
			{field:'data',hidden:true},
	    	{field:'numfattura',hidden:true},
	    	{field:'idprodotto',title:'Prodotto',width:100,
	    		formatter: function(value,row){
	    			for(var i=0; i<objprod.length; i++){
						if (objprod[i].id == value) return objprod[i].nome;
					}
					return row.idprodotto.nome;
	    		},
		    	editor: {
		    		type: 'combobox',
		    		options: {
		    			url: 'data/prodotti/selectProdotti.cfm',
		    			valueField:'id',
		    			textField: 'nome',
		    			required:true,
						missingMessage:'Campo Obbligatorio',
		    			onSelect: function(rec){
		    				storicoprezzofattura = rec.prezzofattura;
						}
		    		}
		    	}
	    	},
	    	{field:'qty',align:'center',title:"Quantita'",
	    		editor: {
	    			type: 'numberbox',
	    			options:{
						required:true,
						missingMessage:'Campo Obbligatorio'
					}
	    		}
	    	},
	    	{field:'storicoprezzofattura',align:'center',title:'Prezzo Fatt.',
	    		formatter: function(value){
	    			return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    		}
	    	},
	    	{field:'action',width:55,title:'Azione',align:'center',
				formatter:function(value,row,index){
					if (row.editing){
						var s = '<button type="button" onclick="saverow3(this)">Salva</button> ';
						var c = '<button type="button" onclick="cancelrow3(this)">Annulla</button>';
						return s+c;
					} else {
						var d = '<button type="button" onclick="removerow3(this)">Elimina</button> ';
						var e = '<button type="button" onclick="editrow3(this)">Modifica</button> ';
						return e+d;
					}
				}
			}
	    ]],
	    
	    onBeforeEdit:function(index,row){
			row.editing = true;
			updateAct(index,row);
		},
		onAfterEdit:function(index,row){
			row.editing = false;
			row.storicoprezzofattura = storicoprezzofattura;
			updateAct(index,row);
		},
		onCancelEdit:function(index,row){
			row.editing = false;
			updateAct(index,row);
		}
	});
});

var click3;
var vrbdata;
var storicoprezzofattura;

$('#datainput').datebox({
	onChange: function(newDate, oldDate){
		vrbdata = newDate;
		$('#grid_magbyfat').datagrid('load',{
			data: vrbdata
		});
	},
	onSelect: function(date){
		vrbdata = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
		$('#grid_magbyfat').datagrid('load',{
			data: vrbdata
		});
	}
});

function getRowIndex3(target){
    var tr = $(target).closest('tr.datagrid-row');
    return parseInt(tr.attr('datagrid-row-index'));
}

function updateAct(index,row){
	$('#grid_magbyfat').datagrid('updateRow',{
		index: index,
		row:{
			idprodotto: row.idprodotto.id,
			storicoprezzofattura: row.storicoprezzofattura
		}
	});
	//console.log('updateAct: ', row);
}

function editrow3(target){
	$('#grid_magbyfat').datagrid('selectRow', getRowIndex3(target));
	$('#grid_magbyfat').datagrid('beginEdit',getRowIndex3(target));
}

function removerow3(target){
	$('#grid_magbyfat').datagrid('selectRow', getRowIndex3(target));
	var row = $('#grid_magbyfat').datagrid('getSelected');
	if(row){
		$.messager.confirm('Conferma','Sicuro di rimuovere il prodotto selezionato?',function(r){
			if(r){
				$.post("data/magazzino/removeMagazzino.cfm", {id:row.id});
				var index = $('#grid_magbyfat').datagrid('getRowIndex', row);
				$('#grid_magbyfat').datagrid('deleteRow', index);
				
				$('#grid_magbyfat').datagrid('reload');
				
				$('#grid_fattura').datagrid('unselectAll');
				$('#grid_fattura').datagrid('reload');
			}
		});
	}
}

function cancelrow3(target){
	$('#grid_magbyfat').datagrid('endEdit', getRowIndex3(target));
	click3 = false;
	$('#grid_magbyfat').datagrid('unselectAll');
	$('#grid_magbyfat').datagrid('reload');
	//$('#grid_fattura').datagrid('reload');
}

function saverow3(target){
	var row3 = $('#grid_magbyfat').datagrid('getSelected');
	row3.data = vrbdata;
	
	$('#grid_magbyfat').datagrid('unselectRow', getRowIndex3(target));
	$('#grid_magbyfat').datagrid('endEdit', getRowIndex3(target));
	
	click3 = false;
	
	console.log(row3);
	
	if (row3.idprodotto !== "") {
		$.post("data/magazzino/saveFattura.cfm", row3, "json");
	} else {
		$.messager.alert('ATTENZIONE','Nessun nuovo prodotto inserito','info');
	}
	
	$('#grid_magbyfat').datagrid('reload');
	$('#grid_fattura').datagrid('reload');

	$('#grid_prodotti').datagrid('reload');
    $('#grid_prodotti').datagrid('selectRow', row3.idprodotto);

    $('#grid_prodottoinmagazzino').datagrid('reload');

    ricaricaTot(row3.idprodotto);
}


function insertProdotto(){
	if(!click3){
		var ind = $('#grid_magbyfat').datagrid('getData');
		console.log(ind);
	    idx = ind.total;
	    
	    if(vrbdata !== undefined){
	    	$('#grid_magbyfat').datagrid('insertRow', {
	    		index:idx,
				row:{
					idprodotto: "",
					storicoprezzofattura: "",
					data: vrbdata
				}
			});
			$('#grid_magbyfat').datagrid('selectRow',idx);
			$('#grid_magbyfat').datagrid('beginEdit',idx);
		
			//$('#grid_fattura').datagrid('reload');
		
			click3 = true;
			
	    } else {
	    	$.messager.alert('ATTENZIONE','Devi prima inserire / selezionare una data','info');
	    }
	    
	} else {
		$.messager.alert('ATTENZIONE','-------------------','info');
	}
}

function reload(){
	vrbdata = undefined;
	click3 = false;
	
	$('#grid_magbyfat').datagrid('load',{
		idprodotto: ""
	});
	$('#form_fattura').form('clear');
	$('#grid_fattura').datagrid('unselectAll');
}
$(document).ready(function () {
			
	$('#grid_prodottialcliente').datagrid({
		url:'data/attivita/readProdottiAlCliente.cfm',
		rownumbers:false,
		fit:true,
		fitColumns:true,
		singleSelect:true,
		border:false,
	    columns:[[
	    	{field:'idprodotto',title:'Prodotto',width:350,
		    	formatter: function(value,row,index){
		    		//console.log(value, row, index);
		    		if(value.nome){
		    			return value.nome;
		    		} else {
		    			return row.prodotto;
		    		}
		    	}
		    },
	    	{field:'storicoprezzo',title:'Prezzo',width:55,
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){ 
	    				return ("\u20ac " + '0,00');		// "\u20ac" = simbolo euro
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
	    	{field:'prezzoapplicato',title:'Prz.Finale',width:60,
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		},
	    		editor: {
	    			type: 'numberbox',
	    			options:{
	    				min:0,
	    				precision:2,
						required:true,
						missingMessage:'Campo Obbligatorio',
						decimalSeparator: ',',
						groupSeparator: '.'
					}
	    		}
	    	},
	    	{field:'qty',title:'Qta',width:40,
	    		editor: {
	    			type: 'numberbox',
	    			options:{
	    				min:0,
	    				required:true,
						missingMessage:'Campo Obbligatorio'
					}
	    		}
	    	},
	    	{field:'staff',title:'Staff',width:85,
		    	editor: {
	    			type: 'combobox',
	    			options:{
	    				panelHeight:'auto',
	    				valueField:'value',
	    				textField:'value',
	    				url:'js/attivita/staff.json'
						//required:true,
						//missingMessage:'Campo Obbligatorio'
					}
	    		}
	    	},
	    	{field:'note',title:'Note',width:220,
	    		editor: {
	    			type: 'textbox',
	    			options:{
	    				height:60,
	    				multiline:true
	    			}
	    		}
	    	},
	    	{field:'idattivita',hidden:'true'},
	    	{field:'ok',align:'center',width:70,
				formatter:function(value,row,index){
					if (row.editing){
						var s = '<button type="button" onclick="salvarigaP(this)">Ok</button> ';
						var c = '<br><button type="button" onclick="cancelP(this)">No</button>';
						return s+c;
					} else {
						var e = '<button type="button" onclick="cancellarigaP(this)">X</button> ';
						return e;
					}
				}
			}
	    ]],
	    
	    onBeforeEdit:function(index,row){
            row.editing = true;
            updateOkP(index);
        },
        onAfterEdit:function(index,row){
            row.editing = false;
            updateOkP(index);
        },
        onCancelEdit:function(index,row){
            row.editing = false;
            updateOkP(index);
        },
	    
	    onClickRow: function(index, row){
	    	$('#grid_prodottialcliente').datagrid('beginEdit',index);
	    }
	    
	});
	
});

function getIndiceRigaP(target){
    var tr = $(target).closest('tr.datagrid-row');
    return parseInt(tr.attr('datagrid-row-index'));
}

function updateOkP(index){
	$('#grid_prodottialcliente').datagrid('updateRow',{
		index: index,
		row:{}
	});
}

function cancelP(target){
	$('#grid_prodottialcliente').datagrid('deleteRow', getIndiceRigaS(target));
	clickP = false;
	$('#grid_prodottialcliente').datagrid('reload');
}

function cancellarigaP(target){
	$('#grid_prodottialcliente').datagrid('selectRow',getIndiceRigaP(target));
	var rowDelP = $('#grid_prodottialcliente').datagrid('getSelected');
	//console.log(rowDelP);
	
	if (rowDelP){
		$.messager.confirm('Conferma','Sicuro di rimuovere il Prodotto selezionato?',function(r){
			if(r){
				clickP = false;
				$.post('data/attivita/removeProdottoAlCliente.cfm',{id:rowDelP.id});
				//console.log(rowDelP);
				var pid = rowDelP.idprodotto.id;
				ricaricaTot2(pid);
				$('#grid_prodotti').datagrid('reload');
				$('#grid_elencoprodinatt').datagrid('reload');
			}
			
			$('#grid_prodottialcliente').datagrid('reload');	
		});
	}
}

function salvarigaP(target){
	var rowP = $('#grid_prodottialcliente').datagrid('getSelected');
	var rowAG = $('#grid_attivitagiorno').datagrid('getSelected');
	rowP.idattivita = rowAG.id;
	
	$('#grid_prodottialcliente').datagrid('unselectRow',getIndiceRigaP(target));
	$('#grid_prodottialcliente').datagrid('endEdit', getIndiceRigaP(target));
	
	clickP = false;
	
	$.post("data/attivita/saveProdottoAlCliente.cfm", rowP, "json");
	
	//console.log(rowP);
	
	//$('#grid_prodottialcliente').datagrid('reload');
	$('#grid_prodottialcliente').datagrid('load',{
		idattivita: rowP.idattivita
	});
	//$('#grid_prodotti').datagrid('reload');
	
	if(typeof rowP.idprodotto.id !== 'undefined'){
		var pid = rowP.idprodotto.id;
	} else {
		var pid = rowP.idprodotto;
	};
	
	ricaricaTot2(pid);
	$('#grid_elencoprodinatt').datagrid('reload');
}
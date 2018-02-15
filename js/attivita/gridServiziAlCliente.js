$(document).ready(function () {
	
	$('#grid_servizialcliente').datagrid({
		url:'data/attivita/readServiziAlCliente.cfm',
		rownumbers:false,
		fit:true,
		fitColumns:true,
		singleSelect:true,
		border:false,
	    columns:[[
	    	{field:'idservizio',title:'Servizio',width:350,
		    	formatter: function(value,row,index){
		    		//console.log(value, row, index);
		    		if(value.servizio){
		    			return value.servizio;
		    		} else {
		    			return row.servizio;
		    		}
		    	}
	    	},
	    	{field:'storicoprezzo',title:'Prezzo',width:55,
	    		formatter: function(value){
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
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
	    	{field:'tempo',title:'Min.',width:40,
	    		editor: {
	    			type: 'numberbox',
	    			options:{
	    				min:0
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
						var s = '<button type="button" onclick="salvarigaS(this)">Ok</button>';
						var c = '<br><button type="button" onclick="cancelS(this)">No</button>';
						return s+c;
					} else {
						var e = '<button type="button" onclick="cancellarigaS(this)">X</button> ';
						return e;
					}
				}
			}
	    ]],
	    
	    onBeforeEdit:function(index,row){
            row.editing = true;
            updateOkS(index);
        },
        onAfterEdit:function(index,row){
            row.editing = false;
            updateOkS(index);
        },
        onCancelEdit:function(index,row){
            row.editing = false;
            updateOkS(index);
        },
	    
	    onClickRow: function(index, row){
	    	$('#grid_servizialcliente').datagrid('beginEdit',index);
	    }
	    
	});
	
});

function getIndiceRigaS(target){
    var tr = $(target).closest('tr.datagrid-row');
    return parseInt(tr.attr('datagrid-row-index'));
}

function updateOkS(index){
	$('#grid_servizialcliente').datagrid('updateRow',{
		index: index,
		row:{}
	});
}

function cancelS(target){
	$('#grid_servizialcliente').datagrid('deleteRow', getIndiceRigaS(target));
	clickS = false;
	$('#grid_servizialcliente').datagrid('reload');
}

function cancellarigaS(target){
	$('#grid_servizialcliente').datagrid('selectRow',getIndiceRigaS(target));
	var rowDelS = $('#grid_servizialcliente').datagrid('getSelected');
	//console.log(rowDelS);
	
	if (rowDelS){
		$.messager.confirm('Conferma','Sicuro di rimuovere il Servizio selezionato?',function(r){
			if(r){
				clickS = false;
				$.post('data/attivita/removeServizioAlCliente.cfm',{id:rowDelS.id});
			}
			
			$('#grid_servizialcliente').datagrid('reload');
			
		});
	}
}

function salvarigaS(target){	
	var rowS = $('#grid_servizialcliente').datagrid('getSelected');
	var rowAG = $('#grid_attivitagiorno').datagrid('getSelected');
	rowS.idattivita = rowAG.id;
	
	$('#grid_servizialcliente').datagrid('unselectRow',getIndiceRigaS(target));
	$('#grid_servizialcliente').datagrid('endEdit', getIndiceRigaS(target));
	
	clickS = false;
	
	$.post("data/attivita/saveServizioAlCliente.cfm", rowS, "json");
	
	$('#grid_servizialcliente').datagrid('reload');
	// $('#grid_servizialcliente').datagrid('load',{
	// 	idattivita: rowS.idattivita
	// });
}
$(document).ready(function () {
	
	$('#grid_prodottoinmagazzino').datagrid({
		idField:'idmagazzino',
		url:'data/magazzino/readMagazzino.cfm',
		columns:[[
	    	{field:'data',width:45,title:'Data',
		    	formatter: function(value){
						var d = new Date(value);
						if (isNaN(d)){
							return null;
						} else {
							var giorno = ('0'+d.getDate()).slice(-2);
							var mese = ('0'+(d.getMonth()+1)).slice(-2);
							var anno = d.getFullYear();
							return (giorno + "-" + mese + "-" + anno);
						}
				},
				editor: {
					type: 'datebox',
					options:{
						required:true,
						missingMessage:'Campo Obbligatorio'
					}
				}
			},
	    	{field:'numfattura',width:50,editor:'text',title:'Nr. Fattura'},
	    	{field:'idprodotto',hidden:'true'},
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
	    			if (isNaN(value) || value === '' || value === null){
	    				return ("\u20ac " + '0,00');
	    			} else {
	    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
	    			}	
	    		}
	    	},
	    	{field:'action',width:55,title:'Azione',align:'center',
				formatter:function(value,row,index){
					if (row.editing){
						var s = '<button type="button" onclick="saverow(this)">Salva</button> ';
						var c = '<button type="button" onclick="cancelrow(this)">Annulla</button>';
						return s+c;
					} else {
						var e = '<button type="button" onclick="editrow(this)">Modifica</button> ';
						return e;
					}
				}
			}
	    ]],
	    onBeforeEdit:function(index,row){
			row.editing = true;
			updateActions(index);
		},
		onAfterEdit:function(index,row){
			row.editing = false;
			updateActions(index);
		},
		onCancelEdit:function(index,row){
			row.editing = false;
			updateActions(index);
		}
	});
	
});

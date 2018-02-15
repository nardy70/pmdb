$(document).ready(function () {
	
	$('#grid_prelievomagazzino').datagrid({
		idField:'idmagazzino',
		url:'data/magazzino/readPrelievoMagazzino.cfm',
		columns:[[
	    	{field:'data',width:35,title:'Data Prelievo',
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
	    	{field:'idprodotto',hidden:'true'},
	    	{field:'qty',align:'center',title:"Quantita' Prelevata",
	    		editor: {
	    			type: 'numberbox',
	    			options:{
						required:true,
						missingMessage:'Campo Obbligatorio'
					}
	    		},
	    		formatter: function(value){
	    			if(value < 0) {
	    				return Math.abs(value);
	    			}
	    		},
	    	},
	    	{field:'action',width:45,title:'Azione',align:'center',
				formatter:function(value,row,index){
					if (row.editing){
						var s = '<button type="button" onclick="saverow2(this)">Salva</button> ';
						var c = '<button type="button" onclick="cancelrow2(this)">Annulla</button>';
						return s+c;
					} else {
						var e = '<button type="button" onclick="editrow2(this)">Modifica</button> ';
						return e;
					}
				}
			}
	    ]],
	    onBeforeEdit:function(index,row){
			row.editing = true;
			updateActions2(index);
		},
		onAfterEdit:function(index,row){
			row.editing = false;
			updateActions2(index);
		},
		onCancelEdit:function(index,row){
			row.editing = false;
			updateActions2(index);
		}
	});
	
});

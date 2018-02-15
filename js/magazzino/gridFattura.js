$(document).ready(function () {
	
	$('#grid_fattura').datagrid({
		idField:'idmagazzino',
		url:'data/magazzino/readFattura.cfm',
		rownumbers:true,
		fitColumns:true,
		singleSelect:true,
		columns:[[
	    	{field:'data',width:20,title:'Data',align:'center',
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
	    	{field:'numfattura',width:50,editor:'text',title:'Nr. Fattura',align:'center'}
	    ]],
	    
	    onClickRow: function(index,row){
	    	var dd = new Date(row.data);
	    	var giorno = ('0'+dd.getDate()).slice(-2);
			var mese = ('0'+(dd.getMonth()+1)).slice(-2);
			var anno = dd.getFullYear();
			dataformat = anno + "-" + mese + "-" + giorno;
			vrbdata = dataformat;
			
	    	$('#grid_magbyfat').datagrid('reload',{
		    	data: dataformat,
		    	numfattura: row.numfattura
		    });
		    
		    $('#datainput').datebox('setValue', dataformat);
		    
		    // $('#form_fattura').form('clear');
		    // $('#form_fattura').form('load', {
				// data: dataformat,
		    	// numfattura: row.numfattura
			// });
			
			click3 = false;
		}
	});
	
});

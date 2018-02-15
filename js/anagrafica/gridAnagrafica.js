$(document).ready(function () {

	$('#grid_anagrafica').datagrid({
		url:'data/anagrafica/readAnagrafica.cfm',
		rownumbers:true,
		fit:true,
		fitColumns:true,
		singleSelect:true,
		pagination:true,
		pageSize:20,
		view:detailview,
		detailFormatter: function(rowIndex, rowData){
			return '<table><tr>' +
			    '<td style="border:0;padding-right:10px">' +
			    '<p>Indirizzo: ' + '<span style="color:green;padding-left:2em">' + rowData.indirizzo + '</p>' +
			    '</td></tr></table>';
			},
		columns:[[
			{field:'nome',title:'Nome',width:130,sortable:true},
			{field:'cognome',title:'Cognome',width:130,sortable:true},
			{field:'sesso',title:'Sesso',width:33,align:'center',sortable:true},
			{field:'email',title:'Email',width:150},
			{field:'professione',title:'Professione',width:170},
			{field:'cellulare',title:'Cellulare',width:70,align:'center'},
			{field:'telefono',title:'Telefono',width:70,align:'center'},
			{field:'compleanno',title:'Compleanno',width:75,align:'center',sortable:true,
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
				parser: function(s){
					return new Date(s);
				}
			},
			{field:'registrazione',title:'Registrato il',width:75,align:'center',sortable:true,
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
				parser: function(s){
					return new Date(s);
				}
			}
		]]
	});

});
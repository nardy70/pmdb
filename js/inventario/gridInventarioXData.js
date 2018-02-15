var data_selez;

$(document).ready(function () {
	
	$.post("data/inventario/readTotInventario.cfm", function(result1){
		$.post("data/inventario/readInventarioXData.cfm", {data_selez : data_selez}, function(result2){
			var totinv = " --- <span style='color:blue;font-size:18px;'> TOTALE: " + accounting.formatMoney(result1, "\u20ac ", 2, ".", ","); + "</span>";
			$('#panel_inventarioxdata').panel('setTitle', 'INVENTARIO DI <span style="font-size:18px;"> OGGI </span> ( n. ' + result2.length + ' Prodotti )' + totinv);
		}, "json");
	});

	$.post("data/inventario/readTotInventarioXMarca.cfm", {data_selez:data_selez}, function(readtotinvxdata){

		$('#grid_inventarioxdata').datagrid({
			rownumbers:true,
			fitColumns:true,
			border:false,
			pagination:false,
			pageSize:20,
			view:groupview,
	        groupField:'marca',
	        groupFormatter:function(value,rows){
	            for (i in readtotinvxdata) {
					if (value == readtotinvxdata[i].marca) {
						vistagruppo = value + ": " + accounting.formatMoney(readtotinvxdata[i].totalemarca, "\u20ac ", 2, ".", ",");
					}
				};
				if (rows.length > 1) {
					var art = " articoli )";
				} else {
					var art = " articolo )";
				}
				return vistagruppo + " ( " + rows.length + art;
	        },
			url:"data/inventario/readInventarioXData.cfm",
		    columns:[[
				{field:'nome',title:'Prodotto',align:'left',width:'270px',sortable:true},
				{field:'ven_prel',title:'Venduti/Prelevati',align:'center',width:'110px',sortable:true},
				{field:'qty',title:'In Magazzino',align:'center',width:'87px',sortable:true},
				{field:'prezzofattura',title:'Prezzo Fattura',align:'center',width:'90px',sortable:true,
					formatter: function(value){
		    			if (isNaN(value) || value === '' || value === null){
		    				return ('0,00');
		    			} else {
		    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
		    			}	
		    		}
		    	},
		    	{field:'tot',title:'Totale',align:'center',width:'80px',sortable:true,
					formatter: function(value){
		    			if (isNaN(value) || value === '' || value === null){
		    				return ('0,00');
		    			} else {
		    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
		    			}	
		    		}
		    	}
		    ]]
		});

	}, "json");

	
	$('#calendario_inv').calendar({
		onSelect: function(date){
			
			data_selez = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
			data_eu = "<span style='font-size:18px;'>" + date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear() + "</span>";

				$.post("data/inventario/readTotInventarioXMarca.cfm", {data_selez:data_selez}, function(readtotinvxdata){

					$('#grid_inventarioxdata').datagrid({
						view:groupview,
				        groupField:'marca',
				        groupFormatter:function(value,rows){
				            for (i in readtotinvxdata) {
								if (value == readtotinvxdata[i].marca) {
									vistagruppo = value + ": " + accounting.formatMoney(readtotinvxdata[i].totalemarca, "\u20ac ", 2, ".", ",");
								}
							};
							if (rows.length > 1) {
								var art = " articoli )";
							} else {
								var art = " articolo )";
							}
							return vistagruppo + " ( " + rows.length + art;
						}
					});

				}, "json");

				$('#grid_inventarioxdata').datagrid('load',{
					data_selez: data_selez
				});

			$.post("data/inventario/readTotInventario.cfm", {data_selez : data_selez}, function(result1){
				$.post("data/inventario/readInventarioXData.cfm", {data_selez : data_selez}, function(result2){
					var totinvdata = " --- <span style='color:blue;font-size:18px;'> TOTALE: " + accounting.formatMoney(result1, "\u20ac ", 2, ".", ","); + "</span>";
					$('#panel_inventarioxdata').panel('setTitle', 'INVENTARIO DEL ' + data_eu + ' ( n. ' + result2.length + ' Prodotti )' + totinvdata);
				}, "json");
			});
		}
	});
});

function oggi_inv() {
	var oggi_inv = new Date();
	data_selez = oggi_inv.getFullYear()+"-"+(oggi_inv.getMonth()+1)+"-"+oggi_inv.getDate();
	$('#calendario_inv').calendar('moveTo', oggi_inv);
	
	$.post("data/inventario/readTotInventarioXMarca.cfm", {data_selez : data_selez}, function(readtotinvxdata){

		$('#grid_inventarioxdata').datagrid({
			view:groupview,
	        groupField:'marca',
	        groupFormatter:function(value,rows){
	            for (i in readtotinvxdata) {
					if (value == readtotinvxdata[i].marca) {
						vistagruppo = value + ": " + accounting.formatMoney(readtotinvxdata[i].totalemarca, "\u20ac ", 2, ".", ",");
					}
				};
				if (rows.length > 1) {
					var art = " articoli )";
				} else {
					var art = " articolo )";
				}
				return vistagruppo + " ( " + rows.length + art;
	        }
		});

	}, "json");

	$('#grid_inventarioxdata').datagrid('load',{
		data_selez: data_selez
	});
	
	$.post("data/inventario/readTotInventario.cfm", function(result1){
		$.post("data/inventario/readInventarioXData.cfm", {data_selez : data_selez}, function(result2){
			var totinv = " --- <span style='color:blue;font-size:18px;'> TOTALE: " + accounting.formatMoney(result1, "\u20ac ", 2, ".", ","); + "</span>";
			$('#panel_inventarioxdata').panel('setTitle', 'INVENTARIO DI <span style="font-size:18px;"> OGGI </span> ( n. ' + result2.length + ' Prodotti )' + totinv);
		}, "json");
	});
}

function printInv() {
	if (data_selez === undefined) {
		var data = new Date();
		data_selez = data.getFullYear()+"-"+(data.getMonth()+1)+"-"+data.getDate();
	}
	url = "report/inventario.cfm?data_selez=" + data_selez;
	window.open(url, '_blank');
}

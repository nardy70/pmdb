$(document).ready(function () {

	$.post("data/prodotti/readTotArticoli.cfm", function(n_art){
		
		$('#grid_prodotti').datagrid({
			rownumbers:true,
			fitColumns:true,
			singleSelect:true,
			//pagination:true,
			//pageSize:20,
			rowStyler: function(index,row){
				if(row.ORAINMAGAZ < 3){
					if(row.ORAINMAGAZ <= 0){
						return 'color:#FF0000';
					} else {
						return 'color:#B88A00';
					} 
				} else {
					return 'color:#009900';
				}
			},
			view:groupview,
	        groupField:'nomemarca',
	        groupFormatter:function(value,rows){
	        	if (rows.length > 1) {
					var art = " articoli )";
				} else {
					var art = " articolo )";
				}
				return value + " ( " + rows.length + art;
	        },
			url:'data/prodotti/readProdotti.cfm',
			title:'ELENCO PRODOTTI ( ' + n_art + ' Articoli )',
		    columns:[[
		    	{field:'nome',title:'Nome',width:320,sortable:true},
		    	{field:'misura',title:'Mis.',width:35,align:'right'},
		    	{field:'unita',title:'Un.',width:30},
		    	{field:'prezzocliente',title:'Prz. Cliente',width:75,align:'center',sortable:true,
		    		formatter: function(value){
		    			if (isNaN(value) || value === '' || value === null){ 
		    				return ("\u20ac " + '0,00');		// "\u20ac" = simbolo euro
		    			} else {
		    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
		    			}	
		    		}
		    	},
		    	{field:'prezzofattura',title:'Prz. Fattura',width:75,align:'center',sortable:true,
		    		formatter: function(value){
		    			if (isNaN(value) || value === '' || value === null){
		    				return ("\u20ac " + '0,00');
		    			} else {
		    				return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
		    			}	
		    		}
		    	
		    	},
		    	{field:'ORAINMAGAZ',title:'Qta Mag.',width:55,align:'center'},
		    	{field:'novendita',title:'No Vendita',width:60,align:'center',
					formatter: function(value){
						if(value == 'on'){
							return ("\u2713");
						}
					}
				}
		    ]],
		    
		    onClickRow: function(index,row){
		    	var prodotto = row;
		    	prodInMagaz(prodotto.id, prodotto.nome);
		    	ricaricaTot(prodotto.id);
				$('#grid_venditeaiclienti').datagrid('reload',{ id: prodotto.id });
			}
		});
	});
});
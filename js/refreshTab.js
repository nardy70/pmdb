$('#tt').tabs({
    onSelect:function(title,index){
        switch (index){
        	//console.log(index);
        	case 1:
        		$('#pn_dettagliomagaz').panel('setTitle','Dettaglio Magazzino');
        		$('#orainmagazzino').panel('setTitle','Ora in Magazzino');
        		$('#grid_prodotti').datagrid('reload');
        		$('#grid_prelievomagazzino').datagrid('reload',{ id: 0 });
        		$('#grid_prodottoinmagazzino').datagrid('reload',{ id: 0 });
        		$('#grid_venditeaiclienti').datagrid('reload',{ id: 0 });
        		break;

        	case 4:
	        	$('#grid_statistichegestione').datagrid('reload');
	        	$('#grid_statisticheanno').datagrid('reload');
	        	$('#grid_statistichemese').datagrid('reload');
	        	$('#grid_statisticheclientibad').datagrid('reload');
	        	$('#grid_statisticheclientitop').datagrid('reload');
	        	break;

	        case 5:
	        	if (typeof oggi_inv == 'function'){
	        		oggi_inv();
	        	}
	        	break;
        }
    }
});

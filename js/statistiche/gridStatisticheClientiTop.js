$(document).ready(function () {

	$('#grid_statisticheclientitop').datagrid({
		url:'data/statistiche/readStatisticheClientiTop.cfm',
		striped:true,
		columns:[[
			{field:'nomecognome',title:'Nome e Cognome',align:'left',width:270,sortable:true},
			{field:'totsvc',title:'Totale Servizi',align:'center',sortable:true,
        formatter: function(value){
          if (isNaN(value) || value === '' || value === null){
            return ("\u20ac " + '0,00');
          } else {
            return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
          }	
        }
      },
      {field:'totprd',title:'Totale Prodotti',align:'center',sortable:true,
        formatter: function(value){
          if (isNaN(value) || value === '' || value === null){
            return ("\u20ac " + '0,00');
          } else {
            return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
          }	
        }
      },
      {field:'totale',title:'Totale Generale',align:'center',sortable:true,
        formatter: function(value){
          if (isNaN(value) || value === '' || value === null){
            return ("\u20ac " + '0,00');
          } else {
            return accounting.formatMoney(value, "\u20ac ", 2, ".", ",");
          }	
        }
      },
		]]
	});

});

function applicafiltrotempotop() {
  var di = $('input[name=di]').val();
	var df = $('input[name=df]').val();
		
	$('#grid_statisticheclientitop').datagrid('load',{
		di: di,
		df: df
		});
}
$(document).ready(function () {

	$('#grid_statisticheclientibad').datagrid({
		url:'data/statistiche/readStatisticheClientiBad.cfm',
		striped:true,
		columns:[[
			{field:'nomecognome',title:'Nome e Cognome',align:'left',width:270,sortable:true},
			{field:'ultimadataserv',title:'Ultima Data Servizi',align:'center',sortable:true,
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
			{field:'ultimadataprod',title:'Ultima Data Prodotti',align:'center',sortable:true,
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

function applicafiltrotempobad() {
	var servprod = $('input[name=servprod]').val();
  var meseanno = $('input[name=meseanno]').val();
	var nn = $('input[name=nn]').val();
		
	$('#grid_statisticheclientibad').datagrid('load',{
		servprod: servprod,
		meseanno: meseanno,
		nn: nn
		});
}
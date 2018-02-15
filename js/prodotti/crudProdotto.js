var url;
var rid;
var id;

function newProdotto() {
	$('#dlg_prodotto').dialog('open').dialog('setTitle', 'NUOVO PRODOTTO');
	$('#form_prodotto').form('clear');
	$('#idm').combobox({
		formatter : function(row) {
			return row.nomemarca;
		}
	});
	url = 'data/prodotti/newProdotto.cfm';
}

function editProdotto() {
	$('#form_prodotto').form('clear');

	$('#idm').combobox({
		formatter : function(row) {
			return row.nomemarca;
		}
	});

	var row = $('#grid_prodotti').datagrid('getSelected');
	if (row) {
		$('#dlg_prodotto').dialog('open').dialog('setTitle', 'PRODOTTO DA MODIFICARE');
		$('#form_prodotto').form('load', {
			idmarca : 		row.idm,
			nome : 			row.nome,
			barcode : 		row.barcode,
			prezzocliente : row.prezzocliente,
			prezzofattura : row.prezzofattura,
			misura : 		row.misura,
			unita : 		row.unita,
			novendita : 	row.novendita
		});
		rid = row.id;
		url = 'data/prodotti/editProdotto.cfm?id=' + rid;
	}
}

function saveProdotto() {
	$('#form_prodotto').form('submit', {
		url : url,
		onSubmit : function() {
			return $(this).form('validate');
		},
		success : function(data) {
			$('#dlg_prodotto').dialog('close');
			$('#grid_prodotti').datagrid('reload');
		}
	});

	if (id !== undefined) {
		$.post("data/prodotti/reloadProdotto.cfm?id=" + rid, function(data) {
			row = JSON.parse(data);
			prodInMagaz(row.id, row.nome);
		});
	}
}

function removeProdotto() {
	var row = $('#grid_prodotti').datagrid('getSelected');
	if (row) {
		$.messager.confirm('Conferma', 'Sicuro di rimuovere il prodotto selezionato?', function(r) {
			if (r) {
				$.post('data/prodotti/removeProdotto.cfm', {
					id : row.id
				}, function() {
					$('#grid_prodotti').datagrid('reload');
					prodInMagaz('', '');
					ricaricaTot('');
				});
			}
		});
	}
}

function cercaprodotto() {
	$('#grid_prodotti').datagrid('load', {
		filtronomeprodotto: $('#filtro_nomeprodotto').val(),
	});
	$.post("data/prodotti/readTotArticoli.cfm", {filtronomeprodotto: $('#filtro_nomeprodotto').val()}, function(n_art){
		if (n_art > 1) {
			var art_ps = ' Articoli';
		} else {
			var art_ps = ' Articolo';
		};

		$('#grid_prodotti').datagrid({
			title:'ELENCO PRODOTTI ( ' + n_art + art_ps + ' )'
		});
	});
}

function pulisciprodotto() {
	$('#filtro_nomeprodotto').searchbox('clear');
	$('#grid_prodotti').datagrid('reload', {
		url : 'data/prodotti/readProdotti.cfm'
	});
	$.post("data/prodotti/readTotArticoli.cfm", function(n_art){
		$('#grid_prodotti').datagrid({
			title:'ELENCO PRODOTTI ( ' + n_art + ' Articoli )'
		});
	});
}

function newFattura() {
	$('#dlg_fattura').dialog('open');
	$.ajax({
		url : 'js/magazzino/gridFattura.js',
		dataType : "script"
	});
	$.ajax({
		url : 'js/magazzino/gridMagByFat.js',
		dataType : "script"
	});
}

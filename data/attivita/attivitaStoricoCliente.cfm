<cfscript>
	//writedump(var = "#id#");

	if(isDefined("id")){

		hql1 = "from Attivita where idcliente='#id#' order by data desc"

		attStoricoCli = ORMExecuteQuery(hql1, false, {maxresults=url.limit});

		limit2 = '#url.limit#' + 4;


		arrayEach(attStoricoCli, function(result){
        	idatt = result.getId();
        	giorno = #DateFormat(result.getData(), "dd-mm-yyyy")#

			WriteOutput("<div id='cornice'><fieldset><legend><div id='data'>DATA: " & giorno & "</div></legend>");

			hql2 = "from ServAlCli where idattivita='#idatt#'"
			servAlCli = ORMExecuteQuery(hql2, false);

			if(!ArrayIsEmpty(servAlCli)){

				WriteOutput("<fieldset><legend><span class='titolo2'>SERVIZI EFFETTUATI:</span></legend>
					<table class='testo'><thead><tr><th width='200px'></th><th width='60px'>Prezzo</th>
						<th width='120px'>Effettuato da</th><th width='280px'>Note</th></tr></thead>");

				arrayEach(servAlCli, function(result){
					servizio = result.getIdservizio().getServizio();
					staff = result.getStaff();
					prezzo = #LSCurrencyFormat(result.getPrezzoapplicato(), "local")#
					note = result.getNote();
					WriteOutput("<tbody class='tabellabody'><tr><td>" & servizio & "</td><td>" & prezzo & "</td>
						<td>" & staff & "</td><td>" & note & "</td></tr></tbody>");
				});

				WriteOutput("</table></fieldset><br>");
			}

			hql3 = "from ProdAlCli where idattivita='#idatt#'"
			prodAlCli = ORMExecuteQuery(hql3, false);

			if(!ArrayIsEmpty(prodAlCli)){

				WriteOutput("<fieldset><legend><span class='titolo2'>PRODOTTI VENDUTI:</span></legend>
					<table class='testo'><thead><tr><th width='200px'></th><th width='60px'>Prezzo</th>
						<th width='120px'>Venduto da</th><th width='280px'>Note</th></tr></thead>");

				arrayEach(prodAlCli, function(result){
					prodotto = result.getIdprodotto().getNome();
					qty = result.getQty();
					staff = result.getStaff();
					prezzo = #LSCurrencyFormat(result.getPrezzoapplicato(), "local")#
					note = result.getNote();
					WriteOutput("<tbody class='tabellabody'><tr><td>"& " Nr. " & qty & " " & prodotto & "</td><td>" & prezzo & "</td>
						<td>" & staff &"</td><td>" & note & "</td></tr></tbody>");
				});

				WriteOutput("</table></fieldset></fieldset>");
			}

			WriteOutput("</div><br><br>");
    	});

		funzione = "<script language='javascript'>
						function myFunction(n) {
							$.get('data/attivita/attivitaStoricoCliente.cfm?id=#id#&limit=' + n, function(data, status){
								document.getElementById('dlg_storicocliente').innerHTML = data;
							});
						}
					</script>";

    	bottone = "<button onclick='myFunction(#limit2#)'>Ulteriori Risultati</button>"

		WriteOutput(funzione);
		WriteOutput(bottone);

	}
</cfscript>
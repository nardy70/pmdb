<cfscript>
	if (!isDefined("filtronomeprodotto")) {
		filtronomeprodotto = "";
	} else {
		filtronomeprodotto = lCase(filtronomeprodotto);
	}

	if (!isDefined("filtrobarcodeprodotto")) {
		filtro = "";
		filtrobarcodeprodotto = "";
	}else {
		filtro = "and barcode = :filtrobarcodeprodotto";
	}

	if (!isDefined("sort")) {
		sort = 'idmarca.nomemarca'; order = 'asc';
	}

	if (sort == "nome") {
		sort = 'idmarca.nomemarca';
	}

	hql = "select new map( id as id, nome as nome, idmarca.id as idm, idmarca.nomemarca as nomemarca, barcode as barcode, misura as misura, unita as unita, prezzocliente as prezzocliente, prezzofattura as prezzofattura, novendita as novendita)
			from Prodotto
			where cancellato = 0 and novendita = 'off' and lower(nome) like :filtronomeprodotto #filtro#
			order by #sort# #order#, nome #order#
	";

	prodotti = ORMExecuteQuery(hql, {filtronomeprodotto: "%#filtronomeprodotto#%", filtrobarcodeprodotto: "#filtrobarcodeprodotto#"} );

	for (i in prodotti) {
		idp = serializeJSON(i["id"]);

		hql2 = "select sum(qty) from Magazzino where idprodotto = '#idp#' "
		sumMagazzino = ORMExecuteQuery(hql2, true);

		if(!isDefined("sumMagazzino")){
			sumMagazzino = 0;
		}

		hql3 = "select sum(qty) from ProdAlCli where idprodotto = '#idp#' "
		sumProdAlCli = ORMExecuteQuery(hql3, true);

		if(!isDefined("sumProdAlCli")){
			sumProdAlCli = 0;
		}

		i.oraInMagaz = sumMagazzino - sumProdAlCli;

		hql4 = "select sum(qty) from ProdottoVendutoAiClienti where idp = '#idp#' group by idp"

		i.sumVenduti = ORMExecuteQuery(hql4, true);
	}

	WriteOutput(SerializeJson(prodotti));
</cfscript>
<cfscript>

	if (!isDefined("filtronomeprodotto")) {
		filtronomeprodotto = "";
	} else {
		filtronomeprodotto = lCase(filtronomeprodotto);
	}

	hql = "select new map( id as id)
			from Prodotto
			where cancellato = 0 and lower(nome) like :filtronomeprodotto
	";

	totarticoli = arrayLen(ORMExecuteQuery(hql, {filtronomeprodotto: "%#filtronomeprodotto#%"}));

	WriteOutput(SerializeJson(totarticoli));

</cfscript>
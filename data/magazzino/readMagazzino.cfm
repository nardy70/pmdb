<cfscript>
	if(!isDefined("id")) {
		id = "";
	}

	hql = "from Magazzino where idprodotto = '#id#' and qty >= 0 order by data desc"

	prodottiMagaz["rows"] = ORMExecuteQuery(hql, false);

	prodottiMagazJson = SerializeJson(prodottiMagaz);

	WriteOutput(prodottiMagazJson);
</cfscript>
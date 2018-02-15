<cfscript>
	if (!isDefined("page")) {
		WriteOutput("<script> alert('Non Accessibile') </script>");
		abort;
	}

	start=(page-1)*rows;

	if (!isDefined("sort")) {
		sort = 'nome'; order = 'asc';
	}

	if (isDefined("nome")) {
		hql = "from Anagrafica A where lower(A.nome) like lower('%#nome#%') and A.cancellato=0)
			order by #sort# #order#"
		clienti["rows"] = ORMExecuteQuery(hql, false, {offset=start, maxResults=rows});
		clienti["total"] = ArrayLen(ORMExecuteQuery(hql));
	} else {
		clienti["rows"] = EntityLoad("Anagrafica", {cancellato="0"}, "#sort# #order#", {offset=start, maxResults=rows});
		clienti["total"] = ArrayLen(EntityLoad("Anagrafica", {cancellato="0"}));
	}

	clientiJson = SerializeJson(clienti);

	WriteOutput(clientiJson);
</cfscript>

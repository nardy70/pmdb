<cfscript>
	if(isDefined("data")){

		//hql = "from Attivita where data='#data#'"

		//attGiorno = ORMExecuteQuery(hql, false);

		attGiorno = EntityLoad("Attivita", {data = data});

		attGiornoJson = SerializeJson(attGiorno);

		WriteOutput(attGiornoJson);
	}

</cfscript>
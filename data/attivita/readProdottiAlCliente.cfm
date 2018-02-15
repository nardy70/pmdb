<cfscript>
	if(isDefined("idattivita")){

		hql = "from ProdAlCli where idattivita='#idattivita#'"
		prodalcli = ORMExecuteQuery(hql, false);

		//prodalcli = EntityLoad("ProdAlCli");

		prodalcliJson = SerializeJson(prodalcli);

		WriteOutput(prodalcliJson);
	}
</cfscript>
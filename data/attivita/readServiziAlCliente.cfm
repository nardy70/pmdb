<cfscript>
	if(isDefined("idattivita")){

		hql = "from ServAlCli where idattivita='#idattivita#'"
		servalcli = ORMExecuteQuery(hql, false);
		
		//servalcli = EntityLoad("ServAlCli", {idattivita = idatt});
		
		servalcliJson = SerializeJson(servalcli);
		
		WriteOutput(servalcliJson);

	}
</cfscript>
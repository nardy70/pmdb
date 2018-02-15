<cfscript>
	if(isDefined("dataselez")){
		attGiorno = EntityNew("Attivita");
		cliente = EntityLoad("Anagrafica", idcliente, true);

		attGiorno.setData(dataselez);
		attGiorno.setIdcliente(cliente);

		EntitySave(attGiorno);

		OrmFlush();
	}
</cfscript>
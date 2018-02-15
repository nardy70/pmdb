<cfscript>
	if(isDefined("id")){
		Selez = entityLoad("Magazzino", "#id#", true);
		EntityDelete(Selez);
	}
</cfscript>
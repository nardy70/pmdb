<cfscript>
	if (!isDefined("sort")) {
		sort = 'data'; order = 'desc';
	}

	fichetotale = EntityLoad("FicheTotale", {}, "#sort# #order#");

	fichetotaleJson = SerializeJson(fichetotale);

	WriteOutput(fichetotaleJson);
</cfscript>
<cfscript>
	if (!isDefined("sort")) {
		sort = 'data'; order = 'desc';
	}

	ficheservizi = EntityLoad("FicheServizi", {}, "#sort# #order#");

	ficheserviziJson = SerializeJson(ficheservizi);

	WriteOutput(ficheserviziJson);
</cfscript>
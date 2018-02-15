<cfscript>
	if (!isDefined("sort")) {
		sort = 'data'; order = 'desc';
	}

	ficheprodotti = EntityLoad("FicheProdotti", {}, "#sort# #order#");

	ficheprodottiJson = SerializeJson(ficheprodotti);

	WriteOutput(ficheprodottiJson);
</cfscript>
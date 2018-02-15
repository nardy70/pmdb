<cfscript>
	prd = EntityLoad("Prodotto", {}, "nome asc", {ignorecase: true});

	prdJson = SerializeJson(prd);

	WriteOutput(prdJson);
</cfscript>
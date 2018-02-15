<cfscript>
	percentualevendite = SerializeJson(EntityLoad("PercentualeVendite"));
	WriteOutput(percentualevendite);
</cfscript>
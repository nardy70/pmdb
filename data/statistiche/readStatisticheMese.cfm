<cfscript>
	statistichemese = SerializeJson(EntityLoad("StatisticheMese"));
	WriteOutput(statistichemese);
</cfscript>
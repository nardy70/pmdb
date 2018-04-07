<cfscript>
	statistichemese = SerializeJson(EntityLoad("StatisticheMese",{},"anno Desc, nmese Desc"));
	WriteOutput(statistichemese);
</cfscript>
<cfscript>
	statisticheanno = SerializeJson(EntityLoad("StatisticheAnno",{},"anno Desc"));
	WriteOutput(statisticheanno);
</cfscript>
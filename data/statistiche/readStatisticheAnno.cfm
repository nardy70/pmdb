<cfscript>
	statisticheanno = SerializeJson(EntityLoad("StatisticheAnno"));
	WriteOutput(statisticheanno);
</cfscript>
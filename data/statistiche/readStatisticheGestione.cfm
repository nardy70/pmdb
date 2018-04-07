<cfscript>
	statistichegestione = SerializeJson(EntityLoad("StatisticheGestione",{anno = "2018", mese = "3"}, "data DESC"));
	WriteOutput(statistichegestione);
</cfscript>
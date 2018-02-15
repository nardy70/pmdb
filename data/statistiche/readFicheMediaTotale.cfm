<cfscript>
	fichemediatotale = SerializeJson(EntityLoad("FicheMediaTotale"));
	WriteOutput(fichemediatotale);
</cfscript>
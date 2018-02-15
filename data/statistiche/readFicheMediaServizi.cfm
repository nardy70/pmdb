<cfscript>
	fichemediaservizi = SerializeJson(EntityLoad("FicheMediaServizi"));
	WriteOutput(fichemediaservizi);
</cfscript>
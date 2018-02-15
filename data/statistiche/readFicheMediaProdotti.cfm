<cfscript>
	fichemediaprodotti = SerializeJson(EntityLoad("FicheMediaProdotti"));
	WriteOutput(fichemediaprodotti);
</cfscript>
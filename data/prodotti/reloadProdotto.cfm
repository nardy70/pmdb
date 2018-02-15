<cfscript>
	prodottoSelez = EntityLoad("Prodotto", id, true);
	WriteOutput(SerializeJson(prodottoSelez));
</cfscript>
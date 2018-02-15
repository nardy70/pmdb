<cfscript>
	attivitaSel = entityLoad("Attivita", id, true);
	entityDelete(attivitaSel);
</cfscript>
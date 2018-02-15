<cfscript>
	marca = EntityLoad("Marca", {}, "nomemarca asc", {ignorecase: true});

	WriteOutput(SerializeJson(marca));
</cfscript>
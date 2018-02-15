<cfscript>
	cliente = EntityLoad("Anagrafica", {cancellato="0"});

	clienteJson = SerializeJson(cliente);

	WriteOutput(clienteJson);
</cfscript>
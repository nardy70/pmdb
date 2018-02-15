<cfscript>
	servAlCliente = entityLoad("ServAlCli", id, true);
	entityDelete(servAlCliente);
</cfscript>
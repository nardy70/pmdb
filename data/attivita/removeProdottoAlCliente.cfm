<cfscript>
	prodAlCliente = entityLoad("ProdAlCli", id, true);
	entityDelete(prodAlCliente);
</cfscript>
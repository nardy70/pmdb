<cfscript>
	clienteSelez = entityLoad("Anagrafica", id, true);

	clienteSelez.setCancellato(1);

	EntitySave(clienteSelez);
	OrmFlush();
</cfscript>
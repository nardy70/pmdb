<cfscript>
	servizioSelez = entityLoad("Servizio", id, true);

	servizioSelez.setCancellato(1);

	EntitySave(servizioSelez);
	OrmFlush();
</cfscript>
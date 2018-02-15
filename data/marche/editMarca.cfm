<cfscript>
	if (isDefined("nomemarca")) {

		marcaSelez = EntityLoad("Marca", id, true);

		marcaSelez.setNomemarca(Ucase(nomemarca));

		EntitySave(marcaSelez);
		OrmFlush();
	}
</cfscript>
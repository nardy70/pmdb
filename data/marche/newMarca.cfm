<cfscript>
	if (isDefined("nomemarca")) {

		nuovaMarca = EntityNew("Marca");

		nuovaMarca.setNomemarca(Ucase(nomemarca));

		EntitySave(nuovaMarca);

		OrmFlush();
	}
</cfscript>
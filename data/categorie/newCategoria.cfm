<cfscript>
	if (isDefined("nomecategoria")) {

		nuovaCategoria = EntityNew("Categoria");

		nuovaCategoria.setNomecategoria(Ucase(nomecategoria));

		EntitySave(nuovaCategoria);

		OrmFlush();
	}
</cfscript>
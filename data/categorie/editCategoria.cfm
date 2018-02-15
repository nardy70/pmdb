<cfscript>
	if (isDefined("nomecategoria")) {

		categoriaSelez = EntityLoad("Categoria", id, true);

		categoriaSelez.setNomecategoria(Ucase(nomecategoria));

		EntitySave(categoriaSelez);
		OrmFlush();
	}
</cfscript>
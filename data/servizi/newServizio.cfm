<cfscript>
	servizioNuovo = EntityNew("Servizio");
	idcategoria = EntityLoad("Categoria", idcategoria, true);

	servizioNuovo.setIdcategoria(idcategoria);
	servizioNuovo.setServizio(Ucase(servizio));
	servizioNuovo.setUnita(unita);
	servizioNuovo.setPrezzo(prezzo);
	servizioNuovo.setCancellato('0');

	EntitySave(servizioNuovo);

	OrmFlush();

</cfscript>
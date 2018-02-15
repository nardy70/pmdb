<cfscript>
	servizioSelez = EntityLoad("Servizio", id, true);
	idcategoria = EntityLoad("Categoria", idcategoria, true);

	servizioSelez.setIdcategoria(idcategoria);
	servizioSelez.setServizio(Ucase(servizio));
	servizioSelez.setUnita(unita);
	servizioSelez.setPrezzo(prezzo);

	EntitySave(servizioSelez);
	OrmFlush();

</cfscript>
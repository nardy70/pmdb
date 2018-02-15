<cfscript>
	prodottoSelez = entityLoad("Prodotto", id, true);

	prodottoSelez.setCancellato(1);

	EntitySave(prodottoSelez);
	OrmFlush();
</cfscript>
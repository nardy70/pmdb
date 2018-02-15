<cfscript>
	prodottoNuovo = EntityNew("Prodotto");
	idmarca = EntityLoad("Marca", idmarca, true);

	if(!IsDefined("novendita")){
		novendita="off";
	}

	if(!IsDefined("barcode") or barcode eq ""){
		barcode=0;
	}

	prodottoNuovo.setNome(Ucase(nome));
	prodottoNuovo.setIdmarca(idmarca);
	prodottoNuovo.setBarcode(barcode);
	prodottoNuovo.setPrezzocliente(prezzocliente);
	prodottoNuovo.setPrezzofattura(prezzofattura);
	prodottoNuovo.setMisura(misura);
	prodottoNuovo.setUnita(unita);
	prodottoNuovo.setCancellato('0');
	prodottoNuovo.setNovendita(novendita);

	EntitySave(prodottoNuovo);
	OrmFlush();

</cfscript>
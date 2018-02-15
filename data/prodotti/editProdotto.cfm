<cfscript>
	prodottoSelez = EntityLoad("Prodotto", id, true);
	idmarca = EntityLoad("Marca", idmarca, true);

	if(!IsDefined("novendita")){
		novendita="off";
	}

	if(!IsDefined("barcode") or barcode eq ""){
		barcode=0;
	}

	prodottoSelez.setNome(Ucase(nome));
	prodottoSelez.setIdmarca(idmarca);
	prodottoSelez.setBarcode(barcode);
	prodottoSelez.setPrezzocliente(prezzocliente);
	prodottoSelez.setPrezzofattura(prezzofattura);
	prodottoSelez.setMisura(misura);
	prodottoSelez.setUnita(unita);
	prodottoSelez.setNovendita(novendita);

	EntitySave(prodottoSelez);
	OrmFlush();
</cfscript>
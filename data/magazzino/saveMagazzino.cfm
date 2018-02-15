<cfscript>
	if (isDefined("data")) {

		if(isDefined("id")) {
			objMagazz = EntityLoad("Magazzino", id, true);
			idprodotto = "#form['idprodotto[id]']#";
			idp = EntityLoad("Prodotto", idprodotto, true);
		} else {
			objMagazz = EntityNew("Magazzino");
			idp = EntityLoad("Prodotto", idprodotto, true);
		}

		if(!isDefined("storicoprezzofattura")){
			storicoprezzofattura = 0;
		}

		objMagazz.setData(data);
		objMagazz.setNumfattura(numfattura);
		objMagazz.setIdprodotto(idp);
		objMagazz.setQty(qty);
		objMagazz.setStoricoprezzofattura(storicoprezzofattura);

		EntitySave(objMagazz);

		OrmFlush();
	}
</cfscript>

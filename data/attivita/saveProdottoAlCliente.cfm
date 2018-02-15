<cfscript>
	//writedump(var = "#form#");
	if(isDefined("idattivita")){

		idatt = EntityLoad("Attivita", idattivita, true);

		if(isDefined("idprodotto")){
			idserv = EntityLoad("Prodotto", idprodotto, true);
			prodAlCliente = EntityNew("ProdAlCli");
		} else {
			idserv = EntityLoad("Prodotto", "#form['idprodotto[id]']#", true);
			prodAlCliente = EntityLoad("ProdAlCli", id, true);
		}

		prodAlCliente.setIdattivita(idatt);
		prodAlCliente.setIdprodotto(idserv);
		prodAlCliente.setPrezzoapplicato(prezzoapplicato);
		prodAlCliente.setStaff(staff);
		prodAlCliente.setStoricoprezzo(storicoprezzo);
		prodAlCliente.setQty(qty);
		prodAlCliente.setNote(note);

		EntitySave(prodAlCliente);

		OrmFlush();
	}
</cfscript>
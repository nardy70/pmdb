<cfscript>
	//writedump(var = "#form#");
	if(isDefined("idattivita")){

		idatt = EntityLoad("Attivita", idattivita, true);

		if(isDefined("idservizio")){
			idserv = EntityLoad("Servizio", idservizio, true);
			servAlCliente = EntityNew("ServAlCli");
		} else {
			idserv = EntityLoad("Servizio", "#form['idservizio[id]']#", true);
			servAlCliente = EntityLoad("ServAlCli", id, true);
		}

		servAlCliente.setIdattivita(idatt);
		servAlCliente.setIdservizio(idserv);
		servAlCliente.setPrezzoapplicato(prezzoapplicato);
		servAlCliente.setStaff(staff);
		servAlCliente.setStoricoprezzo(storicoprezzo);
		servAlCliente.setTempo(tempo);
		servAlCliente.setNote(note);

		EntitySave(servAlCliente);

		OrmFlush();
	}
</cfscript>
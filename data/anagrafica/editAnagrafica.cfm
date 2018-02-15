<cfscript>
	clienteSelez = EntityLoad("Anagrafica", id, true);

	clienteSelez.setNome(Ucase(nome));
	clienteSelez.setCognome(Ucase(cognome));
	clienteSelez.setNomecognome(Ucase(nome & ' ' & cognome));
	clienteSelez.setSesso(sesso);
	clienteSelez.setEmail(Lcase(email));
	clienteSelez.setCellulare(cellulare);
	clienteSelez.setTelefono(telefono);
	clienteSelez.setCompleanno(compleanno);
	clienteSelez.setProfessione(Ucase(professione));
	clienteSelez.setVia(Ucase(via));
	clienteSelez.setCitta(Ucase(citta));
	clienteSelez.setProvincia(Ucase(provincia));
	clienteSelez.setCap(cap);
	clienteSelez.setIndirizzo(Ucase(via & ' ' & cap & ' ' & citta & ' ' & provincia));
	clienteSelez.setRegistrazione(registrazione);

	EntitySave(clienteSelez);
	OrmFlush();
</cfscript>
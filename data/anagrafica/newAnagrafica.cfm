<cfscript>
	clienteNuovo = EntityNew("Anagrafica");

	nomecognome = nome & ' ' & cognome;
	indirizzo = via & ' ' & cap & ' ' & citta & ' ' & provincia;

	if(isNull(setRegistrazione)){
		registrazione = '#DateFormat(now(), "yyyy-mm-dd")#';
	}

	clienteNuovo.setNome(Ucase(nome));
	clienteNuovo.setCognome(Ucase(cognome));
	clienteNuovo.setNomecognome(Ucase(nomecognome));
	clienteNuovo.setSesso(sesso);
	clienteNuovo.setEmail(Lcase(email));
	clienteNuovo.setCellulare(cellulare);
	clienteNuovo.setTelefono(telefono);
	clienteNuovo.setCompleanno(compleanno);
	clienteNuovo.setProfessione(Ucase(professione));
	clienteNuovo.setVia(Ucase(via));
	clienteNuovo.setCitta(Ucase(citta));
	clienteNuovo.setProvincia(Ucase(provincia));
	clienteNuovo.setCap(cap);
	clienteNuovo.setIndirizzo(Ucase(indirizzo));
	clienteNuovo.setRegistrazione(registrazione);
	clienteNuovo.setCancellato('0');

	EntitySave(clienteNuovo);

	OrmFlush();

</cfscript>
<cfscript>

	if (!isDefined("filtronomeservizio")) {
		filtronomeservizio = "";
	} else {
		filtronomeservizio = lCase(filtronomeservizio);
	}

	if (!isDefined("sort")) {
		sort = 'idcategoria.nomecategoria'; order = 'asc';
	}

	if (sort == "servizio") {
		sort = 'idcategoria.nomecategoria';
	}

	hql = "select new map( id as id, idcategoria.id as idc, idcategoria.nomecategoria as nomecategoria, servizio as servizio, unita as unita, prezzo as prezzo )
			from Servizio
			where cancellato = 0 and lower(servizio) like :filtronomeservizio
			order by #sort# #order#, servizio #order#
	";

	servizi = ORMExecuteQuery(hql, {filtronomeservizio: "%#filtronomeservizio#%"} );

	WriteOutput(SerializeJson(servizi));

</cfscript>
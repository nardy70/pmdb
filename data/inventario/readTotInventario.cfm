<cfscript>
	if (!isDefined("data_selez")) {
		data_selez = '#DateFormat(now(), "yyyy-mm-dd")#'
	};
	queryObj = new query();
	queryObj.setDatasource("pelomatto");
	queryObj.setName("totaleinv");
	result = queryObj.execute(sql="
				select sum(totaleinv) as totale from 
					(select (prezzofattura*sum(qty)) as totaleinv
					from pelomatto.inventarioxdata
					where data <= '#data_selez#'
					group by idprodotto) totinv;");
	totaleinv = result.getResult();
	//writeDump(result);
	WriteOutput(serializeJSON(totaleinv.totale));
</cfscript>

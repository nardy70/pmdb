<cfscript>
	
	if (!isDefined("data_selez")) {
		data_selez = '#DateFormat(now(), "yyyy-mm-dd")#'
	};


	// storedproc procedure="inventario_proc" datasource = "pelomatto" {
	// 	procparam cfsqltype="cf_sql_date" value="#data_selez#";
	// 	procresult name="invjson";
	// };

	queryObj = new query();
	queryObj.setDatasource("pelomatto");
	queryObj.setName("invjson");
	result = queryObj.execute(sql="call pelomatto.inventario_proc('#data_selez#');");
	invjson = result.getResult();

	writeDump(result);

	queryConvertedToArray   =   [];
    // Loop over the query and add each row as a struct to the array
    for( i=1; i LTE invjson.recordcount; i++ )
    {
        queryConvertedToArray[ i ]  =   {}; // new row as struct
        // populating the struct using bracket notation allows us to preserve the case of the keys
        queryConvertedToArray[ i ][ "idprodotto" ] = invjson.idprodotto[ i ]; 
        queryConvertedToArray[ i ][ "nome" ]  =   invjson.nome[ i ];
        queryConvertedToArray[ i ][ "venduti" ]  =   invjson.venduti[ i ];
        queryConvertedToArray[ i ][ "magazzino" ]  =   invjson.magazzino[ i ];
        queryConvertedToArray[ i ][ "prezzofattura" ]  =   invjson.prezzofattura[ i ];
        queryConvertedToArray[ i ][ "totale" ]  =   invjson.totale[ i ];
    }

    writeOutput(serializeJSON(queryConvertedToArray));

	
</cfscript>
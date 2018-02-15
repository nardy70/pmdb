<cfscript>
	if (!isDefined("data_selez")) {
		data_selez = '#DateFormat(now(), "yyyy-mm-dd")#'
	};

	hql = "select new map( marca as marca, sum(prezzofattura*qty) as totalemarca )
            from InventarioXData
            where data <= :datasel
            group by marca";

    totaleinvxmarca = ORMExecuteQuery(hql, {datasel: '#data_selez#'});

	WriteOutput(serializeJSON(totaleinvxmarca));
</cfscript>
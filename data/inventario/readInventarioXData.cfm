<cfscript>
	//start=(page-1)*rows;
	
	if (!isDefined("data_selez")) {
		data_selez = '#DateFormat(now(), "yyyy-mm-dd")#'
	};

	if (!isDefined("order") || !isDefined("sort")) {
      order = 'asc'; sort = 'marca';
    }
		
	switch(sort) {
		case "nome":
			sort = 'marca';
			break;
		case "qty":
			sort = 'sum(qty)';
			break;
		case "ven_prel":
			sort = 'sum(ven_prel)';
			break;
		case "tot":
			sort = 'sum(qty)*prezzofattura';
			break;
	}

	hql = "select new map( min(data) as data, id as id, marca as marca, nome as nome, sum(ven_prel) as ven_prel, sum(qty) as qty, prezzofattura as prezzofattura, sum(qty)*prezzofattura as tot )
			from InventarioXData
			where data <= :datasel
			group by id having sum(qty)>0
			order by #sort# #order#, nome #order#";

	// hql2="select id
	// 		from InventarioXData
	// 		where data <= :datasel
	// 		group by id";

	prodAlCli = ORMExecuteQuery(hql, {datasel: '#data_selez#'});
	//prodAlCli["total"] = ArrayLen(ORMExecuteQuery(hql2, {datasel: '#data_selez#'}));

    writeOutput(serializeJSON(prodAlCli));
	
</cfscript>
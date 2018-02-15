<cfscript>

  	if (!isDefined("page")) {
      WriteOutput("<script> alert('Non Accessibile') </script>");
      abort;
    }

    start=(page-1)*rows;
		
	if (!isDefined("order") || !isDefined("sort")) {
      order = 'desc'; sort = 'totale';
    }
		
	switch(sort) {
		case "totale":
			sort = 'sum(totserv) + sum(totprod)';
			break;
		case "totsvc":
			sort = 'sum(totserv)';
			break;
		case "totprd":
			sort = 'sum(totprod)';
			break;
	}
    
    if (!isDefined("di") || !isDefined("df")) {
			
			hql = "select new map( nomecognome as nomecognome, sum(totserv) as totsvc, sum(totprod) as totprd, sum(totserv) + sum(totprod) as totale )
				from StatisticheClientiXData group by nomecognome order by #sort# #order#"
		
    } else {
			
			hql = "select new map( data as data, nomecognome as nomecognome, sum(totserv) as totsvc, sum(totprod) as totprd, sum(totserv) + sum(totprod) as totale )
				from StatisticheClientiXData where data < '#df#' and data > '#di#' group by nomecognome order by #sort# #order#"
		}

    StatisticheClientiTop["rows"] = ORMExecuteQuery(hql, false, {offset=start, maxResults=rows});
    StatisticheClientiTop["total"] = ArrayLen(ORMExecuteQuery(hql));

    StatisticheClientiTopJson = SerializeJson(StatisticheClientiTop);

    WriteOutput(StatisticheClientiTopJson);

</cfscript>
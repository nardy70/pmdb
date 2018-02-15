<cfscript>

  	if (!isDefined("page")) {
      WriteOutput("<script> alert('Non Accessibile') </script>");
      abort;
    }

    start=(page-1)*rows;
    
    if (!isDefined("sort")) {
      sort = 'ultimadataserv'; order = 'desc';
    }
    
    if (!isDefined("servprod") || !isDefined("meseanno") || !isDefined("nn")) {
      servprod = 'ultimadataserv'; meseanno = 'm'; nn = 3;
    }
    
    result = DateFormat(DateAdd('#meseanno#', -'#nn#', now()),'yyyy-mm-dd');
    
    //WriteOutput("<script> alert('#result#') </script>");
    
    hql = "from StatisticheClienti where #servprod# < '#result#' order by #sort# #order#"

    StatisticheClientiBad["rows"] = ORMExecuteQuery(hql, false, {offset=start, maxResults=rows});
    StatisticheClientiBad["total"] = ArrayLen(ORMExecuteQuery(hql));

    StatisticheClientiBadJson = SerializeJson(StatisticheClientiBad);

    WriteOutput(StatisticheClientiBadJson);
  
</cfscript>
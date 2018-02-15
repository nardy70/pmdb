<cfscript>
	hql = 'from Magazzino where qty >= 0 group by data, numfattura order by data desc'

	//fattByData["rows"] = ORMExecuteQuery(hql, false, {maxResults=20});

	fattByData["rows"] = ORMExecuteQuery(hql, false);

	fattByDataJson = SerializeJson(fattByData);

	WriteOutput(fattByDataJson);
</cfscript>
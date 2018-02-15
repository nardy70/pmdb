<cfscript>
	if(!isDefined("data")) {
		data = "";
	}

	if(!isDefined("numfattura")) {
		numfattura = "";
	}

	hql = "from Magazzino where data = '#data#' and numfattura = '#numfattura#' and qty >= 0 order by id asc"

	magByFat = ORMExecuteQuery(hql, false);

	magByFatJson = SerializeJson(magByFat);

	WriteOutput(magByFatJson);
</cfscript>
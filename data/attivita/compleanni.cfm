<cfscript>
	if(isDefined("com")){

		data = #DateFormat(com, "%-mm-dd")#
		datarif = #DateFormat(com, "yyyy-mm-dd")#

		hql = "SELECT nomecognome, EXTRACT(YEAR FROM '#datarif#') - EXTRACT(YEAR FROM compleanno) AS anni FROM Anagrafica where compleanno like '#data#'"

		compleanni = ORMExecuteQuery(hql, false, {});

		if(!ArrayIsEmpty(compleanni)){
			arrayEach(compleanni, function(result, index){
				WriteOutput("<br>" & arrayToList(result, " - ") & " anni" & "<br>");
			});
			WriteOutput("<br>");
		} else {
			WriteOutput("NESSUNO");
		}

	}
</cfscript>
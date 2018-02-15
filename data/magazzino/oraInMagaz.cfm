<cfscript>
	hql = "select sum(qty) from Magazzino where idprodotto = '#id#' "
	sumMagazzino = ORMExecuteQuery(hql, true);

	if(isDefined("sumMagazzino")){
		sumMagazzino = sumMagazzino;
	} else {
		sumMagazzino = 0;
	}

	hql2 = "select sum(qty) from ProdAlCli where idprodotto = '#id#' "
	sumProdAlCli = ORMExecuteQuery(hql2, true);

	if(isDefined("sumProdAlCli")){
		sumProdAlCli = sumProdAlCli;
	} else {
		sumProdAlCli = 0;
	}

	oraInMagaz = sumMagazzino - sumProdAlCli;

	if(isNull(oraInMagaz)) {
		WriteOutput('0');
	} else {
		WriteOutput(oraInMagaz);
	}
</cfscript>

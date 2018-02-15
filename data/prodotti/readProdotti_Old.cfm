<cfscript>
	if (!isDefined("page")) {
		WriteOutput("<script> alert('Non Accessibile') </script>");
		abort;
	}

	start=(page-1)*rows;

	if (!isDefined("sort")) {
		sort = 'idmarca'; order = 'asc';
	}

	if (isDefined("filtronomeprodotto")) {

		if (sort == 'idmarca') {
			hql = "select P from Prodotto P where P.cancellato = 0 and lower(P.nome) like lower('%#filtronomeprodotto#%')
			    order by P.idmarca.nomemarca #order#, nome #order# "
		} else {
			hql = "from Prodotto P where lower(P.nome) like lower('%#filtronomeprodotto#%') and P.cancellato=0
				order by #sort# #order#"
		}

		prodotti["rows"] = ORMExecuteQuery(hql, false, {offset=start, maxResults=rows});

		for(i in prodotti["rows"]){
			hql2 = "select sum(qty) from Magazzino where idprodotto = '#i.getId()#' "
			sumMagazzino = ORMExecuteQuery(hql2, true);

			if(isDefined("sumMagazzino")){
				sumMagazzino = sumMagazzino;
			} else {
				sumMagazzino = 0;
			}

			hql3 = "select sum(qty) from ProdAlCli where idprodotto = '#i.getId()#' "
			sumProdAlCli = ORMExecuteQuery(hql3, true);

			if(isDefined("sumProdAlCli")){
				sumProdAlCli = sumProdAlCli;
			} else {
				sumProdAlCli = 0;
			}

			i.oraInMagaz = sumMagazzino - sumProdAlCli;
		}

		prodotti["total"] = ArrayLen(ORMExecuteQuery(hql));

	} else {

		if (sort == 'idmarca') {
			hql = "select P from Prodotto P where P.cancellato = 0 order by P.idmarca.nomemarca #order#, nome #order# "
			prodotti["rows"] = ORMExecuteQuery(hql, false, {offset=start, maxResults=rows});
		} else {
			prodotti["rows"] = EntityLoad("Prodotto", {cancellato=0}, "#sort# #order#", {offset=start, maxResults=rows});
		}

		for(i in prodotti["rows"]){

			hql2 = "select sum(qty) from Magazzino where idprodotto = '#i.getId()#' "
			sumMagazzino = ORMExecuteQuery(hql2, true);

			if(isDefined("sumMagazzino")){
				sumMagazzino = sumMagazzino;
			} else {
				sumMagazzino = 0;
			}

			hql3 = "select sum(qty) from ProdAlCli where idprodotto = '#i.getId()#' "
			sumProdAlCli = ORMExecuteQuery(hql3, true);

			if(isDefined("sumProdAlCli")){
				sumProdAlCli = sumProdAlCli;
			} else {
				sumProdAlCli = 0;
			}

			i.oraInMagaz = sumMagazzino - sumProdAlCli;
		}

		prodotti["total"] = ArrayLen(EntityLoad("Prodotto", {cancellato=0}));
	}

	prodottiJson = SerializeJson(prodotti);

	WriteOutput(prodottiJson);
</cfscript>
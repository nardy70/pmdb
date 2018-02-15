<cfscript>

	for(i = 0; i < "#form['total']#"; i++){

		if("#form['rows[#i#][idprodotto]']#" neq ""){

			str = "#form['rows[#i#][data]']#";

			//writedump(var = str.length());

			if(isDefined("str") && (!str.isEmpty()) ){

				if(isDefined("form['rows[#i#][id]']")){
					objMagazz = EntityLoad("Magazzino", "#form['rows[#i#][id]']#", true);

					if(isDefined("form['rows[#i#][idprodotto][id]']")) {
						idp = EntityLoad("Prodotto", "#form['rows[#i#][idprodotto][id]']#", true);
					} else {
						idp = EntityLoad("Prodotto", "#form['rows[#i#][idprodotto]']#", true);
					}

					objMagazz.setData("#form['rows[#i#][data]']#");
					objMagazz.setNumfattura("#form['rows[#i#][numfattura]']#");
					objMagazz.setIdprodotto(idp);
					objMagazz.setQty("#form['rows[#i#][qty]']#");
					objMagazz.setStoricoprezzofattura("#form['rows[#i#][storicoprezzofattura]']#");

					EntitySave(objMagazz);
					OrmFlush();

				} else if(isDefined("form['rows[#i#][idprodotto]']")){
					objMagazz = EntityNew("Magazzino");
					idp = EntityLoad("Prodotto", "#form['rows[#i#][idprodotto]']#", true);

					objMagazz.setData("#form['rows[#i#][data]']#");
					objMagazz.setNumfattura("#form['rows[#i#][numfattura]']#");
					objMagazz.setIdprodotto(idp);
					objMagazz.setQty("#form['rows[#i#][qty]']#");
					objMagazz.setStoricoprezzofattura("#form['rows[#i#][storicoprezzofattura]']#");

					EntitySave(objMagazz);
					OrmFlush();
				}
			}
		}
	}

</cfscript>

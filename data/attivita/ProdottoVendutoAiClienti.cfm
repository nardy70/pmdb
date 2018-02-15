<cfscript>
	if (isDefined('id')){

		start=(page-1)*rows;

		if (!isDefined("sort")) {
			sort = 'data'; order = 'desc';
		}

		prdvcl["rows"] = EntityLoad("ProdottoVendutoAiClienti", {idp = id}, "#sort# #order#", {offset=start, maxResults=rows});
		prdvcl["total"] = ArrayLen(EntityLoad("ProdottoVendutoAiClienti", {idp = id}));

		prdvclJson = SerializeJson(prdvcl);

		WriteOutput(prdvclJson);
	}
</cfscript>
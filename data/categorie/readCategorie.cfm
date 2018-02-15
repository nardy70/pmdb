<cfscript>
	categoria = EntityLoad("Categoria", {}, "nomecategoria asc", {ignorecase: true});

	WriteOutput(SerializeJson(categoria));
</cfscript>
component output=false persistent=true table="attivita" {
	property name="id" column="idattivita" fieldtype="id" generator="increment";
	property name="data" ormtype="date";
	property name="idcliente" ormtype="int" fieldtype="many-to-one" cfc="Anagrafica" fkcolumn="idcliente";
}
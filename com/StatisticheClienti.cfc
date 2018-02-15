component output=false persistent=true table="statistiche_clienti" {
	property name="nomecognome" fieldtype="id" ormtype="string";
  property name="totsvc" ormtype="big_decimal";
	property name="ultimadataserv" ormtype="date";
	property name="totprd" ormtype="big_decimal";
	property name="ultimadataprod" ormtype="date";
	property name="totale" ormtype="big_decimal";
}
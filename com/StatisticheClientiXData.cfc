component output=false persistent=true table="statistiche_clienti_xdata" {
	property name="id" fieldtype="id" ormtype="string";
	property name="data" ormtype="date";
	property name="nomecognome" ormtype="string";
  property name="totserv" ormtype="big_decimal";
	property name="totprod" ormtype="big_decimal";
}
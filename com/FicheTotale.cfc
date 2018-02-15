component output=false persistent=true table="fichetotale" {
	property name="data" fieldtype="id" ormtype="date";
	property name="numclienti" ormtype="int";
	property name="totserv" ormtype="big_decimal";
    property name="totprod" ormtype="big_decimal";
    property name="incasso" ormtype="big_decimal";
	property name="fichetotgg" ormtype="big_decimal";
}
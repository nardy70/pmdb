component output=false persistent=true table="ficheservizi" {
	property name="data" fieldtype="id" ormtype="date";
	property name="passaggi" ormtype="int";
	property name="numeroclienti" ormtype="int";
    property name="totservizi" ormtype="big_decimal";
	property name="ficheservizi" ormtype="big_decimal";
}
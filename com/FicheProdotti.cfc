component output=false persistent=true table="ficheprodotti" {
	property name="data" fieldtype="id" ormtype="date";
	property name="passaggi" ormtype="int";
	property name="numeroclienti" ormtype="int";
    property name="totprodotti" ormtype="big_decimal";
	property name="ficheprodotti" ormtype="big_decimal";
}
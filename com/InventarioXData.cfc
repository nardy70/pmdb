component output=false persistent=true table="inventarioxdata" {
	property name="data" ormtype="date";
	property name="id" column="idprodotto" ormtype="int" fieldtype="id";
	property name="marca" ormtype="string";
	property name="nome" ormtype="string";
	property name="ven_prel" ormtype="int";
	property name="qty" ormtype="int";
    property name="prezzofattura" ormtype="big_decimal";
}
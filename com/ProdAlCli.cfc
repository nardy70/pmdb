component output=false persistent=true table="prodalcli" {
	property name="id" column="idprodalcli" fieldtype="id" generator="increment";
	property name="idprodotto" ormtype="int" fieldtype="many-to-one" cfc="Prodotto" fkcolumn="idprodotto";
    property name="storicoprezzo" ormtype="big_decimal";
	property name="prezzoapplicato" ormtype="big_decimal";
	property name="qty" ormtype="int";
	property name="staff" ormtype="string";
	property name="note" ormtype="string";
	property name="idattivita" ormtype="int" fieldtype="many-to-one" cfc="Attivita" fkcolumn="idattivita";
}
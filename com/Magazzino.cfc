/**
 * Magazzino
 *
 * @author mau
 * @date 3/10/15
 **/
component output=false persistent=true table="magazzino" {
	property name="id" column="idmagazzino" fieldtype="id" generator="increment";
    property name="data" ormtype="date";
	property name="numfattura" ormtype="string";
	property name="idprodotto" ormtype="int" fieldtype="many-to-one" cfc="Prodotto" fkcolumn="idprodotto";
    property name="storicoprezzofattura" ormtype="big_decimal";
	property name="qty" ormtype="int";
}
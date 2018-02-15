/**
 * Prodotto
 *
 * @author mau
 * @date 3/7/15
 **/
component output=false persistent=true table="prodotti" {
	property name="id" column="idprodotto" fieldtype="id" generator="increment";
    property name="nome" ormtype="string";
	property name="idmarca" ormtype="int" fieldtype="many-to-one" cfc="Marca" fkcolumn="idmarca";
	property name="barcode" ormtype="big_decimal";
    property name="prezzocliente" ormtype="big_decimal";
	property name="prezzofattura" ormtype="big_decimal";
	property name="misura" ormtype="big_decimal";
	property name="unita" ormtype="string";
	property name="cancellato" ormtype="boolean";
	property name="novendita" ormtype="string";
}
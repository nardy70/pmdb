/**
 * Anagrafica
 *
 * @author mau
 * @date 3/6/15
 **/
component output=false persistent=true table="anagrafica" {
	property name="id" column="idanagrafica" fieldtype="id" generator="increment";
	property name="nomecognome" ormtype="string";
	property name="nome" ormtype="string";
  	property name="cognome" ormtype="string";
	property name="sesso" ormtype="string";
  	property name="compleanno" ormtype="date";
	property name="professione" ormtype="string";
  	property name="email" ormtype="string";
	property name="cellulare" ormtype="string";
	property name="telefono" ormtype="string";
	property name="indirizzo" ormtype="string";
	property name="via" ormtype="string";
	property name="citta" ormtype="string";
	property name="provincia" ormtype="string";
	property name="cap" ormtype="int";
	property name="cancellato" ormtype="boolean";
	property name="registrazione" ormtype="date";
}
component output=false persistent="true" table="servizi" {
    property name="id" column="idservizio" fieldtype="id" generator="increment";
    property name="idcategoria" ormtype="int" fieldtype="many-to-one" cfc="Categoria" fkcolumn="idcategoria";
	property name="servizio" ormtype="string";
	property name="unita" ormtype="string";
    property name="prezzo" ormtype="big_decimal";
    property name="cancellato" ormtype="boolean";
}
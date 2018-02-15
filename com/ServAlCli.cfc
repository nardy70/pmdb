component output=false persistent=true table="servalcli" {
	property name="id" column="idservalcli" fieldtype="id" generator="increment";
	property name="idservizio" ormtype="int" fieldtype="many-to-one" cfc="Servizio" fkcolumn="idservizio";
    property name="storicoprezzo" ormtype="big_decimal";
	property name="prezzoapplicato" ormtype="big_decimal";
	property name="tempo" ormtype="big_decimal";
	property name="staff" ormtype="string";
	property name="note" ormtype="string";
	property name="idattivita" ormtype="int" fieldtype="many-to-one" cfc="Attivita" fkcolumn="idattivita";
}
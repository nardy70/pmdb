component output=false persistent=true table="prodottovendutoaiclienti" {
	property name="id" column="id" fieldtype="id";
	property name="data" ormtype="date";
	property name="idp" ormtype="int";
	property name="prodotto" ormtype="string";
    property name="prezzo" ormtype="big_decimal";
	property name="prezzoapplicato" ormtype="big_decimal";
	property name="qty" ormtype="int";
	property name="note" ormtype="string";
	property name="nomecognome" ormtype="string";
	property name="staff" ormtype="string";
}
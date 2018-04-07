component output=false persistent=true table="statistiche_gestione" {
	property name="data" ormtype="date" fieldtype="id";
	property name="anno" ormtype="int";
	property name="mese" ormtype="int";
	property name="passaggi_donna" ormtype="int";
	property name="stilistici_F" ormtype="int";
	property name="tecnici_F" ormtype="int";
	property name="trattamenti_F" ormtype="int";
	property name="immagine_F" ormtype="int";
	property name="incasso_servizi_F" ormtype="big_decimal";
	property name="nr_clienti_rivendita_F" ormtype="int";
	property name="incasso_rivendita_F" ormtype="big_decimal";
	property name="passaggi_uomo" ormtype="int";
	property name="stilistici_M" ormtype="int";
	property name="tecnici_M" ormtype="int";
	property name="trattamenti_M" ormtype="int";
	property name="immagine_M" ormtype="int";
	property name="incasso_servizi_M" ormtype="big_decimal";
	property name="nr_clienti_rivendita_M" ormtype="int";
	property name="incasso_rivendita_M" ormtype="big_decimal";
}
component output=false persistent=true table="statistiche_anno" {
	property name="anno" fieldtype="id" ormtype="int";
  	property name="passaggi" ormtype="int";
	property name="gg_lavoro" ormtype="int";
	property name="incasso_servizi" ormtype="big_decimal";
	property name="incasso_servizi_netto" ormtype="big_decimal";
	property name="incasso_prodotti" ormtype="big_decimal";
	property name="incasso_prodotti_netto" ormtype="big_decimal";
	property name="incasso_totale" ormtype="big_decimal";
	property name="incasso_totale_netto" ormtype="big_decimal";
	property name="fiche_media_servizi" ormtype="big_decimal";
	property name="fiche_media_totale" ormtype="big_decimal";
	property name="percentuale_vendite" ormtype="big_decimal";
}
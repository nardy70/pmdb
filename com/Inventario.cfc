component output=false persistent=true table="inventario" {
	property name="id" column="idprodotto" fieldtype="id";
	property name="nome" ormtype="string";
	property name="qtymagnovendite" ormtype="int";
	property name="qtyprodvenduti" ormtype="int";
	property name="orainmagazzino" ormtype="int";
    property name="prezzofattura" ormtype="big_decimal";
	property name="tot" ormtype="big_decimal";
}
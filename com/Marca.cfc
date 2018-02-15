/**
 * Marca
 *
 * @author mau
 * @date 3/7/15
 **/
component output=false persistent=true table="marche" {
	property name="id" column="idmarca" fieldtype="id" generator="increment";
	property name="nomemarca" ormtype="string";
}
/**
 * Marca
 *
 * @author mau
 * @date 3/7/15
 **/
component output=false persistent=true table="categorie" {
	property name="id" column="idcategoria" fieldtype="id" generator="increment";
	property name="nomecategoria" ormtype="string";
}
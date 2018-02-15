component output=false persistent=true table="inventpers" {
	property name="id" column="idinventpers" fieldtype="id" generator="increment";
	property name="titolo" ormtype="string";
  	property name="datainvent" ormtype="date";
  	property name="datasave" ormtype="date";
	property name="note" ormtype="string";
}
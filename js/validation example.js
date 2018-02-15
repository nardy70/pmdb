$.extend($.fn.validatebox.defaults.rules, {
idcard : {// Verification of identity card
        validator : function(value) {
            return /^\d{15}(\d{2}[A-Za-z0-9])?$/i.test(value);
        },
        message : 'Identity card number is not in the correct format'
    },
      minLength: {
        validator: function(value, param){
            return value.length >= param[0];
        },
        message: 'Please enter at least (2) characters'
    },
    length:{validator:function(value,param){
        var len=$.trim(value).length;
            return len>=param[0]&&len<=param[1];
        },
            message:"Input the content length must be between {0} and {1}"
        },
    phone : {// Phone number validation
        validator : function(value) {
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message : 'Not in the correct format, please use the following format: 020-88888888'
    },
    mobile : {// Verification of mobile phone number
        validator : function(value) {
            return /^(13|15|18)\d{9}$/i.test(value);
        },
        message : 'Mobile phone number is not in the correct format'
    },
    intOrFloat : {// Verification of integer or decimal
        validator : function(value) {
            return /^\d+(\.\d+)?$/i.test(value);
        },
        message : 'Please enter a number, and to ensure that the correct format'
    },
    currency : {// Verification of currency
        validator : function(value) {
            return /^\d+(\.\d+)?$/i.test(value);
        },
        message : 'The money is not in the correct format'
    },
    qq : {// Verification of QQ, from the beginning of 10000
        validator : function(value) {
            return /^[1-9]\d{4,9}$/i.test(value);
        },
        message : 'The QQ number is not in the correct format'
    },
    integer : {// Verification of integer
        validator : function(value) {
            return /^[+]?[1-9]+\d*$/i.test(value);
        },
        message : 'Please enter an integer'
    },
    age : {// Age verification
        validator : function(value) {
            return /^(?:[1-9][0-9]?|1[01][0-9]|120)$/i.test(value);
        },
        message : 'Age must be an integer between 0 and 120'
    },
   
    chinese : {// Verification Chinese
        validator : function(value) {
            return /^[\Α-\￥]+$/i.test(value);
        },
        message : 'Please enter Chinese'
    },
    english : {// Test of English
        validator : function(value) {
            return /^[A-Za-z]+$/i.test(value);
        },
        message : 'Please enter English'
    },
    unnormal : {// Verify whether contain spaces and illegal characters
        validator : function(value) {
            return /.+/i.test(value);
        },
        message : 'The input value cannot be empty and other illegal character'
    },
    username : {// Verify that the user name
        validator : function(value) {
            return /^[a-zA-Z][a-zA-Z0-9_]{5,15}$/i.test(value);
        },
        message : 'The user name is not valid (letter, allowing 6-16 bytes, allow alphanumeric underline)'
    },
    faxno : {// To validate the fax
        validator : function(value) {
//            return /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/i.test(value);
            return /^((\(\d{2,3}\))|(\d{3}\-))?(\(0\d{2,3}\)|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/i.test(value);
        },
        message : 'The fax number is incorrect'
    },
    zip : {// Validate the postal code
        validator : function(value) {
            return /^[1-9]\d{5}$/i.test(value);
        },
        message : 'The postal code is not in the correct format'
    },
    ip : {// Verify that the IP address
        validator : function(value) {
            return /d+.d+.d+.d+/i.test(value);
        },
        message : 'The IP address is not in the correct format'
    },
    name : {// Verify the name, can be Chinese or English
            validator : function(value) {
                return /^[\Α-\￥]+$/i.test(value)|/^\w+[\w\s]+\w+$/i.test(value);
            },
            message : 'Please input your name'
    },
    date : {// Verify date
        validator : function(value) {
         //Format yyyy-MM-dd or yyyy-M-d
            return /^(?:(?!0000)[0-9]{4}([-]?)(?:(?:0?[1-9]|1[0-2])\1(?:0?[1-9]|1[0-9]|2[0-8])|(?:0?[13-9]|1[0-2])\1(?:29|30)|(?:0?[13578]|1[02])\1(?:31))|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)([-]?)0?2\2(?:29))$/i.test(value);
        },
        message : 'Please enter the appropriate date format'
    },
    msn:{
        validator : function(value){
        return /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    },
    message : 'Please enter a valid MSN account (for example: abc@hotnail(msn/live).com)'
    },
    same:{
        validator : function(value, param){
            if($("#"+param[0]).val() != "" && value != ""){
                return $("#"+param[0]).val() == value;
            }else{
                return true;
            }
        },
        message : 'The two passwords you entered do not match！'   
    }
});
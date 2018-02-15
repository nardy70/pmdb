/*$.fn.datebox.defaults.parser = function(s){
	var t = Date.parse(s);
	if (!isNaN(t)){
		return new Date(t);
	} else {
		return new Date();
	}
};

$.fn.datebox.defaults.parser = function(s){
	if (!s) return new Date();
	var ss = (s.split('-'));
	var y = parseInt(ss[0],10);
	var m = parseInt(ss[1],10);
	var d = parseInt(ss[2],10);
	if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
		return new Date(y,m-1,d);
	} else {
		return new Date();
	}
};*/

$.extend($.fn.validatebox.defaults.rules, {
	phone : {// Phone number validation
		validator : function(value) {
			return /^[0-9]\d{7,10}$/i.test(value);
		},
		message : 'Ammessi solo numeri (da 8 a 11)'
	},
	mobile : {// Verification of mobile phone number
		validator : function(value) {
			return /^[0-9]\d{8,10}$/i.test(value);
		},
		message : 'Ammessi solo numeri (da 9 a 11)'
	},
	zip : {// Validate the postal code
		validator : function(value) {
			return /^[0-9]\d{4}$/i.test(value);
		},
		message : 'Inserire 5 numeri'
	},
	prov : {// Validate the postal code
		validator : function(value) {
			return /^[A-Za-z]{2}$/i.test(value);
		},
		message : 'Solo 2 lettere'
	}
});

$.fn.calendar.defaults.firstDay = 1;
$.fn.calendar.defaults.weeks = ['D', 'L', 'M', 'M', 'G', 'V', 'S'];
$.fn.calendar.defaults.months = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'];

$.fn.datebox.defaults.formatter = function(date) {
	if (date) {
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
	} else {
		return null;
	}
};

$.fn.datebox.defaults.parser = function(s) {
	var t = Date.parse(s);
	if (!isNaN(t)) {
		return new Date(t);
	} else {
		return new Date();
	}
};

$.messager.defaults = {
	ok : 'OK',
	cancel : 'Cancella'
};

function openMarche() {
	$('#dlg_marche').dialog('open').dialog('setTitle', 'GESTISCI MARCHE');
}

function ricaricaTot2(pid){
	$.post("data/magazzino/oraInMagaz.cfm", {id:pid}, function(data){
    	var nn = "<span style='color:blue; font-size:25px; padding-left:1em'>" + data + "</span>";
    	$('#orainmagazzino').panel('setTitle','ORA IN MAGAZZINO: ' + nn);
    });
}
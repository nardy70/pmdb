function statpers() {
    var datainizio = $('input[name=datainizio]').val();
    var datafine = $('input[name=datafine]').val();
    
    $.ajax({
        method: 'post',
    	url : 'data/statistiche/readStatPers.cfm',
        data : { datainizio : datainizio, datafine: datafine },
    	dataType : "html",
        success: function(result) {
            $('#dlg_statpers').html(result);
            $('#dlg_statpers').dialog('open').dialog('setTitle', 'STATISTICHE PERSONALIZZATE');
        }
    });
    
    //$('#form_statpers').form('submit',{
    //    url: 'data/statistiche/readStatPers.cfm',
    //    onSubmit: function(){
    //      return $(this).form('validate');
    //    },
    //    success: function(result){
    //        console.log(result);
    //        $('#div_statpers').html(result);
    //        $('#dlg_statpers').dialog('open').dialog('setTitle', 'STATISTICHE PERSONALIZZATE');
    //    }
    //});
    
    //$.post(
    //    'data/statistiche/readStatPers.cfm',
    //    
    //    { datai: datainizio, dataf: datafine },
    //    
    //    function(d) {
    //        
    //        $('#grid_statpers').datagrid({
    //            data : [
    //                d
    //            ]
    //        });
    //    
    //        $('#dlg_statpers').dialog('open').dialog('setTitle', 'STATISTICHE PERSONALIZZATE');
    //        console.log(d);
    //    }
    //    
    //);

}

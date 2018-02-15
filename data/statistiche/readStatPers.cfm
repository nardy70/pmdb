<cfif datafine GTE datainizio>
    
    <cftry>
    
        <cfquery name ="resultset" datasource="pelomatto">
            call pelomatto.read_stat_pers_proc('#datainizio#', '#datafine#');
        </cfquery>
        
        <cfoutput query="resultset">
        
            <style type="text/css">
                ##table_statpers {border-collapse: collapse;width: 100%;}
                ##table_statpers, th, td {border: 1px solid lightgrey;text-align: center;}
                th {background-color: ##F4F4F4;font-weight: lighter;padding: 5px;}
                td {padding: 5px;}
        
            </style>
        
            <table id="table_statpers">
                <thead>
                    <tr>
                        <th field="data_inizio">Data Inizio</th>
                        <th field="data_fine">Data Fine</th>
                        <th field="passaggi">Passaggi</th>
                        <th field="gg_lavoro">gg Lavoro</th>
                        <th field="incasso_servizi">Incasso Servizi</th>
                        <th field="incasso_prodotti">Incasso Prodotti</th>
                        <th field="incasso_totale">Incasso Totale</th>
                        <th field="fiche_servizi">Fiche Servizi</th>
                        <th field="fiche_totale">Fiche Totale</th>
                        <th field="percentuale_vendite">Percentuale Vendite</th>
                    </tr>                          
                </thead>
                
                <tbody>                  
                    <tr>
                        <td>#DateFormat(data_inizio, "dd-mm-yyyy")#</td>
                        <td>#DateFormat(data_fine, "dd-mm-yyyy")#</td>
                        <td>#passaggi#</td>
                        <td>#gg_lavoro#</td>
                        <td>#LSCurrencyFormat(incasso_servizi, "local")#</td>
                        <td>#LSCurrencyFormat(incasso_prodotti, "local")#</td>
                        <td>#LSCurrencyFormat(incasso_totale, "local")#</td>
                        <td>#LSCurrencyFormat(fiche_servizi, "local")#</td>
                        <td>#LSCurrencyFormat(fiche_totale, "local")#</td>
                        <td>#LSNumberFormat(percentuale_vendite, '__._')# &##37;</td>
                    </tr>
                </tbody>                           
            </table> 
        </cfoutput>
    
        <cfcatch type="database">
            <cfoutput><h3 style="color: red;text-align: center;">ATTENZIONE! - Le date inserite non sono corrette - RIPROVA</h3></cfoutput>
        </cfcatch>
    
    </cftry>
  
  <cfelse>
    <h3 style="color: red;text-align: center;">ATTENZIONE! - Il periodo richiesto non e' corretto - RIPROVA</h3>

</cfif>
    
    
    



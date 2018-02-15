<cfdocument format="PDF" fontEmbed="true" unit="cm" localUrl="true" saveAsName="Inventario#DateFormat(URL.data_selez, 'yyyymmdd')#"margintop="0.2" marginbottom="0.5">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
    <title>Inventario del <cfoutput>#DateFormat(URL.data_selez, 'dd/mm/yyyy')#</cfoutput></title>

    <style type="text/css">
        body {
            font-family: verdana, arial, sans-serif ;
            font-size: 10px ;
            }
        th, td {
            padding: 4px 4px 4px 4px ;
            text-align: center ;
            width: 120px ;
            }
        th {
            border-bottom: 2px solid #333333 ;
            }
        td {
            border-bottom: 1px dotted #999999 ;
            }
        tfoot td {
            border-bottom-width: 0px ;
            border-top: 2px solid #333333 ;
            padding-top: 20px ;
            }
        .tdclass {
            text-align: left;
            width: 220px ;
            margin-left: 2em ;
        }
        .marcaclass {
            font-weight: bold ;
            font-size: 12px ;
            text-align: left ;
        }
    </style>

    <cfset setLocale("Italian (Standard)")>

    <cfquery name ="resultset" datasource="pelomatto">
        select min(data) as data, idprodotto as id, marca, nome as nome, sum(ven_prel) as ven_prel, sum(qty) as qty,
          prezzofattura as prezzofattura, sum(qty)*prezzofattura as tot
            from inventarioxdata
            where data <= '#URL.data_selez#'
            group by id having sum(qty)>0
            order by marca, nome;
    </cfquery>

    <cfquery name="totale" datasource="pelomatto">
        select sum(totaleinv) as totale from 
            (select prezzofattura*sum(qty) as totaleinv
            from inventarioxdata
            where data <= '#URL.data_selez#'
            group by idprodotto) totinv;
    </cfquery>

    <cfquery name="totalemarca" datasource="pelomatto">
        select marca, sum(totalemarca) as tot, count(marca) as counter from
            (select marca, sum(prezzofattura*qty) as totalemarca
            from inventarioxdata
            where data <= '#URL.data_selez#'
            group by idprodotto having sum(prezzofattura*qty)>0) q1
            group by marca;
    </cfquery>

    <cfoutput query="totale">
        <cfset tot = "#totale#">
    </cfoutput>
</head>
<body>

    <cfoutput>

        <cfdocumentitem type= "header">
            <p style="text-align: right; font-size: 12px;">Inventario al #DateFormat(URL.data_selez, 'dd/mm/yyyy')#</p>
        </cfdocumentitem>

        <h1>
            Totale: #LSCurrencyFormat(tot, "local")# <span style="font-size:12px;">( n. #resultset.recordcount# Prodotti )</span>
        </h1>

        <p>
            Pelomatto S.n.c. di Gerion Mariangela e Didone' Sabina - via Trieste,16 33052 Gonars (UD) - Tel. n. 0432 906229
        </p>


        <table cellspacing="0">
            <cfoutput query="resultset" group="marca">
                <tr>
                    <td colspan="4" class="marcaclass">
                        <br>
                        - #resultset.marca#:
                        <cfloop query="totalemarca">
                            <cfif #totalemarca.counter# gt 1>
                                    <cfset art = "articoli">
                                <cfelse>
                                    <cfset art = "articolo">
                            </cfif>
                            <cfif #resultset.marca# eq #totalemarca.marca#>
                                <cfoutput group="marca">#LSCurrencyFormat(totalemarca.tot, "local")# (#totalemarca.counter# #art#)</cfoutput>
                            </cfif>
                        </cfloop>
                    </td>
                </tr>

                <thead>
                    <tr>
                        <th field="nome" class="tdclass">Prodotto</th>
                        <th field="qty">In Magazzino</th>
                        <th field="prezzofattura">Prezzo Fattura</th>
                        <th field="tot">Totale</th>
                    </tr> 
                </thead>

                <tbody>
                    <cfoutput>
                        <tr>
                            <td class="tdclass">#nome#</td>
                            <td>#qty#</td>
                            <td>#LSCurrencyFormat(prezzofattura, "local")#</td>
                            <td>#LSCurrencyFormat(tot, "local")#</td>
                        </tr>
                    </cfoutput>
                </tbody>
            </cfoutput>
        </table>

        <cfdocumentitem type="footer"> 
            <p style="text-align: right; font-size: 10px;">Pagina #cfdocument.currentpagenumber# di #cfdocument.totalpagecount#
        </cfdocumentitem>

    </cfoutput>

</body>
</html>
</cfdocument>

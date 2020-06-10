
function fetch() {
    $.get('https://api.covid19api.com/summary', function(data){

    // for world covid cases
    var wrow = $("<tr>");

    irow.append($('<td>'+ data.Global.TotalConfirmed +' </td>'))
       .append($('<td>'+ data.Global.TotalRecovered +' </td>'))
       .append($('<td>'+ data.Global.TotalDeaths +' </td>'))
       .append($('<td>'+ data.Global.NewConfirmed +' </td>'))
       .append($('<td>'+ data.Global.NewRecovered +' </td>'))
       .append($('<td>'+ data.Global.NewDeaths +' </td>'))
   
    $("#world_tbval").append(wrow);


        
        for(let i=0; i < data.Countries.length; i++)
        {
            if(data.Countries[i].Country === "India") {

                var irow = $("<tr>");

            irow.append($('<td>'+ data.Countries[i].TotalConfirmed +' </td>'))
               .append($('<td>'+ data.Countries[i].TotalRecovered +' </td>'))
               .append($('<td>'+ data.Countries[i].TotalDeaths +' </td>'))
               .append($('<td>'+ data.Countries[i].NewConfirmed +' </td>'))
               .append($('<td>'+ data.Countries[i].NewRecovered +' </td>'))
               .append($('<td>'+ data.Countries[i].NewDeaths +' </td>'))
           
            $("#india_tbval").append(irow);

            }

            var row = $("<tr>");

            row.append($('<th class="country">'+ data.Countries[i].Country +' </th>'))
               .append($('<td class="totalConfirmed">'+ data.Countries[i].TotalConfirmed +' </td>'))
               .append($('<td class="TotalRecovered">'+ data.Countries[i].TotalRecovered +' </td>'))
               .append($('<td class="TotalDeath">'+ data.Countries[i].TotalDeaths +' </td>'))
               .append($('<td class="NewConfirmed">'+ data.Countries[i].NewConfirmed +' </td>'))
               .append($('<td class="NewRecovered">'+ data.Countries[i].NewRecovered +' </td>'))
               .append($('<td class="NewDeaths">'+ data.Countries[i].NewDeaths +' </td>'))
           
            $("#tbval").append(row);
        }
    });
}
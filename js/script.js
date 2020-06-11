
function fetch() {
    $.get('https://api.covid19api.com/summary', function(data){

    // for world covid cases

    $('.world-TotalConfirmed').text(data.Global.TotalConfirmed);
    $('.world-TotalRecovered').text(data.Global.TotalRecovered);
                $('.world-TotalDeaths').text(data.Global.TotalDeaths);
                $('.world-NewConfirmed').text(data.Global.NewConfirmed);
                $('.world-NewRecovered').text(data.Global.NewRecovered);
                $('.world-NewDeaths').text(data.Global.NewDeaths);

    // var wrow = $("<tr>");

    // wrow.append($('<td>'+ data.Global.TotalConfirmed +' </td>'))
    //    .append($('<td>'+ data.Global.TotalRecovered +' </td>'))
    //    .append($('<td>'+ data.Global.TotalDeaths +' </td>'))
    //    .append($('<td>'+ data.Global.NewConfirmed +' </td>'))
    //    .append($('<td>'+ data.Global.NewRecovered +' </td>'))
    //    .append($('<td>'+ data.Global.NewDeaths +' </td>'))
   
    // $("#world_tbval").append(wrow);


        
        for(let i=0; i < data.Countries.length; i++)
        {
            if(data.Countries[i].Country === "India") {

                $('.india-TotalConfirmed').text(data.Countries[i].TotalConfirmed);
                $('.india-TotalRecovered').text(data.Countries[i].TotalRecovered);
                $('.india-TotalDeaths').text(data.Countries[i].TotalDeaths);
                $('.india-NewConfirmed').text(data.Countries[i].NewConfirmed);
                $('.india-NewRecovered').text(data.Countries[i].NewRecovered);
                $('.india-NewDeaths').text(data.Countries[i].NewDeaths);

            //     var irow = $("<tr>");

            // irow.append($('<td>'+ data.Countries[i].TotalConfirmed +' </td>'))
            //    .append($('<td>'+ data.Countries[i].TotalRecovered +' </td>'))
            //    .append($('<td>'+ data.Countries[i].TotalDeaths +' </td>'))
            //    .append($('<td>'+ data.Countries[i].NewConfirmed +' </td>'))
            //    .append($('<td>'+ data.Countries[i].NewRecovered +' </td>'))
            //    .append($('<td>'+ data.Countries[i].NewDeaths +' </td>'))
           
            // $("#india_tbval").append(irow);

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


$('#search-button').click(displayCountry);
// Search by Enter Key
$('input').on("keyup", function(event){
    if(event.keyCode == 13 && $('input').val() != "") {
        displayCountry();
    }
});

function displayCountry(){
    var countryName = $('input').val();

    if(countryName == "") {
        alert("Please Enter Country Name !");
    }
    countryName = countryName[0].toUpperCase() + countryName.slice(1);

    $.get('https://api.covid19api.com/summary', function(data){
        let i = 0;
        for(; i < data.Countries.length; i++)
        {
            if(data.Countries[i].Country == countryName) {

                console.log(countryName);
                $('#serch-contry').css("display","block");
                $('#contry-name').text(data.Countries[i].Country);

                $('.search-TotalConfirmed').text(data.Countries[i].TotalConfirmed);
                $('.search-TotalRecovered').text(data.Countries[i].TotalRecovered);
                $('.search-TotalDeaths').text(data.Countries[i].TotalDeaths);
                $('.search-NewConfirmed').text(data.Countries[i].NewConfirmed);
                $('.search-NewRecovered').text(data.Countries[i].NewRecovered);
                $('.search-NewDeaths').text(data.Countries[i].NewDeaths);
                break;
            }
           
        }

        if(i == data.Countries.length) {
            let display = countryName + " Country not found !"
            alert(display);
        }
        
    });
    
};
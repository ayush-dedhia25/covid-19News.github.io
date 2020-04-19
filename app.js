$(document).ready(function () {
 
  function fetchCovidNews(state) {
	try {
	  fetch("https://covid19india.p.rapidapi.com/getStateData/"+state, {
		"method": "GET",
		"headers": {
		  "x-rapidapi-host": "covid19india.p.rapidapi.com",
		  "x-rapidapi-key": "0e079a5592msh105554e334319e4p18192cjsnad8993ed3dec"
		 }
		})
		.then(function(response) {
		  return response.json();
		})
		.then(function (data) {
			var { id, active, value, name, confirmed, recovered, deaths, isoCode } = data.response;
			$("#cases").html(active);
			$("#confirmed").html(confirmed);
			$("#recovered").html(recovered);
			$("#deaths").html(deaths);
		});
		}
		catch(err) {
		  throw err;
    }
  }
  
  $("#selectState").change(function () {
    var state = $(this).val();
    var err = "Select State";
    
    if (state == "select") {
      alert("Please select the state!");
      $("#cases").html(err);
      $("#confirmed").html(err);
      $("#recovered").html(err);
      $("#deaths").html(err);
    }
    
    fetchCovidNews(state);
  });
  
  $("#more-info").click(function () {
    window.location.replace("./views/news.html");
  });
	
});

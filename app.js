$(document).ready(function () {
  
  function fetchCovidNews() {
	try {
	  fetch("https://covid19india.p.rapidapi.com/getStateData/MH", {
		"method": "GET",
		"headers": {
		  "x-rapidapi-host": "covid19india.p.rapidapi.com",
		  "x-rapidapi-key": "0e079a5592msh105554e334319e4p18192cjsnad8993ed3dec"
		 }
		})
		.then(function(response) {
		  return response.json();
		})
		.then(function(data) {
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
  fetchCovidNews();
  
  $.ajax({
    type: 'GET',
    url: './utils.txt',
    success: function(data) {
      var api = data.split('api = ')[1];
      alert(api);
    }
  });
	
});

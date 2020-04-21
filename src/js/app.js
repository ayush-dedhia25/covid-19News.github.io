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
    
    if (state !== "select") {
      var progress = "Loading...";
      
      $("#cases").html(progress);
      $("#confirmed").html(progress);
      $("#recovered").html(progress);
      $("#deaths").html(progress);
      
       fetchCovidNews(state);
    }
  });
  
  $("#more-info").click(function () {
    window.location.replace("./views/news.html");
  });
  
  $(".s-icons a").click(function () {
    var net = $(this).attr("value");
    
    switch(net) {
      case "facebook":
        alert("isAvailable: No \nMedia-Type: Facebook \nError-Code: 500");
        break;
      case "instagram":
        alert("isAvailable: No\nMedia-Type: Instagram \nError-Code: 500");
        break;
      case "twitter":
        alert("isAvailable: No\nMedia-Type: Twitter \nError-Code: 500");
        break;
      case "google-plus":
        alert("isAvailable: No\nMedia-Type: Google-Plus \nError-Code: 500");
        break;
      default:
        alert("isAvailable: Yes\nMedia-Type: Youtube IN. \nError-Code: 200 \n\nClick <Ok> to open youtube.in");
        break;
    }
  });
	
});

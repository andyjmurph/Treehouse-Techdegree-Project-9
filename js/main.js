//Global variables
$navBtn = $(".btn-nav");
$profile = $(".profile-info");
$traffic = $("#traffic-chart");
$dailyTraffic = $("#daily-traffic-chart");
$mobile = $("#mobile-chart");
let today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1;
const yyyy = today.getFullYear();
let activities = ["commented on Your App's SEO tips", "Liked Facebook's changes for 2016", "Commented on Facebook's changes for 2016", "posted Your App's SEO tips"];
today = dd+'/'+mm+'/'+yyyy;

//Show/hide responsive navigation on mobile devices.
$navBtn.on("click", function() {
  if ($profile.hasClass("open")) {
    $profile.slideUp();

  } else {
    $profile.slideDown();
  }
  $profile.toggleClass("open");
});

//create the traffic line chart
$trafficChart = new Chart ($traffic, {
  type: 'line',
  data: {
    labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "2-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
    yLabels: ["500", "1000", "1500", "2000", "2500"],
    datasets: [
        {
          label: "Traffic",
          fill: true,
          lineTension: 0,
          backgroundColor: "rgba(126, 138, 162, .4)",
          borderColor: "rgba(126, 138, 162, 1)",
          pointBorderColor: "rgba(126, 138, 162, 1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 2,
          pointHoverRadius: 4,
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(126, 138, 162, 1)",
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: [750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
      }
    ]
  },
  options: {
    scales: {
      yAxes: [{
        type: 'linear',
          ticks: {
            max: 2500,
            min: 500,
            stepSize: 500
          }
      }]
    },
    legend: {
      display: false
    }
  }
})

//create the daily-traffic-chart line chart
$dailyTrafficChart = new Chart ($dailyTraffic, {
  type: 'bar',
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    yLabels: ["50", "100", "150", "200", "250"],
    datasets: [
        {
          label: "Daily Traffic",
          fill: true,
          lineTension: 0,
          backgroundColor: "#263248",
          data: [75, 100, 175, 125, 225, 200, 100],
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        type: 'linear',
          ticks: {
            max: 250,
            min: 50,
            stepSize: 50
          }
      }]
    }
  }
})


//Create the mobile chart
$mobileChart = new Chart ($mobile, {
  type: 'doughnut',
  data: {
    labels: [
        "Phones",
        "Tablets",
        "Desktop"
    ],
    datasets: [
        {
            data: [50, 75, 400],
            backgroundColor: [
                "#263248",
                "#FF7B47",
                "#7ad38b"
            ],
            hoverBackgroundColor: [
                "#121823",
                "#ba5832",
                "#579662"
            ],
            hoverBorderColor: "#fff"
        }]
      },
    options: {
      legend: {
        position: "right"
      },
      segmentShowStroke: false
    }
})

// Generate random user for new-members

$.ajax({
  url: 'https://randomuser.me/api?results=4',
  dataType: 'json',
  success: function(data) {
    $.each(data.results, function(index, user){
      // Create the list item
      let userImg = user.picture.thumbnail;
      let userName = user.name.first + " " + user.name.last;
      let userEmail = user.email;
      let newUser = "<li>" + "<img src=\"" + userImg + "\" alt=\"Photograph of the user\">" + "<div  class=\"user-info\">" + "<p>" + userName + "</p>" + "<a href=\"" + userEmail + "\">" + userEmail + "</a>" + "</div>" + "<p>" + today + "</p>" + "</li>";
      $(".new-members").append(newUser);
      console.log(newUser);
    });
  }
});


$.ajax({
  url: "https://randomuser.me/api?results=4",
  dataType: "json",
  success: function(data) {
    $.each(data.results, function(index, user) {
      let userImg = user.picture.thumbnail;
      let userName = user.name.first + " " + user.name.last;
      let hours = Math.floor(Math.random() * 4) + 1;
      let activityString = userName + " " + activities[index];
      let memberActivity = "<li>" + "<img src=\"" + userImg + "\" alt=\"Photograph of the user\">" + "<div class=\"activity-details\">" + "<p>" + activityString + "</p>" + "<p class=\"time\">" + hours + " hours ago" + "</p>" + "</div>" + "</ul>";
      $(".member-activity").append(memberActivity);
    })
  }
})

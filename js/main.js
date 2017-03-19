//Global variables
$navBtn = $(".btn-nav");
$profile = $(".profile-info");
$traffic = $("#traffic-chart");
$dailyTraffic = $("#daily-traffic-chart");
$mobile = $("#mobile-chart");


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

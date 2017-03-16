//Global variables
$navBtn = $(".btn-nav");
$profile = $(".profile-info");
$chart = $("#traffic-chart");


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
$traffic = new Chart ($chart, {
  type: 'line',
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
        {
          label: "My First dataset",
          fill: false,
          lineTension: 0.1,
          backgroundColor: "rgba(75,192,192,0.4)",
          borderColor: "rgba(75,192,192,1)",
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: "rgba(75,192,192,1)",
          pointBackgroundColor: "#fff",
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(75,192,192,1)",
          pointHoverBorderColor: "rgba(220,220,220,1)",
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40],
          spanGaps: false,
      }
    ]
  }
});

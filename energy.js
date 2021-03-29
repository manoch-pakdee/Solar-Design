
async function ma(azimuth1) {
  var tit = Number(document.getElementById("tit").value);
  var azimuth = Number(document.querySelector("#azimuth").value);
console.log(azimuth);
  var num1 = Number(document.querySelector("#num1").value);
  var amphur = Number(document.getElementById("amphur").value);
  var PR = String(document.getElementById("postcode").value);
  
  console.log(PR);
  console.log(amphur);
  console.log(tit);
  console.log(azimuth1);
  console.log(num1);
  var tmp = 0;
  tmp += tit + azimuth + amphur;
  console.log(tmp);
  // window.location.href = "anw.html";
  await fetch('data.json')
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {
      console.log(data);
      appendData(data, amphur);
    })
    .catch(function (err) {
      console.log('error:' + err)
    });

  await fetch('data1.json')
    .then(function (response) {
      return response.json();

    })
    .then(function (data) {
      console.log(data);
      appendData1(data, tmp, num1, PR);
    })
    .catch(function (err) {
      console.log('error:' + err)
    });
}




function appendData(data, num) {
  console.log(num);
  var mainConttainer = document.getElementById("showdata");
  var mytable = document.getElementById("table-data");
  console.log(mytable);
  for (var i = 0; i < data.length; i++) {
    if (data[i].ID == num) {
      let template = `
            <tr>
                <td>${data[i].January}</td>
                <td>${data[i].February}</td>
                <td>${data[i].March}</td>
                <td>${data[i].April}</td>
                <td>${data[i].May}</td>
                <td>${data[i].June}</td>
                <td>${data[i].July}</td>
                <td>${data[i].August}</td>
                <td>${data[i].September}</td>
                <td>${data[i].October}</td>
                <td>${data[i].November}</td>
                <td>${data[i].December}</td>
                <td>${data[i].Average}</td>
            </tr>
            `

      mytable.innerHTML = template;
    }
  }
}
function appendData1(data, num, pw, PR) {
  console.log(num);
  var mytable1 = document.getElementById("table-data1");
  var mytable2 = document.getElementById("table-data2");
  for (var i = 0; i < data.length; i++) {
    if (data[i].ID == num) {
      var template1 = `
            <tr>
                <td>${data[i].January}</td>
                <td>${data[i].February}</td>
                <td>${data[i].March}</td>
                <td>${data[i].April}</td>
                <td>${data[i].May}</td>
                <td>${data[i].June}</td>
                <td>${data[i].July}</td>
                <td>${data[i].August}</td>
                <td>${data[i].September}</td>
                <td>${data[i].October}</td>
                <td>${data[i].November}</td>
                <td>${data[i].December}</td>
                <td>${data[i].Total}</td>
            </tr>
            `;
      var template2 = `
            <tr>
                <td>${(data[i].January * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].February * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].March * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].April * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].May * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].June * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].July * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].August * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].September * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].October * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].November * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].December * pw * (PR / 100)).toFixed(1)}</td>
                <td>${(data[i].Total * pw * (PR / 100)).toFixed(1)}</td>
            </tr>
            `;
      let myChart = document.getElementById('myChart').getContext('2d');
    
      var energyofyear = (data[i].Total * pw * (PR / 100)).toFixed(1);
      saveMe(energyofyear);
      // Global Options
      Chart.defaults.global.defaultFontFamily = 'Lato';
      Chart.defaults.global.defaultFontSize = 18;
      Chart.defaults.global.defaultFontColor = '#777';

      let massPopChart = new Chart(myChart, {
        type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data: {

          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'],
          datasets: [{
            label: 'kwh/month',
            data: [

              (data[i].January * pw * (PR / 100)).toFixed(1),
              (data[i].February * pw * (PR / 100)).toFixed(1),
              (data[i].March * pw * (PR / 100)).toFixed(1),
              (data[i].April * pw * (PR / 100)).toFixed(1),
              (data[i].May * pw * (PR / 100)).toFixed(1),
              (data[i].June * pw * (PR / 100)).toFixed(1),
              (data[i].July * pw * (PR / 100)).toFixed(1),
              (data[i].August * pw * (PR / 100)).toFixed(1),
              (data[i].September * pw * (PR / 100)).toFixed(1),
              (data[i].October * pw * (PR / 100)).toFixed(1),
              (data[i].November * pw * (PR / 100)).toFixed(1),
              (data[i].December * pw * (PR / 100)).toFixed(1)
            ],
            backgroundColor: [
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',
              'rgb(73, 73, 75)',


            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
          }]
        },
        options: {
          title: {
            display: true,
            text: 'AC ENERGY',
            fontSize: 25
          },
          legend: {
            display: true,
            position: 'right',
            labels: {
              fontColor: '#000'
            }
          },
          layout: {
            padding: {
              left: 50,
              right: 0,
              bottom: 0,
              top: 0
            }
          },
          tooltips: {
            enabled: true
          }
        }
      });

      mytable1.innerHTML = template1;
      mytable2.innerHTML = template2;
      
    }
  }

}
function saveMe(energyofyear) {
  localStorage.setItem('energyofyear', energyofyear);
  console.log(localStorage.getItem("energyofyear"));
}

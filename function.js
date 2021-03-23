var total = 0;
var useTotal;

function calcArea() {
    //microwave
    let wide = Number(document.querySelector("#wide").value);
    let long = Number(document.querySelector("#long").value);
    let wp = Number(document.querySelector("#wp").value);

    total = [((((wide * long) / 2).toFixed(0)) * wp) / 1000];

    document.getElementById("sum").value = total;

    
    var area = [((((wide * long) / 2).toFixed(0)) * wp) / 1000];
    saveMe(area);
    //localStorage

    
}
function saveMe(area) {
    localStorage.setItem('area', area);
    console.log(localStorage.getItem("area"));
}

// function changeTotal() {
//     console.log(total);
//     document.getElementById("testcal").value = document.getElementById("sum").value;
//     console.log("value of testcal is " + document.getElementById("testcal").value);
// }

// fucntion showTotal() {
//     console.log(total);
//     document.getElementById("testcal2").value = total;
//     console.log("value of testcal2 is " + document.getElementById("testcal2").value);
// }

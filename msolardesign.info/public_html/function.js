function calcArea() {
    //microwave
    let wide = Number(document.querySelector("#wide").value);
    let long = Number(document.querySelector("#long").value);
    let wp = Number(document.querySelector("#wp").value);

    total = [((((wide * long) / 2).toFixed(0)) * wp) / 1000];

    document.getElementById("sum").value = total;

    
    var area = [((((wide * long) / 2).toFixed(0)) * wp) / 1000];
    saveMe(area);
    
}
function saveMe(area) {
    localStorage.setItem('area', area);
    console.log(localStorage.getItem("area"));
}


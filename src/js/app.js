function openNav() {
    document.getElementById("search").style.width = "280px";
    document.getElementById("map").style.marginLeft = "280px";
    document.getElementById("map").style.width = "calc(100% - 300px)";
}

function closeNav() {
    document.getElementById("search").style.width = "0";
    document.getElementById("map").style.marginLeft = "20px";
    document.getElementById("map").style.width = "calc(100% - 40px)";
}

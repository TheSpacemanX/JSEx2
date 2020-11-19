var addBtn = function(){
    var btn = document.createElement("button");
    btn.innerHTML = "DO NOT CLICK";
    
    document.getElementById("body").append(btn);
    
    btn.addEventListener("click", changeColor);
}
    
var changeColor = function () {
    $("#div").attr("style", "background-color:   rgb(163, 36, 68)");
    $("#span").html("HI");
    $("#div").html("<h1>YOINK</h1>");
};
    
document.addEventListener("DOMContentLoaded", addBtn);
var addBtn = function(){
    $("#body").append(
        $("<button id=\"btn\">DO NOT CLICK</button>")
            .on("click", function () {
                $("#div").attr("style", "background-color: rgb(163, 36, 68)");
                $("#span").html("HI");
                $("#div").html("<h1>YOINK</h1>");
                $("#body").append(btn);
            }
        )
    ); 
}
    
document.addEventListener("DOMContentLoaded", addBtn);
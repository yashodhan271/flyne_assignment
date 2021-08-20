

function imagefun1() {
    var Image_Id = document.getElementById('imaclick');
            if (Image_Id.src.match("Images/image.png")) {
                Image_Id.src = "Images/1st.jpg";
            }
           else if
             (Image_Id.src.match("Images/3rd.jpg")){
                Image_Id.src = "Images/1st.jpg";
             }
           }
          
        function imagefun2() {
            var Image_Id = document.getElementById('imaclick');
            if (Image_Id.src.match("Images/hero.png")) {
                Image_Id.src = "Images/image.png";
            }
           else 
             (Image_Id.src.match("Images/3rd.jpg"))
             {
                Image_Id.src = "Images/image.png";
             }
           
        } 

        function imagefun3() {
            var Image_Id = document.getElementById('imaclick');
            if (Image_Id.src.match("Images/hero.png")) {
                Image_Id.src = "Images/3rd.jpg";
            }
           else if
             (Image_Id.src.match("Images/image.png")){
                Image_Id.src = "Images/3rd.jpg";
             }
           
        }


function first(){
    document.getElementById("wrbi").style.color="white";
    document.getElementById("wrbip").style.color="white";
    document.getElementById("bsq").style.color="black";
    document.getElementById("bsq2").style.color="black";
    document.getElementById("gk1").style.color="black";
    document.getElementById("gk2").style.color="black";
}

function third(){
    document.getElementById("gk1").style.color="white";
    document.getElementById("gk2").style.color="white";
    document.getElementById("bsq").style.color="black";
    document.getElementById("bsq2").style.color="black";
    document.getElementById("wrbi").style.color="black";
    document.getElementById("wrbip").style.color="black";
    
}


function second(){
    document.getElementById("wrbi").style.color="black";
    document.getElementById("wrbip").style.color="black";
    document.getElementById("bsq").style.color="white";
    document.getElementById("bsq2").style.color="white";
    document.getElementById("gk1").style.color="black";
    document.getElementById("gk2").style.color="black";
    
}
	


$(document).ready(function(){
  $("#toggle-button1").addClass("active");
  $(".tri-state-toggle-button").click(function(){
    $(".tri-state-toggle-button").removeClass("active");
    var id = $(this).attr('id');
    $("#" + id).addClass("active");
  });
});

$(document).ready(function(){
  $("#output").addClass("active");
  $(".thead").click(function(){
    $(".thead ").removeClass("active");
    var id = $(this).attr('id');
    $("#" + id).addClass("active");
  });
});
function foo(){
    var x = document.getElementById("output");
    if(x.style.color== "black") {
        x.style.color= "white";

    } else {
        x.style.color="black";
    }
}


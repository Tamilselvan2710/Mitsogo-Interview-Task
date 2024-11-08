//navbar scroll function
let nav = document.querySelector("nav");
let image = document.querySelector(".navbar-menu>.nav-content>.logo>.site-logo>img");
    window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("sticky");
        image.classList.remove("navbar-scroll-img1");
    } else {
        nav.classList.remove("sticky");
        image.classList.add("navbar-scroll-img1");
    }
}

function openPage(pageName,elmnt,color,fontColor) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
      tablinks[i].style.color = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
    elmnt.style.color = fontColor;
}
  
// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//slider scroll Script starts
$(document).ready(function(){
  $(".main-card-content .card-content").each(function(e) {
      if (e != 0)
          $(this).hide();
  });

  $("#next").click(function(){
      if ($(".main-card-content .card-content:visible").next().length != 0)
          $(".main-card-content .card-content:visible").next().show().prev().hide();
      else {
          $(".main-card-content .card-content:visible").hide();
          $(".main-card-content .card-content:first").show();
      }
      return false;
  });

  $("#prev").click(function(){
      if ($(".main-card-content .card-content:visible").prev().length != 0)
          $(".main-card-content .card-content:visible").prev().show().next().hide();
      else {
          $(".main-card-content .card-content:visible").hide();
          $(".main-card-content .card-content:last").show();
      }
      return false;
  });
});

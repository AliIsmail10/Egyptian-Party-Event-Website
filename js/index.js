/// <reference types="../@types/jquery"/>
    // Smooth scrolling for nav links
    $('#Home a').on('click', function (e) {
        let target=$(e.target).attr("href")
      $('html, body').animate({
        scrollTop: $(target).offset().top
      }, 1000);
               
        });  

  document.querySelector(".open").addEventListener("click", function(){
    document.getElementById("leftMenu").style.width = "250px";
    document.getElementById("home-content").style.marginLeft = "250px";
  })
  document.querySelector(".close").addEventListener("click",function(){
    document.getElementById("leftMenu").style.width = "0px";
    document.getElementById("home-content").style.marginLeft = "0px";

  });
    $('#sliderDown .toggle').on("click",function(){
        $('.inner').not($(this).next()).slideUp("slow");
        $(this).next().slideToggle("slow");
    });
    
    let ourCountDown =setInterval(function(){
     let now = new Date();
     let target = new Date(2020,10,25,12);
     let distance =   target/1000 - now/1000;
     let days = Math.floor( distance / (24 * 60 * 60));
     let hours = Math.floor((distance - (days * (24*60*60))) / 3600);
     let mins = Math.floor((distance - (days * (24*60*60)) - (hours * 3600 )) / 60);
     let secs = Math.floor((distance - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))
  
     $('.days').text(`${days} D`);
     $('.hours').text(`${hours} H`);
     $('.minutes').text(`${mins} Min`);
     $('.seconds').text(`${secs} Seconds`);

    },1000)

    $("#textarea").on('input', function(){

        let text = $(this).val();
        let textLength = text.length;
        if(textLength >= 100){
            $(this).val(text.substring(0,99));
        }
        let remain = 100 - textLength;
        $('#chars').text(remain);
        if(remain ==0){
            $("#chars").css({"color": "red"})
            $(".reamining").css({"color": "red"})

        }else
        {
            $("#chars").css({"color": "black"})
            $(".reamining").css({"color": "black"})


        }
    })
$(function(){
// Level 1 
    // Exercise 1
    $("#btEx1").on("click", function(){
        $("#para1").text("Welcome to JQuery!")
    })

    // Exercise 2
    $("#btEx2").on("click", function(){
        $("#para2").append("Have a nice day! :)")
    })

    // Exercise 3
    $("#btEx3").on("click", function(){
        $("p").prepend("Important: ")
    })

    // Exercise 4
    $("#btEx4").on("click", function(){
        $("<p>New Para ex4</p>").insertAfter("p")
    })

    // Exercise 5
    $("#btEx5").on("click", function(){
        $("<h1>Heading inserted</h1>").insertBefore("p")
    })

    // Exercise 6
    $("#btEx6").on("click", function(){
        $("p").replaceWith("<div>Replaced content</div>")
    })

// Level 2
    // Exercise 7
    $("#btEx7").on("click", function(){
        $("a").attr("title", "Visit this link")
    })
    
    // Exercise 8
    $("#btEx8").on("click", function(){
        $("a").removeAttr("title")
    })

    // Exercise 9
    $("#btEx9").on("click", function(){
        $("p").addClass("cssClass")
    })

    // Exercise 10
    $("#btEx10").on("click", function(){
        $("p").removeClass("cssClass")
    })

    // Exercise 11
    $("#btEx11").on("click",function(){
        $("p").toggleClass("cssClass")
        console.log($("p").attr("class"));
    })

    // Exercise 12
    $("#btEx12").on("click", function(){
        let hasClass = $("#paraEx12").hasClass("cssClass");
        if(hasClass){
            $("<p>Paragraphs has cssClass</p>").insertAfter("#btEx12")
        } else {
            $("<p>Paragraphs has not cssClass</p>").insertAfter("#btEx12")
        }
    })

// Level 3
    // Exercise 13
    $("#btEx13").on("click", function(){
        $("p").css("font-size", "30px")
    })
    // Exercise 14
    $("#btEx14").on("click", function(){
        $("p").on("click", function(){
            $(this).css("backgroundColor", "yellow")
        })
    })
    // Exercise 15
    $("#btEx15").on("click", function(){
        $("p").off("click")
    })
    // Exercise 16
    $("#btEx16").on("click", function(){
        $("p").hover(function(){
        $("p").css("backgroundColor", "red")
    }, function(){
        $("p").css("backgroundColor", "white")
    })
    })
    // Extra Exercise 16
    $("#btExtraEx16").on("click", function(){
        $("p").off("mouseenter")
        $("p").off("mouseleave")
    })

// Level 4
    // Exercise 17
    $("#btShowEx17").on("click", function(){
        $("#paraEx17").show()
    })
    $("#btHideEx17").on("click", function(){
        $("#paraEx17").hide()
    })
    $("#btToggleEx17").on("click", function(){
        $("#paraEx17").toggle()
    })
    // Exercise 18
    $("#paraEx18").hover(function(){
        $(this).fadeTo("slow", 0.2)
    },function(){
        $(this).fadeTo("slow", 1)
    })
    // Exercise 19
    $("#btnEx19").on("click", function(){
        $("#paraEx19").slideToggle()
    })

//Final Challenge
    // Button1
    $("#bt1Ex20").on("click", function(){
        $("p").wrap("<a href='https://youtube.com' target='_black'></a>")
    })
    // Button2
    $("#bt2Ex20").on("click", function(){
        $("p").hover(function(){
            $(this).css("font-size", "20px")
        },function(){
            $(this).css("font-size", "16px")
        })
    })
    // Button3
    $("#bt3Ex20").on("click", function(){
        $("p").fadeOut("slow")
        $("button").slideUp("slow")
    })
})

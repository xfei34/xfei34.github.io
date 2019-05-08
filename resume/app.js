$(()=>{    
    $("#alert").toggleClass("hide")
    
    setTimeout(()=>{
        $("#alert").toggleClass("hide")
    },3000)
    
    $(document).keyup(e=>{
        if(e.which == 49) window.open("https://v2018.api2pdf.com/chrome/url?url=https://wisdomkim.github.io/resume2/&apikey=a8167069-cd4b-4f07-9fc8-cc928ea96cc2")
    })
})


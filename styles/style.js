jQuery(function(){
  smoothScroll();
  navbar();
  sendEmail();
})

// Nav bar toggle
function navbar()
{
    $('.icon').on('click', function(){
        var x = document.getElementById("my-topnav");
        if (x.className === "top-nav")
        {
            x.className += " responsive";
           
        } else {
            x.className = "top-nav";
        }     
    })
}

// SMOOTH SCROLL
function smoothScroll()
{
    $(document).on('click', '.top-nav a', function(event){
        if(this.hash !== '')
        {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            },
            5000);
        }
    });
}

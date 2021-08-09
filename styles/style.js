jQuery(function(){
  smoothScroll();
  navbar();
  sendEmail();
})

// Nav bar toggle
function navbar()
{
    $('.icon').on('click', function(event){
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
            1200);
        }
    });
}

// Sending Email
function sendEmail()
{
    $(document).on('click', '#submit', function(event){
        event.preventDefault();
        let name = $('#name').val();
        let email = $('#email').val();
        let message = $('#message').val();
        $.ajax({
            method:'POST',
            url:'https://formsubmit.co/ajax/ramyer88@gmail.com',
            dataType:'json',
            accepts:'application/json',
            data:{
                name:name,
                email:email,
                message:message
            },
            success:function(){
                alert('message sent');
            },
        })

    })
}
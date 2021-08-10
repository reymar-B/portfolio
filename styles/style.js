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
        let regx_name = /^([a-z\s])+$/i;
        let regx_email = /^([a-z0-9_\-\.])+\@([a-z0-9_\-\.])+\.([a-z]{2,4})$/i;
        let regx_space = /^([\s])+$/;
        $('.frm-inputs').removeClass('err');
        if(!regx_name.test(name) || name==="" || regx_space.test(name) || name.length > 100)
        {
            $('#name').addClass('err');
            return false;
        }
        if(!regx_email.test(email) || email.length > 100)
        {
            $('#email').addClass('err');
            return false;
        }
        if( message==="" || regx_space.test(message) || message.length > 300)
        {
            $('#message').addClass('err');
            return false;
        }
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
        $('form').trigger('reset');
    })
    $(document).on('click', '#reset', function(){
        $('.frm-inputs').removeClass('err');
    })
}
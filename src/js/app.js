/*Navigation toggle */
const navToggle = document.querySelector(".navbar_toggle");
const navMenu = document.querySelector(".main_nav");
const links = document.getElementsByClassName("nav_links");
console.log(links);
navToggle.addEventListener('click', function()
{
    navMenu.classList.toggle("show_nav");
})
for(let i = 0; i < links.length; i++)
    {
        links[i].addEventListener('click', function(){
            navMenu.classList.toggle("show_nav");
        })
    }


    /*********Radio visibility */

const radiobuttons = document.querySelectorAll("input[type = 'radio']");
const otherbutton = document.getElementById("otherbtn");
const btntxt = document.getElementById("txtbox");
for (let i = 0; i < radiobuttons.length; i++)
{
    radiobuttons[i].addEventListener("click", function()
    {
        if(otherbutton.checked)
        {
            btntxt.classList.remove("hidden");
        }
        else
        {
            btntxt.classList.add("hidden");
        }
    });
}


/**Form */
let errmsg = [];
const form = document.querySelector("form");
let ret = false;
{
    var errors = document.getElementById("errors");
  form.addEventListener("submit", function(event)
    {
        errors.innerText = "";
        if (postalcodeCheck() && phoneCheck())
        {
            ret = true; 
            
        }
        else 
        {
            errors.innerText = errmsg.join('! \n');
        }
    
        if(!ret)
        {
            event.preventDefault();
        }
    })

    form.addEventListener("reset", function()
    {   
            errors.innerText = "";
    })
    
}


function postalcodeCheck()
{
     var validCheck = /^[ABCEGHJ-NPRSTVXY][0-9][ABCEGHJ-NPRSTV-Z][ ]?[0-9][ABCEGHJ-NPRSTV-Z][0-9]$/i;
    var postcd = document.getElementById("postcd").value;
    if(validCheck.test(postcd) == false)
    {
        errmsg.push ("Wrong Postal Code, try again");
        return false;
    }
    else 
    return true;

}
function phoneCheck()
{
    var corr_phone = /^([0-9]{3}[-]){2}[0-9]{4}$/
    var phone = document.getElementById("phone_num").value;

    if (corr_phone.test(phone) == false)
    {
        errmsg.push ("Wrong Phone Number format, try again");
        return false;
    }
    else 
    return true;
}

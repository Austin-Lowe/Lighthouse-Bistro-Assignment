$(document).ready(function(){
    $("td:nth-child(2)").on({
        mouseenter: function(){
			$(this).addClass("hover");
        },
        mouseleave: function(){
            $(this).removeClass("hover");
        }
    });
});

var d = new Date(),
minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
ampm = d.getHours() >= 12 ? 'pm' : 'am',
months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
document.getElementById("date").innerHTML = "Today is: " + days[d.getDay()]+" "+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;

var el;                                                    

function countCharacters(e) {                                    
  var textEntered, countRemaining, counter;          
  textEntered = document.getElementById('comment').value;  
  counter = (64 - (textEntered.length));
  countRemaining = document.getElementById('limit'); 
  countRemaining.textContent = counter + " of 64 characters left";       
}
el = document.getElementById('comment');                   
el.addEventListener('keyup', countCharacters, false);

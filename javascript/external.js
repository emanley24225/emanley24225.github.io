// window.alert(5 + 6);
/* const x = "web"
const y = "mapping"
const out = x + y
document.write(out)*/
/* A prompt box is used to prompt users to input a value
before entering a page.
user_name = window.prompt("Please enter your name",
"Type your name here");
document.write(user_name)
// There are many ways to use the prompt feature.
sign = window.prompt(); // open the blank prompt window
sign = prompt(); // open the blank prompt window
sign = window.prompt('Are you feeling lucky', 'sure') /* open the window
with the Text  "Are you feeling lucky" and default answer "sure".*/
/* x = 22;
const y = 33;
document.writeln(x + y);
document.writeln("<br>");
document.writeln(x += 33); */
document.writeln("<button onclick ='condition()'>Conditional Test</button>")
function condition()
{
  x = confirm("Are you sure you want to proceed?");
  if(x)
  {
    document.writeln("You choose Okay!");
  }
  else
  {
    document.writeln("You chose Cancel!");
  }
}

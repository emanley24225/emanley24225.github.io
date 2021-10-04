var webmaps =
[
  [
    "ArcGIS Online",
    "https://www.arcgis.com/",
    "The primary purpose of ArcGIS online is to conduct geospatial analysis and publish maps that display important spatial information.",
  ],
  [
    "Mapbox",
    "https://studio.mapbox.com/",
    "I believe the primary purpose of Mapbox is to visual spatial data and create maps.",
  ],
  [
    "Github",
    "https://github.com/",
    "Github is like a virtual storage facility where documents can be posted to a larger server where people can reach them.",
  ]
];


function welcome()
{
  let a = "Please enter your name";
  let b = "Type your name here";

  user_name = window.prompt(a,b);

  let message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message
}

function webmap_table()
{
  document.write("<table width = 100%>");
  for (var row =0; row < webmaps.length; row++)
  {
    document.write("<tr>");
    if (row == 0) {
       document.body.style.backgroundColor = "grey";
     }
       else {
         document.body.style.backgroundColor = "white";
       }
    for (var column=0; column < webmaps[0].length; column++)
    {
      document.write("<td>" + webmaps[row][column] + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>")
}

function calc() {
  var width =  document.getElementById("width").value;
  var length = document.getElementById("length").value;
  var area = width * length;
  document.getElementById("area").value = area;
}

// window.alert(5 + 6);
// const x = "web"
// const y = "mapping"
// const out = x + y
// document.write(out)
// A prompt box is used to prompt users to input a value
// before entering a page.
// user_name = window.prompt("Please enter your name",
// "Type your name here");
// document.write(user_name)
// There are many ways to use the prompt feature.
// sign = window.prompt(); // open the blank prompt window
// sign = prompt(); // open the blank prompt window
// sign = window.prompt('Are you feeling lucky', 'sure')  open the window
// with the Text  "Are you feeling lucky" and default answer "sure".
//  x = 22;
// const y = 33;
// document.writeln(x + y);
// document.writeln("<br>");
// document.writeln(x += 33);
// document.writeln("<button onclick ='condition()'>Conditional Test</button>")
// function condition()
// {
//   x = confirm("Are you sure you want to proceed?");
//   if(x)
//   {
//     document.writeln("You choose Okay!");
//   }
//   else
//   {
//     document.writeln("You chose Cancel!");
//   }
// }
// arr = ["Joe","April","Mark","Sara"];
// for (var i=0; i < arr.length; i++)
// {
//  document.writeln(arr[i],"<br>");
// }
// name = window.prompt("Please enter your name",
// "Type your name here");
// document.write(name)

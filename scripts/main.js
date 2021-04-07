let ol = document.querySelector('ol');
// let body = document.querySelector('body');

const links = [
{
    label: "Home",
    url: "/WDD330/index.html"
},
{
    label: "Week 1 notes",
    url: "/WDD330/week1/index.html"
},
{
    label: "Week 2 notes",
    url: "/WDD330/week2/index.html"
}
,
{
    label: "Week 3 notes",
    url: "/WDD330/week3/index.html"
}
,
{
    label: "Week 4 notes",
    url: "/WDD330/week4/index.html"
}
,
{
    label: "Week 5 notes",
    url: "/WDD330/week5/index.html"
}
,
{
    label: "Week 6 notes",
    url: "/WDD330/week6/index.html"
}
,
{
    label: "Week 7 notes",
    url: "/WDD330/week7/index.html"
}
,
{
    label: "Week 8 notes",
    url: "/WDD330/week8/index.html"
}
,
{
    label: "Week 9 notes",
    url: "/WDD330/week9/index.html"
}
,
{
    label: "Week 10 notes",
    url: "/WDD330/week10/index.html"
}
,
{
    label: "Week  11 notes",
    url: "/WDD330/week11/index.html"
}
,
{
    label: "BoM Daily",
    url: "/WDD330/BoMDaily/index.html"
},
{
    label: "To-Do List",
    url: "/WDD330/challenge1/index.html"
}
];

links.forEach(
    link => {
        ol.innerHTML +=
        `<li><a href="${link.url}">${link.label}</a></li>`
    }
);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("menuBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
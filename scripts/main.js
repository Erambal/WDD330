let ol = document.querySelector('ol');
//let ol = document.getElementById('menu');

const links = [
{
    label: "Week1 notes",
    url: "../week1/index.html"
},
{
    label: "Week2 notes",
    url: "../week2/index.html"
}
,
{
    label: "Week3 notes",
    url: "../week3/index.html"
}
,
{
    label: "Week4 notes",
    url: "../week4/index.html"
}
,
{
    label: "Week5 notes",
    url: "../week5/index.html"
}
,
{
    label: "Week6 notes",
    url: "../week6/index.html"
}
];

links.forEach(
    link => {
        ol.innerHTML +=
        '<li><a href="${link.url}">${link.label}</a></li>';
    }
);
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
];

links.forEach(
    link => {
        ol.innerHTML +=
        '<li><a href="${link.url}">${link.label}</a></li>';
    }
);
var logo =document.querySelector("#hplogo");
logo.setAttribute("src", "https://www.w3schools.com/w3css/img_lights.jpg");
var logo =document.querySelector("#hplogo");
logo.setAttribute("srcset", "https://www.w3schools.com/w3css/img_lights.jpg");
logo.style.width="500px";
logo.style.height="100px";
logo.style.bo="2px solid purple";
var links = document.getElementsByTagName("a");
for( var i=0; i< links.length; i++){
    links[i].style.background="pink";
    links[i].style.border="1px dashed purple";
    links[i].style.color="orange";
    console.log(links[i].getAttribute("href"));
    console.log(links[i].setAttribute("href","http:ww.bing.com"));
}


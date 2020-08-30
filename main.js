function About() {
    document.querySelector('.body').innerHTML="<div class=border> <div class='profile-layout'> <div class='profile-picture'><img src='my-profile-picture.jpg' alt='profile picture'> </img></div><div class='profile-text'><h2> Muchammad Ibnu Sidqi </h2><h3> Bandung, Indonesia </h3><div class ='link'><a href='mailto:13518072@std.stei.itb.ac.id'> Email Me: <i class='fa fa-envelope-o'></i></a></div></div></div></div>";
    document.getElementById('about').style.backgroundColor= "whitesmoke";
    document.getElementById('about').style.color= "black";
    document.getElementById('home').style.backgroundColor= "";
    document.getElementById('home').style.color= "whitesmoke";
}
function Home(){
    document.querySelector('.body').innerHTML="<h2>WELCOME TO MY WEBSITE!</h2>";
    document.getElementById('home').style.backgroundColor= "whitesmoke";
    document.getElementById('home').style.color= "black";
    document.getElementById('about').style.backgroundColor= "";
    document.getElementById('about').style.color= "whitesmoke";
}
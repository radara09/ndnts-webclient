/*CSS*/
:root{
    --mainclr:#b2ddd4;
    --secclr:#9BCDD2;
    --third:#ffff;
    --mainafterclr:hsl(167, 81%, 79%);
}
*{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    transition: .2s;
    text-transform: capitalize;
    text-decoration: none;
}
html{
    font-size: 62.5%;
    
}
.header{
    padding: 1rem 7%;
    background-color: var(--mainclr);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
}
.header #logo{
    width: 100px;
}
.navbar a{
    color: white;
    font-size: 1.5rem;
    margin-left: 2rem;
    position: relative;
  
}
.navbar a:after{
    content: '';
    background: var(--secclr);
    width: 0;
    height: 3px;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 5px;
    transition: .3s;
}
.navbar a:hover:after{
    content: '';
    background: var(--secclr);
    width: 100%;
    height: 3px;
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 5px;
}
.icons div{
    font-size: 2rem;
    margin-right: 1rem;
    color: white;
    display: none;
}
.icons a{
    color: white;
    background: var(--secclr);
    padding: 1.5rem 3rem;
    font-size: 1.5rem;
    border-radius: 10px;
    transition: .5s;
}
.icons a:hover{
    background: transparent;
    border: 1px solid var(--secclr);
}
.navbar.active{
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
.background-image{
    .background-image{
        display: flex;
        justify-content: space-between;
        background: url(images/page.png);
        width: 10%;
        height: 100vh;
        background-size: middle;
        background-repeat: no-repeat;
        padding-top: 0%;
        position: relative;
    }
    
}
.background-content{
    top: 0%;
    left: 0%;
    width: 0%;
    transform: translate(-80%);
}
.background-content h1{
    color: rgb(53, 50, 50);
    font-size: 20px;
    margin-bottom: 10px;
}
.background-content p{
    font-size: 1.5rem;
    margin-bottom: 40px;
}

.background-content a{
    background: var(--secclr);
    padding: 1.5rem 3rem;
    border-radius: 15px;
    color: white;
    font-size: 1.5rem;
    transition: .5s;
}
.background-content a:hover{
    background: transparent;
    border: 1px solid var(--secclr);
    color: black;
}
.about{
    padding: 6rem 7%;
    background: var(--third);
}
.main-about{
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
}
.inner-about{
    flex: 1 1 45rem;
}

.inner-about .inner-about-image img{
    width: 85%;
}
.about-content{
    width: 80%;
}
.about-content h1{
    font-size: 40px;
    margin-bottom: 10px;
}
.about-content p{
    font-size: 2.5rem;
    margin-bottom: 30px;
}
.about-content a{
    background: var(--secclr);
    padding: 1rem 3rem;
    font-size: 1.5rem;
    color: white;
    transition: .5s;
}
.about-content a:hover{
    background: transparent;
    border: 1px solid var(--secclr);
    color: rgb(138, 100, 100);
}
.our-services{
    padding: 7rem 7%;
}
.service-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
}
.left-service-content{
    flex: 1 1rem;
}
.right-service-content{
    flex: 1 1rem;
    display: flex;
    justify-content: flex-end;

}
.left-service-content h1{
    font-size: 40px;
    margin-bottom: 15px;
}
.left-service-content p{
    font-size: 1.5rem;
}
.right-service-content .right-btn a{
    padding: 1.5rem 3rem;
    font-size: 2rem;
    color: white;
    background: var(--secclr);
}
.right-service-content .right-btn a:hover{
    border: 1px solid var(--secclr);
    background: transparent;
    color: black;
}
.main-services{
    padding-top: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
}
.inner-services-content{
    flex: 1 1 300px;
    padding: 1rem 3rem;
    text-align: center;
}
.inner-services-content h2{
    font-size: 25px;
    margin-bottom: 10px;
}
.inner-services-content p{
    font-size: 1.5rem;
    line-height: 2;
}
.inner-services-content a{
    font-size: 1.5rem;
    line-height: 2;
}
.service-icon i{
    font-size: 4rem;
    width: 8rem;
    height: 8rem;
    border-radius: 50%;
    text-align: center;
    line-height: 8rem;
    background: var(--mainafterclr);
    color: var(--mainclr);
    margin-bottom: 15px;
    cursor: pointer;
    transition: .3s;
}
.service-icon i:hover{
    color: white;
    background: var(--mainclr);
}
.gallery{
    padding: 8rem 7%;
}
.gallery h1{
    color: var(--mainclr);
    font-size: 50px;
    text-align: center;
    margin-bottom: 30px;
}
.main-gallery{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
.inner-gallery{
    flex:1 1 300px;

}
.inner-gallery img{
    width: 100%;
    transition: .3s;
}
.inner-gallery img:hover{
    transform: scale(1.1);
    border-radius: 20px;
}

.chose-icon i{
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    background: white;
    color: var(--mainclr);
    font-size: 3rem;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.icon-content{
    padding: 0 4rem;
}
.icon-content p{
    font-size: 1.5rem;
    line-height: 1;
}
.footer{
    padding: 6rem 7%;
    background: var(--third);
}
.main-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
}
.inner-footer{
    flex: 1 1 200px;
}
.inner-footer h2{
    font-size: 2rem;
    color: black;
}
.inner-footer a{
    font-size: 1.5rem;
    font-weight: bolder;
    color: black;
    display: block;
    margin-top: 1rem;
    padding-top: 1rem;
}
.inner-footer a:hover{
    margin-left: 10px;
}


/* width */
::-webkit-scrollbar {
    width: 20px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px var(--mainclr); 
    background: var(--mainclr);
  }
   
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--secclr); 
    border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--third); 
  }

@media (max-width:767px) {

    html{
        font-size: 55%;
    }
    .header{
        padding: 2rem;
    }
    .icons div{
        display: initial;
    }
    .navbar{
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: 100vh;
        background: var(--secclr);
        display: flex;
        
        align-items: center;
        flex-direction: column;
        clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    }

    
    .navbar a{
        display: block;
        font-size: 5rem;
        font-weight: bolder;
        margin: 1rem;
        padding: 1rem;
        color: black;
    }
    .background-content{
        
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding-left: 5rem;
    }
    .inner-about .inner-about-image img{
        margin-top: 20px;
    }

    .right-service-content{
       
        justify-content: flex-start;
    
    }
}
.login {
    padding: 4rem 7%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.login-content {
    max-width: 400px;
    text-align: center;
}

.login-content h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
}

.login-content form {
    margin-top: 2rem;
}

.login-content input {
    width: 100%;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.login-content button {
    display: block;
    width: 100%;
    padding: 1.5rem;
    font-size: 1.6rem;
    color: white;
    background-color: var(--secclr);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: .3s;
}

.login-content button:hover {
    background-color: #4b9191;
}

  
/*HTML*/
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="fontawesome-free-5.15.3-web/css/all.min.css">
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <style>
        .footer {
        background-color: #f2f2f2;
        padding: 20px;
        text-align: under;
        .footer-image {
        float: left;
        margin-right: 15px;
        width: 200px; /* Sesuaikan ukuran foto dengan kebutuhan Anda */
        height: auto;
}
        }

        .contact-us {
            font-size: 16px;
            color: #555;
            margin-top: 10px;
        }
    </style>
    <title>Hypertension Medical Record</title>
</head>
<body>
    
    <header class="header">
        <img src="images/navrem.png" id="logo" alt="">

        <nav class="navbar">
            <a href="#about">Home</a>
            <a href="#services">Hypertension Medical Record</a>
            <a href="#gallery">Informasi Hipertensi</a>
            <a href="#contact">Contact</a>
        </nav>

        <div class="icons">
            <div id="menubar" class="fas fa-bars"></div>
            <a href="login.html">Login</a>
        </div>
    </header>

    <div class="about" id="about">
        <div class="main-about">
            <div class="inner-about">
                <div class="about-content">
                    <h1>Welcome To Hypertension Medical Record</h1>
                    <p>Stay healthy and happy.</p>
                    <a href="#">Read more</a>
                </div>
            </div>
            <div class="inner-about">
                <div class="inner-about-image">
                    <img src="images/Hp.png" alt="">
                </div>
            </div>
        </div>
    </div>

    <div class="our-services" id="services">
        <div class="service-content">
            <div class="left-service-content">
                <h1>Hypertension Medical Record</h1>
                <p>Through this menu, you can add and monitor the hypertension history of patients.</p>
            </div>
        </div>
        <div class="main-services">
            <div class="inner-services-content">
                <div class="service-icon">
                    <i class="fas fa-notes-medical"></i>
                </div>
                <h2>Cek Riwayat</h2>
                <p>Health is the complete integration of body, mind, and soul. Awareness that everything we do, think, feel, and believe has an effect on our well-being.</p>
                <a href="login.html">Cek Now</a>
            </div>

            <div class="inner-services-content">
                <div class="service-icon">
                    <i class="fas fa-hospital-user"></i>
                </div>
                <h2>Add Record</h2>
                <p>Add the latest data to be monitored immediately and keep your health in check :)</p>
                <a href="login.html">Cek Now</a>
            </div>
        </div>
    </div>


    <div class="gallery" id="gallery">
        <h1>Informasi Hipertensi</h1>
        <div class="main-gallery">
            <div class="inner-gallery">
                <img src="images/Ht.png" alt="">
            </div>

            <div class="inner-gallery">
                <img src="images/HG.png" alt="">
            </div>

            <div class="inner-gallery">
                <img src="images/gejala.png" alt="">
            </div>
        </div>
        <a href="https://www.halodoc.com/kesehatan/hipertensi" class="learn-more-button" target="_blank">Learn More</a>
    </div>

    <div class="footer">
        <img src="images/navrem.png" alt="Footer Image" class="footer-image">
        <div class="contact-us" id="contact">
            <h3>Contact Us</h3>
            <p>Hubungi kami untuk informasi lebih lanjut:</p>
            <p>Email: hypermonitor.com</p>
            <p>Telepon: 0821-3471-2561</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>

*/

/*JS*/
/*
// Script.js

import { WsTransport } from "@ndn/ws-transport";
async function main() {
  const face = await WsTransport.createFace({}, "wss://hmbe.ndntel-u.my.id:9696");
  face.addRoute(new Name("/"));
  // Enable the form after connection was successful.
  // document.querySelector("#seeAllButton").addEventListener("click", seeAll);
}
window.addEventListener("load", main);

// Toggle Menu
const menuBar = document.getElementById('menubar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Smooth Scroll
const links = document.querySelectorAll('.navbar a');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const href = link.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: 'smooth'
    });

    navbar.classList.remove('active');
  });
});

*/

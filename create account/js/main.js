// Bar Links Functions

let toggleMenu = document.querySelector(".menu .toggle-menu");
let toggleMenuFirst = document.querySelector(".menu .toggle-menu i:first-of-type");
let toggleMenuLast = document.querySelector(".menu .toggle-menu i:last-of-type");
let menuLink = document.querySelector(".menu .container .links");

toggleMenu.onclick = () => {
    toggleMenuFirst.classList.toggle("hide");
    toggleMenuLast.classList.toggle("show");
    menuLink.classList.toggle("show")
};

let menuAnchor = document.querySelectorAll(".menu .container .links > li > a");
let menuContain = document.querySelector(".menu .container .links > li .contain");
let menuHeading = document.querySelectorAll(".menu .container .links > li h4");

menuAnchor.forEach(a => {
    a.addEventListener("click", (e) => {
        e.target.nextElementSibling.classList.toggle("extend");
    });
});

menuHeading.forEach(h => {
    h.addEventListener("click", (e) => {
        e.target.nextElementSibling.classList.toggle("extend");
    });
});

// Search Functions

let searchIcon = document.querySelectorAll(".search");
let searchIconDiv = document.querySelector(".search-icon");
let closeSearch = document.querySelector(".search-icon .close");

searchIcon.forEach(el => {
    el.addEventListener("click", (e) => {
        searchIconDiv.classList.toggle("show");
        e.stopPropagation();
    });
});

closeSearch.onclick = () => {
    searchIconDiv.classList.remove("show");
};

searchIconDiv.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.onclick = (e) => {   
    if (e.target === closeSearch) {
        searchIconDiv.classList.remove("show");
    };
    
    if (e.target !== searchIconDiv) {
        searchIconDiv.classList.remove("show");
    };
};

document.onkeyup = (e) => {
    if (e.key === "Escape") {
        searchIconDiv.classList.remove("show");        
    };
};

// Coolers Section Functions

let coolersBox = document.querySelectorAll(".coolers .box");

window.addEventListener("scroll", () => {
    if (window.innerWidth >= 1200) {
        if (window.pageYOffset >= 1000) {
            coolersBox.forEach(box => {
                box.classList.add("reached");
            });
        };
    };
    if (window.innerWidth < 1200 && window.innerWidth >= 992) {
        if (window.pageYOffset >= 1600) {
            coolersBox.forEach(box => {
                box.classList.add("reached");
            });
        };
    };
    if (window.innerWidth < 992 && window.innerWidth >= 768) {
        if (window.pageYOffset >= 1200) {
            coolersBox.forEach(box => {
                box.classList.add("reached");
            });
        };
    };
    if (window.innerWidth < 768 && window.innerWidth >= 576) {
        if (window.pageYOffset >= 3120) {
            coolersBox.forEach(box => {
                box.classList.add("reached");
            });
        };
    };
});

// Soft Side Image Function

let softSide = document.querySelector(".soft-side .image");

window.addEventListener("scroll", () => {
    if (window.innerWidth >= 1200) {
        if (window.pageYOffset >= 2000) {
            softSide.classList.add("clear");
        };
    };
    if (window.innerWidth < 1200 && window.innerWidth >= 992) {
        if (window.pageYOffset >= 3375) {
            softSide.classList.add("clear");
        };
    };
    if (window.innerWidth < 992 && window.innerWidth >= 768) {
        if (window.pageYOffset >= 2500) {
            softSide.classList.add("clear");
        };
    };
    if (window.innerWidth < 768 && window.innerWidth >= 576) {
        if (window.pageYOffset >= 6900) {
            softSide.classList.add("clear");
        };
    };
});

// footer Functions

let boxOfHeading = document.querySelectorAll("footer .container .box:not(:nth-of-type(1))");

let headingFour = document.querySelectorAll("footer .container .box h4");

headingFour.forEach(h4 => {
    h4.addEventListener("click", (e) => {
        e.target.parentElement.classList.toggle("extend");
        e.target.classList.toggle("clicked");
    });
});

let eye = document.querySelector(".create-account form .box i");

let passwordInput = document.querySelector('.create-account form input[type="password"]');


eye.addEventListener("click", () => {
    passwordInput.classList.toggle("pass");
    if (passwordInput.classList.contains("pass")) {
        passwordInput.setAttribute("type", "text");
    } else {
        passwordInput.setAttribute("type", "password");
    };
});

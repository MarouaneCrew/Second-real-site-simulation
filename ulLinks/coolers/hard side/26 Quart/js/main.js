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

// footer Functions

let boxOfHeading = document.querySelectorAll("footer .container .box:not(:nth-of-type(1))");

let headingFour = document.querySelectorAll("footer .container .box h4");

headingFour.forEach(h4 => {
    h4.addEventListener("click", (e) => {
        e.target.parentElement.classList.toggle("extend");
        e.target.classList.toggle("clicked");
    });
});

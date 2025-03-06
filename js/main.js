const button = document.getElementById("js--menu");
const navigation = document.getElementById("js--nav");
const body = document.getElementById("js--body");
const links = document.querySelectorAll('.mainNavigationListItem a');
const hamburger = document.getElementById("js--menu");

function openMenu() {
    navigation.style.visibility = "visible";
    navigation.style.opacity = "1";
    body.style.overflow = "hidden";
    hamburger.classList.add("active");
}

function closeMenu() {
    navigation.style.visibility = "hidden";
    navigation.style.opacity = "0";
    body.style.overflow = "auto";
    hamburger.classList.remove("active");
}

button.onclick = function () {
    if (navigation.style.visibility === "visible") {
        closeMenu();
    } else {
        openMenu();
    }
};

body.addEventListener('click', function (e) {
    if (navigation.style.visibility === "visible" && !navigation.contains(e.target) && !button.contains(e.target)) {
        closeMenu();
    }
});

links.forEach(link => {
    link.onclick = function (event) {
        event.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }

        closeMenu();
    };
});

// Constants
const ELEMENTS = {
    tablinks: document.getElementsByClassName("tab-links"),
    tabcontents: document.getElementsByClassName("tab-contents"),
    sideMenu: document.getElementById("side-menu"),
    form: document.forms['submit-to-google-sheet'],
    message: document.getElementById("txt")
};
/*
const CONFIG = {
    scriptURL: 'https://script.google.com/macros/s/AKfycbzGGlcmSV_FNvHDZUgLvhfSA_dwTKRmkrd3Kl3mDeHIQ9iumM-8UxNHI4dp4Ptnsx1RcQ/exec',
    messageTimeout: 1000
};*/

// Tab functionality
function opentab(tabname) {
    Array.from(ELEMENTS.tablinks).forEach(tablink => tablink.classList.remove("active-link"));
    Array.from(ELEMENTS.tabcontents).forEach(tabcontent => tabcontent.classList.remove("active-tab"));
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Menu functionality
const openMenu = () => ELEMENTS.sideMenu.style.right = "0";
const closeMenu = () => ELEMENTS.sideMenu.style.right = "-350px";
/*
// Form submission
ELEMENTS.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        const response = await fetch(CONFIG.scriptURL, {
            method: 'POST',
            body: new FormData(ELEMENTS.form)
        });
        if (response.ok) {
            ELEMENTS.message.innerHTML = "Message Submitted Successfully";
            setTimeout(() => ELEMENTS.message.innerHTML = "", CONFIG.messageTimeout);
            ELEMENTS.form.reset();
        }
    } catch (error) {
        console.error('Error!', error.message);
    }
});*/

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Add any initialization code here
});
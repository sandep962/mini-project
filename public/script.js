// Switch between Login/Register Tabs
function openForm(evt, formName) {
    var i, formContent, tabLinks;
    formContent = document.getElementsByClassName("form-content");
    for (i = 0; i < formContent.length; i++) {
        formContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default form active on page load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("login").style.display = "block";
});
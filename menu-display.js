function displayUpgrades() {
    var menuitem1 = document.getElementById("menu-item1");
    var menuitem2 = document.getElementById("menu-item2");
    var menuitem3 = document.getElementById("menu-item3");
    var menuitem4 = document.getElementById("menu-item4");

    menuitem2.classList.remove("display-item");
    menuitem3.classList.remove("display-item");
    menuitem4.classList.remove("display-item");

    menuitem1.classList.add("display-item");
}

function displayStats() {
    var menuitem1 = document.getElementById("menu-item1");
    var menuitem2 = document.getElementById("menu-item2");
    var menuitem3 = document.getElementById("menu-item3");
    var menuitem4 = document.getElementById("menu-item4");
    
    menuitem1.classList.remove("display-item");
    menuitem3.classList.remove("display-item");
    menuitem4.classList.remove("display-item");

    menuitem2.classList.add("display-item");

}

function displayOptions() {
    var menuitem1 = document.getElementById("menu-item1");
    var menuitem2 = document.getElementById("menu-item2");
    var menuitem3 = document.getElementById("menu-item3");
    var menuitem4 = document.getElementById("menu-item4");
    
    menuitem1.classList.remove("display-item");
    menuitem2.classList.remove("display-item");
    menuitem4.classList.remove("display-item");

    menuitem3.classList.add("display-item");

}

function displayAbout() {
    var menuitem1 = document.getElementById("menu-item1");
    var menuitem2 = document.getElementById("menu-item2");
    var menuitem3 = document.getElementById("menu-item3");
    var menuitem4 = document.getElementById("menu-item4");
    
    menuitem1.classList.remove("display-item");
    menuitem2.classList.remove("display-item");
    menuitem3.classList.remove("display-item");

    menuitem4.classList.add("display-item");

}

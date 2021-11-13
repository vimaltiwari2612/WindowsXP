var dropdownContent = [

    "Arrange Icons By >",
    "Refresh",
    "-",
    "Paste",
    "Paste Shortcut",
    "Undo",
    "-",
    "New >",
    "-",
    "Properties"
];

var subDropDownContent = [

    {
        "Arrange Icons By": ["Name", "Date", "Type"]

    },
    {
        "New": ["Bitmap Image", "Text Document", "Folder", "Compressed (Zipped) File"]
    }

];

var loginTune = new Audio('tunes/login.mp3');

setTime = function () {
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();
    if (today.getHours() >= 12) {
        time += " PM";
    } else {
        time += " AM";
    }
    document.getElementsByClassName("time")[0].innerHTML = time;
}

function register(e, div) {
    clearDropdowns(div);
    clearSubDropdowns(div);
    clearStartMenu(div);
    if (e.button === 2) {
        openDropdown(e, div);
    }
}

clearDropdowns = (parent) => {
    var dropdowns = parent.getElementsByClassName("dropdown");
    var size = dropdowns.length;
    for (var i = 0; i < size; i++) {
        dropdowns[i].remove();
    }

}

clearStartMenu = (parent) => {
    var startmenus = parent.getElementsByClassName("startmenu");
    var size = startmenus.length;
    for (var i = 0; i < size; i++) {
        startmenus[i].remove();
    }
}

closeWindow = (button) => {
    button.parentElement.parentElement.remove();
    var windowPanel = document.getElementById("windowPanel");

    windowPanel.childNodes.forEach(ele => {

        if (ele.innerHTML == button.getAttribute("windowName")) {
            ele.remove();
        }
    });
}

addTileToTaskbar = (icon) => {
    var windowPanel = document.getElementById("windowPanel");
    var tile = document.createElement("div");
    tile.className = "windowTile";
    tile.innerHTML = icon.title;
    windowPanel.appendChild(tile);

}

openWindow = (icon) => {
    console.log(icon.title);

    var window = document.createElement("div");
    window.className = "window";

    //top Bar
    var topBar = document.createElement("div");
    topBar.style.width = 'inherit';
    topBar.style.height = '30px';
    topBar.style.backgroundColor = 'rgb(10, 115, 252)';
    window.appendChild(topBar);

    var close = document.createElement("div");
    close.style.width = '25px';
    close.style.height = '25px';
    close.style.border = '1px solid white';
    close.style.borderRadius = '5px';
    close.style.backgroundImage = 'url("close.png")';
    close.style.backgroundRepeat = 'no-repeat';
    close.style.backgroundSize = 'cover';
    close.style.float = 'right';
    close.setAttribute("windowName", icon.title);
    close.setAttribute('onclick', "closeWindow(this)");
    topBar.appendChild(close);

    var bottomBar = document.createElement("div");
    bottomBar.style.width = 'inherit';
    bottomBar.style.height = 'inherit';
    bottomBar.innerHTML = icon.title;
    bottomBar.style.textAlign = 'center';
    bottomBar.style.fontSize = 'xxx-large';
    window.appendChild(bottomBar);

    var desktop = document.getElementById('desktop');
    desktop.appendChild(window);

    addTileToTaskbar(icon);
}

clearSubDropdowns = (parent) => {

    var subdropdowns = document.getElementsByClassName("subDropDown");

    while (subdropdowns.length > 0) {
        var size = subdropdowns.length;
        for (var i = 0; i < size; i++) {
            if (subdropdowns[i] !== undefined) subdropdowns[i].remove();
        }
    }
}

setDesktop = () => {
    var desktop = document.getElementById('desktop');
    var iconBar = document.createElement('div');
    iconBar.className = 'desktopIconBar';


    //add my computer

    var mycomp = document.createElement('div');
    mycomp.style.backgroundImage = 'url("mycomputer.png")';
    mycomp.style.backgroundRepeat = 'no-repeat';
    mycomp.style.backgroundSize = 'cover';
    mycomp.style.width = '40px';
    mycomp.style.height = '40px';
    mycomp.title = 'My Computer';
    mycomp.setAttribute("ondblclick", "openWindow(this)");
    iconBar.appendChild(mycomp);

    var mycompText = document.createElement('div');
    mycompText.innerHTML = "My Computer";
    mycompText.style.color = 'white';
    mycompText.style.fontSize = 'xx-small';

    iconBar.appendChild(mycompText);

    iconBar.appendChild(document.createElement('br'));


    //add recyclebin
    var mycomp = document.createElement('div');
    mycomp.style.backgroundImage = 'url("recyclebin.png")';
    mycomp.style.backgroundRepeat = 'no-repeat';
    mycomp.style.backgroundSize = 'cover';
    mycomp.style.width = '40px';
    mycomp.style.height = '40px';
    mycomp.title = 'Recycle Bin';
    mycomp.setAttribute("ondblclick", "openWindow(this)");
    iconBar.appendChild(mycomp);

    var mycompText = document.createElement('div');
    mycompText.innerHTML = "Recycle Bin";
    mycompText.style.color = 'white';
    mycompText.style.fontSize = 'xx-small';

    iconBar.appendChild(mycompText);

    iconBar.appendChild(document.createElement('br'));

    // my document
    var mycomp = document.createElement('div');
    mycomp.style.backgroundImage = 'url("mydocuments.png")';
    mycomp.style.backgroundRepeat = 'no-repeat';
    mycomp.style.backgroundSize = 'cover';
    mycomp.style.width = '40px';
    mycomp.style.height = '40px';
    mycomp.title = 'My Documents';
    mycomp.setAttribute("ondblclick", "openWindow(this)");
    iconBar.appendChild(mycomp);

    var mycompText = document.createElement('div');
    mycompText.innerHTML = "My Documents";
    mycompText.style.color = 'white';
    mycompText.style.fontSize = 'xx-small';

    iconBar.appendChild(mycompText);

    iconBar.appendChild(document.createElement('br'));
    // media player
    var mycomp = document.createElement('div');
    mycomp.style.backgroundImage = 'url("mediaplayer.png")';
    mycomp.style.backgroundRepeat = 'no-repeat';
    mycomp.style.backgroundSize = 'cover';
    mycomp.style.width = '40px';
    mycomp.style.height = '40px';
    mycomp.title = 'Windows Media Player';
    mycomp.setAttribute("ondblclick", "openWindow(this)");
    iconBar.appendChild(mycomp);

    var mycompText = document.createElement('div');
    mycompText.innerHTML = "Windows Media Player";
    mycompText.style.color = 'white';
    mycompText.style.fontSize = 'xx-small';

    iconBar.appendChild(mycompText);

    iconBar.appendChild(document.createElement('br'));
    //MSN

    var mycomp = document.createElement('div');
    mycomp.style.backgroundImage = 'url("msn.png")';
    mycomp.style.backgroundRepeat = 'no-repeat';
    mycomp.style.backgroundSize = 'cover';
    mycomp.style.width = '40px';
    mycomp.style.height = '40px';
    mycomp.title = 'MSN';
    mycomp.setAttribute("ondblclick", "openWindow(this)");
    iconBar.appendChild(mycomp);

    var mycompText = document.createElement('div');
    mycompText.innerHTML = "MSN";
    mycompText.style.color = 'white';
    mycompText.style.fontSize = 'xx-small';

    iconBar.appendChild(mycompText);

    iconBar.appendChild(document.createElement('br'));

    // internet


    var mycomp = document.createElement('div');
    mycomp.style.backgroundImage = 'url("internet.png")';
    mycomp.style.backgroundRepeat = 'no-repeat';
    mycomp.style.backgroundSize = 'cover';
    mycomp.style.width = '40px';
    mycomp.style.height = '40px';
    mycomp.title = 'Internet Explorer';
    mycomp.setAttribute("ondblclick", "openWindow(this)");
    iconBar.appendChild(mycomp);

    var mycompText = document.createElement('div');
    mycompText.innerHTML = "Internet Explorer";
    mycompText.style.color = 'white';
    mycompText.style.fontSize = 'xx-small';

    iconBar.appendChild(mycompText);

    iconBar.appendChild(document.createElement('br'));

    //
    desktop.appendChild(iconBar);
}

openDropdown = (e, parent) => {

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.className = "dropdown";
    div.style.left = e.x + "px";
    div.style.top = e.y + "px";


    for (var i = 0; i < dropdownContent.length; i++) {
        var item = null;
        if (dropdownContent[i].trim() === "-") {
            item = document.createElement('hr');
        } else {
            item = document.createElement('div');
            item.style.width = "100%";
            item.innerHTML = dropdownContent[i].trim();
        }
        div.appendChild(item);

        if (dropdownContent[i].trim().includes(">")) {
            item.onmouseenter = (item) => {
                openSubDropDown(item);
            }
        } else {
            item.onmouseenter = (item) => {
                clearSubDropdowns(document.getElementById("desktop"));
            }
        }
    }

    parent.appendChild(div);

}

openSubDropDown = (e) => {
    clearSubDropdowns(document.getElementById("desktop"));
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.className = "subDropDown";
    div.style.left = e.target.parentElement.offsetLeft + 170 + "px";
    div.style.top = e.y + "px";
    document.getElementById("desktop").appendChild(div);

    var itemText = e.target.innerText.substring(0, e.target.innerText.indexOf('>')).trim();

    var subItems = [];
    for (var i = 0; i < subDropDownContent.length; i++) {
        if (subDropDownContent[i][itemText] !== undefined) {
            subItems = subDropDownContent[i][itemText];
            break;
        }
    }

    subItems.forEach(element => {
        var item = document.createElement('div');
        item.style.width = "100%";
        item.innerHTML = element.trim();
        div.appendChild(item);
    });

}

setTime();
setDesktop();
var USER_NAME = "Windows XP User";
var username = prompt("Enter your name to login!");
if (username !== undefined && username !== "" && username !== null) {
    USER_NAME = username;
}

loginTune.play();

function openStartMenu(e) {

    var div = document.createElement("div");
    div.style.position = "absolute";
    div.className = "startmenu";


    var topPanel = document.createElement("div");
    topPanel.style.position = "absolute";
    topPanel.style.width = 'inherit';
    topPanel.style.height = '50px';
    div.appendChild(topPanel);

    var middlePanel = document.createElement("div");
    middlePanel.style.position = "absolute";
    middlePanel.style.width = 'inherit';
    middlePanel.style.height = '400px';
    middlePanel.style.marginTop = '50px';
    middlePanel.style.backgroundImage = 'url("startmenu.png")';
    middlePanel.style.backgroundRepeat = 'no-repeat';
    div.appendChild(middlePanel);

    var bottomPanel = document.createElement("div");
    bottomPanel.style.position = "absolute";
    bottomPanel.style.width = 'inherit';
    bottomPanel.style.height = '50px';
    bottomPanel.style.marginTop = '430px';
    div.appendChild(bottomPanel);

    document.getElementById("desktop").appendChild(div);

    //add items to top panel
    var userAccount = document.createElement('div');
    userAccount.style.float = 'left';
    userAccount.style.marginLeft = '6px';
    var userAccountIcon = document.createElement('div');
    userAccountIcon.style.backgroundImage = 'url("startmenuuser.PNG")';
    userAccountIcon.style.backgroundRepeat = 'no-repeat';
    userAccountIcon.style.backgroundSize = 'cover';
    userAccountIcon.style.width = '40px';
    userAccountIcon.style.height = '40px';
    userAccountIcon.style.border = '1px solid white';
    userAccountIcon.style.marginTop = '4px';
    userAccount.appendChild(userAccountIcon);
    topPanel.appendChild(userAccount);

    var userAccountText = document.createElement('div');
    userAccountText.innerHTML = USER_NAME;
    userAccountText.style.color = 'white';
    userAccountText.style.fontSize = 'medium';
    userAccountText.style.marginLeft = '50px';
    userAccountText.style.marginTop = '25px';
    topPanel.appendChild(userAccountText);

    //add items to bottom panel
    var turnoff = document.createElement('div');
    turnoff.style.float = 'right';
    turnoff.style.marginRight = '6px';
    var turnoffIcon = document.createElement('div');
    turnoffIcon.style.backgroundImage = 'url("turnoff.png")';
    turnoffIcon.style.backgroundRepeat = 'no-repeat';
    turnoffIcon.style.backgroundSize = 'cover';
    turnoffIcon.style.width = '25px';
    turnoffIcon.style.height = '25px';
    turnoff.appendChild(turnoffIcon);

    var turnoffText = document.createElement('div');
    turnoffText.innerHTML = "Turn Off";
    turnoffText.style.color = 'white';
    turnoffText.style.fontSize = 'xx-small';
    turnoff.appendChild(turnoffText);

    bottomPanel.appendChild(turnoff);

    var logoff = document.createElement('div');
    logoff.style.float = 'right';
    logoff.style.marginRight = '6px';
    var logoffIcon = document.createElement('div');
    logoffIcon.style.backgroundImage = 'url("logoff.png")';
    logoffIcon.style.backgroundRepeat = 'no-repeat';
    logoffIcon.style.backgroundSize = 'cover';
    logoffIcon.style.width = '25px';
    logoffIcon.style.height = '25px';
    logoff.appendChild(logoffIcon);

    var logoffText = document.createElement('div');
    logoffText.innerHTML = "Log Off";
    logoffText.style.color = 'white';
    logoffText.style.fontSize = 'xx-small';
    logoff.appendChild(logoffText);

    bottomPanel.appendChild(logoff);
}

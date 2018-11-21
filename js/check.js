//This file checks for each state setting and sets it on launch.
//It is reccomended that you do not modify this file.
/*
List of origami localstorage values and their default (or possible values) values if user skips setup


allowLinux = true - allows linux to be enabled
allowSharing = true
baseMode = false
customBuild = false - Changed on custom builds
demoMode = false
devConsole = true
deviceEnabled = true
deviceFrame = true
deviceModel = nexus5,apple6,nexus6,pixel2xl,pixel2
deviceSystem = lineage,android9,etc - Choose an option from the list in settings
enableAutocomplete = false - enables the experimental autocomplete tool
enrollmentKey = 000000 - Default, set it to your organization's if you have one
enrollmentPolicy = false
enrollmentAddress = null - insert url to organization policy if you do not have a key. only works online, but cache support is in the works
experimentalFeatures = false - if it is true, experimental feature will be under developer options in settings
fontSize = 15 - measured in px, only changes ace font size
isDeveloper = false - checks if user is a contributor to project, enables special features, requires access request code
linuxEnabled = false - changes if user goes through the linux setup process
loginAccess = false - requires password to start application
loginKey = password - can be changed only if loginAccess is enabled
offlineMode = false - Disables any online connections, including update checking.
primaryColor = #ffa000 - the color for the titlebar if it is custom
renderComponent = iframe - can also be set to webview, but iframe forks for our purposes
renderSizeHeight = auto - the height of the emulator display
renderSizeWidth = auto - the width of emulator display
secondaryColor = #FFC107 - The color of the control bar
showDeviceGUI = true
startFullscreen = false
touchscreenMode = false
uiTheme = default - can be changed from the list in settings, or found in documentation
useProductSans = true - only temporary, but will be set to false in production releases, for copyright reasons
viewOnly = false - prevents changes to the editor.
editorTheme = chrome - select a them that is ace compatible. Themes can not be added easily.
consoleToShow
showConsole

*/

var allowLinux = localStorage.getItem("allowLinux");

var allowSharing = localStorage.getItem("allowSharing");

var baseMode = localStorage.getItem("baseMode");

var consoleToShow = localStorage.getItem("consoleToShow");

var customBuild = localStorage.getItem("customBuild");

var demoMode = localStorage.getItem("demoMode");

var devConsole = localStorage.getItem("devConsole");

var deviceEnabled = localStorage.getItem("deviceEnabled");

var deviceFrame = localStorage.getItem("deviceFrame");

var deviceModel = localStorage.getItem("deviceModel");

var deviceSystem = localStorage.getItem("deviceSystem");

var editorTheme = localStorage.getItem("editorTheme");

var enableAutocomplete = localStorage.getItem("enableAutocomplete");

var enrollmentKey = localStorage.getItem("enrollmentKey");

var enrollmentPolicy = localStorage.getItem("enrollmentPolicy");

var enrollmentAddress = localStorage.getItem("enrollmentAddress");

var experimentalFeatures = localStorage.getItem("experimentalFeatures");

var fontSize = localStorage.getItem("fontSize");

var isDeveloper = localStorage.getItem("isDeveloper");

var isMac = localStorage.getItem("isMac");

var linuxEnabled = localStorage.getItem("linuxEnabled");

var loginAccess = localStorage.getItem("loginAccess");

var loginKey = localStorage.getItem("loginKey");

var offlineMode = localStorage.getItem("offlineMode");

var primaryColor = localStorage.getItem("primaryColor");

var renderComponent = localStorage.getItem("renderComponent");

var renderSizeHeight = localStorage.getItem("renderSizeHeight");

var renderSizeWidth = localStorage.getItem("renderSizeWidth");

var secondaryColor = localStorage.getItem("secondaryColor");

var showConsole = localStorage.getItem("showConsole");

var showDeviceGUI = localStorage.getItem("showDeviceGUI");

var startFullscreen = localStorage.getItem("startFullscreen");

var touchscreenMode = localStorage.getItem("touchscreenMode");

var uiTheme = localStorage.getItem("uiTheme");

var useProductSans = localStorage.getItem("useProductSans");

var viewOnly = localStorage.getItem("viewOnly");




function linuxDisabled() {
    parent.alert("Linux features have been disabled by your administrator")
}
//Actual if statements

//allowLinux
if (allowLinux == 'true') {
    //alert("Linux enabled")
    
    document.getElementById("linuxOptin").innerHTML = '<button class="btn-material" onclick="enableLinux()"> Enable Linux </button>';
}
else if (allowLinux == 'false') {
    //alert("Linux features have been disabled by your administrator");
    
    document.getElementById("linuxOptin").innerHTML = '<button class="btn-material" onclick="linuxDisabled()"> Enable Linux </button>';
    
    
    
}
else {
        alert("The current value for policy allowLinux is invalid.")
    }


//allowSharing
if (allowSharing == 'true') {
    //alert("Sharing enabled")
    
    
}
else if (allowSharing == 'false') {
    //alert("Sharing has been disabled by your administrator")
     parent.document.getElementById("share").innerHTML = ' ';
    
}
else {
        alert("The current value for policy allowSharing is invalid.")
    }


//baseMode

if (baseMode == 'true') {
    //alert("baseMode enabled")
    grayset();
    parent.document.getElementById("toolbar").innerHTML = ' ';
    parent.document.getElementById("emulator").innerHTML = " ";
    parent.document.getElementById("tabs").style.display = "none";
    parent.document.getElementById("tabscontent").style.display = "none";
    parent.document.getElementById("editor").style.width = "100vw";
    
}
else if (baseMode == 'false') {
    //alert("baseMode has been disabled by your administrator")
    
    
    
}
else {
        alert("The current value for policy baseMode is invalid.")
    }


//customBuild
if (customBuild == 'true') {
   
    //alert("customBuild enabled")
    document.getElementById("updstat").innerHTML = '<i class="updicon-err material-icons">warning</i>'
    
}
else if (customBuild == 'false') {
    //alert("customBuild has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy customBuild is invalid.")
    }


//demoMode
if (demoMode == 'true') {
    //alert("demoMode enabled")
     parent.document.write("demo mode enabled")
}
else if (demoMode == 'false') {
    alert("demoMode has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy demoMode is invalid.")
    }


//devConsole
if (devConsole == 'true') {
   // alert("devConsole enabled")
    
    
}
else if (devConsole == 'false') {
    //alert("devConsole has been disabled by your administrator")
    parent.document.getElementById("console").innerHTML = '';
    
}
else {
        alert("The current value for policy devConsole is invalid.")
    }


//deviceEnabled
if (deviceEnabled == 'true') {
    //alert("deviceEnable enabled")
    
    
}
else if (deviceEnabled == 'false') {
    //alert("deviceEnabled has been disabled by your administrator")
    parent.document.getElementById("emulator").innerHTML = " ";
    parent.document.getElementById("editor").style.width = "80vw";
}
else {
        alert("The current value for policy deviceEnabled is invalid.")
    }


//deviceFrame
if (deviceFrame == 'true') {
    //alert("deviceFrame enabled")
    
    
}
else if (deviceFrame == 'false') {
   // alert("deviceFrame has been disabled by your administrator")
    parent.document.getElementById("phone").innerHTML = '<iframe id="frame" class="phrame" src="open.html"></iframe>';
    
}
else {
        alert("The current value for policy deviceFrame is invalid.")
    }


//deviceModel
if (deviceModel == 'true') {
    alert("deviceModel enabled")
    
    
}
else if (deviceModel == 'false') {
    alert("deviceModel has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy deviceModel is invalid.")
    }

//deviceSystem
if (deviceSystem == 'true') {
    alert("deviceSystem enabled")
    
    
}
else if (deviceSystem == 'false') {
    alert("deviceSystem has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy deviceSystem is invalid.")
    }

//editorTheme
if (editorTheme == 'true') {
    alert("editorTheme enabled")
    
    
}
else if (editorTheme == 'false') {
    alert("editorTheme has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy editorTheme is invalid.")
    }

//enableAutocomplete
if (enableAutocomplete == 'true') {
    alert("enableAutocomplete enabled")
    
    
}
else if (enableAutocomplete == 'false') {
    alert("enableAutocomplete has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy enableAutocomplete is invalid.")
    }

//enrollmentKey
if (enrollmentKey == 'true') {
    alert("enrollmentKey enabled")
    
    
}
else if (enrollmentKey == 'false') {
    alert("enrollmentKey has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy enrollmentKey is invalid.")
    }

//enrollmentPolicy
if (enrollmentPolicy == 'true') {
    alert("enrollmentPolicy enabled")
    
    
}
else if (enrollmentPolicy == 'false') {
    alert("enrollmentPolicy has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy enrollmentPolicy is invalid.")
    }

//enrollmentAddress
if (enrollmentAddress == 'true') {
    alert("enrollmentAddress enabled")
    
    
}
else if (enrollmentAddress == 'false') {
    alert("enrollmentAddress has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy enrollmentAddress is invalid.")
    }

//experimentalFeatures
if (experimentalFeatures == 'true') {
    alert("experimentalFeatures enabled")
    
    
}
else if (experimentalFeatures == 'false') {
    alert("experimentalFeatures has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy experimentalFeatures is invalid.")
    }

//fontSize
if (fontSize == 'true') {
    alert("fontSize enabled")
    
    
}
else if (fontSize == 'false') {
    alert("fontSize has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy fontSize is invalid.")
    }

//isDeveloper
if (isDeveloper == 'true') {
    alert("isDeveloper enabled")
    
    
}
else if (isDeveloper == 'false') {
    alert("isDeveloper has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy isDeveloper is invalid.")
    }



//linuxEnabled
if (linuxEnabled == 'true') {
    alert("linuxEnabled enabled")
    
    
}
else if (linuxEnabled == 'false') {
    alert("linuxEnabled has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy linuxEnabled is invalid.")
    }

//loginAccess
if (loginAccess == 'true') {
    alert("loginAccess enabled")
    
    
}
else if (loginAccess == 'false') {
    alert("loginAccess has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy loginAccess is invalid.")
    }

//loginKey
if (loginKey == 'true') {
    alert("loginKey enabled")
    
    
}
else if (loginKey == 'false') {
    alert("loginKey has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy loginKey is invalid.")
    }

//offlineMode
if (offlineMode == 'true') {
    alert("offlineMode enabled")
    
    
}
else if (offlineMode == 'false') {
    alert("offlineMode has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy offlineMode is invalid.")
    }

//primaryColor
if (primaryColor == 'true') {
    alert("primaryColor enabled")
    
    
}
else if (primaryColor == 'false') {
    alert("primaryColor has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy primaryColor is invalid.")
    }

//renderComponent
if (renderComponent == 'true') {
    alert("renderComponent enabled")
    
    
}
else if (renderComponent == 'false') {
    alert("renderComponent has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy renderComponent is invalid.")
    }

//renderSizeHeight
if (renderSizeHeight == 'true') {
    alert("renderSizeHeight enabled")
    
    
}
else if (renderSizeHeight == 'false') {
    alert("renderSizeHeight has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy renderSizeHeight is invalid.")
    }

//renderSizeWidth
if (renderSizeWidth == 'true') {
    alert("renderSizeWidth enabled")
    
    
}
else if (renderSizeWidth == 'false') {
    alert("renderSizeWidth has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy renderSizeWidth is invalid.")
    }

//secondaryColor
if (secondaryColor == 'true') {
    alert("secondaryColor enabled")
    
    
}
else if (secondaryColor == 'false') {
    alert("secondaryColor has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy secondaryColor is invalid.")
    }

//showDeviceGUI
if (showDeviceGUI == 'true') {
    alert("showDeviceGUI enabled")
    
    
}
else if (showDeviceGUI == 'false') {
    alert("showDeviceGUI has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy showDeviceGUI is invalid.")
    }

//startFullscreen
if (startFullscreen == 'true') {
    alert("startFullscreen enabled")
    
    
}
else if (startFullscreen == 'false') {
    alert("startFullscreen has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy startFullscreen is invalid.")
    }

//touchscreenMode
if (touchscreenMode == 'true') {
    alert("touchscreenMode enabled")
    
    
}
else if (touchscreenMode == 'false') {
    alert("touchscreenMode has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy touchscreenMode is invalid.")
    }

//uiTheme
if (uiTheme == 'true') {
    alert("uiTheme enabled")
    
    
}
else if (uiTheme == 'false') {
    alert("uiTheme has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy uiTheme is invalid.")
    }

//useProductSans
if (useProductSans == 'true') {
    alert("useProductSans enabled")
    
    
}
else if (useProductSans == 'false') {
    alert("useProductSans has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy useProductSans is invalid.")
    }

//viewOnly
if (viewOnly == 'true') {
    alert("viewOnly enabled")
    
    
}
else if (viewOnly == 'false') {
    alert("viewOnly has been disabled by your administrator")
    
    
}
else {
        alert("The current value for policy viewOnly is invalid.")
    
    }

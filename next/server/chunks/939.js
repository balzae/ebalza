"use strict";
exports.id = 939;
exports.ids = [939];
exports.modules = {

/***/ 1150:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ht": () => (/* binding */ getQuote),
/* harmony export */   "p": () => (/* binding */ getWeather)
/* harmony export */ });
/* unused harmony exports getProjects, getBio */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1181);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getProjects = async ()=>{
    const { data  } = await axios.get(`https://api.github.com/users/${config.social.github}/repos`);
    return data;
};
const getBio = async ()=>{
    const { data  } = await axios.get(config.bioUrl);
    return data;
};
const getWeather = async (city)=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get(`https://wttr.in/${city}?ATm`);
    return data;
};
const getQuote = async ()=>{
    const { data  } = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://api.quotable.io/random");
    return {
        quote: `“${data.content}” — ${data.author}`
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ about)
/* harmony export */ });
const about = async (args)=>{
    return `# Emanuele Balzaretti\n\n\n\n\n\n\n\n\n\n\n\nthere's nothing here... Type 'sudo'`;
};


/***/ }),

/***/ 4792:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ cowsay)
/* harmony export */ });
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6925);
/* harmony import */ var cowsay_browser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cowsay_browser__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_1__]);
_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const cowsay = async (args)=>{
    let output = "";
    if (args.length < 1 || args[0] === "") {
        const quote = (await (0,_api__WEBPACK_IMPORTED_MODULE_1__/* .getQuote */ .ht)()).quote;
        return cowsay_browser__WEBPACK_IMPORTED_MODULE_0__.say({
            text: quote
        });
    } else {
        output = args.join(" ");
        return cowsay_browser__WEBPACK_IMPORTED_MODULE_0__.say({
            text: output
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6761:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "about": () => (/* reexport safe */ _about__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   "banner": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.K_),
/* harmony export */   "cowsay": () => (/* reexport safe */ _cowsay__WEBPACK_IMPORTED_MODULE_7__.f),
/* harmony export */   "date": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.hT),
/* harmony export */   "echo": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.B9),
/* harmony export */   "emacs": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.wC),
/* harmony export */   "github": () => (/* reexport safe */ _social__WEBPACK_IMPORTED_MODULE_2__.b),
/* harmony export */   "help": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.R_),
/* harmony export */   "instagram": () => (/* reexport safe */ _social__WEBPACK_IMPORTED_MODULE_2__.C),
/* harmony export */   "neofetch": () => (/* reexport safe */ _neofetch__WEBPACK_IMPORTED_MODULE_6__.X),
/* harmony export */   "projects": () => (/* reexport safe */ _projects__WEBPACK_IMPORTED_MODULE_1__.q),
/* harmony export */   "repo": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.O9),
/* harmony export */   "sudo": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.Pm),
/* harmony export */   "theme": () => (/* reexport safe */ _theme__WEBPACK_IMPORTED_MODULE_3__.r),
/* harmony export */   "vi": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.vi),
/* harmony export */   "vim": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.dV),
/* harmony export */   "weather": () => (/* reexport safe */ _weather__WEBPACK_IMPORTED_MODULE_5__.R),
/* harmony export */   "whoami": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_4__.yp)
/* harmony export */ });
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1716);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var _social__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8831);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7427);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3099);
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1246);
/* harmony import */ var _neofetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2657);
/* harmony import */ var _cowsay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4792);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_4__, _weather__WEBPACK_IMPORTED_MODULE_5__, _cowsay__WEBPACK_IMPORTED_MODULE_7__]);
([_utils__WEBPACK_IMPORTED_MODULE_4__, _weather__WEBPACK_IMPORTED_MODULE_5__, _cowsay__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ neofetch)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4147);
/* harmony import */ var _themes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6876);



const macos = `
                    'c.
                 ,xNMM.
               .OMMMMo
               OMMM0,
     .;loddo:' loolloddol;.
   cKMMMMMMMMMMNWMMMMMMMMMM0:
 .KMMMMMMMMMMMMMMMMMMMMMMMWd.    
 XMMMMMMMMMMMMMMMMMMMMMMMX.      
;MMMMMMMMMMMMMMMMMMMMMMMM:       
:MMMMMMMMMMMMMMMMMMMMMMMM:       
.MMMMMMMMMMMMMMMMMMMMMMMMX.      
 kMMMMMMMMMMMMMMMMMMMMMMMMWd.    
 .XMMMMMMMMMMMMMMMMMMMMMMMMMMk   
  .XMMMMMMMMMMMMMMMMMMMMMMMMK.   
    kMMMMMMMMMMMMMMMMMMMMMMd     
     ;KMMMMMMMWXXWMMMMMMMk.      
       .cooc,.    .,coo:.        
`;
const windows = `
                                ..,
                    ....,,:;+ccllll
      ...,,+:;  cllllllllllllllllll
,cclllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
                                      
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
llllllllllllll  lllllllllllllllllll
\`'ccllllllllll  lllllllllllllllllll
       \`' \*::  :ccllllllllllllllll
                       \`\`\`\`''*::cll
`;
const linux = `
            .-/+oossssoo+/-.               
        \`:+ssssssssssssssssss+:\`           
      -+ssssssssssssssssssyyssss+-         
    .ossssssssssssssssssdMMMNysssso.       
   /ssssssssssshdmmNNmmyNMMMMhssssss/      
  +ssssssssshmydMMMMMMMNddddyssssssss+     
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/    
  +sssssssssdmydMMMMMMMMddddyssssssss+     
   /ssssssssssshdmNNNNmyNMMMMhssssss/      
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.
`;
const getPlatform = ()=>{
    let os = "Unknown";
    if (navigator.userAgent.indexOf("Win") != -1) {
        os = "Windows";
    }
    if (navigator.userAgent.indexOf("Mac") != -1) {
        os = "MacOS";
    }
    if (navigator.userAgent.indexOf("Linux") != -1) {
        os = "Linux";
    }
    return os;
};
const getMainColor = ()=>{
    const platform = getPlatform();
    const themeName = localStorage.getItem("theme");
    const theme = _themes_json__WEBPACK_IMPORTED_MODULE_2__.find((theme)=>theme.name.toLowerCase() === themeName);
    switch(platform){
        case "MacOS":
            return theme.cyan;
        case "Windows":
            return theme.blue;
        case "Linux":
            return theme.red;
    }
};
const getArt = ()=>{
    const platform = getPlatform();
    const mainColor = getMainColor();
    switch(platform){
        case "MacOS":
            return `<p style="color: ${mainColor}">${macos}</p>`;
        case "Windows":
            return `<p style="color: ${mainColor}">${windows}</p>`;
        case "Linux":
            return `<p style="color: ${mainColor}">${linux}</p>`;
    }
};
const getInfo = ()=>{
    const os = getPlatform();
    const visitedAt = new Date(localStorage.getItem("visitedAt") || new Date().toString());
    const hostname = window.location.hostname;
    const theme = localStorage.getItem("theme");
    const resolution = `${window.screen.availWidth}x${window.screen.availHeight}`;
    const packages = Object.keys(_package_json__WEBPACK_IMPORTED_MODULE_1__/* .dependencies */ .HO);
    const devPackages = Object.keys(_package_json__WEBPACK_IMPORTED_MODULE_1__/* .devDependencies */ .v6);
    const mainColor = getMainColor();
    let message = "";
    message += `<span style="color: ${mainColor}">Host</span>: ${hostname}\n`;
    message += `<span style="color: ${mainColor}">OS</span>: ${os}\n`;
    message += `<span style="color: ${mainColor}">Packages</span>: ${packages.length + devPackages.length} (npm)\n`;
    message += `<span style="color: ${mainColor}">Resolution</span>: ${resolution}\n`;
    message += `<span style="color: ${mainColor}">Shell</span>: ebalza-web\n`;
    message += `<span style="color: ${mainColor}">Theme</span>: ${theme}\n`;
    message += `<span style="color: ${mainColor}">License</span>: ${_package_json__WEBPACK_IMPORTED_MODULE_1__/* .license */ .Vl}\n`;
    message += `<span style="color: ${mainColor}">Version</span>: ${_package_json__WEBPACK_IMPORTED_MODULE_1__/* .version */ .i8}\n`;
    message += `<span style="color: ${mainColor}">Repo</span>: <a href="${_package_json__WEBPACK_IMPORTED_MODULE_1__/* .repository.url */ .cj.H}" target="_blank">${_package_json__WEBPACK_IMPORTED_MODULE_1__/* .repository.url */ .cj.H}</a>\n`;
    message += `<span style="color: ${mainColor}">Uptime</span>: ${(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.formatDistanceToNow)(visitedAt)}\n`;
    message += `<span style="color: ${mainColor}">Author</span>: ${_package_json__WEBPACK_IMPORTED_MODULE_1__/* .author.name */ .v.u2}\n`;
    return message;
};
const neofetch = async (args)=>{
    const art = getArt();
    const info = getInfo();
    return `
  <table>
    <tr>
      <td>${art}</td>
      <td>${info}</td>
    <tr>
  </table>
  `;
};


/***/ }),

/***/ 8103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ projects)
/* harmony export */ });
const projects = async (args)=>{
    return `<a class="text-light-blue dark:text-dark-blue underline" href="http://ebalza.ga" target="_blank">ebalza.ga</a> - il sito che stai visitando in questo momento\n<a class="text-light-blue dark:text-dark-blue underline" href="#" target="_blank">mandela.ml</a> - il mio primo sito, ora non disponibile sul web`;
};


/***/ }),

/***/ 8831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "C": () => (/* binding */ instagram),
/* harmony export */   "b": () => (/* binding */ github)
/* harmony export */ });
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1181);

const instagram = async (args)=>{
    window.open(`https://www.instagram.com/${_config_json__WEBPACK_IMPORTED_MODULE_0__/* .social.instagram */ .xs.C}/`);
    return "Opening instagram...";
};
const github = async (args)=>{
    window.open(`https://github.com/${_config_json__WEBPACK_IMPORTED_MODULE_0__/* .social.github */ .xs.b}/`);
    return "Opening github...";
};


/***/ }),

/***/ 7427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _themes_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6876);

const theme = async (args, callback)=>{
    if (args.length === 0) {
        return `Usage: theme [arg]
Args:
  - ls: list all themes
  - set: set a theme
  - random: set a random theme

Example: 
  theme ls # to list all themes
  theme set Gruvbox # to set a theme`;
    }
    switch(args[0]){
        case "ls":
            let result = _themes_json__WEBPACK_IMPORTED_MODULE_0__.map((theme)=>theme.name.toLowerCase()).join(", ");
            result += "\n\n";
            return result;
        case "set":
            const selectedTheme = args[1];
            return callback(selectedTheme);
        case "random":
            const randomTheme = _themes_json__WEBPACK_IMPORTED_MODULE_0__[Math.floor(Math.random() * _themes_json__WEBPACK_IMPORTED_MODULE_0__.length)];
            return callback(randomTheme.name.toLowerCase());
    }
};


/***/ }),

/***/ 3099:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B9": () => (/* binding */ echo),
/* harmony export */   "K_": () => (/* binding */ banner),
/* harmony export */   "O9": () => (/* binding */ repo),
/* harmony export */   "Pm": () => (/* binding */ sudo),
/* harmony export */   "R_": () => (/* binding */ help),
/* harmony export */   "dV": () => (/* binding */ vim),
/* harmony export */   "hT": () => (/* binding */ date),
/* harmony export */   "vi": () => (/* binding */ vi),
/* harmony export */   "wC": () => (/* binding */ emacs),
/* harmony export */   "yp": () => (/* binding */ whoami)
/* harmony export */ });
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4147);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6761);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_index__WEBPACK_IMPORTED_MODULE_1__]);
_index__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const help = async (args)=>{
    const commands = Object.keys(_index__WEBPACK_IMPORTED_MODULE_1__).sort().join(", ");
    return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};
const echo = async (args, callback)=>{
    if (args.length === 0) {
        return ``;
    }
    switch(args[0]){
        case "bozo":
            setTimeout(function() {
                window.open("https://ebalza.ga/hellobozo", "_blank");
            }, 1000);
            return "Opening /hellobozo...";
        case "help":
            return "bozo, grammar, xmas, copy, org";
        case "grammar":
            setTimeout(function() {
                window.open("https://ebalza.ga/grammarfiles", "_blank");
            }, 1000);
            return "Opening /grammarfiles...";
        case "xmas":
            setTimeout(function() {
                window.open("https://ebalza.ga/projects/xmas", "_blank");
            }, 1000);
            return "Opening /xmas...";
        case "copy":
            setTimeout(function() {
                window.open("https://github.com/m4tt72/terminal", "_blank");
            }, 1000);
            return "Opening github...";
        case "org":
            return "&copy Eveximus. ";
    }
};
const whoami = async (args)=>{
    return "guest";
};
const date = async (args)=>{
    return new Date().toString();
};
const vi = async (args)=>{
    return `why use vi? try 'emacs'.`;
};
const vim = async (args)=>{
    return `why use vim? try 'emacs'.`;
};
const emacs = async (args)=>{
    return `really? emacs? you should be using 'vim'`;
};
const sudo = async (args)=>{
    setTimeout(function() {
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    }, 1000);
    return `Permission denied: unable to run the command '${args[0]}' as root.`;
};
const repo = async (args)=>{
    setTimeout(function() {
        window.open("https://github.com/balzae/ebalza", "_blank");
    }, 1000);
    return "Opening repository...";
};
const banner = (args)=>{
    return `
███████╗██████╗  █████╗ ██╗     ███████╗ █████╗ 
██╔════╝██╔══██╗██╔══██╗██║     ╚══███╔╝██╔══██╗
█████╗  ██████╔╝███████║██║       ███╔╝ ███████║
██╔══╝  ██╔══██╗██╔══██║██║      ███╔╝  ██╔══██║
███████╗██████╔╝██║  ██║███████╗███████╗██║  ██║
╚══════╝╚═════╝ ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝  ╚═╝ <a href="https://www.youtube.com/watch?v=OjNpRbNdR7E" target="_blank">v</a><a href="#" target="_blank">${_package_json__WEBPACK_IMPORTED_MODULE_0__/* .version */ .i8}</a>

Type 'help' to see list of available commands.

`;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1246:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ weather)
/* harmony export */ });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1150);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);
_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const weather = async (args)=>{
    const city = args.join("+");
    if (!city) {
        return "Usage:\n - weather [city]\n - weather [city] [country] \n\nExample:\n weather london\n weather london kiribati ";
    }
    const weather = await (0,_api__WEBPACK_IMPORTED_MODULE_0__/* .getWeather */ .p)(city);
    return weather;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 939:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useShell),
/* harmony export */   "j": () => (/* binding */ ShellProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _bin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6761);
/* harmony import */ var _themeProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_bin__WEBPACK_IMPORTED_MODULE_2__]);
_bin__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const ShellContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);
const useShell = ()=>react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ShellContext);
const ShellProvider = ({ children  })=>{
    const [init, setInit] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);
    const [history, _setHistory] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);
    const [command, _setCommand] = react__WEBPACK_IMPORTED_MODULE_1___default().useState("");
    const [lastCommandIndex, _setLastCommandIndex] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(0);
    const { theme , setTheme  } = (0,_themeProvider__WEBPACK_IMPORTED_MODULE_3__/* .useTheme */ .F)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCommand("banner");
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (!init) {
            execute();
        }
    }, [
        command,
        init
    ]);
    const setHistory = (output)=>{
        _setHistory([
            ...history,
            {
                id: history.length,
                date: new Date(),
                command: command.split(" ").slice(1).join(" "),
                output
            }
        ]);
    };
    const setCommand = (command)=>{
        _setCommand([
            Date.now(),
            command
        ].join(" "));
        setInit(false);
    };
    const clearHistory = ()=>{
        _setHistory([]);
    };
    const setLastCommandIndex = (index)=>{
        _setLastCommandIndex(index);
    };
    const execute = async ()=>{
        const [cmd, ...args] = command.split(" ").slice(1);
        switch(cmd){
            case "theme":
                const output = await _bin__WEBPACK_IMPORTED_MODULE_2__.theme(args, setTheme);
                setHistory(output);
                break;
            case "clear":
                clearHistory();
                break;
            case "":
                setHistory("");
                break;
            default:
                {
                    if (Object.keys(_bin__WEBPACK_IMPORTED_MODULE_2__).indexOf(cmd) === -1) {
                        setHistory(`Command not found: ${cmd}. Try 'help' to get started.`);
                    } else {
                        try {
                            const output = await _bin__WEBPACK_IMPORTED_MODULE_2__[cmd](args);
                            setHistory(output);
                        } catch (error) {
                            setHistory(error.message);
                        }
                    }
                }
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ShellContext.Provider, {
        value: {
            history,
            command,
            lastCommandIndex,
            setHistory,
            setCommand,
            setLastCommandIndex,
            execute,
            clearHistory
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useTheme),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _themes_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6876);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1181);




const ThemeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext(null);
const useTheme = ()=>react__WEBPACK_IMPORTED_MODULE_1___default().useContext(ThemeContext);
const ThemeProvider = ({ children  })=>{
    const [theme, _setTheme] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_themes_json__WEBPACK_IMPORTED_MODULE_2__[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const savedTheme = localStorage.getItem("theme");
        setTheme(savedTheme || _config_json__WEBPACK_IMPORTED_MODULE_3__/* .theme */ .rS);
    }, []);
    const setTheme = (name)=>{
        const index = _themes_json__WEBPACK_IMPORTED_MODULE_2__.findIndex((colorScheme)=>colorScheme.name.toLowerCase() === name);
        if (index === -1) {
            return `Theme '${name}' not found. Try 'theme ls' to see the list of available themes.`;
        }
        _setTheme(_themes_json__WEBPACK_IMPORTED_MODULE_2__[index]);
        localStorage.setItem("theme", name);
        return `Theme ${_themes_json__WEBPACK_IMPORTED_MODULE_2__[index].name} set successfully!`;
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            theme,
            setTheme
        },
        children: children
    });
};


/***/ }),

/***/ 1181:
/***/ ((module) => {

module.exports = JSON.parse('{"xs":{"C":"ebalza_","b":"balzae"},"rS":"gruvboxdark","Cg":true}');

/***/ }),

/***/ 4147:
/***/ ((module) => {

module.exports = JSON.parse('{"i8":"3.0","Vl":"MIT","v":{"u2":"Emanuele Balzaretti"},"cj":{"H":"https://github.com/balzae/ebalza"},"HO":{"@m4tt72/matomo-tracker-react":"^0.6.2","axios":"^1.3.2","cowsay-browser":"^1.1.8","date-fns":"^2.28.0","next":"^13.1.6","react":"^18.1.0","react-dom":"^18.1.0","react-icons":"^4.7.1"},"v6":{"@types/node":"^18.11.19","@types/react":"^18.0.27","@typescript-eslint/eslint-plugin":"^5.50.0","@typescript-eslint/parser":"^5.50.0","autoprefixer":"^10.4.13","eslint":"8.33.0","eslint-config-next":"^13.1.6","eslint-plugin-next":"^0.0.0","eslint-plugin-prettier":"^4.2.1","eslint-plugin-react":"^7.32.2","husky":"^8.0.3","postcss":"^8.4.21","prettier":"^2.8.3","tailwindcss":"^3.2.4","typescript":"^4.9.5"}}');

/***/ }),

/***/ 6876:
/***/ ((module) => {

module.exports = JSON.parse('[{"name":"3024Day","black":"#090300","red":"#db2d20","green":"#01a252","yellow":"#fded02","blue":"#01a0e4","purple":"#a16a94","cyan":"#b5e4f4","white":"#a5a2a2","brightBlack":"#5c5855","brightRed":"#e8bbd0","brightGreen":"#3a3432","brightYellow":"#4a4543","brightBlue":"#807d7c","brightPurple":"#d6d5d4","brightCyan":"#cdab53","brightWhite":"#f7f7f7","foreground":"#4a4543","background":"#f7f7f7","cursorColor":"#4a4543"},{"name":"3024Night","black":"#090300","red":"#db2d20","green":"#01a252","yellow":"#fded02","blue":"#01a0e4","purple":"#a16a94","cyan":"#b5e4f4","white":"#a5a2a2","brightBlack":"#5c5855","brightRed":"#e8bbd0","brightGreen":"#3a3432","brightYellow":"#4a4543","brightBlue":"#807d7c","brightPurple":"#d6d5d4","brightCyan":"#cdab53","brightWhite":"#f7f7f7","foreground":"#a5a2a2","background":"#090300","cursorColor":"#a5a2a2"},{"name":"Aci","black":"#363636","red":"#ff0883","green":"#83ff08","yellow":"#ff8308","blue":"#0883ff","purple":"#8308ff","cyan":"#08ff83","white":"#b6b6b6","brightBlack":"#424242","brightRed":"#ff1e8e","brightGreen":"#8eff1e","brightYellow":"#ff8e1e","brightBlue":"#1e8eff","brightPurple":"#8e1eff","brightCyan":"#1eff8e","brightWhite":"#c2c2c2","foreground":"#b4e1fd","background":"#0d1926","cursorColor":"#b4e1fd"},{"name":"Aco","black":"#3f3f3f","red":"#ff0883","green":"#83ff08","yellow":"#ff8308","blue":"#0883ff","purple":"#8308ff","cyan":"#08ff83","white":"#bebebe","brightBlack":"#474747","brightRed":"#ff1e8e","brightGreen":"#8eff1e","brightYellow":"#ff8e1e","brightBlue":"#1e8eff","brightPurple":"#8e1eff","brightCyan":"#1eff8e","brightWhite":"#c4c4c4","foreground":"#b4e1fd","background":"#1f1305","cursorColor":"#b4e1fd"},{"name":"AdventureTime","black":"#050404","red":"#bd0013","green":"#4ab118","yellow":"#e7741e","blue":"#0f4ac6","purple":"#665993","cyan":"#70a598","white":"#f8dcc0","brightBlack":"#4e7cbf","brightRed":"#fc5f5a","brightGreen":"#9eff6e","brightYellow":"#efc11a","brightBlue":"#1997c6","brightPurple":"#9b5953","brightCyan":"#c8faf4","brightWhite":"#f6f5fb","foreground":"#f8dcc0","background":"#1f1d45","cursorColor":"#f8dcc0"},{"name":"Afterglow","black":"#151515","red":"#a53c23","green":"#7b9246","yellow":"#d3a04d","blue":"#6c99bb","purple":"#9f4e85","cyan":"#7dd6cf","white":"#d0d0d0","brightBlack":"#505050","brightRed":"#a53c23","brightGreen":"#7b9246","brightYellow":"#d3a04d","brightBlue":"#547c99","brightPurple":"#9f4e85","brightCyan":"#7dd6cf","brightWhite":"#f5f5f5","foreground":"#d0d0d0","background":"#222222","cursorColor":"#d0d0d0"},{"name":"AlienBlood","black":"#112616","red":"#7f2b27","green":"#2f7e25","yellow":"#717f24","blue":"#2f6a7f","purple":"#47587f","cyan":"#327f77","white":"#647d75","brightBlack":"#3c4812","brightRed":"#e08009","brightGreen":"#18e000","brightYellow":"#bde000","brightBlue":"#00aae0","brightPurple":"#0058e0","brightCyan":"#00e0c4","brightWhite":"#73fa91","foreground":"#637d75","background":"#0f1610","cursorColor":"#637d75"},{"name":"Argonaut","black":"#232323","red":"#ff000f","green":"#8ce10b","yellow":"#ffb900","blue":"#008df8","purple":"#6d43a6","cyan":"#00d8eb","white":"#ffffff","brightBlack":"#444444","brightRed":"#ff2740","brightGreen":"#abe15b","brightYellow":"#ffd242","brightBlue":"#0092ff","brightPurple":"#9a5feb","brightCyan":"#67fff0","brightWhite":"#ffffff","foreground":"#fffaf4","background":"#0e1019","cursorColor":"#fffaf4"},{"name":"Arthur","black":"#3d352a","red":"#cd5c5c","green":"#86af80","yellow":"#e8ae5b","blue":"#6495ed","purple":"#deb887","cyan":"#b0c4de","white":"#bbaa99","brightBlack":"#554444","brightRed":"#cc5533","brightGreen":"#88aa22","brightYellow":"#ffa75d","brightBlue":"#87ceeb","brightPurple":"#996600","brightCyan":"#b0c4de","brightWhite":"#ddccbb","foreground":"#ddeedd","background":"#1c1c1c","cursorColor":"#ddeedd"},{"name":"Atom","black":"#000000","red":"#fd5ff1","green":"#87c38a","yellow":"#ffd7b1","blue":"#85befd","purple":"#b9b6fc","cyan":"#85befd","white":"#e0e0e0","brightBlack":"#000000","brightRed":"#fd5ff1","brightGreen":"#94fa36","brightYellow":"#f5ffa8","brightBlue":"#96cbfe","brightPurple":"#b9b6fc","brightCyan":"#85befd","brightWhite":"#e0e0e0","foreground":"#c5c8c6","background":"#161719","cursorColor":"#c5c8c6"},{"name":"Aura","black":"#110f18","red":"#ff6767","green":"#61ffca","yellow":"#ffca85","blue":"#a277ff","purple":"#a277ff","cyan":"#61ffca","white":"#edecee","brightBlack":"#6d6d6d","brightRed":"#ffca85","brightGreen":"#a277ff","brightYellow":"#ffca85","brightBlue":"#a277ff","brightPurple":"#a277ff","brightCyan":"#61ffca","brightWhite":"#edecee","foreground":"#edecee","background":"#15141B","cursorColor":"#edecee"},{"name":"AyuDark","black":"#0A0E14","red":"#FF3333","green":"#C2D94C","yellow":"#FF8F40","blue":"#59C2FF","purple":"#FFEE99","cyan":"#95E6CB","white":"#B3B1AD","brightBlack":"#4D5566","brightRed":"#FF3333","brightGreen":"#C2D94C","brightYellow":"#FF8F40","brightBlue":"#59C2FF","brightPurple":"#FFEE99","brightCyan":"#95E6CB","brightWhite":"#B3B1AD","foreground":"#B3B1AD","background":"#0A0E14","cursorColor":"#E6B450"},{"name":"AyuLight","black":"#575F66","red":"#F51818","green":"#86B300","yellow":"#F2AE49","blue":"#399EE6","purple":"#A37ACC","cyan":"#4CBF99","white":"#FAFAFA","brightBlack":"#8A9199","brightRed":"#F51818","brightGreen":"#86B300","brightYellow":"#F2AE49","brightBlue":"#399EE6","brightPurple":"#A37ACC","brightCyan":"#4CBF99","brightWhite":"#FAFAFA","foreground":"#575F66","background":"#FAFAFA","cursorColor":"#FF9940"},{"name":"AyuMirage","black":"#1F2430","red":"#FF3333","green":"#BAE67E","yellow":"#FFA759","blue":"#73D0FF","purple":"#D4BFFF","cyan":"#95E6CB","white":"#CBCCC6","brightBlack":"#707A8C","brightRed":"#FF3333","brightGreen":"#BAE67E","brightYellow":"#FFA759","brightBlue":"#73D0FF","brightPurple":"#D4BFFF","brightCyan":"#95E6CB","brightWhite":"#CBCCC6","foreground":"#CBCCC6","background":"#1F2430","cursorColor":"#FFCC66"},{"name":"Azu","black":"#000000","red":"#ac6d74","green":"#74ac6d","yellow":"#aca46d","blue":"#6d74ac","purple":"#a46dac","cyan":"#6daca4","white":"#e6e6e6","brightBlack":"#262626","brightRed":"#d6b8bc","brightGreen":"#bcd6b8","brightYellow":"#d6d3b8","brightBlue":"#b8bcd6","brightPurple":"#d3b8d6","brightCyan":"#b8d6d3","brightWhite":"#ffffff","foreground":"#d9e6f2","background":"#09111a","cursorColor":"#d9e6f2"},{"name":"BelafonteDay","black":"#20111b","red":"#be100e","green":"#858162","yellow":"#eaa549","blue":"#426a79","purple":"#97522c","cyan":"#989a9c","white":"#968c83","brightBlack":"#5e5252","brightRed":"#be100e","brightGreen":"#858162","brightYellow":"#eaa549","brightBlue":"#426a79","brightPurple":"#97522c","brightCyan":"#989a9c","brightWhite":"#d5ccba","foreground":"#45373c","background":"#d5ccba","cursorColor":"#45373c"},{"name":"BelafonteNight","black":"#20111b","red":"#be100e","green":"#858162","yellow":"#eaa549","blue":"#426a79","purple":"#97522c","cyan":"#989a9c","white":"#968c83","brightBlack":"#5e5252","brightRed":"#be100e","brightGreen":"#858162","brightYellow":"#eaa549","brightBlue":"#426a79","brightPurple":"#97522c","brightCyan":"#989a9c","brightWhite":"#d5ccba","foreground":"#968c83","background":"#20111b","cursorColor":"#968c83"},{"name":"Bim","black":"#2c2423","red":"#f557a0","green":"#a9ee55","yellow":"#f5a255","blue":"#5ea2ec","purple":"#a957ec","cyan":"#5eeea0","white":"#918988","brightBlack":"#918988","brightRed":"#f579b2","brightGreen":"#bbee78","brightYellow":"#f5b378","brightBlue":"#81b3ec","brightPurple":"#bb79ec","brightCyan":"#81eeb2","brightWhite":"#f5eeec","foreground":"#a9bed8","background":"#012849","cursorColor":"#a9bed8"},{"name":"BirdsOfParadise","black":"#573d26","red":"#be2d26","green":"#6ba18a","yellow":"#e99d2a","blue":"#5a86ad","purple":"#ac80a6","cyan":"#74a6ad","white":"#e0dbb7","brightBlack":"#9b6c4a","brightRed":"#e84627","brightGreen":"#95d8ba","brightYellow":"#d0d150","brightBlue":"#b8d3ed","brightPurple":"#d19ecb","brightCyan":"#93cfd7","brightWhite":"#fff9d5","foreground":"#e0dbb7","background":"#2a1f1d","cursorColor":"#e0dbb7"},{"name":"Blazer","black":"#000000","red":"#b87a7a","green":"#7ab87a","yellow":"#b8b87a","blue":"#7a7ab8","purple":"#b87ab8","cyan":"#7ab8b8","white":"#d9d9d9","brightBlack":"#262626","brightRed":"#dbbdbd","brightGreen":"#bddbbd","brightYellow":"#dbdbbd","brightBlue":"#bdbddb","brightPurple":"#dbbddb","brightCyan":"#bddbdb","brightWhite":"#ffffff","foreground":"#d9e6f2","background":"#0d1926","cursorColor":"#d9e6f2"},{"name":"BlulocoLight","black":"#d5d6dd","red":"#d52753","green":"#23974a","yellow":"#df631c","blue":"#275fe4","purple":"#823ff1","cyan":"#27618d","white":"#000000","brightBlack":"#e4e5ed","brightRed":"#ff6480","brightGreen":"#3cbc66","brightYellow":"#c5a332","brightBlue":"#0099e1","brightPurple":"#ce33c0","brightCyan":"#6d93bb","brightWhite":"#26272d","foreground":"#383a42","background":"#f9f9f9","cursorColor":"#383a42"},{"name":"BlulocoZshLight","black":"#e4e5f1","red":"#d52753","green":"#23974a","yellow":"#df631c","blue":"#275fe4","purple":"#823ff1","cyan":"#27618d","white":"#000000","brightBlack":"#5794de","brightRed":"#ff6480","brightGreen":"#3cbc66","brightYellow":"#c5a332","brightBlue":"#0099e1","brightPurple":"#ce33c0","brightCyan":"#6d93bb","brightWhite":"#26272d","foreground":"#383a42","background":"#f9f9f9","cursorColor":"#383a42"},{"name":"Borland","black":"#4f4f4f","red":"#ff6c60","green":"#a8ff60","yellow":"#ffffb6","blue":"#96cbfe","purple":"#ff73fd","cyan":"#c6c5fe","white":"#eeeeee","brightBlack":"#7c7c7c","brightRed":"#ffb6b0","brightGreen":"#ceffac","brightYellow":"#ffffcc","brightBlue":"#b5dcff","brightPurple":"#ff9cfe","brightCyan":"#dfdffe","brightWhite":"#ffffff","foreground":"#ffff4e","background":"#0000a4","cursorColor":"#ffff4e"},{"name":"Broadcast","black":"#000000","red":"#da4939","green":"#519f50","yellow":"#ffd24a","blue":"#6d9cbe","purple":"#d0d0ff","cyan":"#6e9cbe","white":"#ffffff","brightBlack":"#323232","brightRed":"#ff7b6b","brightGreen":"#83d182","brightYellow":"#ffff7c","brightBlue":"#9fcef0","brightPurple":"#ffffff","brightCyan":"#a0cef0","brightWhite":"#ffffff","foreground":"#e6e1dc","background":"#2b2b2b","cursorColor":"#e6e1dc"},{"name":"Brogrammer","black":"#1f1f1f","red":"#f81118","green":"#2dc55e","yellow":"#ecba0f","blue":"#2a84d2","purple":"#4e5ab7","cyan":"#1081d6","white":"#d6dbe5","brightBlack":"#d6dbe5","brightRed":"#de352e","brightGreen":"#1dd361","brightYellow":"#f3bd09","brightBlue":"#1081d6","brightPurple":"#5350b9","brightCyan":"#0f7ddb","brightWhite":"#ffffff","foreground":"#d6dbe5","background":"#131313","cursorColor":"#d6dbe5"},{"name":"C64","black":"#090300","red":"#883932","green":"#55a049","yellow":"#bfce72","blue":"#40318d","purple":"#8b3f96","cyan":"#67b6bd","white":"#ffffff","brightBlack":"#000000","brightRed":"#883932","brightGreen":"#55a049","brightYellow":"#bfce72","brightBlue":"#40318d","brightPurple":"#8b3f96","brightCyan":"#67b6bd","brightWhite":"#f7f7f7","foreground":"#7869c4","background":"#40318d","cursorColor":"#7869c4"},{"name":"Cai","black":"#000000","red":"#ca274d","green":"#4dca27","yellow":"#caa427","blue":"#274dca","purple":"#a427ca","cyan":"#27caa4","white":"#808080","brightBlack":"#808080","brightRed":"#e98da3","brightGreen":"#a3e98d","brightYellow":"#e9d48d","brightBlue":"#8da3e9","brightPurple":"#d48de9","brightCyan":"#8de9d4","brightWhite":"#ffffff","foreground":"#d9e6f2","background":"#09111a","cursorColor":"#d9e6f2"},{"name":"Chalk","black":"#646464","red":"#F58E8E","green":"#A9D3AB","yellow":"#FED37E","blue":"#7AABD4","purple":"#D6ADD5","cyan":"#79D4D5","white":"#D4D4D4","brightBlack":"#646464","brightRed":"#F58E8E","brightGreen":"#A9D3AB","brightYellow":"#FED37E","brightBlue":"#7AABD4","brightPurple":"#D6ADD5","brightCyan":"#79D4D5","brightWhite":"#D4D4D4","foreground":"#D4D4D4","background":"#2D2D2D","cursorColor":"#D4D4D4"},{"name":"Chalkboard","black":"#000000","red":"#c37372","green":"#72c373","yellow":"#c2c372","blue":"#7372c3","purple":"#c372c2","cyan":"#72c2c3","white":"#d9d9d9","brightBlack":"#323232","brightRed":"#dbaaaa","brightGreen":"#aadbaa","brightYellow":"#dadbaa","brightBlue":"#aaaadb","brightPurple":"#dbaada","brightCyan":"#aadadb","brightWhite":"#ffffff","foreground":"#d9e6f2","background":"#29262f","cursorColor":"#d9e6f2"},{"name":"Chameleon","black":"#2C2C2C","red":"#CC231C","green":"#689D69","yellow":"#D79922","blue":"#366B71","purple":"#4E5165","cyan":"#458587","white":"#C8BB97","brightBlack":"#777777","brightRed":"#CC231C","brightGreen":"#689D69","brightYellow":"#D79922","brightBlue":"#366B71","brightPurple":"#4E5165","brightCyan":"#458587","brightWhite":"#C8BB97","foreground":"#DEDEDE","background":"#2C2C2C","cursorColor":"#DEDEDE"},{"name":"Ciapre","black":"#181818","red":"#810009","green":"#48513b","yellow":"#cc8b3f","blue":"#576d8c","purple":"#724d7c","cyan":"#5c4f4b","white":"#aea47f","brightBlack":"#555555","brightRed":"#ac3835","brightGreen":"#a6a75d","brightYellow":"#dcdf7c","brightBlue":"#3097c6","brightPurple":"#d33061","brightCyan":"#f3dbb2","brightWhite":"#f4f4f4","foreground":"#aea47a","background":"#191c27","cursorColor":"#aea47a"},{"name":"CloneofUbuntu","black":"#2E3436","red":"#CC0000","green":"#4E9A06","yellow":"#C4A000","blue":"#3465A4","purple":"#75507B","cyan":"#06989A","white":"#D3D7CF","brightBlack":"#555753","brightRed":"#EF2929","brightGreen":"#8AE234","brightYellow":"#FCE94F","brightBlue":"#729FCF","brightPurple":"#AD7FA8","brightCyan":"#34E2E2","brightWhite":"#EEEEEC","foreground":"#ffffff","background":"#300a24","cursorColor":"#ffffff"},{"name":"CLRS","black":"#000000","red":"#f8282a","green":"#328a5d","yellow":"#fa701d","blue":"#135cd0","purple":"#9f00bd","cyan":"#33c3c1","white":"#b3b3b3","brightBlack":"#555753","brightRed":"#fb0416","brightGreen":"#2cc631","brightYellow":"#fdd727","brightBlue":"#1670ff","brightPurple":"#e900b0","brightCyan":"#3ad5ce","brightWhite":"#eeeeec","foreground":"#262626","background":"#ffffff","cursorColor":"#262626"},{"name":"CobaltNeon","black":"#142631","red":"#ff2320","green":"#3ba5ff","yellow":"#e9e75c","blue":"#8ff586","purple":"#781aa0","cyan":"#8ff586","white":"#ba46b2","brightBlack":"#fff688","brightRed":"#d4312e","brightGreen":"#8ff586","brightYellow":"#e9f06d","brightBlue":"#3c7dd2","brightPurple":"#8230a7","brightCyan":"#6cbc67","brightWhite":"#8ff586","foreground":"#8ff586","background":"#142838","cursorColor":"#8ff586"},{"name":"Cobalt2","black":"#000000","red":"#ff0000","green":"#38de21","yellow":"#ffe50a","blue":"#1460d2","purple":"#ff005d","cyan":"#00bbbb","white":"#bbbbbb","brightBlack":"#555555","brightRed":"#f40e17","brightGreen":"#3bd01d","brightYellow":"#edc809","brightBlue":"#5555ff","brightPurple":"#ff55ff","brightCyan":"#6ae3fa","brightWhite":"#ffffff","foreground":"#ffffff","background":"#132738","cursorColor":"#ffffff"},{"name":"Colorcli","black":"#000000","red":"#D70000","green":"#5FAF00","yellow":"#5FAF00","blue":"#005F87","purple":"#D70000","cyan":"#5F5F5F","white":"#E4E4E4","brightBlack":"#5F5F5F","brightRed":"#D70000","brightGreen":"#5F5F5F","brightYellow":"#FFFF00","brightBlue":"#0087AF","brightPurple":"#0087AF","brightCyan":"#0087AF","brightWhite":"#FFFFFF","foreground":"#005F87","background":"#FFFFFF","cursorColor":"#005F87"},{"name":"CrayonPonyFish","black":"#2b1b1d","red":"#91002b","green":"#579524","yellow":"#ab311b","blue":"#8c87b0","purple":"#692f50","cyan":"#e8a866","white":"#68525a","brightBlack":"#3d2b2e","brightRed":"#c5255d","brightGreen":"#8dff57","brightYellow":"#c8381d","brightBlue":"#cfc9ff","brightPurple":"#fc6cba","brightCyan":"#ffceaf","brightWhite":"#b0949d","foreground":"#68525a","background":"#150707","cursorColor":"#68525a"},{"name":"DarkPastel","black":"#000000","red":"#ff5555","green":"#55ff55","yellow":"#ffff55","blue":"#5555ff","purple":"#ff55ff","cyan":"#55ffff","white":"#bbbbbb","brightBlack":"#555555","brightRed":"#ff5555","brightGreen":"#55ff55","brightYellow":"#ffff55","brightBlue":"#5555ff","brightPurple":"#ff55ff","brightCyan":"#55ffff","brightWhite":"#ffffff","foreground":"#ffffff","background":"#000000","cursorColor":"#ffffff"},{"name":"Darkside","black":"#000000","red":"#e8341c","green":"#68c256","yellow":"#f2d42c","blue":"#1c98e8","purple":"#8e69c9","cyan":"#1c98e8","white":"#bababa","brightBlack":"#000000","brightRed":"#e05a4f","brightGreen":"#77b869","brightYellow":"#efd64b","brightBlue":"#387cd3","brightPurple":"#957bbe","brightCyan":"#3d97e2","brightWhite":"#bababa","foreground":"#bababa","background":"#222324","cursorColor":"#bababa"},{"name":"DeHydration","black":"#333333","red":"#ff5555","green":"#5fd38d","yellow":"#ff9955","blue":"#3771c8","purple":"#bc5fd3","cyan":"#5fd3bc","white":"#999999","brightBlack":"#666666","brightRed":"#ff8080","brightGreen":"#87deaa","brightYellow":"#ffb380","brightBlue":"#5f8dd3","brightPurple":"#cd87de","brightCyan":"#87decd","brightWhite":"#cccccc","foreground":"#cccccc","background":"#333333","cursorColor":"#cccccc"},{"name":"Desert","black":"#4d4d4d","red":"#ff2b2b","green":"#98fb98","yellow":"#f0e68c","blue":"#cd853f","purple":"#ffdead","cyan":"#ffa0a0","white":"#f5deb3","brightBlack":"#555555","brightRed":"#ff5555","brightGreen":"#55ff55","brightYellow":"#ffff55","brightBlue":"#87ceff","brightPurple":"#ff55ff","brightCyan":"#ffd700","brightWhite":"#ffffff","foreground":"#ffffff","background":"#333333","cursorColor":"#ffffff"},{"name":"DimmedMonokai","black":"#3a3d43","red":"#be3f48","green":"#879a3b","yellow":"#c5a635","blue":"#4f76a1","purple":"#855c8d","cyan":"#578fa4","white":"#b9bcba","brightBlack":"#888987","brightRed":"#fb001f","brightGreen":"#0f722f","brightYellow":"#c47033","brightBlue":"#186de3","brightPurple":"#fb0067","brightCyan":"#2e706d","brightWhite":"#fdffb9","foreground":"#b9bcba","background":"#1f1f1f","cursorColor":"#b9bcba"},{"name":"Dissonance","black":"#000000","red":"#dc322f","green":"#56db3a","yellow":"#ff8400","blue":"#0084d4","purple":"#b729d9","cyan":"#ccccff","white":"#ffffff","brightBlack":"#d6dbe5","brightRed":"#dc322f","brightGreen":"#56db3a","brightYellow":"#ff8400","brightBlue":"#0084d4","brightPurple":"#b729d9","brightCyan":"#ccccff","brightWhite":"#ffffff","foreground":"#ffffff","background":"#000000","cursorColor":"#dc322f"},{"name":"Dracula","black":"#44475a","red":"#ff5555","green":"#50fa7b","yellow":"#ffb86c","blue":"#8be9fd","purple":"#bd93f9","cyan":"#ff79c6","white":"#94A3A5","brightBlack":"#000000","brightRed":"#ff5555","brightGreen":"#50fa7b","brightYellow":"#ffb86c","brightBlue":"#8be9fd","brightPurple":"#bd93f9","brightCyan":"#ff79c6","brightWhite":"#ffffff","foreground":"#94A3A5","background":"#282a36","cursorColor":"#94A3A5"},{"name":"Earthsong","black":"#121418","red":"#c94234","green":"#85c54c","yellow":"#f5ae2e","blue":"#1398b9","purple":"#d0633d","cyan":"#509552","white":"#e5c6aa","brightBlack":"#675f54","brightRed":"#ff645a","brightGreen":"#98e036","brightYellow":"#e0d561","brightBlue":"#5fdaff","brightPurple":"#ff9269","brightCyan":"#84f088","brightWhite":"#f6f7ec","foreground":"#e5c7a9","background":"#292520","cursorColor":"#e5c7a9"},{"name":"Elemental","black":"#3c3c30","red":"#98290f","green":"#479a43","yellow":"#7f7111","blue":"#497f7d","purple":"#7f4e2f","cyan":"#387f58","white":"#807974","brightBlack":"#555445","brightRed":"#e0502a","brightGreen":"#61e070","brightYellow":"#d69927","brightBlue":"#79d9d9","brightPurple":"#cd7c54","brightCyan":"#59d599","brightWhite":"#fff1e9","foreground":"#807a74","background":"#22211d","cursorColor":"#807a74"},{"name":"Elementary","black":"#303030","red":"#e1321a","green":"#6ab017","yellow":"#ffc005","blue":"#004f9e","purple":"#ec0048","cyan":"#2aa7e7","white":"#f2f2f2","brightBlack":"#5d5d5d","brightRed":"#ff361e","brightGreen":"#7bc91f","brightYellow":"#ffd00a","brightBlue":"#0071ff","brightPurple":"#ff1d62","brightCyan":"#4bb8fd","brightWhite":"#a020f0","foreground":"#f2f2f2","background":"#101010","cursorColor":"#f2f2f2"},{"name":"Elic","black":"#303030","red":"#e1321a","green":"#6ab017","yellow":"#ffc005","blue":"#729FCF","purple":"#ec0048","cyan":"#f2f2f2","white":"#2aa7e7","brightBlack":"#5d5d5d","brightRed":"#ff361e","brightGreen":"#7bc91f","brightYellow":"#ffd00a","brightBlue":"#0071ff","brightPurple":"#ff1d62","brightCyan":"#4bb8fd","brightWhite":"#a020f0","foreground":"#f2f2f2","background":"#4A453E","cursorColor":"#f2f2f2"},{"name":"Elio","black":"#303030","red":"#e1321a","green":"#6ab017","yellow":"#ffc005","blue":"#729FCF","purple":"#ec0048","cyan":"#2aa7e7","white":"#f2f2f2","brightBlack":"#5d5d5d","brightRed":"#ff361e","brightGreen":"#7bc91f","brightYellow":"#ffd00a","brightBlue":"#0071ff","brightPurple":"#ff1d62","brightCyan":"#4bb8fd","brightWhite":"#a020f0","foreground":"#f2f2f2","background":"#041A3B","cursorColor":"#f2f2f2"},{"name":"EspressoLibre","black":"#000000","red":"#cc0000","green":"#1a921c","yellow":"#f0e53a","blue":"#0066ff","purple":"#c5656b","cyan":"#06989a","white":"#d3d7cf","brightBlack":"#555753","brightRed":"#ef2929","brightGreen":"#9aff87","brightYellow":"#fffb5c","brightBlue":"#43a8ed","brightPurple":"#ff818a","brightCyan":"#34e2e2","brightWhite":"#eeeeec","foreground":"#b8a898","background":"#2a211c","cursorColor":"#b8a898"},{"name":"Espresso","black":"#353535","red":"#d25252","green":"#a5c261","yellow":"#ffc66d","blue":"#6c99bb","purple":"#d197d9","cyan":"#bed6ff","white":"#eeeeec","brightBlack":"#535353","brightRed":"#f00c0c","brightGreen":"#c2e075","brightYellow":"#e1e48b","brightBlue":"#8ab7d9","brightPurple":"#efb5f7","brightCyan":"#dcf4ff","brightWhite":"#ffffff","foreground":"#ffffff","background":"#323232","cursorColor":"#ffffff"},{"name":"FairyFloss","black":"#42395D","red":"#A8757B","green":"#FF857F","yellow":"#E6C000","blue":"#AE81FF","purple":"#716799","cyan":"#C2FFDF","white":"#F8F8F2","brightBlack":"#75507B","brightRed":"#FFB8D1","brightGreen":"#F1568E","brightYellow":"#D5A425","brightBlue":"#C5A3FF","brightPurple":"#8077A8","brightCyan":"#C2FFFF","brightWhite":"#F8F8F0","foreground":"#C2FFDF","background":"#5A5475","cursorColor":"#FFB8D1"},{"name":"FairyFlossDark","black":"#42395D","red":"#A8757B","green":"#FF857F","yellow":"#E6C000","blue":"#AE81FF","purple":"#716799","cyan":"#C2FFDF","white":"#F8F8F2","brightBlack":"#75507B","brightRed":"#FFB8D1","brightGreen":"#F1568E","brightYellow":"#D5A425","brightBlue":"#C5A3FF","brightPurple":"#8077A8","brightCyan":"#C2FFFF","brightWhite":"#F8F8F0","foreground":"#C2FFDF","background":"#42395D","cursorColor":"#FFB8D1"},{"name":"Fishtank","black":"#03073c","red":"#c6004a","green":"#acf157","yellow":"#fecd5e","blue":"#525fb8","purple":"#986f82","cyan":"#968763","white":"#ecf0fc","brightBlack":"#6c5b30","brightRed":"#da4b8a","brightGreen":"#dbffa9","brightYellow":"#fee6a9","brightBlue":"#b2befa","brightPurple":"#fda5cd","brightCyan":"#a5bd86","brightWhite":"#f6ffec","foreground":"#ecf0fe","background":"#232537","cursorColor":"#ecf0fe"},{"name":"FlatRemix","black":"#1F2229","red":"#D41919","green":"#5EBDAB","yellow":"#FEA44C","blue":"#367bf0","purple":"#BF2E5D","cyan":"#49AEE6","white":"#E6E6E6","brightBlack":"#8C42AB","brightRed":"#EC0101","brightGreen":"#47D4B9","brightYellow":"#FF8A18","brightBlue":"#277FFF","brightPurple":"#D71655","brightCyan":"#05A1F7","brightWhite":"#FFFFFF","foreground":"#FFFFFF","background":"#272a34","cursorColor":"#FFFFFF"},{"name":"Flat","black":"#2c3e50","red":"#c0392b","green":"#27ae60","yellow":"#f39c12","blue":"#2980b9","purple":"#8e44ad","cyan":"#16a085","white":"#bdc3c7","brightBlack":"#34495e","brightRed":"#e74c3c","brightGreen":"#2ecc71","brightYellow":"#f1c40f","brightBlue":"#3498db","brightPurple":"#9b59b6","brightCyan":"#2AA198","brightWhite":"#ecf0f1","foreground":"#1abc9c","background":"#1F2D3A","cursorColor":"#1abc9c"},{"name":"Flatland","black":"#1d1d19","red":"#f18339","green":"#9fd364","yellow":"#f4ef6d","blue":"#5096be","purple":"#695abc","cyan":"#d63865","white":"#ffffff","brightBlack":"#1d1d19","brightRed":"#d22a24","brightGreen":"#a7d42c","brightYellow":"#ff8949","brightBlue":"#61b9d0","brightPurple":"#695abc","brightCyan":"#d63865","brightWhite":"#ffffff","foreground":"#b8dbef","background":"#1d1f21","cursorColor":"#b8dbef"},{"name":"Foxnightly","black":"#2A2A2E","red":"#B98EFF","green":"#FF7DE9","yellow":"#729FCF","blue":"#66A05B","purple":"#75507B","cyan":"#ACACAE","white":"#FFFFFF","brightBlack":"#A40000","brightRed":"#BF4040","brightGreen":"#66A05B","brightYellow":"#FFB86C","brightBlue":"#729FCF","brightPurple":"#8F5902","brightCyan":"#C4A000","brightWhite":"#5C3566","foreground":"#D7D7DB","background":"#2A2A2E","cursorColor":"#D7D7DB"},{"name":"Freya","black":"#073642","red":"#dc322f","green":"#859900","yellow":"#b58900","blue":"#268bd2","purple":"#ec0048","cyan":"#2aa198","white":"#94a3a5","brightBlack":"#586e75","brightRed":"#cb4b16","brightGreen":"#859900","brightYellow":"#b58900","brightBlue":"#268bd2","brightPurple":"#d33682","brightCyan":"#2aa198","brightWhite":"#6c71c4","foreground":"#94a3a5","background":"#252e32","cursorColor":"#839496"},{"name":"FrontendDelight","black":"#242526","red":"#f8511b","green":"#565747","yellow":"#fa771d","blue":"#2c70b7","purple":"#f02e4f","cyan":"#3ca1a6","white":"#adadad","brightBlack":"#5fac6d","brightRed":"#f74319","brightGreen":"#74ec4c","brightYellow":"#fdc325","brightBlue":"#3393ca","brightPurple":"#e75e4f","brightCyan":"#4fbce6","brightWhite":"#8c735b","foreground":"#adadad","background":"#1b1c1d","cursorColor":"#adadad"},{"name":"FrontendFunForrest","black":"#000000","red":"#d6262b","green":"#919c00","yellow":"#be8a13","blue":"#4699a3","purple":"#8d4331","cyan":"#da8213","white":"#ddc265","brightBlack":"#7f6a55","brightRed":"#e55a1c","brightGreen":"#bfc65a","brightYellow":"#ffcb1b","brightBlue":"#7cc9cf","brightPurple":"#d26349","brightCyan":"#e6a96b","brightWhite":"#ffeaa3","foreground":"#dec165","background":"#251200","cursorColor":"#dec165"},{"name":"FrontendGalaxy","black":"#000000","red":"#f9555f","green":"#21b089","yellow":"#fef02a","blue":"#589df6","purple":"#944d95","cyan":"#1f9ee7","white":"#bbbbbb","brightBlack":"#555555","brightRed":"#fa8c8f","brightGreen":"#35bb9a","brightYellow":"#ffff55","brightBlue":"#589df6","brightPurple":"#e75699","brightCyan":"#3979bc","brightWhite":"#ffffff","foreground":"#ffffff","background":"#1d2837","cursorColor":"#ffffff"},{"name":"GeoHot","black":"#F9F5F5","red":"#CC0000","green":"#1F1E1F","yellow":"#ADA110","blue":"#FF004E","purple":"#75507B","cyan":"#06919A","white":"#FFFFFF","brightBlack":"#555753","brightRed":"#EF2929","brightGreen":"#FF0000","brightYellow":"#ADA110","brightBlue":"#5F4AA6","brightPurple":"#B74438","brightCyan":"#408F0C","brightWhite":"#FFFFFF","foreground":"#FFFFFF","background":"#1F1E1F","cursorColor":"#FFFFFF"},{"name":"Github","black":"#3e3e3e","red":"#970b16","green":"#07962a","yellow":"#f8eec7","blue":"#003e8a","purple":"#e94691","cyan":"#89d1ec","white":"#ffffff","brightBlack":"#666666","brightRed":"#de0000","brightGreen":"#87d5a2","brightYellow":"#f1d007","brightBlue":"#2e6cba","brightPurple":"#ffa29f","brightCyan":"#1cfafe","brightWhite":"#ffffff","foreground":"#3e3e3e","background":"#f4f4f4","cursorColor":"#3e3e3e"},{"name":"Gogh","black":"#292D3E","red":"#F07178","green":"#62DE84","yellow":"#FFCB6B","blue":"#75A1FF","purple":"#F580FF","cyan":"#60BAEC","white":"#ABB2BF","brightBlack":"#959DCB","brightRed":"#F07178","brightGreen":"#C3E88D","brightYellow":"#FF5572","brightBlue":"#82AAFF","brightPurple":"#FFCB6B","brightCyan":"#676E95","brightWhite":"#FFFEFE","foreground":"#BFC7D5","background":"#292D3E","cursorColor":"#BFC7D5"},{"name":"gooey","black":"#000009","red":"#BB4F6C","green":"#72CCAE","yellow":"#C65E3D","blue":"#58B6CA","purple":"#6488C4","cyan":"#8D84C6","white":"#858893","brightBlack":"#1f222d","brightRed":"#ee829f","brightGreen":"#a5ffe1","brightYellow":"#f99170","brightBlue":"#8be9fd","brightPurple":"#97bbf7","brightCyan":"#c0b7f9","brightWhite":"#ffffff","foreground":"#EBEEF9","background":"#0D101B","cursorColor":"#EBEEF9"},{"name":"GoogleDark","black":"#202124","red":"#EA4335","green":"#34A853","yellow":"#FBBC04","blue":"#4285F4","purple":"#A142F4","cyan":"#24C1E0","white":"#E8EAED","brightBlack":"#5F6368","brightRed":"#EA4335","brightGreen":"#34A853","brightYellow":"#FBBC05","brightBlue":"#4285F4","brightPurple":"#A142F4","brightCyan":"#24C1E0","brightWhite":"#FFFFFF","foreground":"#E8EAED","background":"#202124","cursorColor":"#E8EAED"},{"name":"GoogleLight","black":"#202124","red":"#EA4335","green":"#34A853","yellow":"#FBBC04","blue":"#4285F4","purple":"#A142F4","cyan":"#24C1E0","white":"#E8EAED","brightBlack":"#5F6368","brightRed":"#EA4335","brightGreen":"#34A853","brightYellow":"#FBBC05","brightBlue":"#4285F4","brightPurple":"#A142F4","brightCyan":"#24C1E0","brightWhite":"#FFFFFF","foreground":"#5F6368","background":"#FFFFFF","cursorColor":"#5F6368"},{"name":"gotham","black":"#0a0f14","red":"#c33027","green":"#26a98b","yellow":"#edb54b","blue":"#195465","purple":"#4e5165","cyan":"#33859d","white":"#98d1ce","brightBlack":"#10151b","brightRed":"#d26939","brightGreen":"#081f2d","brightYellow":"#245361","brightBlue":"#093748","brightPurple":"#888ba5","brightCyan":"#599caa","brightWhite":"#d3ebe9","foreground":"#98d1ce","background":"#0a0f14","cursorColor":"#98d1ce"},{"name":"Grape","black":"#2d283f","red":"#ed2261","green":"#1fa91b","yellow":"#8ddc20","blue":"#487df4","purple":"#8d35c9","cyan":"#3bdeed","white":"#9e9ea0","brightBlack":"#59516a","brightRed":"#f0729a","brightGreen":"#53aa5e","brightYellow":"#b2dc87","brightBlue":"#a9bcec","brightPurple":"#ad81c2","brightCyan":"#9de3eb","brightWhite":"#a288f7","foreground":"#9f9fa1","background":"#171423","cursorColor":"#9f9fa1"},{"name":"Grass","black":"#000000","red":"#bb0000","green":"#00bb00","yellow":"#e7b000","blue":"#0000a3","purple":"#950062","cyan":"#00bbbb","white":"#bbbbbb","brightBlack":"#555555","brightRed":"#bb0000","brightGreen":"#00bb00","brightYellow":"#e7b000","brightBlue":"#0000bb","brightPurple":"#ff55ff","brightCyan":"#55ffff","brightWhite":"#ffffff","foreground":"#fff0a5","background":"#13773d","cursorColor":"#fff0a5"},{"name":"GruvboxDark","black":"#282828","red":"#cc241d","green":"#98971a","yellow":"#d79921","blue":"#458588","purple":"#b16286","cyan":"#689d6a","white":"#a89984","brightBlack":"#928374","brightRed":"#fb4934","brightGreen":"#b8bb26","brightYellow":"#fabd2f","brightBlue":"#83a598","brightPurple":"#d3869b","brightCyan":"#8ec07c","brightWhite":"#ebdbb2","foreground":"#ebdbb2","background":"#282828","cursorColor":"#ebdbb2"},{"name":"Gruvbox","black":"#fbf1c7","red":"#cc241d","green":"#98971a","yellow":"#d79921","blue":"#458588","purple":"#b16286","cyan":"#689d6a","white":"#7c6f64","brightBlack":"#928374","brightRed":"#9d0006","brightGreen":"#79740e","brightYellow":"#b57614","brightBlue":"#076678","brightPurple":"#8f3f71","brightCyan":"#427b58","brightWhite":"#3c3836","foreground":"#3c3836","background":"#fbf1c7","cursorColor":"#3c3836"},{"name":"Hardcore","black":"#1b1d1e","red":"#f92672","green":"#a6e22e","yellow":"#fd971f","blue":"#66d9ef","purple":"#9e6ffe","cyan":"#5e7175","white":"#ccccc6","brightBlack":"#505354","brightRed":"#ff669d","brightGreen":"#beed5f","brightYellow":"#e6db74","brightBlue":"#66d9ef","brightPurple":"#9e6ffe","brightCyan":"#a3babf","brightWhite":"#f8f8f2","foreground":"#a0a0a0","background":"#121212","cursorColor":"#a0a0a0"},{"name":"Harper","black":"#010101","red":"#f8b63f","green":"#7fb5e1","yellow":"#d6da25","blue":"#489e48","purple":"#b296c6","cyan":"#f5bfd7","white":"#a8a49d","brightBlack":"#726e6a","brightRed":"#f8b63f","brightGreen":"#7fb5e1","brightYellow":"#d6da25","brightBlue":"#489e48","brightPurple":"#b296c6","brightCyan":"#f5bfd7","brightWhite":"#fefbea","foreground":"#a8a49d","background":"#010101","cursorColor":"#a8a49d"},{"name":"HemisuDark","black":"#444444","red":"#FF0054","green":"#B1D630","yellow":"#9D895E","blue":"#67BEE3","purple":"#B576BC","cyan":"#569A9F","white":"#EDEDED","brightBlack":"#777777","brightRed":"#D65E75","brightGreen":"#BAFFAA","brightYellow":"#ECE1C8","brightBlue":"#9FD3E5","brightPurple":"#DEB3DF","brightCyan":"#B6E0E5","brightWhite":"#FFFFFF","foreground":"#FFFFFF","background":"#000000","cursorColor":"#BAFFAA"},{"name":"HemisuLight","black":"#777777","red":"#FF0055","green":"#739100","yellow":"#503D15","blue":"#538091","purple":"#5B345E","cyan":"#538091","white":"#999999","brightBlack":"#999999","brightRed":"#D65E76","brightGreen":"#9CC700","brightYellow":"#947555","brightBlue":"#9DB3CD","brightPurple":"#A184A4","brightCyan":"#85B2AA","brightWhite":"#BABABA","foreground":"#444444","background":"#EFEFEF","cursorColor":"#FF0054"},{"name":"Highway","black":"#000000","red":"#d00e18","green":"#138034","yellow":"#ffcb3e","blue":"#006bb3","purple":"#6b2775","cyan":"#384564","white":"#ededed","brightBlack":"#5d504a","brightRed":"#f07e18","brightGreen":"#b1d130","brightYellow":"#fff120","brightBlue":"#4fc2fd","brightPurple":"#de0071","brightCyan":"#5d504a","brightWhite":"#ffffff","foreground":"#ededed","background":"#222225","cursorColor":"#ededed"},{"name":"HipsterGreen","black":"#000000","red":"#b6214a","green":"#00a600","yellow":"#bfbf00","blue":"#246eb2","purple":"#b200b2","cyan":"#00a6b2","white":"#bfbfbf","brightBlack":"#666666","brightRed":"#e50000","brightGreen":"#86a93e","brightYellow":"#e5e500","brightBlue":"#0000ff","brightPurple":"#e500e5","brightCyan":"#00e5e5","brightWhite":"#e5e5e5","foreground":"#84c138","background":"#100b05","cursorColor":"#84c138"},{"name":"Homebrew","black":"#000000","red":"#990000","green":"#00a600","yellow":"#999900","blue":"#0000b2","purple":"#b200b2","cyan":"#00a6b2","white":"#bfbfbf","brightBlack":"#666666","brightRed":"#e50000","brightGreen":"#00d900","brightYellow":"#e5e500","brightBlue":"#0000ff","brightPurple":"#e500e5","brightCyan":"#00e5e5","brightWhite":"#e5e5e5","foreground":"#00ff00","background":"#000000","cursorColor":"#00ff00"},{"name":"HorizonBright","black":"#16161C","red":"#DA103F","green":"#1EB980","yellow":"#F6661E","blue":"#26BBD9","purple":"#EE64AE","cyan":"#1D8991","white":"#FADAD1","brightBlack":"#1A1C23","brightRed":"#F43E5C","brightGreen":"#07DA8C","brightYellow":"#F77D26","brightBlue":"#3FC6DE","brightPurple":"#F075B7","brightCyan":"#1EAEAE","brightWhite":"#FDF0ED","foreground":"#1C1E26","background":"#FDF0ED","cursorColor":"#1C1E26"},{"name":"HorizonDark","black":"#16161C","red":"#E95678","green":"#29D398","yellow":"#FAB795","blue":"#26BBD9","purple":"#EE64AE","cyan":"#59E3E3","white":"#FADAD1","brightBlack":"#232530","brightRed":"#EC6A88","brightGreen":"#3FDAA4","brightYellow":"#FBC3A7","brightBlue":"#3FC6DE","brightPurple":"#F075B7","brightCyan":"#6BE6E6","brightWhite":"#FDF0ED","foreground":"#FDF0ED","background":"#1C1E26","cursorColor":"#FDF0ED"},{"name":"Hurtado","black":"#575757","red":"#ff1b00","green":"#a5e055","yellow":"#fbe74a","blue":"#496487","purple":"#fd5ff1","cyan":"#86e9fe","white":"#cbcccb","brightBlack":"#262626","brightRed":"#d51d00","brightGreen":"#a5df55","brightYellow":"#fbe84a","brightBlue":"#89beff","brightPurple":"#c001c1","brightCyan":"#86eafe","brightWhite":"#dbdbdb","foreground":"#dbdbdb","background":"#000000","cursorColor":"#dbdbdb"},{"name":"Hybrid","black":"#282a2e","red":"#A54242","green":"#8C9440","yellow":"#de935f","blue":"#5F819D","purple":"#85678F","cyan":"#5E8D87","white":"#969896","brightBlack":"#373b41","brightRed":"#cc6666","brightGreen":"#b5bd68","brightYellow":"#f0c674","brightBlue":"#81a2be","brightPurple":"#b294bb","brightCyan":"#8abeb7","brightWhite":"#c5c8c6","foreground":"#94a3a5","background":"#141414","cursorColor":"#94a3a5"},{"name":"IBM3270(HighContrast)","black":"#000000","red":"#FF0000","green":"#00FF00","yellow":"#FFFF00","blue":"#00BFFF","purple":"#FFC0CB","cyan":"#40E0D0","white":"#BEBEBE","brightBlack":"#414141","brightRed":"#FFA500","brightGreen":"#98FB98","brightYellow":"#FFFF00","brightBlue":"#0000CD","brightPurple":"#A020F0","brightCyan":"#AEEEEE","brightWhite":"#FFFFFF","foreground":"#FDFDFD","background":"#000000","cursorColor":"#FDFDFD"},{"name":"ibm3270","black":"#222222","red":"#F01818","green":"#24D830","yellow":"#F0D824","blue":"#7890F0","purple":"#F078D8","cyan":"#54E4E4","white":"#A5A5A5","brightBlack":"#888888","brightRed":"#EF8383","brightGreen":"#7ED684","brightYellow":"#EFE28B","brightBlue":"#B3BFEF","brightPurple":"#EFB3E3","brightCyan":"#9CE2E2","brightWhite":"#FFFFFF","foreground":"#FDFDFD","background":"#000000","cursorColor":"#FDFDFD"},{"name":"ICGreenPPL","black":"#1f1f1f","red":"#fb002a","green":"#339c24","yellow":"#659b25","blue":"#149b45","purple":"#53b82c","cyan":"#2cb868","white":"#e0ffef","brightBlack":"#032710","brightRed":"#a7ff3f","brightGreen":"#9fff6d","brightYellow":"#d2ff6d","brightBlue":"#72ffb5","brightPurple":"#50ff3e","brightCyan":"#22ff71","brightWhite":"#daefd0","foreground":"#d9efd3","background":"#3a3d3f","cursorColor":"#d9efd3"},{"name":"ICOrangePPL","black":"#000000","red":"#c13900","green":"#a4a900","yellow":"#caaf00","blue":"#bd6d00","purple":"#fc5e00","cyan":"#f79500","white":"#ffc88a","brightBlack":"#6a4f2a","brightRed":"#ff8c68","brightGreen":"#f6ff40","brightYellow":"#ffe36e","brightBlue":"#ffbe55","brightPurple":"#fc874f","brightCyan":"#c69752","brightWhite":"#fafaff","foreground":"#ffcb83","background":"#262626","cursorColor":"#ffcb83"},{"name":"IdleToes","black":"#323232","red":"#d25252","green":"#7fe173","yellow":"#ffc66d","blue":"#4099ff","purple":"#f680ff","cyan":"#bed6ff","white":"#eeeeec","brightBlack":"#535353","brightRed":"#f07070","brightGreen":"#9dff91","brightYellow":"#ffe48b","brightBlue":"#5eb7f7","brightPurple":"#ff9dff","brightCyan":"#dcf4ff","brightWhite":"#ffffff","foreground":"#ffffff","background":"#323232","cursorColor":"#ffffff"},{"name":"IrBlack","black":"#4e4e4e","red":"#ff6c60","green":"#a8ff60","yellow":"#ffffb6","blue":"#69cbfe","purple":"#ff73Fd","cyan":"#c6c5fe","white":"#eeeeee","brightBlack":"#7c7c7c","brightRed":"#ffb6b0","brightGreen":"#ceffac","brightYellow":"#ffffcb","brightBlue":"#b5dcfe","brightPurple":"#ff9cfe","brightCyan":"#dfdffe","brightWhite":"#ffffff","foreground":"#eeeeee","background":"#000000","cursorColor":"#ffa560"},{"name":"JackieBrown","black":"#2c1d16","red":"#ef5734","green":"#2baf2b","yellow":"#bebf00","blue":"#246eb2","purple":"#d05ec1","cyan":"#00acee","white":"#bfbfbf","brightBlack":"#666666","brightRed":"#e50000","brightGreen":"#86a93e","brightYellow":"#e5e500","brightBlue":"#0000ff","brightPurple":"#e500e5","brightCyan":"#00e5e5","brightWhite":"#e5e5e5","foreground":"#ffcc2f","background":"#2c1d16","cursorColor":"#ffcc2f"},{"name":"Japanesque","black":"#343935","red":"#cf3f61","green":"#7bb75b","yellow":"#e9b32a","blue":"#4c9ad4","purple":"#a57fc4","cyan":"#389aad","white":"#fafaf6","brightBlack":"#595b59","brightRed":"#d18fa6","brightGreen":"#767f2c","brightYellow":"#78592f","brightBlue":"#135979","brightPurple":"#604291","brightCyan":"#76bbca","brightWhite":"#b2b5ae","foreground":"#f7f6ec","background":"#1e1e1e","cursorColor":"#f7f6ec"},{"name":"Jellybeans","black":"#929292","red":"#e27373","green":"#94b979","yellow":"#ffba7b","blue":"#97bedc","purple":"#e1c0fa","cyan":"#00988e","white":"#dedede","brightBlack":"#bdbdbd","brightRed":"#ffa1a1","brightGreen":"#bddeab","brightYellow":"#ffdca0","brightBlue":"#b1d8f6","brightPurple":"#fbdaff","brightCyan":"#1ab2a8","brightWhite":"#ffffff","foreground":"#dedede","background":"#121212","cursorColor":"#dedede"},{"name":"Jup","black":"#000000","red":"#dd006f","green":"#6fdd00","yellow":"#dd6f00","blue":"#006fdd","purple":"#6f00dd","cyan":"#00dd6f","white":"#f2f2f2","brightBlack":"#7d7d7d","brightRed":"#ff74b9","brightGreen":"#b9ff74","brightYellow":"#ffb974","brightBlue":"#74b9ff","brightPurple":"#b974ff","brightCyan":"#74ffb9","brightWhite":"#ffffff","foreground":"#23476a","background":"#758480","cursorColor":"#23476a"},{"name":"Kibble","black":"#4d4d4d","red":"#c70031","green":"#29cf13","yellow":"#d8e30e","blue":"#3449d1","purple":"#8400ff","cyan":"#0798ab","white":"#e2d1e3","brightBlack":"#5a5a5a","brightRed":"#f01578","brightGreen":"#6ce05c","brightYellow":"#f3f79e","brightBlue":"#97a4f7","brightPurple":"#c495f0","brightCyan":"#68f2e0","brightWhite":"#ffffff","foreground":"#f7f7f7","background":"#0e100a","cursorColor":"#f7f7f7"},{"name":"kokuban","black":"#2E8744","red":"#D84E4C","green":"#95DA5A","yellow":"#D6E264","blue":"#4B9ED7","purple":"#945FC5","cyan":"#D89B25","white":"#D8E2D7","brightBlack":"#34934F","brightRed":"#FF4F59","brightGreen":"#AFF56A","brightYellow":"#FCFF75","brightBlue":"#57AEFF","brightPurple":"#AE63E9","brightCyan":"#FFAA2B","brightWhite":"#FFFEFE","foreground":"#D8E2D7","background":"#0D4A08","cursorColor":"#D8E2D7"},{"name":"laserwave","black":"#39243A","red":"#EB64B9","green":"#AFD686","yellow":"#FEAE87","blue":"#40B4C4","purple":"#B381C5","cyan":"#215969","white":"#91889b","brightBlack":"#716485","brightRed":"#FC2377","brightGreen":"#50FA7B","brightYellow":"#FFE261","brightBlue":"#74DFC4","brightPurple":"#6D75E0","brightCyan":"#B4DCE7","brightWhite":"#FFFFFF","foreground":"#E0E0E0","background":"#1F1926","cursorColor":"#C7C7C7"},{"name":"LaterThisEvening","black":"#2b2b2b","red":"#d45a60","green":"#afba67","yellow":"#e5d289","blue":"#a0bad6","purple":"#c092d6","cyan":"#91bfb7","white":"#3c3d3d","brightBlack":"#454747","brightRed":"#d3232f","brightGreen":"#aabb39","brightYellow":"#e5be39","brightBlue":"#6699d6","brightPurple":"#ab53d6","brightCyan":"#5fc0ae","brightWhite":"#c1c2c2","foreground":"#959595","background":"#222222","cursorColor":"#959595"},{"name":"Lavandula","black":"#230046","red":"#7d1625","green":"#337e6f","yellow":"#7f6f49","blue":"#4f4a7f","purple":"#5a3f7f","cyan":"#58777f","white":"#736e7d","brightBlack":"#372d46","brightRed":"#e05167","brightGreen":"#52e0c4","brightYellow":"#e0c386","brightBlue":"#8e87e0","brightPurple":"#a776e0","brightCyan":"#9ad4e0","brightWhite":"#8c91fa","foreground":"#736e7d","background":"#050014","cursorColor":"#736e7d"},{"name":"LiquidCarbonTransparent","black":"#000000","red":"#ff3030","green":"#559a70","yellow":"#ccac00","blue":"#0099cc","purple":"#cc69c8","cyan":"#7ac4cc","white":"#bccccc","brightBlack":"#000000","brightRed":"#ff3030","brightGreen":"#559a70","brightYellow":"#ccac00","brightBlue":"#0099cc","brightPurple":"#cc69c8","brightCyan":"#7ac4cc","brightWhite":"#bccccc","foreground":"#afc2c2","background":"#000000","cursorColor":"#afc2c2"},{"name":"LiquidCarbon","black":"#000000","red":"#ff3030","green":"#559a70","yellow":"#ccac00","blue":"#0099cc","purple":"#cc69c8","cyan":"#7ac4cc","white":"#bccccc","brightBlack":"#000000","brightRed":"#ff3030","brightGreen":"#559a70","brightYellow":"#ccac00","brightBlue":"#0099cc","brightPurple":"#cc69c8","brightCyan":"#7ac4cc","brightWhite":"#bccccc","foreground":"#afc2c2","background":"#303030","cursorColor":"#afc2c2"},{"name":"LunariaDark","black":"#36464E","red":"#846560","green":"#809984","yellow":"#A79A79","blue":"#555673","purple":"#866C83","cyan":"#7E98B4","white":"#CACED8","brightBlack":"#404F56","brightRed":"#BB928B","brightGreen":"#BFDCC2","brightYellow":"#F1DFB6","brightBlue":"#777798","brightPurple":"#BF9DB9","brightCyan":"#BDDCFF","brightWhite":"#DFE2ED","foreground":"#CACED8","background":"#36464E","cursorColor":"#CACED8"},{"name":"LunariaEclipse","black":"#323F46","red":"#83615B","green":"#7F9781","yellow":"#A69875","blue":"#53516F","purple":"#856880","cyan":"#7D96B2","white":"#C9CDD7","brightBlack":"#3D4950","brightRed":"#BA9088","brightGreen":"#BEDBC1","brightYellow":"#F1DFB4","brightBlue":"#767495","brightPurple":"#BE9CB8","brightCyan":"#BCDBFF","brightWhite":"#DFE2ED","foreground":"#C9CDD7","background":"#323F46","cursorColor":"#C9CDD7"},{"name":"LunariaLight","black":"#3E3C3D","red":"#783C1F","green":"#497D46","yellow":"#8F750B","blue":"#3F3566","purple":"#793F62","cyan":"#3778A9","white":"#D5CFCC","brightBlack":"#484646","brightRed":"#B06240","brightGreen":"#7BC175","brightYellow":"#DCB735","brightBlue":"#5C4F89","brightPurple":"#B56895","brightCyan":"#64BAFF","brightWhite":"#EBE4E1","foreground":"#484646","background":"#EBE4E1","cursorColor":"#484646"},{"name":"Maia","black":"#232423","red":"#BA2922","green":"#7E807E","yellow":"#4C4F4D","blue":"#16A085","purple":"#43746A","cyan":"#00CCCC","white":"#E0E0E0","brightBlack":"#282928","brightRed":"#CC372C","brightGreen":"#8D8F8D","brightYellow":"#4E524F","brightBlue":"#13BF9D","brightPurple":"#487D72","brightCyan":"#00D1D1","brightWhite":"#E8E8E8","foreground":"#BDC3C7","background":"#31363B","cursorColor":"#BDC3C7"},{"name":"ManPage","black":"#000000","red":"#cc0000","green":"#00a600","yellow":"#999900","blue":"#0000b2","purple":"#b200b2","cyan":"#00a6b2","white":"#cccccc","brightBlack":"#666666","brightRed":"#e50000","brightGreen":"#00d900","brightYellow":"#e5e500","brightBlue":"#0000ff","brightPurple":"#e500e5","brightCyan":"#00e5e5","brightWhite":"#e5e5e5","foreground":"#000000","background":"#fef49c","cursorColor":"#000000"},{"name":"Mar","black":"#000000","red":"#b5407b","green":"#7bb540","yellow":"#b57b40","blue":"#407bb5","purple":"#7b40b5","cyan":"#40b57b","white":"#f8f8f8","brightBlack":"#737373","brightRed":"#cd73a0","brightGreen":"#a0cd73","brightYellow":"#cda073","brightBlue":"#73a0cd","brightPurple":"#a073cd","brightCyan":"#73cda0","brightWhite":"#ffffff","foreground":"#23476a","background":"#ffffff","cursorColor":"#23476a"},{"name":"Material","black":"#073641","red":"#EB606B","green":"#C3E88D","yellow":"#F7EB95","blue":"#80CBC3","purple":"#FF2490","cyan":"#AEDDFF","white":"#FFFFFF","brightBlack":"#002B36","brightRed":"#EB606B","brightGreen":"#C3E88D","brightYellow":"#F7EB95","brightBlue":"#7DC6BF","brightPurple":"#6C71C3","brightCyan":"#34434D","brightWhite":"#FFFFFF","foreground":"#C3C7D1","background":"#1E282C","cursorColor":"#657B83"},{"name":"Mathias","black":"#000000","red":"#e52222","green":"#a6e32d","yellow":"#fc951e","blue":"#c48dff","purple":"#fa2573","cyan":"#67d9f0","white":"#f2f2f2","brightBlack":"#555555","brightRed":"#ff5555","brightGreen":"#55ff55","brightYellow":"#ffff55","brightBlue":"#5555ff","brightPurple":"#ff55ff","brightCyan":"#55ffff","brightWhite":"#ffffff","foreground":"#bbbbbb","background":"#000000","cursorColor":"#bbbbbb"},{"name":"Medallion","black":"#000000","red":"#b64c00","green":"#7c8b16","yellow":"#d3bd26","blue":"#616bb0","purple":"#8c5a90","cyan":"#916c25","white":"#cac29a","brightBlack":"#5e5219","brightRed":"#ff9149","brightGreen":"#b2ca3b","brightYellow":"#ffe54a","brightBlue":"#acb8ff","brightPurple":"#ffa0ff","brightCyan":"#ffbc51","brightWhite":"#fed698","foreground":"#cac296","background":"#1d1908","cursorColor":"#cac296"},{"name":"Misterioso","black":"#000000","red":"#ff4242","green":"#74af68","yellow":"#ffad29","blue":"#338f86","purple":"#9414e6","cyan":"#23d7d7","white":"#e1e1e0","brightBlack":"#555555","brightRed":"#ff3242","brightGreen":"#74cd68","brightYellow":"#ffb929","brightBlue":"#23d7d7","brightPurple":"#ff37ff","brightCyan":"#00ede1","brightWhite":"#ffffff","foreground":"#e1e1e0","background":"#2d3743","cursorColor":"#e1e1e0"},{"name":"Miu","black":"#000000","red":"#b87a7a","green":"#7ab87a","yellow":"#b8b87a","blue":"#7a7ab8","purple":"#b87ab8","cyan":"#7ab8b8","white":"#d9d9d9","brightBlack":"#262626","brightRed":"#dbbdbd","brightGreen":"#bddbbd","brightYellow":"#dbdbbd","brightBlue":"#bdbddb","brightPurple":"#dbbddb","brightCyan":"#bddbdb","brightWhite":"#ffffff","foreground":"#d9e6f2","background":"#0d1926","cursorColor":"#d9e6f2"},{"name":"Molokai","black":"#1b1d1e","red":"#7325FA","green":"#23E298","yellow":"#60D4DF","blue":"#D08010","purple":"#FF0087","cyan":"#D0A843","white":"#BBBBBB","brightBlack":"#555555","brightRed":"#9D66F6","brightGreen":"#5FE0B1","brightYellow":"#6DF2FF","brightBlue":"#FFAF00","brightPurple":"#FF87AF","brightCyan":"#FFCE51","brightWhite":"#FFFFFF","foreground":"#BBBBBB","background":"#1b1d1e","cursorColor":"#BBBBBB"},{"name":"MonaLisa","black":"#351b0e","red":"#9b291c","green":"#636232","yellow":"#c36e28","blue":"#515c5d","purple":"#9b1d29","cyan":"#588056","white":"#f7d75c","brightBlack":"#874228","brightRed":"#ff4331","brightGreen":"#b4b264","brightYellow":"#ff9566","brightBlue":"#9eb2b4","brightPurple":"#ff5b6a","brightCyan":"#8acd8f","brightWhite":"#ffe598","foreground":"#f7d66a","background":"#120b0d","cursorColor":"#f7d66a"},{"name":"mono-amber","black":"#402500","red":"#FF9400","green":"#FF9400","yellow":"#FF9400","blue":"#FF9400","purple":"#FF9400","cyan":"#FF9400","white":"#FF9400","brightBlack":"#FF9400","brightRed":"#FF9400","brightGreen":"#FF9400","brightYellow":"#FF9400","brightBlue":"#FF9400","brightPurple":"#FF9400","brightCyan":"#FF9400","brightWhite":"#FF9400","foreground":"#FF9400","background":"#2B1900","cursorColor":"#FF9400"},{"name":"mono-cyan","black":"#003340","red":"#00CCFF","green":"#00CCFF","yellow":"#00CCFF","blue":"#00CCFF","purple":"#00CCFF","cyan":"#00CCFF","white":"#00CCFF","brightBlack":"#00CCFF","brightRed":"#00CCFF","brightGreen":"#00CCFF","brightYellow":"#00CCFF","brightBlue":"#00CCFF","brightPurple":"#00CCFF","brightCyan":"#00CCFF","brightWhite":"#00CCFF","foreground":"#00CCFF","background":"#00222B","cursorColor":"#00CCFF"},{"name":"mono-green","black":"#034000","red":"#0BFF00","green":"#0BFF00","yellow":"#0BFF00","blue":"#0BFF00","purple":"#0BFF00","cyan":"#0BFF00","white":"#0BFF00","brightBlack":"#0BFF00","brightRed":"#0BFF00","brightGreen":"#0BFF00","brightYellow":"#0BFF00","brightBlue":"#0BFF00","brightPurple":"#0BFF00","brightCyan":"#0BFF00","brightWhite":"#0BFF00","foreground":"#0BFF00","background":"#022B00","cursorColor":"#0BFF00"},{"name":"mono-red","black":"#401200","red":"#FF3600","green":"#FF3600","yellow":"#FF3600","blue":"#FF3600","purple":"#FF3600","cyan":"#FF3600","white":"#FF3600","brightBlack":"#FF3600","brightRed":"#FF3600","brightGreen":"#FF3600","brightYellow":"#FF3600","brightBlue":"#FF3600","brightPurple":"#FF3600","brightCyan":"#FF3600","brightWhite":"#FF3600","foreground":"#FF3600","background":"#2B0C00","cursorColor":"#FF3600"},{"name":"mono-white","black":"#3B3B3B","red":"#FAFAFA","green":"#FAFAFA","yellow":"#FAFAFA","blue":"#FAFAFA","purple":"#FAFAFA","cyan":"#FAFAFA","white":"#FAFAFA","brightBlack":"#FAFAFA","brightRed":"#FAFAFA","brightGreen":"#FAFAFA","brightYellow":"#FAFAFA","brightBlue":"#FAFAFA","brightPurple":"#FAFAFA","brightCyan":"#FAFAFA","brightWhite":"#FAFAFA","foreground":"#FAFAFA","background":"#262626","cursorColor":"#FAFAFA"},{"name":"mono-yellow","black":"#403500","red":"#FFD300","green":"#FFD300","yellow":"#FFD300","blue":"#FFD300","purple":"#FFD300","cyan":"#FFD300","white":"#FFD300","brightBlack":"#FFD300","brightRed":"#FFD300","brightGreen":"#FFD300","brightYellow":"#FFD300","brightBlue":"#FFD300","brightPurple":"#FFD300","brightCyan":"#FFD300","brightWhite":"#FFD300","foreground":"#FFD300","background":"#2B2400","cursorColor":"#FFD300"},{"name":"MonokaiDark","black":"#75715e","red":"#f92672","green":"#a6e22e","yellow":"#f4bf75","blue":"#66d9ef","purple":"#ae81ff","cyan":"#2AA198","white":"#f9f8f5","brightBlack":"#272822","brightRed":"#f92672","brightGreen":"#a6e22e","brightYellow":"#f4bf75","brightBlue":"#66d9ef","brightPurple":"#ae81ff","brightCyan":"#2AA198","brightWhite":"#f8f8f2","foreground":"#f8f8f2","background":"#272822","cursorColor":"#f8f8f2"},{"name":"MonokaiProRistretto","black":"#3E3838","red":"#DF7484","green":"#BBD87E","yellow":"#EDCE73","blue":"#DC9373","purple":"#A9AAE9","cyan":"#A4D7CC","white":"#FBF2F3","brightBlack":"#70696A","brightRed":"#DF7484","brightGreen":"#BBD87E","brightYellow":"#EDCE73","brightBlue":"#DC9373","brightPurple":"#A9AAE9","brightCyan":"#A4D7CC","brightWhite":"#FBF2F3","foreground":"#FBF2F3","background":"#3E3838","cursorColor":"#FBF2F3"},{"name":"MonokaiPro","black":"#363537","red":"#FF6188","green":"#A9DC76","yellow":"#FFD866","blue":"#FC9867","purple":"#AB9DF2","cyan":"#78DCE8","white":"#FDF9F3","brightBlack":"#908E8F","brightRed":"#FF6188","brightGreen":"#A9DC76","brightYellow":"#FFD866","brightBlue":"#FC9867","brightPurple":"#AB9DF2","brightCyan":"#78DCE8","brightWhite":"#FDF9F3","foreground":"#FDF9F3","background":"#363537","cursorColor":"#FDF9F3"},{"name":"MonokaiSoda","black":"#1a1a1a","red":"#f4005f","green":"#98e024","yellow":"#fa8419","blue":"#9d65ff","purple":"#f4005f","cyan":"#58d1eb","white":"#c4c5b5","brightBlack":"#625e4c","brightRed":"#f4005f","brightGreen":"#98e024","brightYellow":"#e0d561","brightBlue":"#9d65ff","brightPurple":"#f4005f","brightCyan":"#58d1eb","brightWhite":"#f6f6ef","foreground":"#c4c5b5","background":"#1a1a1a","cursorColor":"#c4c5b5"},{"name":"Morada","black":"#040404","red":"#0f49c4","green":"#48b117","yellow":"#e87324","blue":"#bc0116","purple":"#665b93","cyan":"#70a699","white":"#f5dcbe","brightBlack":"#4f7cbf","brightRed":"#1c96c7","brightGreen":"#3bff6f","brightYellow":"#efc31c","brightBlue":"#fb605b","brightPurple":"#975b5a","brightCyan":"#1eff8e","brightWhite":"#f6f5fb","foreground":"#ffffff","background":"#211f46","cursorColor":"#ffffff"},{"name":"N0tch2k","black":"#383838","red":"#a95551","green":"#666666","yellow":"#a98051","blue":"#657d3e","purple":"#767676","cyan":"#c9c9c9","white":"#d0b8a3","brightBlack":"#474747","brightRed":"#a97775","brightGreen":"#8c8c8c","brightYellow":"#a99175","brightBlue":"#98bd5e","brightPurple":"#a3a3a3","brightCyan":"#dcdcdc","brightWhite":"#d8c8bb","foreground":"#a0a0a0","background":"#222222","cursorColor":"#a0a0a0"},{"name":"neon-night","black":"#20242d","red":"#FF8E8E","green":"#7EFDD0","yellow":"#FCAD3F","blue":"#69B4F9","purple":"#DD92F6","cyan":"#8CE8ff","white":"#C9CCCD","brightBlack":"#20242d","brightRed":"#FF8E8E","brightGreen":"#7EFDD0","brightYellow":"#FCAD3F","brightBlue":"#69B4F9","brightPurple":"#DD92F6","brightCyan":"#8CE8ff","brightWhite":"#C9CCCD","foreground":"#C7C8FF","background":"#20242d","cursorColor":"#C7C8FF"},{"name":"Neopolitan","black":"#000000","red":"#800000","green":"#61ce3c","yellow":"#fbde2d","blue":"#253b76","purple":"#ff0080","cyan":"#8da6ce","white":"#f8f8f8","brightBlack":"#000000","brightRed":"#800000","brightGreen":"#61ce3c","brightYellow":"#fbde2d","brightBlue":"#253b76","brightPurple":"#ff0080","brightCyan":"#8da6ce","brightWhite":"#f8f8f8","foreground":"#ffffff","background":"#271f19","cursorColor":"#ffffff"},{"name":"Nep","black":"#000000","red":"#dd6f00","green":"#00dd6f","yellow":"#6fdd00","blue":"#6f00dd","purple":"#dd006f","cyan":"#006fdd","white":"#f2f2f2","brightBlack":"#7d7d7d","brightRed":"#ffb974","brightGreen":"#74ffb9","brightYellow":"#b9ff74","brightBlue":"#b974ff","brightPurple":"#ff74b9","brightCyan":"#74b9ff","brightWhite":"#ffffff","foreground":"#23476a","background":"#758480","cursorColor":"#23476a"},{"name":"Neutron","black":"#23252b","red":"#b54036","green":"#5ab977","yellow":"#deb566","blue":"#6a7c93","purple":"#a4799d","cyan":"#3f94a8","white":"#e6e8ef","brightBlack":"#23252b","brightRed":"#b54036","brightGreen":"#5ab977","brightYellow":"#deb566","brightBlue":"#6a7c93","brightPurple":"#a4799d","brightCyan":"#3f94a8","brightWhite":"#ebedf2","foreground":"#e6e8ef","background":"#1c1e22","cursorColor":"#e6e8ef"},{"name":"NightOwl","black":"#011627","red":"#EF5350","green":"#22da6e","yellow":"#addb67","blue":"#82aaff","purple":"#c792ea","cyan":"#21c7a8","white":"#ffffff","brightBlack":"#575656","brightRed":"#ef5350","brightGreen":"#22da6e","brightYellow":"#ffeb95","brightBlue":"#82aaff","brightPurple":"#c792ea","brightCyan":"#7fdbca","brightWhite":"#ffffff","foreground":"#d6deeb","background":"#011627","cursorColor":"#d6deeb"},{"name":"NightlionV1","black":"#4c4c4c","red":"#bb0000","green":"#5fde8f","yellow":"#f3f167","blue":"#276bd8","purple":"#bb00bb","cyan":"#00dadf","white":"#bbbbbb","brightBlack":"#555555","brightRed":"#ff5555","brightGreen":"#55ff55","brightYellow":"#ffff55","brightBlue":"#5555ff","brightPurple":"#ff55ff","brightCyan":"#55ffff","brightWhite":"#ffffff","foreground":"#bbbbbb","background":"#000000","cursorColor":"#bbbbbb"},{"name":"NightlionV2","black":"#4c4c4c","red":"#bb0000","green":"#04f623","yellow":"#f3f167","blue":"#64d0f0","purple":"#ce6fdb","cyan":"#00dadf","white":"#bbbbbb","brightBlack":"#555555","brightRed":"#ff5555","brightGreen":"#7df71d","brightYellow":"#ffff55","brightBlue":"#62cbe8","brightPurple":"#ff9bf5","brightCyan":"#00ccd8","brightWhite":"#ffffff","foreground":"#bbbbbb","background":"#171717","cursorColor":"#bbbbbb"},{"name":"nighty","black":"#373D48","red":"#9B3E46","green":"#095B32","yellow":"#808020","blue":"#1D3E6F","purple":"#823065","cyan":"#3A7458","white":"#828282","brightBlack":"#5C6370","brightRed":"#D0555F","brightGreen":"#119955","brightYellow":"#DFE048","brightBlue":"#4674B8","brightPurple":"#ED86C9","brightCyan":"#70D2A4","brightWhite":"#DFDFDF","foreground":"#DFDFDF","background":"#2F2F2F","cursorColor":"#DFDFDF"},{"name":"NordLight","black":"#003B4E","red":"#E64569","green":"#069F5F","yellow":"#DAB752","blue":"#439ECF","purple":"#D961DC","cyan":"#00B1BE","white":"#B3B3B3","brightBlack":"#3E89A1","brightRed":"#E4859A","brightGreen":"#A2CCA1","brightYellow":"#E1E387","brightBlue":"#6FBBE2","brightPurple":"#E586E7","brightCyan":"#96DCDA","brightWhite":"#DEDEDE","foreground":"#004f7c","background":"#ebeaf2","cursorColor":"#439ECF"},{"name":"Nord","black":"#3B4252","red":"#BF616A","green":"#A3BE8C","yellow":"#EBCB8B","blue":"#81A1C1","purple":"#B48EAD","cyan":"#88C0D0","white":"#E5E9F0","brightBlack":"#4C566A","brightRed":"#BF616A","brightGreen":"#A3BE8C","brightYellow":"#EBCB8B","brightBlue":"#81A1C1","brightPurple":"#B48EAD","brightCyan":"#8FBCBB","brightWhite":"#ECEFF4","foreground":"#D8DEE9","background":"#2E3440","cursorColor":"#D8DEE9"},{"name":"Novel","black":"#000000","red":"#cc0000","green":"#009600","yellow":"#d06b00","blue":"#0000cc","purple":"#cc00cc","cyan":"#0087cc","white":"#cccccc","brightBlack":"#808080","brightRed":"#cc0000","brightGreen":"#009600","brightYellow":"#d06b00","brightBlue":"#0000cc","brightPurple":"#cc00cc","brightCyan":"#0087cc","brightWhite":"#ffffff","foreground":"#3b2322","background":"#dfdbc3","cursorColor":"#3b2322"},{"name":"Obsidian","black":"#000000","red":"#a60001","green":"#00bb00","yellow":"#fecd22","blue":"#3a9bdb","purple":"#bb00bb","cyan":"#00bbbb","white":"#bbbbbb","brightBlack":"#555555","brightRed":"#ff0003","brightGreen":"#93c863","brightYellow":"#fef874","brightBlue":"#a1d7ff","brightPurple":"#ff55ff","brightCyan":"#55ffff","brightWhite":"#ffffff","foreground":"#cdcdcd","background":"#283033","cursorColor":"#cdcdcd"},{"name":"OceanDark","black":"#4F4F4F","red":"#AF4B57","green":"#AFD383","yellow":"#E5C079","blue":"#7D90A4","purple":"#A4799D","cyan":"#85A6A5","white":"#EEEDEE","brightBlack":"#7B7B7B","brightRed":"#AF4B57","brightGreen":"#CEFFAB","brightYellow":"#FFFECC","brightBlue":"#B5DCFE","brightPurple":"#FB9BFE","brightCyan":"#DFDFFD","brightWhite":"#FEFFFE","foreground":"#979CAC","background":"#1C1F27","cursorColor":"#979CAC"},{"name":"Ocean","black":"#000000","red":"#990000","green":"#00a600","yellow":"#999900","blue":"#0000b2","purple":"#b200b2","cyan":"#00a6b2","white":"#bfbfbf","brightBlack":"#666666","brightRed":"#e50000","brightGreen":"#00d900","brightYellow":"#e5e500","brightBlue":"#0000ff","brightPurple":"#e500e5","brightCyan":"#00e5e5","brightWhite":"#e5e5e5","foreground":"#ffffff","background":"#224fbc","cursorColor":"#ffffff"},{"name":"OceanicNext","black":"#121C21","red":"#E44754","green":"#89BD82","yellow":"#F7BD51","blue":"#5486C0","purple":"#B77EB8","cyan":"#50A5A4","white":"#FFFFFF","brightBlack":"#52606B","brightRed":"#E44754","brightGreen":"#89BD82","brightYellow":"#F7BD51","brightBlue":"#5486C0","brightPurple":"#B77EB8","brightCyan":"#50A5A4","brightWhite":"#FFFFFF","foreground":"#b3b8c3","background":"#121b21","cursorColor":"#b3b8c3"},{"name":"Ollie","black":"#000000","red":"#ac2e31","green":"#31ac61","yellow":"#ac4300","blue":"#2d57ac","purple":"#b08528","cyan":"#1fa6ac","white":"#8a8eac","brightBlack":"#5b3725","brightRed":"#ff3d48","brightGreen":"#3bff99","brightYellow":"#ff5e1e","brightBlue":"#4488ff","brightPurple":"#ffc21d","brightCyan":"#1ffaff","brightWhite":"#5b6ea7","foreground":"#8a8dae","background":"#222125","cursorColor":"#8a8dae"},{"name":"Omni","black":"#191622","red":"#E96379","green":"#67e480","yellow":"#E89E64","blue":"#78D1E1","purple":"#988BC7","cyan":"#FF79C6","white":"#ABB2BF","brightBlack":"#000000","brightRed":"#E96379","brightGreen":"#67e480","brightYellow":"#E89E64","brightBlue":"#78D1E1","brightPurple":"#988BC7","brightCyan":"#FF79C6","brightWhite":"#ffffff","foreground":"#ABB2BF","background":"#191622","cursorColor":"#ABB2BF"},{"name":"OneDark","black":"#000000","red":"#E06C75","green":"#98C379","yellow":"#D19A66","blue":"#61AFEF","purple":"#C678DD","cyan":"#56B6C2","white":"#ABB2BF","brightBlack":"#5C6370","brightRed":"#E06C75","brightGreen":"#98C379","brightYellow":"#D19A66","brightBlue":"#61AFEF","brightPurple":"#C678DD","brightCyan":"#56B6C2","brightWhite":"#FFFEFE","foreground":"#5C6370","background":"#1E2127","cursorColor":"#5C6370"},{"name":"OneHalfBlack","black":"#282c34","red":"#e06c75","green":"#98c379","yellow":"#e5c07b","blue":"#61afef","purple":"#c678dd","cyan":"#56b6c2","white":"#dcdfe4","brightBlack":"#282c34","brightRed":"#e06c75","brightGreen":"#98c379","brightYellow":"#e5c07b","brightBlue":"#61afef","brightPurple":"#c678dd","brightCyan":"#56b6c2","brightWhite":"#dcdfe4","foreground":"#dcdfe4","background":"#000000","cursorColor":"#dcdfe4"},{"name":"OneLight","black":"#000000","red":"#DA3E39","green":"#41933E","yellow":"#855504","blue":"#315EEE","purple":"#930092","cyan":"#0E6FAD","white":"#8E8F96","brightBlack":"#2A2B32","brightRed":"#DA3E39","brightGreen":"#41933E","brightYellow":"#855504","brightBlue":"#315EEE","brightPurple":"#930092","brightCyan":"#0E6FAD","brightWhite":"#FFFEFE","foreground":"#2A2B32","background":"#F8F8F8","cursorColor":"#2A2B32"},{"name":"palenight","black":"#292D3E","red":"#F07178","green":"#C3E88D","yellow":"#FFCB6B","blue":"#82AAFF","purple":"#C792EA","cyan":"#60ADEC","white":"#ABB2BF","brightBlack":"#959DCB","brightRed":"#F07178","brightGreen":"#C3E88D","brightYellow":"#FF5572","brightBlue":"#82AAFF","brightPurple":"#FFCB6B","brightCyan":"#676E95","brightWhite":"#FFFEFE","foreground":"#BFC7D5","background":"#292D3E","cursorColor":"#BFC7D5"},{"name":"Pali","black":"#0a0a0a","red":"#ab8f74","green":"#74ab8f","yellow":"#8fab74","blue":"#8f74ab","purple":"#ab748f","cyan":"#748fab","white":"#F2F2F2","brightBlack":"#5D5D5D","brightRed":"#FF1D62","brightGreen":"#9cc3af","brightYellow":"#FFD00A","brightBlue":"#af9cc3","brightPurple":"#FF1D62","brightCyan":"#4BB8FD","brightWhite":"#A020F0","foreground":"#d9e6f2","background":"#232E37","cursorColor":"#d9e6f2"},{"name":"Panda","black":"#1F1F20","red":"#FB055A","green":"#26FFD4","yellow":"#FDAA5A","blue":"#5C9FFF","purple":"#FC59A6","cyan":"#26FFD4","white":"#F0F0F0","brightBlack":"#5C6370","brightRed":"#FB055A","brightGreen":"#26FFD4","brightYellow":"#FEBE7E","brightBlue":"#55ADFF","brightPurple":"#FD95D0","brightCyan":"#26FFD4","brightWhite":"#F0F0F0","foreground":"#F0F0F0","background":"#1D1E20","cursorColor":"#F0F0F0"},{"name":"PaperColorDark","black":"#1C1C1C","red":"#AF005F","green":"#5FAF00","yellow":"#D7AF5F","blue":"#5FAFD7","purple":"#808080","cyan":"#D7875F","white":"#D0D0D0","brightBlack":"#585858","brightRed":"#5FAF5F","brightGreen":"#AFD700","brightYellow":"#AF87D7","brightBlue":"#FFAF00","brightPurple":"#FF5FAF","brightCyan":"#00AFAF","brightWhite":"#5F8787","foreground":"#D0D0D0","background":"#1C1C1C","cursorColor":"#D0D0D0"},{"name":"PaperColorLight","black":"#EEEEEE","red":"#AF0000","green":"#008700","yellow":"#5F8700","blue":"#0087AF","purple":"#878787","cyan":"#005F87","white":"#444444","brightBlack":"#BCBCBC","brightRed":"#D70000","brightGreen":"#D70087","brightYellow":"#8700AF","brightBlue":"#D75F00","brightPurple":"#D75F00","brightCyan":"#005FAF","brightWhite":"#005F87","foreground":"#444444","background":"#EEEEEE","cursorColor":"#444444"},{"name":"ParaisoDark","black":"#2f1e2e","red":"#ef6155","green":"#48b685","yellow":"#fec418","blue":"#06b6ef","purple":"#815ba4","cyan":"#5bc4bf","white":"#a39e9b","brightBlack":"#776e71","brightRed":"#ef6155","brightGreen":"#48b685","brightYellow":"#fec418","brightBlue":"#06b6ef","brightPurple":"#815ba4","brightCyan":"#5bc4bf","brightWhite":"#e7e9db","foreground":"#a39e9b","background":"#2f1e2e","cursorColor":"#a39e9b"},{"name":"PaulMillr","black":"#2a2a2a","red":"#ff0000","green":"#79ff0f","yellow":"#d3bf00","blue":"#396bd7","purple":"#b449be","cyan":"#66ccff","white":"#bbbbbb","brightBlack":"#666666","brightRed":"#ff0080","brightGreen":"#66ff66","brightYellow":"#f3d64e","brightBlue":"#709aed","brightPurple":"#db67e6","brightCyan":"#7adff2","brightWhite":"#ffffff","foreground":"#f2f2f2","background":"#000000","cursorColor":"#f2f2f2"},{"name":"PencilDark","black":"#212121","red":"#c30771","green":"#10a778","yellow":"#a89c14","blue":"#008ec4","purple":"#523c79","cyan":"#20a5ba","white":"#d9d9d9","brightBlack":"#424242","brightRed":"#fb007a","brightGreen":"#5fd7af","brightYellow":"#f3e430","brightBlue":"#20bbfc","brightPurple":"#6855de","brightCyan":"#4fb8cc","brightWhite":"#f1f1f1","foreground":"#f1f1f1","background":"#212121","cursorColor":"#f1f1f1"},{"name":"PencilLight","black":"#212121","red":"#c30771","green":"#10a778","yellow":"#a89c14","blue":"#008ec4","purple":"#523c79","cyan":"#20a5ba","white":"#d9d9d9","brightBlack":"#424242","brightRed":"#fb007a","brightGreen":"#5fd7af","brightYellow":"#f3e430","brightBlue":"#20bbfc","brightPurple":"#6855de","brightCyan":"#4fb8cc","brightWhite":"#f1f1f1","foreground":"#424242","background":"#f1f1f1","cursorColor":"#424242"},{"name":"Peppermint","black":"#353535","red":"#E64569","green":"#89D287","yellow":"#DAB752","blue":"#439ECF","purple":"#D961DC","cyan":"#64AAAF","white":"#B3B3B3","brightBlack":"#535353","brightRed":"#E4859A","brightGreen":"#A2CCA1","brightYellow":"#E1E387","brightBlue":"#6FBBE2","brightPurple":"#E586E7","brightCyan":"#96DCDA","brightWhite":"#DEDEDE","foreground":"#C7C7C7","background":"#000000","cursorColor":"#BBBBBB"},{"name":"Pixiefloss","black":"#2f2942","red":"#ff857f","green":"#48b685","yellow":"#e6c000","blue":"#ae81ff","purple":"#ef6155","cyan":"#c2ffdf","white":"#f8f8f2","brightBlack":"#75507b","brightRed":"#f1568e","brightGreen":"#5adba2","brightYellow":"#d5a425","brightBlue":"#c5a3ff","brightPurple":"#ef6155","brightCyan":"#c2ffff","brightWhite":"#f8f8f0","foreground":"#d1cae8","background":"#241f33","cursorColor":"#d1cae8"},{"name":"Pnevma","black":"#2f2e2d","red":"#a36666","green":"#90a57d","yellow":"#d7af87","blue":"#7fa5bd","purple":"#c79ec4","cyan":"#8adbb4","white":"#d0d0d0","brightBlack":"#4a4845","brightRed":"#d78787","brightGreen":"#afbea2","brightYellow":"#e4c9af","brightBlue":"#a1bdce","brightPurple":"#d7beda","brightCyan":"#b1e7dd","brightWhite":"#efefef","foreground":"#d0d0d0","background":"#1c1c1c","cursorColor":"#d0d0d0"},{"name":"PowerShell","black":"#000000","red":"#7E0008","green":"#098003","yellow":"#C4A000","blue":"#010083","purple":"#D33682","cyan":"#0E807F","white":"#7F7C7F","brightBlack":"#808080","brightRed":"#EF2929","brightGreen":"#1CFE3C","brightYellow":"#FEFE45","brightBlue":"#268AD2","brightPurple":"#FE13FA","brightCyan":"#29FFFE","brightWhite":"#C2C1C3","foreground":"#F6F6F7","background":"#052454","cursorColor":"#F6F6F7"},{"name":"Pro","black":"#000000","red":"#990000","green":"#00a600","yellow":"#999900","blue":"#2009db","purple":"#b200b2","cyan":"#00a6b2","white":"#bfbfbf","brightBlack":"#666666","brightRed":"#e50000","brightGreen":"#00d900","brightYellow":"#e5e500","brightBlue":"#0000ff","brightPurple":"#e500e5","brightCyan":"#00e5e5","brightWhite":"#e5e5e5","foreground":"#f2f2f2","background":"#000000","cursorColor":"#f2f2f2"},{"name":"PurplePeopleEater","black":"#0d1117","red":"#e34c26","green":"#238636","yellow":"#ed9a51","blue":"#a5d6ff","purple":"#6eb0e8","cyan":"#c09aeb","white":"#c9d1d9","brightBlack":"#0d1117","brightRed":"#ff7b72","brightGreen":"#3bab4a","brightYellow":"#ffa657","brightBlue":"#a5d6ff","brightPurple":"#79c0ff","brightCyan":"#b694df","brightWhite":"#c9d1d9","foreground":"#c9d1d9","background":"#161b22","cursorColor":"#c9d1d9"},{"name":"RedAlert","black":"#000000","red":"#d62e4e","green":"#71be6b","yellow":"#beb86b","blue":"#489bee","purple":"#e979d7","cyan":"#6bbeb8","white":"#d6d6d6","brightBlack":"#262626","brightRed":"#e02553","brightGreen":"#aff08c","brightYellow":"#dfddb7","brightBlue":"#65aaf1","brightPurple":"#ddb7df","brightCyan":"#b7dfdd","brightWhite":"#ffffff","foreground":"#ffffff","background":"#762423","cursorColor":"#ffffff"},{"name":"RedSands","black":"#000000","red":"#ff3f00","green":"#00bb00","yellow":"#e7b000","blue":"#0072ff","purple":"#bb00bb","cyan":"#00bbbb","white":"#bbbbbb","brightBlack":"#555555","brightRed":"#bb0000","brightGreen":"#00bb00","brightYellow":"#e7b000","brightBlue":"#0072ae","brightPurple":"#ff55ff","brightCyan":"#55ffff","brightWhite":"#ffffff","foreground":"#d7c9a7","background":"#7a251e","cursorColor":"#d7c9a7"},{"name":"Relaxed","black":"#151515","red":"#BC5653","green":"#909D63","yellow":"#EBC17A","blue":"#6A8799","purple":"#B06698","cyan":"#C9DFFF","white":"#D9D9D9","brightBlack":"#636363","brightRed":"#BC5653","brightGreen":"#A0AC77","brightYellow":"#EBC17A","brightBlue":"#7EAAC7","brightPurple":"#B06698","brightCyan":"#ACBBD0","brightWhite":"#F7F7F7","foreground":"#D9D9D9","background":"#353A44","cursorColor":"#D9D9D9"},{"name":"Rippedcasts","black":"#000000","red":"#cdaf95","green":"#a8ff60","yellow":"#bfbb1f","blue":"#75a5b0","purple":"#ff73fd","cyan":"#5a647e","white":"#bfbfbf","brightBlack":"#666666","brightRed":"#eecbad","brightGreen":"#bcee68","brightYellow":"#e5e500","brightBlue":"#86bdc9","brightPurple":"#e500e5","brightCyan":"#8c9bc4","brightWhite":"#e5e5e5","foreground":"#ffffff","background":"#2b2b2b","cursorColor":"#ffffff"},{"name":"Royal","black":"#241f2b","red":"#91284c","green":"#23801c","yellow":"#b49d27","blue":"#6580b0","purple":"#674d96","cyan":"#8aaabe","white":"#524966","brightBlack":"#312d3d","brightRed":"#d5356c","brightGreen":"#2cd946","brightYellow":"#fde83b","brightBlue":"#90baf9","brightPurple":"#a479e3","brightCyan":"#acd4eb","brightWhite":"#9e8cbd","foreground":"#514968","background":"#100815","cursorColor":"#514968"},{"name":"Sat","black":"#000000","red":"#dd0007","green":"#07dd00","yellow":"#ddd600","blue":"#0007dd","purple":"#d600dd","cyan":"#00ddd6","white":"#f2f2f2","brightBlack":"#7d7d7d","brightRed":"#ff7478","brightGreen":"#78ff74","brightYellow":"#fffa74","brightBlue":"#7478ff","brightPurple":"#fa74ff","brightCyan":"#74fffa","brightWhite":"#ffffff","foreground":"#23476a","background":"#758480","cursorColor":"#23476a"},{"name":"SeaShells","black":"#17384c","red":"#d15123","green":"#027c9b","yellow":"#fca02f","blue":"#1e4950","purple":"#68d4f1","cyan":"#50a3b5","white":"#deb88d","brightBlack":"#434b53","brightRed":"#d48678","brightGreen":"#628d98","brightYellow":"#fdd39f","brightBlue":"#1bbcdd","brightPurple":"#bbe3ee","brightCyan":"#87acb4","brightWhite":"#fee4ce","foreground":"#deb88d","background":"#09141b","cursorColor":"#deb88d"},{"name":"SeafoamPastel","black":"#757575","red":"#825d4d","green":"#728c62","yellow":"#ada16d","blue":"#4d7b82","purple":"#8a7267","cyan":"#729494","white":"#e0e0e0","brightBlack":"#8a8a8a","brightRed":"#cf937a","brightGreen":"#98d9aa","brightYellow":"#fae79d","brightBlue":"#7ac3cf","brightPurple":"#d6b2a1","brightCyan":"#ade0e0","brightWhite":"#e0e0e0","foreground":"#d4e7d4","background":"#243435","cursorColor":"#d4e7d4"},{"name":"Seti","black":"#323232","red":"#c22832","green":"#8ec43d","yellow":"#e0c64f","blue":"#43a5d5","purple":"#8b57b5","cyan":"#8ec43d","white":"#eeeeee","brightBlack":"#323232","brightRed":"#c22832","brightGreen":"#8ec43d","brightYellow":"#e0c64f","brightBlue":"#43a5d5","brightPurple":"#8b57b5","brightCyan":"#8ec43d","brightWhite":"#ffffff","foreground":"#cacecd","background":"#111213","cursorColor":"#cacecd"},{"name":"Shaman","black":"#012026","red":"#b2302d","green":"#00a941","yellow":"#5e8baa","blue":"#449a86","purple":"#00599d","cyan":"#5d7e19","white":"#405555","brightBlack":"#384451","brightRed":"#ff4242","brightGreen":"#2aea5e","brightYellow":"#8ed4fd","brightBlue":"#61d5ba","brightPurple":"#1298ff","brightCyan":"#98d028","brightWhite":"#58fbd6","foreground":"#405555","background":"#001015","cursorColor":"#405555"},{"name":"Shel","black":"#2c2423","red":"#ab2463","green":"#6ca323","yellow":"#ab6423","blue":"#2c64a2","purple":"#6c24a2","cyan":"#2ca363","white":"#918988","brightBlack":"#918988","brightRed":"#f588b9","brightGreen":"#c2ee86","brightYellow":"#f5ba86","brightBlue":"#8fbaec","brightPurple":"#c288ec","brightCyan":"#8feeb9","brightWhite":"#f5eeec","foreground":"#4882cd","background":"#2a201f","cursorColor":"#4882cd"},{"name":"Slate","black":"#222222","red":"#e2a8bf","green":"#81d778","yellow":"#c4c9c0","blue":"#264b49","purple":"#a481d3","cyan":"#15ab9c","white":"#02c5e0","brightBlack":"#ffffff","brightRed":"#ffcdd9","brightGreen":"#beffa8","brightYellow":"#d0ccca","brightBlue":"#7ab0d2","brightPurple":"#c5a7d9","brightCyan":"#8cdfe0","brightWhite":"#e0e0e0","foreground":"#35b1d2","background":"#222222","cursorColor":"#35b1d2"},{"name":"Smyck","black":"#000000","red":"#C75646","green":"#8EB33B","yellow":"#D0B03C","blue":"#72B3CC","purple":"#C8A0D1","cyan":"#218693","white":"#B0B0B0","brightBlack":"#5D5D5D","brightRed":"#E09690","brightGreen":"#CDEE69","brightYellow":"#FFE377","brightBlue":"#9CD9F0","brightPurple":"#FBB1F9","brightCyan":"#77DFD8","brightWhite":"#F7F7F7","foreground":"#F7F7F7","background":"#242424","cursorColor":"#F7F7F7"},{"name":"Snazzy","black":"#282A36","red":"#FF5C57","green":"#5AF78E","yellow":"#F3F99D","blue":"#57C7FF","purple":"#FF6AC1","cyan":"#9AEDFE","white":"#F1F1F0","brightBlack":"#686868","brightRed":"#FF5C57","brightGreen":"#5AF78E","brightYellow":"#F3F99D","brightBlue":"#57C7FF","brightPurple":"#FF6AC1","brightCyan":"#9AEDFE","brightWhite":"#EFF0EB","foreground":"#EFF0EB","background":"#282A36","cursorColor":"#97979B"},{"name":"SoftServer","black":"#000000","red":"#a2686a","green":"#9aa56a","yellow":"#a3906a","blue":"#6b8fa3","purple":"#6a71a3","cyan":"#6ba58f","white":"#99a3a2","brightBlack":"#666c6c","brightRed":"#dd5c60","brightGreen":"#bfdf55","brightYellow":"#deb360","brightBlue":"#62b1df","brightPurple":"#606edf","brightCyan":"#64e39c","brightWhite":"#d2e0de","foreground":"#99a3a2","background":"#242626","cursorColor":"#99a3a2"},{"name":"SolarizedDarcula","black":"#25292a","red":"#f24840","green":"#629655","yellow":"#b68800","blue":"#2075c7","purple":"#797fd4","cyan":"#15968d","white":"#d2d8d9","brightBlack":"#25292a","brightRed":"#f24840","brightGreen":"#629655","brightYellow":"#b68800","brightBlue":"#2075c7","brightPurple":"#797fd4","brightCyan":"#15968d","brightWhite":"#d2d8d9","foreground":"#d2d8d9","background":"#3d3f41","cursorColor":"#d2d8d9"},{"name":"SolarizedDarkHigherContrast","black":"#002831","red":"#d11c24","green":"#6cbe6c","yellow":"#a57706","blue":"#2176c7","purple":"#c61c6f","cyan":"#259286","white":"#eae3cb","brightBlack":"#006488","brightRed":"#f5163b","brightGreen":"#51ef84","brightYellow":"#b27e28","brightBlue":"#178ec8","brightPurple":"#e24d8e","brightCyan":"#00b39e","brightWhite":"#fcf4dc","foreground":"#9cc2c3","background":"#001e27","cursorColor":"#9cc2c3"},{"name":"SolarizedDark","black":"#073642","red":"#DC322F","green":"#859900","yellow":"#CF9A6B","blue":"#268BD2","purple":"#D33682","cyan":"#2AA198","white":"#EEE8D5","brightBlack":"#657B83","brightRed":"#D87979","brightGreen":"#88CF76","brightYellow":"#657B83","brightBlue":"#2699FF","brightPurple":"#D33682","brightCyan":"#43B8C3","brightWhite":"#FDF6E3","foreground":"#839496","background":"#002B36","cursorColor":"#839496"},{"name":"SolarizedLight","black":"#073642","red":"#DC322F","green":"#859900","yellow":"#B58900","blue":"#268BD2","purple":"#D33682","cyan":"#2AA198","white":"#EEE8D5","brightBlack":"#002B36","brightRed":"#CB4B16","brightGreen":"#586E75","brightYellow":"#657B83","brightBlue":"#839496","brightPurple":"#6C71C4","brightCyan":"#93A1A1","brightWhite":"#FDF6E3","foreground":"#657B83","background":"#FDF6E3","cursorColor":"#657B83"},{"name":"Sonokai","black":"#2C2E34","red":"#FC5D7C","green":"#9ED072","yellow":"#E7C664","blue":"#F39660","purple":"#B39DF3","cyan":"#76CCE0","white":"#E2E2E3","brightBlack":"#2C2E34","brightRed":"#FC5D7C","brightGreen":"#9ED072","brightYellow":"#E7C664","brightBlue":"#F39660","brightPurple":"#B39DF3","brightCyan":"#76CCE0","brightWhite":"#E2E2E3","foreground":"#E2E2E3","background":"#2C2E34","cursorColor":"#E2E2E3"},{"name":"Spacedust","black":"#6e5346","red":"#e35b00","green":"#5cab96","yellow":"#e3cd7b","blue":"#0f548b","purple":"#e35b00","cyan":"#06afc7","white":"#f0f1ce","brightBlack":"#684c31","brightRed":"#ff8a3a","brightGreen":"#aecab8","brightYellow":"#ffc878","brightBlue":"#67a0ce","brightPurple":"#ff8a3a","brightCyan":"#83a7b4","brightWhite":"#fefff1","foreground":"#ecf0c1","background":"#0a1e24","cursorColor":"#ecf0c1"},{"name":"SpaceGrayEightiesDull","black":"#15171c","red":"#b24a56","green":"#92b477","yellow":"#c6735a","blue":"#7c8fa5","purple":"#a5789e","cyan":"#80cdcb","white":"#b3b8c3","brightBlack":"#555555","brightRed":"#ec5f67","brightGreen":"#89e986","brightYellow":"#fec254","brightBlue":"#5486c0","brightPurple":"#bf83c1","brightCyan":"#58c2c1","brightWhite":"#ffffff","foreground":"#c9c6bc","background":"#222222","cursorColor":"#c9c6bc"},{"name":"SpaceGrayEighties","black":"#15171c","red":"#ec5f67","green":"#81a764","yellow":"#fec254","blue":"#5486c0","purple":"#bf83c1","cyan":"#57c2c1","white":"#efece7","brightBlack":"#555555","brightRed":"#ff6973","brightGreen":"#93d493","brightYellow":"#ffd256","brightBlue":"#4d84d1","brightPurple":"#ff55ff","brightCyan":"#83e9e4","brightWhite":"#ffffff","foreground":"#bdbaae","background":"#222222","cursorColor":"#bdbaae"},{"name":"SpaceGray","black":"#000000","red":"#b04b57","green":"#87b379","yellow":"#e5c179","blue":"#7d8fa4","purple":"#a47996","cyan":"#85a7a5","white":"#b3b8c3","brightBlack":"#000000","brightRed":"#b04b57","brightGreen":"#87b379","brightYellow":"#e5c179","brightBlue":"#7d8fa4","brightPurple":"#a47996","brightCyan":"#85a7a5","brightWhite":"#ffffff","foreground":"#b3b8c3","background":"#20242d","cursorColor":"#b3b8c3"},{"name":"Spring","black":"#000000","red":"#ff4d83","green":"#1f8c3b","yellow":"#1fc95b","blue":"#1dd3ee","purple":"#8959a8","cyan":"#3e999f","white":"#ffffff","brightBlack":"#000000","brightRed":"#ff0021","brightGreen":"#1fc231","brightYellow":"#d5b807","brightBlue":"#15a9fd","brightPurple":"#8959a8","brightCyan":"#3e999f","brightWhite":"#ffffff","foreground":"#ecf0c1","background":"#0a1e24","cursorColor":"#ecf0c1"},{"name":"Square","black":"#050505","red":"#e9897c","green":"#b6377d","yellow":"#ecebbe","blue":"#a9cdeb","purple":"#75507b","cyan":"#c9caec","white":"#f2f2f2","brightBlack":"#141414","brightRed":"#f99286","brightGreen":"#c3f786","brightYellow":"#fcfbcc","brightBlue":"#b6defb","brightPurple":"#ad7fa8","brightCyan":"#d7d9fc","brightWhite":"#e2e2e2","foreground":"#a1a1a1","background":"#0a1e24","cursorColor":"#a1a1a1"},{"name":"Srcery","black":"#1C1B19","red":"#FF3128","green":"#519F50","yellow":"#FBB829","blue":"#5573A3","purple":"#E02C6D","cyan":"#0AAEB3","white":"#918175","brightBlack":"#2D2B28","brightRed":"#F75341","brightGreen":"#98BC37","brightYellow":"#FED06E","brightBlue":"#8EB2F7","brightPurple":"#E35682","brightCyan":"#53FDE9","brightWhite":"#FCE8C3","foreground":"#ebdbb2","background":"#282828","cursorColor":"#ebdbb2"},{"name":"summer-pop","black":"#666666","red":"#FF1E8E","green":"#8EFF1E","yellow":"#FFFB00","blue":"#1E8EFF","purple":"#E500E5","cyan":"#00E5E5","white":"#E5E5E5","brightBlack":"#666666","brightRed":"#FF1E8E","brightGreen":"#8EFF1E","brightYellow":"#FFFB00","brightBlue":"#1E8EFF","brightPurple":"#E500E5","brightCyan":"#00E5E5","brightWhite":"#E5E5E5","foreground":"#FFFFFF","background":"#272822","cursorColor":"#FFFFFF"},{"name":"Sundried","black":"#302b2a","red":"#a7463d","green":"#587744","yellow":"#9d602a","blue":"#485b98","purple":"#864651","cyan":"#9c814f","white":"#c9c9c9","brightBlack":"#4d4e48","brightRed":"#aa000c","brightGreen":"#128c21","brightYellow":"#fc6a21","brightBlue":"#7999f7","brightPurple":"#fd8aa1","brightCyan":"#fad484","brightWhite":"#ffffff","foreground":"#c9c9c9","background":"#1a1818","cursorColor":"#c9c9c9"},{"name":"sweet-eliverlara","black":"#282C34","red":"#ED254E","green":"#71F79F","yellow":"#F9DC5C","blue":"#7CB7FF","purple":"#C74DED","cyan":"#00C1E4","white":"#DCDFE4","brightBlack":"#282C34","brightRed":"#ED254E","brightGreen":"#71F79F","brightYellow":"#F9DC5C","brightBlue":"#7CB7FF","brightPurple":"#C74DED","brightCyan":"#00C1E4","brightWhite":"#DCDFE4","foreground":"#C3C7D1","background":"#282C34","cursorColor":"#C3C7D1"},{"name":"SweetTerminal","black":"#3F3F54","red":"#f60055","green":"#06c993","yellow":"#9700be","blue":"#f69154","purple":"#ec89cb","cyan":"#60ADEC","white":"#ABB2BF","brightBlack":"#959DCB","brightRed":"#f60055","brightGreen":"#06c993","brightYellow":"#9700be","brightBlue":"#f69154","brightPurple":"#ec89cb","brightCyan":"#00dded","brightWhite":"#ffffff","foreground":"#ffffff","background":"#222235","cursorColor":"#ffffff"},{"name":"Symphonic","black":"#000000","red":"#dc322f","green":"#56db3a","yellow":"#ff8400","blue":"#0084d4","purple":"#b729d9","cyan":"#ccccff","white":"#ffffff","brightBlack":"#1b1d21","brightRed":"#dc322f","brightGreen":"#56db3a","brightYellow":"#ff8400","brightBlue":"#0084d4","brightPurple":"#b729d9","brightCyan":"#ccccff","brightWhite":"#ffffff","foreground":"#ffffff","background":"#000000","cursorColor":"#ffffff"},{"name":"SynthWave","black":"#011627","red":"#fe4450","green":"#72f1b8","yellow":"#fede5d","blue":"#03edf9","purple":"#ff7edb","cyan":"#03edf9","white":"#ffffff","brightBlack":"#575656","brightRed":"#fe4450","brightGreen":"#72f1b8","brightYellow":"#fede5d","brightBlue":"#03edf9","brightPurple":"#ff7edb","brightCyan":"#03edf9","brightWhite":"#ffffff","foreground":"#ffffff","background":"#262335","cursorColor":"#03edf9"},{"name":"Teerb","black":"#1c1c1c","red":"#d68686","green":"#aed686","yellow":"#d7af87","blue":"#86aed6","purple":"#d6aed6","cyan":"#8adbb4","white":"#d0d0d0","brightBlack":"#1c1c1c","brightRed":"#d68686","brightGreen":"#aed686","brightYellow":"#e4c9af","brightBlue":"#86aed6","brightPurple":"#d6aed6","brightCyan":"#b1e7dd","brightWhite":"#efefef","foreground":"#d0d0d0","background":"#262626","cursorColor":"#d0d0d0"},{"name":"Tender","black":"#1d1d1d","red":"#c5152f","green":"#c9d05c","yellow":"#ffc24b","blue":"#b3deef","purple":"#d3b987","cyan":"#73cef4","white":"#eeeeee","brightBlack":"#323232","brightRed":"#f43753","brightGreen":"#d9e066","brightYellow":"#facc72","brightBlue":"#c0eafb","brightPurple":"#efd093","brightCyan":"#a1d6ec","brightWhite":"#ffffff","foreground":"#EEEEEE","background":"#282828","cursorColor":"#EEEEEE"},{"name":"TerminalBasic","black":"#000000","red":"#990000","green":"#00a600","yellow":"#999900","blue":"#0000b2","purple":"#b200b2","cyan":"#00a6b2","white":"#bfbfbf","brightBlack":"#666666","brightRed":"#e50000","brightGreen":"#00d900","brightYellow":"#e5e500","brightBlue":"#0000ff","brightPurple":"#e500e5","brightCyan":"#00e5e5","brightWhite":"#e5e5e5","foreground":"#000000","background":"#ffffff","cursorColor":"#000000"},{"name":"TerminixDark","black":"#282a2e","red":"#a54242","green":"#a1b56c","yellow":"#de935f","blue":"#225555","purple":"#85678f","cyan":"#5e8d87","white":"#777777","brightBlack":"#373b41","brightRed":"#c63535","brightGreen":"#608360","brightYellow":"#fa805a","brightBlue":"#449da1","brightPurple":"#ba8baf","brightCyan":"#86c1b9","brightWhite":"#c5c8c6","foreground":"#868A8C","background":"#091116","cursorColor":"#868A8C"},{"name":"ThayerBright","black":"#1b1d1e","red":"#f92672","green":"#4df840","yellow":"#f4fd22","blue":"#2757d6","purple":"#8c54fe","cyan":"#38c8b5","white":"#ccccc6","brightBlack":"#505354","brightRed":"#ff5995","brightGreen":"#b6e354","brightYellow":"#feed6c","brightBlue":"#3f78ff","brightPurple":"#9e6ffe","brightCyan":"#23cfd5","brightWhite":"#f8f8f2","foreground":"#f8f8f8","background":"#1b1d1e","cursorColor":"#f8f8f8"},{"name":"Tin","black":"#000000","red":"#8d534e","green":"#4e8d53","yellow":"#888d4e","blue":"#534e8d","purple":"#8d4e88","cyan":"#4e888d","white":"#ffffff","brightBlack":"#000000","brightRed":"#b57d78","brightGreen":"#78b57d","brightYellow":"#b0b578","brightBlue":"#7d78b5","brightPurple":"#b578b0","brightCyan":"#78b0b5","brightWhite":"#ffffff","foreground":"#ffffff","background":"#2e2e35","cursorColor":"#ffffff"},{"name":"TokyoNightLight","black":"#0f0f14","red":"#8c4351","green":"#485e30","yellow":"#8f5e15","blue":"#34548a","purple":"#5a4a78","cyan":"#0f4b6e","white":"#343b58","brightBlack":"#9699a3","brightRed":"#8c4351","brightGreen":"#485e30","brightYellow":"#8f5e15","brightBlue":"#34548a","brightPurple":"#5a4a78","brightCyan":"#0f4b6e","brightWhite":"#343b58","foreground":"#565a6e","background":"#d5d6db","cursorColor":"#565a6e"},{"name":"TokyoNightStorm","black":"#414868","red":"#f7768e","green":"#9ece6a","yellow":"#e0af68","blue":"#7aa2f7","purple":"#bb9af7","cyan":"#7dcfff","white":"#c0caf5","brightBlack":"#414868","brightRed":"#f7768e","brightGreen":"#9ece6a","brightYellow":"#e0af68","brightBlue":"#7aa2f7","brightPurple":"#bb9af7","brightCyan":"#7dcfff","brightWhite":"#c0caf5","foreground":"#c0caf5","background":"#24283b","cursorColor":"#c0caf5"},{"name":"TokyoNight","black":"#414868","red":"#f7768e","green":"#9ece6a","yellow":"#e0af68","blue":"#7aa2f7","purple":"#bb9af7","cyan":"#7dcfff","white":"#a9b1d6","brightBlack":"#414868","brightRed":"#f7768e","brightGreen":"#9ece6a","brightYellow":"#e0af68","brightBlue":"#7aa2f7","brightPurple":"#bb9af7","brightCyan":"#7dcfff","brightWhite":"#c0caf5","foreground":"#c0caf5","background":"#1a1b26","cursorColor":"#c0caf5"},{"name":"TomorrowNightBlue","black":"#000000","red":"#FF9DA3","green":"#D1F1A9","yellow":"#FFEEAD","blue":"#BBDAFF","purple":"#EBBBFF","cyan":"#99FFFF","white":"#FFFEFE","brightBlack":"#000000","brightRed":"#FF9CA3","brightGreen":"#D0F0A8","brightYellow":"#FFEDAC","brightBlue":"#BADAFF","brightPurple":"#EBBAFF","brightCyan":"#99FFFF","brightWhite":"#FFFEFE","foreground":"#FFFEFE","background":"#002451","cursorColor":"#FFFEFE"},{"name":"TomorrowNightBright","black":"#000000","red":"#D54E53","green":"#B9CA49","yellow":"#E7C547","blue":"#79A6DA","purple":"#C397D8","cyan":"#70C0B1","white":"#FFFEFE","brightBlack":"#000000","brightRed":"#D44D53","brightGreen":"#B9C949","brightYellow":"#E6C446","brightBlue":"#79A6DA","brightPurple":"#C396D7","brightCyan":"#70C0B1","brightWhite":"#FFFEFE","foreground":"#E9E9E9","background":"#000000","cursorColor":"#E9E9E9"},{"name":"TomorrowNightEighties","black":"#000000","red":"#F27779","green":"#99CC99","yellow":"#FFCC66","blue":"#6699CC","purple":"#CC99CC","cyan":"#66CCCC","white":"#FFFEFE","brightBlack":"#000000","brightRed":"#F17779","brightGreen":"#99CC99","brightYellow":"#FFCC66","brightBlue":"#6699CC","brightPurple":"#CC99CC","brightCyan":"#66CCCC","brightWhite":"#FFFEFE","foreground":"#CCCCCC","background":"#2C2C2C","cursorColor":"#CCCCCC"},{"name":"TomorrowNight","black":"#000000","red":"#CC6666","green":"#B5BD68","yellow":"#F0C674","blue":"#81A2BE","purple":"#B293BB","cyan":"#8ABEB7","white":"#FFFEFE","brightBlack":"#000000","brightRed":"#CC6666","brightGreen":"#B5BD68","brightYellow":"#F0C574","brightBlue":"#80A1BD","brightPurple":"#B294BA","brightCyan":"#8ABDB6","brightWhite":"#FFFEFE","foreground":"#C5C8C6","background":"#1D1F21","cursorColor":"#C4C8C5"},{"name":"Tomorrow","black":"#000000","red":"#C82828","green":"#718C00","yellow":"#EAB700","blue":"#4171AE","purple":"#8959A8","cyan":"#3E999F","white":"#FFFEFE","brightBlack":"#000000","brightRed":"#C82828","brightGreen":"#708B00","brightYellow":"#E9B600","brightBlue":"#4170AE","brightPurple":"#8958A7","brightCyan":"#3D999F","brightWhite":"#FFFEFE","foreground":"#4D4D4C","background":"#FFFFFF","cursorColor":"#4C4C4C"},{"name":"ToyChest","black":"#2c3f58","red":"#be2d26","green":"#1a9172","yellow":"#db8e27","blue":"#325d96","purple":"#8a5edc","cyan":"#35a08f","white":"#23d183","brightBlack":"#336889","brightRed":"#dd5944","brightGreen":"#31d07b","brightYellow":"#e7d84b","brightBlue":"#34a6da","brightPurple":"#ae6bdc","brightCyan":"#42c3ae","brightWhite":"#d5d5d5","foreground":"#31d07b","background":"#24364b","cursorColor":"#31d07b"},{"name":"Treehouse","black":"#321300","red":"#b2270e","green":"#44a900","yellow":"#aa820c","blue":"#58859a","purple":"#97363d","cyan":"#b25a1e","white":"#786b53","brightBlack":"#433626","brightRed":"#ed5d20","brightGreen":"#55f238","brightYellow":"#f2b732","brightBlue":"#85cfed","brightPurple":"#e14c5a","brightCyan":"#f07d14","brightWhite":"#ffc800","foreground":"#786b53","background":"#191919","cursorColor":"#786b53"},{"name":"Twilight","black":"#141414","red":"#c06d44","green":"#afb97a","yellow":"#c2a86c","blue":"#44474a","purple":"#b4be7c","cyan":"#778385","white":"#ffffd4","brightBlack":"#262626","brightRed":"#de7c4c","brightGreen":"#ccd88c","brightYellow":"#e2c47e","brightBlue":"#5a5e62","brightPurple":"#d0dc8e","brightCyan":"#8a989b","brightWhite":"#ffffd4","foreground":"#ffffd4","background":"#141414","cursorColor":"#ffffd4"},{"name":"Ura","black":"#000000","red":"#c21b6f","green":"#6fc21b","yellow":"#c26f1b","blue":"#1b6fc2","purple":"#6f1bc2","cyan":"#1bc26f","white":"#808080","brightBlack":"#808080","brightRed":"#ee84b9","brightGreen":"#b9ee84","brightYellow":"#eeb984","brightBlue":"#84b9ee","brightPurple":"#b984ee","brightCyan":"#84eeb9","brightWhite":"#e5e5e5","foreground":"#23476a","background":"#feffee","cursorColor":"#23476a"},{"name":"Urple","black":"#000000","red":"#b0425b","green":"#37a415","yellow":"#ad5c42","blue":"#564d9b","purple":"#6c3ca1","cyan":"#808080","white":"#87799c","brightBlack":"#5d3225","brightRed":"#ff6388","brightGreen":"#29e620","brightYellow":"#f08161","brightBlue":"#867aed","brightPurple":"#a05eee","brightCyan":"#eaeaea","brightWhite":"#bfa3ff","foreground":"#877a9b","background":"#1b1b23","cursorColor":"#877a9b"},{"name":"Vag","black":"#303030","red":"#a87139","green":"#39a871","yellow":"#71a839","blue":"#7139a8","purple":"#a83971","cyan":"#3971a8","white":"#8a8a8a","brightBlack":"#494949","brightRed":"#b0763b","brightGreen":"#3bb076","brightYellow":"#76b03b","brightBlue":"#763bb0","brightPurple":"#b03b76","brightCyan":"#3b76b0","brightWhite":"#cfcfcf","foreground":"#d9e6f2","background":"#191f1d","cursorColor":"#d9e6f2"},{"name":"Vaughn","black":"#25234f","red":"#705050","green":"#60b48a","yellow":"#dfaf8f","blue":"#5555ff","purple":"#f08cc3","cyan":"#8cd0d3","white":"#709080","brightBlack":"#709080","brightRed":"#dca3a3","brightGreen":"#60b48a","brightYellow":"#f0dfaf","brightBlue":"#5555ff","brightPurple":"#ec93d3","brightCyan":"#93e0e3","brightWhite":"#ffffff","foreground":"#dcdccc","background":"#25234f","cursorColor":"#dcdccc"},{"name":"VibrantInk","black":"#878787","red":"#ff6600","green":"#ccff04","yellow":"#ffcc00","blue":"#44b4cc","purple":"#9933cc","cyan":"#44b4cc","white":"#f5f5f5","brightBlack":"#555555","brightRed":"#ff0000","brightGreen":"#00ff00","brightYellow":"#ffff00","brightBlue":"#0000ff","brightPurple":"#ff00ff","brightCyan":"#00ffff","brightWhite":"#e5e5e5","foreground":"#ffffff","background":"#000000","cursorColor":"#ffffff"},{"name":"VSCodeDark+","black":"#6A787A","red":"#E9653B","green":"#39E9A8","yellow":"#E5B684","blue":"#44AAE6","purple":"#E17599","cyan":"#3DD5E7","white":"#C3DDE1","brightBlack":"#598489","brightRed":"#E65029","brightGreen":"#00FF9A","brightYellow":"#E89440","brightBlue":"#009AFB","brightPurple":"#FF578F","brightCyan":"#5FFFFF","brightWhite":"#D9FBFF","foreground":"#CCCCCC","background":"#1E1E1E","cursorColor":"#CCCCCC"},{"name":"VSCodeLight+","black":"#020202","red":"#CD3232","green":"#00BC00","yellow":"#A5A900","blue":"#0752A8","purple":"#BC05BC","cyan":"#0598BC","white":"#343434","brightBlack":"#5E5E5E","brightRed":"#cd3333","brightGreen":"#1BCE1A","brightYellow":"#ADBB5B","brightBlue":"#0752A8","brightPurple":"#C451CE","brightCyan":"#52A8C7","brightWhite":"#A6A3A6","foreground":"#020202","background":"#f9f9f9","cursorColor":"#020202"},{"name":"WarmNeon","black":"#000000","red":"#e24346","green":"#39b13a","yellow":"#dae145","blue":"#4261c5","purple":"#f920fb","cyan":"#2abbd4","white":"#d0b8a3","brightBlack":"#fefcfc","brightRed":"#e97071","brightGreen":"#9cc090","brightYellow":"#ddda7a","brightBlue":"#7b91d6","brightPurple":"#f674ba","brightCyan":"#5ed1e5","brightWhite":"#d8c8bb","foreground":"#afdab6","background":"#404040","cursorColor":"#afdab6"},{"name":"Wez","black":"#000000","red":"#cc5555","green":"#55cc55","yellow":"#cdcd55","blue":"#5555cc","purple":"#cc55cc","cyan":"#7acaca","white":"#cccccc","brightBlack":"#555555","brightRed":"#ff5555","brightGreen":"#55ff55","brightYellow":"#ffff55","brightBlue":"#5555ff","brightPurple":"#ff55ff","brightCyan":"#55ffff","brightWhite":"#ffffff","foreground":"#b3b3b3","background":"#000000","cursorColor":"#b3b3b3"},{"name":"WildCherry","black":"#000507","red":"#d94085","green":"#2ab250","yellow":"#ffd16f","blue":"#883cdc","purple":"#ececec","cyan":"#c1b8b7","white":"#fff8de","brightBlack":"#009cc9","brightRed":"#da6bac","brightGreen":"#f4dca5","brightYellow":"#eac066","brightBlue":"#308cba","brightPurple":"#ae636b","brightCyan":"#ff919d","brightWhite":"#e4838d","foreground":"#dafaff","background":"#1f1726","cursorColor":"#dafaff"},{"name":"Wombat","black":"#000000","red":"#ff615a","green":"#b1e969","yellow":"#ebd99c","blue":"#5da9f6","purple":"#e86aff","cyan":"#82fff7","white":"#dedacf","brightBlack":"#313131","brightRed":"#f58c80","brightGreen":"#ddf88f","brightYellow":"#eee5b2","brightBlue":"#a5c7ff","brightPurple":"#ddaaff","brightCyan":"#b7fff9","brightWhite":"#ffffff","foreground":"#dedacf","background":"#171717","cursorColor":"#dedacf"},{"name":"Wryan","black":"#333333","red":"#8c4665","green":"#287373","yellow":"#7c7c99","blue":"#395573","purple":"#5e468c","cyan":"#31658c","white":"#899ca1","brightBlack":"#3d3d3d","brightRed":"#bf4d80","brightGreen":"#53a6a6","brightYellow":"#9e9ecb","brightBlue":"#477ab3","brightPurple":"#7e62b3","brightCyan":"#6096bf","brightWhite":"#c0c0c0","foreground":"#999993","background":"#101010","cursorColor":"#999993"},{"name":"Wzoreck","black":"#2E3436","red":"#FC6386","green":"#424043","yellow":"#FCE94F","blue":"#FB976B","purple":"#75507B","cyan":"#34E2E2","white":"#FFFFFF","brightBlack":"#989595","brightRed":"#FC6386","brightGreen":"#A9DC76","brightYellow":"#FCE94F","brightBlue":"#FB976B","brightPurple":"#AB9DF2","brightCyan":"#34E2E2","brightWhite":"#D1D1C0","foreground":"#FCFCFA","background":"#424043","cursorColor":"#FCFCFA"},{"name":"Zenburn","black":"#4d4d4d","red":"#705050","green":"#60b48a","yellow":"#f0dfaf","blue":"#506070","purple":"#dc8cc3","cyan":"#8cd0d3","white":"#dcdccc","brightBlack":"#709080","brightRed":"#dca3a3","brightGreen":"#c3bf9f","brightYellow":"#e0cf9f","brightBlue":"#94bff3","brightPurple":"#ec93d3","brightCyan":"#93e0e3","brightWhite":"#ffffff","foreground":"#dcdccc","background":"#3f3f3f","cursorColor":"#dcdccc"}]');

/***/ })

};
;
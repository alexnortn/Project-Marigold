function pug_attr(t,e,n,f){return e!==!1&&null!=e&&(e||"class"!==t&&"style"!==t)?e===!0?" "+(f?t:t+'="'+t+'"'):("function"==typeof e.toJSON&&(e=e.toJSON()),"string"==typeof e||(e=JSON.stringify(e),n||e.indexOf('"')===-1)?(n&&(e=pug_escape(e))," "+t+'="'+e+'"'):" "+t+"='"+e.replace(/'/g,"&#39;")+"'"):""}
function pug_attrs(t,r){var a="";for(var s in t)if(pug_has_own_property.call(t,s)){var u=t[s];if("class"===s){u=pug_classes(u),a=pug_attr(s,u,!1,r)+a;continue}"style"===s&&(u=pug_style(u)),a+=pug_attr(s,u,!1,r)}return a}
function pug_classes(s,r){return Array.isArray(s)?pug_classes_array(s,r):s&&"object"==typeof s?pug_classes_object(s):s||""}
function pug_classes_array(r,a){for(var s,e="",u="",c=Array.isArray(a),g=0;g<r.length;g++)s=pug_classes(r[g]),s&&(c&&a[g]&&(s=pug_escape(s)),e=e+u+s,u=" ");return e}
function pug_classes_object(r){var a="",n="";for(var o in r)o&&r[o]&&pug_has_own_property.call(r,o)&&(a=a+n+o,n=" ");return a}
function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_has_own_property=Object.prototype.hasOwnProperty;
var pug_match_html=/["&<>]/;
function pug_merge(r,e){if(1===arguments.length){for(var t=r[0],a=1;a<r.length;a++)t=pug_merge(t,r[a]);return t}for(var g in e)if("class"===g){var l=r[g]||[];r[g]=(Array.isArray(l)?l:[l]).concat(e[g]||[])}else if("style"===g){var l=pug_style(r[g]),n=pug_style(e[g]);r[g]=l+(l&&n&&";")+n}else r[g]=e[g];return r}
function pug_rethrow(n,e,r,t){if(!(n instanceof Error))throw n;if(!("undefined"==typeof window&&e||t))throw n.message+=" on line "+r,n;try{t=t||require("fs").readFileSync(e,"utf8")}catch(e){pug_rethrow(n,null,r)}var i=3,a=t.split("\n"),o=Math.max(r-i,0),h=Math.min(a.length,r+i),i=a.slice(o,h).map(function(n,e){var t=e+o+1;return(t==r?"  > ":"    ")+t+"| "+n}).join("\n");throw n.path=e,n.message=(e||"Pug")+":"+r+"\n"+i+"\n\n"+n.message,n}
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}module.exports = function(locals, pug) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (bios_text, case_studies, contact, feature, select_work, title, welcome_text) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003C!DOCTYPE html\u003E";
;pug_debug_line = 2;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Chtml\u003E";
;pug_debug_line = 3;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Chead\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Ctitle\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Ftitle\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"\u002Fcss\u002Fall.css\"\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\".\u002Fplugins\u002Fslick\u002Fslick.css\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\".\u002Fplugins\u002Fslick\u002Fslick-theme.css\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fmaxcdn.bootstrapcdn.com\u002Ffont-awesome\u002F4.4.0\u002Fcss\u002Ffont-awesome.min.css\"\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003C!-- https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F26960703\u002Fhow-to-change-the-color-of-header-bar-and-address-bar-in-newest-android-chrome-v --\u003E\n\u003C!-- Chrome, Firefox OS and Opera --\u003E\n\u003Cmeta name=\"theme-color\" content=\"#232323\"\u003E\n\u003C!-- Windows Phone --\u003E\n\u003Cmeta name=\"msapplication-navbutton-color\" content=\"#232323\"\u003E\n\u003C!-- iOS Safari --\u003E\n\u003Cmeta name=\"apple-mobile-web-app-status-bar-style\" content=\"#232323\"\u003E\n\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003C\u002Fhead\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cdiv id=\"wrapper\"\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- NAV MENU--\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"nav-trigger\" type=\"checkbox\" id=\"nav-trigger\"\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"plus_plus_plus\" for=\"nav-trigger\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cnav class=\"nav plus_plus\"\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"header\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"logo-header\"\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Flogo.svg\" alt=\"main logo\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-content\"\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul id=\"web-lab-nav\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"href": "#web-lab"},{'data-nav': "web-lab"}]), true)) + "\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Web Lab\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"href": "#bios"},{'data-nav': "bios"}]), true)) + "\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Bios\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"href": "#works"},{'data-nav': "works"}]), true)) + "\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Works\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"href": "#contact"},{'data-nav': "contact"}]), true)) + "\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Contact\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"social\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"google.com\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-envelope fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Falexnortn\" target=\"_blank\"\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-twitter fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"google.com\"\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-vimeo-square fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Falexnortn\" target=\"_blank\"\u003E";
;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-github fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"google.com\"\u003E";
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-behance-square fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fnav\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FNAV MENU--\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- PAGINATION | INJECTED--\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"plus\" id=\"pagination\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FPAGINATION--\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- HEADER--\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cheader class=\"plus\" id=\"header\"\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"logo\"\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Flogo.svg\" alt=\"main logo\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FHEADER  --\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- SITE content--\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"content-wrapper\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- INTERACTIVE PAGE--\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection" + (pug_attrs(pug_merge([{"class": "section","id": "web-lab"},{'data-inproject': true}]), true)) + "\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csummary class=\"plus\" id=\"greeting\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E\u003C\u002Fp\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = welcome_text.greeting_text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = welcome_text.discipline_text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = welcome_text.discipline_text_2) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fsummary\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"lab-options plus\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-options-element\" type=\"checkbox\" id=\"lab-options-element\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"button\" for=\"lab-options-element\"\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "f(x)\u003C\u002Fp\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"lab-menu\"\u003E";
;pug_debug_line = 70;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-radio\" type=\"radio\" name=\"lab-radio\" id=\"fluid-radio\" value=\"1\" checked=\"checked\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel for=\"fluid-radio\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Fluid\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 74;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 75;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-radio\" type=\"radio\" name=\"lab-radio\" id=\"perlin-radio\" value=\"2\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel for=\"perlin-radio\"\u003E";
;pug_debug_line = 76;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Perlin\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 77;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 78;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-radio\" type=\"radio\" name=\"lab-radio\" id=\"debug-radio\" value=\"3\"\u003E";
;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel for=\"debug-radio\"\u003E";
;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Debug\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 82;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"lab-what plus\"\u003E";
;pug_debug_line = 83;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-what-element\" type=\"checkbox\" id=\"lab-what-element\"\u003E";
;pug_debug_line = 84;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"button\" for=\"lab-what-element\"\u003E";
;pug_debug_line = 85;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 85;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "?\u003C\u002Fp\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 86;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"lab-details\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Glyph simulation rendered using p5js\u003Cbr\u003EPhysics applied using toxiclibs\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 89;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scroll-arrow plus_plus\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa  fa-angle-down fa-2x\"\u003E\u003C\u002Fi\u003E           \u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 92;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FINTERACTIVE--\u003E";
;pug_debug_line = 95;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--BIOS SECTION--\u003E";
;pug_debug_line = 96;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection" + (pug_attrs(pug_merge([{"class": "section","id": "bios"},{'data-inproject': false}]), true)) + "\u003E";
;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"bios-wrapper\"\u003E";
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bios-title sticky\" id=\"bios-title\"\u003E";
;pug_debug_line = 99;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Fname.svg\" alt=\"Alex Norton\"\u003E";
;pug_debug_line = 100;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp id=\"bios-title-p\"\u003E";
;pug_debug_line = 100;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = bios_text.title) ? "" : pug_interp) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 101;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bios-content\" id=\"bios-content\"\u003E";
;pug_debug_line = 102;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Fself.jpg\" alt=\"Alex Norton Portrait\"\u003E";
;pug_debug_line = 103;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"copy\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cq\u003E";
;pug_debug_line = 104;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = bios_text.description_pull) ? "" : pug_interp) + "\u003C\u002Fq\u003E";
;pug_debug_line = 105;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 105;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "About\u003C\u002Fh4\u003E";
;pug_debug_line = 106;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer body-copy\" id=\"self-short\"\u003E";
;pug_debug_line = 106;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = bios_text.description_short) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 107;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer body-copy\" id=\"self-long\"\u003E";
;pug_debug_line = 107;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = bios_text.description_long) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 108;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca id=\"resume\" href=\"\u002Fimages\u002FNorton-Alex-Resume.pdf\" target=\"_blank\"\u003E";
;pug_debug_line = 108;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Résumé\u003C\u002Fa\u003E";
;pug_debug_line = 109;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch5 id=\"bios-more\"\u003E";
;pug_debug_line = 109;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "{ more }\u003C\u002Fh5\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 110;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FBIOS SECTION  --\u003E";
;pug_debug_line = 113;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--WORKS SECTION--\u003E";
;pug_debug_line = 114;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection" + (pug_attrs(pug_merge([{"class": "section","id": "works"},{'data-inproject': false}]), true)) + "\u003E";
;pug_debug_line = 115;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"works-wrapper\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- CASE STUDY ITERATOR--\u003E";
;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate case_studies
var pug_obj0 = case_studies;
if ('number' == typeof pug_obj0.length) {

  for (var index = 0, pug_length0 = pug_obj0.length; index < pug_length0; index++) {
    var result = pug_obj0[index];

;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "case-study case-study-view parallax"},{'data-inproject': true}, {'data-casestudy': index}, {'id': result.route}]), true)) + "\u003E";
;pug_debug_line = 119;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- CASE STUDY OVERVIEW--\u003E";
;pug_debug_line = 121;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"case-study-overview\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
;pug_debug_line = 123;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"description-wrapper\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.project_type) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 125;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 125;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 126;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_short) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 128;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero-box\"\u003E";
;pug_debug_line = 129;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"overlay\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 130;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"hero\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCASE STUDY OVERVIEW--\u003E";
;pug_debug_line = 132;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"case-study-contents parallax__group\"\u003E";
;pug_debug_line = 133;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"case-study-intro cf\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"main-description\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 135;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cq\u003E";
;pug_debug_line = 135;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = bios_text.description_pull) ? "" : pug_interp)) + "\u003C\u002Fq\u003E";
;pug_debug_line = 136;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 136;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Brief\u003C\u002Fh4\u003E";
;pug_debug_line = 137;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 137;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_long) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 138;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 138;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Process\u003C\u002Fh4\u003E";
;pug_debug_line = 139;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 139;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_long) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 140;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"meta-data\"\u003E";
;pug_debug_line = 141;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 142;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 142;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Client\u003C\u002Fli\u003E";
;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Client) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Year\u003C\u002Fli\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Year) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 147;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 148;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 148;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Role\u003C\u002Fli\u003E";
;pug_debug_line = 149;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 149;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Role) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 150;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 151;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 151;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Team\u003C\u002Fli\u003E";
;pug_debug_line = 152;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 152;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Team) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 153;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 154;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 154;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Discipline\u003C\u002Fli\u003E";
;pug_debug_line = 155;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 155;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Discipline) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 156;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Medium\u003C\u002Fli\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Medium) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 159;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 160;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 160;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Technologies\u003C\u002Fli\u003E";
;pug_debug_line = 161;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 161;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Technologies) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 162;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 163;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 163;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Duration\u003C\u002Fli\u003E";
;pug_debug_line = 164;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 164;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Duration) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 166;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- BIG MOMENT 0--\u003E";
;pug_debug_line = 167;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"big-moment-0-color\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 169;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- 2X PARALLAX IMAGES LEFT--\u003E";
;pug_debug_line = 170;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"para-box parallax__group\"\u003E";
;pug_debug_line = 171;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cblockquote class=\"left parallax__layer parallax__layer--fore\"\u003E";
;pug_debug_line = 171;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.pull_quotes[0]) ? "" : pug_interp)) + "\u003C\u002Fblockquote\u003E";
;pug_debug_line = 172;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E";
;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-left\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 174;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box image-box--bottom\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E";
;pug_debug_line = 175;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-left\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 178;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- GRID ITERATOR--\u003E";
;pug_debug_line = 179;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-grid-wrapper\" id=\"grid-one\"\u003E";
;pug_debug_line = 180;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid-slider slider-transition\" id=\"grid-one-slider\"\u003E";
;pug_debug_line = 181;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj1 = result.images;
if ('number' == typeof pug_obj1.length) {

  for (var index = 0, pug_length1 = pug_obj1.length; index < pug_length1; index++) {
    var image = pug_obj1[index];

;pug_debug_line = 182;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

} else {
  var pug_length1 = 0;
  for (var index in pug_obj1) {
    pug_length1++;
    var image = pug_obj1[index];

;pug_debug_line = 182;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 183;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj2 = result.images;
if ('number' == typeof pug_obj2.length) {

  for (var index = 0, pug_length2 = pug_obj2.length; index < pug_length2; index++) {
    var image = pug_obj2[index];

;pug_debug_line = 184;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': index}]), true)) + "\u003E";
;pug_debug_line = 185;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length2 = 0;
  for (var index in pug_obj2) {
    pug_length2++;
    var image = pug_obj2[index];

;pug_debug_line = 184;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': index}]), true)) + "\u003E";
;pug_debug_line = 185;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 186;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FGRID ITERATOR--\u003E";
;pug_debug_line = 188;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- Hard coded index, what was I thinking?--\u003E";
;pug_debug_line = 189;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"big-moment-1 parallax__group\"\u003E";
;pug_debug_line = 190;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"big-moment-1-color parallax__layer--back\""+pug_attr("style", pug_style(`background-image: url(${result.images[0].src})`), true, true)) + "\u003E";
;pug_debug_line = 190;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 192;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- GRID ITERATOR 2--\u003E";
;pug_debug_line = 193;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-grid-wrapper\" id=\"grid-two\"\u003E";
;pug_debug_line = 194;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid-slider slider-transition\" id=\"grid-two-slider\"\u003E";
;pug_debug_line = 195;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj3 = result.images;
if ('number' == typeof pug_obj3.length) {

  for (var index = 0, pug_length3 = pug_obj3.length; index < pug_length3; index++) {
    var image = pug_obj3[index];

;pug_debug_line = 196;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

} else {
  var pug_length3 = 0;
  for (var index in pug_obj3) {
    pug_length3++;
    var image = pug_obj3[index];

;pug_debug_line = 196;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 197;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj4 = result.images;
if ('number' == typeof pug_obj4.length) {

  for (var index = 0, pug_length4 = pug_obj4.length; index < pug_length4; index++) {
    var image = pug_obj4[index];

;pug_debug_line = 198;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': index}]), true)) + "\u003E";
;pug_debug_line = 199;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length4 = 0;
  for (var index in pug_obj4) {
    pug_length4++;
    var image = pug_obj4[index];

;pug_debug_line = 198;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': index}]), true)) + "\u003E";
;pug_debug_line = 199;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 200;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FGRID ITERATOR 2--\u003E";
;pug_debug_line = 202;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- 2X PARALLAX IMAGES RIGHT--\u003E";
;pug_debug_line = 203;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"para-box parallax__group\"\u003E";
;pug_debug_line = 203;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "  ";
;pug_debug_line = 204;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box right\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E";
;pug_debug_line = 205;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-right\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 207;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box right image-box--bottom\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E";
;pug_debug_line = 208;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-right\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 209;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cblockquote class=\"right parallax__layer parallax__layer--fore\"\u003E";
;pug_debug_line = 209;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.pull_quotes[0]) ? "" : pug_interp)) + "\u003C\u002Fblockquote\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 211;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"video-frame\"\u003E";
;pug_debug_line = 212;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ciframe src=\"\u002F\u002Fplayer.vimeo.com\u002Fvideo\u002F95969058\" width=\"1600\" height=\"1000\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen\u003E\u003C\u002Fiframe\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 214;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"big-moment-2 parallax__group\"\u003E";
;pug_debug_line = 214;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 215;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"big-moment-2-color\""+pug_attr("style", pug_style(`background-image: url(${result.images[0].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 216;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"img-box parallax__layer parallax__layer--fore\""+pug_attr("style", pug_style(`background-image: url(${result.images[0].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 217;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"caption\"\u003E";
;pug_debug_line = 217;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_long_2) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 219;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- 2X PARALLAX IMAGES LEFT--\u003E";
;pug_debug_line = 220;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"para-box\"\u003E";
;pug_debug_line = 221;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box image-box--center\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 222;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"caption center-caption\"\u003E";
;pug_debug_line = 222;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_long_2) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 224;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"big-moment-3\"\u003E";
;pug_debug_line = 225;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj5 = result.images;
if ('number' == typeof pug_obj5.length) {

  for (var index = 0, pug_length5 = pug_obj5.length; index < pug_length5; index++) {
    var image = pug_obj5[index];

;pug_debug_line = 226;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

} else {
  var pug_length5 = 0;
  for (var index in pug_obj5) {
    pug_length5++;
    var image = pug_obj5[index];

;pug_debug_line = 226;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var index in pug_obj0) {
    pug_length0++;
    var result = pug_obj0[index];

;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "case-study case-study-view parallax"},{'data-inproject': true}, {'data-casestudy': index}, {'id': result.route}]), true)) + "\u003E";
;pug_debug_line = 119;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- CASE STUDY OVERVIEW--\u003E";
;pug_debug_line = 121;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"case-study-overview\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
;pug_debug_line = 123;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"description-wrapper\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.project_type) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 125;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 125;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 126;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_short) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 128;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero-box\"\u003E";
;pug_debug_line = 129;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"overlay\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 130;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"hero\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCASE STUDY OVERVIEW--\u003E";
;pug_debug_line = 132;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"case-study-contents parallax__group\"\u003E";
;pug_debug_line = 133;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"case-study-intro cf\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"main-description\"\u003E";
;pug_debug_line = 134;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 135;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cq\u003E";
;pug_debug_line = 135;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = bios_text.description_pull) ? "" : pug_interp)) + "\u003C\u002Fq\u003E";
;pug_debug_line = 136;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 136;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Brief\u003C\u002Fh4\u003E";
;pug_debug_line = 137;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 137;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_long) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 138;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 138;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Process\u003C\u002Fh4\u003E";
;pug_debug_line = 139;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 139;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_long) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 140;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"meta-data\"\u003E";
;pug_debug_line = 141;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 142;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 142;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Client\u003C\u002Fli\u003E";
;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Client) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Year\u003C\u002Fli\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Year) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 147;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 148;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 148;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Role\u003C\u002Fli\u003E";
;pug_debug_line = 149;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 149;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Role) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 150;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 151;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 151;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Team\u003C\u002Fli\u003E";
;pug_debug_line = 152;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 152;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Team) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 153;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 154;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 154;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Discipline\u003C\u002Fli\u003E";
;pug_debug_line = 155;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 155;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Discipline) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 156;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Medium\u003C\u002Fli\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Medium) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 159;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 160;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 160;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Technologies\u003C\u002Fli\u003E";
;pug_debug_line = 161;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 161;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Technologies) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 162;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 163;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 163;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Duration\u003C\u002Fli\u003E";
;pug_debug_line = 164;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 164;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.meta.Duration) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 166;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- BIG MOMENT 0--\u003E";
;pug_debug_line = 167;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"big-moment-0-color\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 169;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- 2X PARALLAX IMAGES LEFT--\u003E";
;pug_debug_line = 170;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"para-box parallax__group\"\u003E";
;pug_debug_line = 171;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cblockquote class=\"left parallax__layer parallax__layer--fore\"\u003E";
;pug_debug_line = 171;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.pull_quotes[0]) ? "" : pug_interp)) + "\u003C\u002Fblockquote\u003E";
;pug_debug_line = 172;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E";
;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-left\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 174;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box image-box--bottom\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E";
;pug_debug_line = 175;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-left\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 178;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- GRID ITERATOR--\u003E";
;pug_debug_line = 179;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-grid-wrapper\" id=\"grid-one\"\u003E";
;pug_debug_line = 180;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid-slider slider-transition\" id=\"grid-one-slider\"\u003E";
;pug_debug_line = 181;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj6 = result.images;
if ('number' == typeof pug_obj6.length) {

  for (var index = 0, pug_length6 = pug_obj6.length; index < pug_length6; index++) {
    var image = pug_obj6[index];

;pug_debug_line = 182;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

} else {
  var pug_length6 = 0;
  for (var index in pug_obj6) {
    pug_length6++;
    var image = pug_obj6[index];

;pug_debug_line = 182;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 183;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj7 = result.images;
if ('number' == typeof pug_obj7.length) {

  for (var index = 0, pug_length7 = pug_obj7.length; index < pug_length7; index++) {
    var image = pug_obj7[index];

;pug_debug_line = 184;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': index}]), true)) + "\u003E";
;pug_debug_line = 185;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length7 = 0;
  for (var index in pug_obj7) {
    pug_length7++;
    var image = pug_obj7[index];

;pug_debug_line = 184;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': index}]), true)) + "\u003E";
;pug_debug_line = 185;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 186;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FGRID ITERATOR--\u003E";
;pug_debug_line = 188;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- Hard coded index, what was I thinking?--\u003E";
;pug_debug_line = 189;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"big-moment-1 parallax__group\"\u003E";
;pug_debug_line = 190;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"big-moment-1-color parallax__layer--back\""+pug_attr("style", pug_style(`background-image: url(${result.images[0].src})`), true, true)) + "\u003E";
;pug_debug_line = 190;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 192;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- GRID ITERATOR 2--\u003E";
;pug_debug_line = 193;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-grid-wrapper\" id=\"grid-two\"\u003E";
;pug_debug_line = 194;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid-slider slider-transition\" id=\"grid-two-slider\"\u003E";
;pug_debug_line = 195;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj8 = result.images;
if ('number' == typeof pug_obj8.length) {

  for (var index = 0, pug_length8 = pug_obj8.length; index < pug_length8; index++) {
    var image = pug_obj8[index];

;pug_debug_line = 196;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

} else {
  var pug_length8 = 0;
  for (var index in pug_obj8) {
    pug_length8++;
    var image = pug_obj8[index];

;pug_debug_line = 196;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 197;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj9 = result.images;
if ('number' == typeof pug_obj9.length) {

  for (var index = 0, pug_length9 = pug_obj9.length; index < pug_length9; index++) {
    var image = pug_obj9[index];

;pug_debug_line = 198;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': index}]), true)) + "\u003E";
;pug_debug_line = 199;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length9 = 0;
  for (var index in pug_obj9) {
    pug_length9++;
    var image = pug_obj9[index];

;pug_debug_line = 198;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': index}]), true)) + "\u003E";
;pug_debug_line = 199;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${result.images[index].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 200;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FGRID ITERATOR 2--\u003E";
;pug_debug_line = 202;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- 2X PARALLAX IMAGES RIGHT--\u003E";
;pug_debug_line = 203;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"para-box parallax__group\"\u003E";
;pug_debug_line = 203;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "  ";
;pug_debug_line = 204;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box right\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E";
;pug_debug_line = 205;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-right\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 207;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box right image-box--bottom\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E";
;pug_debug_line = 208;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"image-right\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 209;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cblockquote class=\"right parallax__layer parallax__layer--fore\"\u003E";
;pug_debug_line = 209;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.pull_quotes[0]) ? "" : pug_interp)) + "\u003C\u002Fblockquote\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 211;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"video-frame\"\u003E";
;pug_debug_line = 212;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ciframe src=\"\u002F\u002Fplayer.vimeo.com\u002Fvideo\u002F95969058\" width=\"1600\" height=\"1000\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen\u003E\u003C\u002Fiframe\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 214;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"big-moment-2 parallax__group\"\u003E";
;pug_debug_line = 214;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + " ";
;pug_debug_line = 215;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"big-moment-2-color\""+pug_attr("style", pug_style(`background-image: url(${result.images[0].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 216;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"img-box parallax__layer parallax__layer--fore\""+pug_attr("style", pug_style(`background-image: url(${result.images[0].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 217;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"caption\"\u003E";
;pug_debug_line = 217;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_long_2) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 219;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- 2X PARALLAX IMAGES LEFT--\u003E";
;pug_debug_line = 220;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"para-box\"\u003E";
;pug_debug_line = 221;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-box image-box--center\""+pug_attr("style", pug_style(`background-image: url(${result.hero})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 222;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"caption center-caption\"\u003E";
;pug_debug_line = 222;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_long_2) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 224;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"big-moment-3\"\u003E";
;pug_debug_line = 225;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate result.images
var pug_obj10 = result.images;
if ('number' == typeof pug_obj10.length) {

  for (var index = 0, pug_length10 = pug_obj10.length; index < pug_length10; index++) {
    var image = pug_obj10[index];

;pug_debug_line = 226;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

} else {
  var pug_length10 = 0;
  for (var index in pug_obj10) {
    pug_length10++;
    var image = pug_obj10[index];

;pug_debug_line = 226;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"big-moment-3-color\""+pug_attr("src", `${result.images[index].src}`, true, true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

;pug_debug_line = 229;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCASE STUDY ITERATOR--\u003E";
;pug_debug_line = 232;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--SELECT WORK GRID SECTION--\u003E";
;pug_debug_line = 233;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work\" id=\"select-work\"\u003E";
;pug_debug_line = 234;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"select-work-wrapper\"\u003E";
;pug_debug_line = 235;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 235;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Selected Works\u003C\u002Fh3\u003E";
;pug_debug_line = 236;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- SELECT-WORK ITERATOR--\u003E";
;pug_debug_line = 237;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 238;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate select_work
var pug_obj11 = select_work;
if ('number' == typeof pug_obj11.length) {

  for (var index = 0, pug_length11 = pug_obj11.length; index < pug_length11; index++) {
    var result = pug_obj11[index];

;pug_debug_line = 239;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli" + (pug_attrs(pug_merge([{"class": "select-work-item"},{'data-inproject': true}, {'data-projectIndex': index}, {'data-project': result.project}, {'id': result.preview}]), true)) + "\u003E";
;pug_debug_line = 240;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work-img-container\"\u003E";
;pug_debug_line = 241;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work-description\"\u003E";
;pug_debug_line = 242;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 242;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_short) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 243;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 244;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"select-work-img\""+pug_attr("style", pug_style(`background-image: url(${result.images[0].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 245;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 245;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fli\u003E";
  }

} else {
  var pug_length11 = 0;
  for (var index in pug_obj11) {
    pug_length11++;
    var result = pug_obj11[index];

;pug_debug_line = 239;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli" + (pug_attrs(pug_merge([{"class": "select-work-item"},{'data-inproject': true}, {'data-projectIndex': index}, {'data-project': result.project}, {'id': result.preview}]), true)) + "\u003E";
;pug_debug_line = 240;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work-img-container\"\u003E";
;pug_debug_line = 241;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work-description\"\u003E";
;pug_debug_line = 242;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 242;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.description_short) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 243;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 244;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"select-work-img\""+pug_attr("style", pug_style(`background-image: url(${result.images[0].src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 245;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 245;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = result.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fli\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Ful\u003E";
;pug_debug_line = 246;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FSELECT-WORK ITERATOR--\u003E";
;pug_debug_line = 247;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch5 id=\"select-more\"\u003E";
;pug_debug_line = 247;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "{ more }\u003C\u002Fh5\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 294;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FWORKS SECTION --\u003E";
;pug_debug_line = 297;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--FEATURE SECTION--\u003E";
;pug_debug_line = 299;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection class=\"feature\" id=\"feature\"\u003E";
;pug_debug_line = 300;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"feature-wrapper\"\u003E";
;pug_debug_line = 301;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 301;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Feature & Collaboration\u003C\u002Fh3\u003E";
;pug_debug_line = 302;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 303;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- FEATURE ITERATOR--\u003E";
;pug_debug_line = 304;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate feature
var pug_obj12 = feature;
if ('number' == typeof pug_obj12.length) {

  for (var index = 0, pug_length12 = pug_obj12.length; index < pug_length12; index++) {
    var result = pug_obj12[index];

;pug_debug_line = 305;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("style", pug_style(`background-image: url(${result.logo})`), true, true)) + "\u003E";
;pug_debug_line = 306;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `${result.link}`, true, true)+" target=\"_blank\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
  }

} else {
  var pug_length12 = 0;
  for (var index in pug_obj12) {
    pug_length12++;
    var result = pug_obj12[index];

;pug_debug_line = 305;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli" + (pug_attr("style", pug_style(`background-image: url(${result.logo})`), true, true)) + "\u003E";
;pug_debug_line = 306;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `${result.link}`, true, true)+" target=\"_blank\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 308;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FFEATURE SECTION  --\u003E";
;pug_debug_line = 311;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--CONTACT PAGE--\u003E";
;pug_debug_line = 312;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection" + (pug_attrs(pug_merge([{"class": "contact section","id": "contact"},{'data-inproject': false}]), true)) + "\u003E";
;pug_debug_line = 314;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- CONTACT BOX--\u003E";
;pug_debug_line = 315;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"contact-wrapper\"\u003E";
;pug_debug_line = 316;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"shout-out\"\u003E";
;pug_debug_line = 317;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 317;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.shout_out) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 318;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 318;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.shout_out_sub) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 319;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta\"\u003E";
;pug_debug_line = 320;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 320;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.cta) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 321;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"contact-social\"\u003E";
;pug_debug_line = 322;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"mailto:alexnortn@gmail.com\"\u003E";
;pug_debug_line = 323;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-envelope fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 324;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Falexnortn\" target=\"_blank\"\u003E";
;pug_debug_line = 325;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-twitter fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 326;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Falexnortn\" target=\"_blank\"\u003E";
;pug_debug_line = 327;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-github fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 328;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 328;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.email) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 329;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 329;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.phone) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 330;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"copywrite\"\u003E";
;pug_debug_line = 331;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 331;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.copywrite) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 333;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCONTACT BOX--\u003E";
;pug_debug_line = 335;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCONTACT PAGE   --\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 337;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FSITE CONTENT--\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\"js\u002Fbundle.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\".\u002Fplugins\u002Fslick\u002Fslick.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\".\u002Fplugins\u002Fwidowtamer\u002Fwidowtamer.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"bios_text" in locals_for_with?locals_for_with.bios_text:typeof bios_text!=="undefined"?bios_text:undefined,"case_studies" in locals_for_with?locals_for_with.case_studies:typeof case_studies!=="undefined"?case_studies:undefined,"contact" in locals_for_with?locals_for_with.contact:typeof contact!=="undefined"?contact:undefined,"feature" in locals_for_with?locals_for_with.feature:typeof feature!=="undefined"?feature:undefined,"select_work" in locals_for_with?locals_for_with.select_work:typeof select_work!=="undefined"?select_work:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"welcome_text" in locals_for_with?locals_for_with.welcome_text:typeof welcome_text!=="undefined"?welcome_text:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
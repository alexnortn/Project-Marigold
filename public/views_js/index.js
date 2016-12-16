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
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}module.exports = function(locals, pug) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (bios_text, case_studies, contact, feature, projects, title, welcome_text) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
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
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Clink rel=\"stylesheet\" ref=\"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Source+Sans+Pro:200,300,400,600,700\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003C!-- https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F26960703\u002Fhow-to-change-the-color-of-header-bar-and-address-bar-in-newest-android-chrome-v --\u003E\n\u003C!-- Chrome, Firefox OS and Opera --\u003E\n\u003Cmeta name=\"theme-color\" content=\"#232323\"\u003E\n\u003C!-- Windows Phone --\u003E\n\u003Cmeta name=\"msapplication-navbutton-color\" content=\"#232323\"\u003E\n\u003C!-- iOS Safari --\u003E\n\u003Cmeta name=\"apple-mobile-web-app-status-bar-style\" content=\"#232323\"\u003E\n\u003Cmeta name=\"viewport\" content=\"user-scalable=no, width=device-width, initial-scale=1, maximum-scale=1\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["caseStudyPreview"] = pug_interp = function(data, index){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "case-study case-study-window item case-study-item"}, {'data-inproject': false}, {'data-projectIndex': index}, {'data-project': data.route},  {'id': data.preview} ]), true)) + "\u003E";
;pug_debug_line = 21;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"case-study-overview endeavor-overview endeavor-overview-preview\"\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"description-wrapper\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.project_type) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero-box\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"hero\""+pug_attr("style", pug_style(`background-image: url(${data.image_hero})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["projectPreview"] = pug_interp = function(data, index){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli" + (pug_attrs(pug_merge([{"class": "select-work-item item project-item"}, {'data-inproject': false}, {'data-projectIndex': index}, {'data-project': data.route}, {'id': data.preview} ]), true)) + "\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work-img-container\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work-description\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.description.quote) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"select-work-img\""+pug_attr("style", pug_style(`background-image: url(${data.image_preview})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.name) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fli\u003E";
};
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorHeader"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-overview\"\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"description\"\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"description-wrapper\"\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.project_type) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.name) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero-box hero-parallax parallax__group\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"hero parallax__layer--back no-hover\""+pug_attr("style", pug_style(`background-image: url(${data.image_hero})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 83;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorIntro"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 84;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var description = data.description
;pug_debug_line = 85;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var meta = data.meta
;pug_debug_line = 86;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-intro cf\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-description\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " ";
;pug_debug_line = 88;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cq\u003E";
;pug_debug_line = 88;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = description.quote) ? "" : pug_interp)) + "\u003C\u002Fq\u003E";
;pug_debug_line = 89;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 89;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Brief\u003C\u002Fh4\u003E";
;pug_debug_line = 90;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 90;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = description.brief) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 91;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 91;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Challenge\u003C\u002Fh4\u003E";
;pug_debug_line = 92;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 92;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = description.challenge) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Solution\u003C\u002Fh4\u003E";
;pug_debug_line = 94;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 94;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = description.solution) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 95;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"meta-data\"\u003E";
;pug_debug_line = 96;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Client\u003C\u002Fli\u003E";
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.Client) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 99;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 100;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 100;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Year\u003C\u002Fli\u003E";
;pug_debug_line = 101;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 101;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.Year) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 102;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 103;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 103;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Role\u003C\u002Fli\u003E";
;pug_debug_line = 104;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 104;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.Role) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 105;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 106;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 106;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Team\u003C\u002Fli\u003E";
;pug_debug_line = 107;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 107;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.Team) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 108;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 109;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 109;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Discipline\u003C\u002Fli\u003E";
;pug_debug_line = 110;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 110;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.Discipline) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 111;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 112;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 112;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Medium\u003C\u002Fli\u003E";
;pug_debug_line = 113;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 113;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.Medium) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 114;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 115;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 115;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Technologies\u003C\u002Fli\u003E";
;pug_debug_line = 116;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 116;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.Technologies) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 117;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 118;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "Duration\u003C\u002Fli\u003E";
;pug_debug_line = 119;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 119;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = meta.Duration) ? "" : pug_interp)) + "\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 126;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorDescriptions"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sections = data.sections
;pug_debug_line = 128;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item cf\"\u003E";
;pug_debug_line = 129;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-description endeavor-item-left-100 no-border\"\u003E";
;pug_debug_line = 130;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate sections 
var pug_obj0 = sections ;
if ('number' == typeof pug_obj0.length) {

  for (var index = 0, pug_length0 = pug_obj0.length; index < pug_length0; index++) {
    var section = pug_obj0[index];

;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 132;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var index in pug_obj0) {
    pug_length0++;
    var section = pug_obj0[index];

;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 132;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 132;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 139;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorDescriptionsRight"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 140;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sections = data.sections
;pug_debug_line = 141;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item cf\"\u003E";
;pug_debug_line = 142;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-description endeavor-float-right\"\u003E";
;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate sections 
var pug_obj1 = sections ;
if ('number' == typeof pug_obj1.length) {

  for (var index = 0, pug_length1 = pug_obj1.length; index < pug_length1; index++) {
    var section = pug_obj1[index];

;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

} else {
  var pug_length1 = 0;
  for (var index in pug_obj1) {
    pug_length1++;
    var section = pug_obj1[index];

;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 152;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorDescriptionsBig"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 153;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sections = data.sections
;pug_debug_line = 154;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item cf\"\u003E";
;pug_debug_line = 155;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-description-big endeavor-item-left-100 no-border\"\u003E";
;pug_debug_line = 156;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate sections 
var pug_obj2 = sections ;
if ('number' == typeof pug_obj2.length) {

  for (var index = 0, pug_length2 = pug_obj2.length; index < pug_length2; index++) {
    var section = pug_obj2[index];

;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

} else {
  var pug_length2 = 0;
  for (var index in pug_obj2) {
    pug_length2++;
    var section = pug_obj2[index];

;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 166;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 167;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 168;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 169;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item-no-margin"
;pug_debug_line = 170;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["fsw",`${_class}`], [false,true]), false, true)) + "\u003E";
;pug_debug_line = 171;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"caption no-margin endeavor-padding-left-50 endeavor-width-500px\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 171;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 178;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFS2"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 179;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = datum.caption
;pug_debug_line = 180;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item fsw\"\u003E";
;pug_debug_line = 181;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"no-margin endeavor-caption-2 endeavor-padding-left-50 endeavor-width-60-prcnt\"\u003E";
;pug_debug_line = 181;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 188;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFSCenter"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 189;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = datum.caption
;pug_debug_line = 190;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-flex endeavor-flex-center fsw\"\u003E";
;pug_debug_line = 191;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"caption no-margin endeavor-text-center endeavor-width-500px\"\u003E";
;pug_debug_line = 191;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 198;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFSCenter2"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 199;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = datum.caption
;pug_debug_line = 200;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-flex endeavor-flex-center fsw\"\u003E";
;pug_debug_line = 201;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"endeavor-caption-2 no-margin endeavor-text-center endeavor-width-60-prcnt\"\u003E";
;pug_debug_line = 201;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 208;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFSCenter3"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 209;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = datum.caption
;pug_debug_line = 210;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"edeavor-item endeavor-flex endeavor-flex-center fsw\"\u003E";
;pug_debug_line = 211;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"endeavor-pull-quote no-margin endeavor-text-center endeavor-width-75-prcnt\"\u003E";
;pug_debug_line = 211;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 218;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorPullheaderCaptionFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 219;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subheader = data.subheader
;pug_debug_line = 220;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 221;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 222;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-125 endeavor-flex endeavor-flex-center endeavor-flex-column fsw\"\u003E";
;pug_debug_line = 223;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2" + (" class=\"endeavor-subheader endeavor-pull-quote\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 223;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = subheader) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 224;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-caption-2 no-margin endeavor-text-center endeavor-width-60-prcnt\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 224;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 232;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorContentFS"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 233;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var content = datum.content
;pug_debug_line = 234;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"edeavor-item fsw\"\u003E";
;pug_debug_line = 235;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"content no-margin endeavor-float-right endeavor-width-500px\"\u003E";
;pug_debug_line = 235;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 242;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorSubheaderFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 243;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subheader = data.subheader
;pug_debug_line = 244;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var ruleColor = data.ruleColor ? data.ruleColor : "#DFDFDF"
;pug_debug_line = 245;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 246;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"edeavor-item endeavor-item-top-125\"\u003E";
;pug_debug_line = 247;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 247;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.subheader) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 256;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorSubheaderCaptionFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 257;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subheader = data.subheader
;pug_debug_line = 258;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var ruleColor = data.ruleColor ? data.ruleColor : "#DFDFDF"
;pug_debug_line = 259;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 260;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"edeavor-item\"\u003E";
;pug_debug_line = 261;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 261;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.subheader) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 262;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"caption no-margin endeavor-item-top-15 endeavor-width-500px\"\u003E";
;pug_debug_line = 262;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 263;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Chr" + (" class=\"slight endeavor-item-top-25 fsw\""+pug_attr("style", pug_style(`border-color: ${ruleColor}`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 270;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorIntroFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 271;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _margin = data.margin ? data.margin : "endeavor-item"
;pug_debug_line = 272;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 273;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subtext = data.subtext
;pug_debug_line = 274;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 275;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 276;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-flex-column","endeavor-flex-center","fsw",`${_margin}`], [false,false,false,true]), false, true)+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 277;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch1" + (" class=\"endeavor-block endeavor-header\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 277;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.header) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 278;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-block endeavor-subtext\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 278;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.subtext) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 285;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorSectionIntroFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 286;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 287;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 288;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 289;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-top-125 endeavor-flex-column endeavor-flex-center fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 290;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2" + (" class=\"section-intro endeavor-block endeavor-header\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 290;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.header) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 297;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextLeftImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 298;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 299;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var superText = data.superText
;pug_debug_line = 300;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 301;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 302;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 303;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 305;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-between fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 306;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","endeavor-second","blur-up",`${sizeClass}`], [false,false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
;pug_debug_line = 307;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block\"\u003E";
;pug_debug_line = 308;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 308;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.superText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 309;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pulltext endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 309;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 316;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextLeftImage2FS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 317;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 318;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 319;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 320;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 321;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 323;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-between fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 324;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","endeavor-second","blur-up",`${sizeClass}`], [false,false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
;pug_debug_line = 325;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block\"\u003E";
;pug_debug_line = 326;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-caption-4 endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 326;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 333;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextRightImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 334;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 335;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var superText = data.superText
;pug_debug_line = 336;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 337;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 338;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 339;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 341;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-between fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 342;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","blur-up",`${sizeClass}`], [false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
;pug_debug_line = 343;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block endeavor-second\"\u003E";
;pug_debug_line = 344;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 344;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.superText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 345;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pulltext endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 345;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 352;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextRightImage2FS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 353;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 354;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 355;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 356;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 357;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 359;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-between fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 360;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","blur-up",`${sizeClass}`], [false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
;pug_debug_line = 361;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block endeavor-second\"\u003E";
;pug_debug_line = 362;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-caption-4 endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 362;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 369;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorLeftImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 370;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 371;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imagePadding = data.image.padding ? data.image.padding : 0
;pug_debug_line = 372;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 373;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var size = data.size ? data.size : "100%"
;pug_debug_line = 374;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 376;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-item-no-margin endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-start fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 377;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-contaner","endeavor-flex","endeavor-flex-center",`${sizeClass}`], [false,false,false,true]), false, true)) + "\u003E";
;pug_debug_line = 378;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up","style": pug_escape(pug_style(`width: ${size};height: ${size}`)),"src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 385;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorRightImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 386;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 387;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imagePadding = data.image.padding ? data.image.padding : 0
;pug_debug_line = 388;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 389;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var size = data.size ? data.size : "100%"
;pug_debug_line = 390;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 392;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-item-no-margin endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-end fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 393;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-contaner","endeavor-flex","endeavor-flex-center",`${sizeClass}`], [false,false,false,true]), false, true)) + "\u003E";
;pug_debug_line = 394;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up","style": pug_escape(pug_style(`width: ${size};height: ${size}`)),"src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 401;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextLeftFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 402;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 403;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var superText = data.superText
;pug_debug_line = 404;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 405;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 407;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-height-25vw endeavor-flex-start fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 408;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block\"\u003E";
;pug_debug_line = 409;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 409;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.superText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 410;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pulltext endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 410;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 417;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextRightFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 418;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 419;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var superText = data.superText
;pug_debug_line = 420;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 421;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 423;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-height-25vw endeavor-flex-end fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 424;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block endeavor-second\"\u003E";
;pug_debug_line = 425;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 425;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.superText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 426;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pulltext endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 426;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 433;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorNestedImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 434;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 435;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image2 = data.image2
;pug_debug_line = 436;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var marginBottom = data.margin ? data.margin : "" // $BLACK
;pug_debug_line = 437;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-flex-column\""+pug_attr("style", pug_style(`margin-bottom: ${marginBottom}`), true, true)) + "\u003E";
;pug_debug_line = 438;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
;pug_debug_line = 439;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up endeavor-width-40-prcnt endeavor-pos-rel endeavor-top-minus-15vw endeavor-flex-self-center endeavor-shadow-50","src": pug_escape(image.src_low)},{'data-src': image2.src}]), true)) + "\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 448;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 449;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 450;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
};
;pug_debug_line = 457;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImage100vw"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 458;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 459;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : ""
;pug_debug_line = 460;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","endeavor-item","blur-up","endeavor-width-100vw","endeavor-pos-rel",`${_class}`], [false,false,false,false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
};
;pug_debug_line = 467;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageNoTopFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 468;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 469;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-top-none blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
};
;pug_debug_line = 476;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageNoMarginFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 477;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 478;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-no-margin blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
};
;pug_debug_line = 485;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageNoBottomFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 486;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 487;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item endeavor-item-bottom-none blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
};
;pug_debug_line = 494;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageNoTop75"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 495;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 496;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-top-none blur-up endeavor-width-75-percent","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
};
;pug_debug_line = 503;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageFSList"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 504;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 505;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj3 = images;
if ('number' == typeof pug_obj3.length) {

  for (var index = 0, pug_length3 = pug_obj3.length; index < pug_length3; index++) {
    var image = pug_obj3[index];

;pug_debug_line = 506;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
  }

} else {
  var pug_length3 = 0;
  for (var index in pug_obj3) {
    pug_length3++;
    var image = pug_obj3[index];

;pug_debug_line = 506;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
  }

}

};
;pug_debug_line = 513;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImage75"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 514;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 515;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up endeavor-width-75-percent","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
};
;pug_debug_line = 522;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImage75List"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 523;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 524;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj4 = images;
if ('number' == typeof pug_obj4.length) {

  for (var index = 0, pug_length4 = pug_obj4.length; index < pug_length4; index++) {
    var image = pug_obj4[index];

;pug_debug_line = 525;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-25 blur-up endeavor-width-75-percent","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
  }

} else {
  var pug_length4 = 0;
  for (var index in pug_obj4) {
    pug_length4++;
    var image = pug_obj4[index];

;pug_debug_line = 525;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-25 blur-up endeavor-width-75-percent","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
  }

}

};
;pug_debug_line = 534;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorVideoFS"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 535;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var video = datum.video
;pug_debug_line = 536;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ciframe" + (" class=\"endeavor-item media-settings media-frame video-settings\""+" width=\"1920\" height=\"1080\""+pug_attr("src", video.src, true, true)+" frameborder=\"0\" allowfullscreen") + "\u003E\u003C\u002Fiframe\u003E";
};
;pug_debug_line = 543;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorPubFS"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 544;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var pub = datum.pub
;pug_debug_line = 545;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ciframe" + (" class=\"endeavor-item media-settings media-frame pub-settings\""+pug_attr("src", pub.src, true, true)+" frameborder=\"0\" allowfullscreen") + "\u003E\u003C\u002Fiframe\u003E";
};
;pug_debug_line = 552;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorPad"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 553;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _height = data.height ? data.height : "250px"
;pug_debug_line = 554;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item"
;pug_debug_line = 555;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["fsw",`${_class}`], [false,true]), false, true)+pug_attr("style", pug_style(`height: ${_height}`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 562;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTwoImageParallaxLeft"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 563;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image1 = data.image1
;pug_debug_line = 564;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image2 = data.image2
;pug_debug_line = 565;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var pullQuote = data.pullQuote
;pug_debug_line = 566;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-para-box endeavor-item parallax__group\"\u003E";
;pug_debug_line = 567;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cblockquote class=\"left parallax__layer parallax__layer--fore\"\u003E";
;pug_debug_line = 567;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pullQuote) ? "" : pug_interp)) + "\u003C\u002Fblockquote\u003E";
;pug_debug_line = 568;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-image-box endeavor-item-top endeavor-item-bottom-50\""+pug_attr("style", pug_style(`background-image: url(${image1.src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 569;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-image-box endeavor-item-bottom-125\""+pug_attr("style", pug_style(`background-image: url(${image2.src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 576;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTwoImageParallaxRight"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 577;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image1 = data.image1
;pug_debug_line = 578;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image2 = data.image2
;pug_debug_line = 579;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var pullQuote = data.pullQuote
;pug_debug_line = 580;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-para-box parallax__group\"\u003E";
;pug_debug_line = 580;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "  ";
;pug_debug_line = 581;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-image-box endeavor-item-top endeavor-item-bottom-50 right\""+pug_attr("style", pug_style(`background-image: url(${image1.src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 582;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-image-box right endeavor-item-bottom-125\""+pug_attr("style", pug_style(`background-image: url(${image2.src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 583;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cblockquote class=\"right parallax__layer parallax__layer--fore\"\u003E";
;pug_debug_line = 583;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pullQuote) ? "" : pug_interp)) + "\u003C\u002Fblockquote\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 590;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageGridIterator"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 591;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 592;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-125 grid image-grid-wrapper\"\u003E";
;pug_debug_line = 593;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid-slider slider-transition\"\u003E";
;pug_debug_line = 594;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj5 = images;
if ('number' == typeof pug_obj5.length) {

  for (var i = 0, pug_length5 = pug_obj5.length; i < pug_length5; i++) {
    var image = pug_obj5[i];

;pug_debug_line = 595;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fill-area\"\u003E";
;pug_debug_line = 596;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload limit-width-50vw big-moment-3-color endeavor-image-box--center","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}]), true)) + "\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length5 = 0;
  for (var i in pug_obj5) {
    pug_length5++;
    var image = pug_obj5[i];

;pug_debug_line = 595;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fill-area\"\u003E";
;pug_debug_line = 596;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload limit-width-50vw big-moment-3-color endeavor-image-box--center","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}]), true)) + "\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 597;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj6 = images;
if ('number' == typeof pug_obj6.length) {

  for (var i = 0, pug_length6 = pug_obj6.length; i < pug_length6; i++) {
    var image = pug_obj6[i];

;pug_debug_line = 598;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': i}]), true)) + "\u003E";
;pug_debug_line = 599;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${image.src_preview})`), true, true)) + "\u003E";
;pug_debug_line = 599;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length6 = 0;
  for (var i in pug_obj6) {
    pug_length6++;
    var image = pug_obj6[i];

;pug_debug_line = 598;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': i}]), true)) + "\u003E";
;pug_debug_line = 599;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${image.src_preview})`), true, true)) + "\u003E";
;pug_debug_line = 599;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 606;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorParallaxBehind"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 607;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 608;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-parallax-behind-fs endeavor-width-100vw parallax__group\"\u003E";
;pug_debug_line = 609;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-parallax-behind-support parallax__layer--back\""+pug_attr("style", pug_style(`background-image: url(${image.src})`), true, true)) + "\u003E";
;pug_debug_line = 609;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 616;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorParallaxCaptionRight"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 617;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imageBig = data.imageBig
;pug_debug_line = 618;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imageParallax = data.imageParallax
;pug_debug_line = 619;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 620;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item fsw endeavor-parallax-hybrid parallax__group\"\u003E";
;pug_debug_line = 620;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " ";
;pug_debug_line = 621;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-parallax-hybrid-color\""+pug_attr("style", pug_style(`background-image: url(${imageBig.src})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 622;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"lazyload img-box endeavor-parallax-hybrid-left-img-box parallax__layer parallax__layer--fore\""+pug_attr("src", `${imageParallax.src}`, true, true)) + "\u003E";
;pug_debug_line = 623;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"endeavor-parallax-hybrid-left-caption caption\"\u003E";
;pug_debug_line = 623;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 630;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorParallaxCaptionLeft"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 631;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imageBig = data.imageBig
;pug_debug_line = 632;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imageParallax = data.imageParallax
;pug_debug_line = 633;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 634;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item fsw endeavor-parallax-hybrid parallax__group\"\u003E";
;pug_debug_line = 634;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " ";
;pug_debug_line = 635;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-parallax-hybrid-color\""+pug_attr("style", pug_style(`background-image: url(${imageBig})`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 636;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"lazyload img-box endeavor-parallax-hybrid-right-img-box parallax__layer parallax__layer--fore\""+pug_attr("src", `${imageParallax.src}`, true, true)) + "\u003E";
;pug_debug_line = 637;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"endeavor-parallax-hybrid-right-caption caption\"\u003E";
;pug_debug_line = 637;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 644;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageCenterCaption"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 645;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 646;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 647;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-para-box fsw endeavor-flex-column\"\u003E";
;pug_debug_line = 648;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-width-50-prcnt img-box endeavor-image-box--center","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}]), true)) + "\u003E";
;pug_debug_line = 649;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"caption center-caption\"\u003E";
;pug_debug_line = 649;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 656;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageSlider"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 657;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 658;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-image-slider\"\u003E";
;pug_debug_line = 659;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj7 = images;
if ('number' == typeof pug_obj7.length) {

  for (var i = 0, pug_length7 = pug_obj7.length; i < pug_length7; i++) {
    var image = pug_obj7[i];

;pug_debug_line = 660;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-image-slider-color fsw","src": pug_escape(image.src_low)},{'data-src': images[i].src}]), true)) + "\u003E";
  }

} else {
  var pug_length7 = 0;
  for (var i in pug_obj7) {
    pug_length7++;
    var image = pug_obj7[i];

;pug_debug_line = 660;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-image-slider-color fsw","src": pug_escape(image.src_low)},{'data-src': images[i].src}]), true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 667;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageSlider75"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 668;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 669;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-image-slider endeavor-width-75-prcnt endeavor-center\"\u003E";
;pug_debug_line = 670;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj8 = images;
if ('number' == typeof pug_obj8.length) {

  for (var i = 0, pug_length8 = pug_obj8.length; i < pug_length8; i++) {
    var image = pug_obj8[i];

;pug_debug_line = 671;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-image-slider-color fsw","src": pug_escape(image.src_low)},{'data-src': images[i].src}]), true)) + "\u003E";
  }

} else {
  var pug_length8 = 0;
  for (var i in pug_obj8) {
    pug_length8++;
    var image = pug_obj8[i];

;pug_debug_line = 671;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-image-slider-color fsw","src": pug_escape(image.src_low)},{'data-src': images[i].src}]), true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 679;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCardCenter"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 680;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 681;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 682;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#A1A1A1"
;pug_debug_line = 683;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 684;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor2 = data.bgColor2 ? data.bgColor2 : "transparent"
;pug_debug_line = 685;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-flex-center endeavor-flex\"\u003E";
;pug_debug_line = 686;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-card endeavor-radius-50px endeavor-flex-center-main endeavor-square-250px endeavor-flex-column\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 687;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-50-25 endeavor-square-60px endeavor-center endeavor-circle endeavor-flex endeavor-flex-center endeavor-item-bottom-25\""+pug_attr("style", pug_style(`background-color: ${bgColor2}`), true, true)) + "\u003E";
;pug_debug_line = 688;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"lazyload endeavor-width-40-prcnt\""+pug_attr("src", `${image.src}`, true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 689;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2" + (" class=\"card-header endeavor-text-center\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 689;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 697;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorVerticalComparison"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 698;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 699;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textLeft = data.textLeft
;pug_debug_line = 700;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textRight = data.textRight
;pug_debug_line = 701;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#A1A1A1"
;pug_debug_line = 702;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 703;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor2 = data.bgColor2 ? data.bgColor2 : "transparent"
;pug_debug_line = 704;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var lineColor = data.lineColor ? data.lineColor : "transparent"
;pug_debug_line = 705;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var weight = data.first ? "600" : "200"
;pug_debug_line = 706;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var classd = data.last ? "endeavor-vertical-last" : ""
;pug_debug_line = 707;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-flex-center endeavor-flex-column endeavor-height-200px\"\u003E";
;pug_debug_line = 708;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-vertical-rule","endeavor-pos-abs","endeavor-height-200px",`${classd}`], [false,false,false,true]), false, true)+pug_attr("style", pug_style(`background-color: ${lineColor}`), true, true)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 709;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-25 endeavor-square-60px endeavor-center endeavor-circle endeavor-flex endeavor-flex-center endeavor-push-1\""+pug_attr("style", pug_style(`background-color: ${bgColor2}`), true, true)) + "\u003E";
;pug_debug_line = 710;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (" class=\"lazyload endeavor-width-40-prcnt\""+pug_attr("src", `${image.src}`, true, true)) + "\u003E";
;pug_debug_line = 711;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pos-abs endeavor-width-150px endeavor-left-100px endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor};font-weight: ${weight}`), true, true)) + "\u003E";
;pug_debug_line = 711;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = textLeft) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 712;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pos-abs endeavor-width-150px endeavor-right-100px endeavor-text-right\""+pug_attr("style", pug_style(`color: ${textColor};font-weight: ${weight}`), true, true)) + "\u003E";
;pug_debug_line = 712;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = textRight) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 724;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeader"] = pug_interp = function(data, _width, _textColor){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 725;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 726;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 727;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = _textColor ? _textColor : "#232323" // $BLACK
;pug_debug_line = 728;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-all-25\""+pug_attr("style", pug_style(`border-color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 729;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch5" + (pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 729;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh5\u003E";
;pug_debug_line = 730;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"caption caption-mod endeavor-text-left no-margin endeavor-item-top-5\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 730;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 737;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeader"] = pug_interp = function(data, _width){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 738;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header;
;pug_debug_line = 739;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image_top = data.image_top;
;pug_debug_line = 740;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images;
;pug_debug_line = 741;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-all-25\"\u003E";
;pug_debug_line = 742;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up fsw","src": pug_escape(image_top.src_low)},{'data-src': image_top.src}]), true)) + "\u003E";
;pug_debug_line = 743;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4 class=\"endeavor-item-bottom-15 endeavor-text-center endeavor-item-top-50\"\u003E";
;pug_debug_line = 743;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 744;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj9 = images;
if ('number' == typeof pug_obj9.length) {

  for (var index = 0, pug_length9 = pug_obj9.length; index < pug_length9; index++) {
    var image = pug_obj9[index];

;pug_debug_line = 745;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
  }

} else {
  var pug_length9 = 0;
  for (var index in pug_obj9) {
    pug_length9++;
    var image = pug_obj9[index];

;pug_debug_line = 745;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}]), true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 752;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeaderGrid"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 753;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _width = (1 / (data.length + 0.5)) * 100; //- % of available width | 0.5 experimentally determined spacing coefficiant
;pug_debug_line = 754;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var marginClass = data.noMargin ? "endeavor-item-no-margin" : "endeavor-item" // $BLACK
;pug_debug_line = 755;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 756;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var contents = data.contents
;pug_debug_line = 757;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-flex-row-nowrap","endeavor-flex-around",`${marginClass}`], [false,false,true]), false, true)) + "\u003E";
;pug_debug_line = 758;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate contents
var pug_obj10 = contents;
if ('number' == typeof pug_obj10.length) {

  for (var index = 0, pug_length10 = pug_obj10.length; index < pug_length10; index++) {
    var content = pug_obj10[index];

;pug_debug_line = 759;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeader"](content, _width, textColor);
  }

} else {
  var pug_length10 = 0;
  for (var index in pug_obj10) {
    pug_length10++;
    var content = pug_obj10[index];

;pug_debug_line = 759;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeader"](content, _width, textColor);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 766;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeaderGrid"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 767;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _width = (1 / (data.length + 0.5)) * 100; //- % of available width | 0.5 experimentally determined spacing coefficiant
;pug_debug_line = 768;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-flex-row-nowrap endeavor-flex-around\"\u003E";
;pug_debug_line = 769;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate data
var pug_obj11 = data;
if ('number' == typeof pug_obj11.length) {

  for (var index = 0, pug_length11 = pug_obj11.length; index < pug_length11; index++) {
    var datum = pug_obj11[index];

;pug_debug_line = 770;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeader"](datum, _width);
  }

} else {
  var pug_length11 = 0;
  for (var index in pug_obj11) {
    pug_length11++;
    var datum = pug_obj11[index];

;pug_debug_line = 770;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeader"](datum, _width);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 777;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"] = pug_interp = function(data, _width){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 778;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var quantity = data.quantity
;pug_debug_line = 779;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var units = data.units
;pug_debug_line = 780;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var noun = data.noun
;pug_debug_line = 781;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 782;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor2 = data.bgColor2 ? data.bgColor2 : "transparent"
;pug_debug_line = 783;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 784;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor2 = data.textColor2 ? data.textColor2 : "#232323" // $BLACK
;pug_debug_line = 785;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-all-25\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 786;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-square-125px endeavor-center endeavor-circle endeavor-flex endeavor-flex-center endeavor-item-bottom-25\""+pug_attr("style", pug_style(`background-color: ${bgColor2}`), true, true)) + "\u003E";
;pug_debug_line = 787;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch1" + (" class=\"thin endeavor-item-no-margin endeavor-text-center\""+pug_attr("style", pug_style(`color: ${textColor2}`), true, true)) + "\u003E";
;pug_debug_line = 787;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = quantity) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 788;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-item-no-margin endeavor-text-center endeavor-item-bottom-15\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 788;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = units) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 789;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-item-no-margin endeavor-text-center caption caption-mod no-margin\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 789;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = noun) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographicGrid"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-125 endeavor-flex-row-nowrap endeavor-flex-around endeavor-horizontal-10vw\"\u003E";
;pug_debug_line = 798;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate data
var pug_obj12 = data;
if ('number' == typeof pug_obj12.length) {

  for (var index = 0, pug_length12 = pug_obj12.length; index < pug_length12; index++) {
    var datum = pug_obj12[index];

;pug_debug_line = 799;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"](datum);
  }

} else {
  var pug_length12 = 0;
  for (var index in pug_obj12) {
    pug_length12++;
    var datum = pug_obj12[index];

;pug_debug_line = 799;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"](datum);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 806;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographicCompare"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 807;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 808;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 809;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var label = data.label ? data.label : ""
;pug_debug_line = 810;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var contents = data.contents
;pug_debug_line = 811;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex endeavor-horizontal-10vw endeavor-item-no-margin\"\u003E";
;pug_debug_line = 812;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-side-label endeavor-flex endeavor-flex-center\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 813;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-rot-90-ccw\""+pug_attr("style", pug_style(`color: ${textColor}`), true, true)) + "\u003E";
;pug_debug_line = 813;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 814;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex-row-nowrap endeavor-flex-around endeavor-flex-center-main endeavor-flex-2\"\u003E";
;pug_debug_line = 815;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate contents
var pug_obj13 = contents;
if ('number' == typeof pug_obj13.length) {

  for (var index = 0, pug_length13 = pug_obj13.length; index < pug_length13; index++) {
    var content = pug_obj13[index];

;pug_debug_line = 816;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"](content);
  }

} else {
  var pug_length13 = 0;
  for (var index in pug_obj13) {
    pug_length13++;
    var content = pug_obj13[index];

;pug_debug_line = 816;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"](content);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 823;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorModuleMachine"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 824;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgImage = data.bgImage ? data.bgImage : "none"
;pug_debug_line = 825;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 826;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item"
;pug_debug_line = 827;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-width-100vw","endeavor-bg-200","endeavor-bg-center","endeavor-pos-rel",`${_class}`], [false,false,false,false,true]), false, true)+pug_attr("style", pug_style(`background-image: url(${bgImage.src});background-color: ${bgColor}`), true, true)) + "\u003E";
;pug_debug_line = 828;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-width-norm\"\u003E";
;pug_debug_line = 829;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate data.modules
var pug_obj14 = data.modules;
if ('number' == typeof pug_obj14.length) {

  for (var index = 0, pug_length14 = pug_obj14.length; index < pug_length14; index++) {
    var module = pug_obj14[index];

;pug_debug_line = 830;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins[module.name](module.data);
  }

} else {
  var pug_length14 = 0;
  for (var index in pug_obj14) {
    pug_length14++;
    var module = pug_obj14[index];

;pug_debug_line = 830;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins[module.name](module.data);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cdiv class=\"loader\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cdiv id=\"wrapper\"\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"full fixed passive\" id=\"fx-container\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csvg id=\"svg-container\"\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "       \u003C\u002Fsvg\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- ARROW INTERACTION CONTAINER--\u003E";
;pug_debug_line = 7;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"arrow-container-main\"\u003E";
;pug_debug_line = 8;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"arrow-container left plus_plus transparent\" id=\"prev\"\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 9;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Prev Project\u003C\u002Fp\u003E";
;pug_debug_line = 10;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"arrow left\"\u003E";
;pug_debug_line = 11;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa  fa-angle-left fa-2x\"\u003E\u003C\u002Fi\u003E    \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 12;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"arrow-container right plus_plus transparent\" id=\"next\"\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 13;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Next Project\u003C\u002Fp\u003E";
;pug_debug_line = 14;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"arrow right\"\u003E";
;pug_debug_line = 15;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa  fa-angle-right fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 16;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"arrow-container arrow-center plus_plus transparent\" id=\"close\"\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 17;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Close Project\u003C\u002Fp\u003E";
;pug_debug_line = 18;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"arrow arrow-center-within\"\u003E";
;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa  fa-close fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FARROW INTERACTION CONTAINER--\u003E";
;pug_debug_line = 22;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- CASE STUDY ITERATOR--\u003E";
;pug_debug_line = 23;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-container case-study-container\"\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate case_studies
var pug_obj15 = case_studies;
if ('number' == typeof pug_obj15.length) {

  for (var index = 0, pug_length15 = pug_obj15.length; index < pug_length15; index++) {
    var case_study = pug_obj15[index];

;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "endeavor endeavor-view case-study-view parallax"},{'data-inproject': false}, {'data-projectIndex': index}, {'id': case_study.route}]), true)) + "\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["endeavorHeader"](case_study);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-contents parallax__group contents\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["endeavorIntro"](case_study);
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate case_study.sections
var pug_obj16 = case_study.sections;
if ('number' == typeof pug_obj16.length) {

  for (var iindex = 0, pug_length16 = pug_obj16.length; iindex < pug_length16; iindex++) {
    var section = pug_obj16[iindex];

;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins[section.name](section.data);
  }

} else {
  var pug_length16 = 0;
  for (var iindex in pug_obj16) {
    pug_length16++;
    var section = pug_obj16[iindex];

;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins[section.name](section.data);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length15 = 0;
  for (var index in pug_obj15) {
    pug_length15++;
    var case_study = pug_obj15[index];

;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "endeavor endeavor-view case-study-view parallax"},{'data-inproject': false}, {'data-projectIndex': index}, {'id': case_study.route}]), true)) + "\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["endeavorHeader"](case_study);
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-contents parallax__group contents\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["endeavorIntro"](case_study);
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate case_study.sections
var pug_obj17 = case_study.sections;
if ('number' == typeof pug_obj17.length) {

  for (var iindex = 0, pug_length17 = pug_obj17.length; iindex < pug_length17; iindex++) {
    var section = pug_obj17[iindex];

;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins[section.name](section.data);
  }

} else {
  var pug_length17 = 0;
  for (var iindex in pug_obj17) {
    pug_length17++;
    var section = pug_obj17[iindex];

;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins[section.name](section.data);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCASE STUDY ITERATOR--\u003E";
;pug_debug_line = 32;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- PROJECT ITERATOR--\u003E";
;pug_debug_line = 33;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-container project-container\"\u003E";
;pug_debug_line = 34;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate projects
var pug_obj18 = projects;
if ('number' == typeof pug_obj18.length) {

  for (var index = 0, pug_length18 = pug_obj18.length; index < pug_length18; index++) {
    var project = pug_obj18[index];

;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "endeavor endeavor-view project-view parallax"},{'data-inproject': false}, {'data-projectIndex': index}, {'id': project.route}]), true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["endeavorHeader"](project);
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-contents parallax__group contents\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["endeavorIntro"](project);
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate project.sections
var pug_obj19 = project.sections;
if ('number' == typeof pug_obj19.length) {

  for (var iindex = 0, pug_length19 = pug_obj19.length; iindex < pug_length19; iindex++) {
    var section = pug_obj19[iindex];

;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins[section.name](section.data);
  }

} else {
  var pug_length19 = 0;
  for (var iindex in pug_obj19) {
    pug_length19++;
    var section = pug_obj19[iindex];

;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins[section.name](section.data);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length18 = 0;
  for (var index in pug_obj18) {
    pug_length18++;
    var project = pug_obj18[index];

;pug_debug_line = 35;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "endeavor endeavor-view project-view parallax"},{'data-inproject': false}, {'data-projectIndex': index}, {'id': project.route}]), true)) + "\u003E";
;pug_debug_line = 36;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["endeavorHeader"](project);
;pug_debug_line = 37;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-contents parallax__group contents\"\u003E";
;pug_debug_line = 38;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["endeavorIntro"](project);
;pug_debug_line = 39;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate project.sections
var pug_obj20 = project.sections;
if ('number' == typeof pug_obj20.length) {

  for (var iindex = 0, pug_length20 = pug_obj20.length; iindex < pug_length20; iindex++) {
    var section = pug_obj20[iindex];

;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins[section.name](section.data);
  }

} else {
  var pug_length20 = 0;
  for (var iindex in pug_obj20) {
    pug_length20++;
    var section = pug_obj20[iindex];

;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins[section.name](section.data);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FPROJECT ITERATOR--\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- NAV MENU--\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"nav-trigger\" type=\"checkbox\" id=\"nav-trigger\"\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"plus_plus_plus\" for=\"nav-trigger\"\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 47;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 48;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E";
;pug_debug_line = 49;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Chr\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 51;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cnav class=\"nav plus_plus\"\u003E";
;pug_debug_line = 52;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"header header-open\"\u003E";
;pug_debug_line = 53;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 54;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Flogo.svg\" alt=\"main logo\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 55;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"nav-content\"\u003E";
;pug_debug_line = 56;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul id=\"web-lab-nav\"\u003E";
;pug_debug_line = 57;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"href": "#web-lab"},{'data-nav': "web-lab"}]), true)) + "\u003E";
;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Web Lab\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 59;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"href": "#bios"},{'data-nav': "bios"}]), true)) + "\u003E";
;pug_debug_line = 60;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Bios\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 61;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"href": "#works"},{'data-nav': "works"}]), true)) + "\u003E";
;pug_debug_line = 62;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Works\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 63;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attrs(pug_merge([{"href": "#contact"},{'data-nav': "contact"}]), true)) + "\u003E";
;pug_debug_line = 64;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Contact\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
;pug_debug_line = 65;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"social\"\u003E";
;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"google.com\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-envelope fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 68;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Falexnortn\" target=\"_blank\"\u003E";
;pug_debug_line = 69;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-twitter fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 70;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"google.com\"\u003E";
;pug_debug_line = 71;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-vimeo-square fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 72;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Falexnortn\" target=\"_blank\"\u003E";
;pug_debug_line = 73;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-github fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 74;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"google.com\"\u003E";
;pug_debug_line = 75;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-behance-square fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fnav\u003E";
;pug_debug_line = 76;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FNAV MENU--\u003E";
;pug_debug_line = 79;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- PAGINATION | INJECTED--\u003E";
;pug_debug_line = 80;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"plus\" id=\"pagination\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 81;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FPAGINATION--\u003E";
;pug_debug_line = 84;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- HEADER--\u003E";
;pug_debug_line = 85;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"header plus\" id=\"header\"\u003E";
;pug_debug_line = 86;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"logo\"\u003E";
;pug_debug_line = 87;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Flogo.svg\" alt=\"main logo\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 89;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FHEADER  --\u003E";
;pug_debug_line = 92;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- SITE content--\u003E";
;pug_debug_line = 93;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"content-wrapper\"\u003E";
;pug_debug_line = 95;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- INTERACTIVE PAGE--\u003E";
;pug_debug_line = 96;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection" + (pug_attrs(pug_merge([{"class": "section","id": "web-lab"},{'data-inproject': true}]), true)) + "\u003E";
;pug_debug_line = 97;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csummary class=\"plus\" id=\"greeting\"\u003E";
;pug_debug_line = 98;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E\u003C\u002Fp\u003E";
;pug_debug_line = 99;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 99;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = welcome_text.greeting_text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 100;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 100;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = welcome_text.discipline_text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fsummary\u003E";
;pug_debug_line = 102;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"lab-options plus\"\u003E";
;pug_debug_line = 103;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-options-element\" type=\"checkbox\" id=\"lab-options-element\"\u003E";
;pug_debug_line = 104;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"button\" for=\"lab-options-element\"\u003E";
;pug_debug_line = 105;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 105;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "f(x)\u003C\u002Fp\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 106;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"lab-menu\"\u003E";
;pug_debug_line = 107;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 108;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 109;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-radio\" type=\"radio\" name=\"lab-radio\" id=\"fluid-radio\" value=\"1\" checked=\"checked\"\u003E";
;pug_debug_line = 110;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel for=\"fluid-radio\"\u003E";
;pug_debug_line = 110;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Fluid\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 111;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 112;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-radio\" type=\"radio\" name=\"lab-radio\" id=\"perlin-radio\" value=\"2\"\u003E";
;pug_debug_line = 113;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel for=\"perlin-radio\"\u003E";
;pug_debug_line = 113;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Perlin\u003C\u002Flabel\u003E\u003C\u002Fli\u003E";
;pug_debug_line = 114;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 115;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-radio\" type=\"radio\" name=\"lab-radio\" id=\"debug-radio\" value=\"3\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel for=\"debug-radio\"\u003E";
;pug_debug_line = 116;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Debug\u003C\u002Flabel\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 119;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"lab-what plus\"\u003E";
;pug_debug_line = 120;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cinput class=\"lab-what-element\" type=\"checkbox\" id=\"lab-what-element\"\u003E";
;pug_debug_line = 121;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Clabel class=\"button\" for=\"lab-what-element\"\u003E";
;pug_debug_line = 122;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 122;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "?\u003C\u002Fp\u003E\u003C\u002Flabel\u003E";
;pug_debug_line = 123;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"lab-details\"\u003E";
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Glyph simulation rendered using p5js\u003Cbr\u003EPhysics applied using toxiclibs\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 126;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"scroll-arrow plus_plus\"\u003E";
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa  fa-angle-down fa-2x\"\u003E\u003C\u002Fi\u003E           \u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 129;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FINTERACTIVE--\u003E";
;pug_debug_line = 132;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--BIOS SECTION--\u003E";
;pug_debug_line = 133;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection" + (pug_attrs(pug_merge([{"class": "section","id": "bios"},{'data-inproject': false}]), true)) + "\u003E";
;pug_debug_line = 134;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"bios-wrapper\"\u003E";
;pug_debug_line = 135;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bios-title sticky\" id=\"bios-title\"\u003E";
;pug_debug_line = 136;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Fname.svg\" alt=\"Alex Norton\"\u003E";
;pug_debug_line = 137;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp id=\"bios-title-p\"\u003E";
;pug_debug_line = 137;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = bios_text.title) ? "" : pug_interp) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 138;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"bios-content\" id=\"bios-content\"\u003E";
;pug_debug_line = 139;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Fself.jpg\" alt=\"Alex Norton Portrait\"\u003E";
;pug_debug_line = 140;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"copy\"\u003E";
;pug_debug_line = 141;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cq\u003E";
;pug_debug_line = 141;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = bios_text.description_pull) ? "" : pug_interp) + "\u003C\u002Fq\u003E";
;pug_debug_line = 142;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 142;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "About\u003C\u002Fh4\u003E";
;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer body-copy\" id=\"self-short\"\u003E";
;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = bios_text.description_short) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp class=\"tamer body-copy\" id=\"self-long\"\u003E";
;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (null == (pug_interp = bios_text.description_long) ? "" : pug_interp) + "\u003C\u002Fp\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca id=\"resume\" href=\"\u002Fimages\u002FNorton-Alex-Resume.pdf\" target=\"_blank\"\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Résumé\u003C\u002Fa\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch5 id=\"bios-more\"\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "{ more }\u003C\u002Fh5\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 147;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FBIOS SECTION  --\u003E";
;pug_debug_line = 150;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--WORKS SECTION--\u003E";
;pug_debug_line = 151;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection" + (pug_attrs(pug_merge([{"class": "section","id": "works"},{'data-inproject': false}]), true)) + "\u003E";
;pug_debug_line = 152;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"works-wrapper\"\u003E";
;pug_debug_line = 153;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- CASE STUDY ITERATOR--\u003E";
;pug_debug_line = 154;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate case_studies
var pug_obj21 = case_studies;
if ('number' == typeof pug_obj21.length) {

  for (var index = 0, pug_length21 = pug_obj21.length; index < pug_length21; index++) {
    var case_study = pug_obj21[index];

;pug_debug_line = 155;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["caseStudyPreview"](case_study, index);
  }

} else {
  var pug_length21 = 0;
  for (var index in pug_obj21) {
    pug_length21++;
    var case_study = pug_obj21[index];

;pug_debug_line = 155;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["caseStudyPreview"](case_study, index);
  }

}

;pug_debug_line = 156;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCASE STUDY ITERATOR--\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--SELECT WORK GRID SECTION--\u003E";
;pug_debug_line = 159;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work\" id=\"select-work\"\u003E";
;pug_debug_line = 160;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"select-work-wrapper\"\u003E";
;pug_debug_line = 161;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 161;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Selected Works\u003C\u002Fh3\u003E";
;pug_debug_line = 162;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 163;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate projects
var pug_obj22 = projects;
if ('number' == typeof pug_obj22.length) {

  for (var index = 0, pug_length22 = pug_obj22.length; index < pug_length22; index++) {
    var project = pug_obj22[index];

;pug_debug_line = 164;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["projectPreview"](project, index);
  }

} else {
  var pug_length22 = 0;
  for (var index in pug_obj22) {
    pug_length22++;
    var project = pug_obj22[index];

;pug_debug_line = 164;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_mixins["projectPreview"](project, index);
  }

}

pug_html = pug_html + "\u003C\u002Ful\u003E";
;pug_debug_line = 165;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch5 id=\"select-more\"\u003E";
;pug_debug_line = 165;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "{ more }\u003C\u002Fh5\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 166;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FSELECT WORK GRID SECTION--\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 167;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FWORKS SECTION --\u003E";
;pug_debug_line = 170;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--FEATURE SECTION--\u003E";
;pug_debug_line = 171;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection class=\"feature\" id=\"feature\"\u003E";
;pug_debug_line = 172;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"feature-wrapper\"\u003E";
;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "Feature & Collaboration\u003C\u002Fh3\u003E";
;pug_debug_line = 174;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cul\u003E";
;pug_debug_line = 175;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- FEATURE ITERATOR--\u003E";
;pug_debug_line = 176;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
// iterate feature
var pug_obj23 = feature;
if ('number' == typeof pug_obj23.length) {

  for (var index = 0, pug_length23 = pug_obj23.length; index < pug_length23; index++) {
    var result = pug_obj23[index];

;pug_debug_line = 177;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"img-load\""+pug_attr("style", pug_style(`background-image: url(${result.logo})`), true, true)) + "\u003E";
;pug_debug_line = 178;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `${result.link}`, true, true)+" target=\"_blank\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
  }

} else {
  var pug_length23 = 0;
  for (var index in pug_obj23) {
    pug_length23++;
    var result = pug_obj23[index];

;pug_debug_line = 177;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cli" + (" class=\"img-load\""+pug_attr("style", pug_style(`background-image: url(${result.logo})`), true, true)) + "\u003E";
;pug_debug_line = 178;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca" + (pug_attr("href", `${result.link}`, true, true)+" target=\"_blank\"") + "\u003E\u003C\u002Fa\u003E\u003C\u002Fli\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 179;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FFEATURE SECTION  --\u003E";
;pug_debug_line = 182;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!--CONTACT PAGE--\u003E";
;pug_debug_line = 183;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Csection" + (pug_attrs(pug_merge([{"class": "contact section","id": "contact"},{'data-inproject': false}]), true)) + "\u003E";
;pug_debug_line = 185;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- CONTACT BOX--\u003E";
;pug_debug_line = 186;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv id=\"contact-wrapper\"\u003E";
;pug_debug_line = 187;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"shout-out\"\u003E";
;pug_debug_line = 188;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 188;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.shout_out) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 189;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 189;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.shout_out_sub) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 190;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"cta\"\u003E";
;pug_debug_line = 191;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 191;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.cta) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 192;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"contact-social\"\u003E";
;pug_debug_line = 193;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"mailto:alexnortn@gmail.com\"\u003E";
;pug_debug_line = 194;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-envelope fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 195;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Falexnortn\" target=\"_blank\"\u003E";
;pug_debug_line = 196;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-twitter fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E";
;pug_debug_line = 197;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ca href=\"https:\u002F\u002Fgithub.com\u002Falexnortn\" target=\"_blank\"\u003E";
;pug_debug_line = 198;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Ci class=\"fa fa-github fa-2x\"\u003E\u003C\u002Fi\u003E\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 199;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 199;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.email) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 200;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 200;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.phone) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 201;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cdiv class=\"copywrite\"\u003E";
;pug_debug_line = 202;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003Cp\u003E";
;pug_debug_line = 202;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = contact.copywrite) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";
;pug_debug_line = 204;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCONTACT BOX--\u003E";
;pug_debug_line = 206;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FCONTACT PAGE   --\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 208;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Findex.pug";
pug_html = pug_html + "\u003C!-- \u002FSITE CONTENT--\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\"js\u002Fbundle.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\".\u002Fplugins\u002Fslick\u002Fslick.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\".\u002Fplugins\u002Fwidowtamer\u002Fwidowtamer.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"bios_text" in locals_for_with?locals_for_with.bios_text:typeof bios_text!=="undefined"?bios_text:undefined,"case_studies" in locals_for_with?locals_for_with.case_studies:typeof case_studies!=="undefined"?case_studies:undefined,"contact" in locals_for_with?locals_for_with.contact:typeof contact!=="undefined"?contact:undefined,"feature" in locals_for_with?locals_for_with.feature:typeof feature!=="undefined"?feature:undefined,"projects" in locals_for_with?locals_for_with.projects:typeof projects!=="undefined"?projects:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"welcome_text" in locals_for_with?locals_for_with.welcome_text:typeof welcome_text!=="undefined"?welcome_text:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
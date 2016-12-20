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
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}module.exports = function(locals, pug) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (sources) {;pug_debug_line = 19;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["caseStudyPreview"] = pug_interp = function(data, index){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 20;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "case-study case-study-window item case-study-item"}, {'data-inproject': false}, {'data-projectIndex': index}, {'data-project': data.route},  {'id': data.preview} ]), false)) + "\u003E";
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
pug_html = pug_html + "\u003Chr\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero-box\"\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"hero\""+pug_attr("style", pug_style(`background-image: url(${data.image_hero})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["projectPreview"] = pug_interp = function(data, index){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 41;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli" + (pug_attrs(pug_merge([{"class": "select-work-item item project-item"}, {'data-inproject': false}, {'data-projectIndex': index}, {'data-project': data.route}, {'id': data.preview} ]), false)) + "\u003E";
;pug_debug_line = 42;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work-img-container\"\u003E";
;pug_debug_line = 43;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"select-work-description\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 44;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.description.quote) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 45;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Chr\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 46;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"select-work-img\""+pug_attr("style", pug_style(`background-image: url(${data.image_preview})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
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
pug_html = pug_html + "\u003Chr\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 66;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"hero-box hero-parallax parallax__group\"\u003E";
;pug_debug_line = 67;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"hero parallax__layer--back no-hover\""+pug_attr("style", pug_style(`background-image: url(${data.image_hero})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
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
pug_mixins["endeavorGhostButton"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 127;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text ? data.text : "666"
;pug_debug_line = 128;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _id = data.id ? data.id : "666"
;pug_debug_line = 129;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item-125"
;pug_debug_line = 130;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 131;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["fsw",`${_class}`], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 132;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cbutton" + (" class=\"endeavor-button ghost endeavor-flex endeavor-flex-center endeavor-center\""+pug_attr("id", `${_id}`, true, false)) + "\u003E";
;pug_debug_line = 133;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-center endeavor-transition-250\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 133;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 140;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorDescriptions"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 141;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sections = data.sections
;pug_debug_line = 142;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item cf\"\u003E";
;pug_debug_line = 143;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-description endeavor-item-left-100 no-border\"\u003E";
;pug_debug_line = 144;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate sections 
var pug_obj0 = sections ;
if ('number' == typeof pug_obj0.length) {

  for (var index = 0, pug_length0 = pug_obj0.length; index < pug_length0; index++) {
    var section = pug_obj0[index];

;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

} else {
  var pug_length0 = 0;
  for (var index in pug_obj0) {
    pug_length0++;
    var section = pug_obj0[index];

;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 145;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 146;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 153;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorDescriptionsRight"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 154;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sections = data.sections
;pug_debug_line = 155;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item cf\"\u003E";
;pug_debug_line = 156;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-description endeavor-float-right\"\u003E";
;pug_debug_line = 157;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate sections 
var pug_obj1 = sections ;
if ('number' == typeof pug_obj1.length) {

  for (var index = 0, pug_length1 = pug_obj1.length; index < pug_length1; index++) {
    var section = pug_obj1[index];

;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 159;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 159;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

} else {
  var pug_length1 = 0;
  for (var index in pug_obj1) {
    pug_length1++;
    var section = pug_obj1[index];

;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 158;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 159;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 159;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 166;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorDescriptionsBig"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 167;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sections = data.sections
;pug_debug_line = 168;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item"
;pug_debug_line = 169;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["cf",`${_class}`], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 170;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-description-big endeavor-item-left-100 no-border\"\u003E";
;pug_debug_line = 171;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate sections 
var pug_obj2 = sections ;
if ('number' == typeof pug_obj2.length) {

  for (var index = 0, pug_length2 = pug_obj2.length; index < pug_length2; index++) {
    var section = pug_obj2[index];

;pug_debug_line = 172;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 172;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

} else {
  var pug_length2 = 0;
  for (var index in pug_obj2) {
    pug_length2++;
    var section = pug_obj2[index];

;pug_debug_line = 172;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4\u003E";
;pug_debug_line = 172;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.name) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"tamer\"\u003E";
;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = section.content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 181;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 182;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 183;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 184;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item-no-margin"
;pug_debug_line = 185;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["fsw",`${_class}`], [false,true]), false, false)) + "\u003E";
;pug_debug_line = 186;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"caption no-margin endeavor-padding-left-50 endeavor-width-500px\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 186;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 193;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFS2"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 194;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = datum.caption
;pug_debug_line = 195;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item fsw\"\u003E";
;pug_debug_line = 196;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"no-margin endeavor-caption-2 endeavor-padding-left-50 endeavor-width-60-prcnt\"\u003E";
;pug_debug_line = 196;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 203;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFSCenter"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 204;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = datum.caption
;pug_debug_line = 205;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-flex endeavor-flex-center fsw\"\u003E";
;pug_debug_line = 206;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"caption no-margin endeavor-text-center endeavor-width-500px\"\u003E";
;pug_debug_line = 206;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 213;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFSCenter2"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 214;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = datum.caption
;pug_debug_line = 215;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-flex endeavor-flex-center fsw\"\u003E";
;pug_debug_line = 216;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"endeavor-caption-2 no-margin endeavor-text-center endeavor-width-60-prcnt\"\u003E";
;pug_debug_line = 216;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 223;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionFSCenter3"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 224;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = datum.caption
;pug_debug_line = 225;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"edeavor-item endeavor-flex endeavor-flex-center fsw\"\u003E";
;pug_debug_line = 226;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"endeavor-pull-quote no-margin endeavor-text-center endeavor-width-75-prcnt\"\u003E";
;pug_debug_line = 226;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 233;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorPullheaderCaptionFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 234;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subheader = data.subheader
;pug_debug_line = 235;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 236;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 237;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-125 endeavor-flex endeavor-flex-center endeavor-flex-column fsw\"\u003E";
;pug_debug_line = 238;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2" + (" class=\"endeavor-subheader endeavor-pull-quote\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 238;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = subheader) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 239;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-caption-2 no-margin endeavor-text-center endeavor-width-60-prcnt\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 239;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 247;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorContentFS"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 248;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var content = datum.content
;pug_debug_line = 249;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"edeavor-item fsw\"\u003E";
;pug_debug_line = 250;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"content no-margin endeavor-float-right endeavor-width-500px\"\u003E";
;pug_debug_line = 250;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 257;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorSubheaderFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 258;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subheader = data.subheader
;pug_debug_line = 259;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var ruleColor = data.ruleColor ? data.ruleColor : "#DFDFDF"
;pug_debug_line = 260;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 261;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"edeavor-item endeavor-item-top-125\"\u003E";
;pug_debug_line = 262;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 262;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.subheader) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 271;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorSubheaderCaptionFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 272;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subheader = data.subheader
;pug_debug_line = 273;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var ruleColor = data.ruleColor ? data.ruleColor : "#DFDFDF"
;pug_debug_line = 274;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 275;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"edeavor-item\"\u003E";
;pug_debug_line = 276;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3\u003E";
;pug_debug_line = 276;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.subheader) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 277;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"caption no-margin endeavor-item-top-15 endeavor-width-500px\"\u003E";
;pug_debug_line = 277;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 278;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Chr" + (" class=\"slight endeavor-item-top-25 fsw\""+pug_attr("style", pug_style(`border-color: ${ruleColor}`), true, false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 285;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorIntroFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 286;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _margin = data.margin ? data.margin : "endeavor-item"
;pug_debug_line = 287;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 288;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subtext = data.subtext
;pug_debug_line = 289;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 290;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 291;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-flex-column","endeavor-flex-center","fsw",`${_margin}`], [false,false,false,true]), false, false)+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 292;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch1" + (" class=\"endeavor-block endeavor-header\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 292;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.header) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 293;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-block endeavor-text-center endeavor-max-width-750px\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 293;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.subtext) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 300;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorSectionIntroFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 301;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 302;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 303;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 304;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-top-125 endeavor-flex-column endeavor-flex-center fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 305;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2" + (" class=\"section-intro endeavor-block endeavor-header\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 305;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.header) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 312;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextLeftImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 313;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 314;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var superText = data.superText
;pug_debug_line = 315;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 316;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 317;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 318;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 319;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 321;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-between fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 322;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","endeavor-second","blur-up",`${sizeClass}`], [false,false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 323;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block\"\u003E";
;pug_debug_line = 324;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 324;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.superText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 325;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pulltext endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 325;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 332;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextLeftImage2FS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 333;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 334;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 335;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 336;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 337;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 338;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 340;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-between fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 341;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","endeavor-second","blur-up",`${sizeClass}`], [false,false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 342;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block\"\u003E";
;pug_debug_line = 343;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-caption-4 endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 343;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 350;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextRightImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 351;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 352;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var superText = data.superText
;pug_debug_line = 353;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 354;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 355;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 356;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 357;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 359;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-between fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 360;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","blur-up",`${sizeClass}`], [false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 361;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block endeavor-second\"\u003E";
;pug_debug_line = 362;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 362;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.superText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 363;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pulltext endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 363;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 370;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextRightImage2FS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 371;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 372;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 373;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 374;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 375;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 376;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 378;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-between fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 379;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","blur-up",`${sizeClass}`], [false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 380;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block endeavor-second\"\u003E";
;pug_debug_line = 381;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-caption-4 endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 381;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 388;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorLeftImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 389;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 390;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 391;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imagePadding = data.image.padding ? data.image.padding : 0
;pug_debug_line = 392;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 393;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var size = data.size ? data.size : "100%"
;pug_debug_line = 394;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 396;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-item-no-margin endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-start fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 397;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-contaner","endeavor-flex","endeavor-flex-center",`${sizeClass}`], [false,false,false,true]), false, false)) + "\u003E";
;pug_debug_line = 398;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up","style": pug_escape(pug_style(`width: ${size};height: ${size}`)),"src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 405;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorRightImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 406;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 407;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imagePadding = data.image.padding ? data.image.padding : 0
;pug_debug_line = 408;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sizeClass = data.sizeClass
;pug_debug_line = 409;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var size = data.size ? data.size : "100%"
;pug_debug_line = 410;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 412;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-item-no-margin endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-flex-end fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 413;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-contaner","endeavor-flex","endeavor-flex-center",`${sizeClass}`], [false,false,false,true]), false, false)) + "\u003E";
;pug_debug_line = 414;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up","style": pug_escape(pug_style(`width: ${size};height: ${size}`)),"src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 421;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextLeftFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 422;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 423;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var superText = data.superText
;pug_debug_line = 424;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 425;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 427;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-height-25vw endeavor-flex-start fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 428;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block\"\u003E";
;pug_debug_line = 429;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 429;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.superText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 430;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pulltext endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 430;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 437;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTextRightFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 438;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var text = data.text
;pug_debug_line = 439;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var superText = data.superText
;pug_debug_line = 440;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 441;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 443;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-horizontal-10vw endeavor-flex-row-nowrap endeavor-flex-center-main endeavor-height-25vw endeavor-flex-end fsw\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 444;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-block endeavor-second\"\u003E";
;pug_debug_line = 445;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 445;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.superText) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E";
;pug_debug_line = 446;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pulltext endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 446;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = data.text) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 453;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorNestedImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 454;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 455;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 456;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image2 = data.image2
;pug_debug_line = 457;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources2 = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 458;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var marginBottom = data.margin ? data.margin : "" // $BLACK
;pug_debug_line = 459;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item endeavor-flex-column\""+pug_attr("style", pug_style(`margin-bottom: ${marginBottom}`), true, false)) + "\u003E";
;pug_debug_line = 460;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 461;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up endeavor-width-40-prcnt endeavor-pos-rel endeavor-top-minus-15vw endeavor-flex-self-center endeavor-shadow-50","src": pug_escape(image.src_low)},{'data-src': image2.src}, {'data-srcset': sources2}]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 470;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 471;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 472;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 473;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
};
;pug_debug_line = 480;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImage100vw"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 481;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 482;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 483;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : ""
;pug_debug_line = 484;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": pug_classes(["lazyload","endeavor-item","blur-up","endeavor-width-100vw","endeavor-pos-rel",`${_class}`], [false,false,false,false,false,true]),"src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
};
;pug_debug_line = 491;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageNoTopFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 492;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 493;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 494;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-top-none blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
};
;pug_debug_line = 501;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageNoMarginFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 502;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 503;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 504;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-no-margin blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
};
;pug_debug_line = 511;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageNoBottomFS"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 512;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 513;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 514;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item endeavor-item-bottom-none blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
};
;pug_debug_line = 521;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageNoTop75"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 522;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 523;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 524;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-top-none blur-up endeavor-width-75-percent","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
};
;pug_debug_line = 531;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageFSList"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 532;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 533;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj3 = images;
if ('number' == typeof pug_obj3.length) {

  for (var index = 0, pug_length3 = pug_obj3.length; index < pug_length3; index++) {
    var image = pug_obj3[index];

;pug_debug_line = 534;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
  }

} else {
  var pug_length3 = 0;
  for (var index in pug_obj3) {
    pug_length3++;
    var image = pug_obj3[index];

;pug_debug_line = 534;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up fsw","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
  }

}

};
;pug_debug_line = 541;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImage75"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 542;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 543;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 544;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item blur-up endeavor-width-75-percent","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
};
;pug_debug_line = 551;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImage75List"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 552;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 553;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj4 = images;
if ('number' == typeof pug_obj4.length) {

  for (var index = 0, pug_length4 = pug_obj4.length; index < pug_length4; index++) {
    var image = pug_obj4[index];

;pug_debug_line = 554;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-25 blur-up endeavor-width-75-percent","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
  }

} else {
  var pug_length4 = 0;
  for (var index in pug_obj4) {
    pug_length4++;
    var image = pug_obj4[index];

;pug_debug_line = 554;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-item-25 blur-up endeavor-width-75-percent","src": pug_escape(image.src_low)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
  }

}

};
;pug_debug_line = 563;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorVideoFS"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 565;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var video = "potato"
;pug_debug_line = 566;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ciframe" + (" class=\"endeavor-item media-settings media-frame video-settings\""+" width=\"1920\" height=\"1080\""+pug_attr("src", video.src, true, false)+" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"") + "\u003E\u003C\u002Fiframe\u003E";
};
;pug_debug_line = 573;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorPubFS"] = pug_interp = function(datum){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 574;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var pub = datum.pub
;pug_debug_line = 575;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ciframe" + (" class=\"endeavor-item media-settings media-frame pub-settings\""+pug_attr("src", pub.src, true, false)+" frameborder=\"0\" allowfullscreen=\"allowfullscreen\"") + "\u003E\u003C\u002Fiframe\u003E";
};
;pug_debug_line = 582;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorPad"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 583;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _height = data.height ? data.height : "250px"
;pug_debug_line = 584;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item"
;pug_debug_line = 585;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["fsw",`${_class}`], [false,true]), false, false)+pug_attr("style", pug_style(`height: ${_height}`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 592;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTwoImageParallaxLeft"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 593;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image1 = data.image1
;pug_debug_line = 594;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image2 = data.image2
;pug_debug_line = 595;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var pullQuote = data.pullQuote
;pug_debug_line = 596;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-para-box endeavor-item parallax__group\"\u003E";
;pug_debug_line = 597;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cblockquote class=\"left parallax__layer parallax__layer--fore\"\u003E";
;pug_debug_line = 597;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pullQuote) ? "" : pug_interp)) + "\u003C\u002Fblockquote\u003E";
;pug_debug_line = 598;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-image-box endeavor-item-top endeavor-item-bottom-50\""+pug_attr("style", pug_style(`background-image: url(${image1.src})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 599;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-image-box endeavor-item-bottom-125\""+pug_attr("style", pug_style(`background-image: url(${image2.src})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 606;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorTwoImageParallaxRight"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 607;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image1 = data.image1
;pug_debug_line = 608;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image2 = data.image2
;pug_debug_line = 609;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var pullQuote = data.pullQuote
;pug_debug_line = 610;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-para-box parallax__group\"\u003E";
;pug_debug_line = 610;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "  ";
;pug_debug_line = 611;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-image-box endeavor-item-top endeavor-item-bottom-50 right\""+pug_attr("style", pug_style(`background-image: url(${image1.src})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 612;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-image-box right endeavor-item-bottom-125\""+pug_attr("style", pug_style(`background-image: url(${image2.src})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 613;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cblockquote class=\"right parallax__layer parallax__layer--fore\"\u003E";
;pug_debug_line = 613;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = pullQuote) ? "" : pug_interp)) + "\u003C\u002Fblockquote\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 620;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageGridIterator"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 621;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 622;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-125 grid image-grid-wrapper\"\u003E";
;pug_debug_line = 623;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"grid-slider slider-transition\"\u003E";
;pug_debug_line = 624;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj5 = images;
if ('number' == typeof pug_obj5.length) {

  for (var i = 0, pug_length5 = pug_obj5.length; i < pug_length5; i++) {
    var image = pug_obj5[i];

;pug_debug_line = 625;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fill-area\"\u003E";
;pug_debug_line = 626;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload limit-width-50vw big-moment-3-color endeavor-image-box--center","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length5 = 0;
  for (var i in pug_obj5) {
    pug_length5++;
    var image = pug_obj5[i];

;pug_debug_line = 625;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fill-area\"\u003E";
;pug_debug_line = 626;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload limit-width-50vw big-moment-3-color endeavor-image-box--center","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
;pug_debug_line = 627;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj6 = images;
if ('number' == typeof pug_obj6.length) {

  for (var i = 0, pug_length6 = pug_obj6.length; i < pug_length6; i++) {
    var image = pug_obj6[i];

;pug_debug_line = 628;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': i}]), false)) + "\u003E";
;pug_debug_line = 629;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${image.src_preview})`), true, false)) + "\u003E";
;pug_debug_line = 629;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length6 = 0;
  for (var i in pug_obj6) {
    pug_length6++;
    var image = pug_obj6[i];

;pug_debug_line = 628;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attrs(pug_merge([{"class": "image-grid-container bounce"},{'data-slide': i}]), false)) + "\u003E";
;pug_debug_line = 629;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"image-grid\""+pug_attr("style", pug_style(`background-image: url(${image.src_preview})`), true, false)) + "\u003E";
;pug_debug_line = 629;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 636;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorParallaxBehind"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 637;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 638;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-parallax-behind-fs endeavor-width-100vw parallax__group\"\u003E";
;pug_debug_line = 639;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-parallax-behind-support parallax__layer--back\""+pug_attr("style", pug_style(`background-image: url(${image.src})`), true, false)) + "\u003E";
;pug_debug_line = 639;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 646;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorParallaxCaptionRight"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 647;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imageBig = data.imageBig
;pug_debug_line = 648;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imageParallax = data.imageParallax
;pug_debug_line = 649;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.imageParallax.src_standard + " 1x, " + data.imageParallax.src_retina + " 2x"
;pug_debug_line = 650;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 651;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item fsw endeavor-parallax-hybrid parallax__group\"\u003E";
;pug_debug_line = 651;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " ";
;pug_debug_line = 652;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-parallax-hybrid-color\""+pug_attr("style", pug_style(`background-image: url(${imageBig.src})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 653;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload img-box endeavor-parallax-hybrid-left-img-box parallax__layer parallax__layer--fore","src": pug_escape(`${imageParallax.src_low}`)},{'data-src': imageParallax.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 654;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"endeavor-parallax-hybrid-left-caption caption\"\u003E";
;pug_debug_line = 654;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 661;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorParallaxCaptionLeft"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 662;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imageBig = data.imageBig
;pug_debug_line = 663;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var imageParallax = data.imageParallax
;pug_debug_line = 664;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.imageParallax.src_standard + " 1x, " + data.imageParallax.src_retina + " 2x"
;pug_debug_line = 665;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 666;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item fsw endeavor-parallax-hybrid parallax__group\"\u003E";
;pug_debug_line = 666;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + " ";
;pug_debug_line = 667;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-parallax-hybrid-color\""+pug_attr("style", pug_style(`background-image: url(${imageBig})`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 668;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload img-box endeavor-parallax-hybrid-right-img-box parallax__layer parallax__layer--fore","src": pug_escape(`${imageParallax.src_low}`)},{'data-src': imageParallax.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 669;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"endeavor-parallax-hybrid-right-caption caption\"\u003E";
;pug_debug_line = 669;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 676;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageCenterCaption"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 677;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 678;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 679;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 680;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-para-box fsw endeavor-flex-column\"\u003E";
;pug_debug_line = 681;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-width-50-prcnt img-box endeavor-image-box--center","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 682;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"caption center-caption\"\u003E";
;pug_debug_line = 682;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 689;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageSlider"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 690;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 691;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-image-slider\"\u003E";
;pug_debug_line = 692;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj7 = images;
if ('number' == typeof pug_obj7.length) {

  for (var i = 0, pug_length7 = pug_obj7.length; i < pug_length7; i++) {
    var image = pug_obj7[i];

;pug_debug_line = 693;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-image-slider-color fsw","src": pug_escape(image.src_low)},{'data-src': images[i].src}]), false)) + "\u002F\u003E";
  }

} else {
  var pug_length7 = 0;
  for (var i in pug_obj7) {
    pug_length7++;
    var image = pug_obj7[i];

;pug_debug_line = 693;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-image-slider-color fsw","src": pug_escape(image.src_low)},{'data-src': images[i].src}]), false)) + "\u002F\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 700;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageSlider75"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 701;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images
;pug_debug_line = 702;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-image-slider endeavor-width-75-prcnt endeavor-center\"\u003E";
;pug_debug_line = 703;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj8 = images;
if ('number' == typeof pug_obj8.length) {

  for (var i = 0, pug_length8 = pug_obj8.length; i < pug_length8; i++) {
    var image = pug_obj8[i];

;pug_debug_line = 704;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-image-slider-color fsw","src": pug_escape(image.src_low)},{'data-src': images[i].src}]), false)) + "\u002F\u003E";
  }

} else {
  var pug_length8 = 0;
  for (var i in pug_obj8) {
    pug_length8++;
    var image = pug_obj8[i];

;pug_debug_line = 704;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-image-slider-color fsw","src": pug_escape(image.src_low)},{'data-src': images[i].src}]), false)) + "\u002F\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 712;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCardCenter"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 713;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 714;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 715;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 716;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#A1A1A1"
;pug_debug_line = 717;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 718;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor2 = data.bgColor2 ? data.bgColor2 : "transparent"
;pug_debug_line = 719;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-flex-center endeavor-flex\"\u003E";
;pug_debug_line = 720;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-card endeavor-radius-50px endeavor-flex-center-main endeavor-square-250px endeavor-flex-column\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 721;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-50-25 endeavor-square-60px endeavor-center endeavor-circle endeavor-flex endeavor-flex-center endeavor-item-bottom-25\""+pug_attr("style", pug_style(`background-color: ${bgColor2}`), true, false)) + "\u003E";
;pug_debug_line = 722;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-width-40-prcnt","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 723;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2" + (" class=\"card-header endeavor-text-center\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 723;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 731;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorVerticalComparison"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 732;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image = data.image
;pug_debug_line = 733;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = data.image.src_standard + " 1x, " + data.image.src_retina + " 2x"
;pug_debug_line = 734;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textLeft = data.textLeft
;pug_debug_line = 735;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textRight = data.textRight
;pug_debug_line = 736;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#A1A1A1"
;pug_debug_line = 737;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 738;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor2 = data.bgColor2 ? data.bgColor2 : "transparent"
;pug_debug_line = 739;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var lineColor = data.lineColor ? data.lineColor : "transparent"
;pug_debug_line = 740;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var weight = data.first ? "600" : "200"
;pug_debug_line = 741;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var classd = data.last ? "endeavor-vertical-last" : ""
;pug_debug_line = 742;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-flex-center endeavor-flex-column endeavor-height-200px\"\u003E";
;pug_debug_line = 743;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-vertical-rule","endeavor-pos-abs","endeavor-height-200px",`${classd}`], [false,false,false,true]), false, false)+pug_attr("style", pug_style(`background-color: ${lineColor}`), true, false)) + "\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 744;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-25 endeavor-square-60px endeavor-center endeavor-circle endeavor-flex endeavor-flex-center endeavor-push-1\""+pug_attr("style", pug_style(`background-color: ${bgColor2}`), true, false)) + "\u003E";
;pug_debug_line = 745;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload endeavor-width-40-prcnt","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
;pug_debug_line = 746;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pos-abs endeavor-width-150px endeavor-left-100px endeavor-text-left\""+pug_attr("style", pug_style(`color: ${textColor};font-weight: ${weight}`), true, false)) + "\u003E";
;pug_debug_line = 746;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = textLeft) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 747;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-pos-abs endeavor-width-150px endeavor-right-100px endeavor-text-right\""+pug_attr("style", pug_style(`color: ${textColor};font-weight: ${weight}`), true, false)) + "\u003E";
;pug_debug_line = 747;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = textRight) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 754;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorAnalysisComparision"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 755;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 756;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 757;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _id = data.id ? data.id : "666"
;pug_debug_line = 758;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var process = data.process
;pug_debug_line = 759;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item"
;pug_debug_line = 760;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-width-100vw","endeavor-bg-200","endeavor-bg-center","endeavor-pos-rel","endeavor-pos-rel","endeavor-transition-1000","endeavor-no-flow",`${_class}`], [false,false,false,false,false,false,false,true]), false, false)+pug_attr("id", `${_id}`, true, false)+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 761;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-width-75-prcnt endeavor-max-width-750px endeavor-padding-bottom-125 endeavor-center endeavor-padding-left-100\"\u003E";
;pug_debug_line = 762;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-float-left endeavor-5 endeavor-width-25-prcnt endeavor-min-width-200px endeavor-item-top-125\"\u003E";
;pug_debug_line = 763;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2 class=\"copy-small-header\"\u003E";
;pug_debug_line = 763;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 764;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-clearfix\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 765;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate process
var pug_obj9 = process;
if ('number' == typeof pug_obj9.length) {

  for (var index = 0, pug_length9 = pug_obj9.length; index < pug_length9; index++) {
    var step = pug_obj9[index];

;pug_debug_line = 766;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fsw endeavor-item-top endeavor-border-top\"\u003E";
;pug_debug_line = 767;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-float-left endeavor-5 endeavor-padding-right-25 endeavor-width-25-prcnt endeavor-min-width-200px\"\u003E";
;pug_debug_line = 768;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var number = index + 1
;pug_debug_line = 769;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-subheader tight\"\u003E";
;pug_debug_line = 769;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = `${"0" + number + ". " + step.header}`) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 770;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex-row\"\u003E";
;pug_debug_line = 771;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate step.contents
var pug_obj10 = step.contents;
if ('number' == typeof pug_obj10.length) {

  for (var iindex = 0, pug_length10 = pug_obj10.length; iindex < pug_length10; iindex++) {
    var content = pug_obj10[iindex];

;pug_debug_line = 772;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 analysis\"\u003E";
;pug_debug_line = 773;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 773;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 774;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 774;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length10 = 0;
  for (var iindex in pug_obj10) {
    pug_length10++;
    var content = pug_obj10[iindex];

;pug_debug_line = 772;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 analysis\"\u003E";
;pug_debug_line = 773;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 773;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 774;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 774;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length9 = 0;
  for (var index in pug_obj9) {
    pug_length9++;
    var step = pug_obj9[index];

;pug_debug_line = 766;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fsw endeavor-item-top endeavor-border-top\"\u003E";
;pug_debug_line = 767;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-float-left endeavor-5 endeavor-padding-right-25 endeavor-width-25-prcnt endeavor-min-width-200px\"\u003E";
;pug_debug_line = 768;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var number = index + 1
;pug_debug_line = 769;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-subheader tight\"\u003E";
;pug_debug_line = 769;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = `${"0" + number + ". " + step.header}`) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 770;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex-row\"\u003E";
;pug_debug_line = 771;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate step.contents
var pug_obj11 = step.contents;
if ('number' == typeof pug_obj11.length) {

  for (var iindex = 0, pug_length11 = pug_obj11.length; iindex < pug_length11; iindex++) {
    var content = pug_obj11[iindex];

;pug_debug_line = 772;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 analysis\"\u003E";
;pug_debug_line = 773;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 773;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 774;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 774;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length11 = 0;
  for (var iindex in pug_obj11) {
    pug_length11++;
    var content = pug_obj11[iindex];

;pug_debug_line = 772;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 analysis\"\u003E";
;pug_debug_line = 773;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 773;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 774;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 774;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 781;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorAnalysisComparision2"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 782;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 783;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var process = data.process
;pug_debug_line = 784;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _id = data.id ? data.id : "666"
;pug_debug_line = 785;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item"
;pug_debug_line = 786;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-width-100vw","endeavor-bg-200","endeavor-bg-center","endeavor-pos-rel","endeavor-transition-1000","endeavor-no-flow",`${_class}`], [false,false,false,false,false,false,true]), false, false)+pug_attr("id", `${_id}`, true, false)+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 787;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-width-75-prcnt endeavor-max-width-750px endeavor-padding-bottom-125 endeavor-center endeavor-padding-left-100\"\u003E";
;pug_debug_line = 788;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate process
var pug_obj12 = process;
if ('number' == typeof pug_obj12.length) {

  for (var index = 0, pug_length12 = pug_obj12.length; index < pug_length12; index++) {
    var step = pug_obj12[index];

;pug_debug_line = 789;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fsw endeavor-item-top endeavor-border-top\"\u003E";
;pug_debug_line = 790;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-float-left endeavor-5 endeavor-padding-right-25 endeavor-width-25-prcnt endeavor-min-width-200px\"\u003E";
;pug_debug_line = 791;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var number = index + 1
;pug_debug_line = 792;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-subheader tight\"\u003E";
;pug_debug_line = 792;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = `${"0" + number + ". " + step.header}`) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 793;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex-row\"\u003E";
;pug_debug_line = 794;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate step.contents
var pug_obj13 = step.contents;
if ('number' == typeof pug_obj13.length) {

  for (var iindex = 0, pug_length13 = pug_obj13.length; iindex < pug_length13; iindex++) {
    var content = pug_obj13[iindex];

;pug_debug_line = 795;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 analysis\"\u003E";
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length13 = 0;
  for (var iindex in pug_obj13) {
    pug_length13++;
    var content = pug_obj13[iindex];

;pug_debug_line = 795;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 analysis\"\u003E";
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length12 = 0;
  for (var index in pug_obj12) {
    pug_length12++;
    var step = pug_obj12[index];

;pug_debug_line = 789;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fsw endeavor-item-top endeavor-border-top\"\u003E";
;pug_debug_line = 790;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-float-left endeavor-5 endeavor-padding-right-25 endeavor-width-25-prcnt endeavor-min-width-200px\"\u003E";
;pug_debug_line = 791;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var number = index + 1
;pug_debug_line = 792;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-subheader tight\"\u003E";
;pug_debug_line = 792;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = `${"0" + number + ". " + step.header}`) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 793;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex-row\"\u003E";
;pug_debug_line = 794;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate step.contents
var pug_obj14 = step.contents;
if ('number' == typeof pug_obj14.length) {

  for (var iindex = 0, pug_length14 = pug_obj14.length; iindex < pug_length14; iindex++) {
    var content = pug_obj14[iindex];

;pug_debug_line = 795;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 analysis\"\u003E";
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  }

} else {
  var pug_length14 = 0;
  for (var iindex in pug_obj14) {
    pug_length14++;
    var content = pug_obj14[iindex];

;pug_debug_line = 795;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 analysis\"\u003E";
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 796;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 797;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 804;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorChecklist"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 805;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 806;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 807;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _id = data.id ? data.id : "666"
;pug_debug_line = 808;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var subheader = data.subheader
;pug_debug_line = 809;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var contents = data.contents
;pug_debug_line = 810;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item"
;pug_debug_line = 811;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-width-100vw","endeavor-bg-200","endeavor-bg-center","endeavor-pos-rel","endeavor-transition-250",`${_class}`], [false,false,false,false,false,true]), false, false)+pug_attr("id", `${_id}`, true, false)+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 812;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-width-75-prcnt endeavor-max-width-750px endeavor-padding-bottom-125 endeavor-center endeavor-padding-left-100\"\u003E";
;pug_debug_line = 813;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch2 class=\"copy-small-header\"\u003E";
;pug_debug_line = 813;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 814;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-clearfix\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 815;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"fsw endeavor-item-top\"\u003E";
;pug_debug_line = 816;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-float-left endeavor-5 endeavor-width-25-prcnt endeavor-min-width-200px\"\u003E";
;pug_debug_line = 817;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-subheader tight\"\u003E";
;pug_debug_line = 817;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = subheader) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 818;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex-row\"\u003E";
;pug_debug_line = 819;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate contents
var pug_obj15 = contents;
if ('number' == typeof pug_obj15.length) {

  for (var index = 0, pug_length15 = pug_obj15.length; index < pug_length15; index++) {
    var content = pug_obj15[index];

;pug_debug_line = 820;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 checklist\"\u003E";
;pug_debug_line = 821;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 822;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 822;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 823;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 823;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
  }

} else {
  var pug_length15 = 0;
  for (var index in pug_obj15) {
    pug_length15++;
    var content = pug_obj15[index];

;pug_debug_line = 820;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cul class=\"endeavor-width-50-prcnt endeavor-5 endeavor-padding-right-25 checklist\"\u003E";
;pug_debug_line = 821;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cli\u003E";
;pug_debug_line = 822;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small-header\"\u003E";
;pug_debug_line = 822;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.header) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 823;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"copy-small endeavor-text-left\"\u003E";
;pug_debug_line = 823;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = content.description) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 834;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeader"] = pug_interp = function(data, _width, _textColor){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 835;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 836;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 837;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = _textColor ? _textColor : "#232323" // $BLACK
;pug_debug_line = 838;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-all-25\""+pug_attr("style", pug_style(`border-color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 839;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch5" + (pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 839;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh5\u003E";
;pug_debug_line = 840;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"caption caption-mod endeavor-text-left no-margin endeavor-item-top-5\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 840;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 847;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeader"] = pug_interp = function(data, _width){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 848;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header;
;pug_debug_line = 849;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image_top = data.image_top;
;pug_debug_line = 850;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources_top = data.image_top.src_standard + " 1x, " + data.image_top.src_retina + " 2x"
;pug_debug_line = 851;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images;
;pug_debug_line = 852;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-all-25\"\u003E";
;pug_debug_line = 853;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up fsw","src": pug_escape(image_top.src_low)},{'data-src': image_top.src}, {'data-srcset': sources_top}]), false)) + "\u002F\u003E";
;pug_debug_line = 854;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4 class=\"endeavor-item-bottom-15 endeavor-text-center endeavor-item-top-50\"\u003E";
;pug_debug_line = 854;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 855;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj16 = images;
if ('number' == typeof pug_obj16.length) {

  for (var index = 0, pug_length16 = pug_obj16.length; index < pug_length16; index++) {
    var image = pug_obj16[index];

;pug_debug_line = 856;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = image.src_standard + " 1x, " + image.src_retina + " 2x"
;pug_debug_line = 857;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up fsw","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
  }

} else {
  var pug_length16 = 0;
  for (var index in pug_obj16) {
    pug_length16++;
    var image = pug_obj16[index];

;pug_debug_line = 856;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var sources = image.src_standard + " 1x, " + image.src_retina + " 2x"
;pug_debug_line = 857;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "lazyload blur-up fsw","src": pug_escape(`${image.src_low}`)},{'data-src': image.src}, {'data-srcset': sources}]), false)) + "\u002F\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 864;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeaderGrid"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 865;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _width = (1 / (data.length + 0.5)) * 100; //- % of available width | 0.5 experimentally determined spacing coefficiant
;pug_debug_line = 866;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var marginClass = data.noMargin ? "endeavor-item-no-margin" : "endeavor-item" // $BLACK
;pug_debug_line = 867;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 868;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var contents = data.contents
;pug_debug_line = 869;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-flex-row-nowrap","endeavor-flex-around","endeavor-padding-bottom-50",`${marginClass}`], [false,false,false,true]), false, false)) + "\u003E";
;pug_debug_line = 870;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate contents
var pug_obj17 = contents;
if ('number' == typeof pug_obj17.length) {

  for (var index = 0, pug_length17 = pug_obj17.length; index < pug_length17; index++) {
    var content = pug_obj17[index];

;pug_debug_line = 871;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeader"](content, _width, textColor);
  }

} else {
  var pug_length17 = 0;
  for (var index in pug_obj17) {
    pug_length17++;
    var content = pug_obj17[index];

;pug_debug_line = 871;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeader"](content, _width, textColor);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 878;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeaderGrid"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 879;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _width = (1 / (data.length + 0.5)) * 100; //- % of available width | 0.5 experimentally determined spacing coefficiant
;pug_debug_line = 880;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item endeavor-flex-row-nowrap endeavor-flex-around\"\u003E";
;pug_debug_line = 881;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate data
var pug_obj18 = data;
if ('number' == typeof pug_obj18.length) {

  for (var index = 0, pug_length18 = pug_obj18.length; index < pug_length18; index++) {
    var datum = pug_obj18[index];

;pug_debug_line = 882;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeader"](datum, _width);
  }

} else {
  var pug_length18 = 0;
  for (var index in pug_obj18) {
    pug_length18++;
    var datum = pug_obj18[index];

;pug_debug_line = 882;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeader"](datum, _width);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 889;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"] = pug_interp = function(data, _width){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 890;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var quantity = data.quantity
;pug_debug_line = 891;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var units = data.units
;pug_debug_line = 892;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var noun = data.noun
;pug_debug_line = 893;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 894;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor2 = data.bgColor2 ? data.bgColor2 : "transparent"
;pug_debug_line = 895;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 896;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor2 = data.textColor2 ? data.textColor2 : "#232323" // $BLACK
;pug_debug_line = 897;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-item-all-25\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 898;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-square-125px endeavor-center endeavor-circle endeavor-flex endeavor-flex-center endeavor-item-bottom-25\""+pug_attr("style", pug_style(`background-color: ${bgColor2}`), true, false)) + "\u003E";
;pug_debug_line = 899;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch1" + (" class=\"thin endeavor-item-no-margin endeavor-text-center\""+pug_attr("style", pug_style(`color: ${textColor2}`), true, false)) + "\u003E";
;pug_debug_line = 899;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = quantity) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 900;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp" + (" class=\"endeavor-item-no-margin endeavor-text-center endeavor-item-bottom-15\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 900;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = units) ? "" : pug_interp)) + "\u003C\u002Fp\u003E";
;pug_debug_line = 901;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-item-no-margin endeavor-text-center caption caption-mod no-margin\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 901;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = noun) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 908;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographicGrid"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 909;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-125 endeavor-flex-row-nowrap endeavor-flex-around endeavor-horizontal-10vw\"\u003E";
;pug_debug_line = 910;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate data
var pug_obj19 = data;
if ('number' == typeof pug_obj19.length) {

  for (var index = 0, pug_length19 = pug_obj19.length; index < pug_length19; index++) {
    var datum = pug_obj19[index];

;pug_debug_line = 911;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"](datum);
  }

} else {
  var pug_length19 = 0;
  for (var index in pug_obj19) {
    pug_length19++;
    var datum = pug_obj19[index];

;pug_debug_line = 911;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"](datum);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 918;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographicCompare"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 919;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 920;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var textColor = data.textColor ? data.textColor : "#232323" // $BLACK
;pug_debug_line = 921;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var label = data.label ? data.label : ""
;pug_debug_line = 922;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var contents = data.contents
;pug_debug_line = 923;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex endeavor-horizontal-10vw endeavor-item-no-margin\"\u003E";
;pug_debug_line = 924;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (" class=\"endeavor-side-label endeavor-flex endeavor-flex-center\""+pug_attr("style", pug_style(`background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 925;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch3" + (" class=\"endeavor-rot-90-ccw\""+pug_attr("style", pug_style(`color: ${textColor}`), true, false)) + "\u003E";
;pug_debug_line = 925;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = label) ? "" : pug_interp)) + "\u003C\u002Fh3\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 926;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-flex-row-nowrap endeavor-flex-around endeavor-flex-center-main endeavor-flex-2\"\u003E";
;pug_debug_line = 927;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate contents
var pug_obj20 = contents;
if ('number' == typeof pug_obj20.length) {

  for (var index = 0, pug_length20 = pug_obj20.length; index < pug_length20; index++) {
    var content = pug_obj20[index];

;pug_debug_line = 928;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"](content);
  }

} else {
  var pug_length20 = 0;
  for (var index in pug_obj20) {
    pug_length20++;
    var content = pug_obj20[index];

;pug_debug_line = 928;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorInfographic"](content);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 935;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorModuleMachine"] = pug_interp = function(data){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 936;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgImage = data.bgImage ? data.bgImage : "none"
;pug_debug_line = 937;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var bgColor = data.bgColor ? data.bgColor : "transparent"
;pug_debug_line = 938;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var _class = data.class ? data.class : "endeavor-item"
;pug_debug_line = 939;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv" + (pug_attr("class", pug_classes(["endeavor-width-100vw","endeavor-bg-200","endeavor-bg-center","endeavor-pos-rel",`${_class}`], [false,false,false,false,true]), false, false)+pug_attr("style", pug_style(`background-image: url(${bgImage.src});background-color: ${bgColor}`), true, false)) + "\u003E";
;pug_debug_line = 940;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-no-margin endeavor-width-norm\"\u003E";
;pug_debug_line = 941;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate data.modules
var pug_obj21 = data.modules;
if ('number' == typeof pug_obj21.length) {

  for (var index = 0, pug_length21 = pug_obj21.length; index < pug_length21; index++) {
    var module = pug_obj21[index];

;pug_debug_line = 942;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins[module.name](module.data);
  }

} else {
  var pug_length21 = 0;
  for (var index in pug_obj21) {
    pug_length21++;
    var module = pug_obj21[index];

;pug_debug_line = 942;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins[module.name](module.data);
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";
};}.call(this,"sources" in locals_for_with?locals_for_with.sources:typeof sources!=="undefined"?sources:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
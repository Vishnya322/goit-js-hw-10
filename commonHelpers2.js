import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i}from"./assets/vendor-651d7991.js";const s=document.querySelector(".form");document.querySelector(".btn-form");s.addEventListener("submit",o=>{o.preventDefault();const e=s.elements.delay.value,l=s.elements.state.value;new Promise((t,m)=>{setTimeout(()=>{l==="fulfilled"?t(`✅ Fulfilled promise in ${e}ms`):m(`❌ Rejected promise in ${e}ms`)},e)}).then(t=>{i.success({position:"topRight",message:`✅ Fulfilled promise in ${e}ms`})}).catch(t=>{i.error({position:"topRight",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers2.js.map
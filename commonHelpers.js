import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as y,i as g}from"./assets/vendor-651d7991.js";const m=document.querySelector("#datetime-picker"),u=document.querySelector("button");let f="";const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0]<new Date?(g.error({title:"Error",message:"Please choose a date in the future",position:"topRight"}),u.setAttribute("disabled",!0)):(u.removeAttribute("disabled"),f=t[0])}},T=y(m,p);m.addEventListener("focus",()=>{T.config.defaultDate=new Date});u.addEventListener("click",()=>{const t=new Date(f).getTime(),d=setInterval(()=>{const l=new Date().getTime();let o=t-l;console.log(o);const i=document.querySelector("[data-days]"),n=document.querySelector("[data-hours]"),r=document.querySelector("[data-minutes]"),s=document.querySelector("[data-seconds]");function e(h){return h.toString().padStart(2,"0")}const c=a(o);if(i.textContent=e(c.days),n.textContent=e(c.hours),r.textContent=e(c.minutes),s.textContent=e(c.seconds),o<=0){clearInterval(d),i.textContent="00",n.textContent="00",r.textContent="00",s.textContent="00";return}},1e3)});function a(t){const n=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),s=Math.floor(t%864e5%36e5/6e4),e=Math.floor(t%864e5%36e5%6e4/1e3);return{days:n,hours:r,minutes:s,seconds:e}}console.log(a(2e3));console.log(a(14e4));console.log(a(2414e4));
//# sourceMappingURL=commonHelpers.js.map
(()=>{"use strict";const e=function(e){var t=e.timing,o=e.draw,n=e.duration,c=performance.now();requestAnimationFrame((function e(r){var a=(r-c)/n;a>1&&(a=1);var u=t(a);o(u),a<1&&requestAnimationFrame(e)}))};var t,o,n,c,r,a,u,l,i,s,d,m,v,f,p,y,h,g,q,S,E,L,b,w,C,_,k,A,x,I,T,D,z,$;T=document.querySelector("#timer-hours"),D=document.querySelector("#timer-minutes"),z=document.querySelector("#timer-seconds"),$=function(e){return e<=9?"0"+e:e},function e(){var t,o,n,c=(t=(new Date("2021-03-17").getTime()-(new Date).getTime())/1e3,o=Math.floor(t%60),n=Math.floor(t/60%60),{timeRemaining:t,hours:Math.floor(t/60/60),minutes:n,seconds:o});z.textContent=$(c.seconds),D.textContent=$(c.minutes),T.textContent=$(c.hours),c.timeRemaining<=0?(z.textContent="00",D.textContent="00",T.textContent="00"):c.timeRemaining>0&&setTimeout(e),clearInterval()}(),S=document.querySelectorAll('a[href="#service-block"]'),E=document.querySelector('a[href="#portfolio"]'),L=document.querySelector('a[href="#calc"]'),b=document.querySelector('a[href="#command"]'),w=document.querySelector('a[href="#connect"]'),C=document.querySelector("#service-block"),_=document.querySelector("#portfolio"),k=document.querySelector("#calc"),A=document.querySelector("#command"),x=document.querySelector("#connect"),(I=function(e,t){e.addEventListener("click",(function(e){e.preventDefault(),t.scrollIntoView({behavior:"smooth"})}))})(S[0],C),I(S[1],C),I(E,_),I(L,k),I(b,A),I(w,x),function(){var e=document.querySelector("body"),t=document.querySelector("menu");e.addEventListener("click",(function(e){var n=e.target;if(n.closest(".menu"))o();else if(n.classList.contains("close-btn"))o();else if("A"===n.tagName&&n.closest("menu"))o();else{if(n.closest("menu"))return;t.classList.remove("active-menu")}}));var o=function(){t.classList.toggle("active-menu")}}(),h=document.querySelector(".popup"),g=document.querySelectorAll(".popup-btn"),q=document.querySelector(".popup-content"),g.forEach((function(t){t.addEventListener("click",(function(){h.style.display="block",window.screen.width>768?e({duration:200,timing:function(e){return e},draw:function(e){q.style.top=250*e+"px"}}):(h.style.display="block",q.style.transform="")}))})),h.addEventListener("click",(function(e){var t=document.getElementById("form3-name"),o=document.getElementById("form3-phone"),n=document.getElementById("form3-email"),c=e.target;c.classList.contains("popup-close")?(h.style.display="none",t.value="",o.value="",n.value=""):(c=c.closest(".popup-content"))||(h.style.display="none",t.value="",o.value="",n.value="")})),f=document.querySelector(".service-header"),p=f.querySelectorAll(".service-header-tab"),y=document.querySelectorAll(".service-tab"),f.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&p.forEach((function(e,o){e===t&&function(e){for(var t=0;t<y.length;t++)e===t?(p[t].classList.add("active"),y[t].classList.remove("d-none")):(p[t].classList.remove("active"),y[t].classList.add("d-none"))}(o)}))})),a=document.querySelectorAll(".portfolio-item"),u=document.querySelector(".portfolio-content"),l=document.querySelectorAll(".dot"),i=0,s=function(e,t,o){e[t].classList.remove(o)},d=function(e,t,o){e[t].classList.add(o)},m=function(){s(a,i,"portfolio-item-active"),s(l,i,"dot-active"),++i>=a.length&&(i=0),d(a,i,"portfolio-item-active"),d(l,i,"dot-active")},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;r=setInterval(m,e)},u.addEventListener("click",(function(e){e.preventDefault();var t=e.target;t.matches(".portfolio-btn, .dot")&&(s(a,i,"portfolio-item-active"),s(l,i,"dot-active"),t.matches("#arrow-right")?i++:t.matches("#arrow-left")?i--:t.matches(".dot")&&l.forEach((function(e,o){e===t&&(i=o)})),i>=a.length&&(i=0),i<0&&(i=a.length-1),d(a,i,"portfolio-item-active"),d(l,i,"dot-active"))})),u.addEventListener("mouseover",(function(e){var t=e.target;(t.matches(".portfolio-btn")||t.matches(".dot"))&&clearInterval(r)})),u.addEventListener("mouseout",(function(e){var t=e.target;(t.matches(".portfolio-btn")||t.matches(".dot"))&&v()})),a.forEach((function(){var e=document.querySelector(".portfolio-dots"),t=document.createElement("li");t.classList.add("dot"),e.append(t)})),(l=document.querySelectorAll(".dot")).forEach((function(e){e.classList.contains("dot-active")||(s(l,i,"dot-active"),d(l,i,"dot-active"))})),v(2e3),n=document.querySelectorAll(".command__photo"),c=[],n.forEach((function(e){c.push(e.src)})),n.forEach((function(e,t){e.addEventListener("mouseover",(function(e){var t=e.target;t.src=t.dataset.img})),e.addEventListener("mouseout",(function(e){var o=e.target;"mouseout"===e.type&&(o.src=c[t])}))})),t=document.querySelectorAll("input.calc-item"),o=document.querySelector("body"),t.forEach((function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[\D/]/g,"")}))})),o.addEventListener("input",(function(e){var t=e.target;"user_name"===t.name?(t.value=t.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi,""),t.value=t.value.slice(0,1).toUpperCase()+t.value.slice(1).toLowerCase()):"user_email"===t.name?t.value=t.value.replace(/[а-я+\s+/()<>"\]#$%^&\[:;,\s+\\?=`|}{]/gi,""):"user_phone"===t.name?t.value=t.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:\-\\;{}|_~`]/gi,"").trim():"user_message"===t.name&&(t.value=t.value.replace(/[a-z!@#$^%*()_+}{|:"?><&]/gi,""))})),o.addEventListener("focusout",(function(e){var t=e.target;"user_name"===t.name?(t.value=t.value.replace(/[a-z\d/.,:;-=()\]!@#$%^&*_`\[+<>"№?]/gi,""),t.value=t.value.trim().slice(0,1).toUpperCase()+t.value.trim().slice(1).toLowerCase()):"user_email"===t.name?t.value=t.value.replace(/[^\w\s+/@\-\.]|()(?=\1)/gi,""):"user_phone"===t.name?t.value=t.value.replace(/[a-zа-я\s/.,!@#$%^&\]=*<>\["№?:;{}|_~`]/gi,"").trim():"user_message"===t.name&&(t.value=t.value.replace(/[a-z]/gi,""))})),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,o=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),a=document.querySelector(".calc-day"),u=document.getElementById("total"),l=function(){var o=0,l=1,i=1,s=+c.value,d=n.options[n.selectedIndex].value;r.value>1&&(l+=(r.value-1)/10),a.value&&a.value<5?i*=2:a.value&&a.value<10&&(i*=1.5),d&&s&&(o=t*s*d*l*i),e({duration:2e3,timing:function(e){return e},draw:function(e){u.textContent=Math.floor(e*o)}})};o.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&l()}))}(),function(){var e=document.querySelectorAll("form"),t=document.createElement("div");e.forEach((function(n){n.addEventListener("submit",(function(c){c.preventDefault(),n.append(t);var r=document.querySelector(".preloader");r.style.display="block";var a=new FormData(n);o(a).then((function(o){if(200!==o.status)throw new Error("status network not 200.");setTimeout((function(){r.style.display="none",e.forEach((function(e){e.reset()})),t.textContent="Ваша заявка отправлена! Мы с вами свяжемся!",t.style.color="#fff"}),3e3),setTimeout((function(){t.textContent=""}),5e3),setTimeout((function(){document.querySelector(".popup").style.display="none"}),5500)})).catch((function(e){t.textContent="Что то пошло не так...",console.error(e)}))}))}));var o=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:e})}}()})();
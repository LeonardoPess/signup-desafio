(()=>{"use strict";!function(){const e=document.querySelector('[data-form="form"]'),r=document.querySelector('[data-form="nameInput"]'),t=document.querySelector('[data-form="nameWrapper"]'),a=document.querySelector('[data-form="nameErrorMessage"]'),o=document.querySelector('[data-form="lastNameInput"]'),m=document.querySelector('[data-form="lastNameWrapper"]'),n=document.querySelector('[data-form="lastNameErrorMessage"]'),u=document.querySelector('[data-form="emailInput"]'),c=document.querySelector('[data-form="emailWrapper"]'),s=document.querySelector('[data-form="emailErrorMessage"]'),d=document.querySelector('[data-form="passwordInput"]'),l=document.querySelector('[data-form="passwordWrapper"]'),f=document.querySelector('[data-form="passwordErrorMessage"]');function i(e,r,t){e.classList.add("error"),r.innerHTML=t}function p(e){e.classList.remove("error")}f&&e.addEventListener("submit",(function(e){var y;e.preventDefault(),r.value?p(t):i(t,a,"First Name cannot be empty"),o.value?p(m):i(m,n,"Last Name cannot be empty"),y=u.value,String(y).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)?p(c):i(c,s,"Looks like this is not an email"),d.value?p(l):i(l,f,"Password cannot be empty")}))}()})();
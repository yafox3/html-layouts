!function(){Array.from(document.querySelectorAll(".accordion__item-trigger")).forEach((e=>e.addEventListener("click",(()=>{e.parentElement.classList.toggle("active")})))),Array.from(document.querySelectorAll(".widget")).forEach((e=>{e.addEventListener("click",(t=>{t.target.classList.contains("widget__hide-trigger")&&e.classList.toggle("hidden")}))}));const e=Array.from(document.querySelectorAll(".project-card"));e.forEach((t=>{t.addEventListener("click",(function(){e.forEach((e=>e.classList.remove("active"))),this.classList.add("active");const t=document.getElementById("project-type-info");t.querySelector(".project-type-info__title").innerText=this.dataset.title,t.querySelector(".project-type-info__text").innerText=this.dataset.text}))}))}();
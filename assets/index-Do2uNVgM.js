(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();let l=document.getElementById("inputField"),s=document.querySelector(".btn"),u=document.getElementById("textArea");const d=()=>{if(l.value.trim()=="")return console.error("You Entered Empty Space"),alert("You Cannot List Empty Space");{let o=document.createElement("li");o.textContent=l.value,u.append(o)}l.value=""};s.addEventListener("click",()=>{d()});u.addEventListener("click",r=>{let o=r.target;document.getElementById("textArea").style.cursor="pointer",o.remove()});const a=()=>{const r=document.querySelector("#myAudio");r.volume=.02,r.loop=!0,r.autoplay=!0,r.play()};a();

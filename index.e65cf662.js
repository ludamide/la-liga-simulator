const y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}};y();class l{constructor(e,o){this.name=e,this.logo=o,this.points=0,this.wins=0,this.ties=0,this.loses=0,this.goalsFor=0,this.goalsAgainst=0,this.goalsDiff=0}get showName(){return this.name}get showLogo(){return this.logo}get showPoints(){return this.points}get showWins(){return this.wins}get showTies(){return this.ties}get showLoses(){return this.loses}get showGoalsFor(){return this.goalsFor}get showGoalsAgainst(){return this.goalsAgainst}addWin(){this.wins++}addTie(){this.ties++}addLose(){this.loses++}addGoalsFor(e){this.goalsFor+=e}addGoalsAgainst(e){this.goalsAgainst+=e}addGoalsDiff(){this.goalsDiff=this.goalsFor-this.goalsAgainst}addPoints(e){this.points+=e}}class k{constructor(e,o){this.local=e,this.visitor=o,this.localGoals=0,this.visitorGoals=0}get showLocal(){return this.local}get showVisitor(){return this.visitor}get addLocalGoals(){const e=x();return this.localGoals=e,this.local.addGoalsFor(e),this.visitor.addGoalsAgainst(e),this.localGoals}get addVisitorGoals(){const e=x();return this.visitorGoals=e,this.visitor.addGoalsFor(e),this.local.addGoalsAgainst(e),this.visitorGoals}checkWinner(){this.localGoals>this.visitorGoals?(this.local.addWin(),this.local.addPoints(3),this.visitor.addLose()):this.localGoals<this.visitorGoals?(this.local.addLose(),this.visitor.addWin(),this.visitor.addPoints(3)):(this.local.addTie(),this.local.addPoints(1),this.visitor.addTie(),this.visitor.addPoints(1)),this.local.addGoalsDiff(),this.visitor.addGoalsDiff()}}class W{constructor(e){this.matches=e}}const h=[new l("Alav\xE9s","./public/img/alaves.png"),new l("Athletic","./public/img/athletic.png"),new l("Atl\xE9tico Madrid","./public/img/atletico.png"),new l("Barcelona","./public/img/barcelona.png"),new l("Betis","./public/img/betis.png"),new l("C\xE1diz","./public/img/cadiz.png"),new l("Celta de Vigo","./public/img/celta.png"),new l("Elche C.F.","./public/img/elche.png"),new l("RCD Espanyol","./public/img/espanyol.png"),new l("Getafe","./public/img/getafe.png"),new l("Granada","./public/img/granada.png"),new l("Levante","./public/img/levante.png"),new l("Real Madrid","./public/img/madrid.png"),new l("R.C.D. Mallorca","./public/img/mallorca.png"),new l("Osasuna","./public/img/osasuna.png"),new l("Rayo Vallecano","./public/img/rayo.png"),new l("Real Sociedad","./public/img/real.png"),new l("Sevilla","./public/img/sevilla.png"),new l("Valencia C.F.","./public/img/valencia.png"),new l("Villarreal","./public/img/villarreal.png")],m=[];let v,C,b=1;const F=document.querySelector("table"),E=document.querySelector(".scoreboard"),M=document.querySelector(".panel"),L=document.querySelector(".start"),G=document.querySelector(".next"),u=document.querySelector(".week");function S(){for(let t=0;t<h.length-1;t++)m.push(new W(D(t)))}function D(t){const e=[];for(const o of h){const i=n=>n.id===o.matches[t],s=new k(o,h.find(i));e.push(s)}return e}function P(t){const e=t.length-1;let o=0,i=0;return t.map((s,n,a)=>(a.slice(n+1).forEach(function(c,r,d){o=(2*n+r)%e,i=(r+e-n-1)%(e-n)+n+1,s.matches[o]=a[i].id,a[i].matches[o]=s.id}),s))}function V(t){const e=t.length;t.forEach((o,i)=>{o.id=i,o.matches=Array(e-1)}),P(t)}function N(t){for(const e in t){const o=document.createElement("tr");F.appendChild(o);const i=document.createElement("td"),s=Number(e)+1;i.innerText=s,o.appendChild(i);const n=document.createElement("td");n.className="logo",o.appendChild(n);const a=document.createElement("img");a.src=t[e].showLogo,n.appendChild(a);const c=document.createElement("td");c.className="name",c.innerText=t[e].showName,o.appendChild(c);const r=document.createElement("td");r.className="wins",r.innerText=t[e].showWins,o.appendChild(r);const d=document.createElement("td");d.className="ties",d.innerText=t[e].showTies,o.appendChild(d);const p=document.createElement("td");p.className="loses",p.innerText=t[e].showLoses,o.appendChild(p);const g=document.createElement("td");g.className="goals-for",g.innerText=t[e].showGoalsFor,o.appendChild(g);const f=document.createElement("td");f.className="goals-against",f.innerText=t[e].showGoalsAgainst,o.appendChild(f);const w=document.createElement("td");w.className="points",w.innerText=t[e].showPoints,o.appendChild(w)}}function T(t){for(const e of t.matches)q(e)}function q(t){const e=document.createElement("div");e.className="score",E.appendChild(e);const o=document.createElement("div");o.className="local",e.appendChild(o);const i=document.createElement("div");i.className="local-info",i.innerText=t.showLocal.name,o.appendChild(i);const s=document.createElement("img");s.src=t.showLocal.logo,i.appendChild(s);const n=document.createElement("div");n.className="local-goals",n.innerText=t.addLocalGoals,o.appendChild(n);const a=document.createElement("div");a.className="visitor",e.appendChild(a);const c=document.createElement("div");c.className="visitor-info",c.innerText=t.showVisitor.name,a.appendChild(c);const r=document.createElement("img");r.src=t.showVisitor.logo,c.appendChild(r);const d=document.createElement("div");d.className="visitor-goals",d.innerText=t.addVisitorGoals,a.appendChild(d),t.checkWinner()}function I(t){document.querySelectorAll("td").forEach(o=>o.remove()),N(t)}function O(){const t=v[0];console.log(t);const e=document.createElement("div");e.className="winner-info",M.appendChild(e);const o=document.createElement("img");o.className="winner-logo",o.src=t.showLogo,e.appendChild(o);const i=document.createElement("p");i.className="winner-description",i.innerText=`\xA1\xA1${t.showName.toUpperCase()} ha ganado!!`,e.appendChild(i)}function x(){let t,e,o;do o=Math.floor(Math.random()*10),e=Math.floor(Math.random()*1e3)+1,(o>=0&&o<=3&&o!==300&&o!==600&&e<=900||o>3&&o<=10&&e>990&&e<=999||o>10&&o<=20&&e>999)&&(t=o);while(typeof t!=typeof o);return t}function A(){v=_.orderBy(h,["points","wins"],["desc"]),I(v),B()}function R(){const t=m.shift();T(t),A()}function B(){u.innerText="",u.innerText=`Jornadas ${b}/${b+1}
de ${C*2}`,b+=2}L.addEventListener("click",()=>{R(),L.remove(),G.classList.remove("hidden"),u.classList.remove("hidden")});G.addEventListener("click",()=>{E.innerHTML="";const t=m.shift();t===void 0?(G.remove(),u.remove(),O()):(T(t),A())});window.addEventListener("DOMContentLoaded",()=>{N(h),V(h),S(),C=m.length});

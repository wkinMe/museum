var m=Object.defineProperty;var p=(s,t,e)=>t in s?m(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var c=(s,t,e)=>p(s,typeof t!="symbol"?t+"":t,e);import{B as k,F as _,j as i,C as y,r as u}from"./index-Daam2623.js";import{f as w}from"./favorite-me74CKp4.js";function F({artist_display:s,image_id:t,...e}){const o=s.match(new RegExp("(?<=\\n|\\\\\\()\\s*([^,\\n]+)")),r=o?o[1].trim():"Unknown",n=t&&`https://www.artic.edu/iiif/2/${t}/full/843,/0/default.jpg`;return{...e,artist_nationality:r,image_url:n}}function A(s){return fetch(`${k}/${s}?${_}`).then(t=>t.json()).then(t=>F(t.data))}const a=class a{constructor(){c(this,"storageKey","favorite");sessionStorage.setItem(this.storageKey,"[]")}static getInstance(){return a.instance||(a.instance=new a),a.instance}getFavorites(){const t=sessionStorage.getItem(this.storageKey);return t?JSON.parse(t):[]}addToFavorites(t){const e=this.getFavorites(),{id:o}=t;e.find(r=>r.id==o)||(e.push(t),sessionStorage.setItem(this.storageKey,JSON.stringify(e)))}removeFromFavorites(t){const e=this.getFavorites(),{id:o}=t,r=e.filter(n=>n.id!==o);sessionStorage.setItem(this.storageKey,JSON.stringify(r))}async getFavoriteArts(){const t=this.getFavorites();return await Promise.all(t.map(({id:o})=>A(o)))}clearFavorites(){sessionStorage.removeItem(this.storageKey)}isFavorite(t){const e=this.getFavorites(),{id:o}=t;return!!e.find(r=>r.id==o)}};c(a,"instance");let g=a;const v=g.getInstance(),E="_favorite_1o53a_1",j="_favoriteActive_1o53a_13",S="_up_1o53a_17",d={favorite:E,favoriteActive:j,up:S};function C({artId:s,isFavorite:t,onClick:e,isUp:o}){const r=n=>{e(),n.preventDefault(),t?v.removeFromFavorites({id:s}):v.addToFavorites({id:s})};return i.jsx("div",{onClick:r,className:`${d.favorite} ${t?d.favoriteActive:""} ${o?d.up:""}`,"data-testid":"favoriteBtn",children:i.jsx("img",{src:w,alt:""})})}const x="data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='79'%20height='79'%20stroke='%23E0A449'/%3e%3cpath%20d='M18.2205%2064H61.2205'%20stroke='%23E0A449'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M25.2205%2055V38'%20stroke='%23E0A449'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M35.2205%2055V38'%20stroke='%23E0A449'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M44.2205%2055V38'%20stroke='%23E0A449'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M54.2205%2055V38'%20stroke='%23E0A449'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M39.2204%2016L58.2205%2028H20.2205L39.2204%2016Z'%20stroke='%23E0A449'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",I="_container_1qsye_1",L="_spinner_1qsye_21",$="_rotation_1qsye_1",B="_large_1qsye_31",K="_small_1qsye_36",l={container:I,spinner:L,rotation:$,large:B,small:K};function M({size:s}){return i.jsx("div",{className:`${l.spinner} ${s==y.LARGE?l.large:l.small}`,"data-testid":"loader"})}function D({src:s,size:t}){const[e,o]=u.useState(!1),[r,n]=u.useState(!1),f=()=>{o(!0)},h=()=>{o(!0),n(!0)};return i.jsxs(i.Fragment,{children:[!e&&i.jsx(M,{size:t}),i.jsx("img",{onLoad:f,onError:h,src:s&&!r?s:x})]})}export{C as F,M as L,D as a,v as f,A as g};

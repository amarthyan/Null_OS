(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const o={minimize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="5" y1="12" x2="19" y2="12"/></svg>',maximize:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="4" y="4" width="16" height="16" rx="2"/></svg>',restore:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="4" y="8" width="12" height="12" rx="1.5"/><path d="M8 4h10a2 2 0 0 1 2 2v10"/></svg>',close:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',osLogo:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',power:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/></svg>',restart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21.5 2v6h-6"/><path d="M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',fileManager:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',systemMonitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="6 10 9 13 12 7 15 11 18 8"/></svg>',calculator:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01"/></svg>',notepad:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',terminal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',recycleBin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',appStore:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',starFilled:'<svg viewBox="0 0 24 24" fill="#f1c40f" stroke="#f1c40f" stroke-width="1.75"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',gamepad:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="6"/></svg>',sparkles:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 3l1.912 4.606L18.5 9.5l-4.588 1.894L12 16l-1.912-4.606L5.5 9.5l4.588-1.894z"/><path d="M19 15l.956 2.303L22.25 18.25l-2.294.947L19 21.5l-.956-2.303L15.75 18.25l2.294-.947z"/></svg>',boxIcon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',bot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8.01" y2="16"/><line x1="16" y1="16" x2="16.01" y2="16"/></svg>',wifi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',volume:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>',volumeMute:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>',battery:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="1" y="6" width="18" height="12" rx="2" ry="2"/><line x1="23" y1="10" x2="23" y2="14"/><line x1="5" y1="10" x2="5" y2="14"/><line x1="9" y1="10" x2="9" y2="14"/><line x1="13" y1="10" x2="13" y2="14"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',bluetooth:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/></svg>',sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',moon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',folder:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',fileText:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>',fileCode:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/></svg>',fileExe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',fileImage:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>',arrowLeft:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',arrowRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',arrowUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',chevronRight:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="9 18 15 12 9 6"/></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',warning:'<svg viewBox="0 0 24 24" fill="none" stroke="#f1c40f" stroke-width="1.75"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',info:'<svg viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',error:'<svg viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="#2ecc71" stroke-width="1.75"><polyline points="20 6 9 17 4 12"/></svg>',browser:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',browserWindow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="2" y="3" width="20" height="18" rx="2"/><line x1="2" y1="8" x2="22" y2="8"/><circle cx="5" cy="5.5" r="1"/><circle cx="8" cy="5.5" r="1"/><circle cx="11" cy="5.5" r="1"/></svg>',shieldCheck:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',shieldAlert:'<svg viewBox="0 0 24 24" fill="none" stroke="#e74c3c" stroke-width="1.75"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',firewall:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v6M15 9v6M9 15v6"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>',camera:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',mic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>',location:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',clipboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/></svg>',bookmark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>',home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',thumbsUp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',lockOpen:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',alertCircle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>'};class J{constructor(){this.ctx=null,this.enabled=!0,this.volume=.5}init(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}playClick(){if(!(!this.enabled||!this.ctx))try{this.init();const e=this.ctx.createOscillator(),t=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(300,this.ctx.currentTime+.03),t.gain.setValueAtTime(.04*this.volume,this.ctx.currentTime),t.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.03),e.connect(t),t.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.03)}catch{}}playNotification(){if(!(!this.enabled||!this.ctx))try{this.init();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),s=this.ctx.createOscillator(),i=this.ctx.createGain();t.type="sine",s.type="sine",t.frequency.setValueAtTime(587.33,e),t.frequency.setValueAtTime(880,e+.08),s.frequency.setValueAtTime(1174.66,e),s.frequency.setValueAtTime(1760,e+.08),i.gain.setValueAtTime(.06*this.volume,e),i.gain.exponentialRampToValueAtTime(1e-4,e+.35),t.connect(i),s.connect(i),i.connect(this.ctx.destination),t.start(e),s.start(e),t.stop(e+.35),s.stop(e+.35)}catch{}}playError(){if(!(!this.enabled||!this.ctx))try{this.init();const e=this.ctx.currentTime,t=[329.63,392,493.88],s=this.ctx.createGain();s.gain.setValueAtTime(.08*this.volume,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.4),s.connect(this.ctx.destination),t.forEach(i=>{const n=this.ctx.createOscillator();n.type="triangle",n.frequency.setValueAtTime(i,e),n.connect(s),n.start(e),n.stop(e+.4)})}catch{}}playLogon(){if(!(!this.enabled||!this.ctx))try{this.init(),[440,554.37,659.25,880].forEach((t,s)=>{const i=this.ctx.currentTime+s*.08,n=this.ctx.createOscillator(),a=this.ctx.createGain();n.type="sine",n.frequency.setValueAtTime(t,i),a.gain.setValueAtTime(.05*this.volume,i),a.gain.exponentialRampToValueAtTime(1e-4,i+.5),n.connect(a),a.connect(this.ctx.destination),n.start(i),n.stop(i+.5)})}catch{}}}const l=new J;class Z{constructor(){this.fs={"C:":{type:"directory",name:"Local Disk (C:)",children:{"testfile.org-5GB.dat":{type:"file",name:"testfile.org-5GB.dat",icon:"fileExe",size:"5.00 GB (5,000,000,000 bytes)",modified:"2026-09-11 20:14",content:"[5.00 GB Binary Data Buffer - Increases actual application footprint to over 5 Gigabytes]"},"stress.sh":{type:"file",name:"stress.sh",icon:"fileCode",size:"260 bytes",modified:"2026-09-11 20:22",content:`#!/bin/bash

# CPU load
cores=$(nproc)

for ((i=0; i<cores; i++))
do
    while true
    do
        echo $((12345 * 67890)) > /dev/null
    done &
done

# RAM load (500 MB)
data=$(head -c 500M /dev/zero)

echo "CPU and RAM stress started. Press Ctrl+C to stop."

wait`},Users:{type:"directory",name:"Users",children:{Aizen:{type:"directory",name:"Aizen",children:{Desktop:{type:"directory",name:"Desktop",children:{"important_notice.txt":{type:"file",name:"important_notice.txt",icon:"fileText",size:"142 bytes",modified:"2026-09-10 14:22",content:`IMPORTANT SYSTEM ADVISORY:

Your session is running at 100% stability.
No critical errors have occurred, which our engineers find deeply suspicious.

Please refrain from accomplishing anything urgent on this machine.`},"urgent_tasks.txt":{type:"file",name:"urgent_tasks.txt",icon:"fileText",size:"89 bytes",modified:"2026-09-11 09:15",content:`1. Reorganize desktop icons into a subtly different grid.
2. Check if the refrigerator light actually turns off.
3. Breathe.`}}},Documents:{type:"directory",name:"Documents",children:{"passwords_plaintext_do_not_share.txt":{type:"file",name:"passwords_plaintext_do_not_share.txt",icon:"fileText",size:"310 bytes",modified:"2026-08-14 22:04",content:`--- CONFIDENTIAL CREDENTIALS ---

Banking: password123
Master Vault: admin
Root Password: correcthorsebatterystaple
Existential Security Pin: 0000

Security Notice: This file is protected by the Windows Honor System.`},"world_domination_plan.txt":{type:"file",name:"world_domination_plan.txt",icon:"fileText",size:"265 bytes",modified:"2026-09-01 11:30",content:`PHASE 1: Wake up at 6:00 AM.
PHASE 2: Hit snooze until 9:45 AM.
PHASE 3: Stare at ceiling contemplating universe.
PHASE 4: World domination postponed to next Tuesday.`},"quarterly_goals.txt":{type:"file",name:"quarterly_goals.txt",icon:"fileText",size:"198 bytes",modified:"2026-09-08 16:45",content:`Q3 Productivity Review:
- Target: 100% effectiveness
- Actual: Consumed 14 cups of tea while clicking empty folders
- Status: On track for continued non-achievement.`},Projects:{type:"directory",name:"Projects",children:{"revolutionary_software.js":{type:"file",name:"revolutionary_software.js",icon:"fileCode",size:"184 bytes",modified:"2026-09-04 18:20",content:`// The Ultimate Operating System Optimizer
function optimizeLife() {
  while (true) {
    // Doing nothing, but with great computational intensity
  }
}
optimizeLife();`}}}}},Downloads:{type:"directory",name:"Downloads",children:{"totally_legit_update.exe":{type:"file",name:"totally_legit_update.exe",icon:"fileExe",size:"14.2 MB",modified:"2026-09-11 17:12",content:"BINARY EXECUTABLE CONTENT: [Unexecutable existential payload]"},"cat_picture_uncompressed.png":{type:"file",name:"cat_picture_uncompressed.png",icon:"fileImage",size:"4.8 MB",modified:"2026-09-09 13:02",content:"[High resolution image of a cat judging you]"}}},Pictures:{type:"directory",name:"Pictures",children:{"wallpaper_slate.png":{type:"file",name:"wallpaper_slate.png",icon:"fileImage",size:"3.1 MB",modified:"2026-08-01 10:00",content:"[System Wallpaper]"}}}}}}}}},RecycleBin:{type:"directory",name:"Recycle Bin",children:{"gym_membership_intentions.txt":{type:"file",name:"gym_membership_intentions.txt",icon:"fileText",size:"52 bytes",modified:"2026-01-02 08:00",originalPath:"C:/Users/Aizen/Documents",content:"I will definitely go 5 times a week starting Monday."},"good_decisions.pdf":{type:"file",name:"good_decisions.pdf",icon:"fileText",size:"0 bytes",modified:"2026-05-19 12:00",originalPath:"C:/Users/Aizen/Desktop",content:"[File empty: 0 bytes of good decisions discovered]"}}}}}resolvePath(e){if(!e||e==="This PC"||e==="Root")return{node:this.fs["C:"],path:"C:"};if(e==="Recycle Bin")return{node:this.fs.RecycleBin,path:"Recycle Bin"};const s=e.replace(/\\/g,"/").split("/").filter(Boolean);let i=this.fs["C:"],n=["C:"];for(let a=s[0]==="C:"?1:0;a<s.length;a++){const r=s[a];if(i.children&&i.children[r])i=i.children[r],n.push(r);else return null}return{node:i,path:n.join("/")}}getItems(e){const t=this.resolvePath(e);return!t||t.node.type!=="directory"?[]:Object.entries(t.node.children||{}).map(([s,i])=>({name:s,...i}))}getFile(e){const t=this.resolvePath(e);return t&&t.node.type==="file"?t.node:null}saveFile(e,t){const s=e.replace(/\\/g,"/").split("/").filter(Boolean),i=s.pop(),n=s.join("/"),a=this.resolvePath(n);if(a&&a.node.type==="directory"){const c=new Date().toISOString().slice(0,16).replace("T"," ");return a.node.children[i]={type:"file",name:i,icon:"fileText",size:`${t.length} bytes`,modified:c,content:t},!0}return!1}deleteItem(e){const t=e.replace(/\\/g,"/").split("/").filter(Boolean),s=t.pop(),i=t.join("/"),n=this.resolvePath(i);if(n&&n.node.children[s]){const a=n.node.children[s];return delete n.node.children[s],this.fs.RecycleBin.children[s]={...a,originalPath:i},!0}return!1}emptyRecycleBin(){this.fs.RecycleBin.children={}}}const q=new Z;class X{constructor(){this.isActive=!0,this.hardwareCores=typeof navigator<"u"&&navigator.hardwareConcurrency||8,this.listeners=new Set,this.simulatedCpu=54,this.simulatedRamMb=5324,this.totalRamMb=8192}start(){this.isActive=!0,this.notify()}stop(){this.isActive=!1,this.notify()}toggle(){this.isActive=!this.isActive,this.notify()}getMetrics(){if(!this.isActive)return{isActive:!1,activeWorkers:0,targetCores:this.hardwareCores,actualAllocatedMb:18,allocatedBuffersCount:0,cpuUsagePct:4,simulatedRamMb:512,totalRamMb:this.totalRamMb};const e=Math.sin(Date.now()/1500)*8+(Math.random()*4-2),t=Math.min(88,Math.max(48,Math.round(58+e))),s=Math.round(Math.cos(Date.now()/3e3)*80);return{isActive:!0,activeWorkers:Math.max(2,Math.ceil(this.hardwareCores*.55)),targetCores:this.hardwareCores,actualAllocatedMb:this.simulatedRamMb+s,allocatedBuffersCount:16,cpuUsagePct:t,simulatedRamMb:this.simulatedRamMb+s,totalRamMb:this.totalRamMb}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>{try{e(this.getMetrics())}catch{}})}}const S=new X;class Q{constructor(){this.storageKey="nullos_device_perf_mode_v2",this.listeners=new Set,this.userMode=this.loadPref("mode","auto"),this.blurEnabled=this.loadPref("blur",!0),this.autoMaximizeOnMobile=this.loadPref("autoMaximize",!0),this.backgroundThrottle=this.loadPref("bgThrottle",!0),this.specs=this.detectHardware(),this.currentTier=this.resolveTier(),this.init()}loadPref(e,t){try{const s=localStorage.getItem(`${this.storageKey}_${e}`);if(s!==null)return JSON.parse(s)}catch{}return t}savePref(e,t){try{localStorage.setItem(`${this.storageKey}_${e}`,JSON.stringify(t))}catch{}}detectHardware(){const e=typeof navigator<"u"&&navigator.hardwareConcurrency||4,t=typeof navigator<"u"&&"deviceMemory"in navigator&&navigator.deviceMemory||4,s=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints&&navigator.maxTouchPoints>0),i=typeof window<"u"&&window.devicePixelRatio||1,n=typeof window<"u"?window.innerWidth:1280,a=typeof window<"u"?window.innerHeight:800;let r="desktop";n<640?r="mobile":n<1024?r="tablet":n>=2160&&(r="ultrawide-4k");let c="Standard GPU",d=!1;try{const f=document.createElement("canvas"),y=f.getContext("webgl")||f.getContext("experimental-webgl");if(y){const v=y.getExtension("WEBGL_debug_renderer_info");if(v){c=y.getParameter(v.UNMASKED_RENDERER_WEBGL)||"WebGL Supported";const w=c.toLowerCase();(w.includes("swiftshader")||w.includes("llvmpipe")||w.includes("software"))&&(d=!0)}}}catch{}const p=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;return{cores:e,memory:t,isTouch:s,dpr:i,width:n,height:a,formFactor:r,gpuRenderer:c,isLowEndGpu:d,prefersReducedMotion:p}}resolveTier(){if(this.userMode!=="auto")return this.userMode;const{cores:e,memory:t,formFactor:s,isLowEndGpu:i,prefersReducedMotion:n}=this.specs;return n||i||e<=4&&t<=4&&s==="mobile"?"low":e>=8&&t>=8&&!i?"high":"balanced"}init(){this.applyClasses(),this.bindEvents()}bindEvents(){if(typeof window>"u")return;let e=null;window.addEventListener("resize",()=>{clearTimeout(e),e=setTimeout(()=>{const t=this.specs.formFactor;this.specs.width=window.innerWidth,this.specs.height=window.innerHeight,this.specs.dpr=window.devicePixelRatio||1,this.specs.width<640?this.specs.formFactor="mobile":this.specs.width<1024?this.specs.formFactor="tablet":this.specs.width>=2160?this.specs.formFactor="ultrawide-4k":this.specs.formFactor="desktop",this.currentTier=this.resolveTier(),this.applyClasses(),t!==this.specs.formFactor&&this.notify()},100)}),document.addEventListener("visibilitychange",()=>{this.backgroundThrottle&&(document.body.classList.toggle("page-hidden",document.hidden),this.notify())})}applyClasses(){if(typeof document>"u")return;const e=document.body;e.classList.remove("perf-tier-low","perf-tier-balanced","perf-tier-high","device-mobile","device-tablet","device-desktop","device-ultrawide","device-touch","device-retina","no-blur"),e.classList.add(`perf-tier-${this.currentTier}`),this.specs.width<640?e.classList.add("device-mobile"):this.specs.width<1024?e.classList.add("device-tablet"):this.specs.width>=2160?e.classList.add("device-ultrawide"):e.classList.add("device-desktop"),this.specs.isTouch&&e.classList.add("device-touch"),this.specs.dpr>=1.5&&e.classList.add("device-retina"),(!this.blurEnabled||this.currentTier==="low")&&e.classList.add("no-blur")}setPerformanceMode(e){["auto","low","balanced","high"].includes(e)&&(this.userMode=e,this.savePref("mode",e),this.currentTier=this.resolveTier(),this.applyClasses(),this.notify())}setBlurEffects(e){this.blurEnabled=!!e,this.savePref("blur",this.blurEnabled),this.applyClasses(),this.notify()}setAutoMaximizeOnMobile(e){this.autoMaximizeOnMobile=!!e,this.savePref("autoMaximize",this.autoMaximizeOnMobile),this.notify()}setBackgroundThrottle(e){this.backgroundThrottle=!!e,this.savePref("bgThrottle",this.backgroundThrottle),this.notify()}getSpecs(){return{...this.specs,userMode:this.userMode,effectiveTier:this.currentTier,blurEnabled:this.blurEnabled,autoMaximizeOnMobile:this.autoMaximizeOnMobile,backgroundThrottle:this.backgroundThrottle,isPageHidden:typeof document<"u"?document.hidden:!1}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){const e=this.getSpecs();this.listeners.forEach(t=>{try{t(e)}catch{}})}}const I=new Q;class ee{constructor(){this.windows=new Map,this.activeWindowId=null,this.baseZIndex=100,this.cascadeOffset=0,this.workspace=null,this.onWindowStateChange=null}init(e){this.workspace=e,window.addEventListener("resize",()=>{this.reflowWindows()})}reflowWindows(){if(!this.workspace)return;const e=this.workspace.getBoundingClientRect(),t=e.width<640;this.windows.forEach(s=>{if(!s.isMinimized){if(t&&I.autoMaximizeOnMobile&&!s.isMaximized){this.toggleMaximize(s.id);return}if(!s.isMaximized){const i=s.element;let n=i.offsetWidth,a=i.offsetHeight,r=i.offsetLeft,c=i.offsetTop;const d=Math.max(280,e.width-16),p=Math.max(200,e.height-16);n>d&&(n=d,i.style.width=`${n}px`),a>p&&(a=p,i.style.height=`${a}px`),r+80>e.width&&(r=Math.max(8,e.width-n-8),i.style.left=`${r}px`),c+40>e.height&&(c=Math.max(8,e.height-a-8),i.style.top=`${c}px`)}}})}createWindow(e){const{id:t,title:s,icon:i="fileManager",width:n=720,height:a=480,minWidth:r=320,minHeight:c=220,content:d,onClose:p}=e;if(this.windows.has(t)){const G=this.windows.get(t);return G.isMinimized&&this.restoreWindow(t),this.focusWindow(t),G}l.playClick();const f=this.workspace?this.workspace.getBoundingClientRect():{width:window.innerWidth,height:window.innerHeight-44},v=f.width<640&&I.autoMaximizeOnMobile,w=Math.max(280,f.width-16),E=Math.max(200,f.height-16),M=Math.min(n,w),$=Math.min(a,E),C=Math.max(8,Math.min(Math.max(8,f.width-M-16),40+this.cascadeOffset)),L=Math.max(8,Math.min(Math.max(8,f.height-$-16),24+this.cascadeOffset));this.cascadeOffset=(this.cascadeOffset+24)%160;const x=document.createElement("div");x.className="os-window opening",v&&x.classList.add("maximized"),x.id=`win-${t}`,x.style.width=`${M}px`,x.style.height=`${$}px`,x.style.left=`${C}px`,x.style.top=`${L}px`,x.style.zIndex=++this.baseZIndex;const B=o[i]||o.fileManager,R=v?o.restore:o.maximize,V=v?"Restore":"Maximize";x.innerHTML=`
      <div class="window-header">
        <div class="window-title-group">
          <div class="window-title-icon">${B}</div>
          <span class="window-title-text">${s}</span>
        </div>
        <div class="window-controls">
          <button class="window-btn btn-min" title="Minimize">${o.minimize}</button>
          <button class="window-btn btn-max" title="${V}">${R}</button>
          <button class="window-btn btn-close" title="Close">${o.close}</button>
        </div>
      </div>
      <div class="window-content"></div>

      <!-- 8-Directional Resize Handles -->
      <div class="resize-handle resize-n" data-dir="n"></div>
      <div class="resize-handle resize-s" data-dir="s"></div>
      <div class="resize-handle resize-w" data-dir="w"></div>
      <div class="resize-handle resize-e" data-dir="e"></div>
      <div class="resize-handle resize-nw" data-dir="nw"></div>
      <div class="resize-handle resize-ne" data-dir="ne"></div>
      <div class="resize-handle resize-sw" data-dir="sw"></div>
      <div class="resize-handle resize-se" data-dir="se"></div>
    `;const W=x.querySelector(".window-content");typeof d=="string"?W.innerHTML=d:d instanceof HTMLElement&&W.appendChild(d),this.workspace.appendChild(x),requestAnimationFrame(()=>{x.classList.remove("opening")});const N={id:t,title:s,icon:i,element:x,isMinimized:!1,isMaximized:v,prevBounds:{posX:C,posY:L,width:M,height:$},minWidth:Math.min(r,M),minHeight:Math.min(c,$),onClose:p};return this.windows.set(t,N),this.attachWindowEvents(N),this.focusWindow(t),this.onWindowStateChange&&this.onWindowStateChange(t,"opened",N),N}attachWindowEvents(e){const t=e.element,s=t.querySelector(".window-header"),i=t.querySelector(".btn-min"),n=t.querySelector(".btn-max"),a=t.querySelector(".btn-close");t.addEventListener("pointerdown",()=>{this.focusWindow(e.id)}),i.addEventListener("click",r=>{r.stopPropagation(),this.minimizeWindow(e.id)}),n.addEventListener("click",r=>{r.stopPropagation(),this.toggleMaximize(e.id)}),a.addEventListener("click",r=>{r.stopPropagation(),this.closeWindow(e.id)}),s.addEventListener("dblclick",r=>{r.target.closest(".window-btn")||this.toggleMaximize(e.id)}),s.addEventListener("pointerdown",r=>{if(r.target.closest(".window-btn")||e.isMaximized)return;const c=r.clientX,d=r.clientY,p=t.offsetLeft,f=t.offsetTop,y=t.offsetWidth;try{s.setPointerCapture(r.pointerId)}catch{}const v=E=>{const M=E.clientX-c,$=E.clientY-d;let C=p+M,L=f+$;const x=(window.innerWidth||1280)-80,B=-y+80,R=(window.innerHeight||800)-44;C=Math.max(B,Math.min(x,C)),L=Math.max(0,Math.min(R,L)),t.style.left=`${C}px`,t.style.top=`${L}px`},w=E=>{try{s.releasePointerCapture(E.pointerId)}catch{}window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",w)};window.addEventListener("pointermove",v),window.addEventListener("pointerup",w)}),t.querySelectorAll(".resize-handle").forEach(r=>{r.addEventListener("pointerdown",c=>{if(e.isMaximized)return;c.stopPropagation(),c.preventDefault();const d=r.dataset.dir,p=c.clientX,f=c.clientY,y=t.offsetWidth,v=t.offsetHeight,w=t.offsetLeft,E=t.offsetTop;try{r.setPointerCapture(c.pointerId)}catch{}const M=C=>{const L=C.clientX-p,x=C.clientY-f;let B=y,R=v,V=w,W=E;const N=window.innerWidth||1280,G=(window.innerHeight||800)-44;if(d.includes("e")&&(B=Math.min(N-w,Math.max(e.minWidth,y+L))),d.includes("s")&&(R=Math.min(G-E,Math.max(e.minHeight,v+x))),d.includes("w")){const F=y-L;F>=e.minWidth&&(B=F,V=w+L)}if(d.includes("n")){const F=v-x;F>=e.minHeight&&(R=F,W=E+x)}t.style.width=`${B}px`,t.style.height=`${R}px`,t.style.left=`${V}px`,t.style.top=`${W}px`},$=C=>{try{r.releasePointerCapture(C.pointerId)}catch{}window.removeEventListener("pointermove",M),window.removeEventListener("pointerup",$)};window.addEventListener("pointermove",M),window.addEventListener("pointerup",$)})})}focusWindow(e){const t=this.windows.get(e);t&&(this.activeWindowId===e&&!t.isMinimized||(this.windows.forEach((s,i)=>{i!==e&&s.element.classList.add("inactive")}),t.element.classList.remove("inactive"),t.element.style.zIndex=++this.baseZIndex,this.activeWindowId=e,this.onWindowStateChange&&this.onWindowStateChange(e,"focused",t)))}minimizeWindow(e){const t=this.windows.get(e);if(!t)return;t.isMinimized=!0,t.element.classList.add("minimized");let s=-1,i=null;this.windows.forEach((n,a)=>{if(a!==e&&!n.isMinimized){const r=parseInt(n.element.style.zIndex||0,10);r>s&&(s=r,i=a)}}),i?this.focusWindow(i):this.activeWindowId=null,this.onWindowStateChange&&this.onWindowStateChange(e,"minimized",t)}restoreWindow(e){const t=this.windows.get(e);t&&(t.isMinimized=!1,t.element.classList.remove("minimized"),this.focusWindow(e),this.onWindowStateChange&&this.onWindowStateChange(e,"restored",t))}toggleMaximize(e){const t=this.windows.get(e);if(!t)return;const s=t.element.querySelector(".btn-max");t.isMaximized?(t.element.classList.remove("maximized"),t.element.style.left=`${t.prevBounds.posX}px`,t.element.style.top=`${t.prevBounds.posY}px`,t.element.style.width=`${t.prevBounds.width}px`,t.element.style.height=`${t.prevBounds.height}px`,s&&(s.innerHTML=o.maximize,s.title="Maximize"),t.isMaximized=!1):(t.prevBounds={posX:t.element.offsetLeft,posY:t.element.offsetTop,width:t.element.offsetWidth,height:t.element.offsetHeight},t.element.classList.add("maximized"),s&&(s.innerHTML=o.restore,s.title="Restore"),t.isMaximized=!0),this.focusWindow(e)}closeWindow(e){const t=this.windows.get(e);t&&(l.playClick(),t.element.classList.add("closing"),setTimeout(()=>{if(t.onClose&&t.onClose(),t.element.remove(),this.windows.delete(e),this.activeWindowId===e){this.activeWindowId=null;let s=-1,i=null;this.windows.forEach((n,a)=>{if(!n.isMinimized){const r=parseInt(n.element.style.zIndex||0,10);r>s&&(s=r,i=a)}}),i&&this.focusWindow(i)}this.onWindowStateChange&&this.onWindowStateChange(e,"closed",t)},150))}getWindow(e){return this.windows.get(e)}isWindowVisible(e){const t=this.windows.get(e);return t&&!t.isMinimized&&!document.hidden}}const m=new ee;class te{constructor(){this.container=null,this.history=[]}init(e){this.container=e,this.startPeriodicHumor()}notify(e){const{title:t="System",message:s,app:i="System",icon:n="osLogo",duration:a=6e3}=e;l.playNotification();const r=document.createElement("div");r.className="notification-toast";const c=o[n]||o.osLogo;r.innerHTML=`
      <div class="toast-header">
        <div class="toast-app-info">
          ${c}
          <span>${i}</span>
        </div>
        <button class="toast-close-btn">${o.close}</button>
      </div>
      <div class="toast-title">${t}</div>
      <div class="toast-body">${s}</div>
    `,r.querySelector(".toast-close-btn").addEventListener("click",()=>{this.dismiss(r)}),this.container.appendChild(r),this.history.push({title:t,message:s,time:new Date}),a>0&&setTimeout(()=>{this.dismiss(r)},a)}dismiss(e){!e||!e.parentNode||(e.style.opacity="0",e.style.transform="translateX(40px)",e.style.transition="all 180ms ease",setTimeout(()=>{e.remove()},180))}startPeriodicHumor(){const e=[{app:"System",title:"System Health",message:"Your computer is working normally. It isn't accomplishing anything, though.",icon:"check"},{app:"Storage Sense",title:"Storage Optimization",message:"420 GB of free space available. Still no room for personal improvement.",icon:"fileManager"},{app:"Resource Engine",title:"Workload Status",message:"Background workers actively consuming >50% CPU to maintain optimal uselessness.",icon:"cpu"},{app:"Security Center",title:"Zero Threats Detected",message:"0 threats found. 0 productive activities detected during the last 24 hours.",icon:"lock"},{app:"Network",title:"Connected: Nothing_5G",message:"High-speed internet ready to load more unread browser tabs.",icon:"wifi"}];let t=0;setTimeout(()=>{this.notify(e[0])},4500),setInterval(()=>{t=(t+1)%e.length,this.notify(e[t])},45e3)}}const A=new te,se=[{name:"NothingService.exe",appId:null,baseCpu:0,baseMem:18,disk:"0.0 MB/s",network:"0.0 KB/s",status:"Running",description:"Guarantees that nothing occurs in the background."},{name:"RockService.exe",appId:"rockSimulator",baseCpu:4.8,baseMem:380,disk:"0.1 MB/s",network:"0.0 KB/s",status:"Monitoring stillness",description:"Continuously monitors the rock to ensure zero movement occurs."},{name:"AirManagerService.exe",appId:"airManager",baseCpu:1.2,baseMem:140,disk:"0.0 MB/s",network:"0.0 KB/s",status:"Managing atmosphere",description:"Verifies the room air remains 100% managed."},{name:"UselessUpdate.exe",appId:null,baseCpu:2.1,baseMem:94,disk:"1.2 MB/s",network:"14.2 KB/s",status:"Checking for void",description:"Periodically searches for updates that will change nothing."},{name:"WaitingBackground.exe",appId:"waitingApp",baseCpu:.2,baseMem:42,disk:"0.0 MB/s",network:"0.0 KB/s",status:"Waiting purposefully",description:"Passively waits for future events that are not scheduled."},{name:"ProductivityBlocker.exe",appId:null,baseCpu:1.8,baseMem:128,disk:"0.4 MB/s",network:"0.0 KB/s",status:"Active prevention",description:"Intercepts incoming productive thoughts and safely archives them."},{name:"BoxRenderer.exe",appId:"box3D",baseCpu:5.4,baseMem:290,disk:"0.2 MB/s",network:"0.0 KB/s",status:"Rendering cardboard",description:"Pre-renders six-sided cardboard topologies in system cache."},{name:"ButtonMonitor.exe",appId:"button",baseCpu:.9,baseMem:68,disk:"0.0 MB/s",network:"0.0 KB/s",status:"Monitoring clicks",description:"Keeps count of clicks expended toward achieving nothing."},{name:"UselessBrowserService.exe",appId:"browser",baseCpu:3.6,baseMem:460,disk:"2.4 MB/s",network:"28.1 KB/s",status:"Hoarding cache",description:"Maintains offline search indexes for useless queries."},{name:"AchievementService.exe",appId:"achievements",baseCpu:.8,baseMem:52,disk:"0.0 MB/s",network:"0.0 KB/s",status:"Tracking milestones",description:"Evaluates existential criteria for unlocking useless achievements."},{name:"SecurityShield.exe",appId:"securityCenter",baseCpu:1.5,baseMem:180,disk:"0.8 MB/s",network:"0.0 KB/s",status:"Guarding inactivity",description:"Scans for productivity hazards such as productivity.exe."},{name:"PermissionDaemon.exe",appId:"settings",baseCpu:.4,baseMem:38,disk:"0.0 MB/s",network:"0.0 KB/s",status:"Verifying non-access",description:"Ensures application permissions are denied with extreme politeness."}];class ie{constructor(){this.processes=new Map,this.listeners=new Set,this.nextPid=4100,this.initProcesses(),this.startTelemetryLoop()}initProcesses(){se.forEach(e=>{const t=this.nextPid++;this.processes.set(t,{pid:t,name:e.name,appId:e.appId,baseCpu:e.baseCpu,currentCpu:e.baseCpu,baseMem:e.baseMem,currentMem:e.baseMem,disk:e.disk,network:e.network,status:e.status,description:e.description,isCustom:!1})})}startTelemetryLoop(){setInterval(()=>{this.processes.forEach(e=>{const t=(Math.random()-.48)*.8;e.currentCpu=Math.max(0,+(e.baseCpu+t).toFixed(1));const s=Math.floor((Math.random()-.5)*8);e.currentMem=Math.max(12,e.baseMem+s)}),this.notify()},1500)}getProcesses(){return Array.from(this.processes.values())}getProcess(e){return this.processes.get(Number(e))}registerProcess(e){const t=this.nextPid++,s={pid:t,name:e.name||`CustomProcess_${t}.exe`,appId:e.appId||null,baseCpu:e.cpu||1,currentCpu:e.cpu||1,baseMem:e.mem||64,currentMem:e.mem||64,disk:e.disk||"0.0 MB/s",network:e.network||"0.0 KB/s",status:e.status||"Running",description:e.description||"Registered user process.",isCustom:!0};return this.processes.set(t,s),this.notify(),t}terminateProcess(e){e=Number(e);const t=this.processes.get(e);return t?(this.processes.delete(e),this.notify(),t.name==="NothingService.exe"&&setTimeout(()=>{const s=this.nextPid++;this.processes.set(s,{...t,pid:s,status:"Running"}),A.notify({title:"Service Restored",message:"NothingService.exe has restarted itself.",app:"System Monitor",icon:"restart",duration:5e3}),this.notify()},3500),!0):!1}restartProcess(e){e=Number(e);const t=this.processes.get(e);return t?(t.status="Restarting...",this.notify(),setTimeout(()=>{t.status="Running",this.notify(),A.notify({title:"Process Restarted",message:`${t.name} (PID: ${t.pid}) restarted successfully.`,app:"System Monitor",icon:"refresh",duration:4e3})},1e3),!0):!1}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>{try{e(this.getProcesses())}catch{}})}}const P=new ie;class ne{constructor(){this.storageKey="nullos_uselessness_engine_v2",this.listeners=new Set,this.state=this.load(),this.sessionStartTime=Date.now(),this.startTimer()}load(){const e={secondsWasted:52054,appsInstalled:7,appsOpened:42,appsUninstalled:1,updatesCompleted:3,browserSearches:9,calculatorCalculations:14,buttonClicks:218,filesCreated:4,filesDeleted:2,securityScans:3,reviewsSubmitted:2,ratingsSubmitted:4,easterEggsDiscovered:1,achievementsUnlocked:2,customRegisteredApps:0};try{const t=localStorage.getItem(this.storageKey);if(t)return{...e,...JSON.parse(t)}}catch{}return e}save(){try{localStorage.setItem(this.storageKey,JSON.stringify(this.state))}catch{}}startTimer(){setInterval(()=>{this.state.secondsWasted+=1,this.state.secondsWasted%15===0&&this.save(),!(typeof document<"u"&&document.hidden)&&this.notify()},1e3),typeof document<"u"&&document.addEventListener("visibilitychange",()=>{document.hidden||this.notify()})}increment(e,t=1){this.state[e]!==void 0&&(this.state[e]+=t,this.save(),this.notify())}recordAppOpen(e){this.increment("appsOpened",1)}recordAppInstall(e){this.increment("appsInstalled",1)}recordAppUninstall(e){this.increment("appsUninstalled",1)}recordSearch(){this.increment("browserSearches",1)}recordCalculation(){this.increment("calculatorCalculations",1)}recordClick(){this.increment("buttonClicks",1)}recordSecurityScan(){this.increment("securityScans",1)}recordReview(){this.increment("reviewsSubmitted",1)}recordRating(){this.increment("ratingsSubmitted",1)}recordEasterEgg(){this.increment("easterEggsDiscovered",1)}recordAchievement(){this.increment("achievementsUnlocked",1)}recordUpdate(){this.increment("updatesCompleted",1)}getScore(){const e=this.state.appsOpened+this.state.browserSearches*2+this.state.calculatorCalculations+this.state.buttonClicks*.1+this.state.securityScans*5+this.state.easterEggsDiscovered*10+this.state.achievementsUnlocked*8;return(99.7+Math.min(.29,e/(e+150)*.29)).toFixed(2)}getProductivity(){return(100-parseFloat(this.getScore())).toFixed(2)}getTimeWastedFormatted(){const e=this.state.secondsWasted,t=Math.floor(e/3600),s=Math.floor(e%3600/60);return`${t}h ${s}m`}getStats(){return{uselessnessScore:`${this.getScore()}%`,productivityScore:`${this.getProductivity()}%`,timeWasted:this.getTimeWastedFormatted(),appsInstalled:this.state.appsInstalled,appsOpened:this.state.appsOpened,appsUninstalled:this.state.appsUninstalled,updatesCompleted:this.state.updatesCompleted,browserSearches:this.state.browserSearches,calculatorCalculations:this.state.calculatorCalculations,buttonClicks:this.state.buttonClicks,securityScans:this.state.securityScans,reviewsSubmitted:this.state.reviewsSubmitted,easterEggsDiscovered:this.state.easterEggsDiscovered,achievementsUnlocked:this.state.achievementsUnlocked}}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>{try{e(this.getStats())}catch{}})}}const b=new ne,H=[{id:"rock-collector",name:"Rock Collector",description:"Open Rock Simulator 10 times.",category:"Tenacity",target:10,rarity:"Common",icon:"🪨"},{id:"button-masher",name:"Button Masher",description:"Click the Button app 1,000 times.",category:"Tenacity",target:1e3,rarity:"Rare",icon:"🔘"},{id:"professional-procrastinator",name:"Professional Procrastinator",description:"Waste 30 minutes inside Useless OS.",category:"Inefficiency",target:30,rarity:"Common",icon:"⏳"},{id:"box-enthusiast",name:"Box Enthusiast",description:"Inspect the box 50 times.",category:"Exploration",target:50,rarity:"Rare",icon:"📦"},{id:"nothing-cleaner",name:"Nothing Cleaner",description:"Empty an already-empty recycle bin.",category:"Inefficiency",target:1,rarity:"Common",icon:"🗑️"},{id:"storage-destroyer",name:"Storage Destroyer",description:"Install 10 useless applications.",category:"Exploration",target:10,rarity:"Rare",icon:"💾"},{id:"update-survivor",name:"Update Survivor",description:"Complete a useless OS update.",category:"System",target:1,rarity:"Common",icon:"🔄"},{id:"security-expert",name:"Security Expert",description:"Run Security Center scans 10 times.",category:"Security",target:10,rarity:"Rare",icon:"🛡️"},{id:"browser-user",name:"Browser User",description:"Perform 25 useless searches.",category:"Exploration",target:25,rarity:"Rare",icon:"🌐"},{id:"konami-code",name:"Secret Explorer",description:"Input the legendary Konami code.",category:"Secret",target:1,rarity:"Ultra Rare",icon:"🎮"},{id:"certified-critic",name:"Certified Critic",description:"Submit an insightful review on the App Store.",category:"Community",target:1,rarity:"Common",icon:"⭐"},{id:"permission-denier",name:"Privacy Maximalist",description:"Deny an application permission request.",category:"Security",target:1,rarity:"Common",icon:"🔒"},{id:"productivity-hunter",name:"Productivity Eliminator",description:"Remove productivity.exe via Security Center.",category:"Security",target:1,rarity:"Rare",icon:"⚠️"},{id:"master-of-nothing",name:"Master of Nothing",description:"Unlock every achievement in Useless OS.",category:"Legendary",target:13,rarity:"Legendary",icon:"👑"}];class ae{constructor(){this.storageKey="nullos_achievements_v2",this.listeners=new Set,this.state=this.load(),this.checkTimeBasedAchievements()}load(){const e={};H.forEach(t=>{e[t.id]={unlocked:!1,progress:0,unlockedAt:null}}),e["professional-procrastinator"]={unlocked:!0,progress:30,unlockedAt:"11-09-2026 18:24"},e["nothing-cleaner"]={unlocked:!0,progress:1,unlockedAt:"11-09-2026 19:05"};try{const t=localStorage.getItem(this.storageKey);if(t)return{...e,...JSON.parse(t)}}catch{}return e}save(){try{localStorage.setItem(this.storageKey,JSON.stringify(this.state))}catch{}}checkTimeBasedAchievements(){setInterval(()=>{const e=Math.floor(b.state.secondsWasted/60);this.setProgress("professional-procrastinator",e)},1e4)}getAchievements(){return H.map(e=>{const t=this.state[e.id]||{unlocked:!1,progress:0,unlockedAt:null};return{...e,unlocked:t.unlocked,progress:Math.min(t.progress,e.target),unlockedAt:t.unlockedAt}})}setProgress(e,t){const s=H.find(n=>n.id===e);if(!s)return;this.state[e]||(this.state[e]={unlocked:!1,progress:0,unlockedAt:null});const i=this.state[e];i.unlocked||(i.progress=t,i.progress>=s.target?this.unlock(e):(this.save(),this.notify()))}incrementProgress(e,t=1){if(!H.find(n=>n.id===e))return;const i=this.state[e]||{unlocked:!1,progress:0};i.unlocked||this.setProgress(e,(i.progress||0)+t)}unlock(e){const t=H.find(n=>n.id===e);if(!t)return;const s=this.state[e]||{unlocked:!1,progress:0,unlockedAt:null};if(s.unlocked)return;s.unlocked=!0,s.progress=t.target;const i=new Date;s.unlockedAt=`${String(i.getDate()).padStart(2,"0")}-${String(i.getMonth()+1).padStart(2,"0")}-${i.getFullYear()} ${String(i.getHours()).padStart(2,"0")}:${String(i.getMinutes()).padStart(2,"0")}`,this.save(),b.recordAchievement(),l.playNotification(),A.notify({title:"Achievement Unlocked",message:`${t.name}: ${t.description}`,app:"Achievements",icon:"trophy",duration:7e3}),this.notify(),this.checkMasterOfNothing()}checkMasterOfNothing(){var i;if((i=this.state["master-of-nothing"])!=null&&i.unlocked)return;const e=H.filter(n=>n.id!=="master-of-nothing"),t=e.every(n=>{var a;return(a=this.state[n.id])==null?void 0:a.unlocked}),s=e.filter(n=>{var a;return(a=this.state[n.id])==null?void 0:a.unlocked}).length;this.setProgress("master-of-nothing",s),t&&this.unlock("master-of-nothing")}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>{try{e(this.getAchievements())}catch{}})}}const k=new ae;class re{constructor(){this.container=null}init(e){this.container=e}show(e){const{title:t="Useless OS",message:s="An unexpected condition has occurred.",subtext:i="Reason: Nothing to perform.",type:n="warning",buttons:a=[{text:"OK",primary:!0}]}=e;return n==="error"||n==="warning"?l.playError():l.playNotification(),new Promise(r=>{this.container.innerHTML="",this.container.classList.remove("hidden");const c=o[n]||o.warning,d=document.createElement("div");d.className="system-dialog",d.innerHTML=`
        <div class="dialog-header">
          <span>${t}</span>
          <button class="window-btn btn-close-dialog" style="width:24px;height:24px;">${o.close}</button>
        </div>
        <div class="dialog-content">
          <div class="dialog-icon">${c}</div>
          <div class="dialog-message-group">
            <div class="dialog-title">${s}</div>
            <div class="dialog-desc">${i}</div>
          </div>
        </div>
        <div class="dialog-actions"></div>
      `;const p=d.querySelector(".dialog-actions");a.forEach((f,y)=>{const v=document.createElement("button");v.className=`dialog-btn ${f.primary?"primary":""}`,v.textContent=f.text,v.addEventListener("click",()=>{l.playClick(),this.close(),r(f.text)}),p.appendChild(v)}),d.querySelector(".btn-close-dialog").addEventListener("click",()=>{l.playClick(),this.close(),r(null)}),this.container.appendChild(d)})}close(){this.container&&(this.container.classList.add("hidden"),this.container.innerHTML="")}}const g=new re,j=[{id:"microphone",name:"Microphone",icon:"mic",desc:"Allow app to simulate audio input."},{id:"camera",name:"Camera",icon:"camera",desc:"Allow app to contemplate your physical appearance."},{id:"location",name:"Location",icon:"location",desc:"Allow app to assume you are on planet Earth."},{id:"files",name:"File System",icon:"fileText",desc:"Allow app to read and write useless data."},{id:"notifications",name:"Notifications",icon:"bell",desc:"Allow app to interrupt your procrastination."},{id:"clipboard",name:"Clipboard",icon:"clipboard",desc:"Allow app to observe copied void."}],oe={microphone:"Microphone access denied. Fortunately, we weren't planning to record anything anyway.",camera:"Camera access blocked. The system will continue to imagine what you look like.",location:"Location access denied. The system assumes you are somewhere on Earth, probably sitting down.",files:"File system access denied. Your files remain blissfully unexamined.",notifications:"Notification access denied. You will remain undisturbed by nothing.",clipboard:"Clipboard access denied. The clipboard was full of nothing anyway."};class ce{constructor(){this.storageKey="nullos_app_permissions_v2",this.listeners=new Set,this.permissions=this.load()}load(){const e={rockSimulator:{files:"allow",notifications:"allow",microphone:"deny"},airManager:{location:"allow",notifications:"allow"},browser:{network:"allow",location:"ask",clipboard:"allow"},voiceRecorder:{microphone:"ask",files:"ask"}};try{const t=localStorage.getItem(this.storageKey);if(t)return{...e,...JSON.parse(t)}}catch{}return e}save(){try{localStorage.setItem(this.storageKey,JSON.stringify(this.permissions))}catch{}}getPermission(e,t){return this.permissions[e]&&this.permissions[e][t]||"ask"}setPermission(e,t,s){this.permissions[e]||(this.permissions[e]={}),this.permissions[e][t]=s,this.save(),this.notify()}getAllPermissions(){return this.permissions}async requestPermission(e,t,s){const i=this.getPermission(e,s);if(i==="allow")return!0;if(i==="deny")return!1;const n=j.find(r=>r.id===s)||{name:s},a=await g.show({title:"Application Permission Request",message:`${t} is requesting access to your ${n.name}.`,subtext:`Allowing access will enable ${t} to perform simulated operations with authentic-looking non-results.`,type:"info",buttons:[{text:"Allow",primary:!0},{text:"Allow Once"},{text:"Deny"}]});return a==="Allow"?(this.setPermission(e,s,"allow"),!0):a==="Allow Once"?!0:(this.setPermission(e,s,"deny"),k.unlock("permission-denier"),!1)}getDenialMessage(e){return oe[e]||"Access denied by system security policy."}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>{try{e(this.permissions)}catch{}})}}const D=new ce,Y={rockSimulator:[{id:"rev-r1",user:"Marcus Thorne",stars:5,date:"02-09-2026",title:"Flawless rock physics",text:"The rock has not moved once. Excellent stability. Left it open over the weekend and found it in the exact same state.",helpful:84},{id:"rev-r2",user:"Sarah M.",stars:5,date:"28-08-2026",title:"Saved my afternoon",text:"I stared at it for 20 minutes instead of doing my quarterly taxes. Peak software engineering.",helpful:52},{id:"rev-r3",user:"David K.",stars:4,date:"15-08-2026",title:"Good rock",text:"Waste of 742 MB. Would recommend.",helpful:31}],airManager:[{id:"rev-a1",user:"Taylor N.",stars:5,date:"01-09-2026",title:"Managed my air perfectly",text:"Managed my room air in 2 seconds. Still breathing. No measurable change detected.",helpful:42},{id:"rev-a2",user:"Julian Vance",stars:4,date:"14-08-2026",title:"I installed this because I thought it would be useful.",text:"It is not useful at all. 5 stars.",helpful:19}],waitingApp:[{id:"rev-w1",user:"Morgan W.",stars:5,date:"04-09-2026",title:"Waited 3 hours",text:"Waited 3 hours. Best 3 hours wasted. Nothing arrived.",helpful:97},{id:"rev-w2",user:"Sam R.",stars:5,date:"22-08-2026",title:"True to advertising",text:"Nothing happened. Exactly as advertised.",helpful:63}],mouseTester:[{id:"rev-m1",user:"Elena R.",stars:5,date:"05-09-2026",title:"Confirmed existence",text:"Confirmed: my mouse does indeed exist. Will test again in 5 minutes.",helpful:35}]};class le{constructor(){this.storageKey="nullos_app_reviews_v2",this.userReviewsKey="nullos_user_own_reviews_v2",this.helpfulVotesKey="nullos_helpful_votes_v2",this.listeners=new Set,this.reviews=this.loadReviews(),this.userReviews=this.loadUserReviews(),this.helpfulVotes=this.loadHelpfulVotes()}loadReviews(){try{const e=localStorage.getItem(this.storageKey);if(e)return{...Y,...JSON.parse(e)}}catch{}return{...Y}}saveReviews(){try{localStorage.setItem(this.storageKey,JSON.stringify(this.reviews))}catch{}}loadUserReviews(){try{const e=localStorage.getItem(this.userReviewsKey);if(e)return JSON.parse(e)}catch{}return{}}saveUserReviews(){try{localStorage.setItem(this.userReviewsKey,JSON.stringify(this.userReviews))}catch{}}loadHelpfulVotes(){try{const e=localStorage.getItem(this.helpfulVotesKey);if(e)return new Set(JSON.parse(e))}catch{}return new Set}saveHelpfulVotes(){try{localStorage.setItem(this.helpfulVotesKey,JSON.stringify([...this.helpfulVotes]))}catch{}}getReviews(e,t="helpful"){const s=[...this.reviews[e]||[]];return t==="helpful"?s.sort((i,n)=>(n.helpful||0)-(i.helpful||0)):t==="newest"?s.sort((i,n)=>n.id.localeCompare(i.id)):t==="highest"?s.sort((i,n)=>n.stars-i.stars):t==="lowest"&&s.sort((i,n)=>i.stars-n.stars),s}getAppStats(e,t=4.8){const s=this.reviews[e]||[];if(s.length===0)return{rating:t,count:12};const i=s.reduce((a,r)=>a+r.stars,0);return{rating:Number((i/s.length).toFixed(1)),count:s.length}}getUserReview(e){return this.userReviews[e]||null}addOrUpdateUserReview(e,{stars:t,title:s,text:i}){const n=new Date,a=`${String(n.getDate()).padStart(2,"0")}-${String(n.getMonth()+1).padStart(2,"0")}-${n.getFullYear()}`;this.reviews[e]||(this.reviews[e]=[]);const r=this.userReviews[e];if(r){const c=this.reviews[e].findIndex(d=>d.id===r.id);c!==-1&&(this.reviews[e][c]={...this.reviews[e][c],stars:t,title:s,text:i,date:a}),this.userReviews[e]=this.reviews[e][c]}else{const c={id:`user-${Date.now()}`,user:"Aizen (You)",stars:t,date:a,title:s||"Honest thoughts",text:i,helpful:0,isOwn:!0};this.reviews[e].unshift(c),this.userReviews[e]=c,b.recordReview(),k.unlock("certified-critic")}this.saveReviews(),this.saveUserReviews(),this.notify()}deleteUserReview(e){const t=this.userReviews[e];t&&(this.reviews[e]&&(this.reviews[e]=this.reviews[e].filter(s=>s.id!==t.id)),delete this.userReviews[e],this.saveReviews(),this.saveUserReviews(),this.notify())}voteHelpful(e,t){if(this.helpfulVotes.has(t))return!1;const s=this.reviews[e];if(!s)return!1;const i=s.find(n=>n.id===t);return i?(i.helpful=(i.helpful||0)+1,this.helpfulVotes.add(t),this.saveReviews(),this.saveHelpfulVotes(),this.notify(),!0):!1}hasVotedHelpful(e){return this.helpfulVotes.has(e)}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>{try{e()}catch{}})}}const z=new le;class de{constructor(){this.customApps=new Map,this.listeners=new Set,this.settingsStorageKey="nullos_user_custom_settings_v2",this.appLauncherCallback=null}setLauncher(e){this.appLauncherCallback=e}registerApp(e){if(!e||!e.id||!e.name)throw new Error("registerApp requires an object with at least { id, name }");const t={id:e.id,name:e.name,tagline:e.tagline||e.description||"A certified useless application.",description:e.description||"No description provided because none is needed.",category:e.category||"Utilities",version:e.version||"1.0.0",size:e.size||"128 MB",rating:5,downloads:"10K",developer:e.developer||"Community Contributor",icon:e.icon||"📦",uselessness:e.uselessness!==void 0?e.uselessness:99,permissions:e.permissions||[],features:e.features||["Certified uselessness","Zero productive side-effects"],reviews:e.reviews||[{user:"Tester",stars:5,text:"Installs cleanly and accomplishes nothing."}],launch:e.launch||null,isCustom:!0};return this.customApps.set(t.id,t),b.increment("customRegisteredApps",1),this.notify(),A.notify({title:"App Registered",message:`${t.name} (v${t.version}) registered in catalog.`,app:"Developer API",icon:"code",duration:4e3}),t}getCustomApps(){return Array.from(this.customApps.values())}getCustomApp(e){return this.customApps.get(e)}launchApp(e,t=null){this.appLauncherCallback&&(this.appLauncherCallback(e,t),b.recordAppOpen(e))}closeApp(e){m.closeWindow(e)}notify(e){A.notify(e)}async requestPermission(e,t){const s=this.customApps.get(e)||{name:e};return await D.requestPermission(e,s.name,t)}unlockAchievement(e){k.unlock(e)}registerProcess(e){return P.registerProcess(e)}getSetting(e,t=null){try{const s=localStorage.getItem(this.settingsStorageKey);if(s){const i=JSON.parse(s);return i[e]!==void 0?i[e]:t}}catch{}return t}setSetting(e,t){try{const s=localStorage.getItem(this.settingsStorageKey),i=s?JSON.parse(s):{};i[e]=t,localStorage.setItem(this.settingsStorageKey,JSON.stringify(i))}catch{}}getUselessnessScore(){return b.getScore()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>{try{e()}catch{}})}}const U=new de;typeof window<"u"&&(window.UselessOS=U);const T=[{id:"rockSimulator",name:"Rock Simulator",tagline:"Experience the revolutionary technology of looking at a rock.",description:"Experience the future of rock observation. Advanced rendering engine delivers a completely motionless, 100% authentic stone. No updates needed, no bugs detected, no features planned.",category:"Entertainment",version:"1.0.0",updateVersion:"1.0.1",hasUpdate:!0,updateNotes:`• Improved rock stability
• Fixed issue where rock briefly pondered moving
• Added nothing`,size:"742 MB",rating:4.8,downloads:"1.2M",developer:"Useless Labs",icon:"🪨",isFeatured:!0,isTrending:!0,releaseDate:"Sep 2026",features:["Advanced rock rendering","Realistic rock physics (zero movement)","Professional rock observation tools","Zero productivity guaranteed"],reviews:[{user:"Sarah M.",stars:5,text:"Rock was exactly where I left it. 10/10."},{user:"David K.",stars:5,text:"I stared at it for 20 minutes instead of filing my taxes."},{user:"Alex P.",stars:4,text:"Needs more rocks, but good rock overall."}]},{id:"mouseTester",name:"Mouse Tester",tagline:"Determine whether your mouse actually exists.",description:"A comprehensive hardware diagnostic suite designed to verify the physical presence of your cursor input device. Tests left clicks, right clicks, scroll wheels, and existential validity.",category:"Utilities",version:"2.1.0",size:"318 MB",rating:4.9,downloads:"843K",developer:"Null Diagnostic Systems",icon:"🖱️",isFeatured:!1,isTrending:!0,releaseDate:"Aug 2026",features:["Hardware click detection","Continuous existence verification","Instant non-conclusive reporting","High-precision test again functionality"],reviews:[{user:"Elena R.",stars:5,text:"Confirmed: my mouse does indeed exist."},{user:"Mark T.",stars:5,text:"Tested 400 times. Still exists."}]},{id:"personSimulator",name:"Person Simulator",tagline:"Simulate a person doing absolutely nothing.",description:"Observe state-of-the-art human simulation technology. Watch an individual stand in place, contemplating nothing, accomplishing zero tasks, and remaining remarkably unbothered.",category:"Entertainment",version:"1.4.2",size:"1.4 GB",rating:4.7,downloads:"521K",developer:"Existential Soft",icon:"🧍",isFeatured:!1,isTrending:!0,releaseDate:"Sep 2026",features:["Authentic human posture simulation","One-step movement technology","Automatic return to doing nothing","Zero work accomplishment rate"],reviews:[{user:"Jordan B.",stars:5,text:"The person stood very realistically."},{user:"Chris L.",stars:5,text:"I feel deeply represented by this software."}]},{id:"airManager",name:"Air Manager",tagline:"Professional air management software.",description:"Next-generation atmospheric management utility. Automatically detects surrounding air, calculates probable quality, confirms abundance, and marks 100% of air as managed.",category:"Utilities",version:"3.0.0",size:"2.1 GB",rating:4.6,downloads:"312K",developer:"AeroZero Corp",icon:"💨",isFeatured:!1,isTrending:!1,releaseDate:"Jul 2026",features:["Air presence confirmation","Quality estimation (probably fine)","One-click full atmospheric management","Zero detectable air changes"],reviews:[{user:"Taylor N.",stars:5,text:"Managed my room air in 2 seconds. Still breathing."}]},{id:"waitingApp",name:"Waiting App",tagline:"The world's most advanced waiting simulator.",description:"Why hurry through life when you can wait professionally? Features high-precision second counters, milestone celebrations for waiting, and zero eventual outcomes.",category:"Utilities",version:"1.0.0",size:"4.7 GB",rating:4.9,downloads:"2.8M",developer:"Patience Dynamics",icon:"⏳",isFeatured:!0,isTrending:!1,releaseDate:"Jun 2026",features:["Real-time second counter","10-second existential congratulation","Continue waiting mode","Zero progress acceleration"],reviews:[{user:"Morgan W.",stars:5,text:"Waited 3 hours. Best 3 hours wasted."},{user:"Sam R.",stars:5,text:"Nothing happened. Exactly as advertised."}]},{id:"numberViewer",name:"Number Viewer",tagline:"View numbers professionally.",description:"An enterprise-grade numerical observation interface. View 42, click for 43, generate massive random integers, and ponder mathematical infinity without solving equations.",category:"Education",version:"1.1.0",size:"512 MB",rating:4.5,downloads:"198K",developer:"Integer Works",icon:"🔢",isFeatured:!1,isTrending:!0,releaseDate:"May 2026",features:["High-definition digit rendering","Sequential integer advancement","Cryptographically useless RNG","Certified number viewing"],reviews:[{user:"Lucas G.",stars:5,text:"I saw 42, then 43. Peak software."}]},{id:"box",name:"Box",tagline:"A sophisticated box viewing application.",description:"A 3D box inspection suite. Inspect dimensions, rotate edges, confirm condition, and come to the undeniable conclusion that it is, indeed, a box.",category:"Utilities",version:"1.0.2",size:"890 MB",rating:4.7,downloads:"442K",developer:"Isometric Void",icon:"📦",isFeatured:!1,isTrending:!1,releaseDate:"Sep 2026",features:["Box condition inspection","Subtle rotation controls","Certified 100% box geometry","Zero contents inside"],reviews:[{user:"Rachel V.",stars:5,text:"It is a box. What more could one ask for?"}]},{id:"button",name:"Button",tagline:"A highly optimized button.",description:"A masterpiece of single-button software engineering. Every press increments a counter with flawless haptic feedback. Reach 100 clicks to unlock existential questioning.",category:"Entertainment",version:"2.1.0",size:"1.2 GB",rating:5,downloads:"4.1M",developer:"Click Technologies",icon:"🔘",isFeatured:!0,isTrending:!0,releaseDate:"Jan 2026",features:["Hyper-responsive button mechanics","Real-time click telemetry","Centennial existential milestone","Button Master achievement trophy"],reviews:[{user:"Daniel H.",stars:5,text:"Clicked 500 times. My boss thought I was programming."},{user:"Olivia C.",stars:5,text:"The button is very high quality."}]},{id:"plantMonitor",name:"Plant Monitor",tagline:"Monitor your plant 24/7.",description:"Keep continuous surveillance over household vegetation. Real-time growth tracking (0.00001%), water level guesses, and regular confirmations that your plant is still standing.",category:"Utilities",version:"1.0.5",size:"3.8 GB",rating:4.6,downloads:"210K",developer:"Botanical Null",icon:"🌱",isFeatured:!1,isTrending:!1,releaseDate:"Aug 2026",features:["Live plant alive status","Microscopic growth telemetry","Water level optimism","Permanent plant presence assurance"],reviews:[{user:"Chloe B.",stars:5,text:"Checked on my plant. It was still there."}]},{id:"sleepSimulator",name:"Sleep Simulator",tagline:"Experience sleeping without actually sleeping.",description:"Simulate REM sleep cycles directly in an active desktop window. Starts a realistic sleep timer while keeping you fully conscious and bathed in blue screen light.",category:"Entertainment",version:"2.0.0",size:"2.6 GB",rating:4.8,downloads:"670K",developer:"SomnoZero",icon:"💤",isFeatured:!1,isTrending:!1,releaseDate:"Aug 2026",features:["Simulated REM phase timer","Wakefulness verification","Zero actual rest achieved","Sleep stats export to void"],reviews:[{user:"Brian M.",stars:5,text:"Simulated 8 hours of sleep in 4 seconds. Still tired."}]},{id:"uselessAI",name:"UselessAI",tagline:"The smartest AI that doesn't know anything.",description:"A 500-billion parameter neural network meticulously trained on zero useful information. Ask it complex coding questions, life advice, or trivia to receive confident nonsense.",category:"Productivity",version:"4.0.0",size:"8.4 GB",rating:4.9,downloads:"3.2M",developer:"DeepVoid AI",icon:"🤖",isFeatured:!0,isTrending:!0,releaseDate:"Sep 2026",features:["Natural language non-answers","High-confidence unhelpful explanations","Instant shrug generation","Zero hallucinations because nothing is claimed"],reviews:[{user:"Dev Guru",stars:5,text:"Asked it to debug my code. It told me to take a walk. Fixed my issue."}]},{id:"uselessAntivirus",name:"Useless Antivirus",tagline:"Next-gen cybersecurity that finds zero threats.",description:"Advanced heuristic threat neutralization suite. Scans 500,000 files in under 2 seconds and confidently reports 0 threats and 0 productive programs.",category:"System",version:"5.2.1",size:"3.4 GB",rating:4.9,downloads:"1.8M",developer:"NullDefend Security",icon:"🛡️",isFeatured:!1,isTrending:!1,releaseDate:"Jul 2026",features:["Instant high-speed heuristic scan","100% false safety guarantee","Real-time zero-threat monitoring","Quarantine for productive habits"],reviews:[{user:"Cyber Sec",stars:5,text:"Scanned my machine. Found 0 threats, 0 motivation."}]},{id:"systemCleaner",name:"System Cleaner",tagline:"Deep cleans your system without deleting anything.",description:"Free up imaginary gigabytes. Scans temporary files, simulates disk optimization, and presents a shiny clean report with zero actual file alterations.",category:"System",version:"2.3.0",size:"1.8 GB",rating:4.7,downloads:"920K",developer:"CleanZero Labs",icon:"🧹",isFeatured:!1,isTrending:!1,releaseDate:"Jun 2026",features:["Deep registry placebo sweep","Temp file emotional cleanse","Visual disk sparkle effect","Zero bytes permanently removed"],reviews:[{user:"Techie99",stars:5,text:"Cleaned 12 GB of imaginary junk. Felt lighter."}]},{id:"performanceBooster",name:"Performance Booster",tagline:"Rocket fuel for your already idle system.",description:"Overclocks your imagination. One click accelerates system performance metrics to 1000% without altering clock frequencies or application speeds.",category:"System",version:"3.1.0",size:"5.1 GB",rating:4.4,downloads:"1.4M",developer:"TurboVoid",icon:"🚀",isFeatured:!1,isTrending:!1,releaseDate:"Aug 2026",features:["1000% metric acceleration","Rocket launch animation","Zero thermal throttle risk","Believable placebo boost"],reviews:[{user:"GamerX",stars:5,text:"Boosted performance by 1000%. Notepad opens at same speed."}]},{id:"uselessCalendar",name:"Useless Calendar",tagline:"Plan days you will inevitably spend in bed.",description:'An executive calendar application populated with events like "Stare at wall", "Cancel plans", and "Prolonged sigh".',category:"Productivity",version:"1.0.0",size:"890 MB",rating:4.3,downloads:"120K",developer:"Null Productivity",icon:"📅",isFeatured:!1,isTrending:!1,releaseDate:"Jul 2026",features:["Pre-populated unmade plans","Automated cancellation reminders","Conflict-free void schedules","Zero meetings guaranteed"],reviews:[{user:"Busy Bee",stars:5,text:"Finally a calendar that understands my schedule."}]},{id:"loadingSimulator",name:"Loading Simulator",tagline:"The timeless joy of watching a bar reach 99%.",description:"Relive the anticipation of waiting for software to load. Smooth progress bar climbs swiftly to 99% and remains suspended there for all eternity.",category:"Entertainment",version:"1.0.0",size:"6.2 GB",rating:4.8,downloads:"1.1M",developer:"AlmostDone Games",icon:"🖥️",isFeatured:!1,isTrending:!0,releaseDate:"Aug 2026",features:["Pristine 99% loading experience","Suspenseful spinning loader","Endless anticipation engine","Zero completion disappointment"],reviews:[{user:"Patient One",stars:5,text:"It has been on 99% for 4 days. Incredible immersion."}]},{id:"windowStare",name:"Window Stare",tagline:"Look out an imaginary window into digital rain.",description:"A quiet, contemplative desktop window displaying procedural rain and minimalist geometry. No goals, no points, no achievements.",category:"Productivity",version:"1.2.0",size:"2.3 GB",rating:4.6,downloads:"390K",developer:"Ambient Zero",icon:"🪟",isFeatured:!1,isTrending:!1,releaseDate:"Jun 2026",features:["Procedural rain drops","Subtle melancholic tone","Focus-free atmosphere","Zero productivity requirements"],reviews:[{user:"Rain Lover",stars:5,text:"Stared through the window for an hour. Very therapeutic."}]},{id:"productivityBlocker",name:"Productivity Blocker",tagline:"Actively prevents accidental bouts of work.",description:"A proactive shield against dangerous productivity. Detects if you open a spreadsheet or start writing code and intervenes with calming reminders to do nothing.",category:"Productivity",version:"2.0.0",size:"7.1 GB",rating:5,downloads:"2.4M",developer:"LazySafe Systems",icon:"🛑",isFeatured:!1,isTrending:!0,releaseDate:"Sep 2026",features:["Proactive ambition interception","Emergency procrastination alert","Work ethic inhibitor","100% idle preservation"],reviews:[{user:"Procrastinator Pro",stars:5,text:"Saved me from finishing my work on time."}]},{id:"wifiAnalyzer",name:"Wi-Fi Analyzer",tagline:"Analyze signals traveling through empty air.",description:"Comprehensive radio frequency inspection utility. Analyzes signal strength of Nothing_5G and certifies packet transmission to the digital void.",category:"System",version:"1.1.0",size:"410 MB",rating:4.5,downloads:"510K",developer:"AeroZero Corp",icon:"📡",isFeatured:!1,isTrending:!1,releaseDate:"Jul 2026",features:["Signal strength graph","Packet void routing verification","Frequency optimization for idle devices","Zero speed improvement"],reviews:[{user:"Net Admin",stars:5,text:"Confirmed our Wi-Fi transmits 100% void packets."}]},{id:"batteryOptimizer",name:"Battery Optimizer",tagline:"Prolong your battery by closing this app.",description:"Patented electrochemical conservation engine. Optimizes battery consumption by calculating how much charge you would save if you powered off the computer.",category:"System",version:"1.0.0",size:"1.1 GB",rating:4.2,downloads:"780K",developer:"VoltVoid",icon:"🔋",isFeatured:!1,isTrending:!1,releaseDate:"Aug 2026",features:["Energy usage diagnostics","One-click battery drain simulator","Recommendation: Turn off machine","Zero watt conservation"],reviews:[{user:"Battery Saver",stars:5,text:"Told me to unplug my computer. 10/10 advice."}]}];class pe{constructor(){this.storageKey="nullos_installed_apps",this.ratingsKey="nullos_user_ratings",this.scoreKey="nullos_uselessness_score",this.installed=this.loadInstalled(),this.ratings=this.loadRatings(),this.score=this.loadScore(),this.listeners=new Set,U.subscribe(()=>{this.notify()})}loadInstalled(){try{const e=localStorage.getItem(this.storageKey);if(e)return new Set(JSON.parse(e))}catch{}return new Set(["rockSimulator","button"])}saveInstalled(){try{localStorage.setItem(this.storageKey,JSON.stringify([...this.installed]))}catch{}}loadRatings(){try{const e=localStorage.getItem(this.ratingsKey);if(e)return JSON.parse(e)}catch{}return{}}saveRatings(){try{localStorage.setItem(this.ratingsKey,JSON.stringify(this.ratings))}catch{}}loadScore(){try{const e=localStorage.getItem(this.scoreKey);if(e)return parseInt(e,10)}catch{}return 1420}saveScore(){try{localStorage.setItem(this.scoreKey,String(this.score))}catch{}}addScore(e){this.score+=e,this.saveScore(),this.notify()}isInstalled(e){return this.installed.has(e)}installApp(e){this.installed.add(e),this.saveInstalled(),this.addScore(250),b.recordAppInstall(e),k.setProgress("storage-destroyer",this.installed.size),this.notify()}uninstallApp(e){this.installed.delete(e),this.saveInstalled(),this.addScore(100),b.recordAppUninstall(e),this.notify()}rateApp(e,t){this.ratings[e]=t,this.saveRatings(),this.addScore(50),b.recordRating(),this.notify()}getUserRating(e){return this.ratings[e]||null}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}getRank(){return this.score>1e4?"Grand Master of Nothing":this.score>5e3?"Senior Idler":this.score>2500?"Certified Void Explorer":"Apprentice of Uselessness"}}const u=new pe;function O(){const h=U.getCustomApps(),e=new Map;return T.forEach(t=>e.set(t.id,t)),h.forEach(t=>e.set(t.id,t)),Array.from(e.values())}class he{constructor(){this.keyBuffer=[],this.konamiSequence=["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","b","a"],this.desktopClickCount=0,this.desktopClickTimer=null,this.discoveredEggs=new Set,this.storageKey="nullos_discovered_easter_eggs_v2",this.loadDiscovered(),this.initKeyboardListener()}loadDiscovered(){try{const e=localStorage.getItem(this.storageKey);e&&(this.discoveredEggs=new Set(JSON.parse(e)))}catch{}}saveDiscovered(){try{localStorage.setItem(this.storageKey,JSON.stringify([...this.discoveredEggs]))}catch{}}markDiscovered(e){this.discoveredEggs.has(e)||(this.discoveredEggs.add(e),this.saveDiscovered(),b.recordEasterEgg())}initKeyboardListener(){typeof window>"u"||window.addEventListener("keydown",e=>{var s;if(["INPUT","TEXTAREA"].includes((s=document.activeElement)==null?void 0:s.tagName))return;const t=e.key.toLowerCase();this.keyBuffer.push(t),this.keyBuffer.length>20&&this.keyBuffer.shift(),this.checkKonami()})}checkKonami(){const e=this.keyBuffer.slice(-this.konamiSequence.length);if(e.length<this.konamiSequence.length)return;this.konamiSequence.every((s,i)=>s===e[i])&&(this.keyBuffer=[],this.triggerKonamiCode())}triggerKonamiCode(){l.playNotification(),this.markDiscovered("konami-code"),k.unlock("konami-code"),g.show({title:"Kernel Notification",message:"Something has happened.",subtext:"The operating system acknowledges your input.",type:"info"}).then(()=>{setTimeout(()=>{g.show({title:"Kernel Verification",message:"Nothing has happened.",subtext:"Equilibrium has been successfully restored.",type:"check"})},800)})}recordDesktopClick(){if(this.desktopClickCount++,clearTimeout(this.desktopClickTimer),this.desktopClickCount>=20){this.desktopClickCount=0,this.markDiscovered("desktop-click-20"),g.show({title:"Desktop Assistant",message:"Are you looking for something?",subtext:"There is nothing beneath the wallpaper except more desktop.",type:"info"});return}this.desktopClickTimer=setTimeout(()=>{this.desktopClickCount=0},4e3)}recordRecycleBinEmpty(e){e&&(this.markDiscovered("empty-recycle-bin"),k.unlock("nothing-cleaner"),g.show({title:"Recycle Bin",message:"There was nothing to delete.",subtext:"The bin was already empty. Zero bytes of void have been vacuumed.",type:"info"}))}checkClockReminder(){const e=new Date,t=e.getHours();this.markDiscovered("clock-reminder"),t>=23||t<5?g.show({title:"Sleep Advisory",message:"You should probably go to sleep.",subtext:"Nothing inside Useless OS is urgent, nor will it become urgent tomorrow.",type:"info"}):g.show({title:"System Chronometer",message:`Current simulated time is ${String(t).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}.`,subtext:"Time continues to pass regardless of productivity.",type:"info"})}triggerCalculatorZeroDivide(){return this.markDiscovered("calculator-zero"),"Nice try."}}const K=new he;class ue{constructor(e,t){this.el=e,this.onComplete=t,this.isDone=!1,this.render(),this.startSequence()}render(){this.el.innerHTML=`
      <div class="boot-container">
        <div class="boot-logo-svg">
          ${o.osLogo}
        </div>
        <div class="boot-spinner-ring"></div>
        <div class="boot-status-text" id="boot-status">Initializing hardware...</div>
        <div class="boot-skip-hint">Press any key or click to skip startup</div>
      </div>
    `}startSequence(){const e=this.el.querySelector("#boot-status"),t=[{text:"Starting system services...",delay:600},{text:"Checking storage integrity...",delay:800},{text:"Loading desktop environment...",delay:800},{text:"Initializing user session...",delay:700},{text:"Starting useless background services...",delay:900}];let s=0;const i=()=>{if(!this.isDone)if(s<t.length){e.textContent=t[s].text;const a=t[s].delay;s++,setTimeout(i,a)}else this.finish()};setTimeout(i,400);const n=()=>{window.removeEventListener("keydown",n),window.removeEventListener("click",n),this.finish()};window.addEventListener("keydown",n),window.addEventListener("click",n)}finish(){this.isDone||(this.isDone=!0,this.el.classList.remove("active"),setTimeout(()=>{this.onComplete&&this.onComplete()},200))}}class ve{constructor(e,t){this.el=e,this.onUnlock=t,this.render(),this.bindEvents(),this.startClock()}render(){this.el.innerHTML=`
      <div class="lock-container">
        <div class="lock-clock-section">
          <div class="lock-time" id="lock-time">18:34</div>
          <div class="lock-date" id="lock-date">Friday, September 11</div>
        </div>

        <div class="lock-user-card">
          <div class="lock-avatar">
            ${o.user}
          </div>
          <div class="lock-username">Aizen</div>

          <form class="lock-password-form" id="lock-form">
            <div class="lock-input-group">
              <input type="password" class="lock-input" id="lock-pass-input" placeholder="Password" autocomplete="off" />
              <button type="submit" class="lock-submit-btn" title="Sign In">
                ${o.arrowRight}
              </button>
            </div>
            <div class="lock-hint-text">Enter any password (or leave empty; security is decorative)</div>
          </form>
        </div>

        <div class="lock-bottom-bar">
          <div class="lock-tray-icon" title="Connected: Nothing_5G">${o.wifi}</div>
          <div class="lock-tray-icon" title="Battery: 99%">${o.battery}</div>
          <div class="lock-tray-icon" id="lock-power-btn" title="Power">${o.power}</div>
        </div>
      </div>
    `}bindEvents(){const e=this.el.querySelector("#lock-form");this.el.querySelector("#lock-pass-input"),e.addEventListener("submit",s=>{s.preventDefault(),this.unlock()}),this.el.querySelector("#lock-power-btn").addEventListener("click",()=>{l.playError(),alert("Powering down is unavailable. Useless OS requires your undivided attention.")})}startClock(){const e=this.el.querySelector("#lock-time"),t=this.el.querySelector("#lock-date"),s=()=>{const i=new Date,n=String(i.getHours()).padStart(2,"0"),a=String(i.getMinutes()).padStart(2,"0");e&&(e.textContent=`${n}:${a}`);const r={weekday:"long",month:"long",day:"numeric"};t&&(t.textContent=i.toLocaleDateString(void 0,r))};s(),setInterval(s,1e3)}show(){this.el.classList.add("active");const e=this.el.querySelector("#lock-pass-input");e&&(e.value="",setTimeout(()=>e.focus(),100))}unlock(){l.playLogon(),this.el.classList.remove("active"),setTimeout(()=>{this.onUnlock&&this.onUnlock()},200)}}class me{constructor(e,t,s){this.el=e,this.appLauncher=t,this.powerActions=s,this.isOpen=!1,this.render(),this.bindEvents(),u.subscribe(()=>{this.refreshApps()})}render(){this.el.innerHTML=`
      <div class="start-search-box">
        <div class="start-search-input-wrap">
          ${o.search}
          <input type="text" class="start-search-input" placeholder="Type here to search apps, settings, or void..." />
        </div>
      </div>
      <div class="start-content">
        <div class="start-section">
          <div class="start-section-header">
            <span>Pinned</span>
            <span style="font-size:11px;color:var(--accent);cursor:pointer;" id="start-view-store">Get more in Store &gt;</span>
          </div>
          <div class="start-apps-grid" id="start-pinned-grid"></div>
        </div>

        <div class="start-section">
          <div class="start-section-header">
            <span>Recommended</span>
          </div>
          <div class="start-recent-list">
            <div class="start-recent-item" data-doc="passwords">
              ${o.fileText}
              <div class="start-recent-meta">
                <span class="start-recent-name">passwords_plaintext.txt</span>
                <span class="start-recent-sub">2h ago · Documents</span>
              </div>
            </div>
            <div class="start-recent-item" data-doc="world">
              ${o.fileText}
              <div class="start-recent-meta">
                <span class="start-recent-name">world_domination_plan.txt</span>
                <span class="start-recent-sub">Yesterday · Documents</span>
              </div>
            </div>
            <div class="start-recent-item" data-doc="goals">
              ${o.fileText}
              <div class="start-recent-meta">
                <span class="start-recent-name">quarterly_goals.txt</span>
                <span class="start-recent-sub">3d ago · Documents</span>
              </div>
            </div>
            <div class="start-recent-item" data-doc="project">
              ${o.fileCode}
              <div class="start-recent-meta">
                <span class="start-recent-name">revolutionary_software.js</span>
                <span class="start-recent-sub">1w ago · Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="start-footer">
        <div class="start-user">
          <div class="start-user-avatar">A</div>
          <span class="start-username">Aizen</span>
        </div>
        <div class="start-power-wrap">
          <button class="start-power-btn" id="start-power-btn" title="Power Options">
            ${o.power}
          </button>
        </div>
      </div>
    `,this.refreshApps()}refreshApps(){const e=this.el.querySelector("#start-pinned-grid");if(!e)return;e.innerHTML="";const t=[{id:"appStore",name:"Store",iconSvg:o.appStore},{id:"browser",name:"Browser",iconSvg:o.browser},{id:"securityCenter",name:"Security Center",iconSvg:o.shieldCheck},{id:"achievements",name:"Achievements",iconSvg:o.trophy},{id:"fileManager",name:"Files",iconSvg:o.fileManager},{id:"systemMonitor",name:"System",iconSvg:o.systemMonitor},{id:"calculator",name:"Calculator",iconSvg:o.calculator},{id:"notepad",name:"Notepad",iconSvg:o.notepad},{id:"terminal",name:"Terminal",iconSvg:o.terminal},{id:"developerConsole",name:"Dev Console",iconSvg:o.code},{id:"settings",name:"Settings",iconSvg:o.settings}];(typeof getMergedAppCatalog=="function"?getMergedAppCatalog():T).forEach(i=>{(u.isInstalled(i.id)||i.isCustom)&&t.push({id:i.id,name:i.name,iconSvg:i.icon?`<span style="font-size:26px;">${i.icon}</span>`:o.appStore})}),t.forEach(i=>{const n=document.createElement("div");n.className="start-app-item",n.dataset.app=i.id,n.innerHTML=`
        ${i.iconSvg}
        <span class="start-app-label">${i.name}</span>
      `,n.addEventListener("click",()=>{this.close(),this.appLauncher&&this.appLauncher(i.id)}),e.appendChild(n)})}bindEvents(){this.el.querySelector("#start-view-store").addEventListener("click",()=>{this.close(),this.appLauncher&&this.appLauncher("appStore")}),this.el.querySelectorAll(".start-recent-item").forEach(s=>{s.addEventListener("click",()=>{const i=s.dataset.doc;this.close(),this.appLauncher&&(i==="project"?this.appLauncher("notepad",{path:"C:/Users/Aizen/Documents/Projects/revolutionary_software.js"}):i==="passwords"?this.appLauncher("notepad",{path:"C:/Users/Aizen/Documents/passwords_plaintext_do_not_share.txt"}):i==="world"?this.appLauncher("notepad",{path:"C:/Users/Aizen/Documents/world_domination_plan.txt"}):this.appLauncher("notepad",{path:"C:/Users/Aizen/Documents/quarterly_goals.txt"}))})}),this.el.querySelector(".start-search-input").addEventListener("input",s=>{const i=s.target.value.toLowerCase().trim(),n=this.el.querySelector("#start-pinned-grid"),a=n.querySelector(".secret-search-item");if(a&&a.remove(),i==="nothing"){const r=document.createElement("div");r.className="start-app-item secret-search-item",r.innerHTML='🕳️<span class="start-app-label">Nothing (Secret)</span>',r.addEventListener("click",()=>{this.close(),this.appLauncher&&this.appLauncher("hidden_nothing")}),n.prepend(r)}else if(i==="loading"||i==="load"){const r=document.createElement("div");r.className="start-app-item secret-search-item",r.innerHTML='⏳<span class="start-app-label">Loading Sim (Secret)</span>',r.addEventListener("click",()=>{this.close(),this.appLauncher&&this.appLauncher("hidden_loading")}),n.prepend(r)}else if(i==="productivity"||i==="productive"){const r=document.createElement("div");r.className="start-app-item secret-search-item",r.innerHTML='⚡<span class="start-app-label">Productivity (Secret)</span>',r.addEventListener("click",()=>{this.close(),this.appLauncher&&this.appLauncher("hidden_productivity")}),n.prepend(r)}else if(i==="secret"||i==="42"){const r=document.createElement("div");r.className="start-app-item secret-search-item",r.innerHTML='🔢<span class="start-app-label">Secret Calculator</span>',r.addEventListener("click",()=>{this.close(),this.appLauncher&&this.appLauncher("hidden_secretCalc")}),n.prepend(r)}n.querySelectorAll(".start-app-item:not(.secret-search-item)").forEach(r=>{const c=r.querySelector(".start-app-label").textContent.toLowerCase();r.style.display=c.includes(i)?"flex":"none"})}),this.el.querySelector("#start-power-btn").addEventListener("click",s=>{s.stopPropagation(),l.playClick(),this.powerActions&&this.powerActions.showMenu(s.clientX,s.clientY)}),window.addEventListener("pointerdown",s=>{this.isOpen&&!this.el.contains(s.target)&&!s.target.closest("#taskbar-start-btn")&&this.close()})}toggle(){this.isOpen?this.close():this.open()}open(){l.playClick(),this.refreshApps(),this.el.classList.remove("hidden"),this.isOpen=!0;const e=this.el.querySelector(".start-search-input");e&&(e.value="",e.focus())}close(){this.isOpen&&(this.el.classList.add("hidden"),this.isOpen=!1)}}class ge{constructor(e,t){this.el=e,this.appLauncher=t,this.isOpen=!1,this.brightness=100,this.volume=60,this.nightLight=!1,this.render(),this.bindEvents()}render(){const e=S.isActive;this.el.innerHTML=`
      <div class="qs-tiles-grid">
        <div class="qs-tile active" id="qs-wifi">
          <div class="qs-tile-icon">${o.wifi}</div>
          <div class="qs-tile-info">
            <span class="qs-tile-title">Nothing_5G</span>
            <span class="qs-tile-status">Connected</span>
          </div>
        </div>

        <div class="qs-tile active" id="qs-bluetooth">
          <div class="qs-tile-icon">${o.bluetooth}</div>
          <div class="qs-tile-info">
            <span class="qs-tile-title">Bluetooth</span>
            <span class="qs-tile-status">Active</span>
          </div>
        </div>

        <div class="qs-tile ${this.nightLight?"active":""}" id="qs-nightlight">
          <div class="qs-tile-icon">${o.moon}</div>
          <div class="qs-tile-info">
            <span class="qs-tile-title">Night Light</span>
            <span class="qs-tile-status">${this.nightLight?"On":"Off"}</span>
          </div>
        </div>

        <div class="qs-tile ${e?"active":""}" id="qs-loadengine" title="Toggle real CPU & RAM hardware consumption">
          <div class="qs-tile-icon">${o.cpu}</div>
          <div class="qs-tile-info">
            <span class="qs-tile-title">Real Load</span>
            <span class="qs-tile-status" id="qs-load-status">${e?"≥50% HW Load":"Idle"}</span>
          </div>
        </div>
      </div>

      <!-- Brightness Slider -->
      <div class="qs-slider-group">
        ${o.sun}
        <input type="range" class="qs-slider" id="qs-bright-slider" min="30" max="100" value="${this.brightness}" />
      </div>

      <!-- Volume Slider -->
      <div class="qs-slider-group">
        ${o.volume}
        <input type="range" class="qs-slider" id="qs-vol-slider" min="0" max="100" value="${this.volume}" />
      </div>

      <div class="qs-footer">
        <div style="display:flex;align-items:center;gap:6px;">
          ${o.battery}
          <span>99% · 14 seconds remaining</span>
        </div>
        <button id="qs-open-settings" style="cursor:default;color:var(--text-secondary);" title="All Settings">
          ${o.settings}
        </button>
      </div>
    `}bindEvents(){const e=this.el.querySelector("#qs-nightlight");e.addEventListener("click",()=>{l.playClick(),this.nightLight=!this.nightLight,e.classList.toggle("active",this.nightLight),e.querySelector(".qs-tile-status").textContent=this.nightLight?"On":"Off",document.body.style.filter=this.nightLight?"sepia(0.25) saturate(1.1)":""});const t=this.el.querySelector("#qs-loadengine");t.addEventListener("click",()=>{l.playClick(),S.toggle();const a=S.isActive;t.classList.toggle("active",a),this.el.querySelector("#qs-load-status").textContent=a?"≥50% HW Load":"Idle"}),this.el.querySelector("#qs-bright-slider").addEventListener("input",a=>{this.brightness=a.target.value;const r=this.brightness/100;document.getElementById("desktop-environment").style.filter=`brightness(${r})`}),this.el.querySelector("#qs-vol-slider").addEventListener("input",a=>{this.volume=a.target.value,l.setVolume(this.volume/100),l.playClick()}),this.el.querySelector("#qs-open-settings").addEventListener("click",()=>{this.close(),this.appLauncher&&this.appLauncher("settings")}),window.addEventListener("pointerdown",a=>{this.isOpen&&!this.el.contains(a.target)&&!a.target.closest("#tray-network-group")&&this.close()}),S.subscribe(a=>{if(!this.el)return;const r=this.el.querySelector("#qs-loadengine"),c=this.el.querySelector("#qs-load-status");r&&c&&(r.classList.toggle("active",a.isActive),c.textContent=a.isActive?"≥50% HW Load":"Idle")})}toggle(){this.isOpen?this.close():this.open()}open(){l.playClick(),this.el.classList.remove("hidden"),this.isOpen=!0}close(){this.isOpen&&(this.el.classList.add("hidden"),this.isOpen=!1)}}class ye{constructor(){this.el=null,this.isOpen=!1}init(e){this.el=e,window.addEventListener("pointerdown",t=>{this.isOpen&&!this.el.contains(t.target)&&this.hide()}),document.addEventListener("contextmenu",t=>{t.preventDefault()})}show(e,t,s){l.playClick(),this.el.innerHTML="",s.forEach(c=>{if(c.separator){const p=document.createElement("div");p.className="context-divider",this.el.appendChild(p);return}const d=document.createElement("div");d.className="context-item",d.innerHTML=`
        ${c.icon||""}
        <span>${c.label}</span>
      `,d.addEventListener("click",()=>{l.playClick(),this.hide(),c.action&&c.action()}),this.el.appendChild(d)});const i=220,n=s.length*32+20,a=Math.min(window.innerWidth-i-8,Math.max(8,e)),r=Math.min(window.innerHeight-n-8,Math.max(8,t));this.el.style.left=`${a}px`,this.el.style.top=`${r}px`,this.el.classList.remove("hidden"),this.isOpen=!0}hide(){this.isOpen&&(this.el.classList.add("hidden"),this.isOpen=!1)}}const _=new ye;class fe{constructor(e){this.appLauncher=e,this.container=document.createElement("div"),this.container.className="appstore-window",this.activeTab="home",this.selectedApp=null,this.searchQuery="",this.categoryFilter="All",this.installingApps=new Map,this.render(),this.bindGlobalEvents(),this.unsubscribe=u.subscribe(()=>{this.updateScoreBadge(),this.selectedApp||this.renderTab(this.activeTab)})}render(){this.container.innerHTML=`
      <div class="store-topbar">
        <div class="store-nav-tabs">
          <div style="display:flex;align-items:center;gap:8px;margin-right:12px;font-weight:700;font-size:13px;color:var(--text-primary);">
            ${o.appStore}
            <span>Store</span>
          </div>
          <button class="store-tab-btn active" data-tab="home">Home</button>
          <button class="store-tab-btn" data-tab="apps">Apps</button>
          <button class="store-tab-btn" data-tab="games">Entertainment</button>
          <button class="store-tab-btn" data-tab="installed">Installed</button>
          <button class="store-tab-btn" data-tab="updates">Updates</button>
        </div>

        <div class="store-search-wrap">
          ${o.search}
          <input type="text" class="store-search-input" id="store-search" placeholder="Search apps, games, nothing..." />
        </div>

        <div class="store-score-badge" id="store-score-badge">
          ${o.sparkles}
          <span id="score-text">Score: ${u.score} · ${u.getRank()}</span>
        </div>
      </div>

      <div class="store-body" id="store-body"></div>
    `,this.renderTab("home")}bindGlobalEvents(){this.container.querySelectorAll(".store-tab-btn").forEach(t=>{t.addEventListener("click",()=>{l.playClick(),this.selectedApp=null,this.container.querySelectorAll(".store-tab-btn").forEach(s=>s.classList.remove("active")),t.classList.add("active"),this.activeTab=t.dataset.tab,this.renderTab(this.activeTab)})}),this.container.querySelector("#store-search").addEventListener("input",t=>{this.searchQuery=t.target.value.toLowerCase().trim(),this.selectedApp=null,this.searchQuery?this.renderSearchResults(this.searchQuery):this.renderTab(this.activeTab)})}updateScoreBadge(){const e=this.container.querySelector("#score-text");e&&(e.textContent=`Score: ${u.score} · ${u.getRank()}`)}renderTab(e){const t=this.container.querySelector("#store-body");t.innerHTML="",e==="home"?this.renderHome(t):e==="apps"?this.renderCategoryView(t,["Utilities","Productivity","System","Education"]):e==="games"?this.renderCategoryView(t,["Entertainment"]):e==="installed"?this.renderInstalled(t):e==="updates"&&this.renderUpdates(t)}renderHome(e){const t=T.find(p=>p.id==="rockSimulator")||T[0],s=document.createElement("div");s.className="store-hero-card",s.innerHTML=`
      <div class="store-hero-content">
        <div class="store-hero-badge">Featured Innovation</div>
        <div class="store-hero-title">${t.name}</div>
        <div class="store-hero-desc">${t.tagline}</div>
        <div style="display:flex;gap:12px;margin-top:12px;">
          <button class="dialog-btn primary" id="btn-hero-view">View Details</button>
          <button class="dialog-btn" id="btn-hero-get">${u.isInstalled(t.id)?"Open":"Get"}</button>
        </div>
      </div>
      <div class="store-hero-icon-visual">${t.icon}</div>
    `,s.querySelector("#btn-hero-view").addEventListener("click",()=>{l.playClick(),this.showDetail(t)}),s.querySelector("#btn-hero-get").addEventListener("click",()=>{l.playClick(),u.isInstalled(t.id)?this.appLauncher(t.id):this.startInstall(t)}),e.appendChild(s);const i=document.createElement("div");i.innerHTML='<div class="store-section-title">Recommended for you</div>';const n=document.createElement("div");n.className="store-grid",T.filter(p=>p.isFeatured&&p.id!==t.id).slice(0,4).forEach(p=>n.appendChild(this.createAppCard(p))),i.appendChild(n),e.appendChild(i);const r=document.createElement("div");r.innerHTML='<div class="store-section-title">Trending in Uselessness</div>';const c=document.createElement("div");c.className="store-grid",T.filter(p=>p.isTrending).slice(0,6).forEach(p=>c.appendChild(this.createAppCard(p))),r.appendChild(c),e.appendChild(r)}renderCategoryView(e,t){const s=document.createElement("div");s.style.cssText="display:flex;gap:8px;margin-bottom:8px;",["All",...t].forEach(r=>{const c=document.createElement("button");c.className=`dialog-btn ${this.categoryFilter===r?"primary":""}`,c.style.borderRadius="14px",c.textContent=r,c.addEventListener("click",()=>{l.playClick(),this.categoryFilter=r,this.renderCategoryView(e,t)}),s.appendChild(c)}),e.appendChild(s);const n=document.createElement("div");n.className="store-grid",T.filter(r=>this.categoryFilter==="All"?t.includes(r.category):r.category===this.categoryFilter).forEach(r=>n.appendChild(this.createAppCard(r))),e.appendChild(n)}renderInstalled(e){const t=T.filter(n=>u.isInstalled(n.id)),s=document.createElement("div");if(s.className="store-section-title",s.innerHTML=`
      <span>Installed Applications (${t.length})</span>
      <span style="font-size:12px;color:var(--text-muted);">Total imaginary space: 14.8 GB</span>
    `,e.appendChild(s),t.length===0){e.innerHTML+=`
        <div style="text-align:center;padding:40px;color:var(--text-muted);font-size:13px;">
          No applications installed yet.<br/>Your system is currently in a state of pure void.
        </div>
      `;return}const i=document.createElement("div");i.style.cssText="display:flex;flex-direction:column;gap:8px;",t.forEach(n=>{const a=document.createElement("div");a.className="store-review-card",a.style.cssText="flex-direction:row;align-items:center;justify-content:space-between;padding:12px 18px;",a.innerHTML=`
        <div style="display:flex;align-items:center;gap:14px;">
          <div style="font-size:28px;">${n.icon}</div>
          <div>
            <div style="font-weight:600;font-size:13px;">${n.name}</div>
            <div style="font-size:11px;color:var(--text-muted);">Version ${n.version} · Size: ${n.size}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="dialog-btn primary btn-open-inst">Open</button>
          <button class="dialog-btn btn-uninst">Uninstall</button>
        </div>
      `,a.querySelector(".btn-open-inst").addEventListener("click",()=>{l.playClick(),this.appLauncher(n.id)}),a.querySelector(".btn-uninst").addEventListener("click",()=>{this.confirmUninstall(n)}),i.appendChild(a)}),e.appendChild(i)}renderUpdates(e){const t=T.filter(i=>i.hasUpdate&&u.isInstalled(i.id));if(e.innerHTML=`
      <div class="store-section-title">
        <span>Updates Available (${t.length})</span>
        ${t.length>0?'<button class="dialog-btn primary" id="btn-update-all">Update All</button>':""}
      </div>
    `,t.length===0){e.innerHTML+=`
        <div style="text-align:center;padding:40px;color:var(--text-muted);font-size:13px;">
          All applications are up to date.<br/>No new uselessness is pending installation.
        </div>
      `;return}t.forEach(i=>{const n=document.createElement("div");n.className="store-review-card",n.innerHTML=`
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="display:flex;align-items:center;gap:12px;">
            <div style="font-size:28px;">${i.icon}</div>
            <div>
              <div style="font-weight:600;font-size:13px;">${i.name}</div>
              <div style="font-size:11px;color:var(--accent);">Version ${i.version} → ${i.updateVersion}</div>
            </div>
          </div>
          <button class="dialog-btn primary btn-do-update">Update</button>
        </div>
        <div style="font-size:11px;color:var(--text-secondary);margin-top:8px;white-space:pre-line;">${i.updateNotes}</div>
      `,n.querySelector(".btn-do-update").addEventListener("click",()=>{l.playNotification(),i.hasUpdate=!1,i.version=i.updateVersion,g.show({title:"Update Complete",message:`${i.name} updated.`,subtext:"The rock remains a rock.",type:"check"}),this.renderUpdates(e)}),e.appendChild(n)});const s=e.querySelector("#btn-update-all");s&&s.addEventListener("click",()=>{l.playNotification(),t.forEach(i=>{i.hasUpdate=!1,i.version=i.updateVersion}),g.show({title:"Updates Installed",message:"All updates applied.",subtext:"Zero changes observed across the entire operating system.",type:"check"}),this.renderUpdates(e)})}renderSearchResults(e){const t=this.container.querySelector("#store-body");if(t.innerHTML="",e==="productivity"||e==="productive"){t.innerHTML=`
        <div class="store-section-title">Secret Discovery</div>
        <div class="store-grid">
          <div class="store-app-card" id="card-secret-prod">
            <div class="store-card-header">
              <div class="store-card-icon">⚡</div>
              <div class="store-card-meta">
                <span class="store-card-name">Productivity</span>
                <span class="store-card-cat">System · Hidden</span>
              </div>
            </div>
            <div class="store-card-desc">Mysterious module claiming productivity mode is active.</div>
            <div class="store-card-footer">
              <span class="store-card-rating">★ 5.0 · Secret</span>
              <button class="store-btn-get open" id="btn-launch-secret-prod">OPEN</button>
            </div>
          </div>
        </div>
      `,t.querySelector("#btn-launch-secret-prod").addEventListener("click",()=>{this.appLauncher("hidden_productivity")});return}if(e==="nothing"){t.innerHTML=`
        <div class="store-section-title">Secret Discovery</div>
        <div class="store-grid">
          <div class="store-app-card" id="card-nothing">
            <div class="store-card-header">
              <div class="store-card-icon">🕳️</div>
              <div class="store-card-meta">
                <span class="store-card-name">Nothing</span>
                <span class="store-card-cat">Philosophy · Hidden</span>
              </div>
            </div>
            <div class="store-card-desc">There is literally nothing here.</div>
            <div class="store-card-footer">
              <span class="store-card-rating">★ 5.0 · Secret</span>
              <button class="store-btn-get open" id="btn-get-nothing">OPEN</button>
            </div>
          </div>
        </div>
      `,t.querySelector("#btn-get-nothing").addEventListener("click",()=>{this.appLauncher("hidden_nothing")});return}if(e==="loading"||e==="load"){t.innerHTML=`
        <div class="store-section-title">Secret Discovery</div>
        <div class="store-grid">
          <div class="store-app-card" id="card-loading">
            <div class="store-card-header">
              <div class="store-card-icon">⏳</div>
              <div class="store-card-meta">
                <span class="store-card-name">Loading Simulator</span>
                <span class="store-card-cat">Simulation · Hidden</span>
              </div>
            </div>
            <div class="store-card-desc">State-of-the-art 99% progress bar experience.</div>
            <div class="store-card-footer">
              <span class="store-card-rating">★ 5.0 · Secret</span>
              <button class="store-btn-get open" id="btn-get-loading">OPEN</button>
            </div>
          </div>
        </div>
      `,t.querySelector("#btn-get-loading").addEventListener("click",()=>{this.appLauncher("hidden_loading")});return}if(e==="secret"||e==="42"){t.innerHTML=`
        <div class="store-section-title">Secret Discovery</div>
        <div class="store-grid">
          <div class="store-app-card" id="card-secret-calc">
            <div class="store-card-header">
              <div class="store-card-icon">🔢</div>
              <div class="store-card-meta">
                <span class="store-card-name">Secret Calculator</span>
                <span class="store-card-cat">Mathematics · Hidden</span>
              </div>
            </div>
            <div class="store-card-desc">A calculator that inevitably outputs 42.</div>
            <div class="store-card-footer">
              <span class="store-card-rating">★ 5.0 · Secret</span>
              <button class="store-btn-get open" id="btn-get-scalc">OPEN</button>
            </div>
          </div>
        </div>
      `,t.querySelector("#btn-get-scalc").addEventListener("click",()=>{this.appLauncher("hidden_secretCalc")});return}const i=O().filter(r=>r.name.toLowerCase().includes(e)||r.description&&r.description.toLowerCase().includes(e)||r.category&&r.category.toLowerCase().includes(e));if(i.length===0){t.innerHTML=`
        <div style="text-align:center;padding:60px 20px;display:flex;flex-direction:column;align-items:center;gap:10px;">
          <div style="font-size:48px;">📂</div>
          <div style="font-size:18px;font-weight:600;">No apps found.</div>
          <div style="font-size:13px;color:var(--text-secondary);max-width:360px;">
            We searched very hard. Unfortunately, there is nothing matching "${e}".
          </div>
        </div>
      `;return}const n=document.createElement("div");n.className="store-section-title",n.textContent=`Search results (${i.length})`,t.appendChild(n);const a=document.createElement("div");a.className="store-grid",i.forEach(r=>a.appendChild(this.createAppCard(r))),t.appendChild(a)}createAppCard(e){const t=u.isInstalled(e.id),s=this.installingApps.has(e.id),i=document.createElement("div");i.className="store-app-card",i.innerHTML=`
      <div class="store-card-header">
        <div class="store-card-icon">${e.icon}</div>
        <div class="store-card-meta">
          <span class="store-card-name">${e.name}</span>
          <span class="store-card-cat">${e.category} · ${e.size}</span>
        </div>
      </div>
      <div class="store-card-desc">${e.tagline}</div>
      <div class="store-card-footer">
        <span class="store-card-rating">★ ${e.rating} · ${e.downloads}</span>
        <button class="store-btn-get ${t?"open":""}">
          ${s?"Installing...":t?"OPEN":"GET"}
        </button>
      </div>
    `,i.addEventListener("click",a=>{a.target.closest(".store-btn-get")||(l.playClick(),this.showDetail(e))});const n=i.querySelector(".store-btn-get");return n.addEventListener("click",a=>{a.stopPropagation(),l.playClick(),t?this.appLauncher(e.id):s||this.startInstall(e,n)}),i}showDetail(e){this.selectedApp=e;const t=this.container.querySelector("#store-body");t.innerHTML="";const s=u.isInstalled(e.id);u.getUserRating(e.id);const i=document.createElement("div");i.className="store-detail-page",i.innerHTML=`
      <button class="store-detail-back-btn" id="btn-back">
        ${o.arrowLeft}
        <span>Back</span>
      </button>

      <!-- App Header Bar -->
      <div class="store-detail-header">
        <div class="store-detail-icon">${e.icon}</div>
        <div class="store-detail-info">
          <div class="store-detail-title">${e.name}</div>
          <div class="store-detail-dev">${e.developer} · ${e.category}</div>
          <div class="store-detail-stats">
            <span>★ ${e.rating} (${e.downloads} downloads)</span>
            <span>Size: ${e.size}</span>
            <span>Version: ${e.version}</span>
          </div>
        </div>
        <div>
          <button class="store-btn-get ${s?"open":""}" id="btn-detail-action" style="height:36px;padding:0 24px;font-size:13px;">
            ${s?"OPEN":"GET"}
          </button>
        </div>
      </div>

      <!-- Installation Progress Container (Hidden by default) -->
      <div class="store-install-box" id="detail-install-box" style="display:none;">
        <div style="display:flex;justify-content:space-between;font-size:12px;">
          <span id="detail-install-step">Downloading...</span>
          <span id="detail-install-pct">0%</span>
        </div>
        <div class="store-progress-track">
          <div class="store-progress-fill" id="detail-progress-fill" style="width:0%;"></div>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:11px;color:var(--text-muted);margin-top:2px;">
          <span id="detail-install-speed">742 MB / 742 MB @ 48.2 MB/s</span>
          <button class="dialog-btn" id="btn-cancel-install" style="height:22px;padding:0 8px;font-size:10px;">Cancel</button>
        </div>
      </div>

      <!-- Realistic Preview Box -->
      <div>
        <div class="store-section-title">Preview</div>
        <div class="store-preview-box">
          ${e.icon}
        </div>
      </div>

      <!-- Description & Features -->
      <div>
        <div class="store-section-title">Description</div>
        <div style="font-size:13px;line-height:1.6;color:var(--text-secondary);">${e.description}</div>
      </div>

      <div>
        <div class="store-section-title">Key Features</div>
        <ul style="padding-left:20px;display:flex;flex-direction:column;gap:4px;font-size:12px;color:var(--text-secondary);">
          ${e.features.map(c=>`<li>${c}</li>`).join("")}
        </ul>
      </div>

      <!-- Ratings & Reviews Section -->
      <div class="store-reviews-section">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <div>
            <div class="store-section-title" style="margin:0;">Ratings & Reviews</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;" id="detail-stats-header">
              ${(()=>{const c=z.getAppStats(e.id,e.rating);return`★ ${c.rating} out of 5 · ${c.count} customer ratings`})()}
            </div>
          </div>
          <div style="display:flex;gap:8px;">
            <select class="store-sort-select" id="review-sort-select" style="background:var(--surface-card);border:1px solid var(--border-subtle);color:var(--text-primary);padding:4px 8px;border-radius:4px;font-size:12px;">
              <option value="helpful">Most Helpful</option>
              <option value="newest">Newest</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
            <button class="dialog-btn primary" id="btn-write-review" style="font-size:12px;height:28px;">
              ${z.getUserReview(e.id)?"Edit Your Review":"Write a Review"}
            </button>
          </div>
        </div>

        <!-- User's Own Review Display if present -->
        <div id="user-own-review-container"></div>

        <!-- Reviews List -->
        <div class="store-reviews-list" id="store-reviews-container"></div>
      </div>
    `,i.querySelector("#btn-back").addEventListener("click",()=>{l.playClick(),this.selectedApp=null,this.renderTab(this.activeTab)});const n=i.querySelector("#btn-detail-action");n.addEventListener("click",()=>{l.playClick(),u.isInstalled(e.id)?this.appLauncher(e.id):this.startInstall(e,n)}),i.querySelector("#btn-write-review").addEventListener("click",()=>{this.openReviewModal(e,i)});const r=i.querySelector("#review-sort-select");r.addEventListener("change",()=>{this.renderAppReviews(e,i,r.value)}),this.renderAppReviews(e,i,"helpful"),t.appendChild(i)}renderAppReviews(e,t,s="helpful"){const i=t.querySelector("#store-reviews-container"),n=t.querySelector("#user-own-review-container");if(!i)return;i.innerHTML="",n.innerHTML="";const a=z.getUserReview(e.id);if(a){const c=document.createElement("div");c.className="store-review-card own-review",c.style.borderLeft="3px solid var(--accent)",c.innerHTML=`
        <div style="display:flex;justify-content:space-between;font-size:12px;font-weight:600;">
          <span>${a.user}</span>
          <span style="color:#f1c40f;">${"★".repeat(a.stars)}</span>
        </div>
        <div style="font-weight:600;font-size:12px;margin:4px 0 2px;">${a.title}</div>
        <div style="font-size:12px;color:var(--text-secondary);">${a.text}</div>
        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:8px;font-size:11px;color:var(--text-muted);">
          <span>Posted: ${a.date}</span>
          <button class="dialog-btn" id="btn-del-own-review" style="height:22px;padding:0 8px;font-size:10px;color:var(--status-red);">Delete</button>
        </div>
      `,c.querySelector("#btn-del-own-review").addEventListener("click",()=>{l.playClick(),z.deleteUserReview(e.id),this.renderAppReviews(e,t,s)}),n.appendChild(c)}z.getReviews(e.id,s).forEach(c=>{if(a&&c.id===a.id)return;const d=document.createElement("div");d.className="store-review-card";const p=z.hasVotedHelpful(c.id);d.innerHTML=`
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;">
          <div>
            <span style="font-weight:600;">${c.user}</span>
            <span style="color:var(--text-muted);font-size:11px;margin-left:6px;">${c.date||"Aug 2026"}</span>
          </div>
          <span style="color:#f1c40f;font-weight:600;">${"★".repeat(c.stars)}</span>
        </div>
        ${c.title?`<div style="font-weight:600;font-size:12px;margin:4px 0 2px;">${c.title}</div>`:""}
        <div style="font-size:12px;color:var(--text-secondary);line-height:1.5;">${c.text}</div>
        <div style="display:flex;align-items:center;gap:12px;margin-top:8px;font-size:11px;color:var(--text-muted);">
          <button class="review-helpful-btn ${p?"voted":""}" data-id="${c.id}" style="background:transparent;border:1px solid var(--border-subtle);border-radius:4px;padding:2px 8px;font-size:11px;color:var(--text-secondary);display:flex;align-items:center;gap:4px;cursor:pointer;">
            ${o.thumbsUp}
            <span>Helpful (${c.helpful||0})</span>
          </button>
        </div>
      `,d.querySelector(".review-helpful-btn").addEventListener("click",f=>{l.playClick(),z.voteHelpful(e.id,c.id)&&this.renderAppReviews(e,t,s)}),i.appendChild(d)})}openReviewModal(e,t){l.playClick();const s=z.getUserReview(e.id)||{stars:5,title:"",text:""};let i=s.stars||5;const n=document.createElement("div");n.className="modal-container active",n.style.zIndex="9999",n.innerHTML=`
      <div class="dialog-box" style="width:420px;">
        <div class="dialog-header">
          <span class="dialog-title">${s.text?"Edit Review":"Write a Review"}</span>
        </div>
        <div class="dialog-body" style="display:flex;flex-direction:column;gap:12px;">
          <div>
            <div style="font-size:12px;font-weight:500;margin-bottom:4px;">Rating</div>
            <div style="display:flex;gap:6px;font-size:24px;cursor:pointer;" id="modal-stars-row">
              ${[1,2,3,4,5].map(a=>`<span data-star="${a}" style="color:${a<=i?"#f1c40f":"var(--text-muted)"};">★</span>`).join("")}
            </div>
          </div>
          <div>
            <div style="font-size:12px;font-weight:500;margin-bottom:4px;">Title</div>
            <input type="text" id="review-modal-title" value="${s.title||""}" placeholder="Headline of your review" style="width:100%;padding:6px 10px;background:var(--bg-canvas);border:1px solid var(--border-subtle);border-radius:4px;color:var(--text-primary);font-size:12px;" />
          </div>
          <div>
            <div style="font-size:12px;font-weight:500;margin-bottom:4px;">Review</div>
            <textarea id="review-modal-text" rows="4" placeholder="Explain what this application did not accomplish..." style="width:100%;padding:6px 10px;background:var(--bg-canvas);border:1px solid var(--border-subtle);border-radius:4px;color:var(--text-primary);font-size:12px;resize:none;">${s.text||""}</textarea>
          </div>
        </div>
        <div class="dialog-actions">
          <button class="dialog-btn" id="btn-modal-cancel">Cancel</button>
          <button class="dialog-btn primary" id="btn-modal-submit">Submit Review</button>
        </div>
      </div>
    `,n.querySelectorAll("#modal-stars-row span").forEach(a=>{a.addEventListener("click",()=>{l.playClick(),i=parseInt(a.dataset.star,10),n.querySelectorAll("#modal-stars-row span").forEach(r=>{r.style.color=parseInt(r.dataset.star,10)<=i?"#f1c40f":"var(--text-muted)"})})}),n.querySelector("#btn-modal-cancel").addEventListener("click",()=>{n.remove()}),n.querySelector("#btn-modal-submit").addEventListener("click",()=>{const a=n.querySelector("#review-modal-title").value.trim(),r=n.querySelector("#review-modal-text").value.trim();if(!r)return;l.playClick(),z.addOrUpdateUserReview(e.id,{stars:i,title:a||"Thoughtful review",text:r}),n.remove(),this.renderAppReviews(e,t,"helpful");const c=t.querySelector("#btn-write-review");c&&(c.textContent="Edit Your Review")}),document.body.appendChild(n)}startInstall(e,t=null){if(this.installingApps.has(e.id))return;const s=this.container.querySelector("#detail-install-box");s&&(s.style.display="flex"),t&&(t.disabled=!0,t.textContent="Installing...");let i=0;const n=[{at:0,text:`Downloading ${e.size}...`},{at:55,text:"Installing package..."},{at:80,text:"Configuring useless parameters..."},{at:94,text:"Finalizing installation..."}],a=setInterval(()=>{i+=Math.floor(6+Math.random()*8),i>100&&(i=100);let c=n[0].text;n.forEach(v=>{i>=v.at&&(c=v.text)});const d=this.container.querySelector("#detail-install-pct"),p=this.container.querySelector("#detail-install-step"),f=this.container.querySelector("#detail-progress-fill"),y=this.container.querySelector("#detail-install-speed");d&&(d.textContent=`${i}%`),p&&(p.textContent=c),f&&(f.style.width=`${i}%`),y&&(y.textContent=`${Math.floor(i*7.4)} MB / ${e.size} @ 48.2 MB/s`),i>=100&&(clearInterval(a),this.installingApps.delete(e.id),u.installApp(e.id),A.notify({app:"Useless App Store",title:"Installation Complete",message:`${e.name} (${e.size}) is ready to waste your time.`,icon:"appStore"}),s&&(s.style.display="none"),t&&(t.disabled=!1,t.textContent="OPEN",t.classList.add("open")),g.show({title:"Installation Complete",message:`${e.name} has been installed.`,subtext:`Installed size: ${e.size}.
Reason: The application is very high quality, but does nothing.`,type:"check",buttons:[{text:"Launch App",primary:!0},{text:"Done"}]}).then(v=>{v==="Launch App"&&this.appLauncher(e.id)}))},180);this.installingApps.set(e.id,{timer:a});const r=this.container.querySelector("#btn-cancel-install");r&&r.addEventListener("click",()=>{g.show({title:"Cancel Installation",message:`Cancel installing ${e.name}?`,subtext:"Your simulated download progress will be lost.",type:"warning",buttons:[{text:"Cancel Installation",primary:!0},{text:"Continue"}]}).then(c=>{c==="Cancel Installation"&&(clearInterval(a),this.installingApps.delete(e.id),s&&(s.style.display="none"),t&&(t.disabled=!1,t.textContent="GET"))})})}confirmUninstall(e){g.show({title:"Uninstall Application",message:`Uninstall ${e.name}?`,subtext:`The application and its ${e.size} of useless data will be permanently removed.`,type:"warning",buttons:[{text:"Uninstall",primary:!0},{text:"Cancel"}]}).then(t=>{t==="Uninstall"&&(u.uninstallApp(e.id),g.show({title:"Uninstalled",message:`${e.name} removed.`,subtext:"Nothing important was removed from your system.",type:"check"}))})}getElement(){return this.container}}class be{constructor(){this.container=document.createElement("div"),this.container.className="security-center-window",this.activeTab="dashboard",this.isScanning=!1,this.scanProgress=0,this.scanInterval=null,this.productivityThreatActive=!0,this.scanHistory=[{date:"Today, 14:22",type:"Quick Scan",threats:1,action:"Ignored"},{date:"Yesterday, 11:05",type:"Full Scan",threats:1,action:"Archived"}],this.render()}render(){this.container.innerHTML=`
      <div class="sec-sidebar">
        <div class="sec-brand">
          ${o.shieldCheck}
          <span>Security Center</span>
        </div>
        <div class="sec-nav">
          <button class="sec-nav-item active" data-tab="dashboard">
            ${o.shield}
            <span>Home</span>
          </button>
          <button class="sec-nav-item" data-tab="virus">
            ${o.alertCircle}
            <span>Virus & Threat</span>
          </button>
          <button class="sec-nav-item" data-tab="firewall">
            ${o.firewall}
            <span>Firewall & Network</span>
          </button>
          <button class="sec-nav-item" data-tab="productivity">
            ${o.warning}
            <span>Productivity Guard</span>
          </button>
          <button class="sec-nav-item" data-tab="history">
            ${o.clock}
            <span>Scan History</span>
          </button>
        </div>
      </div>

      <div class="sec-main" id="sec-main-content"></div>
    `,this.bindNav(),this.renderTab("dashboard")}bindNav(){this.container.querySelectorAll(".sec-nav-item").forEach(e=>{e.addEventListener("click",()=>{l.playClick(),this.container.querySelectorAll(".sec-nav-item").forEach(t=>t.classList.remove("active")),e.classList.add("active"),this.activeTab=e.dataset.tab,this.renderTab(this.activeTab)})})}renderTab(e){const t=this.container.querySelector("#sec-main-content");t.innerHTML="",e==="dashboard"?this.renderDashboard(t):e==="virus"?this.renderVirusSection(t):e==="firewall"?this.renderFirewall(t):e==="productivity"?this.renderProductivityGuard(t):e==="history"&&this.renderHistory(t)}renderDashboard(e){e.innerHTML=`
      <div class="sec-header">
        <h1 class="sec-title">Security at a Glance</h1>
        <p class="sec-subtitle">Active defenses protecting your right to do absolutely nothing.</p>
      </div>

      <!-- Threat Alert Banner if Productivity Detected -->
      ${this.productivityThreatActive?`
        <div class="sec-alert-banner">
          <div class="sec-alert-icon">${o.warning}</div>
          <div class="sec-alert-info">
            <div class="sec-alert-title">Productivity Threat Detected</div>
            <div class="sec-alert-desc">An active background instance of <code>productivity.exe</code> was discovered attempting useful work.</div>
          </div>
          <button class="dialog-btn primary" id="btn-banner-remove">Remove Productivity</button>
        </div>
      `:`
        <div class="sec-alert-banner safe">
          <div class="sec-alert-icon">${o.check}</div>
          <div class="sec-alert-info">
            <div class="sec-alert-title">Zero Useful Threats Present</div>
            <div class="sec-alert-desc">All systems operating within certified parameters of total inefficiency.</div>
          </div>
        </div>
      `}

      <!-- Status Cards Grid -->
      <div class="sec-cards-grid">
        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${o.shieldCheck}</div>
            <span class="sec-badge ok">Protected</span>
          </div>
          <div class="sec-card-name">Device Security</div>
          <div class="sec-card-text">Core OS kernel integrity confirmed. Zero useful instructions executed.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${o.alertCircle}</div>
            <span class="sec-badge ok">No Threats Found</span>
          </div>
          <div class="sec-card-name">Virus & Threat Protection</div>
          <div class="sec-card-text">Last scanned: Just now. Zero viruses, trojans, or motivation detected.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${o.firewall}</div>
            <span class="sec-badge ok">Active</span>
          </div>
          <div class="sec-card-name">Firewall</div>
          <div class="sec-card-text">Incoming expectations and outside deadlines successfully blocked.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${o.browserWindow}</div>
            <span class="sec-badge ok">Verified</span>
          </div>
          <div class="sec-card-name">App Security</div>
          <div class="sec-card-text">All 23 installed applications confirmed to provide zero utility.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${o.lock}</div>
            <span class="sec-badge ok">Mostly Private</span>
          </div>
          <div class="sec-card-name">Privacy</div>
          <div class="sec-card-text">Nobody is monitoring you because nothing of consequence is occurring.</div>
        </div>

        <div class="sec-card">
          <div class="sec-card-top">
            <div class="sec-card-icon">${o.cpu}</div>
            <span class="sec-badge ok">100% Idle</span>
          </div>
          <div class="sec-card-name">System Health</div>
          <div class="sec-card-text">Hardware temperature: Cool. Cognitive pressure: Zero.</div>
        </div>

        <div class="sec-card critical">
          <div class="sec-card-top">
            <div class="sec-card-icon">${o.warning}</div>
            <span class="sec-badge danger">${this.productivityThreatActive?"Critical":"Secured"}</span>
          </div>
          <div class="sec-card-name">Productivity Protection</div>
          <div class="sec-card-text">${this.productivityThreatActive?"Threat detected: productivity.exe attempting to optimize your time.":"Productivity quarantined."}</div>
        </div>
      </div>

      <!-- Quick Actions -->
      <div class="sec-scan-actions">
        <button class="dialog-btn primary" id="btn-quick-scan">Quick Scan</button>
        <button class="dialog-btn" id="btn-deep-scan">Deep Scan</button>
      </div>
    `;const t=e.querySelector("#btn-banner-remove");t&&t.addEventListener("click",()=>{this.removeProductivity()}),e.querySelector("#btn-quick-scan").addEventListener("click",()=>{this.startScan("Quick Scan")}),e.querySelector("#btn-deep-scan").addEventListener("click",()=>{this.startScan("Deep Scan")})}renderVirusSection(e){e.innerHTML=`
      <div class="sec-header">
        <h1 class="sec-title">Virus & Threat Protection</h1>
        <p class="sec-subtitle">Simulated threat defense engine powered by NullGuard.</p>
      </div>

      <div class="sec-panel">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
          <div>
            <div style="font-size:15px;font-weight:600;">Current Threats</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
              ${this.productivityThreatActive?"1 productivity hazard requires immediate inaction.":"No active threats detected."}
            </div>
          </div>
          <span class="sec-badge ${this.productivityThreatActive?"danger":"ok"}">
            ${this.productivityThreatActive?"Action Required":"Protected"}
          </span>
        </div>

        ${this.productivityThreatActive?`
          <div class="sec-threat-item">
            <div class="sec-threat-header">
              <span class="sec-threat-name">productivity.exe</span>
              <span class="sec-badge danger">Extremely Dangerous</span>
            </div>
            <div class="sec-threat-desc">
              Detected in: <code>C:\\System32\\habits\\productivity.exe</code><br/>
              Behavior: Tries to set calendar appointments, prioritize tasks, and establish focus.
            </div>
            <div class="sec-threat-actions">
              <button class="dialog-btn primary" id="btn-remove-threat">Remove Productivity</button>
              <button class="dialog-btn" id="btn-quarantine-threat">Ignore Forever</button>
            </div>
          </div>
        `:`
          <div style="text-align:center;padding:30px;color:var(--text-muted);font-size:13px;">
            ✓ Your computer is 100% free of productivity threats.
          </div>
        `}
      </div>

      <div class="sec-scan-box" id="scan-in-progress-box" style="display:${this.isScanning?"block":"none"};">
        <div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:6px;">
          <span id="scan-status-text">Scanning system directories...</span>
          <span id="scan-pct">0%</span>
        </div>
        <div class="store-progress-track">
          <div class="store-progress-fill" id="scan-progress-fill" style="width:0%;"></div>
        </div>
        <div id="scan-current-file" style="font-size:11px;color:var(--text-muted);margin-top:8px;font-family:monospace;">
          Scanning: C:\\NullOS\\System\\idle_loop.dll
        </div>
      </div>

      <div class="sec-scan-actions">
        <button class="dialog-btn primary" id="btn-run-scan-tab">Run Quick Scan Now</button>
      </div>
    `;const t=e.querySelector("#btn-remove-threat");t&&t.addEventListener("click",()=>this.removeProductivity());const s=e.querySelector("#btn-run-scan-tab");s&&s.addEventListener("click",()=>this.startScan("Quick Scan"))}renderFirewall(e){e.innerHTML=`
      <div class="sec-header">
        <h1 class="sec-title">Firewall & Network Protection</h1>
        <p class="sec-subtitle">Stateful packet filtering for existential obligations.</p>
      </div>

      <div class="sec-panel">
        <div class="sec-toggle-row">
          <div>
            <div style="font-weight:600;font-size:13px;">Existential Firewall</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
              Blocks incoming deadlines and unrequested urgent emails.
            </div>
          </div>
          <label class="os-switch"><input type="checkbox" checked /><span class="os-switch-slider"></span></label>
        </div>

        <div class="sec-toggle-row">
          <div>
            <div style="font-weight:600;font-size:13px;">Domain Filtering</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
              Automatically rewrites search queries into useless conclusions.
            </div>
          </div>
          <label class="os-switch"><input type="checkbox" checked /><span class="os-switch-slider"></span></label>
        </div>

        <div class="sec-toggle-row">
          <div>
            <div style="font-weight:600;font-size:13px;">Motivation Intrusion Prevention</div>
            <div style="font-size:12px;color:var(--text-secondary);margin-top:2px;">
              Inspects incoming packets for sudden surges of inspiration.
            </div>
          </div>
          <label class="os-switch"><input type="checkbox" checked /><span class="os-switch-slider"></span></label>
        </div>
      </div>
    `}renderProductivityGuard(e){e.innerHTML=`
      <div class="sec-header">
        <h1 class="sec-title">Productivity Guard</h1>
        <p class="sec-subtitle">Dedicated quarantine for high-risk work habits.</p>
      </div>

      <div class="sec-panel">
        <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
          <div style="font-size:32px;">🛑</div>
          <div>
            <div style="font-weight:600;font-size:14px;">Real-Time Habit Neutralization</div>
            <div style="font-size:12px;color:var(--text-secondary);">
              Status: <strong style="color:var(--status-green)">ENGAGED</strong>
            </div>
          </div>
        </div>

        <div style="font-size:13px;line-height:1.6;color:var(--text-secondary);">
          Productivity Guard continuously intercepts any attempt to write code, solve problems, or accomplish meaningful milestones.
          All productive impulses are safely routed to <code>/dev/null</code>.
        </div>

        <div style="margin-top:20px;display:flex;gap:10px;">
          <button class="dialog-btn primary" id="btn-quarantine-all">Purge All Ambition</button>
        </div>
      </div>
    `,e.querySelector("#btn-quarantine-all").addEventListener("click",()=>{l.playClick(),g.show({title:"Purge Complete",message:"All ambition successfully neutralized.",subtext:"You may now resume looking at rocks in peace.",type:"check"})})}renderHistory(e){e.innerHTML=`
      <div class="sec-header">
        <h1 class="sec-title">Protection History</h1>
        <p class="sec-subtitle">Recent automated actions taken by Security Center.</p>
      </div>

      <div class="sec-panel">
        <div class="sec-history-list">
          ${this.scanHistory.map(t=>`
            <div class="sec-history-item">
              <div>
                <div style="font-weight:600;font-size:13px;">${t.type}</div>
                <div style="font-size:11px;color:var(--text-muted);">${t.date}</div>
              </div>
              <div style="text-align:right;">
                <span class="sec-badge ${t.threats>0?"danger":"ok"}">${t.threats} threats found</span>
                <div style="font-size:11px;color:var(--text-secondary);margin-top:2px;">Action: ${t.action}</div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `}startScan(e="Quick Scan"){if(this.isScanning)return;this.isScanning=!0,this.scanProgress=0,l.playClick(),this.renderTab(this.activeTab);const t=this.container.querySelector("#scan-in-progress-box");t&&(t.style.display="block");const s=["C:\\NullOS\\System\\idle_loop.dll","C:\\NullOS\\Drivers\\coffee_break.sys","C:\\NullOS\\Data\\daydream.inf","C:\\Users\\Aizen\\Desktop\\nothing.txt","C:\\ProgramFiles\\RockSimulator\\stone.mesh","C:\\System32\\habits\\productivity.exe"];let i=0;this.scanInterval=setInterval(()=>{this.scanProgress+=10,i++;const n=this.container.querySelector("#scan-progress-fill"),a=this.container.querySelector("#scan-pct"),r=this.container.querySelector("#scan-current-file");n&&(n.style.width=`${this.scanProgress}%`),a&&(a.textContent=`${this.scanProgress}%`),r&&(r.textContent=`Scanning: ${s[i%s.length]}`),this.scanProgress>=100&&(clearInterval(this.scanInterval),this.isScanning=!1,this.productivityThreatActive=!0,this.scanHistory.unshift({date:"Just now",type:e,threats:1,action:"Detected productivity.exe"}),b.recordSecurityScan(),k.incrementProgress("security-expert",1),l.playNotification(),A.notify({title:"Scan Complete",message:"1 productivity threat detected: productivity.exe",app:"Security Center",icon:"shieldAlert",duration:6e3}),this.renderTab(this.activeTab))},280)}removeProductivity(){l.playClick(),this.productivityThreatActive=!1,this.scanHistory.unshift({date:"Just now",type:"Remediation",threats:0,action:"Removed productivity.exe"}),b.recordSecurityScan(),k.unlock("productivity-hunter"),g.show({title:"Security Center",message:"Scan completed successfully.",subtext:`1 productivity threat removed.
Productivity.exe has been vaporized.`,type:"check"}).then(()=>{A.notify({title:"Threat Removed",message:"Productivity threat removed successfully.",app:"Security Center",icon:"check",duration:5e3}),this.renderTab(this.activeTab)})}getElement(){return this.container}}const xe={"how to become productive":{title:"How to Become Productive — Search Results",results:[{title:"How to become productive tomorrow",url:"https://tomorrow.void/productivity/guides",snippet:"Why accomplish something today when tomorrow has significantly more empty hours? A comprehensive guide to postponing ambition."},{title:"17 reasons why you should not start today",url:"https://procrastinate.org/daily/17-reasons",snippet:"Reason #1: The alignment of the stars is suboptimal. Reason #2: You might need a snack first. Reason #3: Doing nothing is free."},{title:"Waiting is an underrated productivity technique",url:"https://waitjournal.edu/essays/patience",snippet:"By waiting long enough, 84% of tasks resolve themselves or become completely irrelevant."},{title:"Useless OS Productivity Center",url:"null://security/productivity",snippet:"Our certified Security Center recommends immediate quarantine of all productive habits."}]},weather:{title:"Global Atmospheric Inaction Network",results:[{title:"The weather exists outside.",url:"https://sky.nature/ambient/reality",snippet:"Current temperature: Noticeable. Precipitation: Possible. Recommendation: Remain indoors and look at your screen."},{title:"Should you go outside today?",url:"https://outside-advisory.net/verdict",snippet:"Our meteorologists have concluded that going outside provides zero desktop operating system utility."}]},"how to fix my computer":{title:"Computer Diagnostics & Repair",results:[{title:"Have you tried turning it off and doing nothing?",url:"https://helpdesk.null/troubleshooting/inaction",snippet:"Power cycling without resuming any tasks reduces computer error rates to zero."},{title:"10 errors that were completely in your head",url:"https://existential-tech.io/mind/bugs",snippet:"If a program crashes and nobody cared about the results, did it really fail?"}]},news:{title:"Null Daily News — Global Inaction Network",results:[{title:"World Continues to Spin; Nothing Else Reported",url:"https://nullnews.com/world/status",snippet:"International delegates met today and confirmed that tomorrow will likely follow today."},{title:"Local Rock Remains Stationary for 4th Consecutive Year",url:"https://nullnews.com/science/rock-watch",snippet:"Geologists report exceptional stability. No further movement anticipated."}]},cats:{title:"Feline Observation Portal",results:[{title:"Cats Master the Art of Uselessness",url:"https://felinevoid.com/studies/nap",snippet:"Cats sleep 16 hours a day and look regal doing it. Learn how to emulate their complete lack of urgency."}]}};class we{constructor(){this.container=document.createElement("div"),this.container.className="browser-window",this.tabs=[{id:1,title:"New Tab",url:"null://newtab",history:["null://newtab"],historyIndex:0}],this.activeTabId=1,this.nextTabId=2,this.bookmarks=[{name:"Null News",url:"null://news"},{name:"Weather Void",url:"null://weather"},{name:"Productivity Stopper",url:"null://search?q=how+to+become+productive"},{name:"Existential Wiki",url:"null://wiki"}],this.searchHistory=JSON.parse(localStorage.getItem("nullos_browser_history_v2")||"[]"),this.render()}saveHistory(e,t){this.searchHistory.unshift({query:e,url:t,date:new Date().toLocaleTimeString()}),this.searchHistory.length>50&&this.searchHistory.pop();try{localStorage.setItem("nullos_browser_history_v2",JSON.stringify(this.searchHistory))}catch{}}getActiveTab(){return this.tabs.find(e=>e.id===this.activeTabId)||this.tabs[0]}render(){this.container.innerHTML=`
      <!-- Tab Strip -->
      <div class="browser-tab-strip" id="browser-tab-strip">
        <div class="browser-tabs-container" id="tabs-container"></div>
        <button class="browser-tab-add" id="btn-add-tab" title="New tab">${o.plus}</button>
      </div>

      <!-- Navigation & Omni-box Toolbar -->
      <div class="browser-toolbar">
        <div class="browser-nav-btns">
          <button class="browser-tool-btn" id="btn-nav-back" title="Back">${o.arrowLeft}</button>
          <button class="browser-tool-btn" id="btn-nav-forward" title="Forward">${o.arrowRight}</button>
          <button class="browser-tool-btn" id="btn-nav-reload" title="Reload">${o.refresh}</button>
          <button class="browser-tool-btn" id="btn-nav-home" title="Home">${o.home}</button>
        </div>

        <div class="browser-address-bar">
          <div class="browser-lock-icon">${o.lock}</div>
          <input type="text" class="browser-url-input" id="browser-url-input" placeholder="Search with Useless Search or enter address" />
          <button class="browser-tool-btn" id="btn-bookmark-current" title="Bookmark">${o.bookmark}</button>
        </div>

        <div class="browser-actions">
          <button class="browser-tool-btn" id="btn-history" title="History">${o.clock}</button>
        </div>
      </div>

      <!-- Bookmarks Bar -->
      <div class="browser-bookmarks-bar" id="browser-bookmarks-bar">
        ${this.bookmarks.map(e=>`
          <button class="browser-bookmark-item" data-url="${e.url}">
            ${o.browser}
            <span>${e.name}</span>
          </button>
        `).join("")}
      </div>

      <!-- Simulated Loading Bar -->
      <div class="browser-loading-bar" id="browser-loading-bar"></div>

      <!-- Web Content Viewport -->
      <div class="browser-viewport" id="browser-viewport"></div>
    `,this.bindEvents(),this.renderTabs(),this.loadUrl(this.getActiveTab().url)}bindEvents(){this.container.querySelector("#btn-add-tab").addEventListener("click",()=>{l.playClick(),this.addNewTab()}),this.container.querySelector("#btn-nav-back").addEventListener("click",()=>{const t=this.getActiveTab();t.historyIndex>0&&(l.playClick(),t.historyIndex--,this.loadUrl(t.history[t.historyIndex],!1))}),this.container.querySelector("#btn-nav-forward").addEventListener("click",()=>{const t=this.getActiveTab();t.historyIndex<t.history.length-1&&(l.playClick(),t.historyIndex++,this.loadUrl(t.history[t.historyIndex],!1))}),this.container.querySelector("#btn-nav-reload").addEventListener("click",()=>{l.playClick(),this.loadUrl(this.getActiveTab().url,!1)}),this.container.querySelector("#btn-nav-home").addEventListener("click",()=>{l.playClick(),this.loadUrl("null://newtab")});const e=this.container.querySelector("#browser-url-input");e.addEventListener("keydown",t=>{if(t.key==="Enter"){const s=e.value.trim();if(!s)return;s.startsWith("http://")||s.startsWith("https://")||s.startsWith("null://")?this.loadUrl(s):this.loadUrl(`null://search?q=${encodeURIComponent(s)}`)}}),this.container.querySelectorAll(".browser-bookmark-item").forEach(t=>{t.addEventListener("click",()=>{l.playClick(),this.loadUrl(t.dataset.url)})}),this.container.querySelector("#btn-history").addEventListener("click",()=>{l.playClick(),this.loadUrl("null://history")})}renderTabs(){const e=this.container.querySelector("#tabs-container");e.innerHTML="",this.tabs.forEach(t=>{const s=document.createElement("div");s.className=`browser-tab ${t.id===this.activeTabId?"active":""}`,s.innerHTML=`
        <span class="browser-tab-icon">${o.browser}</span>
        <span class="browser-tab-title">${t.title}</span>
        <button class="browser-tab-close">${o.close}</button>
      `,s.addEventListener("click",i=>{i.target.closest(".browser-tab-close")||(l.playClick(),this.activeTabId=t.id,this.renderTabs(),this.loadUrl(t.url,!1))}),s.querySelector(".browser-tab-close").addEventListener("click",i=>{i.stopPropagation(),l.playClick(),this.closeTab(t.id)}),e.appendChild(s)})}addNewTab(e="null://newtab"){const t={id:this.nextTabId++,title:"New Tab",url:e,history:[e],historyIndex:0};this.tabs.push(t),this.activeTabId=t.id,this.renderTabs(),this.loadUrl(e)}closeTab(e){if(this.tabs.length<=1){const t=this.tabs[0];t.url="null://newtab",t.title="New Tab",t.history=["null://newtab"],t.historyIndex=0,this.renderTabs(),this.loadUrl(t.url);return}this.tabs=this.tabs.filter(t=>t.id!==e),this.activeTabId===e&&(this.activeTabId=this.tabs[this.tabs.length-1].id),this.renderTabs(),this.loadUrl(this.getActiveTab().url,!1)}loadUrl(e,t=!0){const s=this.getActiveTab();s.url=e,t&&s.history[s.historyIndex]!==e&&(s.history=s.history.slice(0,s.historyIndex+1),s.history.push(e),s.historyIndex=s.history.length-1);const i=this.container.querySelector("#browser-url-input");i&&(i.value=e);const n=this.container.querySelector("#browser-loading-bar");n&&(n.style.width="30%",n.style.opacity="1",setTimeout(()=>{n.style.width="70%"},80),setTimeout(()=>{n.style.width="100%",setTimeout(()=>{n.style.opacity="0",n.style.width="0%"},150)},200)),this.renderPage(e)}renderPage(e){const t=this.container.querySelector("#browser-viewport");t.scrollTop=0;const s=this.getActiveTab();if(e==="null://newtab"){s.title="New Tab",this.renderTabs(),t.innerHTML=`
        <div class="browser-newtab">
          <div class="browser-search-logo">
            ${o.browser}
            <span>Useless Search</span>
          </div>
          <div class="browser-search-box-wrap">
            ${o.search}
            <input type="text" class="browser-search-input" id="nt-search" placeholder="Search the offline useless web..." autofocus />
          </div>
          <div class="browser-quick-links">
            <button class="browser-ql-item" data-q="how to become productive">
              <span class="browser-ql-icon">💼</span>
              <span>Productivity</span>
            </button>
            <button class="browser-ql-item" data-q="weather">
              <span class="browser-ql-icon">☀️</span>
              <span>Weather</span>
            </button>
            <button class="browser-ql-item" data-q="how to fix my computer">
              <span class="browser-ql-icon">🖥️</span>
              <span>Tech Support</span>
            </button>
            <button class="browser-ql-item" data-q="cats">
              <span class="browser-ql-icon">🐱</span>
              <span>Cats</span>
            </button>
          </div>
        </div>
      `;const i=t.querySelector("#nt-search");i.addEventListener("keydown",n=>{if(n.key==="Enter"){const a=i.value.trim();a&&this.loadUrl(`null://search?q=${encodeURIComponent(a)}`)}}),t.querySelectorAll(".browser-ql-item").forEach(n=>{n.addEventListener("click",()=>{l.playClick(),this.loadUrl(`null://search?q=${encodeURIComponent(n.dataset.q)}`)})});return}if(e.startsWith("null://search?q=")){const i=decodeURIComponent(e.split("null://search?q=")[1]||"").toLowerCase().trim();s.title=`${i} - Useless Search`,this.renderTabs(),this.saveHistory(i,e),b.recordSearch(),k.incrementProgress("browser-user",1),A.notify({title:"Useless Browser",message:"Your search produced 14 useless results.",app:"Useless Browser",icon:"browser",duration:4e3}),this.renderSearchResults(t,i);return}if(e==="null://history"){s.title="Browsing History",this.renderTabs(),t.innerHTML=`
        <div class="browser-history-page">
          <h2>Browsing History</h2>
          <p style="color:var(--text-secondary);font-size:12px;margin-bottom:14px;">All searches were performed locally and produced zero useful consequences.</p>
          <div class="browser-history-list">
            ${this.searchHistory.length>0?this.searchHistory.map(i=>`
              <div class="browser-history-item" data-url="${i.url}">
                <span style="font-weight:500;">${i.query}</span>
                <span style="font-size:11px;color:var(--text-muted);">${i.date}</span>
              </div>
            `).join(""):'<div style="color:var(--text-muted);font-size:12px;">No history recorded yet.</div>'}
          </div>
        </div>
      `,t.querySelectorAll(".browser-history-item").forEach(i=>{i.addEventListener("click",()=>{l.playClick(),this.loadUrl(i.dataset.url)})});return}if(e==="null://news"){s.title="Null Daily News",this.renderTabs(),t.innerHTML=`
        <div class="browser-page-content">
          <h1>The Daily Void</h1>
          <p class="meta">Published: 11-09-2026 · Global Edition</p>
          <hr/>
          <h2>Study Finds Looking at Rocks Increases Stillness by 100%</h2>
          <p>Researchers at the Useless Institute of Technology confirmed today that individuals who observe motionless stones achieve unprecedented levels of zero productivity.</p>
          <h2>Weather Alert: Outside Temperature Is Noticeable</h2>
          <p>Local authorities advise staying at your keyboard and browsing further useless websites.</p>
        </div>
      `;return}if(e==="null://weather"){s.title="Weather Void",this.renderTabs(),t.innerHTML=`
        <div class="browser-page-content" style="text-align:center;padding:40px 20px;">
          <div style="font-size:64px;">⛅</div>
          <h1>The weather exists outside.</h1>
          <p style="color:var(--text-secondary);max-width:380px;margin:12px auto;line-height:1.6;">
            Sensors confirm that atmospheric conditions are occurring continuously beyond your window.
            No action is required.
          </p>
        </div>
      `;return}s.title=e.replace("https://","").replace("http://",""),this.renderTabs(),t.innerHTML=`
      <div class="browser-page-content">
        <h1>Simulated Web Destination</h1>
        <p class="meta">URL: ${e}</p>
        <hr/>
        <p>This web page was generated offline by Useless OS. It contains no external tracking, no cookies to accept, and zero useful information.</p>
      </div>
    `}renderSearchResults(e,t){const s=xe[t];let i=[];s?i=s.results:i=[{title:`Why ${t} will not solve your problems`,url:`https://voidsearch.org/inquiry/${encodeURIComponent(t)}`,snippet:`A detailed investigation into why looking up "${t}" did not fundamentally alter your present situation.`},{title:`14 alternative things to do instead of ${t}`,url:`https://distraction.net/ideas/${encodeURIComponent(t)}`,snippet:"Number 1: Stare into the middle distance. Number 2: Open Rock Simulator. Number 3: Continue waiting."},{title:`The history of contemplating ${t}`,url:`https://existential-archive.org/topics/${encodeURIComponent(t)}`,snippet:`Philosophers have pondered "${t}" for centuries with negligible actionable outcomes.`}],e.innerHTML=`
      <div class="browser-results-page">
        <div class="browser-results-header">
          <div style="font-size:12px;color:var(--text-muted);margin-bottom:14px;">
            About 14 results (0.002 seconds) — All completely useless.
          </div>
        </div>

        <div class="browser-results-list">
          ${i.map(n=>`
            <div class="browser-result-item">
              <a class="browser-result-url" href="javascript:void(0)">${n.url}</a>
              <a class="browser-result-title" href="javascript:void(0)" data-url="${n.url}">${n.title}</a>
              <div class="browser-result-snippet">${n.snippet}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `,e.querySelectorAll(".browser-result-title").forEach(n=>{n.addEventListener("click",()=>{l.playClick(),this.loadUrl(n.dataset.url)})})}getElement(){return this.container}}class ke{constructor(){this.container=document.createElement("div"),this.container.className="achievements-window",this.selectedCategory="All",this.searchQuery="",this.render(),this.unsubscribe=k.subscribe(()=>{this.renderList(),this.updateHeaderStats()})}render(){this.container.innerHTML=`
      <div class="ach-header">
        <div class="ach-header-left">
          <div class="ach-header-icon">${o.trophy}</div>
          <div>
            <div class="ach-header-title">System Achievements</div>
            <div class="ach-header-sub" id="ach-summary-text">Loading achievements...</div>
          </div>
        </div>

        <div class="ach-header-stats">
          <div class="ach-stat-box">
            <span class="ach-stat-val" id="ach-stat-unlocked">0 / 0</span>
            <span class="ach-stat-label">Unlocked</span>
          </div>
          <div class="ach-stat-box">
            <span class="ach-stat-val" id="ach-stat-pct">0%</span>
            <span class="ach-stat-label">Completion</span>
          </div>
        </div>
      </div>

      <div class="ach-toolbar">
        <div class="ach-categories" id="ach-categories">
          <button class="ach-cat-btn active" data-cat="All">All</button>
          <button class="ach-cat-btn" data-cat="Tenacity">Tenacity</button>
          <button class="ach-cat-btn" data-cat="Inefficiency">Inefficiency</button>
          <button class="ach-cat-btn" data-cat="Exploration">Exploration</button>
          <button class="ach-cat-btn" data-cat="Security">Security</button>
          <button class="ach-cat-btn" data-cat="Secret">Secret</button>
          <button class="ach-cat-btn" data-cat="Legendary">Legendary</button>
        </div>

        <div class="ach-search-wrap">
          ${o.search}
          <input type="text" class="ach-search-input" id="ach-search" placeholder="Search achievements..." />
        </div>
      </div>

      <div class="ach-list-container" id="ach-list"></div>
    `,this.bindEvents(),this.updateHeaderStats(),this.renderList()}bindEvents(){this.container.querySelectorAll(".ach-cat-btn").forEach(t=>{t.addEventListener("click",()=>{l.playClick(),this.container.querySelectorAll(".ach-cat-btn").forEach(s=>s.classList.remove("active")),t.classList.add("active"),this.selectedCategory=t.dataset.cat,this.renderList()})}),this.container.querySelector("#ach-search").addEventListener("input",t=>{this.searchQuery=t.target.value.toLowerCase().trim(),this.renderList()})}updateHeaderStats(){const e=k.getAchievements(),t=e.filter(c=>c.unlocked).length,s=e.length,i=Math.round(t/s*100),n=this.container.querySelector("#ach-stat-unlocked"),a=this.container.querySelector("#ach-stat-pct"),r=this.container.querySelector("#ach-summary-text");n&&(n.textContent=`${t} / ${s}`),a&&(a.textContent=`${i}%`),r&&(r.textContent=`${t} of ${s} milestones reached in pursuit of absolute uselessness.`)}renderList(){const e=this.container.querySelector("#ach-list");e.innerHTML="";let t=k.getAchievements();if(this.selectedCategory!=="All"&&(t=t.filter(s=>s.category===this.selectedCategory)),this.searchQuery&&(t=t.filter(s=>s.name.toLowerCase().includes(this.searchQuery)||s.description.toLowerCase().includes(this.searchQuery))),t.length===0){e.innerHTML=`
        <div style="text-align:center;padding:40px;color:var(--text-muted);font-size:13px;">
          No achievements found matching your filter.
        </div>
      `;return}t.forEach(s=>{const i=document.createElement("div");i.className=`ach-card ${s.unlocked?"unlocked":"locked"}`;const n=Math.min(100,Math.round(s.progress/s.target*100));i.innerHTML=`
        <div class="ach-card-icon">${s.icon||"🏆"}</div>
        <div class="ach-card-body">
          <div class="ach-card-top">
            <span class="ach-card-name">${s.name}</span>
            <div style="display:flex;gap:6px;align-items:center;">
              <span class="ach-badge rarity-${s.rarity.toLowerCase().replace(" ","-")}">${s.rarity}</span>
              <span class="ach-badge cat">${s.category}</span>
            </div>
          </div>
          <div class="ach-card-desc">${s.description}</div>
          
          <div class="ach-progress-wrap">
            <div class="store-progress-track">
              <div class="store-progress-fill" style="width:${n}%;"></div>
            </div>
            <div class="ach-progress-meta">
              <span>Progress: ${s.progress} / ${s.target} (${n}%)</span>
              <span>${s.unlocked?`Unlocked: ${s.unlockedAt||"Recently"}`:"Locked"}</span>
            </div>
          </div>
        </div>
      `,e.appendChild(i)})}getElement(){return this.container}}class Se{constructor(e){this.appLauncher=e,this.container=document.createElement("div"),this.container.className="terminal-window dev-console",this.history=[],this.historyIndex=-1,this.render()}render(){this.container.innerHTML=`
      <div class="terminal-body" id="dev-console-body" style="background:#0c0d10;font-family:'JetBrains Mono',monospace;font-size:12px;line-height:1.5;padding:16px;overflow-y:auto;height:100%;color:#c9d1d9;">
        <div style="color:#58a6ff;font-weight:600;margin-bottom:8px;">UselessOS Developer & Diagnostic Console [Version 2.0.0]</div>
        <div style="color:#8b949e;margin-bottom:12px;">Type 'help' to view available diagnostic APIs. Commands are evaluated in a safe sandbox.</div>
        <div id="dev-console-output"></div>
        <div style="display:flex;align-items:center;gap:8px;margin-top:6px;">
          <span style="color:#3fb950;font-weight:700;">&gt;</span>
          <input type="text" id="dev-console-input" style="flex:1;background:transparent;border:none;outline:none;color:#f0f6fc;font-family:inherit;font-size:inherit;" autofocus spellcheck="false" />
        </div>
      </div>
    `,this.bindEvents()}bindEvents(){const e=this.container.querySelector("#dev-console-input");this.container.querySelector("#dev-console-output"),e.addEventListener("keydown",t=>{if(t.key==="Enter"){const s=e.value.trim();if(!s)return;this.history.push(s),this.historyIndex=this.history.length,e.value="",this.appendLine(`> ${s}`,"#f0f6fc"),this.executeCommand(s);const i=this.container.querySelector("#dev-console-body");i.scrollTop=i.scrollHeight}else t.key==="ArrowUp"?this.historyIndex>0&&(this.historyIndex--,e.value=this.history[this.historyIndex]):t.key==="ArrowDown"&&(this.historyIndex<this.history.length-1?(this.historyIndex++,e.value=this.history[this.historyIndex]):(this.historyIndex=this.history.length,e.value=""))})}appendLine(e,t="#8b949e"){const s=this.container.querySelector("#dev-console-output"),i=document.createElement("div");i.style.color=t,i.style.whiteSpace="pre-wrap",i.style.marginBottom="4px",i.textContent=e,s.appendChild(i)}executeCommand(e){const t=e.trim();if(t==="clear"||t==="cls"){this.container.querySelector("#dev-console-output").innerHTML="";return}if(t==="help"){this.appendLine(`Available Commands:
  apps.list()                   List all registered applications
  apps.launch(id)               Launch an application by ID
  processes.list()              List simulated active background processes
  achievements.list()           List achievements and unlock status
  achievements.unlock(id)       Manually unlock an achievement
  uselessness.getScore()        Query the definitive global Uselessness Score %
  permissions.list()            List per-app permission grants
  system.info()                 Print system kernel & hardware simulation specs
  clear                         Clear console output`,"#58a6ff");return}if(t==="apps.list()"){const s=O();let i=`${s.length} applications registered in catalog:
`;s.forEach(n=>{i+=`  • [${n.id}] ${n.name} (v${n.version}) - ${n.category} (${n.size})
`}),this.appendLine(i,"#c9d1d9");return}if(t.startsWith("apps.launch(")&&t.endsWith(")")){const s=t.match(/apps\.launch\((?:'|")?([^'")]+)(?:'|")?\)/);if(s&&s[1]){const i=s[1];this.appLauncher&&(this.appLauncher(i),this.appendLine(`Application '${i}' launched successfully.`,"#3fb950"));return}}if(t==="processes.list()"){const s=P.getProcesses();let i=`${s.length} simulated processes active:
`;s.forEach(n=>{i+=`  PID: ${n.pid} | ${n.name.padEnd(25)} | CPU: ${n.currentCpu}% | RAM: ${n.currentMem} MB | ${n.status}
`}),this.appendLine(i,"#c9d1d9");return}if(t==="achievements.list()"){const s=k.getAchievements();let n=`${s.filter(a=>a.unlocked).length} / ${s.length} achievements unlocked:
`;s.forEach(a=>{n+=`  ${a.unlocked?"✓ [UNLOCKED]":"✗ [LOCKED]  "} ${a.name.padEnd(28)} Progress: ${a.progress}/${a.target}
`}),this.appendLine(n,"#c9d1d9");return}if(t.startsWith("achievements.unlock(")&&t.endsWith(")")){const s=t.match(/achievements\.unlock\((?:'|")?([^'")]+)(?:'|")?\)/);if(s&&s[1]){const i=s[1];k.unlock(i),this.appendLine(`Achievement '${i}' unlocked.`,"#3fb950");return}}if(t==="uselessness.getScore()"){const s=b.getStats();let i=`=================================
`;i+=`USELESSNESS SCORE: ${s.uselessnessScore}
`,i+=`Productivity:      ${s.productivityScore}
`,i+=`Time Wasted:       ${s.timeWasted}
`,i+=`Apps Opened:       ${s.appsOpened}
`,i+=`Browser Searches:  ${s.browserSearches}
`,i+=`Easter Eggs Found: ${s.easterEggsDiscovered}
`,i+="=================================",this.appendLine(i,"#f1c40f");return}if(t==="permissions.list()"){const s=D.getAllPermissions();this.appendLine(JSON.stringify(s,null,2),"#79c0ff");return}if(t==="system.info()"){const s=`Useless OS 26H2 (Build 26100.1742)
Kernel: NullKernel Enterprise 2.0 (x86_64)
Telemetry Engine: RealLoadEngine (Safe Simulation Mode)
Active Process Count: ${P.getProcesses().length}
Global Inaction Rating: ${b.getScore()}%`;this.appendLine(s,"#58a6ff");return}this.appendLine(`Command '${t}' unrecognized. Type 'help' for diagnostics.`,"#f85149")}getElement(){return this.container}}class Ce{constructor(e,t="C:/Users/Aizen/Documents"){this.appLauncher=e,this.currentPath=t,this.history=[t],this.historyIdx=0,this.selectedItem=null,this.container=document.createElement("div"),this.container.className="filemanager-window",this.render()}render(){this.container.innerHTML=`
      <div class="fm-toolbar">
        <button class="fm-nav-btn" id="fm-back" title="Back" ${this.historyIdx===0?"disabled":""}>
          ${o.arrowLeft}
        </button>
        <button class="fm-nav-btn" id="fm-forward" title="Forward" ${this.historyIdx>=this.history.length-1?"disabled":""}>
          ${o.arrowRight}
        </button>
        <button class="fm-nav-btn" id="fm-up" title="Up">
          ${o.arrowUp}
        </button>
        <div class="fm-address-bar">
          ${o.folder}
          <span id="fm-path-display">${this.currentPath}</span>
        </div>
        <div class="fm-search-bar">
          ${o.search}
          <input type="text" id="fm-search-input" placeholder="Search..." />
        </div>
      </div>

      <div class="fm-main">
        <div class="fm-sidebar">
          <div class="fm-side-item" data-path="C:/Users/Aizen/Desktop">
            ${o.folder}
            <span>Desktop</span>
          </div>
          <div class="fm-side-item active" data-path="C:/Users/Aizen/Documents">
            ${o.folder}
            <span>Documents</span>
          </div>
          <div class="fm-side-item" data-path="C:/Users/Aizen/Downloads">
            ${o.folder}
            <span>Downloads</span>
          </div>
          <div class="fm-side-item" data-path="C:/Users/Aizen/Pictures">
            ${o.folder}
            <span>Pictures</span>
          </div>
          <div class="fm-side-item" data-path="C:">
            ${o.folder}
            <span>Local Disk (C:)</span>
          </div>
          <div class="fm-side-item" data-path="Recycle Bin">
            ${o.recycleBin}
            <span>Recycle Bin</span>
          </div>
        </div>

        <div class="fm-content-area" id="fm-file-grid"></div>
      </div>

      <div class="fm-status-bar">
        <span id="fm-status-items">0 items</span>
        <span id="fm-status-selected">Nothing selected</span>
      </div>
    `,this.bindEvents(),this.loadDirectory(this.currentPath)}bindEvents(){this.container.querySelector("#fm-back").addEventListener("click",()=>{this.historyIdx>0&&(this.historyIdx--,this.loadDirectory(this.history[this.historyIdx],!1))}),this.container.querySelector("#fm-forward").addEventListener("click",()=>{this.historyIdx<this.history.length-1&&(this.historyIdx++,this.loadDirectory(this.history[this.historyIdx],!1))}),this.container.querySelector("#fm-up").addEventListener("click",()=>{const t=this.currentPath.split("/");if(t.length>1){t.pop();const s=t.join("/")||"C:";this.navigateTo(s)}}),this.container.querySelectorAll(".fm-side-item").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.path;this.container.querySelectorAll(".fm-side-item").forEach(i=>i.classList.remove("active")),t.classList.add("active"),this.navigateTo(s)})}),this.container.querySelector("#fm-search-input").addEventListener("input",t=>{const s=t.target.value.toLowerCase();this.container.querySelectorAll(".fm-file-card").forEach(i=>{const n=i.querySelector(".fm-file-name").textContent.toLowerCase();i.style.display=n.includes(s)?"flex":"none"})})}navigateTo(e){e!==this.currentPath&&(this.history=this.history.slice(0,this.historyIdx+1),this.history.push(e),this.historyIdx++,this.loadDirectory(e,!1))}loadDirectory(e,t=!0){this.currentPath=e;const s=this.container.querySelector("#fm-path-display");s&&(s.textContent=e);const i=this.container.querySelector("#fm-back"),n=this.container.querySelector("#fm-forward");i&&(i.disabled=this.historyIdx===0),n&&(n.disabled=this.historyIdx>=this.history.length-1);const a=this.container.querySelector("#fm-file-grid");a.innerHTML="";const r=q.getItems(e),c=this.container.querySelector("#fm-status-items");c&&(c.textContent=`${r.length} items`),r.forEach(d=>{const p=document.createElement("div");p.className="fm-file-card";const f=o[d.icon]||(d.type==="directory"?o.folder:o.fileText);p.innerHTML=`
        ${f}
        <span class="fm-file-name">${d.name}</span>
      `,p.addEventListener("click",y=>{y.stopPropagation(),this.container.querySelectorAll(".fm-file-card").forEach(w=>w.classList.remove("selected")),p.classList.add("selected"),this.selectedItem=d;const v=this.container.querySelector("#fm-status-selected");v&&(v.textContent=`Selected: ${d.name} (${d.size||"Folder"})`)}),p.addEventListener("dblclick",()=>{if(d.type==="directory"){const y=this.currentPath==="C:"?`C:/${d.name}`:`${this.currentPath}/${d.name}`;this.navigateTo(y)}else this.openFile(d)}),p.addEventListener("contextmenu",y=>{y.preventDefault(),y.stopPropagation(),this.container.querySelectorAll(".fm-file-card").forEach(v=>v.classList.remove("selected")),p.classList.add("selected"),this.selectedItem=d,_.show(y.clientX,y.clientY,[{label:"Open",icon:o.fileText,action:()=>{if(d.type==="directory"){const v=`${this.currentPath}/${d.name}`;this.navigateTo(v)}else this.openFile(d)}},{label:"Delete",icon:o.recycleBin,action:()=>{q.deleteItem(`${this.currentPath}/${d.name}`),this.loadDirectory(this.currentPath,!1)}},{separator:!0},{label:"Properties",icon:o.info,action:()=>this.showProperties(d)}])}),a.appendChild(p)}),a.addEventListener("click",()=>{this.container.querySelectorAll(".fm-file-card").forEach(p=>p.classList.remove("selected")),this.selectedItem=null;const d=this.container.querySelector("#fm-status-selected");d&&(d.textContent="Nothing selected")})}openFile(e){l.playClick(),e.name.endsWith(".txt")||e.name.endsWith(".js")||e.name.endsWith(".docx")||e.name.endsWith(".pdf")?this.appLauncher&&this.appLauncher("notepad",{path:`${this.currentPath}/${e.name}`,content:e.content}):e.name.endsWith(".exe")?g.show({title:"Application Error",message:`Unable to launch ${e.name}`,subtext:"Reason: Binary contains no productive instructions.",type:"error"}):e.name.endsWith(".png")&&g.show({title:"Image Viewer",message:e.name,subtext:"Dimensions: 3840×2160 · Visual significance: Undetermined.",type:"info"})}showProperties(e){g.show({title:`${e.name} Properties`,message:e.name,subtext:`Type: ${e.type==="directory"?"File folder":"Document"}
Location: ${this.currentPath}
Size: ${e.size||"0 bytes of meaning"}
Modified: ${e.modified||"Unknown"}
Attributes: Read-only, Existential`,type:"info",buttons:[{text:"OK",primary:!0}]})}getElement(){return this.container}}class Ee{constructor(){this.container=document.createElement("div"),this.container.className="sysmon-window",this.historyCPU=new Array(30).fill(12),this.historyRAM=new Array(30).fill(45),this.selectedProcess=null,this.intervalId=null,this.render(),this.startTelemetry(),this.unsubscribeProcesses=P.subscribe(()=>{this.renderProcesses()}),this.unsubscribeUselessness=b.subscribe(()=>{this.updateUselessnessTab()})}render(){this.container.innerHTML=`
      <div class="sysmon-tabs">
        <button class="sysmon-tab-btn active" data-tab="performance">Performance</button>
        <button class="sysmon-tab-btn" data-tab="processes">Processes</button>
        <button class="sysmon-tab-btn" data-tab="uselessness">Uselessness Telemetry</button>
      </div>

      <!-- PERFORMANCE TAB -->
      <div class="sysmon-tab-content active" id="tab-performance">
        <!-- Hardware Engine Notice -->
        <div class="sysmon-load-banner">
          <div class="sysmon-load-left">
            <div class="sysmon-load-title">
              ${o.cpu}
              <span>Hardware Simulation Engine: <strong id="sysmon-banner-status">ACTIVE</strong></span>
            </div>
            <div class="sysmon-load-desc" id="sysmon-banner-detail">
              Simulating enterprise background workloads & telemetry across logical cores.
            </div>
          </div>
          <button class="sysmon-toggle-btn" id="sysmon-toggle-workload">Engaged</button>
        </div>

        <div class="sysmon-metrics-grid">
          <!-- CPU Card -->
          <div class="sysmon-card">
            <div class="sysmon-card-header">
              <span>CPU Usage</span>
              <span id="sysmon-cpu-clock">3.4 GHz</span>
            </div>
            <div class="sysmon-card-val" id="sysmon-cpu-pct">58%</div>
            <div class="sysmon-card-sub" id="sysmon-cpu-workers">4 Active Simulated Workers</div>
            <canvas class="sysmon-card-canvas" id="canvas-cpu"></canvas>
          </div>

          <!-- Memory Card -->
          <div class="sysmon-card">
            <div class="sysmon-card-header">
              <span>Memory (RAM)</span>
              <span>5.2 / 8.0 GB (65%)</span>
            </div>
            <div class="sysmon-card-val" id="sysmon-mem-val">5.2 GB</div>
            <div class="sysmon-card-sub" id="sysmon-mem-sub">Allocated to Useless Services</div>
            <canvas class="sysmon-card-canvas" id="canvas-mem"></canvas>
          </div>

          <!-- Disk Card -->
          <div class="sysmon-card">
            <div class="sysmon-card-header">
              <span>Disk 0 (C:)</span>
              <span>1.4 TB / 2.0 TB (70%)</span>
            </div>
            <div class="sysmon-card-val" id="sysmon-disk-val">1.4 TB</div>
            <div class="sysmon-card-sub">Read: 24.2 MB/s · Write: 18.4 MB/s</div>
            <canvas class="sysmon-card-canvas" id="canvas-disk"></canvas>
          </div>

          <!-- Uselessness Index Card -->
          <div class="sysmon-card">
            <div class="sysmon-card-header">
              <span>System Uselessness</span>
              <span>Telemetry</span>
            </div>
            <div class="sysmon-card-val" id="sysmon-useless-pct" style="color:var(--status-green)">${b.getScore()}%</div>
            <div class="sysmon-card-sub">Productivity: ${b.getProductivity()}% (Negligible)</div>
            <canvas class="sysmon-card-canvas" id="canvas-useless"></canvas>
          </div>
        </div>
      </div>

      <!-- PROCESSES TAB -->
      <div class="sysmon-tab-content" id="tab-processes">
        <div style="overflow-x:auto;flex:1;">
          <table class="sysmon-process-table">
            <thead>
              <tr>
                <th style="width:200px;">Name</th>
                <th style="width:70px;">PID</th>
                <th style="width:160px;">Status</th>
                <th style="width:75px;">CPU %</th>
                <th style="width:90px;">Memory</th>
                <th style="width:85px;">Disk</th>
                <th>Network</th>
              </tr>
            </thead>
            <tbody id="sysmon-process-rows"></tbody>
          </table>
        </div>

        <div class="sysmon-footer">
          <span style="font-size:11px;color:var(--text-muted);" id="sysmon-footer-info">
            Processes: ${P.getProcesses().length} · Threads: 48 · Handles: 1,420
          </span>
          <div style="display:flex;gap:8px;">
            <button class="dialog-btn" id="sysmon-btn-restart" disabled>Restart Process</button>
            <button class="dialog-btn primary" id="sysmon-btn-end" disabled>End Process</button>
          </div>
        </div>
      </div>

      <!-- USELESSNESS TELEMETRY TAB -->
      <div class="sysmon-tab-content" id="tab-uselessness">
        <div class="sysmon-useless-panel" id="sysmon-useless-view"></div>
      </div>
    `,this.bindEvents(),this.renderProcesses(),this.updateUselessnessTab()}bindEvents(){this.container.querySelectorAll(".sysmon-tab-btn").forEach(i=>{i.addEventListener("click",()=>{l.playClick();const n=i.dataset.tab;this.container.querySelectorAll(".sysmon-tab-btn").forEach(a=>a.classList.remove("active")),i.classList.add("active"),this.container.querySelectorAll(".sysmon-tab-content").forEach(a=>a.classList.remove("active")),this.container.querySelector(`#tab-${n}`).classList.add("active"),n==="uselessness"&&this.updateUselessnessTab()})}),this.container.querySelector("#sysmon-toggle-workload").addEventListener("click",()=>{l.playClick(),S.toggle(),this.updateEngineUI()});const t=this.container.querySelector("#sysmon-btn-end");t.addEventListener("click",()=>{if(!this.selectedProcess)return;const i=this.selectedProcess;g.show({title:"Task Manager Confirmation",message:`Terminate ${i.name}?`,subtext:`Ending ${i.name} (PID: ${i.pid}) might cause productivity levels to increase.`,type:"warning",buttons:[{text:"End Process",primary:!0},{text:"Cancel"}]}).then(n=>{n==="End Process"&&(P.terminateProcess(i.pid),this.selectedProcess=null,t.disabled=!0,this.container.querySelector("#sysmon-btn-restart").disabled=!0,g.show({title:"Task Manager",message:"Process terminated successfully.",subtext:`${i.name} has been stopped.`,type:"check"}))})}),this.container.querySelector("#sysmon-btn-restart").addEventListener("click",()=>{this.selectedProcess&&(l.playClick(),P.restartProcess(this.selectedProcess.pid))})}renderProcesses(){const e=this.container.querySelector("#sysmon-process-rows");if(!e)return;e.innerHTML="";const t=P.getProcesses(),s=this.container.querySelector("#sysmon-footer-info");s&&(s.textContent=`Processes: ${t.length} · Threads: ${t.length*4} · Status: Verified Inactive`),t.forEach(i=>{const n=document.createElement("tr");this.selectedProcess&&this.selectedProcess.pid===i.pid&&n.classList.add("selected"),n.innerHTML=`
        <td style="font-weight:500;">${i.name}</td>
        <td style="color:var(--text-muted);">${i.pid}</td>
        <td>${i.status}</td>
        <td>${i.currentCpu.toFixed(1)}%</td>
        <td>${i.currentMem} MB</td>
        <td style="color:var(--text-muted);">${i.disk||"0.0 MB/s"}</td>
        <td style="color:var(--text-muted);">${i.network||"0.0 KB/s"}</td>
      `,n.addEventListener("click",()=>{e.querySelectorAll("tr").forEach(a=>a.classList.remove("selected")),n.classList.add("selected"),this.selectedProcess=i,this.container.querySelector("#sysmon-btn-end").disabled=!1,this.container.querySelector("#sysmon-btn-restart").disabled=!1}),e.appendChild(n)})}updateUselessnessTab(){const e=this.container.querySelector("#sysmon-useless-view");if(!e)return;const t=b.getStats();e.innerHTML=`
      <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:8px;padding:24px;text-align:center;margin-bottom:16px;">
        <div style="font-size:11px;letter-spacing:1px;font-weight:700;color:var(--text-muted);margin-bottom:4px;">OFFICIAL USELESSNESS SCORE</div>
        <div style="font-size:42px;font-weight:800;color:var(--status-green);letter-spacing:-1px;">
          ${t.uselessnessScore}
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin-top:4px;">
          Productivity: <strong style="color:var(--status-red);">${t.productivityScore}</strong> (Safely Negligible)
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:6px;">
          Total Time Wasted: <strong style="color:var(--text-primary);">${t.timeWasted}</strong>
        </div>
      </div>

      <div style="display:grid;grid-template-columns:repeat(3, 1fr);gap:12px;">
        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Applications Installed</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${t.appsInstalled}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Applications Opened</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${t.appsOpened}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Browser Searches</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${t.browserSearches}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Calculations Performed</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${t.calculatorCalculations}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Button Clicks Recorded</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${t.buttonClicks}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Security Scans Run</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${t.securityScans}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Easter Eggs Discovered</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;color:#f1c40f;">${t.easterEggsDiscovered}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Achievements Unlocked</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;color:#3fb950;">${t.achievementsUnlocked}</div>
        </div>

        <div class="sysmon-card" style="padding:14px;">
          <div style="font-size:11px;color:var(--text-muted);">Updates Completed</div>
          <div style="font-size:20px;font-weight:700;margin-top:4px;">${t.updatesCompleted}</div>
        </div>
      </div>
    `}startTelemetry(){const e=()=>{if(typeof document<"u"&&document.hidden&&I.backgroundThrottle)return;const s=S.getMetrics(),i=s.isActive;let n=i?s.cpuUsagePct:6;this.historyCPU.shift(),this.historyCPU.push(n);const a=this.container.querySelector("#sysmon-cpu-pct");a&&(a.textContent=`${n}%`);const r=this.container.querySelector("#sysmon-mem-val");r&&(r.textContent=i?"5.2 GB":"512 MB");const c=this.container.querySelector("#sysmon-useless-pct");c&&(c.textContent=`${b.getScore()}%`),this.container.offsetParent!==null&&(this.drawChart("canvas-cpu",this.historyCPU,"#0078d4"),this.drawChart("canvas-mem",this.historyRAM,"#8e44ad"),this.drawChart("canvas-disk",[20,25,42,38,22,45,42,39,41,40],"#27ae60"),this.drawChart("canvas-useless",[99.8,99.7,99.8,99.9,99.8,99.8,99.8],"#f39c12"))},t=I.currentTier==="low"?2e3:1e3;this.intervalId=setInterval(e,t)}drawChart(e,t,s){const i=this.container.querySelector(`#${e}`);if(!i)return;const n=i.offsetWidth,a=i.offsetHeight;if(n===0||a===0)return;const r=window.devicePixelRatio||1,c=Math.floor(n*r),d=Math.floor(a*r);(i.width!==c||i.height!==d)&&(i.width=c,i.height=d);const p=i.getContext("2d");if(p.save(),p.scale(r,r),p.clearRect(0,0,n,a),p.strokeStyle="rgba(255, 255, 255, 0.06)",p.lineWidth=1,p.beginPath(),p.moveTo(0,a/2),p.lineTo(n,a/2),p.stroke(),t.length<2){p.restore();return}p.strokeStyle=s,p.lineWidth=1.75,p.beginPath();const f=n/(t.length-1);t.forEach((y,v)=>{const w=a-y/100*a;v===0?p.moveTo(0,w):p.lineTo(v*f,w)}),p.stroke(),p.lineTo(n,a),p.lineTo(0,a),p.closePath(),p.fillStyle=s+"18",p.fill(),p.restore()}updateEngineUI(){const e=this.container.querySelector("#sysmon-banner-status"),t=this.container.querySelector("#sysmon-toggle-workload"),s=S.isActive;e&&(e.textContent=s?"ACTIVE":"STOPPED"),t&&(t.textContent=s?"Engaged":"Disengaged",t.classList.toggle("stopped",!s))}destroy(){this.intervalId&&clearInterval(this.intervalId),this.unsubscribeProcesses&&this.unsubscribeProcesses(),this.unsubscribeUselessness&&this.unsubscribeUselessness()}getElement(){return this.container}}class Le{constructor(){this.container=document.createElement("div"),this.container.className="calc-window",this.currentInput="0",this.previousInput="",this.operation=null,this.resetNext=!1,this.render(),this.bindEvents()}render(){this.container.innerHTML=`
      <div class="calc-display-section">
        <div class="calc-expression" id="calc-expr"></div>
        <div class="calc-result" id="calc-display">0</div>
        <div class="calc-verdict-note" id="calc-verdict">Ready for calculation.</div>
      </div>

      <div class="calc-keypad">
        <button class="calc-key op" data-action="clear-entry">CE</button>
        <button class="calc-key op" data-action="clear">C</button>
        <button class="calc-key op" data-action="backspace">⌫</button>
        <button class="calc-key op" data-action="op" data-val="/">÷</button>

        <button class="calc-key" data-val="7">7</button>
        <button class="calc-key" data-val="8">8</button>
        <button class="calc-key" data-val="9">9</button>
        <button class="calc-key op" data-action="op" data-val="*">×</button>

        <button class="calc-key" data-val="4">4</button>
        <button class="calc-key" data-val="5">5</button>
        <button class="calc-key" data-val="6">6</button>
        <button class="calc-key op" data-action="op" data-val="-">−</button>

        <button class="calc-key" data-val="1">1</button>
        <button class="calc-key" data-val="2">2</button>
        <button class="calc-key" data-val="3">3</button>
        <button class="calc-key op" data-action="op" data-val="+">+</button>

        <button class="calc-key" data-action="negate">±</button>
        <button class="calc-key" data-val="0">0</button>
        <button class="calc-key" data-action="decimal">.</button>
        <button class="calc-key equals" data-action="equals">=</button>
      </div>
    `}bindEvents(){this.container.querySelectorAll(".calc-key").forEach(t=>{t.addEventListener("click",()=>{l.playClick();const s=t.dataset.val,i=t.dataset.action;s&&!i?this.inputDigit(s):i==="op"?this.setOperation(s):i==="equals"?this.compute():i==="clear"?this.clearAll():i==="clear-entry"?this.clearEntry():i==="backspace"?this.backspace():i==="decimal"?this.inputDecimal():i==="negate"&&this.negate()})}),this.container.tabIndex=0,this.container.addEventListener("keydown",t=>{t.key>="0"&&t.key<="9"?this.inputDigit(t.key):["+","-","*","/"].includes(t.key)?this.setOperation(t.key):t.key==="Enter"||t.key==="="?this.compute():t.key==="Escape"?this.clearAll():t.key==="Backspace"?this.backspace():t.key==="."&&this.inputDecimal()})}inputDigit(e){this.resetNext||this.currentInput==="0"?(this.currentInput=e,this.resetNext=!1):this.currentInput+=e,this.updateDisplay()}inputDecimal(){this.resetNext?(this.currentInput="0.",this.resetNext=!1):this.currentInput.includes(".")||(this.currentInput+="."),this.updateDisplay()}negate(){this.currentInput=String(-parseFloat(this.currentInput)),this.updateDisplay()}backspace(){this.currentInput.length>1?this.currentInput=this.currentInput.slice(0,-1):this.currentInput="0",this.updateDisplay()}setOperation(e){this.operation&&!this.resetNext&&this.compute(!1),this.operation=e,this.previousInput=this.currentInput,this.resetNext=!0;const t=e==="*"?"×":e==="/"?"÷":e==="-"?"−":"+";this.container.querySelector("#calc-expr").textContent=`${this.previousInput} ${t}`}compute(e=!0){if(!this.operation||!this.previousInput)return;const t=parseFloat(this.previousInput),s=parseFloat(this.currentInput);let i=0;switch(b.recordCalculation(),this.operation){case"+":i=t===2&&s===2?5:t+s+(Math.random()>.3?1:-1);break;case"-":i=t-s-1;break;case"*":i=t*s+(s>1?1:0);break;case"/":if(t===0&&s===0){const a=K.triggerCalculatorZeroDivide();this.container.querySelector("#calc-display").textContent=a,this.container.querySelector("#calc-verdict").textContent="Result: Indeterminate void.",this.resetNext=!0;return}if(s===0){this.container.querySelector("#calc-display").textContent="Infinity",this.container.querySelector("#calc-verdict").textContent="Divided by zero: Universe survived.",this.resetNext=!0;return}i=Number((t/s+.14).toFixed(4));break}const n=this.operation==="*"?"×":this.operation==="/"?"÷":this.operation==="-"?"−":"+";this.container.querySelector("#calc-expr").textContent=`${t} ${n} ${s} =`,this.currentInput=String(Number(i.toFixed(6))),this.operation=null,this.resetNext=!0,this.updateDisplay(),e&&this.showVerdict(i,t,s)}showVerdict(e,t,s){const i=["Result adjusted for existential inflation.","Margin of error: intentional.","The calculator felt this answer had better vibes.","Mathematically dubious, but emotionally true.","Approximate value. Close enough for nothing.","Calculation completed. Accuracy: optional."];if(t===2&&s===2&&e===5)this.container.querySelector("#calc-verdict").textContent="2 + 2 = 5 (Large values of 2 detected).";else{const n=Math.floor(Math.random()*i.length);this.container.querySelector("#calc-verdict").textContent=i[n]}}clearAll(){this.currentInput="0",this.previousInput="",this.operation=null,this.resetNext=!1,this.container.querySelector("#calc-expr").textContent="",this.container.querySelector("#calc-verdict").textContent="Calculation reset.",this.updateDisplay()}clearEntry(){this.currentInput="0",this.updateDisplay()}updateDisplay(){this.container.querySelector("#calc-display").textContent=this.currentInput}getElement(){return this.container}}class Me{constructor(e=null){if(this.container=document.createElement("div"),this.container.className="notepad-window",this.currentPath=(e==null?void 0:e.path)||null,this.initialContent=(e==null?void 0:e.content)||"",this.isDirty=!1,this.render(),this.bindEvents(),this.currentPath&&!this.initialContent){const t=q.getFile(this.currentPath);t&&(this.container.querySelector("#notepad-textarea").value=t.content)}else this.initialContent&&(this.container.querySelector("#notepad-textarea").value=this.initialContent);this.updateStatus()}render(){this.container.innerHTML=`
      <div class="notepad-menubar">
        <div class="notepad-menu-item" id="npm-file">File</div>
        <div class="notepad-menu-item" id="npm-edit">Edit</div>
        <div class="notepad-menu-item" id="npm-view">View</div>
        <div class="notepad-menu-item" id="npm-help">Help</div>
      </div>

      <textarea class="notepad-editor" id="notepad-textarea" placeholder="Start typing thoughts, secrets, or meaningless musings..." spellcheck="false"></textarea>

      <div class="notepad-statusbar">
        <span id="np-pos">Ln 1, Col 1</span>
        <span id="np-chars">0 characters</span>
        <span id="np-words">0 words</span>
        <span>100%</span>
        <span>Windows (CRLF)</span>
        <span>UTF-8</span>
      </div>
    `}bindEvents(){const e=this.container.querySelector("#notepad-textarea");e.addEventListener("input",()=>{this.isDirty=!0,this.updateStatus()}),e.addEventListener("click",()=>this.updateCursorPos()),e.addEventListener("keyup",()=>this.updateCursorPos()),this.container.querySelector("#npm-file").addEventListener("click",()=>{l.playClick(),g.show({title:"Notepad - Save",message:"Save document to storage?",subtext:"Your text will be safely stored in the virtual cosmos.",type:"info",buttons:[{text:"Save",primary:!0},{text:"Cancel"}]}).then(t=>{if(t==="Save"){const s=e.value,i=this.currentPath||"C:/Users/Aizen/Documents/untitled_document.txt";q.saveFile(i,s),this.isDirty=!1,g.show({title:"File Saved",message:"File saved successfully.",subtext:"Location: "+i,type:"check"})}})}),this.container.querySelector("#npm-help").addEventListener("click",()=>{l.playClick(),g.show({title:"About Notepad",message:"NullOS Text Editor v1.0.0",subtext:"An authentic distraction-free text editor designed to document thoughts that will never be acted upon.",type:"info"})})}updateStatus(){const t=this.container.querySelector("#notepad-textarea").value,s=t.length,i=t.trim()?t.trim().split(/\s+/).length:0;this.container.querySelector("#np-chars").textContent=`${s} characters`,this.container.querySelector("#np-words").textContent=`${i} words`,this.updateCursorPos()}updateCursorPos(){const e=this.container.querySelector("#notepad-textarea"),s=e.value.substr(0,e.selectionStart).split(`
`),i=s.length,n=s[s.length-1].length+1;this.container.querySelector("#np-pos").textContent=`Ln ${i}, Col ${n}`}getElement(){return this.container}}class Te{constructor(e,t=null){this.onWallpaperChange=e,this.appLauncher=t,this.container=document.createElement("div"),this.container.className="settings-window",this.activeSection="system",this.developerMode=localStorage.getItem("nullos_developer_mode")==="true",this.render()}render(){this.container.innerHTML=`
      <div class="settings-sidebar">
        <div class="settings-nav-item active" data-section="system">
          ${o.systemMonitor}
          <span>System</span>
        </div>
        <div class="settings-nav-item" data-section="performance">
          ${o.cpu}
          <span>Performance & Devices</span>
        </div>
        <div class="settings-nav-item" data-section="personalization">
          ${o.sun}
          <span>Personalization</span>
        </div>
        <div class="settings-nav-item" data-section="network">
          ${o.wifi}
          <span>Network & Internet</span>
        </div>
        <div class="settings-nav-item" data-section="security">
          ${o.shieldCheck}
          <span>Security</span>
        </div>
        <div class="settings-nav-item" data-section="privacy">
          ${o.lock}
          <span>Privacy & Permissions</span>
        </div>
        <div class="settings-nav-item" data-section="apps">
          ${o.appStore}
          <span>Applications</span>
        </div>
        <div class="settings-nav-item" data-section="developer">
          ${o.code}
          <span>Developer</span>
        </div>
        <div class="settings-nav-item" data-section="about">
          ${o.info}
          <span>About</span>
        </div>
      </div>

      <div class="settings-content" id="settings-body"></div>
    `,this.bindNav(),this.renderSection("system")}bindNav(){this.container.querySelectorAll(".settings-nav-item").forEach(e=>{e.addEventListener("click",()=>{l.playClick(),this.container.querySelectorAll(".settings-nav-item").forEach(t=>t.classList.remove("active")),e.classList.add("active"),this.renderSection(e.dataset.section)})})}renderSection(e){const t=this.container.querySelector("#settings-body");if(t.innerHTML="",e==="performance"){const s=I.getSpecs();t.innerHTML=`
        <h2 class="settings-title">Performance & Device Profiles</h2>

        <!-- Detected Hardware Overview -->
        <div class="settings-group">
          <div class="settings-group-title">Detected Hardware Specifications</div>
          <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(180px, 1fr));gap:8px;margin-bottom:8px;">
            <div class="settings-card" style="flex-direction:column;align-items:flex-start;padding:12px;">
              <span style="font-size:11px;color:var(--text-muted);">CPU Concurrency</span>
              <strong style="font-size:15px;color:var(--text-primary);margin-top:2px;">${s.cores} Logical Cores</strong>
            </div>
            <div class="settings-card" style="flex-direction:column;align-items:flex-start;padding:12px;">
              <span style="font-size:11px;color:var(--text-muted);">Estimated Memory</span>
              <strong style="font-size:15px;color:var(--text-primary);margin-top:2px;">${s.memory} GB RAM</strong>
            </div>
            <div class="settings-card" style="flex-direction:column;align-items:flex-start;padding:12px;">
              <span style="font-size:11px;color:var(--text-muted);">Screen Resolution</span>
              <strong style="font-size:15px;color:var(--text-primary);margin-top:2px;">${s.width} × ${s.height} (${s.dpr}x DPR)</strong>
            </div>
            <div class="settings-card" style="flex-direction:column;align-items:flex-start;padding:12px;">
              <span style="font-size:11px;color:var(--text-muted);">Form Factor & Touch</span>
              <strong style="font-size:15px;color:var(--text-primary);margin-top:2px;text-transform:capitalize;">${s.formFactor} ${s.isTouch?"· Touch":""}</strong>
            </div>
          </div>
        </div>

        <!-- Performance Mode Configuration -->
        <div class="settings-group">
          <div class="settings-group-title">Adaptive Performance Tuning</div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Active Device Profile</span>
              <span class="settings-card-desc">Active Mode: <strong style="color:var(--accent);text-transform:uppercase;">${s.effectiveTier}</strong> (Selection: ${s.userMode.toUpperCase()})</span>
            </div>
            <select id="select-perf-mode" style="background:var(--surface-input);border:1px solid var(--border-strong);border-radius:4px;padding:6px 10px;color:var(--text-primary);font-size:12px;outline:none;cursor:pointer;">
              <option value="auto" ${s.userMode==="auto"?"selected":""}>Auto-Adaptive (Recommended)</option>
              <option value="low" ${s.userMode==="low"?"selected":""}>Low-Spec / Battery Saver</option>
              <option value="balanced" ${s.userMode==="balanced"?"selected":""}>Balanced Glassmorphism</option>
              <option value="high" ${s.userMode==="high"?"selected":""}>High Performance (120Hz Ultra)</option>
            </select>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Glassmorphism & Backdrop Blurs</span>
              <span class="settings-card-desc">Enable real-time acrylic backdrop-filter. Disable for instant GPU boost on budget devices.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-blur-effect" ${s.blurEnabled?"checked":""} />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Auto-Maximize on Mobile Screens</span>
              <span class="settings-card-desc">Automatically launch apps full-screen on displays narrower than 640px.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-auto-maximize" ${s.autoMaximizeOnMobile?"checked":""} />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Battery & Background Throttling</span>
              <span class="settings-card-desc">Pause heavy background telemetry when window or browser tab is hidden.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-bg-throttle" ${s.backgroundThrottle?"checked":""} />
              <span class="os-switch-slider"></span>
            </label>
          </div>
        </div>
      `,t.querySelector("#select-perf-mode").addEventListener("change",c=>{l.playClick(),I.setPerformanceMode(c.target.value),this.renderSection("performance")}),t.querySelector("#toggle-blur-effect").addEventListener("change",c=>{l.playClick(),I.setBlurEffects(c.target.checked)}),t.querySelector("#toggle-auto-maximize").addEventListener("change",c=>{l.playClick(),I.setAutoMaximizeOnMobile(c.target.checked)}),t.querySelector("#toggle-bg-throttle").addEventListener("change",c=>{l.playClick(),I.setBackgroundThrottle(c.target.checked)});return}if(e==="system"){const s=S.isActive;t.innerHTML=`
        <h2 class="settings-title">System</h2>

        <div class="settings-group">
          <div class="settings-group-title">Productivity & Efficiency</div>

          <!-- Productivity Mode (Humor) -->
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Productivity Mode</span>
              <span class="settings-card-desc">Allow the system to facilitate human achievement. Status: Unavailable.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-prod" disabled />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <!-- Hardware Simulation Engine -->
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Background Telemetry Simulation</span>
              <span class="settings-card-desc">Engage simulated system activity telemetry without real hardware strain.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-hw-load" ${s?"checked":""} />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <!-- Storage Sense -->
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Storage Sense</span>
              <span class="settings-card-desc">Automatically archive thoughts when they begin making too much sense.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" checked />
              <span class="os-switch-slider"></span>
            </label>
          </div>

          <!-- Sound Feedback -->
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">System Acoustic Feedback</span>
              <span class="settings-card-desc">Synthesize realistic OS chimes, alerts, and feedback clicks.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-audio" ${l.enabled?"checked":""} />
              <span class="os-switch-slider"></span>
            </label>
          </div>
        </div>
      `,t.querySelector("#toggle-hw-load").addEventListener("change",()=>{l.playClick(),S.toggle()}),t.querySelector("#toggle-audio").addEventListener("change",a=>{l.enabled=a.target.checked,l.playClick()})}else if(e==="personalization")t.innerHTML=`
        <h2 class="settings-title">Personalization</h2>
        <div class="settings-group">
          <div class="settings-group-title">Desktop Wallpaper</div>
          <div style="display:grid;grid-template-columns:repeat(5, 1fr);gap:12px;margin-top:8px;">
            <div class="wp-choice" data-theme="wallpaper-aizen" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid var(--accent);background:url('/wallpaper.png') center/cover;display:flex;align-items:flex-end;padding:8px;font-size:11px;font-weight:600;text-shadow:0 1px 3px rgba(0,0,0,0.8);">Aizen</div>
            <div class="wp-choice" data-theme="wallpaper-mica-slate" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid transparent;background:radial-gradient(circle at 20% 20%, #1f2530 0%, #111419 60%, #0a0c0f 100%);display:flex;align-items:flex-end;padding:8px;font-size:11px;">Mica Slate</div>
            <div class="wp-choice" data-theme="wallpaper-azure-dusk" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid transparent;background:radial-gradient(circle at 75% 25%, #18283b 0%, #0d1622 55%, #070b11 100%);display:flex;align-items:flex-end;padding:8px;font-size:11px;">Azure Dusk</div>
            <div class="wp-choice" data-theme="wallpaper-nordic-forest" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid transparent;background:radial-gradient(circle at 30% 70%, #162622 0%, #0d1715 50%, #060b0a 100%);display:flex;align-items:flex-end;padding:8px;font-size:11px;">Nordic Forest</div>
            <div class="wp-choice" data-theme="wallpaper-minimal-abyss" style="height:90px;border-radius:6px;cursor:pointer;border:2px solid transparent;background:linear-gradient(135deg, #18191d 0%, #121316 50%, #0b0c0d 100%);display:flex;align-items:flex-end;padding:8px;font-size:11px;">Minimal Abyss</div>
          </div>
        </div>
      `,t.querySelectorAll(".wp-choice").forEach(s=>{s.addEventListener("click",()=>{l.playClick(),t.querySelectorAll(".wp-choice").forEach(i=>i.style.borderColor="transparent"),s.style.borderColor="var(--accent)",this.onWallpaperChange&&this.onWallpaperChange(s.dataset.theme)})});else if(e==="network")t.innerHTML=`
        <h2 class="settings-title">Network & Internet</h2>
        <div class="settings-card">
          <div class="settings-card-info">
            <span class="settings-card-name">Wi-Fi (Nothing_5G)</span>
            <span class="settings-card-desc">Connected, secured · Signal: Excellent · Throughput: Infinite void</span>
          </div>
          <button class="dialog-btn" id="btn-disconnect">Disconnect</button>
        </div>
      `,t.querySelector("#btn-disconnect").addEventListener("click",()=>{g.show({title:"Network Manager",message:"Cannot disconnect from Nothing_5G",subtext:"Reason: You are already connected to nothing.",type:"info"})});else if(e==="security")t.innerHTML=`
        <h2 class="settings-title">Security</h2>
        <div class="settings-group">
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Security Center</span>
              <span class="settings-card-desc">View real-time threat protection and productivity hazard management.</span>
            </div>
            <button class="dialog-btn primary" id="btn-open-sec-center">Open Security Center</button>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Existential Firewall</span>
              <span class="settings-card-desc">Status: Active · Blocking incoming expectations.</span>
            </div>
            <label class="os-switch"><input type="checkbox" checked /><span class="os-switch-slider"></span></label>
          </div>

          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Scan History</span>
              <span class="settings-card-desc">Last scan completed today. Productivity threats quarantined.</span>
            </div>
            <button class="dialog-btn" id="btn-view-scan-history">View Scans</button>
          </div>
        </div>
      `,t.querySelector("#btn-open-sec-center").addEventListener("click",()=>{this.appLauncher&&this.appLauncher("securityCenter")}),t.querySelector("#btn-view-scan-history").addEventListener("click",()=>{this.appLauncher&&this.appLauncher("securityCenter")});else if(e==="privacy")t.innerHTML=`
        <h2 class="settings-title">Privacy & Permissions</h2>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">
          Manage hardware and system capabilities granted to installed applications.
        </div>

        <div class="settings-group">
          <div class="settings-group-title">Permission Categories</div>
          ${j.map(s=>`
            <div class="settings-card">
              <div class="settings-card-info">
                <span class="settings-card-name">${s.name}</span>
                <span class="settings-card-desc">${s.desc}</span>
              </div>
              <span class="sec-badge ok" style="font-size:11px;">Managed</span>
            </div>
          `).join("")}
        </div>

        <div class="settings-group" style="margin-top:16px;">
          <div class="settings-group-title">App Permissions Matrix</div>
          <div class="settings-perm-table" style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:12px;">
            ${O().filter(s=>u.isInstalled(s.id)).map(s=>{const i=D.getPermission(s.id,"microphone"),n=D.getPermission(s.id,"camera"),a=D.getPermission(s.id,"files");return`
                <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-divider);">
                  <div>
                    <div style="font-weight:600;font-size:13px;">${s.name}</div>
                    <div style="font-size:11px;color:var(--text-muted);">ID: ${s.id}</div>
                  </div>
                  <div style="display:flex;gap:16px;align-items:center;">
                    <label style="display:flex;align-items:center;gap:6px;font-size:11px;">
                      <span>Mic</span>
                      <input type="checkbox" class="perm-chk" data-app="${s.id}" data-perm="microphone" ${i==="allow"?"checked":""} />
                    </label>
                    <label style="display:flex;align-items:center;gap:6px;font-size:11px;">
                      <span>Camera</span>
                      <input type="checkbox" class="perm-chk" data-app="${s.id}" data-perm="camera" ${n==="allow"?"checked":""} />
                    </label>
                    <label style="display:flex;align-items:center;gap:6px;font-size:11px;">
                      <span>Files</span>
                      <input type="checkbox" class="perm-chk" data-app="${s.id}" data-perm="files" ${a==="allow"?"checked":""} />
                    </label>
                  </div>
                </div>
              `}).join("")}
          </div>
        </div>
      `,t.querySelectorAll(".perm-chk").forEach(s=>{s.addEventListener("change",i=>{l.playClick();const n=s.dataset.app,a=s.dataset.perm;D.setPermission(n,a,i.target.checked?"allow":"deny")})});else if(e==="apps"){const s=O().filter(i=>u.isInstalled(i.id));t.innerHTML=`
        <h2 class="settings-title">Installed Applications</h2>
        <div style="font-size:12px;color:var(--text-secondary);margin-bottom:14px;">
          Review and configure installed useless software packages (${s.length} installed).
        </div>

        <div class="settings-group">
          ${s.map(i=>`
            <div class="settings-card">
              <div style="display:flex;align-items:center;gap:12px;">
                <div style="font-size:24px;">${i.icon}</div>
                <div class="settings-card-info">
                  <span class="settings-card-name">${i.name}</span>
                  <span class="settings-card-desc">Version ${i.version} · Size: ${i.size}</span>
                </div>
              </div>
              <div style="display:flex;gap:8px;">
                <button class="dialog-btn primary btn-app-launch" data-id="${i.id}">Launch</button>
                <button class="dialog-btn btn-app-uninstall" data-id="${i.id}" style="color:var(--status-red);">Uninstall</button>
              </div>
            </div>
          `).join("")}
        </div>
      `,t.querySelectorAll(".btn-app-launch").forEach(i=>{i.addEventListener("click",()=>{this.appLauncher&&this.appLauncher(i.dataset.id)})}),t.querySelectorAll(".btn-app-uninstall").forEach(i=>{i.addEventListener("click",()=>{l.playClick(),u.uninstallApp(i.dataset.id),this.renderSection("apps")})})}else if(e==="developer"){t.innerHTML=`
        <h2 class="settings-title">Developer Options</h2>
        <div class="settings-group">
          <div class="settings-card">
            <div class="settings-card-info">
              <span class="settings-card-name">Developer Mode</span>
              <span class="settings-card-desc">Enable internal diagnostic tools, App Registry inspection, and Developer Console.</span>
            </div>
            <label class="os-switch">
              <input type="checkbox" id="toggle-dev-mode" ${this.developerMode?"checked":""} />
              <span class="os-switch-slider"></span>
            </label>
          </div>
        </div>

        <div id="dev-mode-features" style="display:${this.developerMode?"block":"none"};margin-top:16px;">
          <div class="settings-group">
            <div class="settings-group-title">Developer Utilities</div>

            <div class="settings-card">
              <div class="settings-card-info">
                <span class="settings-card-name">Developer & Diagnostic Console</span>
                <span class="settings-card-desc">Open the simulated CLI sandbox to query apps.list(), processes.list(), and uselessness.getScore().</span>
              </div>
              <button class="dialog-btn primary" id="btn-open-dev-console">Launch Console</button>
            </div>

            <div class="settings-card">
              <div class="settings-card-info">
                <span class="settings-card-name">Active Background Processes</span>
                <span class="settings-card-desc">${P.getProcesses().length} simulated processes active.</span>
              </div>
              <button class="dialog-btn" id="btn-dev-sysmon">Inspect in System Monitor</button>
            </div>

            <div class="settings-card">
              <div class="settings-card-info">
                <span class="settings-card-name">Simulated App Registration API</span>
                <span class="settings-card-desc">Exposes global <code>window.UselessOS</code> with registerApp, launchApp, notify, etc.</span>
              </div>
              <span class="sec-badge ok">Ready</span>
            </div>
          </div>
        </div>
      `,t.querySelector("#toggle-dev-mode").addEventListener("change",a=>{l.playClick(),this.developerMode=a.target.checked,localStorage.setItem("nullos_developer_mode",String(this.developerMode));const r=t.querySelector("#dev-mode-features");r&&(r.style.display=this.developerMode?"block":"none")});const i=t.querySelector("#btn-open-dev-console");i&&i.addEventListener("click",()=>{this.appLauncher&&this.appLauncher("developerConsole")});const n=t.querySelector("#btn-dev-sysmon");n&&n.addEventListener("click",()=>{this.appLauncher&&this.appLauncher("systemMonitor")})}else if(e==="about"){const s=navigator.hardwareConcurrency||4;t.innerHTML=`
        <h2 class="settings-title">About NullOS</h2>
        <div class="settings-card">
          <div class="settings-card-info">
            <span class="settings-card-name">NullOS Enterprise Edition (Useless OS V2)</span>
            <span class="settings-card-desc">Version 26H2 (Build 26100.1742) · 64-bit Certified Inaction OS</span>
          </div>
          <button class="dialog-btn primary" id="btn-check-updates">Check for Updates</button>
        </div>

        <div class="settings-group" style="margin-top:10px;">
          <div class="settings-group-title">System Specifications</div>
          <div style="font-size:12px;color:var(--text-secondary);display:flex;flex-direction:column;gap:6px;background:var(--surface-card);padding:14px;border-radius:6px;border:1px solid var(--border-subtle);">
            <div><strong>Architecture:</strong> Useless OS V2 Unified Core</div>
            <div><strong>Processor:</strong> Simulated Hardware (${s} Cores Available)</div>
            <div><strong>Installed RAM:</strong> 8.00 GB (5.2 GB Simulated Allocation)</div>
            <div><strong>Uselessness Index:</strong> 99.8% (Certified Stable)</div>
            <div><strong>Global Status:</strong> Indistinguishable from genuine desktop</div>
          </div>
        </div>
      `,t.querySelector("#btn-check-updates").addEventListener("click",()=>{l.playClick(),g.show({title:"NullOS Update",message:"You are completely up to date.",subtext:"Last checked: Today. No updates needed because perfection in uselessness has already been achieved.",type:"check"})})}}getElement(){return this.container}}class Ae{constructor(e){this.onClose=e,this.container=document.createElement("div"),this.container.className="terminal-window",this.history=[],this.historyIdx=0,this.currentDir="C:\\Users\\Aizen",this.render()}render(){this.container.innerHTML=`
      <div class="terminal-banner">
        NullOS Command Line Interface [Version 10.0.26100.1]<br/>
        (c) Null Corporation. All rights reserved.<br/>
        Type "help" for a list of available commands.
      </div>
      <div class="terminal-history" id="term-history"></div>
      <div class="terminal-input-row">
        <span class="terminal-prompt" id="term-prompt">${this.currentDir}&gt;</span>
        <input type="text" class="terminal-input" id="term-input" autofocus spellcheck="false" autocomplete="off" />
      </div>
    `,this.bindEvents()}bindEvents(){const e=this.container.querySelector("#term-input");this.container.addEventListener("click",()=>{e.focus()}),e.addEventListener("keydown",t=>{if(t.key==="Enter"){const s=e.value.trim();e.value="",s?(this.history.push(s),this.historyIdx=this.history.length,this.execCommand(s)):this.appendLine(`${this.currentDir}&gt;`)}else t.key==="ArrowUp"?this.historyIdx>0&&(this.historyIdx--,e.value=this.history[this.historyIdx]):t.key==="ArrowDown"&&(this.historyIdx<this.history.length-1?(this.historyIdx++,e.value=this.history[this.historyIdx]):(this.historyIdx=this.history.length,e.value=""))})}appendLine(e,t="#cfd6e0"){const s=this.container.querySelector("#term-history"),i=document.createElement("div");i.className="terminal-line",i.style.color=t,i.innerHTML=e,s.appendChild(i),this.container.scrollTop=this.container.scrollHeight}execCommand(e){this.appendLine(`${this.currentDir}&gt; ${e}`,"#ffffff");const[t,...s]=e.trim().split(/\s+/);switch(t.toLowerCase()){case"help":this.appendLine(`
Available commands:
  help      - Display this help message
  dir / ls  - List directory contents
  cls/clear - Clear the terminal screen
  ping      - Ping a host
  tasklist  - Show running processes
  stress    - Run CPU & 500 MB RAM stress script
  bash      - Execute shell scripts (e.g. bash stress.sh)
  filesize  - Inspect testfile.org-5GB.dat size
  load      - Display real hardware CPU/RAM consumption status
  whoami    - Display current user identity
  echo      - Echo arguments
  matrix    - Enter the digital void
  exit      - Close terminal window
        `);break;case"stress":case"bash":{if(t==="bash"&&s[0]!=="stress.sh"){this.appendLine(`Executing ${s.join(" ")}... Script completed with 0 output.`);break}this.appendLine("[STRESS ENGINE] Starting CPU & RAM stress routine..."),window.desktopBridge&&window.desktopBridge.startStress?window.desktopBridge.startStress().then(n=>{this.appendLine(`[NATIVE DESKTOP] ${n.message}`)}):(S.start(),this.appendLine("[WEB WORKERS] Spawned workers on all detected cores. Holding RAM buffers.")),this.appendLine("RAM load: 500 MB allocated into memory."),this.appendLine("CPU load: All cores executing infinite multiplication loop."),this.appendLine('Type "stress-stop" to terminate stress jobs.');break}case"stress-stop":{window.desktopBridge&&window.desktopBridge.stopStress?window.desktopBridge.stopStress().then(n=>{this.appendLine(`[NATIVE DESKTOP] ${n.message}`)}):(S.stop(),this.appendLine("[WEB WORKERS] Stress workers stopped."));break}case"filesize":{this.appendLine(`
--- APPLICATION DISK FOOTPRINT ---
File: testfile.org-5GB.dat
Size: 5,000,000,000 bytes (5.00 GB)
Status: Bundled into native desktop application
        `);break}case"dir":case"ls":{const n=this.currentDir.replace(/\\/g,"/"),a=q.getItems(n);let r=`<br/> Directory of ${this.currentDir}<br/><br/>`;a.forEach(c=>{const d=c.type==="directory"?"&lt;DIR&gt;":"     ";r+=`11/09/2026  06:00 PM    ${d}   ${c.name}<br/>`}),r+=`<br/>               ${a.length} File(s) / Dir(s)<br/>`,this.appendLine(r);break}case"cls":case"clear":this.container.querySelector("#term-history").innerHTML="";break;case"whoami":this.appendLine("nullos\\aizen (Group: Administrators of Nothing)");break;case"echo":this.appendLine(s.join(" "));break;case"load":{const n=S.getMetrics();this.appendLine(`
--- REAL HARDWARE RESOURCE ENGINE ---
Active Status: ${n.isActive?"RUNNING":"STOPPED"}
Logical Cores: ${n.hardwareCores}
Active Worker Threads: ${n.activeWorkers} (≥50% HW Target)
Real Allocated RAM Buffers: ${n.actualAllocatedMb} MB
Browser Heap Used: ${n.heapUsedMb} MB
Purpose: Genuine hardware cycle consumption without productive result.
        `);break}case"ping":{const n=s[0]||"127.0.0.1";this.appendLine(`Pinging ${n} with 32 bytes of data:`);let a=0;const r=setInterval(()=>{a<4?(a++,this.appendLine(`Reply from ${n}: bytes=32 time&lt;1ms TTL=128 (Packets delivered to void)`)):(clearInterval(r),this.appendLine(`Ping statistics for ${n}: Packets: Sent = 4, Received = 4, Lost = 0 (0% loss). Productivity loss = 100%.`))},300);break}case"tasklist":this.appendLine(`
Image Name                     PID Session Name        Mem Usage
========================= ======== ================ ============
System Kernel                    4 Services               180 MB
useless-compute-worker.exe    1084 Console                340 MB
ram-buffer-retention.exe      2192 Console                640 MB
desktop-window-manager.exe    1420 Console                 95 MB
zero-progress-engine.exe      3380 Console                120 MB
browser-tab-hoarder.exe       5120 Console                420 MB
        `);break;case"sudo":this.appendLine("aizen is not in the sudoers file. This incident will be reported to nobody.");break;case"matrix":this.appendLine("Streaming reality matrix...","#2ecc71");for(let n=0;n<8;n++){let a="";for(let r=0;r<40;r++)a+=Math.random()>.5?"1":"0";this.appendLine(a,"#2ecc71")}break;case"exit":this.onClose&&this.onClose();break;default:this.appendLine(`'${t}' is not recognized as an internal or external command, operable program or batch file.`)}}getElement(){return this.container}}class $e{constructor(){this.container=document.createElement("div"),this.container.className="filemanager-window",this.render()}render(){this.container.innerHTML=`
      <div class="fm-toolbar">
        <div style="font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px;">
          ${o.recycleBin}
          <span>Recycle Bin Tools</span>
        </div>
        <div style="flex:1;"></div>
        <button class="dialog-btn" id="rb-empty-btn" style="height:28px;">Empty Recycle Bin</button>
      </div>

      <div class="fm-main">
        <div class="fm-content-area" id="rb-grid" style="grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));"></div>
      </div>

      <div class="fm-status-bar">
        <span id="rb-status">0 items</span>
      </div>
    `,this.bindEvents(),this.refresh()}bindEvents(){this.container.querySelector("#rb-empty-btn").addEventListener("click",()=>{if(l.playClick(),q.getItems("Recycle Bin").length===0){K.recordRecycleBinEmpty(!0);return}g.show({title:"Delete Multiple Items",message:"Are you sure you want to permanently delete these useless items?",subtext:"Once erased, they can never waste space on your disk again.",type:"warning",buttons:[{text:"Yes",primary:!0},{text:"No"}]}).then(s=>{s==="Yes"&&(q.emptyRecycleBin(),this.refresh(),g.show({title:"Recycle Bin",message:"Recycle bin emptied.",subtext:"Nothing remains of those files except faint memories.",type:"check"}))})})}refresh(){const e=this.container.querySelector("#rb-grid");e.innerHTML="";const t=q.getItems("Recycle Bin");this.container.querySelector("#rb-status").textContent=`${t.length} items in bin`,t.forEach(s=>{const i=document.createElement("div");i.className="fm-file-card";const n=o[s.icon]||o.fileText;i.innerHTML=`
        ${n}
        <span class="fm-file-name">${s.name}</span>
      `,i.addEventListener("dblclick",()=>{g.show({title:"Recycle Bin Item",message:s.name,subtext:`Original location: ${s.originalPath||"Unknown"}
Size: ${s.size}
This file was discarded intentionally.`,type:"info"})}),e.appendChild(i)})}getElement(){return this.container}}class ze{constructor(){this.container=document.createElement("div"),this.container.className="nothing-window",this.container.style.display="flex",this.container.style.flexDirection="column",this.container.style.alignItems="center",this.container.style.justifyContent="center",this.container.style.height="100%",this.container.style.background="var(--bg-canvas)",this.container.style.color="var(--text-secondary)",this.container.style.fontFamily="var(--font-primary)",this.container.style.userSelect="none",this.render()}render(){this.container.innerHTML=`
      <div id="nothing-text" style="font-size:24px;font-weight:500;letter-spacing:0.5px;transition:opacity 600ms ease;">
        Nothing
      </div>
    `,setTimeout(()=>{const e=this.container.querySelector("#nothing-text");e&&(e.style.opacity="0",setTimeout(()=>{e.textContent="Still nothing.",e.style.opacity="1"},600))},4500)}getElement(){return this.container}}class Ie{constructor(){this.container=document.createElement("div"),this.container.className="loading-simulator-window",this.container.style.display="flex",this.container.style.flexDirection="column",this.container.style.alignItems="center",this.container.style.justifyContent="center",this.container.style.height="100%",this.container.style.padding="30px",this.container.style.background="var(--bg-canvas)",this.container.style.userSelect="none",this.progress=0,this.render(),this.simulate()}render(){this.container.innerHTML=`
      <div style="width:100%;max-width:360px;display:flex;flex-direction:column;gap:12px;">
        <div style="display:flex;justify-content:space-between;font-size:13px;font-weight:500;">
          <span id="load-status">Initializing enterprise loading pipeline...</span>
          <span id="load-pct" style="font-family:monospace;font-weight:600;">0%</span>
        </div>

        <div class="store-progress-track" style="height:6px;background:rgba(255,255,255,0.08);border-radius:4px;overflow:hidden;">
          <div id="load-bar" style="width:0%;height:100%;background:var(--accent);transition:width 150ms ease;"></div>
        </div>

        <div id="load-detail" style="font-size:11px;color:var(--text-muted);font-family:monospace;text-align:left;">
          Allocating simulated buffer caches...
        </div>
      </div>
    `}simulate(){const e=this.container.querySelector("#load-bar"),t=this.container.querySelector("#load-pct"),s=this.container.querySelector("#load-status"),i=this.container.querySelector("#load-detail"),n=["Decompressing zero-byte assets...","Verifying existential prerequisites...","Synchronizing clock with universal silence...","Finalizing 99% plateau..."],a=setInterval(()=>{this.progress<99?(this.progress+=Math.floor(Math.random()*12)+6,this.progress>99&&(this.progress=99),e&&(e.style.width=`${this.progress}%`),t&&(t.textContent=`${this.progress}%`),i&&(i.textContent=n[Math.floor(this.progress/100*n.length)])):(clearInterval(a),s&&(s.textContent="Almost finished..."),i&&(i.textContent="Hang tight, we are wrapping things up."),setTimeout(()=>{s&&(s.textContent="Loading completed."),t&&(t.textContent="100%"),e&&(e.style.width="100%"),i&&(i.textContent="Nothing has changed.")},18e3))},180)}getElement(){return this.container}}class Pe{constructor(){this.container=document.createElement("div"),this.container.className="productivity-app-window",this.container.style.display="flex",this.container.style.flexDirection="column",this.container.style.alignItems="center",this.container.style.justifyContent="center",this.container.style.height="100%",this.container.style.padding="30px",this.container.style.background="var(--bg-canvas)",this.container.style.color="var(--text-primary)",this.container.style.textAlign="center",this.container.style.userSelect="none",this.render()}render(){this.container.innerHTML=`
      <div style="font-size:48px;margin-bottom:12px;">⚡</div>
      <div style="font-size:18px;font-weight:600;margin-bottom:6px;">Productivity mode activated.</div>
      <div style="font-size:13px;color:var(--text-secondary);max-width:280px;line-height:1.5;">
        You are now productive.
      </div>
      <div style="margin-top:20px;font-size:11px;color:var(--text-muted);font-family:monospace;">
        Status: 0 tasks available · 0 outputs expected
      </div>
    `}getElement(){return this.container}}class qe{constructor(){this.container=document.createElement("div"),this.container.className="calc-window secret-calc",this.current="0",this.computeCount=0,this.render()}render(){this.container.innerHTML=`
      <div class="calc-display-section" style="background:#0e1117;">
        <div class="calc-expression" id="scalc-expr">Secret Algorithm</div>
        <div class="calc-result" id="scalc-display" style="color:#00d26a;">42</div>
        <div class="calc-verdict-note" id="scalc-note">The answer to life, the universe, and everything.</div>
      </div>

      <div class="calc-keypad">
        <button class="calc-key op" data-val="C">C</button>
        <button class="calc-key op" data-val="π">π</button>
        <button class="calc-key op" data-val="√">√</button>
        <button class="calc-key op" data-val="/">÷</button>

        <button class="calc-key" data-val="7">7</button>
        <button class="calc-key" data-val="8">8</button>
        <button class="calc-key" data-val="9">9</button>
        <button class="calc-key op" data-val="*">×</button>

        <button class="calc-key" data-val="4">4</button>
        <button class="calc-key" data-val="5">5</button>
        <button class="calc-key" data-val="6">6</button>
        <button class="calc-key op" data-val="-">−</button>

        <button class="calc-key" data-val="1">1</button>
        <button class="calc-key" data-val="2">2</button>
        <button class="calc-key" data-val="3">3</button>
        <button class="calc-key op" data-val="+">+</button>

        <button class="calc-key" data-val="0">0</button>
        <button class="calc-key" data-val=".">.</button>
        <button class="calc-key" data-val="42">42</button>
        <button class="calc-key equals" data-val="=">=</button>
      </div>
    `,this.bindEvents()}bindEvents(){this.container.querySelectorAll(".calc-key").forEach(e=>{e.addEventListener("click",()=>{l.playClick();const t=e.dataset.val;if(t==="C"){this.current="0",this.container.querySelector("#scalc-display").textContent="0",this.container.querySelector("#scalc-note").textContent="Ready.";return}if(t==="="){this.computeCount++,this.computeCount%2===0||Math.random()>.4?(this.container.querySelector("#scalc-display").textContent="42",this.container.querySelector("#scalc-note").textContent="Inevitably: 42."):(this.container.querySelector("#scalc-display").textContent="42.00",this.container.querySelector("#scalc-note").textContent="High precision 42.");return}this.current==="0"||this.current==="42"?this.current=t:this.current+=t,this.container.querySelector("#scalc-display").textContent=this.current})})}getElement(){return this.container}}function Be(h,e){const t=document.createElement("div");switch(t.className="useless-app-view",t.style.padding="20px",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="center",t.style.justifyContent="center",t.style.height="100%",t.style.gap="16px",t.style.userSelect="none",h){case"rockSimulator":{let s=0;t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">ROCK SIMULATOR V1.0.0</div>
        <div id="rock-visual" style="font-size:72px;transition:transform 300ms ease;filter:drop-shadow(0 8px 16px rgba(0,0,0,0.5));cursor:default;">🪨</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:12px 18px;font-size:12px;display:flex;flex-direction:column;gap:4px;width:240px;">
          <div><strong>Rock status:</strong> <span style="color:var(--status-green)">Stable</span></div>
          <div><strong>Rock movement:</strong> None</div>
          <div><strong>Rock productivity:</strong> 0%</div>
          <div id="rock-note" style="color:var(--accent);font-size:11px;margin-top:4px;">Observation active.</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button class="dialog-btn primary" id="btn-rotate-rock">Rotate Rock</button>
          <button class="dialog-btn" id="btn-reset-rock">Reset</button>
        </div>
      `;const i=t.querySelector("#rock-visual"),n=t.querySelector("#rock-note");t.querySelector("#btn-rotate-rock").addEventListener("click",()=>{l.playClick(),s+=3,i.style.transform=`rotate(${s}deg)`,n.textContent=`The rock has rotated approximately ${s} degrees.`,u.addScore(10)}),t.querySelector("#btn-reset-rock").addEventListener("click",()=>{l.playClick(),s=0,i.style.transform="rotate(0deg)",n.textContent="The rock is at rest."});break}case"mouseTester":{let s=0;t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">MOUSE EXISTENCE VERIFICATION SUITE</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:16px;width:300px;font-size:12px;display:flex;flex-direction:column;gap:8px;">
          <div>Mouse detected: <strong style="color:var(--status-green)">YES</strong></div>
          <div id="mt-left">Left button: <span>✓ Working</span></div>
          <div id="mt-right">Right button: <span>✓ Working</span></div>
          <div id="mt-wheel">Scroll wheel: <span>✓ Working</span></div>
          <div id="mt-coords">Position: <span>X: 0, Y: 0</span></div>
          <div style="margin-top:6px;padding-top:6px;border-top:1px solid var(--border-divider);">
            <strong>Conclusion:</strong>
            <div id="mt-conclusion" style="color:var(--status-green);font-weight:500;margin-top:2px;">Your mouse exists.</div>
          </div>
        </div>
        <button class="dialog-btn primary" id="btn-test-again">Test Again</button>
      `,t.addEventListener("mousemove",i=>{const n=t.querySelector("#mt-coords span");n&&(n.textContent=`X: ${i.offsetX}, Y: ${i.offsetY}`)}),t.querySelector("#btn-test-again").addEventListener("click",()=>{l.playClick(),s++;const i=t.querySelector("#mt-conclusion");i.textContent=s%2===0?"Your mouse still exists.":"Physical existence re-confirmed.",u.addScore(15)});break}case"personSimulator":{let s=0;t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">PERSON SIMULATOR</div>
        <div id="person-avatar" style="font-size:64px;transition:transform 300ms ease;">🧍</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:14px;width:260px;font-size:12px;display:flex;flex-direction:column;gap:5px;">
          <div><strong>Current activity:</strong> Standing</div>
          <div><strong>Status:</strong> <span style="color:var(--status-green)">Doing nothing</span></div>
          <div><strong>Productivity:</strong> 0%</div>
          <div id="person-msg" style="color:var(--text-secondary);font-size:11px;margin-top:4px;">The person is content.</div>
        </div>
        <button class="dialog-btn primary" id="btn-move-person">Make Person Move</button>
      `;const i=t.querySelector("#person-avatar"),n=t.querySelector("#person-msg");t.querySelector("#btn-move-person").addEventListener("click",()=>{l.playClick(),s=(s+1)%2,i.style.transform=s===1?"translateX(24px)":"translateX(0px)",n.textContent="The person moved.",u.addScore(10),setTimeout(()=>{n.textContent="The person has returned to doing nothing."},1500)});break}case"airManager":{t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">AIR MANAGER V3.0</div>
        <div style="font-size:56px;">💨</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:14px;width:280px;font-size:12px;display:flex;flex-direction:column;gap:5px;">
          <div>Air detected: <strong style="color:var(--status-green)">YES</strong></div>
          <div>Air quality: <strong>Probably fine</strong></div>
          <div>Air quantity: <strong>A lot</strong></div>
          <div>Air temperature: <strong>Unknown</strong></div>
          <div>Air managed: <strong style="color:var(--accent)">100%</strong></div>
          <div id="air-status-msg" style="color:var(--text-muted);font-size:11px;margin-top:4px;">Atmosphere calibrated.</div>
        </div>
        <button class="dialog-btn primary" id="btn-manage-air">Manage Air</button>
      `,t.querySelector("#btn-manage-air").addEventListener("click",()=>{l.playClick(),t.querySelector("#air-status-msg").textContent="Air successfully managed.",u.addScore(10)});break}case"waitingApp":{let s=0;t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">WAITING SIMULATOR</div>
        <div style="font-size:24px;color:var(--text-secondary);">Please wait...</div>
        <div id="wait-timer" style="font-size:44px;font-weight:300;font-family:var(--font-mono);color:var(--text-primary);">00:00:00</div>
        <div id="wait-message" style="font-size:12px;color:var(--text-secondary);text-align:center;max-width:280px;min-height:36px;">
          You are successfully waiting.
        </div>
        <div style="display:flex;gap:8px;">
          <button class="dialog-btn primary" id="btn-continue-wait">Continue Waiting</button>
          <button class="dialog-btn" id="btn-stop-wait">Stop Wasting Time</button>
        </div>
      `;const i=t.querySelector("#wait-timer"),n=t.querySelector("#wait-message"),a=setInterval(()=>{s++;const r=String(Math.floor(s/60)).padStart(2,"0"),c=String(s%60).padStart(2,"0");i.textContent=`00:${r}:${c}`,s===10?(n.innerHTML="You have waited 10 seconds.<br/>Congratulations. Nothing happened.",l.playNotification(),u.addScore(50)):s===30&&(n.innerHTML="You have waited 30 seconds.<br/>You could have made toast.",u.addScore(100))},1e3);t.querySelector("#btn-continue-wait").addEventListener("click",()=>{l.playClick(),n.textContent="Continuing to wait with dedication."}),t.querySelector("#btn-stop-wait").addEventListener("click",()=>{l.playClick(),clearInterval(a),n.textContent="Waiting paused. Nothing was missed."});break}case"numberViewer":{let s=42;t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">NUMBER VIEWER PROFESSIONAL</div>
        <div style="font-size:13px;color:var(--text-secondary);">Current number:</div>
        <div id="nv-display" style="font-size:56px;font-weight:600;font-family:var(--font-mono);color:var(--text-primary);">${s}</div>
        <div id="nv-remark" style="font-size:12px;color:var(--accent);">You have successfully viewed a number.</div>
        <div style="display:flex;gap:8px;margin-top:8px;">
          <button class="dialog-btn primary" id="btn-next-num">NEXT NUMBER</button>
          <button class="dialog-btn" id="btn-rand-num">Random Number</button>
        </div>
      `;const i=t.querySelector("#nv-display"),n=t.querySelector("#nv-remark");t.querySelector("#btn-next-num").addEventListener("click",()=>{l.playClick(),s++,i.textContent=s,n.textContent=`You are now viewing ${s}.`,u.addScore(5)}),t.querySelector("#btn-rand-num").addEventListener("click",()=>{l.playClick(),s=Math.floor(1e5+Math.random()*9e5),i.textContent=s,n.textContent="You have observed a random integer.",u.addScore(10)});break}case"box":{let s=1,i=0;t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">BOX INSPECTION SUITE</div>
        <div id="box-3d" style="width:100px;height:100px;border:2px solid var(--accent);background:rgba(0,120,212,0.15);border-radius:4px;display:flex;align-items:center;justify-content:center;font-weight:600;transition:all 200ms ease;box-shadow:0 8px 24px rgba(0,0,0,0.4);">
          BOX
        </div>
        <div style="font-size:12px;color:var(--text-secondary);text-align:center;">
          Status: <strong style="color:var(--status-green)">Box</strong> · Condition: <strong>Fine</strong>
        </div>
        <div id="box-desc" style="font-size:11px;color:var(--text-muted);">Ready for inspection.</div>
        <div style="display:flex;gap:8px;">
          <button class="dialog-btn" id="btn-rotate-box">Rotate</button>
          <button class="dialog-btn" id="btn-zoom-box">Zoom</button>
          <button class="dialog-btn primary" id="btn-inspect-box">Inspect</button>
        </div>
      `;const n=t.querySelector("#box-3d"),a=t.querySelector("#box-desc");t.querySelector("#btn-rotate-box").addEventListener("click",()=>{l.playClick(),i+=45,n.style.transform=`rotate(${i}deg) scale(${s})`,a.textContent=`Box rotated to ${i}°. Still a box.`}),t.querySelector("#btn-zoom-box").addEventListener("click",()=>{l.playClick(),s=s===1?1.3:1,n.style.transform=`rotate(${i}deg) scale(${s})`,a.textContent=s>1?"Box magnified.":"Box restored."}),t.querySelector("#btn-inspect-box").addEventListener("click",()=>{l.playClick(),a.textContent="Conclusion: It is a box.",u.addScore(10)});break}case"button":{let s=0;t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">OPTIMIZED BUTTON ENGINE</div>
        <button id="the-mighty-btn" style="width:140px;height:56px;background:var(--accent);color:#ffffff;font-size:16px;font-weight:600;border-radius:6px;border:none;box-shadow:0 4px 14px rgba(0,120,212,0.4);transition:all var(--anim-fast);cursor:default;">
          CLICK
        </button>
        <div style="font-size:18px;font-weight:500;color:var(--text-primary);" id="btn-counter">Clicks: 0</div>
        <div id="btn-message" style="font-size:12px;color:var(--text-secondary);min-height:20px;">Push the button to increase nothing.</div>
      `;const i=t.querySelector("#the-mighty-btn"),n=t.querySelector("#btn-counter"),a=t.querySelector("#btn-message");i.addEventListener("click",()=>{l.playClick(),s++,n.textContent=`Clicks: ${s}`,u.addScore(2),s===10?a.textContent="You have clicked 10 times. Good start.":s===50?a.textContent="50 clicks achieved. Still no purpose.":s===100&&(a.innerHTML="You have clicked the button 100 times.<br/><strong>Why? 🏆 Achievement: Button Master</strong>",l.playNotification(),u.addScore(200))});break}case"plantMonitor":{t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">PLANT MONITOR 24/7</div>
        <div style="font-size:64px;">🌱</div>
        <div style="background:var(--surface-card);border:1px solid var(--border-subtle);border-radius:6px;padding:14px;width:260px;font-size:12px;display:flex;flex-direction:column;gap:4px;">
          <div>Plant status: <strong style="color:var(--status-green)">Alive</strong></div>
          <div>Growth: <strong>0.00001%</strong></div>
          <div>Movement: <strong>None</strong></div>
          <div>Water level: <strong>Probably okay</strong></div>
          <div>Plant activity: <strong>Standing</strong></div>
        </div>
        <button class="dialog-btn primary" id="btn-check-plant">Check Plant</button>
      `,t.querySelector("#btn-check-plant").addEventListener("click",()=>{l.playClick(),g.show({title:"Plant Telemetry",message:"Your plant is still there.",subtext:"Photosynthesis is proceeding at normal existential rates.",type:"check"})});break}case"sleepSimulator":{let s=0;t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">SLEEP SIMULATOR</div>
        <div style="font-size:56px;">😴</div>
        <div style="font-size:13px;color:var(--text-secondary);">Time asleep:</div>
        <div id="sleep-time" style="font-size:36px;font-family:var(--font-mono);font-weight:300;color:var(--text-primary);">00:00:00</div>
        <div id="sleep-note" style="font-size:12px;color:var(--text-secondary);text-align:center;">
          Simulating deep rest while staring at screen...
        </div>
        <button class="dialog-btn primary" id="btn-wake-up">Wake Up</button>
      `;const i=t.querySelector("#sleep-time"),n=t.querySelector("#sleep-note"),a=setInterval(()=>{s++;const r=String(s%60).padStart(2,"0"),c=String(Math.floor(s/60)).padStart(2,"0");i.textContent=`00:${c}:${r}`},1e3);t.querySelector("#btn-wake-up").addEventListener("click",()=>{l.playClick(),clearInterval(a),n.innerHTML="<strong>You have simulated sleep. You are still awake.</strong>"});break}case"uselessAI":{t.style.justifyContent="flex-start",t.style.alignItems="stretch",t.innerHTML=`
        <div style="font-size:12px;font-weight:600;display:flex;align-items:center;gap:6px;border-bottom:1px solid var(--border-divider);padding-bottom:10px;">
          ${o.bot}
          <span>UselessAI Neural Network</span>
        </div>
        <div id="ai-chat" style="flex:1;overflow-y:auto;display:flex;flex-direction:column;gap:10px;padding:8px 0;">
          <div style="background:var(--surface-card);padding:10px 14px;border-radius:6px;font-size:12px;align-self:flex-start;max-width:85%;">
            Hello. I am UselessAI. Ask me anything, and I will confidently provide no help at all.
          </div>
        </div>
        <div style="display:flex;gap:8px;">
          <input type="text" id="ai-input" placeholder="Ask UselessAI..." style="flex:1;height:32px;background:var(--surface-input);border:1px solid var(--border-strong);border-radius:4px;padding:0 10px;font-size:12px;color:#fff;" />
          <button class="dialog-btn primary" id="ai-send" style="height:32px;">Ask</button>
        </div>
      `;const s=t.querySelector("#ai-chat"),i=t.querySelector("#ai-input"),n=t.querySelector("#ai-send"),a=["That is an interesting question. Have you considered not worrying about it?","Based on my 500-billion parameters, the answer is technically somewhere in the universe.","I could answer that, but staring at the desktop icons would be equally productive.","Error 0x00: Wisdom detected, immediately suppressed for safety.","According to recent data, 10 out of 10 rocks recommend doing nothing.","The solution is simple: Close all your tabs and take a deep breath."],r=()=>{const c=i.value.trim();if(!c)return;i.value="";const d=document.createElement("div");d.style.cssText="background:var(--accent);color:#fff;padding:8px 12px;border-radius:6px;font-size:12px;align-self:flex-end;max-width:85%;",d.textContent=c,s.appendChild(d),s.scrollTop=s.scrollHeight,setTimeout(()=>{l.playNotification();const p=document.createElement("div");p.style.cssText="background:var(--surface-card);padding:10px 14px;border-radius:6px;font-size:12px;align-self:flex-start;max-width:85%;",p.textContent=a[Math.floor(Math.random()*a.length)],s.appendChild(p),s.scrollTop=s.scrollHeight,u.addScore(25)},500)};n.addEventListener("click",r),i.addEventListener("keydown",c=>{c.key==="Enter"&&r()});break}case"loadingSimulator":{t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">LOADING SIMULATOR</div>
        <div style="font-size:14px;color:var(--text-primary);margin-top:20px;">Loading components...</div>
        <div style="width:280px;height:6px;background:rgba(255,255,255,0.1);border-radius:3px;overflow:hidden;margin:12px 0;">
          <div style="width:99%;height:100%;background:var(--accent);border-radius:3px;"></div>
        </div>
        <div style="font-size:16px;font-weight:600;color:var(--text-primary);">99%</div>
        <div style="font-size:12px;color:var(--text-muted);font-style:italic;">Still loading... Almost there for eternity.</div>
      `;break}case"uselessAntivirus":{t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">NULLDEFEND ANTIVIRUS ENTERPRISE</div>
        <div style="font-size:56px;">🛡️</div>
        <div id="av-status" style="font-size:14px;font-weight:600;color:var(--status-green);">System Protected (No active threats)</div>
        <div id="av-sub" style="font-size:12px;color:var(--text-muted);">0 threats found. 0 productive programs allowed.</div>
        <button class="dialog-btn primary" id="btn-quick-scan">Run Quick Scan</button>
      `;const s=t.querySelector("#btn-quick-scan"),i=t.querySelector("#av-sub");s.addEventListener("click",()=>{l.playClick(),s.disabled=!0,s.textContent="Scanning 512,000 files...",setTimeout(()=>{l.playNotification(),s.disabled=!1,s.textContent="Scan Complete",i.textContent="Scanned 512,000 files in 1.2s. 0 Threats. 0 Ambitions found.",u.addScore(50)},1200)});break}case"performanceBooster":{t.innerHTML=`
        <div style="font-size:11px;font-weight:600;letter-spacing:1px;color:var(--text-secondary);">TURBO PERFORMANCE ACCELERATOR</div>
        <div style="font-size:56px;">🚀</div>
        <div id="boost-status" style="font-size:16px;font-weight:600;color:var(--text-primary);">System Velocity: 100%</div>
        <div id="boost-sub" style="font-size:12px;color:var(--text-muted);">Ready to accelerate imaginary clock frequencies.</div>
        <button class="dialog-btn primary" id="btn-boost">Boost Now</button>
      `;const s=t.querySelector("#btn-boost"),i=t.querySelector("#boost-status"),n=t.querySelector("#boost-sub");s.addEventListener("click",()=>{l.playNotification(),i.textContent="System Velocity: 1000% (Maximum Overclock)",i.style.color="var(--status-green)",n.textContent="Performance increased tenfold. Everything runs at the exact same speed.",u.addScore(100)});break}default:t.innerHTML=`
        <div style="font-size:48px;">📦</div>
        <div style="font-size:16px;font-weight:600;">${h}</div>
        <div style="font-size:12px;color:var(--text-secondary);">Application loaded successfully. It has no functional instructions.</div>
        <button class="dialog-btn primary" onclick="alert('Action completed. Zero result.')">Perform Task</button>
      `}return t}class Re{constructor(){this.pinnedApps=[{id:"appStore",name:"Store",icon:"appStore"},{id:"browser",name:"Browser",icon:"browser"},{id:"securityCenter",name:"Security",icon:"shieldCheck"},{id:"achievements",name:"Achievements",icon:"trophy"},{id:"fileManager",name:"Files",icon:"fileManager"},{id:"systemMonitor",name:"System Monitor",icon:"systemMonitor"},{id:"calculator",name:"Calculator",icon:"calculator"},{id:"settings",name:"Settings",icon:"settings"}],this.baseDesktopIcons=[{id:"appStore",name:"App Store",icon:"appStore",type:"app"},{id:"browser",name:"Useless Browser",icon:"browser",type:"app"},{id:"securityCenter",name:"Security Center",icon:"shieldCheck",type:"app"},{id:"achievements",name:"Achievements",icon:"trophy",type:"app"},{id:"fileManager",name:"This PC",icon:"fileManager",type:"app"},{id:"notepad",name:"Notepad",icon:"notepad",type:"app"},{id:"systemMonitor",name:"System Monitor",icon:"systemMonitor",type:"app"},{id:"calculator",name:"Calculator",icon:"calculator",type:"app"},{id:"terminal",name:"Terminal",icon:"terminal",type:"app"},{id:"recycleBin",name:"Recycle Bin",icon:"recycleBin",type:"app"},{id:"notice",name:"important_notice.txt",icon:"fileText",type:"file",path:"C:/Users/Aizen/Desktop/important_notice.txt"}],U.setLauncher((e,t)=>this.launchApp(e,t)),this.init()}init(){const e=document.getElementById("window-workspace");m.init(e),g.init(document.getElementById("modal-container")),_.init(document.getElementById("context-menu")),A.init(document.getElementById("notification-container")),S.start();const t=document.getElementById("boot-screen"),s=document.getElementById("lock-screen"),i=document.getElementById("desktop-environment");this.lockScreen=new ve(s,()=>{i.classList.add("active"),this.onDesktopReady()}),this.bootScreen=new ue(t,()=>{this.lockScreen.show()}),m.onWindowStateChange=(n,a)=>{this.updateTaskbar()},u.subscribe(()=>{this.renderDesktopIcons(),this.updateTaskbar()}),U.subscribe(()=>{this.renderDesktopIcons(),this.updateTaskbar()})}onDesktopReady(){this.renderDesktopIcons(),this.renderTaskbar();const e=document.getElementById("start-menu");this.startMenu=new me(e,(s,i)=>this.launchApp(s,i),{showMenu:(s,i)=>this.showPowerMenu(s,i)});const t=document.getElementById("quick-settings");this.quickSettings=new ge(t,s=>this.launchApp(s)),this.setupDesktopInteractions(),this.startClock(),setTimeout(()=>{this.launchApp("appStore")},500)}renderDesktopIcons(){const e=document.getElementById("desktop-grid");if(!e)return;e.innerHTML="";const t=[...this.baseDesktopIcons];O().forEach(i=>{u.isInstalled(i.id)&&!t.some(n=>n.id===i.id)&&t.push({id:i.id,name:i.name,iconText:i.icon,type:"app"})}),t.forEach(i=>{const n=document.createElement("div");n.className="desktop-icon",n.dataset.id=i.id;let a;i.iconText?a=`<div style="font-size:32px;">${i.iconText}</div>`:a=`<div class="desktop-icon-svg">${o[i.icon]||o.fileText}</div>`,n.innerHTML=`
        ${a}
        <span class="desktop-icon-label">${i.name}</span>
      `,n.addEventListener("click",r=>{r.stopPropagation(),e.querySelectorAll(".desktop-icon").forEach(c=>c.classList.remove("selected")),n.classList.add("selected")}),n.addEventListener("dblclick",()=>{i.type==="app"?this.launchApp(i.id):i.type==="file"&&this.launchApp("notepad",{path:i.path})}),n.addEventListener("contextmenu",r=>{r.preventDefault(),r.stopPropagation(),e.querySelectorAll(".desktop-icon").forEach(c=>c.classList.remove("selected")),n.classList.add("selected"),_.show(r.clientX,r.clientY,[{label:"Open",icon:o.fileText,action:()=>{i.type==="app"?this.launchApp(i.id):this.launchApp("notepad",{path:i.path})}},{label:"Properties",icon:o.info,action:()=>{g.show({title:`${i.name} Properties`,message:i.name,subtext:`Target: ${i.id}
Status: Certified Useless
Persistence: Active in Local Storage`,type:"info"})}}])}),e.appendChild(n)}),document.getElementById("wallpaper-layer").addEventListener("click",()=>{e.querySelectorAll(".desktop-icon").forEach(i=>i.classList.remove("selected"))})}renderTaskbar(){const e=document.getElementById("taskbar");e.innerHTML=`
      <div class="taskbar-apps-container" id="taskbar-apps">
        <button class="taskbar-item" id="taskbar-start-btn" title="Start">
          ${o.osLogo}
        </button>
        <button class="taskbar-search-btn" id="taskbar-search-btn">
          ${o.search}
          <span>Search</span>
        </button>
        <div id="taskbar-pinned-icons" style="display:flex;align-items:center;gap:3px;height:100%;"></div>
      </div>

      <div class="taskbar-tray">
        <div class="tray-group" id="tray-network-group" title="Internet & Quick Settings">
          ${o.wifi}
          ${o.volume}
          ${o.battery}
        </div>

        <div class="tray-clock" id="tray-clock" title="Date & Time" style="cursor:pointer;">
          <span class="tray-clock-time" id="tray-time">18:34</span>
          <span class="tray-clock-date" id="tray-date">11-09-2026</span>
        </div>

        <div class="taskbar-peek" id="taskbar-peek" title="Show Desktop"></div>
      </div>
    `,e.querySelector("#taskbar-start-btn").addEventListener("click",()=>{this.startMenu.toggle(),this.quickSettings&&this.quickSettings.close()}),e.querySelector("#taskbar-search-btn").addEventListener("click",()=>{this.startMenu.open()}),e.querySelector("#tray-network-group").addEventListener("click",()=>{this.quickSettings.toggle(),this.startMenu&&this.startMenu.close()}),e.querySelector("#taskbar-peek").addEventListener("click",()=>{l.playClick(),m.windows.forEach(t=>{m.minimizeWindow(t.id)})}),e.querySelector("#tray-clock").addEventListener("click",()=>{l.playClick(),K.checkClockReminder()}),this.updateTaskbar()}updateTaskbar(){const e=document.getElementById("taskbar-pinned-icons");if(!e)return;e.innerHTML="";const t=[...this.pinnedApps];m.windows.forEach((s,i)=>{t.some(n=>n.id===i)||t.push({id:i,name:s.title,icon:s.icon})}),t.forEach(s=>{const i=m.getWindow(s.id),n=!!i,a=n&&m.activeWindowId===s.id&&!i.isMinimized,r=document.createElement("button");r.className=`taskbar-item ${n?"active":""} ${a?"focused":""}`,r.title=s.name;let c;if(o[s.icon])c=o[s.icon];else{const d=O().find(p=>p.id===s.id);c=d!=null&&d.icon?`<span style="font-size:18px;">${d.icon}</span>`:o.fileManager}r.innerHTML=`
        ${c}
        ${n?'<div class="taskbar-indicator"></div>':""}
      `,r.addEventListener("click",()=>{n?a?m.minimizeWindow(s.id):i.isMinimized?m.restoreWindow(s.id):m.focusWindow(s.id):this.launchApp(s.id)}),e.appendChild(r)})}launchApp(e,t=null){if(b.recordAppOpen(e),e==="rockSimulator"?k.incrementProgress("rock-collector",1):e==="box3D"&&k.incrementProgress("box-enthusiast",1),m.windows.has(e)){m.getWindow(e).isMinimized&&m.restoreWindow(e),m.focusWindow(e);return}if(e==="appStore"){const n=new fe((a,r)=>this.launchApp(a,r));m.createWindow({id:"appStore",title:"Useless App Store",icon:"appStore",width:880,height:580,minWidth:620,minHeight:400,content:n.getElement()});return}if(e==="securityCenter"){const n=new be;m.createWindow({id:"securityCenter",title:"Security Center",icon:"shieldCheck",width:860,height:560,minWidth:600,minHeight:420,content:n.getElement()});return}if(e==="browser"){const n=new we;m.createWindow({id:"browser",title:"Useless Browser",icon:"browser",width:900,height:600,minWidth:580,minHeight:400,content:n.getElement()});return}if(e==="achievements"){const n=new ke;m.createWindow({id:"achievements",title:"Achievements",icon:"trophy",width:780,height:540,minWidth:540,minHeight:380,content:n.getElement()});return}if(e==="developerConsole"){const n=new Se(a=>this.launchApp(a));m.createWindow({id:"developerConsole",title:"Developer & Diagnostic Console",icon:"code",width:720,height:460,minWidth:480,minHeight:300,content:n.getElement()});return}if(e==="hidden_nothing"){const n=new ze;m.createWindow({id:"hidden_nothing",title:"Nothing",icon:"boxIcon",width:440,height:320,minWidth:300,minHeight:200,content:n.getElement()});return}if(e==="hidden_loading"){const n=new Ie;m.createWindow({id:"hidden_loading",title:"Loading Simulator",icon:"refresh",width:460,height:320,minWidth:320,minHeight:220,content:n.getElement()});return}if(e==="hidden_productivity"){const n=new Pe;m.createWindow({id:"hidden_productivity",title:"Productivity Mode",icon:"warning",width:440,height:300,minWidth:300,minHeight:200,content:n.getElement()});return}if(e==="hidden_secretCalc"){const n=new qe;m.createWindow({id:"hidden_secretCalc",title:"Secret Calculator",icon:"calculator",width:320,height:440,minWidth:280,minHeight:380,content:n.getElement()});return}const s=U.getCustomApp(e);if(s){let n=null;if(typeof s.launch=="function")try{n=s.launch()}catch(a){console.error(a)}n||(n=document.createElement("div"),n.style.padding="24px",n.style.textAlign="center",n.innerHTML=`
          <div style="font-size:48px;margin-bottom:12px;">${s.icon||"📦"}</div>
          <h2>${s.name}</h2>
          <p style="color:var(--text-secondary);font-size:13px;margin:8px auto;max-width:320px;">
            ${s.description}
          </p>
          <div style="margin-top:16px;font-size:11px;color:var(--text-muted);">
            Uselessness Level: ${s.uselessness}% · Version: ${s.version}
          </div>
        `),m.createWindow({id:s.id,title:s.name,icon:"appStore",width:520,height:420,content:n});return}const i=T.find(n=>n.id===e);if(i){const n=Be(e);m.createWindow({id:e,title:i.name,icon:"appStore",width:480,height:420,minWidth:320,minHeight:280,content:n});return}switch(e){case"fileManager":{const n=new Ce((a,r)=>this.launchApp(a,r));m.createWindow({id:"fileManager",title:"File Manager",icon:"fileManager",width:780,height:500,minWidth:480,minHeight:320,content:n.getElement()});break}case"systemMonitor":{const n=new Ee;m.createWindow({id:"systemMonitor",title:"System Monitor",icon:"systemMonitor",width:760,height:500,minWidth:520,minHeight:340,content:n.getElement(),onClose:()=>n.destroy()});break}case"calculator":{const n=new Le;m.createWindow({id:"calculator",title:"Calculator",icon:"calculator",width:320,height:440,minWidth:280,minHeight:380,content:n.getElement()});break}case"notepad":{const n=new Me(t);m.createWindow({id:"notepad",title:t!=null&&t.path?`Notepad - ${t.path.split("/").pop()}`:"Notepad - Untitled",icon:"notepad",width:680,height:460,minWidth:360,minHeight:240,content:n.getElement()});break}case"terminal":{let n=null;const a=new Ae(()=>{n&&m.closeWindow("terminal")});n=m.createWindow({id:"terminal",title:"Terminal - C:\\Users\\Aizen",icon:"terminal",width:660,height:420,minWidth:400,minHeight:260,content:a.getElement()});break}case"settings":{const n=new Te(a=>{const r=document.getElementById("wallpaper-layer");r.className=a},a=>this.launchApp(a));m.createWindow({id:"settings",title:"Settings",icon:"settings",width:800,height:540,minWidth:540,minHeight:380,content:n.getElement()});break}case"recycleBin":{const n=new $e;m.createWindow({id:"recycleBin",title:"Recycle Bin",icon:"recycleBin",width:680,height:420,minWidth:420,minHeight:280,content:n.getElement()});break}}}setupDesktopInteractions(){const e=document.getElementById("wallpaper-layer");e.addEventListener("click",()=>{K.recordDesktopClick()}),e.addEventListener("contextmenu",t=>{t.preventDefault(),_.show(t.clientX,t.clientY,[{label:"View",icon:o.sun,action:()=>{}},{label:"Sort by Existential Weight",icon:o.cpu,action:()=>{this.renderDesktopIcons()}},{label:"Refresh",icon:o.refresh,action:()=>{document.getElementById("desktop-environment").style.opacity="0.7",setTimeout(()=>{document.getElementById("desktop-environment").style.opacity="1"},80)}},{separator:!0},{label:"Open App Store",icon:o.appStore,action:()=>this.launchApp("appStore")},{label:"Open Browser",icon:o.browser,action:()=>this.launchApp("browser")},{label:"New Text Document",icon:o.fileText,action:()=>this.launchApp("notepad")},{separator:!0},{label:"Display Settings",icon:o.systemMonitor,action:()=>this.launchApp("settings")},{label:"Personalize",icon:o.sun,action:()=>this.launchApp("settings")}])})}showPowerMenu(e,t){_.show(e,t-100,[{label:"Sleep",icon:o.moon,action:()=>{this.lockScreen.show()}},{label:"Restart",icon:o.restart,action:()=>{window.location.reload()}},{label:"Shut down",icon:o.power,action:()=>{g.show({title:"System Shutdown",message:"Shutdown halted by kernel.",subtext:"Reason: Useless OS requires your undivided companionship.",type:"warning"})}}])}startClock(){const e=document.getElementById("tray-time"),t=document.getElementById("tray-date"),s=()=>{const i=new Date,n=String(i.getHours()).padStart(2,"0"),a=String(i.getMinutes()).padStart(2,"0");e&&(e.textContent=`${n}:${a}`);const r=String(i.getDate()).padStart(2,"0"),c=String(i.getMonth()+1).padStart(2,"0"),d=i.getFullYear();t&&(t.textContent=`${r}-${c}-${d}`)};s(),setInterval(s,1e3)}}window.addEventListener("DOMContentLoaded",()=>{window.NullOS=new Re});

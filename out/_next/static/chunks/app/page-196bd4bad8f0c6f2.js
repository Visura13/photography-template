(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7072:(e,t,a)=>{Promise.resolve().then(a.bind(a,7206)),Promise.resolve().then(a.bind(a,7370)),Promise.resolve().then(a.bind(a,2897)),Promise.resolve().then(a.bind(a,4368)),Promise.resolve().then(a.bind(a,4650)),Promise.resolve().then(a.bind(a,7460))},7206:(e,t,a)=>{"use strict";a.d(t,{default:()=>h});var s=a(5155),r=a(9269),i=a(2115),l=a(856),n=a(2796),o=a(4092),d=a(9602);let c=e=>{let{words:t,className:a,filter:r=!1,duration:c=.5}=e,[m,h]=(0,l.l)(),x=t.split(" ");return(0,i.useEffect)(()=>{h("span",{opacity:1,filter:r?"blur(0px)":"none"},{duration:c||1,delay:(0,n.y)(.2)})},[m.current]),(0,s.jsx)("div",{className:(0,d.cn)("",a),children:(0,s.jsx)("div",{className:"mt-4",children:(0,s.jsx)("div",{className:" dark:text-white text-gray-900 text-xl leading-snug tracking-wide",children:(0,s.jsx)(o.P.div,{ref:m,children:x.map((e,t)=>(0,s.jsxs)(o.P.span,{className:"dark:text-white text-gray-900 opacity-0",style:{filter:r?"blur(10px)":"none"},children:[e," "]},e+t))})})})})};var m=a(8586);let h=()=>{let e=(0,i.useRef)(null),t=(0,m.W)(e,{once:!0,amount:.1});return(0,s.jsxs)("section",{ref:e,className:"py-10 px-5",id:"About",children:[(0,s.jsx)(o.P.h2,{className:"text-5xl font-semibold tracking-tighter text-center",initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.3},children:"About Us."}),(0,s.jsx)(o.P.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.5},className:"h-1 w-24 bg-blue-950 mb-12 mx-auto"}),(0,s.jsx)("div",{className:"flex flex-col items-center mt-10 md:mx-40",children:(0,s.jsx)(c,{className:"text-balance text-center text-xl ",words:r.gh})})]})}},7370:(e,t,a)=>{"use strict";a.d(t,{default:()=>u});var s=a(5155),r=a(9269),i=a(9602),l=a(5087),n=a(8956),o=a(4092),d=a(2115),c=a(5565);let m=d.memo(e=>{let{card:t,index:a,hovered:r,setHovered:l,totalColumns:n}=e,o=r.globalIndex===a,d=null!==r.globalIndex;return(0,s.jsxs)("div",{onMouseEnter:()=>l({globalIndex:a,columnIndex:Math.floor(a/Math.ceil(n))}),onMouseLeave:()=>l({globalIndex:null,columnIndex:null}),className:(0,i.cn)("rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out cursor-pointer",d&&!o&&"blur-sm scale-[0.98]"),children:[(0,s.jsx)(c.default,{src:t,alt:t,fill:!0,className:"object-cover absolute inset-0"}),(0,s.jsx)("div",{className:(0,i.cn)("absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",o?"opacity-100":"opacity-0"),children:(0,s.jsx)("div",{className:"text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200",children:"Dilusha & Udara"})})]})});m.displayName="Card";let h=e=>{let{images:t,className:a}=e,r=(0,d.useRef)(null),{scrollYProgress:c}=(0,l.L)({}),h=(0,n.G)(c,[0,1],[0,-200]),x=(0,n.G)(c,[0,1],[0,200]),u=(0,n.G)(c,[0,1],[0,-200]),p=Math.ceil(t.length/3),g=t.slice(0,p),y=t.slice(p,2*p),f=t.slice(2*p),[v,b]=(0,d.useState)({globalIndex:null,columnIndex:null});return(0,s.jsx)("div",{className:(0,i.cn)("overflow-hidden items-start max-w-6xl mx-auto shadow-lg",a),ref:r,children:(0,s.jsxs)("div",{className:"bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start w-full mx-auto gap-10 pt-28 -mb-24 sm:mb-0 sm:pt-0 md:py-24 px-4 md:px-10",ref:r,children:[(0,s.jsx)("div",{className:"grid gap-10",children:g.map((e,a)=>(0,s.jsx)(o.P.div,{style:{y:h},children:(0,s.jsx)(m,{card:e,index:a,hovered:v,setHovered:b,totalColumns:t.length},a)},"grid-1"+a))}),(0,s.jsx)("div",{className:"hidden sm:grid gap-10",children:y.map((e,a)=>(0,s.jsx)(o.P.div,{style:{y:x},children:(0,s.jsx)(m,{card:e,index:a+p,hovered:v,setHovered:b,totalColumns:t.length},a)},"grid-2"+a))}),(0,s.jsx)("div",{className:"hidden sm:grid gap-10",children:f.map((e,a)=>(0,s.jsx)(o.P.div,{style:{y:u},children:(0,s.jsx)(m,{card:e,index:a+2*p,hovered:v,setHovered:b,totalColumns:t.length},a)},"grid-3"+a))})]})})};var x=a(8586);let u=()=>{let e=(0,d.useRef)(null),t=(0,x.W)(e,{once:!0,amount:.1});return(0,s.jsxs)("section",{ref:e,id:"work",className:"my-12 mx-4",children:[(0,s.jsx)(o.P.h2,{className:"text-center text-5xl font-semibold tracking-tight",initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.3},children:"Our Work."}),(0,s.jsx)(o.P.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.5},className:"h-1 w-24 bg-blue-950 mb-12 mx-auto"}),(0,s.jsx)(h,{images:r.zC})]})}},2897:(e,t,a)=>{"use strict";a.d(t,{default:()=>m});var s=a(5155),r=a(6462),i=a(3831),l=a(7223),n=a(4085),o=a(8586),d=a(4092),c=a(2115);function m(){let e=(0,c.useRef)(null),t=(0,o.W)(e,{once:!0,amount:.1});return(0,s.jsxs)("section",{ref:e,id:"contact",className:"py-20 px-4",children:[(0,s.jsx)(d.P.h2,{className:"text-5xl font-semibold tracking-tighter text-center",initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.3},children:"Contact Us."}),(0,s.jsx)(d.P.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.5},className:"h-1 w-24 bg-blue-950 mb-12 mx-auto"}),(0,s.jsx)("div",{className:"bg-background text-foreground shadow-lg overflow-hidden max-w-6xl mx-auto",children:(0,s.jsxs)("div",{className:"flex flex-col md:flex-row",children:[(0,s.jsxs)("div",{className:"md:w-1/2 p-8",children:[(0,s.jsx)("p",{className:"mb-6",children:"Contact me for more information about my portrait photography, pre-shoot photography and wedding photography in Sri Lanka, and enjoy the best photo shoot experience you ever had."}),(0,s.jsxs)("div",{className:"space-y-4",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,s.jsx)(r.A,{className:"w-5 h-5 text-primary"}),(0,s.jsx)("span",{children:"contact@example.com"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,s.jsx)(i.A,{className:"w-5 h-5 text-primary"}),(0,s.jsx)("span",{children:"+1 (555) 123-4567"})]}),(0,s.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,s.jsx)(l.A,{className:"w-5 h-5 text-primary"}),(0,s.jsx)("span",{children:"123 Main St, Anytown, ST 12345"})]})]}),(0,s.jsxs)("div",{className:"pt-20",children:[(0,s.jsx)("h3",{className:"text-xl font-semibold mb-3",children:"Connect With Us"}),(0,s.jsxs)("div",{className:"flex space-x-2",children:[(0,s.jsx)(n.$,{variant:"outline",size:"icon",asChild:!0,children:(0,s.jsxs)("a",{href:"https://facebook.com",target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",clipRule:"evenodd"})}),(0,s.jsx)("span",{className:"sr-only",children:"Facebook"})]})}),(0,s.jsx)(n.$,{variant:"outline",size:"icon",asChild:!0,children:(0,s.jsxs)("a",{href:"https://twitter.com",target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,s.jsx)("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})}),(0,s.jsx)("span",{className:"sr-only",children:"Twitter"})]})}),(0,s.jsx)(n.$,{variant:"outline",size:"icon",asChild:!0,children:(0,s.jsxs)("a",{href:"https://linkedin.com",target:"_blank",rel:"noopener noreferrer",children:[(0,s.jsx)("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true",children:(0,s.jsx)("path",{fillRule:"evenodd",d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",clipRule:"evenodd"})}),(0,s.jsx)("span",{className:"sr-only",children:"LinkedIn"})]})})]})]})]}),(0,s.jsx)("div",{className:"w-full md:w-1/2 h-[300px] md:h-auto order-last md:order-last",children:(0,s.jsx)("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2412634965843!2d-73.98656668459469!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1629814463183!5m2!1sen!2sus",width:"100%",height:"100%",style:{border:0},allowFullScreen:!0,loading:"lazy"})})]})})]})}},4368:(e,t,a)=>{"use strict";a.d(t,{default:()=>m});var s=a(5155),r=a(2115),i=a(4092),l=a(3518),n=a(6967),o=a(4085),d=a(7396),c=a(9269);let m=()=>{let[e,t]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let e=setInterval(()=>{t(e=>(e+1)%c.l3.length)},5e3);return()=>clearInterval(e)},[]),(0,s.jsxs)("section",{className:"relative h-[100vh] w-full overflow-hidden",children:[(0,s.jsx)("img",{src:c.l3[e],alt:"Hero background",className:"absolute inset-0 object-cover w-full h-full transition-opacity duration-1000"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-black/50"}),(0,s.jsxs)("div",{className:"relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)(i.P.h1,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut"},className:"max-w-3xl text-4xl font-serif text-white sm:text-5xl md:text-6xl lg:text-7xl",children:["Modern Art",(0,s.jsx)("br",{}),"Photography"]}),(0,s.jsx)(i.P.p,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut",delay:.2},className:"max-w-2xl mt-3 text-lg text-white/90",children:"Join with us to make your life successful."}),(0,s.jsx)(i.P.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,ease:"easeOut",delay:.4},className:"flex flex-col mt-6 sm:flex-row gap-4",children:(0,s.jsx)(o.$,{asChild:!0,size:"lg",variant:"outline",className:"text-white bg-transparent hover:bg-white/10 hover:text-white rounded-none",children:(0,s.jsx)(d.default,{href:"#Consultation",children:"Contact Us"})})})]}),(0,s.jsx)("button",{onClick:()=>{t(e=>0===e?c.l3.length-1:e-1)},className:"absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition",children:(0,s.jsx)(l.A,{})}),(0,s.jsx)("button",{onClick:()=>{t(e=>(e+1)%c.l3.length)},className:"absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 text-zinc-200 p-3 rounded-full hover:bg-black/70 transition",children:(0,s.jsx)(n.A,{})})]})}},4650:(e,t,a)=>{"use strict";a.d(t,{default:()=>h});var s=a(5155),r=a(8586),i=a(4092),l=a(2115),n=a(9602);let o=l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...r})});o.displayName="Card",l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex flex-col space-y-1.5 p-6",a),...r})}).displayName="CardHeader",l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("font-semibold leading-none tracking-tight",a),...r})}).displayName="CardTitle",l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("text-sm text-muted-foreground",a),...r})}).displayName="CardDescription",l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("p-6 pt-0",a),...r})}).displayName="CardContent",l.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,n.cn)("flex items-center p-6 pt-0",a),...r})}).displayName="CardFooter";var d=a(5565);function c(e){let{service:t,isInView:a}=e,[r,n]=(0,l.useState)(!1);return(0,l.useEffect)(()=>{a&&!r&&n(!0)},[a,r]),(0,s.jsx)(i.P.div,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.7},className:"hover:z-10",children:(0,s.jsxs)(o,{className:"rounded-none w-full min-w-80 max-w-sm overflow-hidden relative h-80 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md cursor-pointer hover:shadow-2xl",children:[(0,s.jsx)(d.default,{alt:t.title+" image",className:"object-cover",fill:!0,src:t.image}),(0,s.jsx)("div",{className:"absolute bottom-0 left-0 right-0 bg-black/70 p-4",children:(0,s.jsx)("h3",{className:"text-xl font-semibold text-white",children:t.title})})]})})}var m=a(9269);function h(){let e=(0,l.useRef)(null),t=(0,r.W)(e,{once:!0,amount:.1});return(0,s.jsx)("section",{ref:e,id:"Services",className:"w-full max-w-7xl mx-auto pt-12 pb-20",children:(0,s.jsxs)("div",{className:"container px-4 md:px-6 mx-auto",children:[(0,s.jsx)(i.P.h2,{className:"text-5xl font-semibold tracking-tighter text-center",initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.3},children:"Our Services"}),(0,s.jsx)(i.P.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.5},className:"h-1 w-24 bg-blue-950 mb-12 mx-auto"}),(0,s.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mx-auto",children:m.$p.map((e,a)=>(0,s.jsx)(c,{service:e,index:a,isInView:t},a))})]})})}},7460:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var s=a(5155),r=a(9269),i=a(8586),l=a(4092),n=a(2115);let o=()=>{let e=(0,n.useRef)(null),t=(0,i.W)(e,{once:!0,amount:.1}),[a,o]=(0,n.useState)(0),d=()=>{o(e=>e===r.rR.length-1?0:e+1)};return(0,n.useEffect)(()=>{let e=setInterval(()=>{d()},4e3);return()=>clearInterval(e)},[]),(0,s.jsx)("section",{ref:e,id:"testimonials",className:"max-w-6xl mx-auto mt-20",children:(0,s.jsxs)("div",{className:"container mx-auto px-4",children:[(0,s.jsx)(l.P.h2,{className:"text-5xl font-semibold tracking-tighter text-center",initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.3},children:"Notes From Our Clients."}),(0,s.jsx)(l.P.div,{initial:{opacity:0,y:30},animate:t?{opacity:1,y:0}:{opacity:0,y:30},transition:{duration:.75,delay:.5},className:"h-1 w-24 bg-blue-950 mb-12 mx-auto"}),(0,s.jsxs)("div",{className:"bg-white shadow-lg relative text-center py-8 px-8 md:px-32 min-h-[540px] md:min-h-96",children:[(0,s.jsx)("img",{src:r.rR[a].image,alt:r.rR[a].name,className:"mx-auto w-24 h-24 object-cover rounded-full mb-4 shadow-lg"}),(0,s.jsxs)("blockquote",{className:"text-gray-600 text-lg leading-relaxed mb-4",children:["“ ",r.rR[a].feedback," ”"]}),(0,s.jsxs)("p",{className:"font-semibold text-sm uppercase text-gray-700",children:["— ",r.rR[a].name]}),(0,s.jsx)("button",{onClick:()=>{o(e=>0===e?r.rR.length-1:e-1)},className:"absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 text-3xl text-gray-400 hover:text-gray-600","aria-label":"Previous testimonial",children:"←"}),(0,s.jsx)("button",{onClick:d,className:"absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 text-3xl text-gray-400 hover:text-gray-600","aria-label":"Next testimonial",children:"→"})]})]})})}},4085:(e,t,a)=>{"use strict";a.d(t,{$:()=>d});var s=a(5155),r=a(2115),i=a(2317),l=a(1027),n=a(9602);let o=(0,l.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:a,variant:r,size:l,asChild:d=!1,...c}=e,m=d?i.DX:"button";return(0,s.jsx)(m,{className:(0,n.cn)(o({variant:r,size:l,className:a})),ref:t,...c})});d.displayName="Button"},9269:(e,t,a)=>{"use strict";a.d(t,{$p:()=>n,gh:()=>l,l3:()=>i,rG:()=>r,rR:()=>o,zC:()=>s});let s=["/parallax1.jpg","/parallax2.jpg","/parallax3.jpg","/parallax4.jpeg","/parallax6.jpg","/parallax7.jpg","/parallax8.jpg","/parallax5.jpg","/hero1.jpg","/parallax1.jpg","/parallax2.jpg","/parallax3.jpg","/parallax4.jpeg","/parallax6.jpg","/parallax7.jpg","/parallax8.jpg","/parallax5.jpg","/hero1.jpg"],r=["About","Services","Work","Testimonials"],i=["/hero1.jpg","/parallax1.jpg"],l="Welcome to [Your Website Name], where every click tells a story! We are passionate photographers dedicated to capturing life's most cherished moments and turning them into timeless memories. Whether it's a dreamy wedding, a lively event, a heartwarming family portrait, or the simple beauty of nature, our lens seeks to preserve the emotions and essence of every scene. Our creative team combines technical expertise with artistic vision to deliver stunning visuals that resonate with your heart. With a commitment to quality and a personalized approach, we ensure that every project reflects your unique story and style. Let us frame your moments, one snapshot at a time.",n=[{title:"Wedding Shoots",image:"/parallax1.jpg"},{title:"Pre Shoots",image:"/parallax2.jpg"},{title:"Portraits",image:"/parallax3.jpg"}],o=[{id:1,name:"IMASHA & NIMESH",feedback:"Choosing [Photographer's Name] was the best decision we made! Their ability to find beauty in every little moment is unmatched. From candid shots to stunning portraits, the photos were simply perfect. Not only are they incredibly talented, but their friendly and patient personality made us feel so comfortable. We’ll cherish these memories forever. Thank you for your outstanding work!",image:"parallax1.jpg"},{id:2,name:"JANE & JOHN",feedback:"I can’t express how grateful we are to [Photographer's Name] for capturing the most important day of our lives. Each photo was filled with emotion, detail, and a magical touch that made us relive the day all over again. Their calm, professional approach put everyone at ease, and the results were nothing short of breathtaking. Truly an artist behind the lens! Highly recommend!",image:"parallax2.jpg"},{id:3,name:"SARAH & DAVID",feedback:"Working with [Photographer's Name] was an absolute pleasure! From start to finish, they captured every special moment so beautifully and effortlessly. The photos were beyond our expectations — natural, vibrant, and truly tell a story. [Photographer's Name] has an incredible eye for detail, and their professionalism made the whole experience enjoyable. I highly recommend them to anyone looking to create lifelong memories through photos. Thank you so much for your amazing work!",image:"parallax3.jpg"}]},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var s=a(3463),r=a(9795);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,s.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[208,857,441,517,358],()=>t(7072)),_N_E=e.O()}]);
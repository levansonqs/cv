(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{192:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(199),c=t(197),i=t(214),r=t.n(i),m=Object(l.memo)(function(){var e=n.a.useState(!0),a=e[0],t=e[1];return n.a.createElement("div",{className:"card",style:{overflow:a?"hidden":"visible"}},n.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},n.a.createElement("img",{className:"activator",src:r.a})),n.a.createElement("div",{className:"card-content"},n.a.createElement("span",{className:"card-title activator grey-text text-darken-4",onClick:function(){return t(!a)}},"My blog",n.a.createElement("i",{className:"material-icons right"},"more_vert")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("p",null,"If you want a fixed floating action button, you can add multiple actions that will appear on hover. Our demo is in the bottom righthand corner of the page."))),n.a.createElement("div",{className:"row product-row"},n.a.createElement("div",{className:"col s8"},n.a.createElement("div",{className:"chip"},"Javascript"),n.a.createElement("div",{className:"chip"},"Gatsby")),n.a.createElement("div",{className:"col s4 right-align"},n.a.createElement("a",{className:"btn-floating btn-large waves-effect waves-light red",href:"https://levansonqs.github.io/experience/"},n.a.createElement("i",{className:"material-icons"},"link"))))),n.a.createElement("div",{className:"card-reveal",style:{display:"block",opacity:a?0:1,transform:a?"translateY(0)":"translateY(-100%)"}},n.a.createElement("span",{className:"card-title grey-text text-darken-4",onClick:function(){return t(!a)}},n.a.createElement("i",{className:"material-icons right"},"close"),"Card Title"),n.a.createElement("p",null,"Here is some more information about this product that is only revealed once clicked on.")))});a.default=function(){return n.a.createElement(s.a,null,n.a.createElement(c.a,{title:"Project"}),n.a.createElement(m,null))}},193:function(e,a,t){var l;e.exports=(l=t(195))&&l.default||l},194:function(e){e.exports={data:{site:{siteMetadata:{title:"Le Van Son",role:"Fullstack Developer",description:"Cv, le van son, fullstack developer, web developer, mobile developer",skill:[{name:"Javascript",point:85},{name:"Html",point:90},{name:"Css",point:90},{name:"English",point:70},{name:"PHP",point:80},{name:"SQL",point:80},{name:"ReactJS",point:85},{name:"ReactNative",point:85}]}}}}},195:function(e,a,t){"use strict";t.r(a);t(22);var l=t(0),n=t.n(l),s=t(90);a.default=function(e){var a=e.location,t=e.pageResources;return t?n.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null}},196:function(e,a,t){e.exports=t.p+"static/logo-4bfaa650a42680d28b32b8df23e8ac89.jpg"},197:function(e,a,t){"use strict";var l=t(198),n=t(0),s=t.n(n),c=t(204),i=t.n(c);function r(e){var a=e.description,t=e.lang,n=e.meta,c=e.title,r=l.data.site,m=a||r.siteMetadata.description;return s.a.createElement(i.a,{htmlAttributes:{lang:t},title:c,titleTemplate:"%s | "+r.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(n)},s.a.createElement("link",{href:"http://fonts.googleapis.com/css?family=Roboto:400,100,300,700,400italic,700italic",rel:"stylesheet",type:"text/css"}),s.a.createElement("link",{href:"https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet",integrity:"sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN",crossorigin:"anonymous"}),s.a.createElement("link",{href:"https://fonts.googleapis.com/icon?family=Material+Icons",rel:"stylesheet"}))}r.defaultProps={lang:"en",meta:[],description:""},a.a=r},198:function(e){e.exports={data:{site:{siteMetadata:{title:"Le Van Son",description:"Cv, le van son, fullstack developer, web developer, mobile developer",author:"@levansonqs"}}}}},199:function(e,a,t){"use strict";t(49);var l=t(194),n=t(0),s=t.n(n),c=t(66),i=t.n(c);t(193),t(9).default.enqueue,s.a.createContext({});var r=t(196),m=t.n(r);t(200),t(201),t(202),t(203),a.a=function(e){var a=e.children,t=l.data,n=s.a.useState(!0),c=n[0],r=n[1];return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("aside",{className:"col l4 m12 s12 sidebar z-depth-1",id:"sidebar"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"heading"},s.a.createElement("div",{className:"feature-img"},s.a.createElement(i.a,{to:"/"},s.a.createElement("img",{src:m.a,className:"responsive-img",alt:""}))),s.a.createElement("div",{className:" nav-icon"},s.a.createElement("nav",null,s.a.createElement("div",{className:"nav-wrapper"},s.a.createElement("ul",{id:"nav-mobile",className:"side-nav",style:{left:c?"-300px":0}},s.a.createElement("li",null,s.a.createElement(i.a,{to:"/"},"Resume")),s.a.createElement("li",null,s.a.createElement(i.a,{to:"/project"},"Projects")),s.a.createElement("li",null,s.a.createElement("a",{href:"https://levansonqs.github.io/experience/"},"Blog")),s.a.createElement("li",null,s.a.createElement(i.a,{to:"/contact"},"Contact"))),s.a.createElement("a",{href:"#",onClick:function(){r(!c)},"data-activates":"nav-mobile",className:"button-collapse  "},s.a.createElement("i",{className:"large material-icons"},"menu"))))),s.a.createElement("div",{className:"title col s12 m12 l9 right  wow fadeIn animated","data-wow-delay":"0.1s"},s.a.createElement("h2",null,t.site.siteMetadata.title),s.a.createElement("span",null,t.site.siteMetadata.role))),s.a.createElement("div",{className:"col l12 m12 s12 sort-info sidebar-item"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col m12 s12 l3 icon"},s.a.createElement("i",{className:"fa fa-user"})),s.a.createElement("div",{className:"col m12 s12 l9 info wow fadeIn a1 animated","data-wow-delay":"0.1s"},s.a.createElement("div",{className:"section-item-details"},s.a.createElement("ul",{className:"summary"},s.a.createElement("li",null," 4+ years experienced in software development."),s.a.createElement("li",null," 3+ years experienced with PHP Laravel MVC"),s.a.createElement("li",null,"2+ years experienced with React Native and ReactJS, NodeJS"),s.a.createElement("li",null,"Excellent communication, positive attitude, teamwork."),s.a.createElement("li",null,"Training and help members develop in career path."),s.a.createElement("li",null," Interested in R&D for new technologies.")))))),s.a.createElement("div",{className:"col l12 m12 s12  mobile sidebar-item"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col m12 s12 l3 icon"},s.a.createElement("i",{className:"fa fa-phone"})),s.a.createElement("div",{className:"col m12 s12 l9 info wow fadeIn a2 animated","data-wow-delay":"0.2s"},s.a.createElement("div",{className:"section-item-details"},s.a.createElement("div",{className:"personal"},s.a.createElement("h4",null,s.a.createElement("a",{href:"tel:+84349566781"},"(+84)-3495-66781")),s.a.createElement("span",null,"mobile")))))),s.a.createElement("div",{className:"col l12 m12 s12  email sidebar-item "},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col m12 s12 l3 icon"},s.a.createElement("i",{className:"fa fa-envelope"})),s.a.createElement("div",{className:"col m12 s12 l9 info wow fadeIn a3 animated","data-wow-delay":"0.3s"},s.a.createElement("div",{className:"section-item-details"},s.a.createElement("div",{className:"personal"},s.a.createElement("h4",null,s.a.createElement("a",{href:"mailto:levansonqs@gmail.com"},"levansonqs@gmail.com")),s.a.createElement("span",null,"personal")))))),s.a.createElement("div",{className:"col l12 m12 s12  address sidebar-item "},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col l3 m12  s12 icon"},s.a.createElement("i",{className:"fa fa-home"})),s.a.createElement("div",{className:"col m12 s12 l9 info wow fadeIn a4 animated","data-wow-delay":"0.4s"},s.a.createElement("div",{className:"section-item-details"},s.a.createElement("div",{className:"address-details"},s.a.createElement("h4",null,"39-41 Quang Trung street",s.a.createElement("span",null,"(4nd floor)"),s.a.createElement("br",null),"Hai Chau, Da Nang.",s.a.createElement("br",null),s.a.createElement("span",null,"550000"))))))),s.a.createElement("div",{className:"col l12 m12 s12  skills sidebar-item"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col m12 l3 s12 icon"},s.a.createElement("i",{className:"fa fa-calendar-o"})),s.a.createElement("div",{className:"col m12 l9 s12 skill-line a5 wow fadeIn animated","data-wow-delay":"0.5s"},s.a.createElement("h3",null,"Professional Skills "),t.site.siteMetadata.skill.map(function(e,a){return s.a.createElement(s.a.Fragment,{key:a},s.a.createElement("span",null,e.name),s.a.createElement("div",{className:"progress"},s.a.createElement("div",{className:"determinate",style:{width:e.point+"%"}},s.a.createElement("i",{className:"fa fa-circle"}))))})))))),s.a.createElement("section",{className:"col s12 m12 l8 section"},s.a.createElement("div",{className:"row"},a,s.a.createElement("div",{className:"section-wrapper z-depth-1 wow fadeIn","data-wow-delay":"0.1s"},s.a.createElement("div",{className:"col s12 m12 l10 website right"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col s12 m12 l6"},s.a.createElement("span",null,s.a.createElement(i.a,{to:"/"},"levanson"))),s.a.createElement("div",{className:"col col s12 m12 l6"},s.a.createElement("span",null,s.a.createElement("a",{href:"https://levansonqs.github.io/experience/"},"Blog"))))))))))}},214:function(e,a,t){e.exports=t.p+"static/blog-db3f7545ba3743176fb138190f071689.jpg"}}]);
//# sourceMappingURL=component---src-pages-project-js-1ac9af67936843c4b321.js.map
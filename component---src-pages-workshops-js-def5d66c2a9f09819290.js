(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{184:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(199),c=a(198),o=a(234),A=a(185),l=a(204),s=a.n(l),u=(a(235),a(210)),d=a.n(u),f=a(205),p=a.n(f);var m="3773160864",N=function(){return r.a.createElement(A.b,{query:m,render:function(e){var t=e.allMarkdownRemark.edges;return r.a.createElement("section",{className:"page-main__section"},r.a.createElement("div",{className:"blog-posts__container"},t.map(function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.a.createElement(d.a,{className:"mdc-card--clickable anoun-blog-card",key:t.fields.slug},r.a.createElement(A.a,{to:t.fields.slug},r.a.createElement(u.CardPrimaryContent,null,r.a.createElement(s.a,{className:"mdc-card__media",fluid:t.frontmatter.featured_image.childImageSharp.fluid}),r.a.createElement("div",{className:"anoun-blog-card-content__container"},r.a.createElement("h3",null,a),r.a.createElement("small",null,t.frontmatter.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))),r.a.createElement(u.CardActions,{fullBleed:!0},r.a.createElement(u.CardActionButtons,null,r.a.createElement(A.a,{to:t.fields.slug},r.a.createElement(p.a,null,"Read More")))))})))},data:o})};a.d(t,"pageQuery",function(){return M});var g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.data.site.siteMetadata.title;return r.a.createElement(i.a,{location:this.props.location,title:e},r.a.createElement(c.a,{title:"Workshops",keywords:["workshops","gatsby","javascript","react"]}),r.a.createElement("h1",null,"Explore the Workshop Materials"),r.a.createElement(N,null))},n}(r.a.Component),M=(t.default=g,"1097489062")},185:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=a(56),A=a.n(o);a.d(t,"a",function(){return A.a});a(187);var l=r.a.createContext({});function s(e){var t=e.staticQueryData,a=e.data,n=e.query,i=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&i(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,n=e.render,i=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(s,{data:t,query:a,render:n||i,staticQueryData:e})})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},187:function(e,t,a){var n;e.exports=(n=a(188))&&n.default||n},188:function(e,t,a){"use strict";a.r(t);a(16);var n=a(0),r=a.n(n),i=a(10),c=a.n(i),o=a(83),A=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null};A.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=A},189:function(e,t,a){"use strict";var n=a(185),r=a(0),i=a.n(r),c=a(201),o=a.n(c);var A=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=function(e){return i.a.createElement("li",null,i.a.createElement(n.a,{to:e.to,activeClassName:o.a.activeLink},e.children))};return i.a.createElement("header",{className:o.a.siteHeader},i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement(e,{to:"/"},"home"),i.a.createElement(e,{to:"/workshops/"},"workshops"))))},r}(r.Component);t.a=A},190:function(e,t,a){"use strict";var n=a(185),r=a(0),i=a.n(r),c=a(191),o=a.n(c),A=a(192),l=a.n(A),s=a(193),u=a.n(s),d=a(194),f=a.n(d),p=a(202),m=a.n(p);var N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement("footer",{className:m.a.siteFooter},i.a.createElement("nav",{className:m.a.footerNav},i.a.createElement(n.a,{to:"/"},i.a.createElement("img",{src:f.a,width:"180px",alt:"fleming-logo-wide",className:m.a.footerLogo})),i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement(n.a,{to:"/"},"Home")),i.a.createElement("li",null,i.a.createElement(n.a,{to:"/about/"},"About the Website")))),i.a.createElement("nav",{className:m.a.footerNav2},i.a.createElement("a",{href:"https://www.instagram.com/ucl.fleming.society",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:o.a,className:m.a.footerIcon,width:"24px",alt:"instagram-social-link"})),i.a.createElement("a",{href:"https://www.facebook.com/flemingsociety",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:u.a,className:m.a.footerIcon,width:"24px",alt:"facebook-social-link"})),i.a.createElement("a",{href:"https://twitter.com/flemingsocucl",target:"_blank",rel:"noopener noreferrer"},i.a.createElement("img",{src:l.a,className:m.a.footerIcon,width:"24px",alt:"twitter-social-link"}))))},r}(r.Component);t.a=N},191:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMi4xNjNjMy4yMDQgMCAzLjU4NC4wMTIgNC44NS4wNyAzLjI1Mi4xNDggNC43NzEgMS42OTEgNC45MTkgNC45MTkuMDU4IDEuMjY1LjA2OSAxLjY0NS4wNjkgNC44NDkgMCAzLjIwNS0uMDEyIDMuNTg0LS4wNjkgNC44NDktLjE0OSAzLjIyNS0xLjY2NCA0Ljc3MS00LjkxOSA0LjkxOS0xLjI2Ni4wNTgtMS42NDQuMDctNC44NS4wNy0zLjIwNCAwLTMuNTg0LS4wMTItNC44NDktLjA3LTMuMjYtLjE0OS00Ljc3MS0xLjY5OS00LjkxOS00LjkyLS4wNTgtMS4yNjUtLjA3LTEuNjQ0LS4wNy00Ljg0OSAwLTMuMjA0LjAxMy0zLjU4My4wNy00Ljg0OS4xNDktMy4yMjcgMS42NjQtNC43NzEgNC45MTktNC45MTkgMS4yNjYtLjA1NyAxLjY0NS0uMDY5IDQuODQ5LS4wNjl6bTAtMi4xNjNjLTMuMjU5IDAtMy42NjcuMDE0LTQuOTQ3LjA3Mi00LjM1OC4yLTYuNzggMi42MTgtNi45OCA2Ljk4LS4wNTkgMS4yODEtLjA3MyAxLjY4OS0uMDczIDQuOTQ4IDAgMy4yNTkuMDE0IDMuNjY4LjA3MiA0Ljk0OC4yIDQuMzU4IDIuNjE4IDYuNzggNi45OCA2Ljk4IDEuMjgxLjA1OCAxLjY4OS4wNzIgNC45NDguMDcyIDMuMjU5IDAgMy42NjgtLjAxNCA0Ljk0OC0uMDcyIDQuMzU0LS4yIDYuNzgyLTIuNjE4IDYuOTc5LTYuOTguMDU5LTEuMjguMDczLTEuNjg5LjA3My00Ljk0OCAwLTMuMjU5LS4wMTQtMy42NjctLjA3Mi00Ljk0Ny0uMTk2LTQuMzU0LTIuNjE3LTYuNzgtNi45NzktNi45OC0xLjI4MS0uMDU5LTEuNjktLjA3My00Ljk0OS0uMDczem0wIDUuODM4Yy0zLjQwMyAwLTYuMTYyIDIuNzU5LTYuMTYyIDYuMTYyczIuNzU5IDYuMTYzIDYuMTYyIDYuMTYzIDYuMTYyLTIuNzU5IDYuMTYyLTYuMTYzYzAtMy40MDMtMi43NTktNi4xNjItNi4xNjItNi4xNjJ6bTAgMTAuMTYyYy0yLjIwOSAwLTQtMS43OS00LTQgMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNGMwIDIuMjEtMS43OTEgNC00IDR6bTYuNDA2LTExLjg0NWMtLjc5NiAwLTEuNDQxLjY0NS0xLjQ0MSAxLjQ0cy42NDUgMS40NCAxLjQ0MSAxLjQ0Yy43OTUgMCAxLjQzOS0uNjQ1IDEuNDM5LTEuNDRzLS42NDQtMS40NC0xLjQzOS0xLjQ0eiIvPjwvc3ZnPg=="},192:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMjQgNC41NTdjLS44ODMuMzkyLTEuODMyLjY1Ni0yLjgyOC43NzUgMS4wMTctLjYwOSAxLjc5OC0xLjU3NCAyLjE2NS0yLjcyNC0uOTUxLjU2NC0yLjAwNS45NzQtMy4xMjcgMS4xOTUtLjg5Ny0uOTU3LTIuMTc4LTEuNTU1LTMuNTk0LTEuNTU1LTMuMTc5IDAtNS41MTUgMi45NjYtNC43OTcgNi4wNDUtNC4wOTEtLjIwNS03LjcxOS0yLjE2NS0xMC4xNDgtNS4xNDQtMS4yOSAyLjIxMy0uNjY5IDUuMTA4IDEuNTIzIDYuNTc0LS44MDYtLjAyNi0xLjU2Ni0uMjQ3LTIuMjI5LS42MTYtLjA1NCAyLjI4MSAxLjU4MSA0LjQxNSAzLjk0OSA0Ljg5LS42OTMuMTg4LTEuNDUyLjIzMi0yLjIyNC4wODQuNjI2IDEuOTU2IDIuNDQ0IDMuMzc5IDQuNiAzLjQxOS0yLjA3IDEuNjIzLTQuNjc4IDIuMzQ4LTcuMjkgMi4wNCAyLjE3OSAxLjM5NyA0Ljc2OCAyLjIxMiA3LjU0OCAyLjIxMiA5LjE0MiAwIDE0LjMwNy03LjcyMSAxMy45OTUtMTQuNjQ2Ljk2Mi0uNjk1IDEuNzk3LTEuNTYyIDIuNDU3LTIuNTQ5eiIvPjwvc3ZnPg=="},193:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTkgMGgtMTRjLTIuNzYxIDAtNSAyLjIzOS01IDV2MTRjMCAyLjc2MSAyLjIzOSA1IDUgNWgxNGMyLjc2MiAwIDUtMi4yMzkgNS01di0xNGMwLTIuNzYxLTIuMjM4LTUtNS01em0tMyA3aC0xLjkyNGMtLjYxNSAwLTEuMDc2LjI1Mi0xLjA3Ni44ODl2MS4xMTFoM2wtLjIzOCAzaC0yLjc2MnY4aC0zdi04aC0ydi0zaDJ2LTEuOTIzYzAtMi4wMjIgMS4wNjQtMy4wNzcgMy40NjEtMy4wNzdoMi41Mzl2M3oiLz48L3N2Zz4="},194:function(e,t,a){e.exports=a.p+"static/web-logo-wide-1dbfde5aff3721c05fda368720048316.png"},195:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(186),c=a.n(i);t.a=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{"http-equiv":"refresh"}),r.a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lora|Playfair+Display:900&display=swap",rel:"stylesheet"})))}},196:function(e){e.exports={data:{site:{siteMetadata:{defaultTitle:"UCL Fleming Society",titleTemplate:"%s",defaultDescription:"UCL Fleming Society's Official Website",siteUrl:"https://gatsby-starter-material-business-markdown.netlify.com",defaultImage:"/images/anoun-share-image.png",twitterUsername:"@_nicolagigante",facebookAppID:""}}}}},198:function(e,t,a){"use strict";var n=a(196),r=a(0),i=a.n(r),c=a(186),o=a.n(c),A=a(10),l=a.n(A),s=a(185),u=function(e){var t=e.cardType,a=void 0===t?"summary_large_image":t,n=e.username,r=void 0===n?null:n,c=e.title,A=void 0===c?null:c,l=e.description,s=void 0===l?null:l,u=e.image,d=void 0===u?null:u;return i.a.createElement(o.a,null,i.a.createElement("meta",{name:"twitter:card",content:a}),r&&i.a.createElement("meta",{name:"twitter:creator",content:r}),A&&i.a.createElement("meta",{name:"twitter:title",content:A}),s&&i.a.createElement("meta",{name:"twitter:description",content:s}),d&&i.a.createElement("meta",{name:"twitter:image",content:d}))},d=function(e){var t=e.pageUrl,a=void 0===t?null:t,n=e.type,r=void 0===n?null:n,c=e.title,A=void 0===c?null:c,l=e.description,s=void 0===l?null:l,u=e.image,d=void 0===u?null:u,f=e.appID,p=void 0===f?null:f;return i.a.createElement(o.a,null,a&&i.a.createElement("meta",{property:"og:url",content:a}),r&&i.a.createElement("meta",{property:"og:type",content:r}),A&&i.a.createElement("meta",{property:"og:title",content:A}),s&&i.a.createElement("meta",{property:"og:description",content:s}),d&&i.a.createElement("meta",{property:"og:image",content:d}),p&&i.a.createElement("meta",{property:"fb:app_id",content:p}))},f=function(e){var t=e.title,a=void 0===t?null:t,r=e.description,c=void 0===r?null:r,A=e.image,l=void 0===A?null:A,f=e.pathname,p=void 0===f?null:f,m=e.article,N=void 0!==m&&m;return i.a.createElement(s.b,{query:"784327244",render:function(e){var t=e.site.siteMetadata,n=t.defaultTitle,r=t.titleTemplate,A=t.defaultDescription,s=t.siteUrl,f=t.defaultImage,m=t.twitterUsername,g=t.facebookAppID,M={title:a||n,description:c||A,image:""+s+(l||f),url:""+s+(p||"/")};return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:M.title,titleTemplate:r},i.a.createElement("meta",{name:"description",content:M.description}),i.a.createElement("meta",{name:"image",content:M.image})),i.a.createElement(d,{pageUrl:M.url,type:N?"article":null,title:M.title,description:M.description,image:M.image,appID:g}),i.a.createElement(u,{username:m,title:M.title,description:M.description,image:M.image}))},data:n})};f.propTypes={title:l.a.string,description:l.a.string,image:l.a.string,pathname:l.a.string,article:l.a.bool};t.a=f},199:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(189),c=a(190),o=a(195),A=a(203),l=a.n(A);var s=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.children;return r.a.createElement("div",{className:l.a.siteContainer},r.a.createElement(o.a,null),r.a.createElement(i.a,null),r.a.createElement("div",{className:l.a.siteMain},e),r.a.createElement(c.a,null))},n}(r.a.Component);t.a=s},234:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{excerpt:"OverviewThe HC-SR04 is a sensor used to measure distance. It is able to do so using ultrasonic pulses.WiringFollow the next schematic…",fields:{slug:"/ultrasonic-sensor/"},frontmatter:{date:null,title:"Distance Sensor",description:"Learn how to wire the HC-SR04 Ultrasonic Sensor and how to use it with Arduino.",featured_image:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIEA//EABQBAQAAAAAAAAAAAAAAAAAAAAL/2gAMAwEAAhADEAAAAYdZHQUUK//EABkQAAIDAQAAAAAAAAAAAAAAAAECABAxEf/aAAgBAQABBQJcaPvTCxr/xAAWEQADAAAAAAAAAAAAAAAAAAAQEiH/2gAIAQMBAT8BWj//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGn/8QAGRAAAwADAAAAAAAAAAAAAAAAARAhADGR/9oACAEBAAY/AhMgHHtf/8QAGhAAAwEBAQEAAAAAAAAAAAAAAAEhMRFhof/aAAgBAQABPyHqKtPwefEIzyYJGNolo3T/2gAMAwEAAgADAAAAEMs//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxBSGOGX/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAgEBPxAIZPW//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARMUFRcSH/2gAIAQEAAT8QBDOi2v73UZKlGrHHhC4bQo0wWhODFYHixVWles//2Q==",aspectRatio:1.6913319238900635,src:"/static/a1a5e654250f4fec9d3375e6788aef8b/83d18/HC-SR04-Ultrasonic-Sensor.jpg",srcSet:"/static/a1a5e654250f4fec9d3375e6788aef8b/6302f/HC-SR04-Ultrasonic-Sensor.jpg 300w,\n/static/a1a5e654250f4fec9d3375e6788aef8b/72c55/HC-SR04-Ultrasonic-Sensor.jpg 600w,\n/static/a1a5e654250f4fec9d3375e6788aef8b/83d18/HC-SR04-Ultrasonic-Sensor.jpg 800w",srcWebp:"/static/a1a5e654250f4fec9d3375e6788aef8b/a30fd/HC-SR04-Ultrasonic-Sensor.webp",srcSetWebp:"/static/a1a5e654250f4fec9d3375e6788aef8b/5f1fe/HC-SR04-Ultrasonic-Sensor.webp 300w,\n/static/a1a5e654250f4fec9d3375e6788aef8b/95150/HC-SR04-Ultrasonic-Sensor.webp 600w,\n/static/a1a5e654250f4fec9d3375e6788aef8b/a30fd/HC-SR04-Ultrasonic-Sensor.webp 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},{node:{excerpt:"OverviewBefore we get to circuit-building and Arduino-programming, here’s a quick rundown of the flex sensor’s important electrical…",fields:{slug:"/flex-sensor/"},frontmatter:{date:null,title:"Flex Sensor",description:"Learn how the flex sensor works and how to properly connect it to Arduino.",featured_image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABK0lEQVQoz2PQ0NImCWnr6snIyU+dNv3G9esMZGu+TrbmadNn3Lhxg2zNFNg8deo08m2mSPOUqVOhmjWBSFtHS0cXQiIjZBFNMFdXT19WXmHqtGk3bt5gUNXSVlDXVFZRk5NXlFdUBpJyCkpAJA8kgSJgNlxESVVNUV1LWFJ68rRpN2/eZLDS1oy1NfV0d4qLCQ0P8QeSURFBMZHBkeGBQHZEWEB0ZHA0TMTb2S7JwyHYzGD+lIkXr15mCNLTWORtMbW+4PSe5btXTz+1e9mRLQuO71hycPP8M3tXAMkTu5Ye37n05J7lR3cuXdhbe3hK/cr6ojWzp5x7eJHBQEfbXlfL1dTQycTQ2dQIQoKQmbGTqZGLmTGQ4WIOIU3crczd7W3sjA2jw0KLykoBxuy9Ckjnx8sAAAAASUVORK5CYII=",aspectRatio:1.6913319238900635,src:"/static/3017a4c9e1d6f738c088a6988b964fef/50941/flex-sensor-intro.png",srcSet:"/static/3017a4c9e1d6f738c088a6988b964fef/58ff4/flex-sensor-intro.png 300w,\n/static/3017a4c9e1d6f738c088a6988b964fef/05226/flex-sensor-intro.png 600w,\n/static/3017a4c9e1d6f738c088a6988b964fef/50941/flex-sensor-intro.png 800w",srcWebp:"/static/3017a4c9e1d6f738c088a6988b964fef/a30fd/flex-sensor-intro.webp",srcSetWebp:"/static/3017a4c9e1d6f738c088a6988b964fef/5f1fe/flex-sensor-intro.webp 300w,\n/static/3017a4c9e1d6f738c088a6988b964fef/95150/flex-sensor-intro.webp 600w,\n/static/3017a4c9e1d6f738c088a6988b964fef/a30fd/flex-sensor-intro.webp 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},{node:{excerpt:"OverviewThe Force Sensitive Resistor, or FSR is one of those parts that fills bins in interaction design labs across the world. It’s a…",fields:{slug:"/force-sensing/"},frontmatter:{date:null,title:"Force Sensor",description:"Learn what a Force Sensing Resistor is, what it does, and how to control it with Arduino.",featured_image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAADG0lEQVQoz12R309TZxjH+xdsArUtq1SQU0pRBtZC2YYKEkCMyOZqdMlcpEiBUk5LS1dU0GEzBqibujG3AnFczGkNOkARsMWAjoXEbIvux4XZxf6DbYle7OL97G0ZcfHik+/znHPeT57nPZq8kl0iifkFFLtMe8Vqb3+BkiphKbQJa0GBMFusYpNiSWV+wWahyaw+SmbVEUw1Lknjf+kiZ3cTWQf62FjrSpEt++xkLb/ZsNtN7k4nimLGUeagurpCZilKnhXNlgavcJ5JiMreKVEWvinKj30rKnomRXFgQhjbJoRVvS7soRsiX42JQv91sVm9JqoicZHX0CUc9iLRHWoWxyQnwm5Rvv11oSl0dlM59BBraA6lK05+eAFzKIHRN48lFKd26Hsq+5exn1qi4eMVdkSW2D74I5l1Id55u4aTJ9oJ+hs5Hnbz3rv70Riar6DzTPNG8DK1A4u8f+UR7Zd/oDf2mIZzy+yMLFI3+IA9Qw8o71vE5LvDxtAShtpO6qrK6DvpJRRwETnlpX5vDRqzM4DRH6fEN8pbn3yHOv4Tw/NP6In9jCv6kOqP7nPw4gr7zi5TcTrBhtZrZLTPYTgcZZOlEOf+PXx4WuXggXrMyTs0NkbJUmcoD0Qp7b1L8OtHHPp0hfA3j7H1JOS7OyjBOUz+eRzdN9kRHEPbMknO3k4M1jIifcf54/f79PfLH5ijoEn3zKZWtvpicp0ZySy5UpDdOcsrHTO87J5mXcs0L8nUtU2ha7/N+sOjmPcF0OfZGY2e559nTxj/6pIU5qJJyvSSLf6rrPfcSh1eI731Ftq256TJZ5nyeiz1KkXFWzEoxXz+2Vme/vkLI9GLq8Jt4VXhrq4RTB2TpMtDWjmJtnWKjP+R7Ne5p7B23qDoTQ+v2kpTwi+/OM+zv39jbGx4VWj2TcjJbmMLxtCrcdK8C+TIdW2hCXTqAhneONqORIpkrfffwyAHMDaNo7c4GL7Qz9O/fn0uNLWMkOa5S5Z7HNvRAYqbz7DNPYTdPchWWSf7ZNrW6qYBClouoeuYQ5f/GhfOfZBaeU34LwaRCdd4f8ZOAAAAAElFTkSuQmCC",aspectRatio:1.6913319238900635,src:"/static/05a8f8f874ad66de88faae0b0a95c9c6/50941/force-sensing-intro.png",srcSet:"/static/05a8f8f874ad66de88faae0b0a95c9c6/58ff4/force-sensing-intro.png 300w,\n/static/05a8f8f874ad66de88faae0b0a95c9c6/05226/force-sensing-intro.png 600w,\n/static/05a8f8f874ad66de88faae0b0a95c9c6/50941/force-sensing-intro.png 800w",srcWebp:"/static/05a8f8f874ad66de88faae0b0a95c9c6/a30fd/force-sensing-intro.webp",srcSetWebp:"/static/05a8f8f874ad66de88faae0b0a95c9c6/5f1fe/force-sensing-intro.webp 300w,\n/static/05a8f8f874ad66de88faae0b0a95c9c6/95150/force-sensing-intro.webp 600w,\n/static/05a8f8f874ad66de88faae0b0a95c9c6/a30fd/force-sensing-intro.webp 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}},{node:{excerpt:"OverviewThe NeoPixel LED ring is a great tool for outputting information. All the LEDs are RGB which means you can programme them to be any…",fields:{slug:"/leds/"},frontmatter:{date:null,title:"LEDs",description:"Learn how to wire up the NeoPixel LED Ring and how to use it with Arduino.",featured_image:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAIAAADtbgqsAAAACXBIWXMAAAsTAAALEwEAmpwYAAABn0lEQVQoz2PQ0NJGQ5raOrLyitKyshpamkCuipqqlIysuqYWpkoGNL6Wjq6aukZEZFRqauLkiX0HD+yPDA/MycnR1tXT0NYBmotTM1BOVV1TR0dt5bKl69evDY8IS8tIq6gov3Txgqe7k5KyMk6bgXYqKCn7+QecPX06NjZaW1dXXkFJWlZeQ0vH3sFu+9bN7W3tsvIKQGVYNGtq6yqpqPh4uc6eNd3CykpRWQXoVJBrtbTlFJW7ujqTk+Jk5eSwawbaoKKmPm3qZKA7ZeQVINogLgIa5OnltWjRAls7O2VVNbjPkTRrgzTPnzenrq4GU7Ovn++ObVscnZyVsGqGONvb03XG9ClmFpYQZ0McKaeo1NjUmJeTpqIKDDMdnAEWGBR87uyZ8PAQdU1NeUUlGTl5FXUNCwuLvXt2dXZ24QwwCFLX0FRQkF26ZNGG9etDQ0NTUlMqK8svX7rk7mavogqMR7yJBOh4oP1x8fE52enTp048duRwWnJMcUmJto4uMJHhSyRw9wNdKycvr6unp29oqKyiLCElDbQTTScQAQAo7ahNp3ioCAAAAABJRU5ErkJggg==",aspectRatio:1.6913319238900635,src:"/static/6d0b756358c417154120df38fce5bae9/50941/leds-intro.png",srcSet:"/static/6d0b756358c417154120df38fce5bae9/58ff4/leds-intro.png 300w,\n/static/6d0b756358c417154120df38fce5bae9/05226/leds-intro.png 600w,\n/static/6d0b756358c417154120df38fce5bae9/50941/leds-intro.png 800w",srcWebp:"/static/6d0b756358c417154120df38fce5bae9/a30fd/leds-intro.webp",srcSetWebp:"/static/6d0b756358c417154120df38fce5bae9/5f1fe/leds-intro.webp 300w,\n/static/6d0b756358c417154120df38fce5bae9/95150/leds-intro.webp 600w,\n/static/6d0b756358c417154120df38fce5bae9/a30fd/leds-intro.webp 800w",sizes:"(max-width: 800px) 100vw, 800px"}}}}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-workshops-js-def5d66c2a9f09819290.js.map
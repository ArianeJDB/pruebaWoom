(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(39)},29:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),l=a(3),s=a(4),o=a(6),m=a(5),u=a(14),v=a(7),p=a(11),d=(a(29),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.image,a=e.title,n=e.rating,i=e.id;return r.a.createElement("div",{className:"movie_container"},r.a.createElement("img",{src:t,alt:a,className:"img"}),r.a.createElement("h3",{className:"movie_title"},a),r.a.createElement("p",{className:"rating"},r.a.createElement("span",null,r.a.createElement("i",{className:"fas fa-star star"})),n),r.a.createElement("div",{className:"link_more"},r.a.createElement(p.b,{to:"/detail/".concat(i),className:"more"},"Ver m\xe1s")))}}]),t}(r.a.Component)),f=(a(34),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"list"},this.props.movies.map(function(e){return r.a.createElement("li",{className:"list_item",key:e.id},r.a.createElement(d,{title:e.title,image:e.image,rating:e.rating,id:e.id}))}))}}]),t}(r.a.Component)),h=(a(35),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{className:"nav_bar"},r.a.createElement("div",{className:"logo"},"Logo"))}}]),t}(r.a.Component)),E=(a(36),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.movies,a=e.handleFilter;return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),r.a.createElement("div",{className:"home_container"},r.a.createElement("h1",{className:"title"},"Mis pel\xedculas favoritas"),r.a.createElement(f,{movies:t,handleFilter:a})))}}]),t}(r.a.Component)),b=a(10),O=(a(37),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=parseInt(this.props.takeParams.match.params.movie),t=this.props.movies.find(function(t){return t.id===e});return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,null),void 0!==t?r.a.createElement("div",{className:"movie_detail"},r.a.createElement("div",{className:"detail_container"},r.a.createElement("div",{className:"img_detail"},r.a.createElement("img",{src:t.image,alt:t.title})),r.a.createElement("h2",{className:"title_detail"},t.title),r.a.createElement("p",{className:"synopsis"},t.synopsis),r.a.createElement("div",{className:"lists"},r.a.createElement("ul",{className:"directors_list"},r.a.createElement("p",null,"Director: "),t.director.map(function(e){return r.a.createElement("li",{className:"director_element"},e)})),r.a.createElement("ul",{className:"cast_list"},r.a.createElement("p",null,"Actores: "),t.cast.map(function(e){return r.a.createElement("li",{className:"cast_element"},e)}))),r.a.createElement("p",{className:"rating_detail"},r.a.createElement("span",null,r.a.createElement("i",{class:"fas fa-star star_detail"})),t.rating),r.a.createElement(p.b,{to:"/",className:"link_volver"},"Volver"))):r.a.createElement("p",null,"Loading..."))}}]),t}(r.a.Component)),g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={movies:[]},a.getMovies=a.getMovies.bind(Object(u.a)(a)),a}return Object(v.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("data"));e&&e.length?this.setState({movies:e}):this.getMovies()}},{key:"getMovies",value:function(){var e=this;fetch("https://eeb98180-236b-43f6-be83-01af4d1d548f.mock.pstmn.io/test").then(function(e){return e.json()}).then(function(t){e.setState({movies:t},function(){localStorage.setItem("data",JSON.stringify(e.state.movies))})})}},{key:"render",value:function(){var e=this;return r.a.createElement(b.c,null,r.a.createElement(b.a,{exact:!0,path:"/",render:function(){return r.a.createElement(E,{movies:e.state.movies})}}),r.a.createElement(b.a,{path:"/detail/:movie",render:function(t){return r.a.createElement(O,{takeParams:t,movies:e.state.movies})}}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(38);c.a.render(r.a.createElement(p.a,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.d65a2097.chunk.js.map
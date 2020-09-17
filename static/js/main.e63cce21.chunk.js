(this["webpackJsonpnew-netflix"]=this["webpackJsonpnew-netflix"]||[]).push([[0],{31:function(e,t,a){e.exports=a(59)},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=a(23),s=a.n(n),m=(a(36),a(27)),r=a(15),c=a(28),l=a(24),v=a(25),u=a(4),h=a(30),p=a(29),d=a(26),b=a.n(d),w=a(11),g=a(9),M=a(10),f=a(8),E=function(e){var t=e.movieName,a=e.movieCategory,i=e.movieDescription,n=e.movieBackgroundImage,s=e.isMovieDataWindowOpen,m=e.openMovieId,r=e.openMovieDataWindow,c=e.movieListNumber,l=c+1,v=n.filter((function(e){return Object.values(e.attributes).some((function(e){return"string"===typeof e&&e.includes("170")}))}))[0].label,u={backgroundImage:"linear-gradient(0deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .7)), url(".concat(v,")")};return o.a.createElement(g.a,{md:3,sm:4,xs:12,className:"movie-item"},o.a.createElement(g.a,{md:12},o.a.createElement(w.a,null,o.a.createElement(g.a,null,o.a.createElement("p",{className:"movie-item__title"},t),o.a.createElement("p",{className:"movie-item__description"},i.length>100?i.slice(0,100)+"...":i," "),o.a.createElement("button",{onClick:function(){r(c)},className:"movie-item__button"},"read more ",o.a.createElement(M.a,{icon:f.b}))))),o.a.createElement("p",{className:"movie-item__number"},l),o.a.createElement(g.a,{md:12,className:s&&m===c?"movie-item__more-container movie-item__more-container--open":"movie-item__more-container",style:u},o.a.createElement(w.a,null,o.a.createElement(g.a,{className:"movie-item__row p-0"},o.a.createElement("p",{className:"movie-item__category"},a),o.a.createElement("p",{className:"movie-item__description"},i),o.a.createElement("button",{onClick:function(){r(c)},className:"movie-item__button"},o.a.createElement(M.a,{icon:f.a})," read less")))))},_=(a(58),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={movieList:[],isMovieDataWindowOpen:!1,openMovieId:null,searchTerm:"",showItems:8,movieNumberInList:0},i.openMovieDataWindow=i.openMovieDataWindow.bind(Object(u.a)(i)),i.getMovieList=i.getMovieList.bind(Object(u.a)(i)),i.setSearchTerm=i.setSearchTerm.bind(Object(u.a)(i)),i.showMoreMovieItems=i.showMoreMovieItems.bind(Object(u.a)(i)),i}return Object(v.a)(a,[{key:"componentWillMount",value:function(){this.getMovieList()}},{key:"getMovieList",value:function(){var e=this;b.a.get("https://itunes.apple.com/us/rss/topmovies/limit=100/json").then((function(t){e.setState({movieList:t.data.feed.entry})})).then((function(){e.state.movieList.map((function(t,a){var i=Object(c.a)(e.state.movieList),o=Object(r.a)(Object(r.a)({},i[a]),{},{movieId:e.state.movieNumberInList});i[a]=o,e.setState({movieList:i,movieNumberInList:e.state.movieNumberInList+1})}))})).catch((function(e){return console.log("Error"+e)}))}},{key:"openMovieDataWindow",value:function(e){this.setState({isMovieDataWindowOpen:!this.state.isMovieDataWindowOpen,openMovieId:e})}},{key:"setSearchTerm",value:function(e){var t=e.target.value;this.setState({searchTerm:t})}},{key:"showMoreMovieItems",value:function(){this.setState({showItems:this.state.showItems>=this.state.movieList.length?this.state.showItems:this.state.showItems+8})}},{key:"render",value:function(){var e=this,t=this.state.searchTerm;if(t)var a=t.toLowerCase();return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{type:"text",placeholder:"Search",value:this.state.searchTerm,onChange:this.setSearchTerm,className:"movie-list__search-input"}),o.a.createElement(w.a,{className:"mx-0"},this.state.searchTerm?this.state.movieList.filter((function(e,t){return e["im:name"].label.toLowerCase().includes(a)})).map((function(t,a){return o.a.createElement(E,{key:a,movieName:t["im:name"].label,movieCategory:t.category.attributes.label,movieDescription:t.summary.label,movieBackgroundImage:t["im:image"],isMovieDataWindowOpen:e.state.isMovieDataWindowOpen,openMovieId:e.state.openMovieId,openMovieDataWindow:e.openMovieDataWindow,movieListNumber:t.movieId})})):this.state.movieList.slice(0,this.state.showItems).map((function(t,a){return o.a.createElement(E,{key:a,movieName:t["im:name"].label,movieCategory:t.category.attributes.label,movieDescription:t.summary.label,movieBackgroundImage:t["im:image"],isMovieDataWindowOpen:e.state.isMovieDataWindowOpen,openMovieId:e.state.openMovieId,openMovieDataWindow:e.openMovieDataWindow,movieListNumber:t.movieId})}))),this.state.searchTerm?null:o.a.createElement("button",{onClick:this.showMoreMovieItems,className:"movie-list__button"},"Show more ",o.a.createElement(M.a,{icon:f.b})))}}]),a}(o.a.Component));var I=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,{className:"movie-list"},o.a.createElement("h1",{className:"movie-list__header"},"Top 100 movies"),o.a.createElement("p",{className:"movie-list__description"},"Application showing the list of top 100 movies based on the iTunes json file."),o.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.e63cce21.chunk.js.map
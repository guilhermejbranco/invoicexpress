(this.webpackJsonpinvoicexpress=this.webpackJsonpinvoicexpress||[]).push([[0],[,,,,,,,function(e){e.exports=JSON.parse('{"documents":[{"status":"Final","type":"Invoice","number":"2019/11","client_name":"Elon Tusk","date":"2019-02-31","total_w_vat":123.42},{"status":"Draft","type":"Invoice-Receipt","number":"Draft","client_name":"Rick Sanchez","date":"2019-02-01","total_w_vat":13.11},{"status":"Final","type":"Invoice","number":"2019/12","client_name":"Rick Sanchez","date":"2019-02-31","total_w_vat":123.42},{"status":"Final","type":"Invoice","number":"2019/13","client_name":"Jerry Smith","date":"2019-02-31","total_w_vat":123.42},{"status":"Cancelled","type":"Invoice","number":"2019/14","client_name":"Elon Tusk","date":"2019-02-21","total_w_vat":54.01},{"status":"Paid","type":"Invoice-Receipt","number":"2019/15","client_name":"Elon Tusk","date":"2019-03-01","total_w_vat":1223.42},{"status":"Final","type":"Receipt","number":"2019/16","client_name":"Rick Sanchez","date":"2019-03-21","total_w_vat":4234.33},{"status":"Final","type":"Invoice","number":"2019/17","client_name":"Elon Tusk","date":"2019-02-31","total_w_vat":3264.42},{"status":"Paid","type":"Invoice","number":"2019/18","client_name":"Morty Smith","date":"2019-03-31","total_w_vat":1223.42},{"status":"Final","type":"Invoice-Receipt","number":"2019/19","client_name":"Morty Smith","date":"2019-02-31","total_w_vat":3456.42},{"status":"Final","type":"Invoice","number":"2019/20","client_name":"Morty Smith","date":"2019-02-31","total_w_vat":2355.42},{"status":"Cancelled","type":"Invoice-Receipt","number":"2019/21","client_name":"Rick Sanchez","date":"2019-02-31","total_w_vat":23.42},{"status":"Final","type":"Invoice","number":"2019/22","client_name":"Elon Tusk","date":"2019-02-31","total_w_vat":13.42},{"status":"Final","type":"Invoice","number":"2016/23","client_name":"Morty Smith","date":"2016-02-31","total_w_vat":1523.42},{"status":"Final","type":"Invoice","number":"2019/23","client_name":"Jerry Smith","date":"2019-02-31","total_w_vat":6342.42},{"status":"Final","type":"Invoice","number":"2017/11","client_name":"Jerry Smith","date":"2017-02-31","total_w_vat":32.21},{"status":"Final","type":"Invoice","number":"2016/24","client_name":"Morty Smith","date":"2016-02-31","total_w_vat":3255.42},{"status":"Final","type":"Invoice","number":"2019/24","client_name":"Morty Smith","date":"2019-02-31","total_w_vat":734.32},{"status":"Final","type":"Invoice","number":"2019/25","client_name":"Jerry Smith","date":"2019-02-31","total_w_vat":467.42},{"status":"Final","type":"Invoice","number":"2016/25","client_name":"Morty Smith","date":"2016-02-31","total_w_vat":23.12},{"status":"Final","type":"Invoice","number":"2019/26","client_name":"Morty Smith","date":"2019-02-31","total_w_vat":23.42},{"status":"Cancelled","type":"Invoice-Receipt","number":"2016/26","client_name":"Morty Smith","date":"2016-03-10","total_w_vat":3.42}]}')},,,,,function(e,t,a){e.exports=a(24)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),s=a.n(c),l=(a(17),a(1)),i=a(2),o=a(4),m=a(3),u=a(5),d=(a(18),a(19),a(20),a(9)),p=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).changeOrder=function(e,t){e===a.state.orderBy?a.reverseOrder():(a.setState({orderBy:e}),isNaN(a.state.filteredDocuments[0][e])?"desc"===a.state.orderType?a.setState({filteredDocuments:a.state.filteredDocuments.sort((function(t,a){return t[e].localeCompare(a[e])}))}):a.setState({filteredDocuments:a.state.filteredDocuments.sort((function(t,a){return a[e].localeCompare(t[e])}))}):"desc"===a.state.orderType?a.setState({filteredDocuments:a.state.filteredDocuments.sort((function(t,a){return a[e]-t[e]}))}):a.setState({filteredDocuments:a.state.filteredDocuments.sort((function(t,a){return t[e]-a[e]}))}))},a.state={filteredDocuments:e.parentData.filteredDocuments,orderBy:"client_name",orderType:"desc"},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({filteredDocuments:e.parentData.filteredDocuments})}},{key:"reverseOrder",value:function(){this.setState({filteredDocuments:this.state.filteredDocuments.reverse()}),"asc"===this.state.orderType?this.setState({orderType:"desc"}):this.setState({orderType:"asc"})}},{key:"render",value:function(){var e=this,t={Final:"badge-success",Draft:"badge-secondary",Cancelled:"badge-danger",Paid:"badge-warning"},a=[],n=[];for(var c in this.state.filteredDocuments[0])a.push(r.a.createElement("div",{className:"d-none d-md-block col-sm-2 col-md-2 font-weight-bold text-left border-0 text-uppercase pointer "+(c===this.state.orderBy?"primarycolor":""),onClick:this.changeOrder.bind(this,c),value:c,key:c,id:c},c,c===this.state.orderBy&&"asc"===this.state.orderType&&r.a.createElement(d.b,null),c===this.state.orderBy&&"desc"===this.state.orderType&&r.a.createElement(d.a,null))),n.push(c);return r.a.createElement("span",{className:"w-100"},r.a.createElement("div",{className:"list-group-item small border-0"},r.a.createElement("div",{className:"row"},a)),0===this.state.filteredDocuments.length&&r.a.createElement("span",{className:"small"},"No results found for",r.a.createElement("span",{className:"primarycolor font-weight-bold"}," ",'"',this.props.parentData.searchInput,'"'),"."),r.a.createElement("ul",{className:"list-group pb-2"},this.state.filteredDocuments.map((function(a,c){return r.a.createElement("span",{key:a.number+c},c>=7*(e.props.parentData.currentPage-1)&&c<7*e.props.parentData.currentPage&&r.a.createElement("li",{className:"list-group-item text-left"},r.a.createElement("div",{className:"row small"},r.a.createElement("div",{className:"col-12 col-md-2 border-0"},r.a.createElement("span",{className:"badge "+t[a[n[0]]]},a[n[0]])),r.a.createElement("div",{className:"col-6 col-md-2"},r.a.createElement("span",{className:"d-block font-weight-bold d-md-none pt-3 mr-3"}," ",[n[1]],": "),r.a.createElement("span",null," ",a[n[1]])),r.a.createElement("div",{className:"col-6 col-md-2"},r.a.createElement("span",{className:"d-block font-weight-bold d-md-none pt-3 mr-3"}," ",[n[2]],": "),a[n[2]]),r.a.createElement("div",{className:"col-6 col-md-2"},r.a.createElement("span",{className:"d-block font-weight-bold d-md-none pt-3 mr-3"}," ",[n[3]],": "),a[n[3]]),r.a.createElement("div",{className:"col-6 col-md-2"},r.a.createElement("span",{className:"d-block font-weight-bold d-md-none pt-3 mr-3"}," ",[n[4]],": "),a[n[4]]),r.a.createElement("div",{className:"col-6 col-md-2 text-md-right"},r.a.createElement("span",{className:"d-block font-weight-bold d-md-none pt-3 mr-3"}," ",[n[5]],": "),a[n[5]]))))}))))}}]),t}(n.Component),h=(a(21),a(7)),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={filterBy:a.props.parentData.filterBy,searchInput:a.props.parentData.searchInput,orderBy:"client_name",filteredDocuments:[]},a.changeFilter=function(e){a.setState({filterBy:e.target.value},(function(){a.updateDocument()}))},a.changeSearchInput=function(e){a.setState({searchInput:e.target.value},(function(){a.updateDocument()}))},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"updateDocument",value:function(){for(var e=this,t=[],a=0;a<h.documents.length;a++)String(h.documents[a][this.state.filterBy]).toLowerCase().includes(String(this.state.searchInput).toLowerCase())&&t.push(h.documents[a]);this.setState({filteredDocuments:t.sort((function(e,t){return e.client_name.localeCompare(t.client_name)}))},(function(){e.props.parentCallback(e.state)}))}},{key:"componentDidMount",value:function(){this.updateDocument()}},{key:"render",value:function(){var e=[],t=h.documents[0];for(var a in t)e.push(a);return r.a.createElement("div",{className:"row w-100 pt-2 pb-2 container "},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("h6",{className:"text-uppercase text-left mt-2"},r.a.createElement("span",{className:"font-weight-light"},"Documents"),r.a.createElement("span",{className:"font-weight-bolder"},"Xpress"))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col-md-6"},r.a.createElement("input",{id:"searchInput",className:"form-control",type:"text",placeholder:"Searching by "+this.state.filterBy,onChange:this.changeSearchInput,value:this.state.searchInput})),r.a.createElement("div",{className:"col col-md-6"},r.a.createElement("select",{id:"filterBy",className:"form-control form-control-sm h-100",onChange:this.changeFilter,value:this.state.filterBy},e.map((function(e,t){return r.a.createElement("option",{key:e+"_"+t,value:e},e)})))))))}}]),t}(n.Component),v=(a(22),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentPage:parseInt(a.props.parentData.currentPage)},a._handleKeyDown=function(e){switch(e.keyCode){case 39:document.getElementById("searchInput")!==document.activeElement&&a.changePage(a.state.currentPage+1);break;case 37:document.getElementById("searchInput")!==document.activeElement&&a.changePage(a.state.currentPage-1)}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this._handleKeyDown)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this._handleKeyDown)}},{key:"changePage",value:function(e){var t=this;if(e>0&&e<=Math.ceil(this.props.parentData.filteredDocuments.length/7))return this.setState({currentPage:e},(function(){t.props.parentCallback(t.state)})),this.state.currentPage}},{key:"render",value:function(){this.state.currentPage>Math.ceil(this.props.parentData.filteredDocuments.length/7)&&this.changePage(Math.ceil(this.props.parentData.filteredDocuments.length/7));for(var e=[],t=1;t<=Math.ceil(this.props.parentData.filteredDocuments.length/7);t++)e.push(r.a.createElement("li",{className:"page-item "+(this.state.currentPage===t?" active":""),key:t},r.a.createElement("button",{className:"page-link ",onClick:this.changePage.bind(this,t)},t)));return r.a.createElement("nav",{"aria-label":"Page navigation example",className:"float-right "},r.a.createElement("ul",{className:"pagination"},r.a.createElement("li",{className:"page-item"+(1===this.state.currentPage?" disabled":"")},r.a.createElement("button",{id:"previous-page",className:"page-link",onClick:this.changePage.bind(this,this.state.currentPage-1)},"Previous")),e,r.a.createElement("li",{className:"page-item"+(this.state.currentPage===Math.ceil(this.props.parentData.filteredDocuments.length/7)?" disabled":"")},r.a.createElement("button",{id:"next-page",className:"page-link",onClick:this.changePage.bind(this,this.state.currentPage+1)},"Next"))))}}]),t}(n.Component)),g=new(a(11).a),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={filterBy:"client_name",searchInput:"",currentPage:1,filteredDocuments:[]},a.paginationCallbackFunction=function(e){a.setState({currentPage:e.currentPage}),g.set("currentPage",e.currentPage,{path:"/"})},a.filterCallbackFunction=function(e){a.setState({filteredDocuments:e.filteredDocuments,searchInput:e.searchInput,filterBy:e.filterBy}),g.set("searchInput",e.searchInput,{path:"/"}),g.set("filterBy",e.filterBy,{path:"/"})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){null!=g.get("filterBy")&&this.setState({filterBy:g.get("filterBy")}),null!=g.get("searchInput")&&this.setState({searchInput:g.get("searchInput")}),null!=g.get("currentPage")&&this.setState({currentPage:g.get("currentPage")})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header pt-3 pb-3"},r.a.createElement(f,{parentData:this.state,parentCallback:this.filterCallbackFunction})),r.a.createElement("div",{className:"container mt-5"},r.a.createElement(p,{parentData:this.state}),r.a.createElement(v,{parentData:this.state,parentCallback:this.paginationCallbackFunction})))}}]),t}(n.Component);a(23),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[12,1,2]]]);
//# sourceMappingURL=main.5c9e1ee3.chunk.js.map
/*!
 * @project        Example Project
 * @name           episodestable.08af3f3d2689f14cc8ec.js
 * @author         Andrew Welch
 * @build          Mon, Apr 22, 2019 2:00 AM ET
 * @release        cf9bfb3a588d360fcfda6c02931919eadbc8c08c [develop]
 * @copyright      Copyright (c) 2019 Example Company, Inc.
 *
 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{22:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full mb-8 max-w-lg mx-auto"},[a("div",{staticClass:"w-full bg-transparent"},[a("vuetable-filter-bar"),e._v(" "),a("div",{staticClass:"vuetable-pagination clearfix px-2 md:px-0"},[a("vuetable-pagination-info",{ref:"paginationInfoTop",attrs:{infoTemplate:"Displaying {from} to {to} of {total} episodes"}}),e._v(" "),a("vuetable-pagination",{ref:"paginationTop",on:{"vuetable-pagination:change-page":e.onChangePage}})],1),e._v(" "),a("div",{staticClass:"overflow-x-auto overflow-y-hidden"},[a("vuetable",{ref:"vuetable",attrs:{"api-url":"/actions/site-module/site/episodes","per-page":10,fields:e.fields,css:e.css,"sort-order":e.sortOrder,"append-params":e.moreParams},on:{"vuetable:pagination-data":e.onPaginationData,"vuetable:row-clicked":e.onRowClicked,"vuetable:loaded":e.onLoaded},scopedSlots:e._u([{key:"episode-display",fn:function(e){return[a("episode-cell",{attrs:{title:e.rowData.title,url:e.rowData.url,"post-date":e.rowData.postDate,"episode-number":e.rowData.episodeNumber,summary:e.rowData.summary}})]}}])})],1),e._v(" "),a("div",{staticClass:"vuetable-pagination clearfix px-2 md:px-0"},[a("vuetable-pagination-info",{ref:"paginationInfo",attrs:{infoTemplate:"Displaying {from} to {to} of {total} episodes"}}),e._v(" "),a("vuetable-pagination",{ref:"pagination",on:{"vuetable-pagination:change-page":e.onChangePage}})],1)],1)])};n._withStripped=!0;var i=[{name:"__slot:episode-display",sortField:"title",title:"Episode",titleClass:"center pageListingDisplay",dataClass:"center",width:"100%"},{name:"summary",visible:!1},{name:"episodeNumber",visible:!1},{name:"postDate",visible:!1}],s={components:{vuetable:()=>Promise.all([a.e(9),a.e(12)]).then(a.bind(null,60)),"vuetable-pagination":()=>a.e(14).then(a.bind(null,58)),"vuetable-pagination-info":()=>a.e(15).then(a.bind(null,59)),"vuetable-filter-bar":()=>a.e(13).then(a.bind(null,61)),"episode-cell":()=>a.e(3).then(a.bind(null,62))},props:{},data:function(){return{moreParams:{filter:""},css:{tableClass:"data fullwidth webperf-pages-index",ascendingIcon:"menubtn webperf-menubtn-asc",descendingIcon:"menubtn webperf-menubtn-desc"},sortOrder:[{field:"postDate",sortField:"postDate",direction:"desc"}],fields:i}},mounted(){this.$events.$on("filter-set",e=>this.onFilterSet(e)),this.$events.$on("filter-reset",e=>this.onFilterReset()),this.$events.$on("change-range",e=>this.onChangeRange(e))},methods:{onFilterSet(e){this.moreParams.filter=e,this.$events.fire("refresh-table",this.$refs.vuetable)},onFilterReset(){this.moreParams.filter="",this.$events.fire("refresh-table",this.$refs.vuetable)},onLoaded(){this.$events.fire("refresh-table-components",this.$refs.vuetable)},onPaginationData(e){this.$refs.paginationTop.setPaginationData(e),this.$refs.paginationInfoTop.setPaginationData(e),this.$refs.pagination.setPaginationData(e),this.$refs.paginationInfo.setPaginationData(e)},onChangePage(e){this.$refs.vuetable.changePage(e)},onRowClicked(e,t){e.detailPageUrl.length&&(window.location.href=e.detailPageUrl)},onChangeRange(e){this.moreParams.start=e.start,this.moreParams.end=e.end,this.$events.fire("refresh-table",this.$refs.vuetable)},statFormatter:e=>Number(e/1e3).toFixed(2)+"s"}},o=a(25),r=Object(o.a)(s,n,[],!1,null,null,null);r.options.__file="src/vue/EpisodesTable.vue";t.default=r.exports},25:function(e,t,a){"use strict";function n(e,t,a,n,i,s,o,r){var l,d="function"==typeof e?e.options:e;if(t&&(d.render=t,d.staticRenderFns=a,d._compiled=!0),n&&(d.functional=!0),s&&(d._scopeId="data-v-"+s),o?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),i&&i.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},d._ssrRegister=l):i&&(l=r?function(){i.call(this,this.$root.$options.shadowRoot)}:i),l)if(d.functional){d._injectStyles=l;var p=d.render;d.render=function(e,t){return l.call(t),p(e,t)}}else{var f=d.beforeCreate;d.beforeCreate=f?[].concat(f,l):[l]}return{exports:e,options:d}}a.d(t,"a",function(){return n})}}]);
//# sourceMappingURL=episodestable.08af3f3d2689f14cc8ec.js.map
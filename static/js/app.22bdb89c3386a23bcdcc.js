webpackJsonp([2,0],[function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=e(6),n=i(a),r=e(168),l=i(r),o=e(187),c=i(o),d=e(171),u=i(d),v=e(173),f=i(v),p=e(174),_=i(p),h=e(167),C=i(h),m=e(164),w=(i(m),e(188)),g=i(w);n.default.use(C.default),n.default.use(c.default),n.default.use(g.default);var j=new g.default.Store({state:{count:0},addCartEl:{},mutations:{increment:function(t){t.count++}}}),y=new c.default({routes:[{path:"/goods",component:u.default},{path:"/ratings",component:f.default},{path:"/seller",component:_.default}],linkActiveClass:"active"});new n.default({router:y,store:j,template:"<App>",components:{App:l.default},data:{eventHub:new n.default}}).$mount("#app"),y.push("goods")},,,,,,,,function(t,s,e){e(158);var i=e(3)(e(144),e(181),null,null);t.exports=i.exports},function(t,s,e){e(155);var i=e(3)(e(152),e(178),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,s,e){e(154);var i=e(3)(e(148),e(177),"data-v-1007ef1b",null);t.exports=i.exports},,,,,,,,,,,,,,,,,,function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=e(6),n=i(a),r=e(1),l=i(r);n.default.filter("time",function(t,s){return s=s||"YYYY-MM-DD HH:mm",(0,l.default)(t).format(s)})},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(172),n=i(a),r=e(5),l=i(r);s.default={data:function(){return{seller:{}}},created:function(){var t=this;l.default.get("static/data.json").then(function(s){t.seller=s.data.seller})},components:{"v-header":n.default}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{isShow:Boolean}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(6),n=i(a);s.default={props:{food:Object},methods:{addCart:function(t){console.log(t.target),t._constructed&&(this.food.count||n.default.set(this.food,"count",0),this.food.count++,this.$root.eventHub.$emit("cart.add",t.target))},decreaseCart:function(){event._constructed&&this.food.count&&this.food.count--}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0}),e(141);var a=e(4),n=i(a),r=e(8),l=i(r);s.default={components:{cartcontrol:l.default},props:{food:Object},data:function(){return{showDetail:!1,classifyArr:[{name:"全部",count:this.food.ratings.length,active:!0},{name:"推荐",count:this.food.ratings.filter(function(t){return 0===t.rateType}).length,active:!1},{name:"吐槽",count:this.food.ratings.filter(function(t){return t.rateType}).length,active:!1}],evelflag:!0}},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.detailWrapper&&this.$nextTick(function(){t.detailWrapper.refresh()}),s?this.food.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.food.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{showToggle:function(){var t=this;this.showDetail=!this.showDetail,this.showDetail&&this.$nextTick(function(){t._initScroll()})},_initScroll:function(){this.detailWrapper?this.detailWrapper.refresh():this.detailWrapper=new n.default(this.$refs.detailWrapper,{click:!0})},addCart:function(t){t._constructed&&(this.$set(this.food,"count",1),this.$root.eventHub.$emit("cart.add",t.target))},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(123),n=i(a),r=e(4),l=i(r),o=e(175),c=i(o),d=e(8),u=i(d),v=e(170),f=i(v),p=e(5),_=i(p),h=e(6),C=i(h);new C.default;s.default={props:{seller:Object},created:function(){var t=this;_.default.get("static/data.json").then(function(s){t.goods=s.data.goods,t.$nextTick(function(){t._initScroll(),t._calculateHeight()})})},data:function(){return{goods:[],listHeight:[],foodsScrollY:0,selectedFood:""}},computed:{menuCurrentIndex:function(){for(var t=0,s=this.listHeight.length;t<s;t++){var e=this.listHeight[t],i=this.listHeight[t+1];if(!i||this.foodsScrollY>=e&&this.foodsScrollY<i)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},methods:{_initScroll:function(){var t=this;this.menuWrapper=new l.default(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new l.default(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.foodsScrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodsWrapper.querySelectorAll(".food-list-hook"),s=0;this.listHeight.push(s);for(var e=0,i=t.length;e<i;e++){var a=t[e];s+=a.clientHeight,this.listHeight.push(s)}},menuClick:function(t,s){s._constructed&&this.foodsScroll.scrollTo(0,-this.listHeight[t],300)},goDetail:function(t){var s=this;this.selectedFood=t,this.$nextTick(function(){s.$refs.myFood.showToggle()})}},components:{iconMap:n.default,shopCart:c.default,cartcontrol:u.default,foodDetail:f.default}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(9),n=i(a);s.default={props:{seller:{type:Object}},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]},components:{star:n.default},data:function(){return{detailShow:!1}},methods:{showDetails:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:{iconType:Number},created:function(){this.iconClassMap=["decrease","discount","special","invoice","guarantee"]}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(5),n=i(a),r=e(9),l=i(r),o=e(4),c=i(o);s.default={components:{star:l.default},data:function(){return{ratings:[],seller:{},classifyArr:[{name:"全部",count:0,active:!0},{name:"推荐",count:0,active:!1},{name:"吐槽",count:0,active:!1}],evelflag:!0}},created:function(){this._init()},computed:{evelArr:function(){var t=this,s=0;return this.classifyArr.forEach(function(t,e){t.active&&(s=e)}),this.scroll&&this.$nextTick(function(){t.scroll.refresh()}),s?this.ratings.filter(function(e){return t.evelflag?e.rateType===s-1&&e.text:e.rateType===s-1}):this.ratings.filter(function(s){return!t.evelflag||s.text})}},methods:{_init:function(){var t=this;n.default.get("static/data.json").then(function(s){t.ratings=s.data.ratings,t.seller=s.data.seller,t._initClassifyArr(),t.$nextTick(function(){t.scroll=new c.default(t.$refs.ratingsWrapper,{click:!0})})})},_initClassifyArr:function(){var t=this;this.classifyArr.forEach(function(s,e){e?s.count=t.ratings.filter(function(t){return t.rateType===e-1}).length:s.count=t.ratings.length})},filterEvel:function(t){this.classifyArr.forEach(function(t){t.active=!1}),t.active=!0}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(5),n=i(a),r=e(4),l=i(r),o=e(9),c=i(o),d=e(123),u=i(d);s.default={components:{star:c.default,iconMap:u.default},data:function(){return{seller:{},collectflag:!1}},created:function(){this._init()},methods:{_init:function(){var t=this;n.default.get("static/data.json").then(function(s){t.seller=s.data.seller,t.$nextTick(function(){t.sellerScroll=new l.default(t.$refs.sellerWrapper,{click:!0}),t._initPicScroll()})})},_initPicScroll:function(){if(!this.picsScroll){var t=120,s=6,e=this.seller.pics.length;this.$refs.picList.style.width=t*e+s*(e-1)+"px",this.picsScroll=new l.default(this.$refs.picsWrapper,{scrollX:!0})}}}}},function(t,s,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var a=e(8),n=i(a),r=e(169),l=i(r),o=e(4),c=i(o);s.default={props:{selectFoods:{type:Array,default:[]},deliveryPrice:{type:Number,default:0},minPrice:{type:Number,default:0}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],listShow:!1}},created:function(){this.$root.eventHub.$on("cart.add",this.drop)},computed:{showBackdrop:function(){return!(!this.listShow||!this.totalPrice)||(this.listShow=!1,!1)},totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){s.count&&(t+=s.price*s.count)}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},leftAmount:function(){return!!(this.minPrice-this.totalPrice>0&&totalPrice)},payDesc:function(){var t=this.minPrice-this.totalPrice;return this.totalPrice?t>0?"还差￥"+t+"元":"去结算":"￥"+this.totalPrice+"起送"}},methods:{drop:function(t){for(var s=0,e=this.balls.length;s<e;s++){var i=this.balls[s];if(!i.show)return i.show=!0,i.el=t,void this.dropBalls.push(i)}},setEmpty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideBackdrop:function(){this.listShow=!1},_initScroll:function(){this.foodlistScroll=new c.default(this.$refs.foodlist,{click:!0})},listToggle:function(){var t=this;this.selectFoods.length&&(this.listShow=!this.listShow,this.listShow&&this.$nextTick(function(){t.foodlistScroll?t.foodlistScroll.refresh():t._initScroll()}))},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.webkitTransform="translate3d(0,"+n+"px,0)",t.style.transform="translate3d(0,"+n+"px,0)";var r=t.querySelector(".inner-hook");r.style.webkitTransform="translate3d("+a+"px,0,0)",r.style.transform="translate3d("+a+"px,0,0)"}}},enter:function(t){t.offsetHeight,this.$nextTick(function(){t.style.webkitTransform="translate3d(0,0,0)",t.style.transform="translate3d(0,0,0)";var s=t.querySelector(".inner-hook");s.style.webkitTransform="translate3d(0,0,0)",s.style.transform="translate3d(0,0,0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}},components:{cartcontrol:n.default,backdrop:l.default}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=5,i="on",a="half",n="off";s.default={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,r=s%1!==0,l=Math.floor(s),o=0;o<l;o++)t.push(i);for(r&&t.push(a);t.length<e;)t.push(n);return t}}}},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){function i(t){return e(a(t))}function a(t){return n[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var n={"./af":15,"./af.js":15,"./ar":21,"./ar-dz":16,"./ar-dz.js":16,"./ar-ly":17,"./ar-ly.js":17,"./ar-ma":18,"./ar-ma.js":18,"./ar-sa":19,"./ar-sa.js":19,"./ar-tn":20,"./ar-tn.js":20,"./ar.js":21,"./az":22,"./az.js":22,"./be":23,"./be.js":23,"./bg":24,"./bg.js":24,"./bn":25,"./bn.js":25,"./bo":26,"./bo.js":26,"./br":27,"./br.js":27,"./bs":28,"./bs.js":28,"./ca":29,"./ca.js":29,"./cs":30,"./cs.js":30,"./cv":31,"./cv.js":31,"./cy":32,"./cy.js":32,"./da":33,"./da.js":33,"./de":35,"./de-at":34,"./de-at.js":34,"./de.js":35,"./dv":36,"./dv.js":36,"./el":37,"./el.js":37,"./en-au":38,"./en-au.js":38,"./en-ca":39,"./en-ca.js":39,"./en-gb":40,"./en-gb.js":40,"./en-ie":41,"./en-ie.js":41,"./en-nz":42,"./en-nz.js":42,"./eo":43,"./eo.js":43,"./es":45,"./es-do":44,"./es-do.js":44,"./es.js":45,"./et":46,"./et.js":46,"./eu":47,"./eu.js":47,"./fa":48,"./fa.js":48,"./fi":49,"./fi.js":49,"./fo":50,"./fo.js":50,"./fr":53,"./fr-ca":51,"./fr-ca.js":51,"./fr-ch":52,"./fr-ch.js":52,"./fr.js":53,"./fy":54,"./fy.js":54,"./gd":55,"./gd.js":55,"./gl":56,"./gl.js":56,"./he":57,"./he.js":57,"./hi":58,"./hi.js":58,"./hr":59,"./hr.js":59,"./hu":60,"./hu.js":60,"./hy-am":61,"./hy-am.js":61,"./id":62,"./id.js":62,"./is":63,"./is.js":63,"./it":64,"./it.js":64,"./ja":65,"./ja.js":65,"./jv":66,"./jv.js":66,"./ka":67,"./ka.js":67,"./kk":68,"./kk.js":68,"./km":69,"./km.js":69,"./ko":70,"./ko.js":70,"./ky":71,"./ky.js":71,"./lb":72,"./lb.js":72,"./lo":73,"./lo.js":73,"./lt":74,"./lt.js":74,"./lv":75,"./lv.js":75,"./me":76,"./me.js":76,"./mi":77,"./mi.js":77,"./mk":78,"./mk.js":78,"./ml":79,"./ml.js":79,"./mr":80,"./mr.js":80,"./ms":82,"./ms-my":81,"./ms-my.js":81,"./ms.js":82,"./my":83,"./my.js":83,"./nb":84,"./nb.js":84,"./ne":85,"./ne.js":85,"./nl":87,"./nl-be":86,"./nl-be.js":86,"./nl.js":87,"./nn":88,"./nn.js":88,"./pa-in":89,"./pa-in.js":89,"./pl":90,"./pl.js":90,"./pt":92,"./pt-br":91,"./pt-br.js":91,"./pt.js":92,"./ro":93,"./ro.js":93,"./ru":94,"./ru.js":94,"./se":95,"./se.js":95,"./si":96,"./si.js":96,"./sk":97,"./sk.js":97,"./sl":98,"./sl.js":98,"./sq":99,"./sq.js":99,"./sr":101,"./sr-cyrl":100,"./sr-cyrl.js":100,"./sr.js":101,"./ss":102,"./ss.js":102,"./sv":103,"./sv.js":103,"./sw":104,"./sw.js":104,"./ta":105,"./ta.js":105,"./te":106,"./te.js":106,"./tet":107,"./tet.js":107,"./th":108,"./th.js":108,"./tl-ph":109,"./tl-ph.js":109,"./tlh":110,"./tlh.js":110,"./tr":111,"./tr.js":111,"./tzl":112,"./tzl.js":112,"./tzm":114,"./tzm-latn":113,"./tzm-latn.js":113,"./tzm.js":114,"./uk":115,"./uk.js":115,"./uz":116,"./uz.js":116,"./vi":117,"./vi.js":117,"./x-pseudo":118,"./x-pseudo.js":118,"./yo":119,"./yo.js":119,"./zh-cn":120,"./zh-cn.js":120,"./zh-hk":121,"./zh-hk.js":121,"./zh-tw":122,"./zh-tw.js":122};i.keys=function(){return Object.keys(n)},i.resolve=a,t.exports=i,i.id=165},,,function(t,s,e){e(159);var i=e(3)(e(142),e(182),null,null);t.exports=i.exports},function(t,s,e){e(153);var i=e(3)(e(143),e(176),null,null);t.exports=i.exports},function(t,s,e){e(157);var i=e(3)(e(145),e(180),"data-v-293505f3",null);t.exports=i.exports},function(t,s,e){e(162);var i=e(3)(e(146),e(185),null,null);t.exports=i.exports},function(t,s,e){e(160);var i=e(3)(e(147),e(183),null,null);t.exports=i.exports},function(t,s,e){e(163);var i=e(3)(e(149),e(186),"data-v-b24a6c7e",null);t.exports=i.exports},function(t,s,e){e(161);var i=e(3)(e(150),e(184),"data-v-5071881a",null);t.exports=i.exports},function(t,s,e){e(156);var i=e(3)(e(151),e(179),"data-v-20b4405a",null);t.exports=i.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"backdrop"})])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"iconMap",class:t.iconClassMap[t.iconType]})},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"star",class:t.starType},t._l(t.itemClasses,function(t){return e("span",{staticClass:"star-item",class:t,attrs:{"track-by":"$index"}})}))},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{},[e("div",{staticClass:"shopCart"},[e("div",{staticClass:"content"},[e("div",{staticClass:"content-left",on:{click:t.listToggle}},[e("div",{staticClass:"logo-wrapper"},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount,expression:"totalCount"}],staticClass:"badge"},[t._v("\n          "+t._s(t.totalCount)+"\n        ")]),t._v(" "),e("div",{staticClass:"logo",class:{active:t.totalPrice}},[e("i",{staticClass:"icon-shopping_cart"})])]),t._v(" "),e("div",{staticClass:"price",class:{active:t.totalPrice}},[t._v("\n        ￥"+t._s(t.totalPrice)+"\n      ")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n        另需要配送费￥"+t._s(t.deliveryPrice)+"元\n      ")])]),t._v(" "),e("div",{staticClass:"content-right",class:{enough:t.totalPrice>=t.minPrice},on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[t._v("\n      "+t._s(t.payDesc)+"\n    ")])]),t._v(" "),e("div",{staticClass:"ball-container"},t._l(t.balls,function(s,i){return e("transition",{attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},[e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"ball.show"}],staticClass:"ball"},[e("div",{staticClass:"inner inner-hook"})])])})),t._v(" "),e("transition",{attrs:{name:"transHeight"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow,expression:"listShow"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:function(s){t.setEmpty()}}},[t._v("清空")])]),t._v(" "),e("div",{ref:"foodlist",staticClass:"list-content"},[e("ul",t._l(t.selectFoods,function(s){return e("li",{staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])])],1),t._v(" "),e("transition",{attrs:{name:"fade-backdrop"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showBackdrop,expression:"showBackdrop"}],staticClass:"backdrop",on:{click:t.hideBackdrop}})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"move"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showDetail,expression:"showDetail"}],ref:"detailWrapper",staticClass:"detailWrapper"},[e("div",{staticClass:"foodDetail"},[e("div",{staticClass:"back",on:{click:function(s){t.showToggle()}}},[e("i",{staticClass:"icon-arrow_lift"})]),t._v(" "),e("img",{attrs:{src:t.food.image,height:"425",width:"100%"}}),t._v(" "),e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"desc"},[e("span",[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(t.food.price)+"\n          "),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"shopCart"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count,expression:"!food.count"}],staticClass:"text",on:{click:function(s){t.addCart(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"desc"},[e("div",{staticClass:"title"},[t._v("商品介绍")]),t._v(" "),e("div",{staticClass:"content"},[t._v(t._s(t.food.info))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"title"},[t._v("\n          商品评价\n        ")]),t._v(" "),e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){t.filterEvel(s)}}},[t._v("\n            "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"userInfo"},[e("div",{staticClass:"time"},[t._v(t._s(t._f("time")(s.rateTime)))]),t._v(" "),e("div",{staticClass:"user"},[e("span",[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"12",height:"12"}})])])]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"icon",class:s.rateType?"icon-thumb_down":"icon-thumb_up"}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.text))])])])}))])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"fadeRotate"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-decrease",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.decreaseCart()}}},[e("span",{staticClass:"icon-remove_circle_outline inner"})])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count>0"}],staticClass:"cart-count"},[t._v("\n    "+t._s(t.food.count)+"\n  ")]),t._v(" "),e("div",{staticClass:"cart-add",on:{click:function(s){s.stopPropagation(),s.preventDefault(),t.addCart(s)}}},[e("i",{staticClass:"icon-add_circle"})])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-header",{attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("商品")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("评论")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("商家")])],1)]),t._v(" "),e("keep-alive",[e("router-view",{attrs:{seller:t.seller}})],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:t.seller.avatar,width:"64",height:"64"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n                "+t._s(t.seller.description+" / "+t.seller.deliveryTime+"分钟送达")+"\n            ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"supports"},[e("div",{staticClass:"supports_desc"},[e("span",{staticClass:"icon",class:t.iconClassMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:function(s){t.showDetails()}}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length+"个"))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:function(s){t.showDetails()}}},[e("span",{staticClass:"bulletin-title"}),t._v(" "),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.detailShow?e("div",{staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{staticClass:"support-item"},[e("span",{staticClass:"icon",class:t.iconClassMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[t._v(t._s(t.seller.bulletin))])])]),t._v(" "),e("div",{staticClass:"detail-close"},[e("i",{staticClass:"icon-close",on:{click:function(s){t.hideDetail()}}})])]):t._e()])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"sellerWrapper",staticClass:"seller-wrapper"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"title"},[e("div",{staticClass:"text"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"rate-count"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("div",{staticClass:"collect",on:{click:function(s){t.collectflag=!t.collectflag}}},[e("span",{staticClass:"icon-favorite",class:{active:t.collectflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.collectflag?"已收藏":"收藏"))])])]),t._v(" "),e("div",{staticClass:"remark"},[e("div",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("div",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"num"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"activities"},[e("div",{staticClass:"bulletin"},[e("h1",[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content"},[t._v("\n          "+t._s(t.seller.bulletin)+"\n        ")])])]),t._v(" "),e("div",{staticClass:"supports"},[e("ul",t._l(t.seller.supports,function(s){return e("li",{staticClass:"item"},[e("iconMap",{attrs:{iconType:s.type}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])],1)}))]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-imgs"},[e("h1",[t._v("商家实景")]),t._v(" "),e("div",{ref:"picsWrapper",staticClass:"img-wrapper"},[e("div",{ref:"picList"},t._l(t.seller.pics,function(t){return e("img",{attrs:{src:t,width:"120",height:"90"}})}))])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"seller-info"},[e("h1",[t._v("商家信息")]),t._v(" "),e("ul",{staticClass:"info-list"},t._l(t.seller.infos,function(s){return e("li",{staticClass:"info"},[t._v(t._s(s))])}))])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{class:i==t.menuCurrentIndex?"menu-item-selected":"menu-item",on:{click:function(s){t.menuClick(i,s)}}},[e("span",{staticClass:"text"},[e("iconMap",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type>0"}],attrs:{iconType:s.type}}),t._v("\n          "+t._s(s.name)+"\n        ")],1)])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper",attrs:{id:"wrapper"}},[e("ul",t._l(t.goods,function(s){return e("li",{staticClass:"food-list food-list-hook"},[e("h1",[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{staticClass:"food-item",on:{click:function(e){t.goDetail(s)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{width:"57",height:"57",src:s.icon}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",[t._v(t._s(s.name))]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:s.description,expression:"food.description"}],staticClass:"description"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"sell-info"},[e("span",{staticClass:"sellCount"},[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(s.rating)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"newPrice"},[e("span",{staticClass:"unit"},[t._v("￥")]),t._v(t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"oldPrice"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])])}))])}))]),t._v(" "),e("shopCart",{attrs:{deliveryPrice:t.seller.deliveryPrice,minPrice:t.seller.minPrice,selectFoods:t.selectFoods}}),t._v(" "),t.selectedFood?e("foodDetail",{ref:"myFood",attrs:{food:t.selectedFood}}):t._e()],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratingsWrapper",staticClass:"ratingsWrapper"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"info"},[e("div",{staticClass:"mark"},[e("div",{staticClass:"num"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"text"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"contrast"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"stars"},[e("div",{staticClass:"serviceScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"foodScore"},[e("span",{staticClass:"text"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"num"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"deliveryTime"},[e("span",{staticClass:"text"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("div",{staticClass:"divider"}),t._v(" "),e("div",{staticClass:"evaluation"},[e("div",{staticClass:"classify"},t._l(t.classifyArr,function(s,i){return e("span",{staticClass:"item",class:{active:s.active,bad:2==i,badActive:s.active&&2==i},on:{click:function(e){t.filterEvel(s)}}},[t._v("\n          "+t._s(s.name)),e("span",{staticClass:"count"},[t._v(t._s(s.count))])])})),t._v(" "),e("div",{staticClass:"switch",on:{click:function(s){t.evelflag=!t.evelflag}}},[e("span",{staticClass:"icon-check_circle",class:{on:t.evelflag}}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])]),t._v(" "),e("div",{staticClass:"evel-list"},[e("ul",t._l(t.evelArr,function(s){return e("li",{staticClass:"evel"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{src:s.avatar,width:"28",height:"28"}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("span",{staticClass:"rateTime"},[t._v(t._s(t._f("time")(s.rateTime)))])]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{staticClass:"deliveryTime"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("div",{staticClass:"text"},[t._v("\n                "+t._s(s.text)+"\n              ")]),t._v(" "),e("div",{staticClass:"recommend"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.recommend.length,expression:"evel.recommend.length"}],staticClass:"icon icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s){return e("span",{staticClass:"dish"},[t._v(t._s(s))])})],2)])])}))])])])])},staticRenderFns:[]}}]);
//# sourceMappingURL=app.22bdb89c3386a23bcdcc.js.map
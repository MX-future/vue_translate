webpackJsonp([1],{"7YDQ":function(t,a){},JKiR:function(t,a){},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("FO5P");var n=e("woHG"),s=(e("MY4N"),e("0zAV")),o=(e("zH3V"),e("+4G6")),i=(e("3Lne"),e("SSsa")),c=(e("OWWB"),e("1fWZ")),r=(e("9++/"),e("QhyB")),u=(e("eqfM"),e("/QYm")),l=e("7+uW"),f={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var h=e("VU/8")({name:"App"},f,!1,function(t){e("Zcw0")},null,null).exports,p=e("/ocq"),m=(e("XmAh"),e("il3B")),v={name:"HelloWorld",data:function(){return{input_value:"",show:!1,source_type:"中 → 英",from_to:"&from=1&to=3",actions:[{name:"英 → 中"},{name:"中 → 日"},{name:"中 → 英"},{name:"英 → 日"},{name:"日 → 英"}]}},methods:{startSelect:function(){this.show=!0},onSelect:function(t){this.show=!1,this.source_type=t.name},translateGo:function(){var t=this;if(""!=this.input_value){switch(this.$toast.loading({mask:!0,message:"翻译中...",duration:0}),this.source_type){case this.actions[0].name:this.from_to="&from=3&to=1";break;case this.actions[1].name:this.from_to="&from=1&to=2";break;case this.actions[2].name:this.from_to="&from=1&to=3";break;case this.actions[3].name:this.from_to="&from=3&to=2";break;case this.actions[4].name:this.from_to="&from=2&to=3"}this.$axios.get("http://api.shujuzhihui.cn/api/sjzhApi/searchFanyi?appKey=7d8873c553384574ba2a0c6afb17c41a&text="+this.input_value+this.from_to).then(function(a){t.$toast.clear(!0),m.a.alert({title:"结果",message:a.data.RESULT}).then(function(){t.input_value=""})})}else m.a.alert({message:"内容不能为空"}).then(function(){})}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("van-nav-bar",{staticClass:"m_music",staticStyle:{background:"#99CCFF"},attrs:{title:"随译"}}),t._v(" "),e("div",{staticClass:"content"},[e("van-field",{staticClass:"input_value",model:{value:t.input_value,callback:function(a){t.input_value=a},expression:"input_value"}}),t._v(" "),e("van-button",{staticClass:"source",attrs:{type:"default"},on:{click:t.startSelect}},[t._v(t._s(t.source_type))]),e("br"),t._v(" "),e("van-actionsheet",{attrs:{actions:t.actions},on:{select:t.onSelect},model:{value:t.show,callback:function(a){t.show=a},expression:"show"}}),t._v(" "),e("van-button",{staticClass:"search",attrs:{type:"info"},on:{click:t.translateGo}},[t._v("翻译")])],1)],1)},staticRenderFns:[]};var d=e("VU/8")(v,_,!1,function(t){e("WRjy")},"data-v-6e9978ea",null).exports;l.a.use(p.a);var b=new p.a({routes:[{path:"/",name:"HelloWorld",component:d}]}),w=e("mtWM"),y=e.n(w);l.a.use(u.a),l.a.use(r.a),l.a.use(c.a),l.a.use(i.a),l.a.use(o.a),l.a.use(s.a),l.a.use(n.a),l.a.prototype.$axios=y.a,l.a.config.productionTip=!1,new l.a({el:"#app",router:b,components:{App:h},template:"<App/>"})},WRjy:function(t,a){},ZZgd:function(t,a){},Zcw0:function(t,a){},eh36:function(t,a){},hW8u:function(t,a){},nLpc:function(t,a){},nsZj:function(t,a){},px3J:function(t,a){}},["NHnr"]);
//# sourceMappingURL=app.eccfa672a7a4be973224.js.map
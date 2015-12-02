// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om_chat.parser');
goog.require('om_chat.components.root');
goog.require('om_chat.web_api');
goog.require('cljs.core.async');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
var c__20006__auto___22314 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20006__auto___22314){
return (function (){
var f__20007__auto__ = (function (){var switch__19985__auto__ = ((function (c__20006__auto___22314){
return (function (state_22304){
var state_val_22305 = (state_22304[(1)]);
if((state_val_22305 === (1))){
var inst_22263 = cljs.core.async.chan.call(null);
var inst_22264 = om_chat.web_api.get_initial_data.call(null,inst_22263);
var state_22304__$1 = state_22304;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22304__$1,(2),inst_22264);
} else {
if((state_val_22305 === (2))){
var inst_22266 = (state_22304[(2)]);
var inst_22267 = [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"parser","parser",-1543495310)];
var inst_22268 = [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"mutate","mutate",1422419038)];
var inst_22269 = [om_chat.parser.read,om_chat.parser.mutate];
var inst_22270 = cljs.core.PersistentHashMap.fromArrays(inst_22268,inst_22269);
var inst_22271 = om.next.parser.call(null,inst_22270);
var inst_22272 = [inst_22266,inst_22271];
var inst_22273 = cljs.core.PersistentHashMap.fromArrays(inst_22267,inst_22272);
var inst_22274 = om.next.reconciler.call(null,inst_22273);
var inst_22275 = om_chat.core.reconciler = inst_22274;
var inst_22276 = goog.dom.getElement("app");
var inst_22277 = om.next.add_root_BANG_.call(null,om_chat.core.reconciler,om_chat.components.root.ChatApp,inst_22276);
var inst_22278 = cljs.core.List.EMPTY;
var inst_22279 = cljs.core.List.EMPTY;
var inst_22280 = new cljs.core.Symbol("thread","select","thread/select",2043814120,null);
var inst_22281 = cljs.core._conj.call(null,inst_22279,inst_22280);
var inst_22282 = cljs.core.List.EMPTY;
var inst_22283 = cljs.core.List.EMPTY;
var inst_22284 = cljs.core._conj.call(null,inst_22283,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var inst_22285 = cljs.core.List.EMPTY;
var inst_22286 = cljs.core._conj.call(null,inst_22285,"t_3");
var inst_22287 = cljs.core.concat.call(null,inst_22284,inst_22286);
var inst_22288 = cljs.core.seq.call(null,inst_22287);
var inst_22289 = cljs.core.sequence.call(null,inst_22288);
var inst_22290 = cljs.core.apply.call(null,cljs.core.array_map,inst_22289);
var inst_22291 = cljs.core._conj.call(null,inst_22282,inst_22290);
var inst_22292 = cljs.core.concat.call(null,inst_22281,inst_22291);
var inst_22293 = cljs.core.seq.call(null,inst_22292);
var inst_22294 = cljs.core.sequence.call(null,inst_22293);
var inst_22295 = cljs.core._conj.call(null,inst_22278,inst_22294);
var inst_22296 = cljs.core.List.EMPTY;
var inst_22297 = cljs.core._conj.call(null,inst_22296,new cljs.core.Keyword(null,"threads","threads",-1717798734));
var inst_22298 = cljs.core.concat.call(null,inst_22295,inst_22297);
var inst_22299 = cljs.core.seq.call(null,inst_22298);
var inst_22300 = cljs.core.sequence.call(null,inst_22299);
var inst_22301 = cljs.core.vec.call(null,inst_22300);
var inst_22302 = om.next.transact_BANG_.call(null,om_chat.core.reconciler,inst_22301);
var state_22304__$1 = (function (){var statearr_22306 = state_22304;
(statearr_22306[(7)] = inst_22275);

(statearr_22306[(8)] = inst_22277);

return statearr_22306;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22304__$1,inst_22302);
} else {
return null;
}
}
});})(c__20006__auto___22314))
;
return ((function (switch__19985__auto__,c__20006__auto___22314){
return (function() {
var om_chat$core$state_machine__19986__auto__ = null;
var om_chat$core$state_machine__19986__auto____0 = (function (){
var statearr_22310 = [null,null,null,null,null,null,null,null,null];
(statearr_22310[(0)] = om_chat$core$state_machine__19986__auto__);

(statearr_22310[(1)] = (1));

return statearr_22310;
});
var om_chat$core$state_machine__19986__auto____1 = (function (state_22304){
while(true){
var ret_value__19987__auto__ = (function (){try{while(true){
var result__19988__auto__ = switch__19985__auto__.call(null,state_22304);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19988__auto__;
}
break;
}
}catch (e22311){if((e22311 instanceof Object)){
var ex__19989__auto__ = e22311;
var statearr_22312_22315 = state_22304;
(statearr_22312_22315[(5)] = ex__19989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22304);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22316 = state_22304;
state_22304 = G__22316;
continue;
} else {
return ret_value__19987__auto__;
}
break;
}
});
om_chat$core$state_machine__19986__auto__ = function(state_22304){
switch(arguments.length){
case 0:
return om_chat$core$state_machine__19986__auto____0.call(this);
case 1:
return om_chat$core$state_machine__19986__auto____1.call(this,state_22304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_chat$core$state_machine__19986__auto__.cljs$core$IFn$_invoke$arity$0 = om_chat$core$state_machine__19986__auto____0;
om_chat$core$state_machine__19986__auto__.cljs$core$IFn$_invoke$arity$1 = om_chat$core$state_machine__19986__auto____1;
return om_chat$core$state_machine__19986__auto__;
})()
;})(switch__19985__auto__,c__20006__auto___22314))
})();
var state__20008__auto__ = (function (){var statearr_22313 = f__20007__auto__.call(null);
(statearr_22313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20006__auto___22314);

return statearr_22313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20008__auto__);
});})(c__20006__auto___22314))
);


//# sourceMappingURL=core.js.map
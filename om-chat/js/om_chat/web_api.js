// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.web_api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_chat.app_state');
om_chat.web_api.get_initial_data = (function om_chat$web_api$get_initial_data(channel){
var c__20006__auto___20474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__20006__auto___20474){
return (function (){
var f__20007__auto__ = (function (){var switch__19985__auto__ = ((function (c__20006__auto___20474){
return (function (state_20465){
var state_val_20466 = (state_20465[(1)]);
if((state_val_20466 === (1))){
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20465__$1,(2),channel,om_chat.app_state.state);
} else {
if((state_val_20466 === (2))){
var inst_20463 = (state_20465[(2)]);
var state_20465__$1 = state_20465;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20465__$1,inst_20463);
} else {
return null;
}
}
});})(c__20006__auto___20474))
;
return ((function (switch__19985__auto__,c__20006__auto___20474){
return (function() {
var om_chat$web_api$get_initial_data_$_state_machine__19986__auto__ = null;
var om_chat$web_api$get_initial_data_$_state_machine__19986__auto____0 = (function (){
var statearr_20470 = [null,null,null,null,null,null,null];
(statearr_20470[(0)] = om_chat$web_api$get_initial_data_$_state_machine__19986__auto__);

(statearr_20470[(1)] = (1));

return statearr_20470;
});
var om_chat$web_api$get_initial_data_$_state_machine__19986__auto____1 = (function (state_20465){
while(true){
var ret_value__19987__auto__ = (function (){try{while(true){
var result__19988__auto__ = switch__19985__auto__.call(null,state_20465);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19988__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19988__auto__;
}
break;
}
}catch (e20471){if((e20471 instanceof Object)){
var ex__19989__auto__ = e20471;
var statearr_20472_20475 = state_20465;
(statearr_20472_20475[(5)] = ex__19989__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20465);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e20471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19987__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20476 = state_20465;
state_20465 = G__20476;
continue;
} else {
return ret_value__19987__auto__;
}
break;
}
});
om_chat$web_api$get_initial_data_$_state_machine__19986__auto__ = function(state_20465){
switch(arguments.length){
case 0:
return om_chat$web_api$get_initial_data_$_state_machine__19986__auto____0.call(this);
case 1:
return om_chat$web_api$get_initial_data_$_state_machine__19986__auto____1.call(this,state_20465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om_chat$web_api$get_initial_data_$_state_machine__19986__auto__.cljs$core$IFn$_invoke$arity$0 = om_chat$web_api$get_initial_data_$_state_machine__19986__auto____0;
om_chat$web_api$get_initial_data_$_state_machine__19986__auto__.cljs$core$IFn$_invoke$arity$1 = om_chat$web_api$get_initial_data_$_state_machine__19986__auto____1;
return om_chat$web_api$get_initial_data_$_state_machine__19986__auto__;
})()
;})(switch__19985__auto__,c__20006__auto___20474))
})();
var state__20008__auto__ = (function (){var statearr_20473 = f__20007__auto__.call(null);
(statearr_20473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__20006__auto___20474);

return statearr_20473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__20008__auto__);
});})(c__20006__auto___20474))
);


return channel;
});

//# sourceMappingURL=web_api.js.map
// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__26792 = cljs.core._EQ_;
var expr__26793 = (function (){var or__16771__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26792.call(null,"true",expr__26793))){
return true;
} else {
if(cljs.core.truth_(pred__26792.call(null,"false",expr__26793))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26793)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__26795__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26795 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26796__i = 0, G__26796__a = new Array(arguments.length -  0);
while (G__26796__i < G__26796__a.length) {G__26796__a[G__26796__i] = arguments[G__26796__i + 0]; ++G__26796__i;}
  args = new cljs.core.IndexedSeq(G__26796__a,0);
} 
return G__26795__delegate.call(this,args);};
G__26795.cljs$lang$maxFixedArity = 0;
G__26795.cljs$lang$applyTo = (function (arglist__26797){
var args = cljs.core.seq(arglist__26797);
return G__26795__delegate(args);
});
G__26795.cljs$core$IFn$_invoke$arity$variadic = G__26795__delegate;
return G__26795;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26798){
var map__26801 = p__26798;
var map__26801__$1 = ((((!((map__26801 == null)))?((((map__26801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26801):map__26801);
var message = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26801__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16771__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16759__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16759__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16759__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19796__auto___26963 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___26963,ch){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___26963,ch){
return (function (state_26932){
var state_val_26933 = (state_26932[(1)]);
if((state_val_26933 === (7))){
var inst_26928 = (state_26932[(2)]);
var state_26932__$1 = state_26932;
var statearr_26934_26964 = state_26932__$1;
(statearr_26934_26964[(2)] = inst_26928);

(statearr_26934_26964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (1))){
var state_26932__$1 = state_26932;
var statearr_26935_26965 = state_26932__$1;
(statearr_26935_26965[(2)] = null);

(statearr_26935_26965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (4))){
var inst_26885 = (state_26932[(7)]);
var inst_26885__$1 = (state_26932[(2)]);
var state_26932__$1 = (function (){var statearr_26936 = state_26932;
(statearr_26936[(7)] = inst_26885__$1);

return statearr_26936;
})();
if(cljs.core.truth_(inst_26885__$1)){
var statearr_26937_26966 = state_26932__$1;
(statearr_26937_26966[(1)] = (5));

} else {
var statearr_26938_26967 = state_26932__$1;
(statearr_26938_26967[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (15))){
var inst_26892 = (state_26932[(8)]);
var inst_26907 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26892);
var inst_26908 = cljs.core.first.call(null,inst_26907);
var inst_26909 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26908);
var inst_26910 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26909)].join('');
var inst_26911 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26910);
var state_26932__$1 = state_26932;
var statearr_26939_26968 = state_26932__$1;
(statearr_26939_26968[(2)] = inst_26911);

(statearr_26939_26968[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (13))){
var inst_26916 = (state_26932[(2)]);
var state_26932__$1 = state_26932;
var statearr_26940_26969 = state_26932__$1;
(statearr_26940_26969[(2)] = inst_26916);

(statearr_26940_26969[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (6))){
var state_26932__$1 = state_26932;
var statearr_26941_26970 = state_26932__$1;
(statearr_26941_26970[(2)] = null);

(statearr_26941_26970[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (17))){
var inst_26914 = (state_26932[(2)]);
var state_26932__$1 = state_26932;
var statearr_26942_26971 = state_26932__$1;
(statearr_26942_26971[(2)] = inst_26914);

(statearr_26942_26971[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (3))){
var inst_26930 = (state_26932[(2)]);
var state_26932__$1 = state_26932;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26932__$1,inst_26930);
} else {
if((state_val_26933 === (12))){
var inst_26891 = (state_26932[(9)]);
var inst_26905 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26891,opts);
var state_26932__$1 = state_26932;
if(cljs.core.truth_(inst_26905)){
var statearr_26943_26972 = state_26932__$1;
(statearr_26943_26972[(1)] = (15));

} else {
var statearr_26944_26973 = state_26932__$1;
(statearr_26944_26973[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (2))){
var state_26932__$1 = state_26932;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26932__$1,(4),ch);
} else {
if((state_val_26933 === (11))){
var inst_26892 = (state_26932[(8)]);
var inst_26897 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26898 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26892);
var inst_26899 = cljs.core.async.timeout.call(null,(1000));
var inst_26900 = [inst_26898,inst_26899];
var inst_26901 = (new cljs.core.PersistentVector(null,2,(5),inst_26897,inst_26900,null));
var state_26932__$1 = state_26932;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26932__$1,(14),inst_26901);
} else {
if((state_val_26933 === (9))){
var inst_26892 = (state_26932[(8)]);
var inst_26918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26919 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26892);
var inst_26920 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26919);
var inst_26921 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26920)].join('');
var inst_26922 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26921);
var state_26932__$1 = (function (){var statearr_26945 = state_26932;
(statearr_26945[(10)] = inst_26918);

return statearr_26945;
})();
var statearr_26946_26974 = state_26932__$1;
(statearr_26946_26974[(2)] = inst_26922);

(statearr_26946_26974[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (5))){
var inst_26885 = (state_26932[(7)]);
var inst_26887 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26888 = (new cljs.core.PersistentArrayMap(null,2,inst_26887,null));
var inst_26889 = (new cljs.core.PersistentHashSet(null,inst_26888,null));
var inst_26890 = figwheel.client.focus_msgs.call(null,inst_26889,inst_26885);
var inst_26891 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26890);
var inst_26892 = cljs.core.first.call(null,inst_26890);
var inst_26893 = figwheel.client.autoload_QMARK_.call(null);
var state_26932__$1 = (function (){var statearr_26947 = state_26932;
(statearr_26947[(8)] = inst_26892);

(statearr_26947[(9)] = inst_26891);

return statearr_26947;
})();
if(cljs.core.truth_(inst_26893)){
var statearr_26948_26975 = state_26932__$1;
(statearr_26948_26975[(1)] = (8));

} else {
var statearr_26949_26976 = state_26932__$1;
(statearr_26949_26976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (14))){
var inst_26903 = (state_26932[(2)]);
var state_26932__$1 = state_26932;
var statearr_26950_26977 = state_26932__$1;
(statearr_26950_26977[(2)] = inst_26903);

(statearr_26950_26977[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (16))){
var state_26932__$1 = state_26932;
var statearr_26951_26978 = state_26932__$1;
(statearr_26951_26978[(2)] = null);

(statearr_26951_26978[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (10))){
var inst_26924 = (state_26932[(2)]);
var state_26932__$1 = (function (){var statearr_26952 = state_26932;
(statearr_26952[(11)] = inst_26924);

return statearr_26952;
})();
var statearr_26953_26979 = state_26932__$1;
(statearr_26953_26979[(2)] = null);

(statearr_26953_26979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26933 === (8))){
var inst_26891 = (state_26932[(9)]);
var inst_26895 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26891,opts);
var state_26932__$1 = state_26932;
if(cljs.core.truth_(inst_26895)){
var statearr_26954_26980 = state_26932__$1;
(statearr_26954_26980[(1)] = (11));

} else {
var statearr_26955_26981 = state_26932__$1;
(statearr_26955_26981[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19796__auto___26963,ch))
;
return ((function (switch__19775__auto__,c__19796__auto___26963,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19776__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19776__auto____0 = (function (){
var statearr_26959 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26959[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19776__auto__);

(statearr_26959[(1)] = (1));

return statearr_26959;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19776__auto____1 = (function (state_26932){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_26932);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e26960){if((e26960 instanceof Object)){
var ex__19779__auto__ = e26960;
var statearr_26961_26982 = state_26932;
(statearr_26961_26982[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26932);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26983 = state_26932;
state_26932 = G__26983;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19776__auto__ = function(state_26932){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19776__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19776__auto____1.call(this,state_26932);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19776__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19776__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___26963,ch))
})();
var state__19798__auto__ = (function (){var statearr_26962 = f__19797__auto__.call(null);
(statearr_26962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___26963);

return statearr_26962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___26963,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26984_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26984_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_26991 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26991){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26989 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26990 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_26989,_STAR_print_newline_STAR_26990,base_path_26991){
return (function() { 
var G__26992__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__26992 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__26993__i = 0, G__26993__a = new Array(arguments.length -  0);
while (G__26993__i < G__26993__a.length) {G__26993__a[G__26993__i] = arguments[G__26993__i + 0]; ++G__26993__i;}
  args = new cljs.core.IndexedSeq(G__26993__a,0);
} 
return G__26992__delegate.call(this,args);};
G__26992.cljs$lang$maxFixedArity = 0;
G__26992.cljs$lang$applyTo = (function (arglist__26994){
var args = cljs.core.seq(arglist__26994);
return G__26992__delegate(args);
});
G__26992.cljs$core$IFn$_invoke$arity$variadic = G__26992__delegate;
return G__26992;
})()
;})(_STAR_print_fn_STAR_26989,_STAR_print_newline_STAR_26990,base_path_26991))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26990;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26989;
}}catch (e26988){if((e26988 instanceof Error)){
var e = e26988;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26991], null));
} else {
var e = e26988;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26991))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26995){
var map__27002 = p__26995;
var map__27002__$1 = ((((!((map__27002 == null)))?((((map__27002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27002):map__27002);
var opts = map__27002__$1;
var build_id = cljs.core.get.call(null,map__27002__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__27002,map__27002__$1,opts,build_id){
return (function (p__27004){
var vec__27005 = p__27004;
var map__27006 = cljs.core.nth.call(null,vec__27005,(0),null);
var map__27006__$1 = ((((!((map__27006 == null)))?((((map__27006.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27006.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27006):map__27006);
var msg = map__27006__$1;
var msg_name = cljs.core.get.call(null,map__27006__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27005,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__27005,map__27006,map__27006__$1,msg,msg_name,_,map__27002,map__27002__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__27005,map__27006,map__27006__$1,msg,msg_name,_,map__27002,map__27002__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__27002,map__27002__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__27012){
var vec__27013 = p__27012;
var map__27014 = cljs.core.nth.call(null,vec__27013,(0),null);
var map__27014__$1 = ((((!((map__27014 == null)))?((((map__27014.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27014.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27014):map__27014);
var msg = map__27014__$1;
var msg_name = cljs.core.get.call(null,map__27014__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27013,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__27016){
var map__27026 = p__27016;
var map__27026__$1 = ((((!((map__27026 == null)))?((((map__27026.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27026.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27026):map__27026);
var on_compile_warning = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__27026__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__27026,map__27026__$1,on_compile_warning,on_compile_fail){
return (function (p__27028){
var vec__27029 = p__27028;
var map__27030 = cljs.core.nth.call(null,vec__27029,(0),null);
var map__27030__$1 = ((((!((map__27030 == null)))?((((map__27030.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27030.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27030):map__27030);
var msg = map__27030__$1;
var msg_name = cljs.core.get.call(null,map__27030__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__27029,(1));
var pred__27032 = cljs.core._EQ_;
var expr__27033 = msg_name;
if(cljs.core.truth_(pred__27032.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__27033))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__27032.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__27033))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__27026,map__27026__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto__,msg_hist,msg_names,msg){
return (function (state_27249){
var state_val_27250 = (state_27249[(1)]);
if((state_val_27250 === (7))){
var inst_27173 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27173)){
var statearr_27251_27297 = state_27249__$1;
(statearr_27251_27297[(1)] = (8));

} else {
var statearr_27252_27298 = state_27249__$1;
(statearr_27252_27298[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (20))){
var inst_27243 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27253_27299 = state_27249__$1;
(statearr_27253_27299[(2)] = inst_27243);

(statearr_27253_27299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (27))){
var inst_27239 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27254_27300 = state_27249__$1;
(statearr_27254_27300[(2)] = inst_27239);

(statearr_27254_27300[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (1))){
var inst_27166 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27166)){
var statearr_27255_27301 = state_27249__$1;
(statearr_27255_27301[(1)] = (2));

} else {
var statearr_27256_27302 = state_27249__$1;
(statearr_27256_27302[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (24))){
var inst_27241 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27257_27303 = state_27249__$1;
(statearr_27257_27303[(2)] = inst_27241);

(statearr_27257_27303[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (4))){
var inst_27247 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27249__$1,inst_27247);
} else {
if((state_val_27250 === (15))){
var inst_27245 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27258_27304 = state_27249__$1;
(statearr_27258_27304[(2)] = inst_27245);

(statearr_27258_27304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (21))){
var inst_27204 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27259_27305 = state_27249__$1;
(statearr_27259_27305[(2)] = inst_27204);

(statearr_27259_27305[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (31))){
var inst_27228 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27228)){
var statearr_27260_27306 = state_27249__$1;
(statearr_27260_27306[(1)] = (34));

} else {
var statearr_27261_27307 = state_27249__$1;
(statearr_27261_27307[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (32))){
var inst_27237 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27262_27308 = state_27249__$1;
(statearr_27262_27308[(2)] = inst_27237);

(statearr_27262_27308[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (33))){
var inst_27226 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27263_27309 = state_27249__$1;
(statearr_27263_27309[(2)] = inst_27226);

(statearr_27263_27309[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (13))){
var inst_27187 = figwheel.client.heads_up.clear.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(16),inst_27187);
} else {
if((state_val_27250 === (22))){
var inst_27208 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27209 = figwheel.client.heads_up.append_message.call(null,inst_27208);
var state_27249__$1 = state_27249;
var statearr_27264_27310 = state_27249__$1;
(statearr_27264_27310[(2)] = inst_27209);

(statearr_27264_27310[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (36))){
var inst_27235 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27265_27311 = state_27249__$1;
(statearr_27265_27311[(2)] = inst_27235);

(statearr_27265_27311[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (29))){
var inst_27219 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27266_27312 = state_27249__$1;
(statearr_27266_27312[(2)] = inst_27219);

(statearr_27266_27312[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (6))){
var inst_27168 = (state_27249[(7)]);
var state_27249__$1 = state_27249;
var statearr_27267_27313 = state_27249__$1;
(statearr_27267_27313[(2)] = inst_27168);

(statearr_27267_27313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (28))){
var inst_27215 = (state_27249[(2)]);
var inst_27216 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27217 = figwheel.client.heads_up.display_warning.call(null,inst_27216);
var state_27249__$1 = (function (){var statearr_27268 = state_27249;
(statearr_27268[(8)] = inst_27215);

return statearr_27268;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(29),inst_27217);
} else {
if((state_val_27250 === (25))){
var inst_27213 = figwheel.client.heads_up.clear.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(28),inst_27213);
} else {
if((state_val_27250 === (34))){
var inst_27230 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(37),inst_27230);
} else {
if((state_val_27250 === (17))){
var inst_27195 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27269_27314 = state_27249__$1;
(statearr_27269_27314[(2)] = inst_27195);

(statearr_27269_27314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (3))){
var inst_27185 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27185)){
var statearr_27270_27315 = state_27249__$1;
(statearr_27270_27315[(1)] = (13));

} else {
var statearr_27271_27316 = state_27249__$1;
(statearr_27271_27316[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (12))){
var inst_27181 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27272_27317 = state_27249__$1;
(statearr_27272_27317[(2)] = inst_27181);

(statearr_27272_27317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (2))){
var inst_27168 = (state_27249[(7)]);
var inst_27168__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27249__$1 = (function (){var statearr_27273 = state_27249;
(statearr_27273[(7)] = inst_27168__$1);

return statearr_27273;
})();
if(cljs.core.truth_(inst_27168__$1)){
var statearr_27274_27318 = state_27249__$1;
(statearr_27274_27318[(1)] = (5));

} else {
var statearr_27275_27319 = state_27249__$1;
(statearr_27275_27319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (23))){
var inst_27211 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27211)){
var statearr_27276_27320 = state_27249__$1;
(statearr_27276_27320[(1)] = (25));

} else {
var statearr_27277_27321 = state_27249__$1;
(statearr_27277_27321[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (35))){
var state_27249__$1 = state_27249;
var statearr_27278_27322 = state_27249__$1;
(statearr_27278_27322[(2)] = null);

(statearr_27278_27322[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (19))){
var inst_27206 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27206)){
var statearr_27279_27323 = state_27249__$1;
(statearr_27279_27323[(1)] = (22));

} else {
var statearr_27280_27324 = state_27249__$1;
(statearr_27280_27324[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (11))){
var inst_27177 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27281_27325 = state_27249__$1;
(statearr_27281_27325[(2)] = inst_27177);

(statearr_27281_27325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (9))){
var inst_27179 = figwheel.client.heads_up.clear.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(12),inst_27179);
} else {
if((state_val_27250 === (5))){
var inst_27170 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27249__$1 = state_27249;
var statearr_27282_27326 = state_27249__$1;
(statearr_27282_27326[(2)] = inst_27170);

(statearr_27282_27326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (14))){
var inst_27197 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27197)){
var statearr_27283_27327 = state_27249__$1;
(statearr_27283_27327[(1)] = (18));

} else {
var statearr_27284_27328 = state_27249__$1;
(statearr_27284_27328[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (26))){
var inst_27221 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27249__$1 = state_27249;
if(cljs.core.truth_(inst_27221)){
var statearr_27285_27329 = state_27249__$1;
(statearr_27285_27329[(1)] = (30));

} else {
var statearr_27286_27330 = state_27249__$1;
(statearr_27286_27330[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (16))){
var inst_27189 = (state_27249[(2)]);
var inst_27190 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27191 = figwheel.client.format_messages.call(null,inst_27190);
var inst_27192 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27193 = figwheel.client.heads_up.display_error.call(null,inst_27191,inst_27192);
var state_27249__$1 = (function (){var statearr_27287 = state_27249;
(statearr_27287[(9)] = inst_27189);

return statearr_27287;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(17),inst_27193);
} else {
if((state_val_27250 === (30))){
var inst_27223 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27224 = figwheel.client.heads_up.display_warning.call(null,inst_27223);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(33),inst_27224);
} else {
if((state_val_27250 === (10))){
var inst_27183 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27288_27331 = state_27249__$1;
(statearr_27288_27331[(2)] = inst_27183);

(statearr_27288_27331[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (18))){
var inst_27199 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27200 = figwheel.client.format_messages.call(null,inst_27199);
var inst_27201 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27202 = figwheel.client.heads_up.display_error.call(null,inst_27200,inst_27201);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(21),inst_27202);
} else {
if((state_val_27250 === (37))){
var inst_27232 = (state_27249[(2)]);
var state_27249__$1 = state_27249;
var statearr_27289_27332 = state_27249__$1;
(statearr_27289_27332[(2)] = inst_27232);

(statearr_27289_27332[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27250 === (8))){
var inst_27175 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27249__$1 = state_27249;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27249__$1,(11),inst_27175);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19796__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19775__auto__,c__19796__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto____0 = (function (){
var statearr_27293 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27293[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto__);

(statearr_27293[(1)] = (1));

return statearr_27293;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto____1 = (function (state_27249){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_27249);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e27294){if((e27294 instanceof Object)){
var ex__19779__auto__ = e27294;
var statearr_27295_27333 = state_27249;
(statearr_27295_27333[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27249);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27334 = state_27249;
state_27249 = G__27334;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto__ = function(state_27249){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto____1.call(this,state_27249);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto__,msg_hist,msg_names,msg))
})();
var state__19798__auto__ = (function (){var statearr_27296 = f__19797__auto__.call(null);
(statearr_27296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto__);

return statearr_27296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto__,msg_hist,msg_names,msg))
);

return c__19796__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19796__auto___27397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___27397,ch){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___27397,ch){
return (function (state_27380){
var state_val_27381 = (state_27380[(1)]);
if((state_val_27381 === (1))){
var state_27380__$1 = state_27380;
var statearr_27382_27398 = state_27380__$1;
(statearr_27382_27398[(2)] = null);

(statearr_27382_27398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (2))){
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(4),ch);
} else {
if((state_val_27381 === (3))){
var inst_27378 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27380__$1,inst_27378);
} else {
if((state_val_27381 === (4))){
var inst_27368 = (state_27380[(7)]);
var inst_27368__$1 = (state_27380[(2)]);
var state_27380__$1 = (function (){var statearr_27383 = state_27380;
(statearr_27383[(7)] = inst_27368__$1);

return statearr_27383;
})();
if(cljs.core.truth_(inst_27368__$1)){
var statearr_27384_27399 = state_27380__$1;
(statearr_27384_27399[(1)] = (5));

} else {
var statearr_27385_27400 = state_27380__$1;
(statearr_27385_27400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (5))){
var inst_27368 = (state_27380[(7)]);
var inst_27370 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27368);
var state_27380__$1 = state_27380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27380__$1,(8),inst_27370);
} else {
if((state_val_27381 === (6))){
var state_27380__$1 = state_27380;
var statearr_27386_27401 = state_27380__$1;
(statearr_27386_27401[(2)] = null);

(statearr_27386_27401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (7))){
var inst_27376 = (state_27380[(2)]);
var state_27380__$1 = state_27380;
var statearr_27387_27402 = state_27380__$1;
(statearr_27387_27402[(2)] = inst_27376);

(statearr_27387_27402[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27381 === (8))){
var inst_27372 = (state_27380[(2)]);
var state_27380__$1 = (function (){var statearr_27388 = state_27380;
(statearr_27388[(8)] = inst_27372);

return statearr_27388;
})();
var statearr_27389_27403 = state_27380__$1;
(statearr_27389_27403[(2)] = null);

(statearr_27389_27403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__19796__auto___27397,ch))
;
return ((function (switch__19775__auto__,c__19796__auto___27397,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19776__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19776__auto____0 = (function (){
var statearr_27393 = [null,null,null,null,null,null,null,null,null];
(statearr_27393[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19776__auto__);

(statearr_27393[(1)] = (1));

return statearr_27393;
});
var figwheel$client$heads_up_plugin_$_state_machine__19776__auto____1 = (function (state_27380){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_27380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e27394){if((e27394 instanceof Object)){
var ex__19779__auto__ = e27394;
var statearr_27395_27404 = state_27380;
(statearr_27395_27404[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27405 = state_27380;
state_27380 = G__27405;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19776__auto__ = function(state_27380){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19776__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19776__auto____1.call(this,state_27380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19776__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19776__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___27397,ch))
})();
var state__19798__auto__ = (function (){var statearr_27396 = f__19797__auto__.call(null);
(statearr_27396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___27397);

return statearr_27396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___27397,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto__){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto__){
return (function (state_27426){
var state_val_27427 = (state_27426[(1)]);
if((state_val_27427 === (1))){
var inst_27421 = cljs.core.async.timeout.call(null,(3000));
var state_27426__$1 = state_27426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27426__$1,(2),inst_27421);
} else {
if((state_val_27427 === (2))){
var inst_27423 = (state_27426[(2)]);
var inst_27424 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27426__$1 = (function (){var statearr_27428 = state_27426;
(statearr_27428[(7)] = inst_27423);

return statearr_27428;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27426__$1,inst_27424);
} else {
return null;
}
}
});})(c__19796__auto__))
;
return ((function (switch__19775__auto__,c__19796__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19776__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19776__auto____0 = (function (){
var statearr_27432 = [null,null,null,null,null,null,null,null];
(statearr_27432[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19776__auto__);

(statearr_27432[(1)] = (1));

return statearr_27432;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19776__auto____1 = (function (state_27426){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_27426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e27433){if((e27433 instanceof Object)){
var ex__19779__auto__ = e27433;
var statearr_27434_27436 = state_27426;
(statearr_27434_27436[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27433;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27437 = state_27426;
state_27426 = G__27437;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19776__auto__ = function(state_27426){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19776__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19776__auto____1.call(this,state_27426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19776__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19776__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto__))
})();
var state__19798__auto__ = (function (){var statearr_27435 = f__19797__auto__.call(null);
(statearr_27435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto__);

return statearr_27435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto__))
);

return c__19796__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27438){
var map__27445 = p__27438;
var map__27445__$1 = ((((!((map__27445 == null)))?((((map__27445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27445):map__27445);
var ed = map__27445__$1;
var formatted_exception = cljs.core.get.call(null,map__27445__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27445__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27445__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27447_27451 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27448_27452 = null;
var count__27449_27453 = (0);
var i__27450_27454 = (0);
while(true){
if((i__27450_27454 < count__27449_27453)){
var msg_27455 = cljs.core._nth.call(null,chunk__27448_27452,i__27450_27454);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27455);

var G__27456 = seq__27447_27451;
var G__27457 = chunk__27448_27452;
var G__27458 = count__27449_27453;
var G__27459 = (i__27450_27454 + (1));
seq__27447_27451 = G__27456;
chunk__27448_27452 = G__27457;
count__27449_27453 = G__27458;
i__27450_27454 = G__27459;
continue;
} else {
var temp__4425__auto___27460 = cljs.core.seq.call(null,seq__27447_27451);
if(temp__4425__auto___27460){
var seq__27447_27461__$1 = temp__4425__auto___27460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27447_27461__$1)){
var c__17574__auto___27462 = cljs.core.chunk_first.call(null,seq__27447_27461__$1);
var G__27463 = cljs.core.chunk_rest.call(null,seq__27447_27461__$1);
var G__27464 = c__17574__auto___27462;
var G__27465 = cljs.core.count.call(null,c__17574__auto___27462);
var G__27466 = (0);
seq__27447_27451 = G__27463;
chunk__27448_27452 = G__27464;
count__27449_27453 = G__27465;
i__27450_27454 = G__27466;
continue;
} else {
var msg_27467 = cljs.core.first.call(null,seq__27447_27461__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27467);

var G__27468 = cljs.core.next.call(null,seq__27447_27461__$1);
var G__27469 = null;
var G__27470 = (0);
var G__27471 = (0);
seq__27447_27451 = G__27468;
chunk__27448_27452 = G__27469;
count__27449_27453 = G__27470;
i__27450_27454 = G__27471;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27472){
var map__27475 = p__27472;
var map__27475__$1 = ((((!((map__27475 == null)))?((((map__27475.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27475.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27475):map__27475);
var w = map__27475__$1;
var message = cljs.core.get.call(null,map__27475__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16759__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16759__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16759__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__27483 = cljs.core.seq.call(null,plugins);
var chunk__27484 = null;
var count__27485 = (0);
var i__27486 = (0);
while(true){
if((i__27486 < count__27485)){
var vec__27487 = cljs.core._nth.call(null,chunk__27484,i__27486);
var k = cljs.core.nth.call(null,vec__27487,(0),null);
var plugin = cljs.core.nth.call(null,vec__27487,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27489 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27483,chunk__27484,count__27485,i__27486,pl_27489,vec__27487,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27489.call(null,msg_hist);
});})(seq__27483,chunk__27484,count__27485,i__27486,pl_27489,vec__27487,k,plugin))
);
} else {
}

var G__27490 = seq__27483;
var G__27491 = chunk__27484;
var G__27492 = count__27485;
var G__27493 = (i__27486 + (1));
seq__27483 = G__27490;
chunk__27484 = G__27491;
count__27485 = G__27492;
i__27486 = G__27493;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27483);
if(temp__4425__auto__){
var seq__27483__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27483__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__27483__$1);
var G__27494 = cljs.core.chunk_rest.call(null,seq__27483__$1);
var G__27495 = c__17574__auto__;
var G__27496 = cljs.core.count.call(null,c__17574__auto__);
var G__27497 = (0);
seq__27483 = G__27494;
chunk__27484 = G__27495;
count__27485 = G__27496;
i__27486 = G__27497;
continue;
} else {
var vec__27488 = cljs.core.first.call(null,seq__27483__$1);
var k = cljs.core.nth.call(null,vec__27488,(0),null);
var plugin = cljs.core.nth.call(null,vec__27488,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27498 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27483,chunk__27484,count__27485,i__27486,pl_27498,vec__27488,k,plugin,seq__27483__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27498.call(null,msg_hist);
});})(seq__27483,chunk__27484,count__27485,i__27486,pl_27498,vec__27488,k,plugin,seq__27483__$1,temp__4425__auto__))
);
} else {
}

var G__27499 = cljs.core.next.call(null,seq__27483__$1);
var G__27500 = null;
var G__27501 = (0);
var G__27502 = (0);
seq__27483 = G__27499;
chunk__27484 = G__27500;
count__27485 = G__27501;
i__27486 = G__27502;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args27503 = [];
var len__17829__auto___27506 = arguments.length;
var i__17830__auto___27507 = (0);
while(true){
if((i__17830__auto___27507 < len__17829__auto___27506)){
args27503.push((arguments[i__17830__auto___27507]));

var G__27508 = (i__17830__auto___27507 + (1));
i__17830__auto___27507 = G__27508;
continue;
} else {
}
break;
}

var G__27505 = args27503.length;
switch (G__27505) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27503.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17836__auto__ = [];
var len__17829__auto___27514 = arguments.length;
var i__17830__auto___27515 = (0);
while(true){
if((i__17830__auto___27515 < len__17829__auto___27514)){
args__17836__auto__.push((arguments[i__17830__auto___27515]));

var G__27516 = (i__17830__auto___27515 + (1));
i__17830__auto___27515 = G__27516;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((0) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17837__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27511){
var map__27512 = p__27511;
var map__27512__$1 = ((((!((map__27512 == null)))?((((map__27512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27512):map__27512);
var opts = map__27512__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27510){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27510));
});

//# sourceMappingURL=client.js.map
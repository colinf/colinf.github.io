// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.parser');
goog.require('cljs.core');
goog.require('om.next');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
if(typeof om_chat.parser.read !== 'undefined'){
} else {
om_chat.parser.read = (function (){var method_table__17752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17756__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-chat.parser","read"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17756__auto__,method_table__17752__auto__,prefer_table__17753__auto__,method_cache__17754__auto__,cached_hierarchy__17755__auto__));
})();
}
om_chat.parser.thread_with_derived = (function om_chat$parser$thread_with_derived(p__22237,st){
var map__22240 = p__22237;
var map__22240__$1 = ((((!((map__22240 == null)))?((((map__22240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22240):map__22240);
var thread = map__22240__$1;
var id = cljs.core.get.call(null,map__22240__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var selected_id = new cljs.core.Keyword("selected","thread","selected/thread",1902928633).cljs$core$IFn$_invoke$arity$1(st);
if(cljs.core._EQ_.call(null,selected_id,id)){
return cljs.core.assoc.call(null,thread,new cljs.core.Keyword("thread","selected","thread/selected",1852133526),true);
} else {
return thread;
}
});
cljs.core._add_method.call(null,om_chat.parser.read,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__22242,k,_){
var map__22243 = p__22242;
var map__22243__$1 = ((((!((map__22243 == null)))?((((map__22243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22243):map__22243);
var env = map__22243__$1;
var state = cljs.core.get.call(null,map__22243__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
if(cljs.core.contains_QMARK_.call(null,st,k)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.get.call(null,st,k)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"remote","remote",-1593576576),true], null);
}
}));
cljs.core._add_method.call(null,om_chat.parser.read,new cljs.core.Keyword(null,"threads","threads",-1717798734),(function (p__22246,k,_){
var map__22247 = p__22246;
var map__22247__$1 = ((((!((map__22247 == null)))?((((map__22247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22247):map__22247);
var state = cljs.core.get.call(null,map__22247__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var query = cljs.core.get.call(null,map__22247__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var st = cljs.core.deref.call(null,state);
var tree = om.next.db__GT_tree.call(null,query,cljs.core.get.call(null,st,k),st);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,((function (st,tree,map__22247,map__22247__$1,state,query){
return (function (p1__22245_SHARP_){
return om_chat.parser.thread_with_derived.call(null,p1__22245_SHARP_,st);
});})(st,tree,map__22247,map__22247__$1,state,query))
,tree))], null);
}));
if(typeof om_chat.parser.mutate !== 'undefined'){
} else {
om_chat.parser.mutate = (function (){var method_table__17752__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17753__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17754__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17755__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17756__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"om-chat.parser","mutate"),om.next.dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17756__auto__,method_table__17752__auto__,prefer_table__17753__auto__,method_cache__17754__auto__,cached_hierarchy__17755__auto__));
})();
}
cljs.core._add_method.call(null,om_chat.parser.mutate,new cljs.core.Symbol("thread","select","thread/select",2043814120,null),(function (p__22249,_,p__22250){
var map__22251 = p__22249;
var map__22251__$1 = ((((!((map__22251 == null)))?((((map__22251.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22251.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22251):map__22251);
var state = cljs.core.get.call(null,map__22251__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22252 = p__22250;
var map__22252__$1 = ((((!((map__22252 == null)))?((((map__22252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22252):map__22252);
var id = cljs.core.get.call(null,map__22252__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var swapper = ((function (map__22251,map__22251__$1,state,map__22252,map__22252__$1,id){
return (function (st){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword("selected","thread","selected/thread",1902928633),id),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("threads","by-id","threads/by-id",1347689244),id,new cljs.core.Keyword("thread","read","thread/read",131259471)], null),true);
});})(map__22251,map__22251__$1,state,map__22252,map__22252__$1,id))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (swapper,map__22251,map__22251__$1,state,map__22252,map__22252__$1,id){
return (function (){
return cljs.core.swap_BANG_.call(null,state,swapper);
});})(swapper,map__22251,map__22251__$1,state,map__22252,map__22252__$1,id))
], null);
}));
cljs.core._add_method.call(null,om_chat.parser.mutate,new cljs.core.Symbol("message","new","message/new",743457972,null),(function (p__22255,_,p__22256){
var map__22257 = p__22255;
var map__22257__$1 = ((((!((map__22257 == null)))?((((map__22257.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22257.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22257):map__22257);
var state = cljs.core.get.call(null,map__22257__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__22258 = p__22256;
var map__22258__$1 = ((((!((map__22258 == null)))?((((map__22258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22258):map__22258);
var id = cljs.core.get.call(null,map__22258__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var text = cljs.core.get.call(null,map__22258__$1,new cljs.core.Keyword("message","text","message/text",743256678));
var now = cljs_time.core.now.call(null);
var msg_id = [cljs.core.str("m_"),cljs.core.str(now)].join('');
var new_msg = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("message","id","message/id",1689496141),msg_id,new cljs.core.Keyword("message","author-name","message/author-name",-1769059014),"Bill",new cljs.core.Keyword("message","date","message/date",1620755225),cljs_time.coerce.to_date.call(null,now),new cljs.core.Keyword("message","text","message/text",743256678),text,new cljs.core.Keyword("message","read","message/read",-1731663282),true], null);
var swapper = ((function (now,msg_id,new_msg,map__22257,map__22257__$1,state,map__22258,map__22258__$1,id,text){
return (function (st){
return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("messages","by-id","messages/by-id",1687670167),msg_id], null),new_msg),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("threads","by-id","threads/by-id",1347689244),id,new cljs.core.Keyword("thread","messages","thread/messages",683006828)], null),cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("messages","by-id","messages/by-id",1687670167),msg_id], null));
});})(now,msg_id,new_msg,map__22257,map__22257__$1,state,map__22258,map__22258__$1,id,text))
;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),((function (now,msg_id,new_msg,swapper,map__22257,map__22257__$1,state,map__22258,map__22258__$1,id,text){
return (function (){
return cljs.core.swap_BANG_.call(null,state,swapper);
});})(now,msg_id,new_msg,swapper,map__22257,map__22257__$1,state,map__22258,map__22258__$1,id,text))
], null);
}));

//# sourceMappingURL=parser.js.map
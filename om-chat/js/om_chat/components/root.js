// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.components.root');
goog.require('cljs.core');
goog.require('om_chat.components.message_section');
goog.require('om.dom');
goog.require('om_chat.components.thread_item');
goog.require('om_chat.components.thread_section');
goog.require('om.next');
/**
 * @constructor
 */
om_chat.components.root.ChatApp = (function om_chat$components$root$ChatApp(){
var this__18036__auto__ = this;
React.Component.apply(this__18036__auto__,arguments);

if(!((this__18036__auto__.initLocalState == null))){
this__18036__auto__.state = this__18036__auto__.initLocalState();
} else {
this__18036__auto__.state = {};
}

return this__18036__auto__;
});

om_chat.components.root.ChatApp.prototype = goog.object.clone(React.Component.prototype);

var x22163_22173 = om_chat.components.root.ChatApp.prototype;
x22163_22173.componentWillUpdate = ((function (x22163_22173){
return (function (next_props__17977__auto__,next_state__17978__auto__){
var this__17976__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__17976__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__17976__auto__);
});})(x22163_22173))
;

x22163_22173.shouldComponentUpdate = ((function (x22163_22173){
return (function (next_props__17977__auto__,next_state__17978__auto__){
var this__17976__auto__ = this;
var or__16839__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__17976__auto__),goog.object.get(next_props__17977__auto__,"omcljs$value"));
if(or__16839__auto__){
return or__16839__auto__;
} else {
var and__16827__auto__ = this__17976__auto__.state;
if(cljs.core.truth_(and__16827__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__17976__auto__.state,"omcljs$state"),goog.object.get(next_state__17978__auto__,"omcljs$state"));
} else {
return and__16827__auto__;
}
}
});})(x22163_22173))
;

x22163_22173.componentWillUnmount = ((function (x22163_22173){
return (function (){
var this__17976__auto__ = this;
var r__17982__auto__ = om.next.get_reconciler.call(null,this__17976__auto__);
var cfg__17983__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__17982__auto__);
var st__17984__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__17983__auto__);
var indexer__17981__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__17983__auto__);
if((st__17984__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__17984__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__17976__auto__);
}

if((indexer__17981__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__17981__auto__,this__17976__auto__);
}
});})(x22163_22173))
;

x22163_22173.componentDidUpdate = ((function (x22163_22173){
return (function (prev_props__17979__auto__,prev_state__17980__auto__){
var this__17976__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__17976__auto__);
});})(x22163_22173))
;

x22163_22173.isMounted = ((function (x22163_22173){
return (function (){
var this__17976__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__17976__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x22163_22173))
;

x22163_22173.componentWillMount = ((function (x22163_22173){
return (function (){
var this__17976__auto__ = this;
var indexer__17981__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__17976__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__17981__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__17981__auto__,this__17976__auto__);
}
});})(x22163_22173))
;

x22163_22173.render = ((function (x22163_22173){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_22164 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_22165 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_22166 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_22167 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_22168 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__22169 = om.next.props.call(null,this$);
var map__22169__$1 = ((((!((map__22169 == null)))?((((map__22169.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22169.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22169):map__22169);
var threads = cljs.core.get.call(null,map__22169__$1,new cljs.core.Keyword(null,"threads","threads",-1717798734));
return React.DOM.div({"className": "chatapp"},om.util.force_children.call(null,om_chat.components.thread_section.thread_section.call(null,om.next.computed.call(null,om.next.props.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click-thread","on-click-thread",905902599),((function (map__22169,map__22169__$1,threads,_STAR_reconciler_STAR_22164,_STAR_depth_STAR_22165,_STAR_shared_STAR_22166,_STAR_instrument_STAR_22167,_STAR_parent_STAR_22168,this$,x22163_22173){
return (function (id){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("thread","select","thread/select",2043814120,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("thread","id","thread/id",-241320886)),cljs.core._conj.call(null,cljs.core.List.EMPTY,id)))))))))))))));
});})(map__22169,map__22169__$1,threads,_STAR_reconciler_STAR_22164,_STAR_depth_STAR_22165,_STAR_shared_STAR_22166,_STAR_instrument_STAR_22167,_STAR_parent_STAR_22168,this$,x22163_22173))
], null)))),om.util.force_children.call(null,(function (){var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,new cljs.core.Keyword("thread","selected","thread/selected",1852133526),threads));
if(cljs.core.truth_(temp__4423__auto__)){
var selected_thread = temp__4423__auto__;
return om_chat.components.message_section.message_section.call(null,om.next.computed.call(null,selected_thread,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-new-msg","on-new-msg",536396788),((function (selected_thread,temp__4423__auto__,map__22169,map__22169__$1,threads,_STAR_reconciler_STAR_22164,_STAR_depth_STAR_22165,_STAR_shared_STAR_22166,_STAR_instrument_STAR_22167,_STAR_parent_STAR_22168,this$,x22163_22173){
return (function (thread_id,msg_text){
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("message","new","message/new",743457972,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("thread","id","thread/id",-241320886)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("thread","id","thread/id",-241320886).cljs$core$IFn$_invoke$arity$1(selected_thread)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword("message","text","message/text",743256678)),cljs.core._conj.call(null,cljs.core.List.EMPTY,msg_text)))))))))))))));
});})(selected_thread,temp__4423__auto__,map__22169,map__22169__$1,threads,_STAR_reconciler_STAR_22164,_STAR_depth_STAR_22165,_STAR_shared_STAR_22166,_STAR_instrument_STAR_22167,_STAR_parent_STAR_22168,this$,x22163_22173))
], null)));
} else {
return null;
}
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_22168;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_22167;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_22166;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_22165;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_22164;
}});})(x22163_22173))
;


om_chat.components.root.ChatApp.prototype.constructor = om_chat.components.root.ChatApp;

om_chat.components.root.ChatApp.prototype.om$isComponent = true;

var x22171_22174 = om_chat.components.root.ChatApp;
x22171_22174.om$next$IQuery$ = true;

x22171_22174.om$next$IQuery$query$arity$1 = ((function (x22171_22174){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_query.call(null,om_chat.components.thread_section.ThreadSection)], null);
});})(x22171_22174))
;


var x22172_22175 = om_chat.components.root.ChatApp.prototype;
x22172_22175.om$next$IQuery$ = true;

x22172_22175.om$next$IQuery$query$arity$1 = ((function (x22172_22175){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om.next.get_query.call(null,om_chat.components.thread_section.ThreadSection)], null);
});})(x22172_22175))
;


om_chat.components.root.ChatApp.cljs$lang$type = true;

om_chat.components.root.ChatApp.cljs$lang$ctorStr = "om-chat.components.root/ChatApp";

om_chat.components.root.ChatApp.cljs$lang$ctorPrWriter = (function (this__18038__auto__,writer__18039__auto__,opt__18040__auto__){
return cljs.core._write.call(null,writer__18039__auto__,"om-chat.components.root/ChatApp");
});

//# sourceMappingURL=root.js.map
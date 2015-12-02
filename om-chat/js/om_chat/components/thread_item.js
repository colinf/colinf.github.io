// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.components.thread_item');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_chat.components.message_section');
/**
 * @constructor
 */
om_chat.components.thread_item.ThreadItem = (function om_chat$components$thread_item$ThreadItem(){
var this__18036__auto__ = this;
React.Component.apply(this__18036__auto__,arguments);

if(!((this__18036__auto__.initLocalState == null))){
this__18036__auto__.state = this__18036__auto__.initLocalState();
} else {
this__18036__auto__.state = {};
}

return this__18036__auto__;
});

om_chat.components.thread_item.ThreadItem.prototype = goog.object.clone(React.Component.prototype);

var x21699_21718 = om_chat.components.thread_item.ThreadItem.prototype;
x21699_21718.componentWillUpdate = ((function (x21699_21718){
return (function (next_props__17977__auto__,next_state__17978__auto__){
var this__17976__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__17976__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__17976__auto__);
});})(x21699_21718))
;

x21699_21718.shouldComponentUpdate = ((function (x21699_21718){
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
});})(x21699_21718))
;

x21699_21718.componentWillUnmount = ((function (x21699_21718){
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
});})(x21699_21718))
;

x21699_21718.componentDidUpdate = ((function (x21699_21718){
return (function (prev_props__17979__auto__,prev_state__17980__auto__){
var this__17976__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__17976__auto__);
});})(x21699_21718))
;

x21699_21718.isMounted = ((function (x21699_21718){
return (function (){
var this__17976__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__17976__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21699_21718))
;

x21699_21718.componentWillMount = ((function (x21699_21718){
return (function (){
var this__17976__auto__ = this;
var indexer__17981__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__17976__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__17981__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__17981__auto__,this__17976__auto__);
}
});})(x21699_21718))
;

x21699_21718.render = ((function (x21699_21718){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21700 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21701 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21702 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21703 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21704 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21705 = om.next.props.call(null,this$);
var map__21705__$1 = ((((!((map__21705 == null)))?((((map__21705.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21705.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21705):map__21705);
var id = cljs.core.get.call(null,map__21705__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var name = cljs.core.get.call(null,map__21705__$1,new cljs.core.Keyword("thread","name","thread/name",-1715122617));
var selected = cljs.core.get.call(null,map__21705__$1,new cljs.core.Keyword("thread","selected","thread/selected",1852133526));
var messages = cljs.core.get.call(null,map__21705__$1,new cljs.core.Keyword("thread","messages","thread/messages",683006828));
var last_message = cljs.core.last.call(null,messages);
var map__21706 = om.next.get_computed.call(null,this$);
var map__21706__$1 = ((((!((map__21706 == null)))?((((map__21706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21706):map__21706);
var on_click_thread = cljs.core.get.call(null,map__21706__$1,new cljs.core.Keyword(null,"on-click-thread","on-click-thread",905902599));
var class$ = (function (){var G__21709 = "thread-list-item";
var G__21709__$1 = (cljs.core.truth_(selected)?[cljs.core.str(G__21709),cljs.core.str(" active")].join(''):G__21709);
return G__21709__$1;
})();
return React.DOM.li({"className": class$, "onClick": ((function (map__21705,map__21705__$1,id,name,selected,messages,last_message,map__21706,map__21706__$1,on_click_thread,class$,_STAR_reconciler_STAR_21700,_STAR_depth_STAR_21701,_STAR_shared_STAR_21702,_STAR_instrument_STAR_21703,_STAR_parent_STAR_21704,this$,x21699_21718){
return (function (e){
return on_click_thread.call(null,id);
});})(map__21705,map__21705__$1,id,name,selected,messages,last_message,map__21706,map__21706__$1,on_click_thread,class$,_STAR_reconciler_STAR_21700,_STAR_depth_STAR_21701,_STAR_shared_STAR_21702,_STAR_instrument_STAR_21703,_STAR_parent_STAR_21704,this$,x21699_21718))
},om.util.force_children.call(null,React.DOM.h5({"className": "thread-name"},om.util.force_children.call(null,name))),om.util.force_children.call(null,React.DOM.div({"className": "thread-time"},om.util.force_children.call(null,(((last_message == null))?"":new cljs.core.Keyword("message","date","message/date",1620755225).cljs$core$IFn$_invoke$arity$1(last_message).toLocaleTimeString())))),om.util.force_children.call(null,React.DOM.div({"className": "thread-last-message"},om.util.force_children.call(null,new cljs.core.Keyword("message","text","message/text",743256678).cljs$core$IFn$_invoke$arity$1(last_message)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21704;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21703;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21702;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21701;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21700;
}});})(x21699_21718))
;


om_chat.components.thread_item.ThreadItem.prototype.constructor = om_chat.components.thread_item.ThreadItem;

om_chat.components.thread_item.ThreadItem.prototype.om$isComponent = true;

var x21710_21719 = om_chat.components.thread_item.ThreadItem;
x21710_21719.om$next$Ident$ = true;

x21710_21719.om$next$Ident$ident$arity$2 = ((function (x21710_21719){
return (function (this$,p__21711){
var map__21712 = p__21711;
var map__21712__$1 = ((((!((map__21712 == null)))?((((map__21712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21712):map__21712);
var id = cljs.core.get.call(null,map__21712__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("threads","by-id","threads/by-id",1347689244),id], null);
});})(x21710_21719))
;

x21710_21719.om$next$IQuery$ = true;

x21710_21719.om$next$IQuery$query$arity$1 = ((function (x21710_21719){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("thread","id","thread/id",-241320886),new cljs.core.Keyword("thread","name","thread/name",-1715122617),new cljs.core.Keyword("thread","read","thread/read",131259471),new cljs.core.Keyword("thread","selected","thread/selected",1852133526),om.next.get_query.call(null,om_chat.components.message_section.MessageSection)], null);
});})(x21710_21719))
;


var x21714_21720 = om_chat.components.thread_item.ThreadItem.prototype;
x21714_21720.om$next$Ident$ = true;

x21714_21720.om$next$Ident$ident$arity$2 = ((function (x21714_21720){
return (function (this$,p__21715){
var map__21716 = p__21715;
var map__21716__$1 = ((((!((map__21716 == null)))?((((map__21716.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21716.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21716):map__21716);
var id = cljs.core.get.call(null,map__21716__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("threads","by-id","threads/by-id",1347689244),id], null);
});})(x21714_21720))
;

x21714_21720.om$next$IQuery$ = true;

x21714_21720.om$next$IQuery$query$arity$1 = ((function (x21714_21720){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("thread","id","thread/id",-241320886),new cljs.core.Keyword("thread","name","thread/name",-1715122617),new cljs.core.Keyword("thread","read","thread/read",131259471),new cljs.core.Keyword("thread","selected","thread/selected",1852133526),om.next.get_query.call(null,om_chat.components.message_section.MessageSection)], null);
});})(x21714_21720))
;


om_chat.components.thread_item.ThreadItem.cljs$lang$type = true;

om_chat.components.thread_item.ThreadItem.cljs$lang$ctorStr = "om-chat.components.thread-item/ThreadItem";

om_chat.components.thread_item.ThreadItem.cljs$lang$ctorPrWriter = (function (this__18038__auto__,writer__18039__auto__,opt__18040__auto__){
return cljs.core._write.call(null,writer__18039__auto__,"om-chat.components.thread-item/ThreadItem");
});
om_chat.components.thread_item.thread_item = om.next.factory.call(null,om_chat.components.thread_item.ThreadItem);

//# sourceMappingURL=thread_item.js.map
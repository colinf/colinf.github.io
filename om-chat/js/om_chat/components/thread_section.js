// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.components.thread_section');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_chat.components.thread_item');
om_chat.components.thread_section.unread = (function om_chat$components$thread_section$unread(threads){
var unread_count = cljs.core.count.call(null,cljs.core.remove.call(null,new cljs.core.Keyword("thread","read","thread/read",131259471),threads));
if(cljs.core._EQ_.call(null,unread_count,(0))){
return null;
} else {
return React.DOM.span(null,om.util.force_children.call(null,"Unread threads: "),om.util.force_children.call(null,unread_count));

}
});
/**
 * @constructor
 */
om_chat.components.thread_section.ThreadSection = (function om_chat$components$thread_section$ThreadSection(){
var this__18036__auto__ = this;
React.Component.apply(this__18036__auto__,arguments);

if(!((this__18036__auto__.initLocalState == null))){
this__18036__auto__.state = this__18036__auto__.initLocalState();
} else {
this__18036__auto__.state = {};
}

return this__18036__auto__;
});

om_chat.components.thread_section.ThreadSection.prototype = goog.object.clone(React.Component.prototype);

var x21728_21740 = om_chat.components.thread_section.ThreadSection.prototype;
x21728_21740.componentWillUpdate = ((function (x21728_21740){
return (function (next_props__17977__auto__,next_state__17978__auto__){
var this__17976__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__17976__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__17976__auto__);
});})(x21728_21740))
;

x21728_21740.shouldComponentUpdate = ((function (x21728_21740){
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
});})(x21728_21740))
;

x21728_21740.componentWillUnmount = ((function (x21728_21740){
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
});})(x21728_21740))
;

x21728_21740.componentDidUpdate = ((function (x21728_21740){
return (function (prev_props__17979__auto__,prev_state__17980__auto__){
var this__17976__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__17976__auto__);
});})(x21728_21740))
;

x21728_21740.isMounted = ((function (x21728_21740){
return (function (){
var this__17976__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__17976__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x21728_21740))
;

x21728_21740.componentWillMount = ((function (x21728_21740){
return (function (){
var this__17976__auto__ = this;
var indexer__17981__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__17976__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__17981__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__17981__auto__,this__17976__auto__);
}
});})(x21728_21740))
;

x21728_21740.render = ((function (x21728_21740){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_21729 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_21730 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_21731 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_21732 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_21733 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__21734 = om.next.props.call(null,this$);
var map__21734__$1 = ((((!((map__21734 == null)))?((((map__21734.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21734.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21734):map__21734);
var threads = cljs.core.get.call(null,map__21734__$1,new cljs.core.Keyword(null,"threads","threads",-1717798734));
var map__21735 = om.next.get_computed.call(null,this$);
var map__21735__$1 = ((((!((map__21735 == null)))?((((map__21735.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21735.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21735):map__21735);
var on_click_thread = cljs.core.get.call(null,map__21735__$1,new cljs.core.Keyword(null,"on-click-thread","on-click-thread",905902599));
return React.DOM.div({"className": "thread-section"},om.util.force_children.call(null,React.DOM.div({"className": "thread-count"},om.util.force_children.call(null,om_chat.components.thread_section.unread.call(null,threads)))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,{"className": "thread-list"},cljs.core.map.call(null,((function (map__21734,map__21734__$1,threads,map__21735,map__21735__$1,on_click_thread,_STAR_reconciler_STAR_21729,_STAR_depth_STAR_21730,_STAR_shared_STAR_21731,_STAR_instrument_STAR_21732,_STAR_parent_STAR_21733,this$,x21728_21740){
return (function (p1__21723_SHARP_){
return om_chat.components.thread_item.thread_item.call(null,om.next.computed.call(null,p1__21723_SHARP_,om.next.get_computed.call(null,this$)));
});})(map__21734,map__21734__$1,threads,map__21735,map__21735__$1,on_click_thread,_STAR_reconciler_STAR_21729,_STAR_depth_STAR_21730,_STAR_shared_STAR_21731,_STAR_instrument_STAR_21732,_STAR_parent_STAR_21733,this$,x21728_21740))
,threads))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_21733;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_21732;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_21731;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_21730;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_21729;
}});})(x21728_21740))
;


om_chat.components.thread_section.ThreadSection.prototype.constructor = om_chat.components.thread_section.ThreadSection;

om_chat.components.thread_section.ThreadSection.prototype.om$isComponent = true;

var x21738_21741 = om_chat.components.thread_section.ThreadSection;
x21738_21741.om$next$IQuery$ = true;

x21738_21741.om$next$IQuery$query$arity$1 = ((function (x21738_21741){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"threads","threads",-1717798734),om.next.get_query.call(null,om_chat.components.thread_item.ThreadItem)], null);
});})(x21738_21741))
;


var x21739_21742 = om_chat.components.thread_section.ThreadSection.prototype;
x21739_21742.om$next$IQuery$ = true;

x21739_21742.om$next$IQuery$query$arity$1 = ((function (x21739_21742){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"threads","threads",-1717798734),om.next.get_query.call(null,om_chat.components.thread_item.ThreadItem)], null);
});})(x21739_21742))
;


om_chat.components.thread_section.ThreadSection.cljs$lang$type = true;

om_chat.components.thread_section.ThreadSection.cljs$lang$ctorStr = "om-chat.components.thread-section/ThreadSection";

om_chat.components.thread_section.ThreadSection.cljs$lang$ctorPrWriter = (function (this__18038__auto__,writer__18039__auto__,opt__18040__auto__){
return cljs.core._write.call(null,writer__18039__auto__,"om-chat.components.thread-section/ThreadSection");
});
om_chat.components.thread_section.thread_section = om.next.factory.call(null,om_chat.components.thread_section.ThreadSection);

//# sourceMappingURL=thread_section.js.map
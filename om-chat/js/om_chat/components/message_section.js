// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.components.message_section');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('om_chat.components.message_item');
goog.require('om_chat.components.message_composer');
/**
 * @constructor
 */
om_chat.components.message_section.MessageSection = (function om_chat$components$message_section$MessageSection(){
var this__18856__auto__ = this;
React.Component.apply(this__18856__auto__,arguments);

if(!((this__18856__auto__.initLocalState == null))){
this__18856__auto__.state = this__18856__auto__.initLocalState();
} else {
this__18856__auto__.state = {};
}

return this__18856__auto__;
});

om_chat.components.message_section.MessageSection.prototype = goog.object.clone(React.Component.prototype);

var x20199_20211 = om_chat.components.message_section.MessageSection.prototype;
x20199_20211.componentWillUpdate = ((function (x20199_20211){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18796__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18796__auto__);
});})(x20199_20211))
;

x20199_20211.shouldComponentUpdate = ((function (x20199_20211){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
var or__16771__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__18796__auto__),goog.object.get(next_props__18797__auto__,"omcljs$value"));
if(or__16771__auto__){
return or__16771__auto__;
} else {
var and__16759__auto__ = this__18796__auto__.state;
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__18796__auto__.state,"omcljs$state"),goog.object.get(next_state__18798__auto__,"omcljs$state"));
} else {
return and__16759__auto__;
}
}
});})(x20199_20211))
;

x20199_20211.componentWillUnmount = ((function (x20199_20211){
return (function (){
var this__18796__auto__ = this;
var r__18802__auto__ = om.next.get_reconciler.call(null,this__18796__auto__);
var cfg__18803__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__18802__auto__);
var st__18804__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__18803__auto__);
var indexer__18801__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__18803__auto__);
if((st__18804__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__18804__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__18796__auto__);
}

if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20199_20211))
;

x20199_20211.componentDidUpdate = ((function (x20199_20211){
return (function (prev_props__18799__auto__,prev_state__18800__auto__){
var this__18796__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18796__auto__);
});})(x20199_20211))
;

x20199_20211.isMounted = ((function (x20199_20211){
return (function (){
var this__18796__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18796__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20199_20211))
;

x20199_20211.componentWillMount = ((function (x20199_20211){
return (function (){
var this__18796__auto__ = this;
var indexer__18801__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18796__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20199_20211))
;

x20199_20211.render = ((function (x20199_20211){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20200 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20201 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20202 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20203 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20204 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20205 = om.next.props.call(null,this$);
var map__20205__$1 = ((((!((map__20205 == null)))?((((map__20205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20205):map__20205);
var props = map__20205__$1;
var id = cljs.core.get.call(null,map__20205__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var name = cljs.core.get.call(null,map__20205__$1,new cljs.core.Keyword("thread","name","thread/name",-1715122617));
var messages = cljs.core.get.call(null,map__20205__$1,new cljs.core.Keyword("thread","messages","thread/messages",683006828));
var map__20206 = om.next.get_computed.call(null,props);
var map__20206__$1 = ((((!((map__20206 == null)))?((((map__20206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20206):map__20206);
var on_new_msg = cljs.core.get.call(null,map__20206__$1,new cljs.core.Keyword(null,"on-new-msg","on-new-msg",536396788));
return React.DOM.div({"className": "message-section"},om.util.force_children.call(null,React.DOM.h3({"className": "message-thread-heading"},om.util.force_children.call(null,name))),om.util.force_children.call(null,cljs.core.apply.call(null,om.dom.ul,{"className": "message-list"},cljs.core.map.call(null,om_chat.components.message_item.message_item,messages))),om.util.force_children.call(null,om_chat.components.message_composer.message_composer.call(null,om.next.computed.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-new-msg","on-new-msg",536396788),on_new_msg], null)))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20204;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20203;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20202;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20201;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20200;
}});})(x20199_20211))
;


om_chat.components.message_section.MessageSection.prototype.constructor = om_chat.components.message_section.MessageSection;

om_chat.components.message_section.MessageSection.prototype.om$isComponent = true;

var x20209_20212 = om_chat.components.message_section.MessageSection;
x20209_20212.om$next$IQuery$ = true;

x20209_20212.om$next$IQuery$query$arity$1 = ((function (x20209_20212){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("thread","messages","thread/messages",683006828),om.next.get_query.call(null,om_chat.components.message_item.MessageItem)], null);
});})(x20209_20212))
;


var x20210_20213 = om_chat.components.message_section.MessageSection.prototype;
x20210_20213.om$next$IQuery$ = true;

x20210_20213.om$next$IQuery$query$arity$1 = ((function (x20210_20213){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("thread","messages","thread/messages",683006828),om.next.get_query.call(null,om_chat.components.message_item.MessageItem)], null);
});})(x20210_20213))
;


om_chat.components.message_section.MessageSection.cljs$lang$type = true;

om_chat.components.message_section.MessageSection.cljs$lang$ctorStr = "om-chat.components.message-section/MessageSection";

om_chat.components.message_section.MessageSection.cljs$lang$ctorPrWriter = (function (this__18858__auto__,writer__18859__auto__,opt__18860__auto__){
return cljs.core._write.call(null,writer__18859__auto__,"om-chat.components.message-section/MessageSection");
});
om_chat.components.message_section.message_section = om.next.factory.call(null,om_chat.components.message_section.MessageSection);

//# sourceMappingURL=message_section.js.map
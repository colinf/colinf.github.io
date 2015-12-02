// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.components.message_item');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
/**
 * @constructor
 */
om_chat.components.message_item.MessageItem = (function om_chat$components$message_item$MessageItem(){
var this__18856__auto__ = this;
React.Component.apply(this__18856__auto__,arguments);

if(!((this__18856__auto__.initLocalState == null))){
this__18856__auto__.state = this__18856__auto__.initLocalState();
} else {
this__18856__auto__.state = {};
}

return this__18856__auto__;
});

om_chat.components.message_item.MessageItem.prototype = goog.object.clone(React.Component.prototype);

var x20174_20190 = om_chat.components.message_item.MessageItem.prototype;
x20174_20190.componentWillUpdate = ((function (x20174_20190){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18796__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18796__auto__);
});})(x20174_20190))
;

x20174_20190.shouldComponentUpdate = ((function (x20174_20190){
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
});})(x20174_20190))
;

x20174_20190.componentWillUnmount = ((function (x20174_20190){
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
});})(x20174_20190))
;

x20174_20190.componentDidUpdate = ((function (x20174_20190){
return (function (prev_props__18799__auto__,prev_state__18800__auto__){
var this__18796__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18796__auto__);
});})(x20174_20190))
;

x20174_20190.isMounted = ((function (x20174_20190){
return (function (){
var this__18796__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18796__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20174_20190))
;

x20174_20190.componentWillMount = ((function (x20174_20190){
return (function (){
var this__18796__auto__ = this;
var indexer__18801__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18796__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20174_20190))
;

x20174_20190.render = ((function (x20174_20190){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20175 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20176 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20177 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20178 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20179 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20180 = om.next.props.call(null,this$);
var map__20180__$1 = ((((!((map__20180 == null)))?((((map__20180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20180):map__20180);
var author_name = cljs.core.get.call(null,map__20180__$1,new cljs.core.Keyword("message","author-name","message/author-name",-1769059014));
var date = cljs.core.get.call(null,map__20180__$1,new cljs.core.Keyword("message","date","message/date",1620755225));
var text = cljs.core.get.call(null,map__20180__$1,new cljs.core.Keyword("message","text","message/text",743256678));
return React.DOM.li({"className": "message-list-item"},om.util.force_children.call(null,React.DOM.h5({"className": "message-author-name"},om.util.force_children.call(null,author_name))),om.util.force_children.call(null,React.DOM.div({"className": "message-time"},om.util.force_children.call(null,date.toLocaleTimeString()))),om.util.force_children.call(null,React.DOM.div({"className": "message-text"},om.util.force_children.call(null,text))));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20179;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20178;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20177;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20176;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20175;
}});})(x20174_20190))
;


om_chat.components.message_item.MessageItem.prototype.constructor = om_chat.components.message_item.MessageItem;

om_chat.components.message_item.MessageItem.prototype.om$isComponent = true;

var x20182_20191 = om_chat.components.message_item.MessageItem;
x20182_20191.om$next$Ident$ = true;

x20182_20191.om$next$Ident$ident$arity$2 = ((function (x20182_20191){
return (function (this$,p__20183){
var map__20184 = p__20183;
var map__20184__$1 = ((((!((map__20184 == null)))?((((map__20184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20184):map__20184);
var id = cljs.core.get.call(null,map__20184__$1,new cljs.core.Keyword("message","id","message/id",1689496141));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("messages","by-id","messages/by-id",1687670167),id], null);
});})(x20182_20191))
;

x20182_20191.om$next$IQuery$ = true;

x20182_20191.om$next$IQuery$query$arity$1 = ((function (x20182_20191){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message","id","message/id",1689496141),new cljs.core.Keyword("message","author-name","message/author-name",-1769059014),new cljs.core.Keyword("message","date","message/date",1620755225),new cljs.core.Keyword("message","text","message/text",743256678)], null);
});})(x20182_20191))
;


var x20186_20192 = om_chat.components.message_item.MessageItem.prototype;
x20186_20192.om$next$Ident$ = true;

x20186_20192.om$next$Ident$ident$arity$2 = ((function (x20186_20192){
return (function (this$,p__20187){
var map__20188 = p__20187;
var map__20188__$1 = ((((!((map__20188 == null)))?((((map__20188.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20188.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20188):map__20188);
var id = cljs.core.get.call(null,map__20188__$1,new cljs.core.Keyword("message","id","message/id",1689496141));
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("messages","by-id","messages/by-id",1687670167),id], null);
});})(x20186_20192))
;

x20186_20192.om$next$IQuery$ = true;

x20186_20192.om$next$IQuery$query$arity$1 = ((function (x20186_20192){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("message","id","message/id",1689496141),new cljs.core.Keyword("message","author-name","message/author-name",-1769059014),new cljs.core.Keyword("message","date","message/date",1620755225),new cljs.core.Keyword("message","text","message/text",743256678)], null);
});})(x20186_20192))
;


om_chat.components.message_item.MessageItem.cljs$lang$type = true;

om_chat.components.message_item.MessageItem.cljs$lang$ctorStr = "om-chat.components.message-item/MessageItem";

om_chat.components.message_item.MessageItem.cljs$lang$ctorPrWriter = (function (this__18858__auto__,writer__18859__auto__,opt__18860__auto__){
return cljs.core._write.call(null,writer__18859__auto__,"om-chat.components.message-item/MessageItem");
});
om_chat.components.message_item.message_item = om.next.factory.call(null,om_chat.components.message_item.MessageItem);

//# sourceMappingURL=message_item.js.map
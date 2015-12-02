// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.components.message_composer');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
om_chat.components.message_composer.ESCAPE_KEY = (27);
om_chat.components.message_composer.ENTER_KEY = (13);
om_chat.components.message_composer.change = (function om_chat$components$message_composer$change(c,e){
return om.next.update_state_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),e.target.value);
});
om_chat.components.message_composer.key_down = (function om_chat$components$message_composer$key_down(c,id,e,on_new_msg){
var pred__20197 = cljs.core._EQ__EQ_;
var expr__20198 = e.keyCode;
if(cljs.core.truth_(pred__20197.call(null,om_chat.components.message_composer.ENTER_KEY,expr__20198))){
var msg_text = (function (){var or__16771__auto__ = om.next.get_state.call(null,c,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813));
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return "";
}
})();
if(!(cljs.core._EQ_.call(null,msg_text,""))){
on_new_msg.call(null,id,msg_text);
} else {
}

om.next.update_state_BANG_.call(null,c,cljs.core.assoc,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813),"");

var G__20200 = e;
G__20200.preventDefault();

G__20200.stopPropagation();

return G__20200;
} else {
return null;
}
});
/**
 * @constructor
 */
om_chat.components.message_composer.MessageComposer = (function om_chat$components$message_composer$MessageComposer(){
var this__18856__auto__ = this;
React.Component.apply(this__18856__auto__,arguments);

if(!((this__18856__auto__.initLocalState == null))){
this__18856__auto__.state = this__18856__auto__.initLocalState();
} else {
this__18856__auto__.state = {};
}

return this__18856__auto__;
});

om_chat.components.message_composer.MessageComposer.prototype = goog.object.clone(React.Component.prototype);

var x20207_20219 = om_chat.components.message_composer.MessageComposer.prototype;
x20207_20219.componentWillUpdate = ((function (x20207_20219){
return (function (next_props__18797__auto__,next_state__18798__auto__){
var this__18796__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__18796__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__18796__auto__);
});})(x20207_20219))
;

x20207_20219.shouldComponentUpdate = ((function (x20207_20219){
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
});})(x20207_20219))
;

x20207_20219.componentWillUnmount = ((function (x20207_20219){
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
});})(x20207_20219))
;

x20207_20219.componentDidUpdate = ((function (x20207_20219){
return (function (prev_props__18799__auto__,prev_state__18800__auto__){
var this__18796__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__18796__auto__);
});})(x20207_20219))
;

x20207_20219.isMounted = ((function (x20207_20219){
return (function (){
var this__18796__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__18796__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x20207_20219))
;

x20207_20219.componentWillMount = ((function (x20207_20219){
return (function (){
var this__18796__auto__ = this;
var indexer__18801__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__18796__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__18801__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__18801__auto__,this__18796__auto__);
}
});})(x20207_20219))
;

x20207_20219.render = ((function (x20207_20219){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_20208 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_20209 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_20210 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_20211 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_20212 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__20213 = om.next.props.call(null,this$);
var map__20213__$1 = ((((!((map__20213 == null)))?((((map__20213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20213):map__20213);
var props = map__20213__$1;
var id = cljs.core.get.call(null,map__20213__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var map__20214 = om.next.get_computed.call(null,props);
var map__20214__$1 = ((((!((map__20214 == null)))?((((map__20214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20214):map__20214);
var on_new_msg = cljs.core.get.call(null,map__20214__$1,new cljs.core.Keyword(null,"on-new-msg","on-new-msg",536396788));
return om.dom.textarea.call(null,{"className": "message-composer", "name": "message", "value": om.next.get_state.call(null,this$,new cljs.core.Keyword(null,"edit-text","edit-text",-616821813)), "onChange": ((function (map__20213,map__20213__$1,props,id,map__20214,map__20214__$1,on_new_msg,_STAR_reconciler_STAR_20208,_STAR_depth_STAR_20209,_STAR_shared_STAR_20210,_STAR_instrument_STAR_20211,_STAR_parent_STAR_20212,this$,x20207_20219){
return (function (p1__20201_SHARP_){
return om_chat.components.message_composer.change.call(null,this$,p1__20201_SHARP_);
});})(map__20213,map__20213__$1,props,id,map__20214,map__20214__$1,on_new_msg,_STAR_reconciler_STAR_20208,_STAR_depth_STAR_20209,_STAR_shared_STAR_20210,_STAR_instrument_STAR_20211,_STAR_parent_STAR_20212,this$,x20207_20219))
, "onKeyDown": ((function (map__20213,map__20213__$1,props,id,map__20214,map__20214__$1,on_new_msg,_STAR_reconciler_STAR_20208,_STAR_depth_STAR_20209,_STAR_shared_STAR_20210,_STAR_instrument_STAR_20211,_STAR_parent_STAR_20212,this$,x20207_20219){
return (function (p1__20202_SHARP_){
return om_chat.components.message_composer.key_down.call(null,this$,id,p1__20202_SHARP_,on_new_msg);
});})(map__20213,map__20213__$1,props,id,map__20214,map__20214__$1,on_new_msg,_STAR_reconciler_STAR_20208,_STAR_depth_STAR_20209,_STAR_shared_STAR_20210,_STAR_instrument_STAR_20211,_STAR_parent_STAR_20212,this$,x20207_20219))
});
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_20212;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_20211;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_20210;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_20209;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_20208;
}});})(x20207_20219))
;


om_chat.components.message_composer.MessageComposer.prototype.constructor = om_chat.components.message_composer.MessageComposer;

om_chat.components.message_composer.MessageComposer.prototype.om$isComponent = true;

var x20217_20220 = om_chat.components.message_composer.MessageComposer;


var x20218_20221 = om_chat.components.message_composer.MessageComposer.prototype;


om_chat.components.message_composer.MessageComposer.cljs$lang$type = true;

om_chat.components.message_composer.MessageComposer.cljs$lang$ctorStr = "om-chat.components.message-composer/MessageComposer";

om_chat.components.message_composer.MessageComposer.cljs$lang$ctorPrWriter = (function (this__18858__auto__,writer__18859__auto__,opt__18860__auto__){
return cljs.core._write.call(null,writer__18859__auto__,"om-chat.components.message-composer/MessageComposer");
});
om_chat.components.message_composer.message_composer = om.next.factory.call(null,om_chat.components.message_composer.MessageComposer);

//# sourceMappingURL=message_composer.js.map
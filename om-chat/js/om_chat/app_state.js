// Compiled by ClojureScript 1.7.170 {}
goog.provide('om_chat.app_state');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
om_chat.app_state.raw_data = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"m_1",new cljs.core.Keyword(null,"threadID","threadID",390197351),"t_1",new cljs.core.Keyword(null,"threadName","threadName",-2027831604),"Jing and Bill",new cljs.core.Keyword(null,"authorName","authorName",458688192),"Bill",new cljs.core.Keyword(null,"text","text",-1790561697),"Hey Jing want to give a Flux talk at ForwardJS?",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(cljs_time.core.now.call(null) - (99999))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"m_2",new cljs.core.Keyword(null,"threadID","threadID",390197351),"t_1",new cljs.core.Keyword(null,"threadName","threadName",-2027831604),"Jing and Bill",new cljs.core.Keyword(null,"authorName","authorName",458688192),"Bill",new cljs.core.Keyword(null,"text","text",-1790561697),"Seems like a pretty cool conference.",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(cljs_time.core.now.call(null) - (89999))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"m_3",new cljs.core.Keyword(null,"threadID","threadID",390197351),"t_1",new cljs.core.Keyword(null,"threadName","threadName",-2027831604),"Jing and Bill",new cljs.core.Keyword(null,"authorName","authorName",458688192),"Jing",new cljs.core.Keyword(null,"text","text",-1790561697),"Sounds good.  Will they be serving dessert?",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(cljs_time.core.now.call(null) - (79999))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"m_4",new cljs.core.Keyword(null,"threadID","threadID",390197351),"t_2",new cljs.core.Keyword(null,"threadName","threadName",-2027831604),"Dave and Bill",new cljs.core.Keyword(null,"authorName","authorName",458688192),"Bill",new cljs.core.Keyword(null,"text","text",-1790561697),"Hey Dave want to get a beer after the conference?",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(cljs_time.core.now.call(null) - (69999))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"m_5",new cljs.core.Keyword(null,"threadID","threadID",390197351),"t_2",new cljs.core.Keyword(null,"threadName","threadName",-2027831604),"Dave and Bill",new cljs.core.Keyword(null,"authorName","authorName",458688192),"Dave",new cljs.core.Keyword(null,"text","text",-1790561697),"Totally!  Meet you at the hotel bar.",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(cljs_time.core.now.call(null) - (59999))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"m_6",new cljs.core.Keyword(null,"threadID","threadID",390197351),"t_3",new cljs.core.Keyword(null,"threadName","threadName",-2027831604),"Functional Heads",new cljs.core.Keyword(null,"authorName","authorName",458688192),"Bill",new cljs.core.Keyword(null,"text","text",-1790561697),"Hey Brian are you going to be talking about functional stuff?",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(cljs_time.core.now.call(null) - (49999))], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"m_7",new cljs.core.Keyword(null,"threadID","threadID",390197351),"t_3",new cljs.core.Keyword(null,"threadName","threadName",-2027831604),"Bill and Brian",new cljs.core.Keyword(null,"authorName","authorName",458688192),"Brian",new cljs.core.Keyword(null,"text","text",-1790561697),"At ForwardJS?  Yeah of course.  See you there!",new cljs.core.Keyword(null,"timestamp","timestamp",579478971),(cljs_time.core.now.call(null) - (39999))], null)], null);
om_chat.app_state.convert_message = (function om_chat$app_state$convert_message(p__20431){
var map__20434 = p__20431;
var map__20434__$1 = ((((!((map__20434 == null)))?((((map__20434.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20434.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20434):map__20434);
var msg = map__20434__$1;
var id = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var authorName = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"authorName","authorName",458688192));
var text = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var timestamp = cljs.core.get.call(null,map__20434__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("message","id","message/id",1689496141),id,new cljs.core.Keyword("message","author-name","message/author-name",-1769059014),authorName,new cljs.core.Keyword("message","text","message/text",743256678),text,new cljs.core.Keyword("message","date","message/date",1620755225),cljs_time.coerce.to_date.call(null,timestamp)], null);
});
om_chat.app_state.threads_by_id = (function om_chat$app_state$threads_by_id(coll,msg){
var map__20438 = msg;
var map__20438__$1 = ((((!((map__20438 == null)))?((((map__20438.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20438.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20438):map__20438);
var id = cljs.core.get.call(null,map__20438__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var threadID = cljs.core.get.call(null,map__20438__$1,new cljs.core.Keyword(null,"threadID","threadID",390197351));
var threadName = cljs.core.get.call(null,map__20438__$1,new cljs.core.Keyword(null,"threadName","threadName",-2027831604));
var timestamp = cljs.core.get.call(null,map__20438__$1,new cljs.core.Keyword(null,"timestamp","timestamp",579478971));
if(cljs.core.contains_QMARK_.call(null,coll,threadID)){
return cljs.core.assoc_in.call(null,coll,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [threadID,new cljs.core.Keyword("thread","messages","thread/messages",683006828),id], null),om_chat.app_state.convert_message.call(null,msg));
} else {
return cljs.core.assoc.call(null,coll,threadID,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("thread","id","thread/id",-241320886),threadID,new cljs.core.Keyword("thread","name","thread/name",-1715122617),threadName,new cljs.core.Keyword("thread","messages","thread/messages",683006828),cljs.core.PersistentArrayMap.fromArray([id,om_chat.app_state.convert_message.call(null,msg)], true, false)], null));
}
});
om_chat.app_state.threads = (function om_chat$app_state$threads(coll,msg){
var map__20444 = msg;
var map__20444__$1 = ((((!((map__20444 == null)))?((((map__20444.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20444.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20444):map__20444);
var threadID = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"threadID","threadID",390197351));
var threadName = cljs.core.get.call(null,map__20444__$1,new cljs.core.Keyword(null,"threadName","threadName",-2027831604));
var map__20445 = cljs.core.last.call(null,coll);
var map__20445__$1 = ((((!((map__20445 == null)))?((((map__20445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20445):map__20445);
var id = cljs.core.get.call(null,map__20445__$1,new cljs.core.Keyword("thread","id","thread/id",-241320886));
var last_msg_idx = (cljs.core.count.call(null,coll) - (1));
if(cljs.core._EQ_.call(null,id,threadID)){
return cljs.core.update_in.call(null,coll,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [last_msg_idx,new cljs.core.Keyword("thread","messages","thread/messages",683006828)], null),cljs.core.conj,om_chat.app_state.convert_message.call(null,msg));
} else {
return cljs.core.conj.call(null,coll,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("thread","id","thread/id",-241320886),threadID,new cljs.core.Keyword("thread","name","thread/name",-1715122617),threadName,new cljs.core.Keyword("thread","messages","thread/messages",683006828),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_chat.app_state.convert_message.call(null,msg)], null)], null));
}
});
om_chat.app_state.state = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"threads","threads",-1717798734),cljs.core.reduce.call(null,om_chat.app_state.threads,cljs.core.PersistentVector.EMPTY,om_chat.app_state.raw_data)], null);

//# sourceMappingURL=app_state.js.map
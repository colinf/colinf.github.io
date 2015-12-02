// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__17426__auto__ = (((obj == null))?null:obj);
var m__17427__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,obj);
} else {
var m__17427__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,obj);
} else {
throw cljs.core.missing_protocol.call(null,"ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__20615 = millis;
var G__20615__$1 = (((G__20615 == null))?null:goog.date.UtcDateTime.fromTimestamp.call(null,G__20615));
return G__20615__$1;
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first.call(null,(function (){var iter__17543__auto__ = (function cljs_time$coerce$from_string_$_iter__20624(s__20625){
return (new cljs.core.LazySeq(null,(function (){
var s__20625__$1 = s__20625;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__20625__$1);
if(temp__4425__auto__){
var s__20625__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__20625__$2)){
var c__17541__auto__ = cljs.core.chunk_first.call(null,s__20625__$2);
var size__17542__auto__ = cljs.core.count.call(null,c__17541__auto__);
var b__20627 = cljs.core.chunk_buffer.call(null,size__17542__auto__);
if((function (){var i__20626 = (0);
while(true){
if((i__20626 < size__17542__auto__)){
var f = cljs.core._nth.call(null,c__17541__auto__,i__20626);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e20630){if((e20630 instanceof Error)){
var _ = e20630;
return null;
} else {
throw e20630;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append.call(null,b__20627,d);

var G__20632 = (i__20626 + (1));
i__20626 = G__20632;
continue;
} else {
var G__20633 = (i__20626 + (1));
i__20626 = G__20633;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20627),cljs_time$coerce$from_string_$_iter__20624.call(null,cljs.core.chunk_rest.call(null,s__20625__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__20627),null);
}
} else {
var f = cljs.core.first.call(null,s__20625__$2);
var d = (function (){try{return cljs_time.format.parse.call(null,f,s);
}catch (e20631){if((e20631 instanceof Error)){
var _ = e20631;
return null;
} else {
throw e20631;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons.call(null,d,cljs_time$coerce$from_string_$_iter__20624.call(null,cljs.core.rest.call(null,s__20625__$2)));
} else {
var G__20634 = cljs.core.rest.call(null,s__20625__$2);
s__20625__$1 = G__20634;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17543__auto__.call(null,cljs.core.vals.call(null,cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__20636 = date;
var G__20636__$1 = (((G__20636 == null))?null:G__20636.getTime());
var G__20636__$2 = (((G__20636__$1 == null))?null:cljs_time.coerce.from_long.call(null,G__20636__$1));
return G__20636__$2;
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__20638 = obj;
var G__20638__$1 = (((G__20638 == null))?null:cljs_time.coerce.to_date_time.call(null,G__20638));
var G__20638__$2 = (((G__20638__$1 == null))?null:G__20638__$1.getTime());
return G__20638__$2;
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__20640 = obj;
var G__20640__$1 = (((G__20640 == null))?null:cljs_time.coerce.to_long.call(null,G__20640));
var G__20640__$2 = (((G__20640__$1 == null))?null:(G__20640__$1 / (1000)));
return G__20640__$2;
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__20642 = obj;
var G__20642__$1 = (((G__20642 == null))?null:cljs_time.coerce.to_date_time.call(null,G__20642));
var G__20642__$2 = (((G__20642__$1 == null))?null:G__20642__$1.getTime());
var G__20642__$3 = (((G__20642__$2 == null))?null:(new Date(G__20642__$2)));
return G__20642__$3;
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__20644 = obj;
var G__20644__$1 = (((G__20644 == null))?null:cljs_time.coerce.to_date_time.call(null,G__20644));
var G__20644__$2 = (((G__20644__$1 == null))?null:cljs_time.format.unparse.call(null,new cljs.core.Keyword(null,"date-time","date-time",177938180).cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__20644__$1));
return G__20644__$2;
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__4423__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4423__auto__)){
var dt = temp__4423__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4423__auto__ = cljs_time.coerce.to_date_time.call(null,obj);
if(cljs.core.truth_(temp__4423__auto__)){
var dt = temp__4423__auto__;
var G__20646 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__20646.setHours(dt.getHours());

G__20646.setMinutes(dt.getMinutes());

G__20646.setSeconds(dt.getSeconds());

G__20646.setMilliseconds(dt.getMilliseconds());

return G__20646;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = true;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date.call(null,date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
var G__20647 = (new goog.date.UtcDateTime());
G__20647.set(local_date__$1);

return G__20647;
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
var G__20648 = (new goog.date.UtcDateTime());
G__20648.setTime(local_date_time__$1.getTime());

return G__20648;
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long.call(null,long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string.call(null,string);
}));

//# sourceMappingURL=coerce.js.map
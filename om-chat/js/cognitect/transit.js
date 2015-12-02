// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__21543_21547 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__21544_21548 = null;
var count__21545_21549 = (0);
var i__21546_21550 = (0);
while(true){
if((i__21546_21550 < count__21545_21549)){
var k_21551 = cljs.core._nth.call(null,chunk__21544_21548,i__21546_21550);
var v_21552 = (b[k_21551]);
(a[k_21551] = v_21552);

var G__21553 = seq__21543_21547;
var G__21554 = chunk__21544_21548;
var G__21555 = count__21545_21549;
var G__21556 = (i__21546_21550 + (1));
seq__21543_21547 = G__21553;
chunk__21544_21548 = G__21554;
count__21545_21549 = G__21555;
i__21546_21550 = G__21556;
continue;
} else {
var temp__4425__auto___21557 = cljs.core.seq.call(null,seq__21543_21547);
if(temp__4425__auto___21557){
var seq__21543_21558__$1 = temp__4425__auto___21557;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21543_21558__$1)){
var c__17574__auto___21559 = cljs.core.chunk_first.call(null,seq__21543_21558__$1);
var G__21560 = cljs.core.chunk_rest.call(null,seq__21543_21558__$1);
var G__21561 = c__17574__auto___21559;
var G__21562 = cljs.core.count.call(null,c__17574__auto___21559);
var G__21563 = (0);
seq__21543_21547 = G__21560;
chunk__21544_21548 = G__21561;
count__21545_21549 = G__21562;
i__21546_21550 = G__21563;
continue;
} else {
var k_21564 = cljs.core.first.call(null,seq__21543_21558__$1);
var v_21565 = (b[k_21564]);
(a[k_21564] = v_21565);

var G__21566 = cljs.core.next.call(null,seq__21543_21558__$1);
var G__21567 = null;
var G__21568 = (0);
var G__21569 = (0);
seq__21543_21547 = G__21566;
chunk__21544_21548 = G__21567;
count__21545_21549 = G__21568;
i__21546_21550 = G__21569;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args21570 = [];
var len__17829__auto___21573 = arguments.length;
var i__17830__auto___21574 = (0);
while(true){
if((i__17830__auto___21574 < len__17829__auto___21573)){
args21570.push((arguments[i__17830__auto___21574]));

var G__21575 = (i__17830__auto___21574 + (1));
i__17830__auto___21574 = G__21575;
continue;
} else {
}
break;
}

var G__21572 = args21570.length;
switch (G__21572) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21570.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__21577 = (i + (2));
var G__21578 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__21577;
ret = G__21578;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21579_21583 = cljs.core.seq.call(null,v);
var chunk__21580_21584 = null;
var count__21581_21585 = (0);
var i__21582_21586 = (0);
while(true){
if((i__21582_21586 < count__21581_21585)){
var x_21587 = cljs.core._nth.call(null,chunk__21580_21584,i__21582_21586);
ret.push(x_21587);

var G__21588 = seq__21579_21583;
var G__21589 = chunk__21580_21584;
var G__21590 = count__21581_21585;
var G__21591 = (i__21582_21586 + (1));
seq__21579_21583 = G__21588;
chunk__21580_21584 = G__21589;
count__21581_21585 = G__21590;
i__21582_21586 = G__21591;
continue;
} else {
var temp__4425__auto___21592 = cljs.core.seq.call(null,seq__21579_21583);
if(temp__4425__auto___21592){
var seq__21579_21593__$1 = temp__4425__auto___21592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21579_21593__$1)){
var c__17574__auto___21594 = cljs.core.chunk_first.call(null,seq__21579_21593__$1);
var G__21595 = cljs.core.chunk_rest.call(null,seq__21579_21593__$1);
var G__21596 = c__17574__auto___21594;
var G__21597 = cljs.core.count.call(null,c__17574__auto___21594);
var G__21598 = (0);
seq__21579_21583 = G__21595;
chunk__21580_21584 = G__21596;
count__21581_21585 = G__21597;
i__21582_21586 = G__21598;
continue;
} else {
var x_21599 = cljs.core.first.call(null,seq__21579_21593__$1);
ret.push(x_21599);

var G__21600 = cljs.core.next.call(null,seq__21579_21593__$1);
var G__21601 = null;
var G__21602 = (0);
var G__21603 = (0);
seq__21579_21583 = G__21600;
chunk__21580_21584 = G__21601;
count__21581_21585 = G__21602;
i__21582_21586 = G__21603;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21604_21608 = cljs.core.seq.call(null,v);
var chunk__21605_21609 = null;
var count__21606_21610 = (0);
var i__21607_21611 = (0);
while(true){
if((i__21607_21611 < count__21606_21610)){
var x_21612 = cljs.core._nth.call(null,chunk__21605_21609,i__21607_21611);
ret.push(x_21612);

var G__21613 = seq__21604_21608;
var G__21614 = chunk__21605_21609;
var G__21615 = count__21606_21610;
var G__21616 = (i__21607_21611 + (1));
seq__21604_21608 = G__21613;
chunk__21605_21609 = G__21614;
count__21606_21610 = G__21615;
i__21607_21611 = G__21616;
continue;
} else {
var temp__4425__auto___21617 = cljs.core.seq.call(null,seq__21604_21608);
if(temp__4425__auto___21617){
var seq__21604_21618__$1 = temp__4425__auto___21617;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21604_21618__$1)){
var c__17574__auto___21619 = cljs.core.chunk_first.call(null,seq__21604_21618__$1);
var G__21620 = cljs.core.chunk_rest.call(null,seq__21604_21618__$1);
var G__21621 = c__17574__auto___21619;
var G__21622 = cljs.core.count.call(null,c__17574__auto___21619);
var G__21623 = (0);
seq__21604_21608 = G__21620;
chunk__21605_21609 = G__21621;
count__21606_21610 = G__21622;
i__21607_21611 = G__21623;
continue;
} else {
var x_21624 = cljs.core.first.call(null,seq__21604_21618__$1);
ret.push(x_21624);

var G__21625 = cljs.core.next.call(null,seq__21604_21618__$1);
var G__21626 = null;
var G__21627 = (0);
var G__21628 = (0);
seq__21604_21608 = G__21625;
chunk__21605_21609 = G__21626;
count__21606_21610 = G__21627;
i__21607_21611 = G__21628;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__21629_21633 = cljs.core.seq.call(null,v);
var chunk__21630_21634 = null;
var count__21631_21635 = (0);
var i__21632_21636 = (0);
while(true){
if((i__21632_21636 < count__21631_21635)){
var x_21637 = cljs.core._nth.call(null,chunk__21630_21634,i__21632_21636);
ret.push(x_21637);

var G__21638 = seq__21629_21633;
var G__21639 = chunk__21630_21634;
var G__21640 = count__21631_21635;
var G__21641 = (i__21632_21636 + (1));
seq__21629_21633 = G__21638;
chunk__21630_21634 = G__21639;
count__21631_21635 = G__21640;
i__21632_21636 = G__21641;
continue;
} else {
var temp__4425__auto___21642 = cljs.core.seq.call(null,seq__21629_21633);
if(temp__4425__auto___21642){
var seq__21629_21643__$1 = temp__4425__auto___21642;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21629_21643__$1)){
var c__17574__auto___21644 = cljs.core.chunk_first.call(null,seq__21629_21643__$1);
var G__21645 = cljs.core.chunk_rest.call(null,seq__21629_21643__$1);
var G__21646 = c__17574__auto___21644;
var G__21647 = cljs.core.count.call(null,c__17574__auto___21644);
var G__21648 = (0);
seq__21629_21633 = G__21645;
chunk__21630_21634 = G__21646;
count__21631_21635 = G__21647;
i__21632_21636 = G__21648;
continue;
} else {
var x_21649 = cljs.core.first.call(null,seq__21629_21643__$1);
ret.push(x_21649);

var G__21650 = cljs.core.next.call(null,seq__21629_21643__$1);
var G__21651 = null;
var G__21652 = (0);
var G__21653 = (0);
seq__21629_21633 = G__21650;
chunk__21630_21634 = G__21651;
count__21631_21635 = G__21652;
i__21632_21636 = G__21653;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args21654 = [];
var len__17829__auto___21665 = arguments.length;
var i__17830__auto___21666 = (0);
while(true){
if((i__17830__auto___21666 < len__17829__auto___21665)){
args21654.push((arguments[i__17830__auto___21666]));

var G__21667 = (i__17830__auto___21666 + (1));
i__17830__auto___21666 = G__21667;
continue;
} else {
}
break;
}

var G__21656 = args21654.length;
switch (G__21656) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21654.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__21657 = obj;
G__21657.push(kfn.call(null,k),vfn.call(null,v));

return G__21657;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x21658 = cljs.core.clone.call(null,handlers);
x21658.forEach = ((function (x21658,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__21659 = cljs.core.seq.call(null,coll);
var chunk__21660 = null;
var count__21661 = (0);
var i__21662 = (0);
while(true){
if((i__21662 < count__21661)){
var vec__21663 = cljs.core._nth.call(null,chunk__21660,i__21662);
var k = cljs.core.nth.call(null,vec__21663,(0),null);
var v = cljs.core.nth.call(null,vec__21663,(1),null);
f.call(null,v,k);

var G__21669 = seq__21659;
var G__21670 = chunk__21660;
var G__21671 = count__21661;
var G__21672 = (i__21662 + (1));
seq__21659 = G__21669;
chunk__21660 = G__21670;
count__21661 = G__21671;
i__21662 = G__21672;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__21659);
if(temp__4425__auto__){
var seq__21659__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21659__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__21659__$1);
var G__21673 = cljs.core.chunk_rest.call(null,seq__21659__$1);
var G__21674 = c__17574__auto__;
var G__21675 = cljs.core.count.call(null,c__17574__auto__);
var G__21676 = (0);
seq__21659 = G__21673;
chunk__21660 = G__21674;
count__21661 = G__21675;
i__21662 = G__21676;
continue;
} else {
var vec__21664 = cljs.core.first.call(null,seq__21659__$1);
var k = cljs.core.nth.call(null,vec__21664,(0),null);
var v = cljs.core.nth.call(null,vec__21664,(1),null);
f.call(null,v,k);

var G__21677 = cljs.core.next.call(null,seq__21659__$1);
var G__21678 = null;
var G__21679 = (0);
var G__21680 = (0);
seq__21659 = G__21677;
chunk__21660 = G__21678;
count__21661 = G__21679;
i__21662 = G__21680;
continue;
}
} else {
return null;
}
}
break;
}
});})(x21658,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x21658;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args21681 = [];
var len__17829__auto___21687 = arguments.length;
var i__17830__auto___21688 = (0);
while(true){
if((i__17830__auto___21688 < len__17829__auto___21687)){
args21681.push((arguments[i__17830__auto___21688]));

var G__21689 = (i__17830__auto___21688 + (1));
i__17830__auto___21688 = G__21689;
continue;
} else {
}
break;
}

var G__21683 = args21681.length;
switch (G__21683) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21681.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit21684 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit21684 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta21685){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta21685 = meta21685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit21684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21686,meta21685__$1){
var self__ = this;
var _21686__$1 = this;
return (new cognitect.transit.t_cognitect$transit21684(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta21685__$1));
});

cognitect.transit.t_cognitect$transit21684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21686){
var self__ = this;
var _21686__$1 = this;
return self__.meta21685;
});

cognitect.transit.t_cognitect$transit21684.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21684.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit21684.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21684.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit21684.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta21685","meta21685",213369743,null)], null);
});

cognitect.transit.t_cognitect$transit21684.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit21684.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit21684";

cognitect.transit.t_cognitect$transit21684.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cognitect.transit/t_cognitect$transit21684");
});

cognitect.transit.__GT_t_cognitect$transit21684 = (function cognitect$transit$__GT_t_cognitect$transit21684(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21685){
return (new cognitect.transit.t_cognitect$transit21684(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta21685));
});

}

return (new cognitect.transit.t_cognitect$transit21684(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16771__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map
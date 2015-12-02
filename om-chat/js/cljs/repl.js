// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26373_26387 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26374_26388 = null;
var count__26375_26389 = (0);
var i__26376_26390 = (0);
while(true){
if((i__26376_26390 < count__26375_26389)){
var f_26391 = cljs.core._nth.call(null,chunk__26374_26388,i__26376_26390);
cljs.core.println.call(null,"  ",f_26391);

var G__26392 = seq__26373_26387;
var G__26393 = chunk__26374_26388;
var G__26394 = count__26375_26389;
var G__26395 = (i__26376_26390 + (1));
seq__26373_26387 = G__26392;
chunk__26374_26388 = G__26393;
count__26375_26389 = G__26394;
i__26376_26390 = G__26395;
continue;
} else {
var temp__4425__auto___26396 = cljs.core.seq.call(null,seq__26373_26387);
if(temp__4425__auto___26396){
var seq__26373_26397__$1 = temp__4425__auto___26396;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26373_26397__$1)){
var c__17574__auto___26398 = cljs.core.chunk_first.call(null,seq__26373_26397__$1);
var G__26399 = cljs.core.chunk_rest.call(null,seq__26373_26397__$1);
var G__26400 = c__17574__auto___26398;
var G__26401 = cljs.core.count.call(null,c__17574__auto___26398);
var G__26402 = (0);
seq__26373_26387 = G__26399;
chunk__26374_26388 = G__26400;
count__26375_26389 = G__26401;
i__26376_26390 = G__26402;
continue;
} else {
var f_26403 = cljs.core.first.call(null,seq__26373_26397__$1);
cljs.core.println.call(null,"  ",f_26403);

var G__26404 = cljs.core.next.call(null,seq__26373_26397__$1);
var G__26405 = null;
var G__26406 = (0);
var G__26407 = (0);
seq__26373_26387 = G__26404;
chunk__26374_26388 = G__26405;
count__26375_26389 = G__26406;
i__26376_26390 = G__26407;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26408 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16771__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26408);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26408)))?cljs.core.second.call(null,arglists_26408):arglists_26408));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__26377 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26378 = null;
var count__26379 = (0);
var i__26380 = (0);
while(true){
if((i__26380 < count__26379)){
var vec__26381 = cljs.core._nth.call(null,chunk__26378,i__26380);
var name = cljs.core.nth.call(null,vec__26381,(0),null);
var map__26382 = cljs.core.nth.call(null,vec__26381,(1),null);
var map__26382__$1 = ((((!((map__26382 == null)))?((((map__26382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26382):map__26382);
var doc = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26382__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26409 = seq__26377;
var G__26410 = chunk__26378;
var G__26411 = count__26379;
var G__26412 = (i__26380 + (1));
seq__26377 = G__26409;
chunk__26378 = G__26410;
count__26379 = G__26411;
i__26380 = G__26412;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26377);
if(temp__4425__auto__){
var seq__26377__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26377__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__26377__$1);
var G__26413 = cljs.core.chunk_rest.call(null,seq__26377__$1);
var G__26414 = c__17574__auto__;
var G__26415 = cljs.core.count.call(null,c__17574__auto__);
var G__26416 = (0);
seq__26377 = G__26413;
chunk__26378 = G__26414;
count__26379 = G__26415;
i__26380 = G__26416;
continue;
} else {
var vec__26384 = cljs.core.first.call(null,seq__26377__$1);
var name = cljs.core.nth.call(null,vec__26384,(0),null);
var map__26385 = cljs.core.nth.call(null,vec__26384,(1),null);
var map__26385__$1 = ((((!((map__26385 == null)))?((((map__26385.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26385.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26385):map__26385);
var doc = cljs.core.get.call(null,map__26385__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26385__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26417 = cljs.core.next.call(null,seq__26377__$1);
var G__26418 = null;
var G__26419 = (0);
var G__26420 = (0);
seq__26377 = G__26417;
chunk__26378 = G__26418;
count__26379 = G__26419;
i__26380 = G__26420;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
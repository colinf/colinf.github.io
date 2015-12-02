// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16771__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16771__auto__){
return or__16771__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16771__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__25349_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__25349_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__25354 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__25355 = null;
var count__25356 = (0);
var i__25357 = (0);
while(true){
if((i__25357 < count__25356)){
var n = cljs.core._nth.call(null,chunk__25355,i__25357);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25358 = seq__25354;
var G__25359 = chunk__25355;
var G__25360 = count__25356;
var G__25361 = (i__25357 + (1));
seq__25354 = G__25358;
chunk__25355 = G__25359;
count__25356 = G__25360;
i__25357 = G__25361;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25354);
if(temp__4425__auto__){
var seq__25354__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25354__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25354__$1);
var G__25362 = cljs.core.chunk_rest.call(null,seq__25354__$1);
var G__25363 = c__17574__auto__;
var G__25364 = cljs.core.count.call(null,c__17574__auto__);
var G__25365 = (0);
seq__25354 = G__25362;
chunk__25355 = G__25363;
count__25356 = G__25364;
i__25357 = G__25365;
continue;
} else {
var n = cljs.core.first.call(null,seq__25354__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__25366 = cljs.core.next.call(null,seq__25354__$1);
var G__25367 = null;
var G__25368 = (0);
var G__25369 = (0);
seq__25354 = G__25366;
chunk__25355 = G__25367;
count__25356 = G__25368;
i__25357 = G__25369;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__25408_25415 = cljs.core.seq.call(null,deps);
var chunk__25409_25416 = null;
var count__25410_25417 = (0);
var i__25411_25418 = (0);
while(true){
if((i__25411_25418 < count__25410_25417)){
var dep_25419 = cljs.core._nth.call(null,chunk__25409_25416,i__25411_25418);
topo_sort_helper_STAR_.call(null,dep_25419,(depth + (1)),state);

var G__25420 = seq__25408_25415;
var G__25421 = chunk__25409_25416;
var G__25422 = count__25410_25417;
var G__25423 = (i__25411_25418 + (1));
seq__25408_25415 = G__25420;
chunk__25409_25416 = G__25421;
count__25410_25417 = G__25422;
i__25411_25418 = G__25423;
continue;
} else {
var temp__4425__auto___25424 = cljs.core.seq.call(null,seq__25408_25415);
if(temp__4425__auto___25424){
var seq__25408_25425__$1 = temp__4425__auto___25424;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25408_25425__$1)){
var c__17574__auto___25426 = cljs.core.chunk_first.call(null,seq__25408_25425__$1);
var G__25427 = cljs.core.chunk_rest.call(null,seq__25408_25425__$1);
var G__25428 = c__17574__auto___25426;
var G__25429 = cljs.core.count.call(null,c__17574__auto___25426);
var G__25430 = (0);
seq__25408_25415 = G__25427;
chunk__25409_25416 = G__25428;
count__25410_25417 = G__25429;
i__25411_25418 = G__25430;
continue;
} else {
var dep_25431 = cljs.core.first.call(null,seq__25408_25425__$1);
topo_sort_helper_STAR_.call(null,dep_25431,(depth + (1)),state);

var G__25432 = cljs.core.next.call(null,seq__25408_25425__$1);
var G__25433 = null;
var G__25434 = (0);
var G__25435 = (0);
seq__25408_25415 = G__25432;
chunk__25409_25416 = G__25433;
count__25410_25417 = G__25434;
i__25411_25418 = G__25435;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__25412){
var vec__25414 = p__25412;
var x = cljs.core.nth.call(null,vec__25414,(0),null);
var xs = cljs.core.nthnext.call(null,vec__25414,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__25414,x,xs,get_deps__$1){
return (function (p1__25370_SHARP_){
return clojure.set.difference.call(null,p1__25370_SHARP_,x);
});})(vec__25414,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__25448 = cljs.core.seq.call(null,provides);
var chunk__25449 = null;
var count__25450 = (0);
var i__25451 = (0);
while(true){
if((i__25451 < count__25450)){
var prov = cljs.core._nth.call(null,chunk__25449,i__25451);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25452_25460 = cljs.core.seq.call(null,requires);
var chunk__25453_25461 = null;
var count__25454_25462 = (0);
var i__25455_25463 = (0);
while(true){
if((i__25455_25463 < count__25454_25462)){
var req_25464 = cljs.core._nth.call(null,chunk__25453_25461,i__25455_25463);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25464,prov);

var G__25465 = seq__25452_25460;
var G__25466 = chunk__25453_25461;
var G__25467 = count__25454_25462;
var G__25468 = (i__25455_25463 + (1));
seq__25452_25460 = G__25465;
chunk__25453_25461 = G__25466;
count__25454_25462 = G__25467;
i__25455_25463 = G__25468;
continue;
} else {
var temp__4425__auto___25469 = cljs.core.seq.call(null,seq__25452_25460);
if(temp__4425__auto___25469){
var seq__25452_25470__$1 = temp__4425__auto___25469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25452_25470__$1)){
var c__17574__auto___25471 = cljs.core.chunk_first.call(null,seq__25452_25470__$1);
var G__25472 = cljs.core.chunk_rest.call(null,seq__25452_25470__$1);
var G__25473 = c__17574__auto___25471;
var G__25474 = cljs.core.count.call(null,c__17574__auto___25471);
var G__25475 = (0);
seq__25452_25460 = G__25472;
chunk__25453_25461 = G__25473;
count__25454_25462 = G__25474;
i__25455_25463 = G__25475;
continue;
} else {
var req_25476 = cljs.core.first.call(null,seq__25452_25470__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25476,prov);

var G__25477 = cljs.core.next.call(null,seq__25452_25470__$1);
var G__25478 = null;
var G__25479 = (0);
var G__25480 = (0);
seq__25452_25460 = G__25477;
chunk__25453_25461 = G__25478;
count__25454_25462 = G__25479;
i__25455_25463 = G__25480;
continue;
}
} else {
}
}
break;
}

var G__25481 = seq__25448;
var G__25482 = chunk__25449;
var G__25483 = count__25450;
var G__25484 = (i__25451 + (1));
seq__25448 = G__25481;
chunk__25449 = G__25482;
count__25450 = G__25483;
i__25451 = G__25484;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__25448);
if(temp__4425__auto__){
var seq__25448__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25448__$1)){
var c__17574__auto__ = cljs.core.chunk_first.call(null,seq__25448__$1);
var G__25485 = cljs.core.chunk_rest.call(null,seq__25448__$1);
var G__25486 = c__17574__auto__;
var G__25487 = cljs.core.count.call(null,c__17574__auto__);
var G__25488 = (0);
seq__25448 = G__25485;
chunk__25449 = G__25486;
count__25450 = G__25487;
i__25451 = G__25488;
continue;
} else {
var prov = cljs.core.first.call(null,seq__25448__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__25456_25489 = cljs.core.seq.call(null,requires);
var chunk__25457_25490 = null;
var count__25458_25491 = (0);
var i__25459_25492 = (0);
while(true){
if((i__25459_25492 < count__25458_25491)){
var req_25493 = cljs.core._nth.call(null,chunk__25457_25490,i__25459_25492);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25493,prov);

var G__25494 = seq__25456_25489;
var G__25495 = chunk__25457_25490;
var G__25496 = count__25458_25491;
var G__25497 = (i__25459_25492 + (1));
seq__25456_25489 = G__25494;
chunk__25457_25490 = G__25495;
count__25458_25491 = G__25496;
i__25459_25492 = G__25497;
continue;
} else {
var temp__4425__auto___25498__$1 = cljs.core.seq.call(null,seq__25456_25489);
if(temp__4425__auto___25498__$1){
var seq__25456_25499__$1 = temp__4425__auto___25498__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25456_25499__$1)){
var c__17574__auto___25500 = cljs.core.chunk_first.call(null,seq__25456_25499__$1);
var G__25501 = cljs.core.chunk_rest.call(null,seq__25456_25499__$1);
var G__25502 = c__17574__auto___25500;
var G__25503 = cljs.core.count.call(null,c__17574__auto___25500);
var G__25504 = (0);
seq__25456_25489 = G__25501;
chunk__25457_25490 = G__25502;
count__25458_25491 = G__25503;
i__25459_25492 = G__25504;
continue;
} else {
var req_25505 = cljs.core.first.call(null,seq__25456_25499__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25505,prov);

var G__25506 = cljs.core.next.call(null,seq__25456_25499__$1);
var G__25507 = null;
var G__25508 = (0);
var G__25509 = (0);
seq__25456_25489 = G__25506;
chunk__25457_25490 = G__25507;
count__25458_25491 = G__25508;
i__25459_25492 = G__25509;
continue;
}
} else {
}
}
break;
}

var G__25510 = cljs.core.next.call(null,seq__25448__$1);
var G__25511 = null;
var G__25512 = (0);
var G__25513 = (0);
seq__25448 = G__25510;
chunk__25449 = G__25511;
count__25450 = G__25512;
i__25451 = G__25513;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__25518_25522 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25519_25523 = null;
var count__25520_25524 = (0);
var i__25521_25525 = (0);
while(true){
if((i__25521_25525 < count__25520_25524)){
var ns_25526 = cljs.core._nth.call(null,chunk__25519_25523,i__25521_25525);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25526);

var G__25527 = seq__25518_25522;
var G__25528 = chunk__25519_25523;
var G__25529 = count__25520_25524;
var G__25530 = (i__25521_25525 + (1));
seq__25518_25522 = G__25527;
chunk__25519_25523 = G__25528;
count__25520_25524 = G__25529;
i__25521_25525 = G__25530;
continue;
} else {
var temp__4425__auto___25531 = cljs.core.seq.call(null,seq__25518_25522);
if(temp__4425__auto___25531){
var seq__25518_25532__$1 = temp__4425__auto___25531;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25518_25532__$1)){
var c__17574__auto___25533 = cljs.core.chunk_first.call(null,seq__25518_25532__$1);
var G__25534 = cljs.core.chunk_rest.call(null,seq__25518_25532__$1);
var G__25535 = c__17574__auto___25533;
var G__25536 = cljs.core.count.call(null,c__17574__auto___25533);
var G__25537 = (0);
seq__25518_25522 = G__25534;
chunk__25519_25523 = G__25535;
count__25520_25524 = G__25536;
i__25521_25525 = G__25537;
continue;
} else {
var ns_25538 = cljs.core.first.call(null,seq__25518_25532__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25538);

var G__25539 = cljs.core.next.call(null,seq__25518_25532__$1);
var G__25540 = null;
var G__25541 = (0);
var G__25542 = (0);
seq__25518_25522 = G__25539;
chunk__25519_25523 = G__25540;
count__25520_25524 = G__25541;
i__25521_25525 = G__25542;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16771__auto__ = goog.require__;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__25543__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25543 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25544__i = 0, G__25544__a = new Array(arguments.length -  0);
while (G__25544__i < G__25544__a.length) {G__25544__a[G__25544__i] = arguments[G__25544__i + 0]; ++G__25544__i;}
  args = new cljs.core.IndexedSeq(G__25544__a,0);
} 
return G__25543__delegate.call(this,args);};
G__25543.cljs$lang$maxFixedArity = 0;
G__25543.cljs$lang$applyTo = (function (arglist__25545){
var args = cljs.core.seq(arglist__25545);
return G__25543__delegate(args);
});
G__25543.cljs$core$IFn$_invoke$arity$variadic = G__25543__delegate;
return G__25543;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25547 = cljs.core._EQ_;
var expr__25548 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25547.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25548))){
var path_parts = ((function (pred__25547,expr__25548){
return (function (p1__25546_SHARP_){
return clojure.string.split.call(null,p1__25546_SHARP_,/[\/\\]/);
});})(pred__25547,expr__25548))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25547,expr__25548){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25550){if((e25550 instanceof Error)){
var e = e25550;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25550;

}
}})());
});
;})(path_parts,sep,root,pred__25547,expr__25548))
} else {
if(cljs.core.truth_(pred__25547.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25548))){
return ((function (pred__25547,expr__25548){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25547,expr__25548){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25547,expr__25548))
);

return deferred.addErrback(((function (deferred,pred__25547,expr__25548){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25547,expr__25548))
);
});
;})(pred__25547,expr__25548))
} else {
return ((function (pred__25547,expr__25548){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25547,expr__25548))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25551,callback){
var map__25554 = p__25551;
var map__25554__$1 = ((((!((map__25554 == null)))?((((map__25554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25554):map__25554);
var file_msg = map__25554__$1;
var request_url = cljs.core.get.call(null,map__25554__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25554,map__25554__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25554,map__25554__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto__){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto__){
return (function (state_25578){
var state_val_25579 = (state_25578[(1)]);
if((state_val_25579 === (7))){
var inst_25574 = (state_25578[(2)]);
var state_25578__$1 = state_25578;
var statearr_25580_25600 = state_25578__$1;
(statearr_25580_25600[(2)] = inst_25574);

(statearr_25580_25600[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (1))){
var state_25578__$1 = state_25578;
var statearr_25581_25601 = state_25578__$1;
(statearr_25581_25601[(2)] = null);

(statearr_25581_25601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (4))){
var inst_25558 = (state_25578[(7)]);
var inst_25558__$1 = (state_25578[(2)]);
var state_25578__$1 = (function (){var statearr_25582 = state_25578;
(statearr_25582[(7)] = inst_25558__$1);

return statearr_25582;
})();
if(cljs.core.truth_(inst_25558__$1)){
var statearr_25583_25602 = state_25578__$1;
(statearr_25583_25602[(1)] = (5));

} else {
var statearr_25584_25603 = state_25578__$1;
(statearr_25584_25603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (6))){
var state_25578__$1 = state_25578;
var statearr_25585_25604 = state_25578__$1;
(statearr_25585_25604[(2)] = null);

(statearr_25585_25604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (3))){
var inst_25576 = (state_25578[(2)]);
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25578__$1,inst_25576);
} else {
if((state_val_25579 === (2))){
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25578__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25579 === (11))){
var inst_25570 = (state_25578[(2)]);
var state_25578__$1 = (function (){var statearr_25586 = state_25578;
(statearr_25586[(8)] = inst_25570);

return statearr_25586;
})();
var statearr_25587_25605 = state_25578__$1;
(statearr_25587_25605[(2)] = null);

(statearr_25587_25605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (9))){
var inst_25562 = (state_25578[(9)]);
var inst_25564 = (state_25578[(10)]);
var inst_25566 = inst_25564.call(null,inst_25562);
var state_25578__$1 = state_25578;
var statearr_25588_25606 = state_25578__$1;
(statearr_25588_25606[(2)] = inst_25566);

(statearr_25588_25606[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (5))){
var inst_25558 = (state_25578[(7)]);
var inst_25560 = figwheel.client.file_reloading.blocking_load.call(null,inst_25558);
var state_25578__$1 = state_25578;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25578__$1,(8),inst_25560);
} else {
if((state_val_25579 === (10))){
var inst_25562 = (state_25578[(9)]);
var inst_25568 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25562);
var state_25578__$1 = state_25578;
var statearr_25589_25607 = state_25578__$1;
(statearr_25589_25607[(2)] = inst_25568);

(statearr_25589_25607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25579 === (8))){
var inst_25558 = (state_25578[(7)]);
var inst_25564 = (state_25578[(10)]);
var inst_25562 = (state_25578[(2)]);
var inst_25563 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25564__$1 = cljs.core.get.call(null,inst_25563,inst_25558);
var state_25578__$1 = (function (){var statearr_25590 = state_25578;
(statearr_25590[(9)] = inst_25562);

(statearr_25590[(10)] = inst_25564__$1);

return statearr_25590;
})();
if(cljs.core.truth_(inst_25564__$1)){
var statearr_25591_25608 = state_25578__$1;
(statearr_25591_25608[(1)] = (9));

} else {
var statearr_25592_25609 = state_25578__$1;
(statearr_25592_25609[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__19796__auto__))
;
return ((function (switch__19775__auto__,c__19796__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19776__auto__ = null;
var figwheel$client$file_reloading$state_machine__19776__auto____0 = (function (){
var statearr_25596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25596[(0)] = figwheel$client$file_reloading$state_machine__19776__auto__);

(statearr_25596[(1)] = (1));

return statearr_25596;
});
var figwheel$client$file_reloading$state_machine__19776__auto____1 = (function (state_25578){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_25578);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e25597){if((e25597 instanceof Object)){
var ex__19779__auto__ = e25597;
var statearr_25598_25610 = state_25578;
(statearr_25598_25610[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25578);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25597;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25611 = state_25578;
state_25578 = G__25611;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19776__auto__ = function(state_25578){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19776__auto____1.call(this,state_25578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19776__auto____0;
figwheel$client$file_reloading$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19776__auto____1;
return figwheel$client$file_reloading$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto__))
})();
var state__19798__auto__ = (function (){var statearr_25599 = f__19797__auto__.call(null);
(statearr_25599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto__);

return statearr_25599;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto__))
);

return c__19796__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25612,callback){
var map__25615 = p__25612;
var map__25615__$1 = ((((!((map__25615 == null)))?((((map__25615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25615):map__25615);
var file_msg = map__25615__$1;
var namespace = cljs.core.get.call(null,map__25615__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25615,map__25615__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25615,map__25615__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25617){
var map__25620 = p__25617;
var map__25620__$1 = ((((!((map__25620 == null)))?((((map__25620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25620):map__25620);
var file_msg = map__25620__$1;
var namespace = cljs.core.get.call(null,map__25620__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16759__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16759__auto__){
var or__16771__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
var or__16771__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16771__auto____$1)){
return or__16771__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16759__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25622,callback){
var map__25625 = p__25622;
var map__25625__$1 = ((((!((map__25625 == null)))?((((map__25625.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25625.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25625):map__25625);
var file_msg = map__25625__$1;
var request_url = cljs.core.get.call(null,map__25625__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25625__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19796__auto___25713 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___25713,out){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___25713,out){
return (function (state_25695){
var state_val_25696 = (state_25695[(1)]);
if((state_val_25696 === (1))){
var inst_25673 = cljs.core.nth.call(null,files,(0),null);
var inst_25674 = cljs.core.nthnext.call(null,files,(1));
var inst_25675 = files;
var state_25695__$1 = (function (){var statearr_25697 = state_25695;
(statearr_25697[(7)] = inst_25675);

(statearr_25697[(8)] = inst_25673);

(statearr_25697[(9)] = inst_25674);

return statearr_25697;
})();
var statearr_25698_25714 = state_25695__$1;
(statearr_25698_25714[(2)] = null);

(statearr_25698_25714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (2))){
var inst_25675 = (state_25695[(7)]);
var inst_25678 = (state_25695[(10)]);
var inst_25678__$1 = cljs.core.nth.call(null,inst_25675,(0),null);
var inst_25679 = cljs.core.nthnext.call(null,inst_25675,(1));
var inst_25680 = (inst_25678__$1 == null);
var inst_25681 = cljs.core.not.call(null,inst_25680);
var state_25695__$1 = (function (){var statearr_25699 = state_25695;
(statearr_25699[(11)] = inst_25679);

(statearr_25699[(10)] = inst_25678__$1);

return statearr_25699;
})();
if(inst_25681){
var statearr_25700_25715 = state_25695__$1;
(statearr_25700_25715[(1)] = (4));

} else {
var statearr_25701_25716 = state_25695__$1;
(statearr_25701_25716[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (3))){
var inst_25693 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25695__$1,inst_25693);
} else {
if((state_val_25696 === (4))){
var inst_25678 = (state_25695[(10)]);
var inst_25683 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25678);
var state_25695__$1 = state_25695;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25695__$1,(7),inst_25683);
} else {
if((state_val_25696 === (5))){
var inst_25689 = cljs.core.async.close_BANG_.call(null,out);
var state_25695__$1 = state_25695;
var statearr_25702_25717 = state_25695__$1;
(statearr_25702_25717[(2)] = inst_25689);

(statearr_25702_25717[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (6))){
var inst_25691 = (state_25695[(2)]);
var state_25695__$1 = state_25695;
var statearr_25703_25718 = state_25695__$1;
(statearr_25703_25718[(2)] = inst_25691);

(statearr_25703_25718[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25696 === (7))){
var inst_25679 = (state_25695[(11)]);
var inst_25685 = (state_25695[(2)]);
var inst_25686 = cljs.core.async.put_BANG_.call(null,out,inst_25685);
var inst_25675 = inst_25679;
var state_25695__$1 = (function (){var statearr_25704 = state_25695;
(statearr_25704[(7)] = inst_25675);

(statearr_25704[(12)] = inst_25686);

return statearr_25704;
})();
var statearr_25705_25719 = state_25695__$1;
(statearr_25705_25719[(2)] = null);

(statearr_25705_25719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19796__auto___25713,out))
;
return ((function (switch__19775__auto__,c__19796__auto___25713,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto____0 = (function (){
var statearr_25709 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25709[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto__);

(statearr_25709[(1)] = (1));

return statearr_25709;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto____1 = (function (state_25695){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_25695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e25710){if((e25710 instanceof Object)){
var ex__19779__auto__ = e25710;
var statearr_25711_25720 = state_25695;
(statearr_25711_25720[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25710;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25721 = state_25695;
state_25695 = G__25721;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto__ = function(state_25695){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto____1.call(this,state_25695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___25713,out))
})();
var state__19798__auto__ = (function (){var statearr_25712 = f__19797__auto__.call(null);
(statearr_25712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___25713);

return statearr_25712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___25713,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25722,opts){
var map__25726 = p__25722;
var map__25726__$1 = ((((!((map__25726 == null)))?((((map__25726.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25726.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25726):map__25726);
var eval_body__$1 = cljs.core.get.call(null,map__25726__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25726__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16759__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16759__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16759__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e25728){var e = e25728;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__25729_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25729_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__25734){
var vec__25735 = p__25734;
var k = cljs.core.nth.call(null,vec__25735,(0),null);
var v = cljs.core.nth.call(null,vec__25735,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25736){
var vec__25737 = p__25736;
var k = cljs.core.nth.call(null,vec__25737,(0),null);
var v = cljs.core.nth.call(null,vec__25737,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25741,p__25742){
var map__25989 = p__25741;
var map__25989__$1 = ((((!((map__25989 == null)))?((((map__25989.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25989.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25989):map__25989);
var opts = map__25989__$1;
var before_jsload = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25989__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25990 = p__25742;
var map__25990__$1 = ((((!((map__25990 == null)))?((((map__25990.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25990.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25990):map__25990);
var msg = map__25990__$1;
var files = cljs.core.get.call(null,map__25990__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25990__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25990__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_26143){
var state_val_26144 = (state_26143[(1)]);
if((state_val_26144 === (7))){
var inst_26005 = (state_26143[(7)]);
var inst_26006 = (state_26143[(8)]);
var inst_26004 = (state_26143[(9)]);
var inst_26007 = (state_26143[(10)]);
var inst_26012 = cljs.core._nth.call(null,inst_26005,inst_26007);
var inst_26013 = figwheel.client.file_reloading.eval_body.call(null,inst_26012,opts);
var inst_26014 = (inst_26007 + (1));
var tmp26145 = inst_26005;
var tmp26146 = inst_26006;
var tmp26147 = inst_26004;
var inst_26004__$1 = tmp26147;
var inst_26005__$1 = tmp26145;
var inst_26006__$1 = tmp26146;
var inst_26007__$1 = inst_26014;
var state_26143__$1 = (function (){var statearr_26148 = state_26143;
(statearr_26148[(11)] = inst_26013);

(statearr_26148[(7)] = inst_26005__$1);

(statearr_26148[(8)] = inst_26006__$1);

(statearr_26148[(9)] = inst_26004__$1);

(statearr_26148[(10)] = inst_26007__$1);

return statearr_26148;
})();
var statearr_26149_26235 = state_26143__$1;
(statearr_26149_26235[(2)] = null);

(statearr_26149_26235[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (20))){
var inst_26047 = (state_26143[(12)]);
var inst_26055 = figwheel.client.file_reloading.sort_files.call(null,inst_26047);
var state_26143__$1 = state_26143;
var statearr_26150_26236 = state_26143__$1;
(statearr_26150_26236[(2)] = inst_26055);

(statearr_26150_26236[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (27))){
var state_26143__$1 = state_26143;
var statearr_26151_26237 = state_26143__$1;
(statearr_26151_26237[(2)] = null);

(statearr_26151_26237[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (1))){
var inst_25996 = (state_26143[(13)]);
var inst_25993 = before_jsload.call(null,files);
var inst_25994 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25995 = (function (){return ((function (inst_25996,inst_25993,inst_25994,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25738_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25738_SHARP_);
});
;})(inst_25996,inst_25993,inst_25994,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25996__$1 = cljs.core.filter.call(null,inst_25995,files);
var inst_25997 = cljs.core.not_empty.call(null,inst_25996__$1);
var state_26143__$1 = (function (){var statearr_26152 = state_26143;
(statearr_26152[(14)] = inst_25993);

(statearr_26152[(15)] = inst_25994);

(statearr_26152[(13)] = inst_25996__$1);

return statearr_26152;
})();
if(cljs.core.truth_(inst_25997)){
var statearr_26153_26238 = state_26143__$1;
(statearr_26153_26238[(1)] = (2));

} else {
var statearr_26154_26239 = state_26143__$1;
(statearr_26154_26239[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (24))){
var state_26143__$1 = state_26143;
var statearr_26155_26240 = state_26143__$1;
(statearr_26155_26240[(2)] = null);

(statearr_26155_26240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (39))){
var inst_26097 = (state_26143[(16)]);
var state_26143__$1 = state_26143;
var statearr_26156_26241 = state_26143__$1;
(statearr_26156_26241[(2)] = inst_26097);

(statearr_26156_26241[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (46))){
var inst_26138 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26157_26242 = state_26143__$1;
(statearr_26157_26242[(2)] = inst_26138);

(statearr_26157_26242[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (4))){
var inst_26041 = (state_26143[(2)]);
var inst_26042 = cljs.core.List.EMPTY;
var inst_26043 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_26042);
var inst_26044 = (function (){return ((function (inst_26041,inst_26042,inst_26043,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25739_SHARP_){
var and__16759__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25739_SHARP_);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25739_SHARP_));
} else {
return and__16759__auto__;
}
});
;})(inst_26041,inst_26042,inst_26043,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26045 = cljs.core.filter.call(null,inst_26044,files);
var inst_26046 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_26047 = cljs.core.concat.call(null,inst_26045,inst_26046);
var state_26143__$1 = (function (){var statearr_26158 = state_26143;
(statearr_26158[(17)] = inst_26043);

(statearr_26158[(18)] = inst_26041);

(statearr_26158[(12)] = inst_26047);

return statearr_26158;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_26159_26243 = state_26143__$1;
(statearr_26159_26243[(1)] = (16));

} else {
var statearr_26160_26244 = state_26143__$1;
(statearr_26160_26244[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (15))){
var inst_26031 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26161_26245 = state_26143__$1;
(statearr_26161_26245[(2)] = inst_26031);

(statearr_26161_26245[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (21))){
var inst_26057 = (state_26143[(19)]);
var inst_26057__$1 = (state_26143[(2)]);
var inst_26058 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_26057__$1);
var state_26143__$1 = (function (){var statearr_26162 = state_26143;
(statearr_26162[(19)] = inst_26057__$1);

return statearr_26162;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26143__$1,(22),inst_26058);
} else {
if((state_val_26144 === (31))){
var inst_26141 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26143__$1,inst_26141);
} else {
if((state_val_26144 === (32))){
var inst_26097 = (state_26143[(16)]);
var inst_26102 = inst_26097.cljs$lang$protocol_mask$partition0$;
var inst_26103 = (inst_26102 & (64));
var inst_26104 = inst_26097.cljs$core$ISeq$;
var inst_26105 = (inst_26103) || (inst_26104);
var state_26143__$1 = state_26143;
if(cljs.core.truth_(inst_26105)){
var statearr_26163_26246 = state_26143__$1;
(statearr_26163_26246[(1)] = (35));

} else {
var statearr_26164_26247 = state_26143__$1;
(statearr_26164_26247[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (40))){
var inst_26118 = (state_26143[(20)]);
var inst_26117 = (state_26143[(2)]);
var inst_26118__$1 = cljs.core.get.call(null,inst_26117,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_26119 = cljs.core.get.call(null,inst_26117,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_26120 = cljs.core.not_empty.call(null,inst_26118__$1);
var state_26143__$1 = (function (){var statearr_26165 = state_26143;
(statearr_26165[(20)] = inst_26118__$1);

(statearr_26165[(21)] = inst_26119);

return statearr_26165;
})();
if(cljs.core.truth_(inst_26120)){
var statearr_26166_26248 = state_26143__$1;
(statearr_26166_26248[(1)] = (41));

} else {
var statearr_26167_26249 = state_26143__$1;
(statearr_26167_26249[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (33))){
var state_26143__$1 = state_26143;
var statearr_26168_26250 = state_26143__$1;
(statearr_26168_26250[(2)] = false);

(statearr_26168_26250[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (13))){
var inst_26017 = (state_26143[(22)]);
var inst_26021 = cljs.core.chunk_first.call(null,inst_26017);
var inst_26022 = cljs.core.chunk_rest.call(null,inst_26017);
var inst_26023 = cljs.core.count.call(null,inst_26021);
var inst_26004 = inst_26022;
var inst_26005 = inst_26021;
var inst_26006 = inst_26023;
var inst_26007 = (0);
var state_26143__$1 = (function (){var statearr_26169 = state_26143;
(statearr_26169[(7)] = inst_26005);

(statearr_26169[(8)] = inst_26006);

(statearr_26169[(9)] = inst_26004);

(statearr_26169[(10)] = inst_26007);

return statearr_26169;
})();
var statearr_26170_26251 = state_26143__$1;
(statearr_26170_26251[(2)] = null);

(statearr_26170_26251[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (22))){
var inst_26060 = (state_26143[(23)]);
var inst_26061 = (state_26143[(24)]);
var inst_26065 = (state_26143[(25)]);
var inst_26057 = (state_26143[(19)]);
var inst_26060__$1 = (state_26143[(2)]);
var inst_26061__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26060__$1);
var inst_26062 = (function (){var all_files = inst_26057;
var res_SINGLEQUOTE_ = inst_26060__$1;
var res = inst_26061__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_26060,inst_26061,inst_26065,inst_26057,inst_26060__$1,inst_26061__$1,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25740_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25740_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_26060,inst_26061,inst_26065,inst_26057,inst_26060__$1,inst_26061__$1,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26063 = cljs.core.filter.call(null,inst_26062,inst_26060__$1);
var inst_26064 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_26065__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_26064);
var inst_26066 = cljs.core.not_empty.call(null,inst_26065__$1);
var state_26143__$1 = (function (){var statearr_26171 = state_26143;
(statearr_26171[(23)] = inst_26060__$1);

(statearr_26171[(24)] = inst_26061__$1);

(statearr_26171[(25)] = inst_26065__$1);

(statearr_26171[(26)] = inst_26063);

return statearr_26171;
})();
if(cljs.core.truth_(inst_26066)){
var statearr_26172_26252 = state_26143__$1;
(statearr_26172_26252[(1)] = (23));

} else {
var statearr_26173_26253 = state_26143__$1;
(statearr_26173_26253[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (36))){
var state_26143__$1 = state_26143;
var statearr_26174_26254 = state_26143__$1;
(statearr_26174_26254[(2)] = false);

(statearr_26174_26254[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (41))){
var inst_26118 = (state_26143[(20)]);
var inst_26122 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_26123 = cljs.core.map.call(null,inst_26122,inst_26118);
var inst_26124 = cljs.core.pr_str.call(null,inst_26123);
var inst_26125 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_26124)].join('');
var inst_26126 = figwheel.client.utils.log.call(null,inst_26125);
var state_26143__$1 = state_26143;
var statearr_26175_26255 = state_26143__$1;
(statearr_26175_26255[(2)] = inst_26126);

(statearr_26175_26255[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (43))){
var inst_26119 = (state_26143[(21)]);
var inst_26129 = (state_26143[(2)]);
var inst_26130 = cljs.core.not_empty.call(null,inst_26119);
var state_26143__$1 = (function (){var statearr_26176 = state_26143;
(statearr_26176[(27)] = inst_26129);

return statearr_26176;
})();
if(cljs.core.truth_(inst_26130)){
var statearr_26177_26256 = state_26143__$1;
(statearr_26177_26256[(1)] = (44));

} else {
var statearr_26178_26257 = state_26143__$1;
(statearr_26178_26257[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (29))){
var inst_26060 = (state_26143[(23)]);
var inst_26061 = (state_26143[(24)]);
var inst_26097 = (state_26143[(16)]);
var inst_26065 = (state_26143[(25)]);
var inst_26057 = (state_26143[(19)]);
var inst_26063 = (state_26143[(26)]);
var inst_26093 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_26096 = (function (){var all_files = inst_26057;
var res_SINGLEQUOTE_ = inst_26060;
var res = inst_26061;
var files_not_loaded = inst_26063;
var dependencies_that_loaded = inst_26065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26061,inst_26097,inst_26065,inst_26057,inst_26063,inst_26093,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26095){
var map__26179 = p__26095;
var map__26179__$1 = ((((!((map__26179 == null)))?((((map__26179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26179):map__26179);
var namespace = cljs.core.get.call(null,map__26179__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26061,inst_26097,inst_26065,inst_26057,inst_26063,inst_26093,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26097__$1 = cljs.core.group_by.call(null,inst_26096,inst_26063);
var inst_26099 = (inst_26097__$1 == null);
var inst_26100 = cljs.core.not.call(null,inst_26099);
var state_26143__$1 = (function (){var statearr_26181 = state_26143;
(statearr_26181[(16)] = inst_26097__$1);

(statearr_26181[(28)] = inst_26093);

return statearr_26181;
})();
if(inst_26100){
var statearr_26182_26258 = state_26143__$1;
(statearr_26182_26258[(1)] = (32));

} else {
var statearr_26183_26259 = state_26143__$1;
(statearr_26183_26259[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (44))){
var inst_26119 = (state_26143[(21)]);
var inst_26132 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26119);
var inst_26133 = cljs.core.pr_str.call(null,inst_26132);
var inst_26134 = [cljs.core.str("not required: "),cljs.core.str(inst_26133)].join('');
var inst_26135 = figwheel.client.utils.log.call(null,inst_26134);
var state_26143__$1 = state_26143;
var statearr_26184_26260 = state_26143__$1;
(statearr_26184_26260[(2)] = inst_26135);

(statearr_26184_26260[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (6))){
var inst_26038 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26185_26261 = state_26143__$1;
(statearr_26185_26261[(2)] = inst_26038);

(statearr_26185_26261[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (28))){
var inst_26063 = (state_26143[(26)]);
var inst_26090 = (state_26143[(2)]);
var inst_26091 = cljs.core.not_empty.call(null,inst_26063);
var state_26143__$1 = (function (){var statearr_26186 = state_26143;
(statearr_26186[(29)] = inst_26090);

return statearr_26186;
})();
if(cljs.core.truth_(inst_26091)){
var statearr_26187_26262 = state_26143__$1;
(statearr_26187_26262[(1)] = (29));

} else {
var statearr_26188_26263 = state_26143__$1;
(statearr_26188_26263[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (25))){
var inst_26061 = (state_26143[(24)]);
var inst_26077 = (state_26143[(2)]);
var inst_26078 = cljs.core.not_empty.call(null,inst_26061);
var state_26143__$1 = (function (){var statearr_26189 = state_26143;
(statearr_26189[(30)] = inst_26077);

return statearr_26189;
})();
if(cljs.core.truth_(inst_26078)){
var statearr_26190_26264 = state_26143__$1;
(statearr_26190_26264[(1)] = (26));

} else {
var statearr_26191_26265 = state_26143__$1;
(statearr_26191_26265[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (34))){
var inst_26112 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
if(cljs.core.truth_(inst_26112)){
var statearr_26192_26266 = state_26143__$1;
(statearr_26192_26266[(1)] = (38));

} else {
var statearr_26193_26267 = state_26143__$1;
(statearr_26193_26267[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (17))){
var state_26143__$1 = state_26143;
var statearr_26194_26268 = state_26143__$1;
(statearr_26194_26268[(2)] = recompile_dependents);

(statearr_26194_26268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (3))){
var state_26143__$1 = state_26143;
var statearr_26195_26269 = state_26143__$1;
(statearr_26195_26269[(2)] = null);

(statearr_26195_26269[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (12))){
var inst_26034 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26196_26270 = state_26143__$1;
(statearr_26196_26270[(2)] = inst_26034);

(statearr_26196_26270[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (2))){
var inst_25996 = (state_26143[(13)]);
var inst_26003 = cljs.core.seq.call(null,inst_25996);
var inst_26004 = inst_26003;
var inst_26005 = null;
var inst_26006 = (0);
var inst_26007 = (0);
var state_26143__$1 = (function (){var statearr_26197 = state_26143;
(statearr_26197[(7)] = inst_26005);

(statearr_26197[(8)] = inst_26006);

(statearr_26197[(9)] = inst_26004);

(statearr_26197[(10)] = inst_26007);

return statearr_26197;
})();
var statearr_26198_26271 = state_26143__$1;
(statearr_26198_26271[(2)] = null);

(statearr_26198_26271[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (23))){
var inst_26060 = (state_26143[(23)]);
var inst_26061 = (state_26143[(24)]);
var inst_26065 = (state_26143[(25)]);
var inst_26057 = (state_26143[(19)]);
var inst_26063 = (state_26143[(26)]);
var inst_26068 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_26070 = (function (){var all_files = inst_26057;
var res_SINGLEQUOTE_ = inst_26060;
var res = inst_26061;
var files_not_loaded = inst_26063;
var dependencies_that_loaded = inst_26065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26061,inst_26065,inst_26057,inst_26063,inst_26068,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26069){
var map__26199 = p__26069;
var map__26199__$1 = ((((!((map__26199 == null)))?((((map__26199.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26199.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26199):map__26199);
var request_url = cljs.core.get.call(null,map__26199__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26061,inst_26065,inst_26057,inst_26063,inst_26068,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26071 = cljs.core.reverse.call(null,inst_26065);
var inst_26072 = cljs.core.map.call(null,inst_26070,inst_26071);
var inst_26073 = cljs.core.pr_str.call(null,inst_26072);
var inst_26074 = figwheel.client.utils.log.call(null,inst_26073);
var state_26143__$1 = (function (){var statearr_26201 = state_26143;
(statearr_26201[(31)] = inst_26068);

return statearr_26201;
})();
var statearr_26202_26272 = state_26143__$1;
(statearr_26202_26272[(2)] = inst_26074);

(statearr_26202_26272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (35))){
var state_26143__$1 = state_26143;
var statearr_26203_26273 = state_26143__$1;
(statearr_26203_26273[(2)] = true);

(statearr_26203_26273[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (19))){
var inst_26047 = (state_26143[(12)]);
var inst_26053 = figwheel.client.file_reloading.expand_files.call(null,inst_26047);
var state_26143__$1 = state_26143;
var statearr_26204_26274 = state_26143__$1;
(statearr_26204_26274[(2)] = inst_26053);

(statearr_26204_26274[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (11))){
var state_26143__$1 = state_26143;
var statearr_26205_26275 = state_26143__$1;
(statearr_26205_26275[(2)] = null);

(statearr_26205_26275[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (9))){
var inst_26036 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26206_26276 = state_26143__$1;
(statearr_26206_26276[(2)] = inst_26036);

(statearr_26206_26276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (5))){
var inst_26006 = (state_26143[(8)]);
var inst_26007 = (state_26143[(10)]);
var inst_26009 = (inst_26007 < inst_26006);
var inst_26010 = inst_26009;
var state_26143__$1 = state_26143;
if(cljs.core.truth_(inst_26010)){
var statearr_26207_26277 = state_26143__$1;
(statearr_26207_26277[(1)] = (7));

} else {
var statearr_26208_26278 = state_26143__$1;
(statearr_26208_26278[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (14))){
var inst_26017 = (state_26143[(22)]);
var inst_26026 = cljs.core.first.call(null,inst_26017);
var inst_26027 = figwheel.client.file_reloading.eval_body.call(null,inst_26026,opts);
var inst_26028 = cljs.core.next.call(null,inst_26017);
var inst_26004 = inst_26028;
var inst_26005 = null;
var inst_26006 = (0);
var inst_26007 = (0);
var state_26143__$1 = (function (){var statearr_26209 = state_26143;
(statearr_26209[(7)] = inst_26005);

(statearr_26209[(8)] = inst_26006);

(statearr_26209[(32)] = inst_26027);

(statearr_26209[(9)] = inst_26004);

(statearr_26209[(10)] = inst_26007);

return statearr_26209;
})();
var statearr_26210_26279 = state_26143__$1;
(statearr_26210_26279[(2)] = null);

(statearr_26210_26279[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (45))){
var state_26143__$1 = state_26143;
var statearr_26211_26280 = state_26143__$1;
(statearr_26211_26280[(2)] = null);

(statearr_26211_26280[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (26))){
var inst_26060 = (state_26143[(23)]);
var inst_26061 = (state_26143[(24)]);
var inst_26065 = (state_26143[(25)]);
var inst_26057 = (state_26143[(19)]);
var inst_26063 = (state_26143[(26)]);
var inst_26080 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_26082 = (function (){var all_files = inst_26057;
var res_SINGLEQUOTE_ = inst_26060;
var res = inst_26061;
var files_not_loaded = inst_26063;
var dependencies_that_loaded = inst_26065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26061,inst_26065,inst_26057,inst_26063,inst_26080,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__26081){
var map__26212 = p__26081;
var map__26212__$1 = ((((!((map__26212 == null)))?((((map__26212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26212):map__26212);
var namespace = cljs.core.get.call(null,map__26212__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__26212__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26061,inst_26065,inst_26057,inst_26063,inst_26080,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26083 = cljs.core.map.call(null,inst_26082,inst_26061);
var inst_26084 = cljs.core.pr_str.call(null,inst_26083);
var inst_26085 = figwheel.client.utils.log.call(null,inst_26084);
var inst_26086 = (function (){var all_files = inst_26057;
var res_SINGLEQUOTE_ = inst_26060;
var res = inst_26061;
var files_not_loaded = inst_26063;
var dependencies_that_loaded = inst_26065;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26061,inst_26065,inst_26057,inst_26063,inst_26080,inst_26082,inst_26083,inst_26084,inst_26085,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_26060,inst_26061,inst_26065,inst_26057,inst_26063,inst_26080,inst_26082,inst_26083,inst_26084,inst_26085,state_val_26144,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_26087 = setTimeout(inst_26086,(10));
var state_26143__$1 = (function (){var statearr_26214 = state_26143;
(statearr_26214[(33)] = inst_26085);

(statearr_26214[(34)] = inst_26080);

return statearr_26214;
})();
var statearr_26215_26281 = state_26143__$1;
(statearr_26215_26281[(2)] = inst_26087);

(statearr_26215_26281[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (16))){
var state_26143__$1 = state_26143;
var statearr_26216_26282 = state_26143__$1;
(statearr_26216_26282[(2)] = reload_dependents);

(statearr_26216_26282[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (38))){
var inst_26097 = (state_26143[(16)]);
var inst_26114 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26097);
var state_26143__$1 = state_26143;
var statearr_26217_26283 = state_26143__$1;
(statearr_26217_26283[(2)] = inst_26114);

(statearr_26217_26283[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (30))){
var state_26143__$1 = state_26143;
var statearr_26218_26284 = state_26143__$1;
(statearr_26218_26284[(2)] = null);

(statearr_26218_26284[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (10))){
var inst_26017 = (state_26143[(22)]);
var inst_26019 = cljs.core.chunked_seq_QMARK_.call(null,inst_26017);
var state_26143__$1 = state_26143;
if(inst_26019){
var statearr_26219_26285 = state_26143__$1;
(statearr_26219_26285[(1)] = (13));

} else {
var statearr_26220_26286 = state_26143__$1;
(statearr_26220_26286[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (18))){
var inst_26051 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
if(cljs.core.truth_(inst_26051)){
var statearr_26221_26287 = state_26143__$1;
(statearr_26221_26287[(1)] = (19));

} else {
var statearr_26222_26288 = state_26143__$1;
(statearr_26222_26288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (42))){
var state_26143__$1 = state_26143;
var statearr_26223_26289 = state_26143__$1;
(statearr_26223_26289[(2)] = null);

(statearr_26223_26289[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (37))){
var inst_26109 = (state_26143[(2)]);
var state_26143__$1 = state_26143;
var statearr_26224_26290 = state_26143__$1;
(statearr_26224_26290[(2)] = inst_26109);

(statearr_26224_26290[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26144 === (8))){
var inst_26017 = (state_26143[(22)]);
var inst_26004 = (state_26143[(9)]);
var inst_26017__$1 = cljs.core.seq.call(null,inst_26004);
var state_26143__$1 = (function (){var statearr_26225 = state_26143;
(statearr_26225[(22)] = inst_26017__$1);

return statearr_26225;
})();
if(inst_26017__$1){
var statearr_26226_26291 = state_26143__$1;
(statearr_26226_26291[(1)] = (10));

} else {
var statearr_26227_26292 = state_26143__$1;
(statearr_26227_26292[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19775__auto__,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto____0 = (function (){
var statearr_26231 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26231[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto__);

(statearr_26231[(1)] = (1));

return statearr_26231;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto____1 = (function (state_26143){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_26143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e26232){if((e26232 instanceof Object)){
var ex__19779__auto__ = e26232;
var statearr_26233_26293 = state_26143;
(statearr_26233_26293[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26294 = state_26143;
state_26143 = G__26294;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto__ = function(state_26143){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto____1.call(this,state_26143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19798__auto__ = (function (){var statearr_26234 = f__19797__auto__.call(null);
(statearr_26234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto__);

return statearr_26234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto__,map__25989,map__25989__$1,opts,before_jsload,on_jsload,reload_dependents,map__25990,map__25990__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19796__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__26297,link){
var map__26300 = p__26297;
var map__26300__$1 = ((((!((map__26300 == null)))?((((map__26300.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26300.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26300):map__26300);
var file = cljs.core.get.call(null,map__26300__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__26300,map__26300__$1,file){
return (function (p1__26295_SHARP_,p2__26296_SHARP_){
if(cljs.core._EQ_.call(null,p1__26295_SHARP_,p2__26296_SHARP_)){
return p1__26295_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__26300,map__26300__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__26306){
var map__26307 = p__26306;
var map__26307__$1 = ((((!((map__26307 == null)))?((((map__26307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26307):map__26307);
var match_length = cljs.core.get.call(null,map__26307__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__26307__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__26302_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__26302_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args26309 = [];
var len__17829__auto___26312 = arguments.length;
var i__17830__auto___26313 = (0);
while(true){
if((i__17830__auto___26313 < len__17829__auto___26312)){
args26309.push((arguments[i__17830__auto___26313]));

var G__26314 = (i__17830__auto___26313 + (1));
i__17830__auto___26313 = G__26314;
continue;
} else {
}
break;
}

var G__26311 = args26309.length;
switch (G__26311) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26309.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__26316_SHARP_,p2__26317_SHARP_){
return cljs.core.assoc.call(null,p1__26316_SHARP_,cljs.core.get.call(null,p2__26317_SHARP_,key),p2__26317_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__26318){
var map__26321 = p__26318;
var map__26321__$1 = ((((!((map__26321 == null)))?((((map__26321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26321):map__26321);
var f_data = map__26321__$1;
var file = cljs.core.get.call(null,map__26321__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__26323,files_msg){
var map__26330 = p__26323;
var map__26330__$1 = ((((!((map__26330 == null)))?((((map__26330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26330):map__26330);
var opts = map__26330__$1;
var on_cssload = cljs.core.get.call(null,map__26330__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__26332_26336 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__26333_26337 = null;
var count__26334_26338 = (0);
var i__26335_26339 = (0);
while(true){
if((i__26335_26339 < count__26334_26338)){
var f_26340 = cljs.core._nth.call(null,chunk__26333_26337,i__26335_26339);
figwheel.client.file_reloading.reload_css_file.call(null,f_26340);

var G__26341 = seq__26332_26336;
var G__26342 = chunk__26333_26337;
var G__26343 = count__26334_26338;
var G__26344 = (i__26335_26339 + (1));
seq__26332_26336 = G__26341;
chunk__26333_26337 = G__26342;
count__26334_26338 = G__26343;
i__26335_26339 = G__26344;
continue;
} else {
var temp__4425__auto___26345 = cljs.core.seq.call(null,seq__26332_26336);
if(temp__4425__auto___26345){
var seq__26332_26346__$1 = temp__4425__auto___26345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26332_26346__$1)){
var c__17574__auto___26347 = cljs.core.chunk_first.call(null,seq__26332_26346__$1);
var G__26348 = cljs.core.chunk_rest.call(null,seq__26332_26346__$1);
var G__26349 = c__17574__auto___26347;
var G__26350 = cljs.core.count.call(null,c__17574__auto___26347);
var G__26351 = (0);
seq__26332_26336 = G__26348;
chunk__26333_26337 = G__26349;
count__26334_26338 = G__26350;
i__26335_26339 = G__26351;
continue;
} else {
var f_26352 = cljs.core.first.call(null,seq__26332_26346__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_26352);

var G__26353 = cljs.core.next.call(null,seq__26332_26346__$1);
var G__26354 = null;
var G__26355 = (0);
var G__26356 = (0);
seq__26332_26336 = G__26353;
chunk__26333_26337 = G__26354;
count__26334_26338 = G__26355;
i__26335_26339 = G__26356;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__26330,map__26330__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__26330,map__26330__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map
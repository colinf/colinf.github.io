// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args22593 = [];
var len__17829__auto___22599 = arguments.length;
var i__17830__auto___22600 = (0);
while(true){
if((i__17830__auto___22600 < len__17829__auto___22599)){
args22593.push((arguments[i__17830__auto___22600]));

var G__22601 = (i__17830__auto___22600 + (1));
i__17830__auto___22600 = G__22601;
continue;
} else {
}
break;
}

var G__22595 = args22593.length;
switch (G__22595) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22593.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async22596 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22596 = (function (f,blockable,meta22597){
this.f = f;
this.blockable = blockable;
this.meta22597 = meta22597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22598,meta22597__$1){
var self__ = this;
var _22598__$1 = this;
return (new cljs.core.async.t_cljs$core$async22596(self__.f,self__.blockable,meta22597__$1));
});

cljs.core.async.t_cljs$core$async22596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22598){
var self__ = this;
var _22598__$1 = this;
return self__.meta22597;
});

cljs.core.async.t_cljs$core$async22596.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22596.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async22596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async22596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta22597","meta22597",1235146260,null)], null);
});

cljs.core.async.t_cljs$core$async22596.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22596";

cljs.core.async.t_cljs$core$async22596.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22596");
});

cljs.core.async.__GT_t_cljs$core$async22596 = (function cljs$core$async$__GT_t_cljs$core$async22596(f__$1,blockable__$1,meta22597){
return (new cljs.core.async.t_cljs$core$async22596(f__$1,blockable__$1,meta22597));
});

}

return (new cljs.core.async.t_cljs$core$async22596(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args22605 = [];
var len__17829__auto___22608 = arguments.length;
var i__17830__auto___22609 = (0);
while(true){
if((i__17830__auto___22609 < len__17829__auto___22608)){
args22605.push((arguments[i__17830__auto___22609]));

var G__22610 = (i__17830__auto___22609 + (1));
i__17830__auto___22609 = G__22610;
continue;
} else {
}
break;
}

var G__22607 = args22605.length;
switch (G__22607) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22605.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args22612 = [];
var len__17829__auto___22615 = arguments.length;
var i__17830__auto___22616 = (0);
while(true){
if((i__17830__auto___22616 < len__17829__auto___22615)){
args22612.push((arguments[i__17830__auto___22616]));

var G__22617 = (i__17830__auto___22616 + (1));
i__17830__auto___22616 = G__22617;
continue;
} else {
}
break;
}

var G__22614 = args22612.length;
switch (G__22614) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22612.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args22619 = [];
var len__17829__auto___22622 = arguments.length;
var i__17830__auto___22623 = (0);
while(true){
if((i__17830__auto___22623 < len__17829__auto___22622)){
args22619.push((arguments[i__17830__auto___22623]));

var G__22624 = (i__17830__auto___22623 + (1));
i__17830__auto___22623 = G__22624;
continue;
} else {
}
break;
}

var G__22621 = args22619.length;
switch (G__22621) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22619.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22626 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22626);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22626,ret){
return (function (){
return fn1.call(null,val_22626);
});})(val_22626,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args22627 = [];
var len__17829__auto___22630 = arguments.length;
var i__17830__auto___22631 = (0);
while(true){
if((i__17830__auto___22631 < len__17829__auto___22630)){
args22627.push((arguments[i__17830__auto___22631]));

var G__22632 = (i__17830__auto___22631 + (1));
i__17830__auto___22631 = G__22632;
continue;
} else {
}
break;
}

var G__22629 = args22627.length;
switch (G__22629) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22627.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17674__auto___22634 = n;
var x_22635 = (0);
while(true){
if((x_22635 < n__17674__auto___22634)){
(a[x_22635] = (0));

var G__22636 = (x_22635 + (1));
x_22635 = G__22636;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__22637 = (i + (1));
i = G__22637;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22641 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22641 = (function (alt_flag,flag,meta22642){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22642 = meta22642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22643,meta22642__$1){
var self__ = this;
var _22643__$1 = this;
return (new cljs.core.async.t_cljs$core$async22641(self__.alt_flag,self__.flag,meta22642__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22643){
var self__ = this;
var _22643__$1 = this;
return self__.meta22642;
});})(flag))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22641.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22641.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22642","meta22642",211548258,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22641.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22641";

cljs.core.async.t_cljs$core$async22641.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22641");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22641 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22641(alt_flag__$1,flag__$1,meta22642){
return (new cljs.core.async.t_cljs$core$async22641(alt_flag__$1,flag__$1,meta22642));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22641(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22647 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22647 = (function (alt_handler,flag,cb,meta22648){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22648 = meta22648;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22649,meta22648__$1){
var self__ = this;
var _22649__$1 = this;
return (new cljs.core.async.t_cljs$core$async22647(self__.alt_handler,self__.flag,self__.cb,meta22648__$1));
});

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22649){
var self__ = this;
var _22649__$1 = this;
return self__.meta22648;
});

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22647.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22647.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22648","meta22648",-81651989,null)], null);
});

cljs.core.async.t_cljs$core$async22647.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22647.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22647";

cljs.core.async.t_cljs$core$async22647.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async22647");
});

cljs.core.async.__GT_t_cljs$core$async22647 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22647(alt_handler__$1,flag__$1,cb__$1,meta22648){
return (new cljs.core.async.t_cljs$core$async22647(alt_handler__$1,flag__$1,cb__$1,meta22648));
});

}

return (new cljs.core.async.t_cljs$core$async22647(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22650_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22650_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22651_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22651_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16771__auto__ = wport;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22652 = (i + (1));
i = G__22652;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16771__auto__ = ret;
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16759__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16759__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16759__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___22658 = arguments.length;
var i__17830__auto___22659 = (0);
while(true){
if((i__17830__auto___22659 < len__17829__auto___22658)){
args__17836__auto__.push((arguments[i__17830__auto___22659]));

var G__22660 = (i__17830__auto___22659 + (1));
i__17830__auto___22659 = G__22660;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((1) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17837__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22655){
var map__22656 = p__22655;
var map__22656__$1 = ((((!((map__22656 == null)))?((((map__22656.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22656.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22656):map__22656);
var opts = map__22656__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22653){
var G__22654 = cljs.core.first.call(null,seq22653);
var seq22653__$1 = cljs.core.next.call(null,seq22653);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22654,seq22653__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args22661 = [];
var len__17829__auto___22711 = arguments.length;
var i__17830__auto___22712 = (0);
while(true){
if((i__17830__auto___22712 < len__17829__auto___22711)){
args22661.push((arguments[i__17830__auto___22712]));

var G__22713 = (i__17830__auto___22712 + (1));
i__17830__auto___22712 = G__22713;
continue;
} else {
}
break;
}

var G__22663 = args22661.length;
switch (G__22663) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22661.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19796__auto___22715 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___22715){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___22715){
return (function (state_22687){
var state_val_22688 = (state_22687[(1)]);
if((state_val_22688 === (7))){
var inst_22683 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22689_22716 = state_22687__$1;
(statearr_22689_22716[(2)] = inst_22683);

(statearr_22689_22716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (1))){
var state_22687__$1 = state_22687;
var statearr_22690_22717 = state_22687__$1;
(statearr_22690_22717[(2)] = null);

(statearr_22690_22717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (4))){
var inst_22666 = (state_22687[(7)]);
var inst_22666__$1 = (state_22687[(2)]);
var inst_22667 = (inst_22666__$1 == null);
var state_22687__$1 = (function (){var statearr_22691 = state_22687;
(statearr_22691[(7)] = inst_22666__$1);

return statearr_22691;
})();
if(cljs.core.truth_(inst_22667)){
var statearr_22692_22718 = state_22687__$1;
(statearr_22692_22718[(1)] = (5));

} else {
var statearr_22693_22719 = state_22687__$1;
(statearr_22693_22719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (13))){
var state_22687__$1 = state_22687;
var statearr_22694_22720 = state_22687__$1;
(statearr_22694_22720[(2)] = null);

(statearr_22694_22720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (6))){
var inst_22666 = (state_22687[(7)]);
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22687__$1,(11),to,inst_22666);
} else {
if((state_val_22688 === (3))){
var inst_22685 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22687__$1,inst_22685);
} else {
if((state_val_22688 === (12))){
var state_22687__$1 = state_22687;
var statearr_22695_22721 = state_22687__$1;
(statearr_22695_22721[(2)] = null);

(statearr_22695_22721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (2))){
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22687__$1,(4),from);
} else {
if((state_val_22688 === (11))){
var inst_22676 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
if(cljs.core.truth_(inst_22676)){
var statearr_22696_22722 = state_22687__$1;
(statearr_22696_22722[(1)] = (12));

} else {
var statearr_22697_22723 = state_22687__$1;
(statearr_22697_22723[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (9))){
var state_22687__$1 = state_22687;
var statearr_22698_22724 = state_22687__$1;
(statearr_22698_22724[(2)] = null);

(statearr_22698_22724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (5))){
var state_22687__$1 = state_22687;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22699_22725 = state_22687__$1;
(statearr_22699_22725[(1)] = (8));

} else {
var statearr_22700_22726 = state_22687__$1;
(statearr_22700_22726[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (14))){
var inst_22681 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22701_22727 = state_22687__$1;
(statearr_22701_22727[(2)] = inst_22681);

(statearr_22701_22727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (10))){
var inst_22673 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22702_22728 = state_22687__$1;
(statearr_22702_22728[(2)] = inst_22673);

(statearr_22702_22728[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (8))){
var inst_22670 = cljs.core.async.close_BANG_.call(null,to);
var state_22687__$1 = state_22687;
var statearr_22703_22729 = state_22687__$1;
(statearr_22703_22729[(2)] = inst_22670);

(statearr_22703_22729[(1)] = (10));


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
});})(c__19796__auto___22715))
;
return ((function (switch__19775__auto__,c__19796__auto___22715){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_22707 = [null,null,null,null,null,null,null,null];
(statearr_22707[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_22707[(1)] = (1));

return statearr_22707;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_22687){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_22687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e22708){if((e22708 instanceof Object)){
var ex__19779__auto__ = e22708;
var statearr_22709_22730 = state_22687;
(statearr_22709_22730[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22687);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22731 = state_22687;
state_22687 = G__22731;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_22687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_22687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___22715))
})();
var state__19798__auto__ = (function (){var statearr_22710 = f__19797__auto__.call(null);
(statearr_22710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___22715);

return statearr_22710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___22715))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22915){
var vec__22916 = p__22915;
var v = cljs.core.nth.call(null,vec__22916,(0),null);
var p = cljs.core.nth.call(null,vec__22916,(1),null);
var job = vec__22916;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19796__auto___23098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___23098,res,vec__22916,v,p,job,jobs,results){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___23098,res,vec__22916,v,p,job,jobs,results){
return (function (state_22921){
var state_val_22922 = (state_22921[(1)]);
if((state_val_22922 === (1))){
var state_22921__$1 = state_22921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22921__$1,(2),res,v);
} else {
if((state_val_22922 === (2))){
var inst_22918 = (state_22921[(2)]);
var inst_22919 = cljs.core.async.close_BANG_.call(null,res);
var state_22921__$1 = (function (){var statearr_22923 = state_22921;
(statearr_22923[(7)] = inst_22918);

return statearr_22923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22921__$1,inst_22919);
} else {
return null;
}
}
});})(c__19796__auto___23098,res,vec__22916,v,p,job,jobs,results))
;
return ((function (switch__19775__auto__,c__19796__auto___23098,res,vec__22916,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0 = (function (){
var statearr_22927 = [null,null,null,null,null,null,null,null];
(statearr_22927[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__);

(statearr_22927[(1)] = (1));

return statearr_22927;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1 = (function (state_22921){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_22921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e22928){if((e22928 instanceof Object)){
var ex__19779__auto__ = e22928;
var statearr_22929_23099 = state_22921;
(statearr_22929_23099[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23100 = state_22921;
state_22921 = G__23100;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = function(state_22921){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1.call(this,state_22921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___23098,res,vec__22916,v,p,job,jobs,results))
})();
var state__19798__auto__ = (function (){var statearr_22930 = f__19797__auto__.call(null);
(statearr_22930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___23098);

return statearr_22930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___23098,res,vec__22916,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22931){
var vec__22932 = p__22931;
var v = cljs.core.nth.call(null,vec__22932,(0),null);
var p = cljs.core.nth.call(null,vec__22932,(1),null);
var job = vec__22932;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17674__auto___23101 = n;
var __23102 = (0);
while(true){
if((__23102 < n__17674__auto___23101)){
var G__22933_23103 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22933_23103) {
case "compute":
var c__19796__auto___23105 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23102,c__19796__auto___23105,G__22933_23103,n__17674__auto___23101,jobs,results,process,async){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (__23102,c__19796__auto___23105,G__22933_23103,n__17674__auto___23101,jobs,results,process,async){
return (function (state_22946){
var state_val_22947 = (state_22946[(1)]);
if((state_val_22947 === (1))){
var state_22946__$1 = state_22946;
var statearr_22948_23106 = state_22946__$1;
(statearr_22948_23106[(2)] = null);

(statearr_22948_23106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (2))){
var state_22946__$1 = state_22946;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22946__$1,(4),jobs);
} else {
if((state_val_22947 === (3))){
var inst_22944 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22946__$1,inst_22944);
} else {
if((state_val_22947 === (4))){
var inst_22936 = (state_22946[(2)]);
var inst_22937 = process.call(null,inst_22936);
var state_22946__$1 = state_22946;
if(cljs.core.truth_(inst_22937)){
var statearr_22949_23107 = state_22946__$1;
(statearr_22949_23107[(1)] = (5));

} else {
var statearr_22950_23108 = state_22946__$1;
(statearr_22950_23108[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (5))){
var state_22946__$1 = state_22946;
var statearr_22951_23109 = state_22946__$1;
(statearr_22951_23109[(2)] = null);

(statearr_22951_23109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (6))){
var state_22946__$1 = state_22946;
var statearr_22952_23110 = state_22946__$1;
(statearr_22952_23110[(2)] = null);

(statearr_22952_23110[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22947 === (7))){
var inst_22942 = (state_22946[(2)]);
var state_22946__$1 = state_22946;
var statearr_22953_23111 = state_22946__$1;
(statearr_22953_23111[(2)] = inst_22942);

(statearr_22953_23111[(1)] = (3));


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
});})(__23102,c__19796__auto___23105,G__22933_23103,n__17674__auto___23101,jobs,results,process,async))
;
return ((function (__23102,switch__19775__auto__,c__19796__auto___23105,G__22933_23103,n__17674__auto___23101,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0 = (function (){
var statearr_22957 = [null,null,null,null,null,null,null];
(statearr_22957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__);

(statearr_22957[(1)] = (1));

return statearr_22957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1 = (function (state_22946){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_22946);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e22958){if((e22958 instanceof Object)){
var ex__19779__auto__ = e22958;
var statearr_22959_23112 = state_22946;
(statearr_22959_23112[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22946);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22958;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23113 = state_22946;
state_22946 = G__23113;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = function(state_22946){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1.call(this,state_22946);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__;
})()
;})(__23102,switch__19775__auto__,c__19796__auto___23105,G__22933_23103,n__17674__auto___23101,jobs,results,process,async))
})();
var state__19798__auto__ = (function (){var statearr_22960 = f__19797__auto__.call(null);
(statearr_22960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___23105);

return statearr_22960;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(__23102,c__19796__auto___23105,G__22933_23103,n__17674__auto___23101,jobs,results,process,async))
);


break;
case "async":
var c__19796__auto___23114 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__23102,c__19796__auto___23114,G__22933_23103,n__17674__auto___23101,jobs,results,process,async){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (__23102,c__19796__auto___23114,G__22933_23103,n__17674__auto___23101,jobs,results,process,async){
return (function (state_22973){
var state_val_22974 = (state_22973[(1)]);
if((state_val_22974 === (1))){
var state_22973__$1 = state_22973;
var statearr_22975_23115 = state_22973__$1;
(statearr_22975_23115[(2)] = null);

(statearr_22975_23115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (2))){
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22973__$1,(4),jobs);
} else {
if((state_val_22974 === (3))){
var inst_22971 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22973__$1,inst_22971);
} else {
if((state_val_22974 === (4))){
var inst_22963 = (state_22973[(2)]);
var inst_22964 = async.call(null,inst_22963);
var state_22973__$1 = state_22973;
if(cljs.core.truth_(inst_22964)){
var statearr_22976_23116 = state_22973__$1;
(statearr_22976_23116[(1)] = (5));

} else {
var statearr_22977_23117 = state_22973__$1;
(statearr_22977_23117[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (5))){
var state_22973__$1 = state_22973;
var statearr_22978_23118 = state_22973__$1;
(statearr_22978_23118[(2)] = null);

(statearr_22978_23118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (6))){
var state_22973__$1 = state_22973;
var statearr_22979_23119 = state_22973__$1;
(statearr_22979_23119[(2)] = null);

(statearr_22979_23119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22974 === (7))){
var inst_22969 = (state_22973[(2)]);
var state_22973__$1 = state_22973;
var statearr_22980_23120 = state_22973__$1;
(statearr_22980_23120[(2)] = inst_22969);

(statearr_22980_23120[(1)] = (3));


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
});})(__23102,c__19796__auto___23114,G__22933_23103,n__17674__auto___23101,jobs,results,process,async))
;
return ((function (__23102,switch__19775__auto__,c__19796__auto___23114,G__22933_23103,n__17674__auto___23101,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0 = (function (){
var statearr_22984 = [null,null,null,null,null,null,null];
(statearr_22984[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__);

(statearr_22984[(1)] = (1));

return statearr_22984;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1 = (function (state_22973){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_22973);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e22985){if((e22985 instanceof Object)){
var ex__19779__auto__ = e22985;
var statearr_22986_23121 = state_22973;
(statearr_22986_23121[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22973);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22985;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23122 = state_22973;
state_22973 = G__23122;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = function(state_22973){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1.call(this,state_22973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__;
})()
;})(__23102,switch__19775__auto__,c__19796__auto___23114,G__22933_23103,n__17674__auto___23101,jobs,results,process,async))
})();
var state__19798__auto__ = (function (){var statearr_22987 = f__19797__auto__.call(null);
(statearr_22987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___23114);

return statearr_22987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(__23102,c__19796__auto___23114,G__22933_23103,n__17674__auto___23101,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__23123 = (__23102 + (1));
__23102 = G__23123;
continue;
} else {
}
break;
}

var c__19796__auto___23124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___23124,jobs,results,process,async){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___23124,jobs,results,process,async){
return (function (state_23009){
var state_val_23010 = (state_23009[(1)]);
if((state_val_23010 === (1))){
var state_23009__$1 = state_23009;
var statearr_23011_23125 = state_23009__$1;
(statearr_23011_23125[(2)] = null);

(statearr_23011_23125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (2))){
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23009__$1,(4),from);
} else {
if((state_val_23010 === (3))){
var inst_23007 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23009__$1,inst_23007);
} else {
if((state_val_23010 === (4))){
var inst_22990 = (state_23009[(7)]);
var inst_22990__$1 = (state_23009[(2)]);
var inst_22991 = (inst_22990__$1 == null);
var state_23009__$1 = (function (){var statearr_23012 = state_23009;
(statearr_23012[(7)] = inst_22990__$1);

return statearr_23012;
})();
if(cljs.core.truth_(inst_22991)){
var statearr_23013_23126 = state_23009__$1;
(statearr_23013_23126[(1)] = (5));

} else {
var statearr_23014_23127 = state_23009__$1;
(statearr_23014_23127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (5))){
var inst_22993 = cljs.core.async.close_BANG_.call(null,jobs);
var state_23009__$1 = state_23009;
var statearr_23015_23128 = state_23009__$1;
(statearr_23015_23128[(2)] = inst_22993);

(statearr_23015_23128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (6))){
var inst_22995 = (state_23009[(8)]);
var inst_22990 = (state_23009[(7)]);
var inst_22995__$1 = cljs.core.async.chan.call(null,(1));
var inst_22996 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22997 = [inst_22990,inst_22995__$1];
var inst_22998 = (new cljs.core.PersistentVector(null,2,(5),inst_22996,inst_22997,null));
var state_23009__$1 = (function (){var statearr_23016 = state_23009;
(statearr_23016[(8)] = inst_22995__$1);

return statearr_23016;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23009__$1,(8),jobs,inst_22998);
} else {
if((state_val_23010 === (7))){
var inst_23005 = (state_23009[(2)]);
var state_23009__$1 = state_23009;
var statearr_23017_23129 = state_23009__$1;
(statearr_23017_23129[(2)] = inst_23005);

(statearr_23017_23129[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23010 === (8))){
var inst_22995 = (state_23009[(8)]);
var inst_23000 = (state_23009[(2)]);
var state_23009__$1 = (function (){var statearr_23018 = state_23009;
(statearr_23018[(9)] = inst_23000);

return statearr_23018;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23009__$1,(9),results,inst_22995);
} else {
if((state_val_23010 === (9))){
var inst_23002 = (state_23009[(2)]);
var state_23009__$1 = (function (){var statearr_23019 = state_23009;
(statearr_23019[(10)] = inst_23002);

return statearr_23019;
})();
var statearr_23020_23130 = state_23009__$1;
(statearr_23020_23130[(2)] = null);

(statearr_23020_23130[(1)] = (2));


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
});})(c__19796__auto___23124,jobs,results,process,async))
;
return ((function (switch__19775__auto__,c__19796__auto___23124,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0 = (function (){
var statearr_23024 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__);

(statearr_23024[(1)] = (1));

return statearr_23024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1 = (function (state_23009){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_23009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e23025){if((e23025 instanceof Object)){
var ex__19779__auto__ = e23025;
var statearr_23026_23131 = state_23009;
(statearr_23026_23131[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23025;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23132 = state_23009;
state_23009 = G__23132;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = function(state_23009){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1.call(this,state_23009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___23124,jobs,results,process,async))
})();
var state__19798__auto__ = (function (){var statearr_23027 = f__19797__auto__.call(null);
(statearr_23027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___23124);

return statearr_23027;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___23124,jobs,results,process,async))
);


var c__19796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto__,jobs,results,process,async){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto__,jobs,results,process,async){
return (function (state_23065){
var state_val_23066 = (state_23065[(1)]);
if((state_val_23066 === (7))){
var inst_23061 = (state_23065[(2)]);
var state_23065__$1 = state_23065;
var statearr_23067_23133 = state_23065__$1;
(statearr_23067_23133[(2)] = inst_23061);

(statearr_23067_23133[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (20))){
var state_23065__$1 = state_23065;
var statearr_23068_23134 = state_23065__$1;
(statearr_23068_23134[(2)] = null);

(statearr_23068_23134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (1))){
var state_23065__$1 = state_23065;
var statearr_23069_23135 = state_23065__$1;
(statearr_23069_23135[(2)] = null);

(statearr_23069_23135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (4))){
var inst_23030 = (state_23065[(7)]);
var inst_23030__$1 = (state_23065[(2)]);
var inst_23031 = (inst_23030__$1 == null);
var state_23065__$1 = (function (){var statearr_23070 = state_23065;
(statearr_23070[(7)] = inst_23030__$1);

return statearr_23070;
})();
if(cljs.core.truth_(inst_23031)){
var statearr_23071_23136 = state_23065__$1;
(statearr_23071_23136[(1)] = (5));

} else {
var statearr_23072_23137 = state_23065__$1;
(statearr_23072_23137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (15))){
var inst_23043 = (state_23065[(8)]);
var state_23065__$1 = state_23065;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23065__$1,(18),to,inst_23043);
} else {
if((state_val_23066 === (21))){
var inst_23056 = (state_23065[(2)]);
var state_23065__$1 = state_23065;
var statearr_23073_23138 = state_23065__$1;
(statearr_23073_23138[(2)] = inst_23056);

(statearr_23073_23138[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (13))){
var inst_23058 = (state_23065[(2)]);
var state_23065__$1 = (function (){var statearr_23074 = state_23065;
(statearr_23074[(9)] = inst_23058);

return statearr_23074;
})();
var statearr_23075_23139 = state_23065__$1;
(statearr_23075_23139[(2)] = null);

(statearr_23075_23139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (6))){
var inst_23030 = (state_23065[(7)]);
var state_23065__$1 = state_23065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23065__$1,(11),inst_23030);
} else {
if((state_val_23066 === (17))){
var inst_23051 = (state_23065[(2)]);
var state_23065__$1 = state_23065;
if(cljs.core.truth_(inst_23051)){
var statearr_23076_23140 = state_23065__$1;
(statearr_23076_23140[(1)] = (19));

} else {
var statearr_23077_23141 = state_23065__$1;
(statearr_23077_23141[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (3))){
var inst_23063 = (state_23065[(2)]);
var state_23065__$1 = state_23065;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23065__$1,inst_23063);
} else {
if((state_val_23066 === (12))){
var inst_23040 = (state_23065[(10)]);
var state_23065__$1 = state_23065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23065__$1,(14),inst_23040);
} else {
if((state_val_23066 === (2))){
var state_23065__$1 = state_23065;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23065__$1,(4),results);
} else {
if((state_val_23066 === (19))){
var state_23065__$1 = state_23065;
var statearr_23078_23142 = state_23065__$1;
(statearr_23078_23142[(2)] = null);

(statearr_23078_23142[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (11))){
var inst_23040 = (state_23065[(2)]);
var state_23065__$1 = (function (){var statearr_23079 = state_23065;
(statearr_23079[(10)] = inst_23040);

return statearr_23079;
})();
var statearr_23080_23143 = state_23065__$1;
(statearr_23080_23143[(2)] = null);

(statearr_23080_23143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (9))){
var state_23065__$1 = state_23065;
var statearr_23081_23144 = state_23065__$1;
(statearr_23081_23144[(2)] = null);

(statearr_23081_23144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (5))){
var state_23065__$1 = state_23065;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23082_23145 = state_23065__$1;
(statearr_23082_23145[(1)] = (8));

} else {
var statearr_23083_23146 = state_23065__$1;
(statearr_23083_23146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (14))){
var inst_23045 = (state_23065[(11)]);
var inst_23043 = (state_23065[(8)]);
var inst_23043__$1 = (state_23065[(2)]);
var inst_23044 = (inst_23043__$1 == null);
var inst_23045__$1 = cljs.core.not.call(null,inst_23044);
var state_23065__$1 = (function (){var statearr_23084 = state_23065;
(statearr_23084[(11)] = inst_23045__$1);

(statearr_23084[(8)] = inst_23043__$1);

return statearr_23084;
})();
if(inst_23045__$1){
var statearr_23085_23147 = state_23065__$1;
(statearr_23085_23147[(1)] = (15));

} else {
var statearr_23086_23148 = state_23065__$1;
(statearr_23086_23148[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (16))){
var inst_23045 = (state_23065[(11)]);
var state_23065__$1 = state_23065;
var statearr_23087_23149 = state_23065__$1;
(statearr_23087_23149[(2)] = inst_23045);

(statearr_23087_23149[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (10))){
var inst_23037 = (state_23065[(2)]);
var state_23065__$1 = state_23065;
var statearr_23088_23150 = state_23065__$1;
(statearr_23088_23150[(2)] = inst_23037);

(statearr_23088_23150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (18))){
var inst_23048 = (state_23065[(2)]);
var state_23065__$1 = state_23065;
var statearr_23089_23151 = state_23065__$1;
(statearr_23089_23151[(2)] = inst_23048);

(statearr_23089_23151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23066 === (8))){
var inst_23034 = cljs.core.async.close_BANG_.call(null,to);
var state_23065__$1 = state_23065;
var statearr_23090_23152 = state_23065__$1;
(statearr_23090_23152[(2)] = inst_23034);

(statearr_23090_23152[(1)] = (10));


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
});})(c__19796__auto__,jobs,results,process,async))
;
return ((function (switch__19775__auto__,c__19796__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0 = (function (){
var statearr_23094 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23094[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__);

(statearr_23094[(1)] = (1));

return statearr_23094;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1 = (function (state_23065){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_23065);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e23095){if((e23095 instanceof Object)){
var ex__19779__auto__ = e23095;
var statearr_23096_23153 = state_23065;
(statearr_23096_23153[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23065);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23154 = state_23065;
state_23065 = G__23154;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__ = function(state_23065){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1.call(this,state_23065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19776__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto__,jobs,results,process,async))
})();
var state__19798__auto__ = (function (){var statearr_23097 = f__19797__auto__.call(null);
(statearr_23097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto__);

return statearr_23097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto__,jobs,results,process,async))
);

return c__19796__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args23155 = [];
var len__17829__auto___23158 = arguments.length;
var i__17830__auto___23159 = (0);
while(true){
if((i__17830__auto___23159 < len__17829__auto___23158)){
args23155.push((arguments[i__17830__auto___23159]));

var G__23160 = (i__17830__auto___23159 + (1));
i__17830__auto___23159 = G__23160;
continue;
} else {
}
break;
}

var G__23157 = args23155.length;
switch (G__23157) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23155.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args23162 = [];
var len__17829__auto___23165 = arguments.length;
var i__17830__auto___23166 = (0);
while(true){
if((i__17830__auto___23166 < len__17829__auto___23165)){
args23162.push((arguments[i__17830__auto___23166]));

var G__23167 = (i__17830__auto___23166 + (1));
i__17830__auto___23166 = G__23167;
continue;
} else {
}
break;
}

var G__23164 = args23162.length;
switch (G__23164) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23162.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args23169 = [];
var len__17829__auto___23222 = arguments.length;
var i__17830__auto___23223 = (0);
while(true){
if((i__17830__auto___23223 < len__17829__auto___23222)){
args23169.push((arguments[i__17830__auto___23223]));

var G__23224 = (i__17830__auto___23223 + (1));
i__17830__auto___23223 = G__23224;
continue;
} else {
}
break;
}

var G__23171 = args23169.length;
switch (G__23171) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23169.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19796__auto___23226 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___23226,tc,fc){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___23226,tc,fc){
return (function (state_23197){
var state_val_23198 = (state_23197[(1)]);
if((state_val_23198 === (7))){
var inst_23193 = (state_23197[(2)]);
var state_23197__$1 = state_23197;
var statearr_23199_23227 = state_23197__$1;
(statearr_23199_23227[(2)] = inst_23193);

(statearr_23199_23227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (1))){
var state_23197__$1 = state_23197;
var statearr_23200_23228 = state_23197__$1;
(statearr_23200_23228[(2)] = null);

(statearr_23200_23228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (4))){
var inst_23174 = (state_23197[(7)]);
var inst_23174__$1 = (state_23197[(2)]);
var inst_23175 = (inst_23174__$1 == null);
var state_23197__$1 = (function (){var statearr_23201 = state_23197;
(statearr_23201[(7)] = inst_23174__$1);

return statearr_23201;
})();
if(cljs.core.truth_(inst_23175)){
var statearr_23202_23229 = state_23197__$1;
(statearr_23202_23229[(1)] = (5));

} else {
var statearr_23203_23230 = state_23197__$1;
(statearr_23203_23230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (13))){
var state_23197__$1 = state_23197;
var statearr_23204_23231 = state_23197__$1;
(statearr_23204_23231[(2)] = null);

(statearr_23204_23231[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (6))){
var inst_23174 = (state_23197[(7)]);
var inst_23180 = p.call(null,inst_23174);
var state_23197__$1 = state_23197;
if(cljs.core.truth_(inst_23180)){
var statearr_23205_23232 = state_23197__$1;
(statearr_23205_23232[(1)] = (9));

} else {
var statearr_23206_23233 = state_23197__$1;
(statearr_23206_23233[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (3))){
var inst_23195 = (state_23197[(2)]);
var state_23197__$1 = state_23197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23197__$1,inst_23195);
} else {
if((state_val_23198 === (12))){
var state_23197__$1 = state_23197;
var statearr_23207_23234 = state_23197__$1;
(statearr_23207_23234[(2)] = null);

(statearr_23207_23234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (2))){
var state_23197__$1 = state_23197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23197__$1,(4),ch);
} else {
if((state_val_23198 === (11))){
var inst_23174 = (state_23197[(7)]);
var inst_23184 = (state_23197[(2)]);
var state_23197__$1 = state_23197;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23197__$1,(8),inst_23184,inst_23174);
} else {
if((state_val_23198 === (9))){
var state_23197__$1 = state_23197;
var statearr_23208_23235 = state_23197__$1;
(statearr_23208_23235[(2)] = tc);

(statearr_23208_23235[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (5))){
var inst_23177 = cljs.core.async.close_BANG_.call(null,tc);
var inst_23178 = cljs.core.async.close_BANG_.call(null,fc);
var state_23197__$1 = (function (){var statearr_23209 = state_23197;
(statearr_23209[(8)] = inst_23177);

return statearr_23209;
})();
var statearr_23210_23236 = state_23197__$1;
(statearr_23210_23236[(2)] = inst_23178);

(statearr_23210_23236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (14))){
var inst_23191 = (state_23197[(2)]);
var state_23197__$1 = state_23197;
var statearr_23211_23237 = state_23197__$1;
(statearr_23211_23237[(2)] = inst_23191);

(statearr_23211_23237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (10))){
var state_23197__$1 = state_23197;
var statearr_23212_23238 = state_23197__$1;
(statearr_23212_23238[(2)] = fc);

(statearr_23212_23238[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23198 === (8))){
var inst_23186 = (state_23197[(2)]);
var state_23197__$1 = state_23197;
if(cljs.core.truth_(inst_23186)){
var statearr_23213_23239 = state_23197__$1;
(statearr_23213_23239[(1)] = (12));

} else {
var statearr_23214_23240 = state_23197__$1;
(statearr_23214_23240[(1)] = (13));

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
});})(c__19796__auto___23226,tc,fc))
;
return ((function (switch__19775__auto__,c__19796__auto___23226,tc,fc){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_23218 = [null,null,null,null,null,null,null,null,null];
(statearr_23218[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_23218[(1)] = (1));

return statearr_23218;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_23197){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_23197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e23219){if((e23219 instanceof Object)){
var ex__19779__auto__ = e23219;
var statearr_23220_23241 = state_23197;
(statearr_23220_23241[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23219;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23242 = state_23197;
state_23197 = G__23242;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_23197){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_23197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___23226,tc,fc))
})();
var state__19798__auto__ = (function (){var statearr_23221 = f__19797__auto__.call(null);
(statearr_23221[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___23226);

return statearr_23221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___23226,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto__){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto__){
return (function (state_23306){
var state_val_23307 = (state_23306[(1)]);
if((state_val_23307 === (7))){
var inst_23302 = (state_23306[(2)]);
var state_23306__$1 = state_23306;
var statearr_23308_23329 = state_23306__$1;
(statearr_23308_23329[(2)] = inst_23302);

(statearr_23308_23329[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (1))){
var inst_23286 = init;
var state_23306__$1 = (function (){var statearr_23309 = state_23306;
(statearr_23309[(7)] = inst_23286);

return statearr_23309;
})();
var statearr_23310_23330 = state_23306__$1;
(statearr_23310_23330[(2)] = null);

(statearr_23310_23330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (4))){
var inst_23289 = (state_23306[(8)]);
var inst_23289__$1 = (state_23306[(2)]);
var inst_23290 = (inst_23289__$1 == null);
var state_23306__$1 = (function (){var statearr_23311 = state_23306;
(statearr_23311[(8)] = inst_23289__$1);

return statearr_23311;
})();
if(cljs.core.truth_(inst_23290)){
var statearr_23312_23331 = state_23306__$1;
(statearr_23312_23331[(1)] = (5));

} else {
var statearr_23313_23332 = state_23306__$1;
(statearr_23313_23332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (6))){
var inst_23289 = (state_23306[(8)]);
var inst_23293 = (state_23306[(9)]);
var inst_23286 = (state_23306[(7)]);
var inst_23293__$1 = f.call(null,inst_23286,inst_23289);
var inst_23294 = cljs.core.reduced_QMARK_.call(null,inst_23293__$1);
var state_23306__$1 = (function (){var statearr_23314 = state_23306;
(statearr_23314[(9)] = inst_23293__$1);

return statearr_23314;
})();
if(inst_23294){
var statearr_23315_23333 = state_23306__$1;
(statearr_23315_23333[(1)] = (8));

} else {
var statearr_23316_23334 = state_23306__$1;
(statearr_23316_23334[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (3))){
var inst_23304 = (state_23306[(2)]);
var state_23306__$1 = state_23306;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23306__$1,inst_23304);
} else {
if((state_val_23307 === (2))){
var state_23306__$1 = state_23306;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23306__$1,(4),ch);
} else {
if((state_val_23307 === (9))){
var inst_23293 = (state_23306[(9)]);
var inst_23286 = inst_23293;
var state_23306__$1 = (function (){var statearr_23317 = state_23306;
(statearr_23317[(7)] = inst_23286);

return statearr_23317;
})();
var statearr_23318_23335 = state_23306__$1;
(statearr_23318_23335[(2)] = null);

(statearr_23318_23335[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (5))){
var inst_23286 = (state_23306[(7)]);
var state_23306__$1 = state_23306;
var statearr_23319_23336 = state_23306__$1;
(statearr_23319_23336[(2)] = inst_23286);

(statearr_23319_23336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (10))){
var inst_23300 = (state_23306[(2)]);
var state_23306__$1 = state_23306;
var statearr_23320_23337 = state_23306__$1;
(statearr_23320_23337[(2)] = inst_23300);

(statearr_23320_23337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23307 === (8))){
var inst_23293 = (state_23306[(9)]);
var inst_23296 = cljs.core.deref.call(null,inst_23293);
var state_23306__$1 = state_23306;
var statearr_23321_23338 = state_23306__$1;
(statearr_23321_23338[(2)] = inst_23296);

(statearr_23321_23338[(1)] = (10));


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
});})(c__19796__auto__))
;
return ((function (switch__19775__auto__,c__19796__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19776__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19776__auto____0 = (function (){
var statearr_23325 = [null,null,null,null,null,null,null,null,null,null];
(statearr_23325[(0)] = cljs$core$async$reduce_$_state_machine__19776__auto__);

(statearr_23325[(1)] = (1));

return statearr_23325;
});
var cljs$core$async$reduce_$_state_machine__19776__auto____1 = (function (state_23306){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_23306);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e23326){if((e23326 instanceof Object)){
var ex__19779__auto__ = e23326;
var statearr_23327_23339 = state_23306;
(statearr_23327_23339[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23326;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23340 = state_23306;
state_23306 = G__23340;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19776__auto__ = function(state_23306){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19776__auto____1.call(this,state_23306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19776__auto____0;
cljs$core$async$reduce_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19776__auto____1;
return cljs$core$async$reduce_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto__))
})();
var state__19798__auto__ = (function (){var statearr_23328 = f__19797__auto__.call(null);
(statearr_23328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto__);

return statearr_23328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto__))
);

return c__19796__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args23341 = [];
var len__17829__auto___23393 = arguments.length;
var i__17830__auto___23394 = (0);
while(true){
if((i__17830__auto___23394 < len__17829__auto___23393)){
args23341.push((arguments[i__17830__auto___23394]));

var G__23395 = (i__17830__auto___23394 + (1));
i__17830__auto___23394 = G__23395;
continue;
} else {
}
break;
}

var G__23343 = args23341.length;
switch (G__23343) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23341.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto__){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto__){
return (function (state_23368){
var state_val_23369 = (state_23368[(1)]);
if((state_val_23369 === (7))){
var inst_23350 = (state_23368[(2)]);
var state_23368__$1 = state_23368;
var statearr_23370_23397 = state_23368__$1;
(statearr_23370_23397[(2)] = inst_23350);

(statearr_23370_23397[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (1))){
var inst_23344 = cljs.core.seq.call(null,coll);
var inst_23345 = inst_23344;
var state_23368__$1 = (function (){var statearr_23371 = state_23368;
(statearr_23371[(7)] = inst_23345);

return statearr_23371;
})();
var statearr_23372_23398 = state_23368__$1;
(statearr_23372_23398[(2)] = null);

(statearr_23372_23398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (4))){
var inst_23345 = (state_23368[(7)]);
var inst_23348 = cljs.core.first.call(null,inst_23345);
var state_23368__$1 = state_23368;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23368__$1,(7),ch,inst_23348);
} else {
if((state_val_23369 === (13))){
var inst_23362 = (state_23368[(2)]);
var state_23368__$1 = state_23368;
var statearr_23373_23399 = state_23368__$1;
(statearr_23373_23399[(2)] = inst_23362);

(statearr_23373_23399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (6))){
var inst_23353 = (state_23368[(2)]);
var state_23368__$1 = state_23368;
if(cljs.core.truth_(inst_23353)){
var statearr_23374_23400 = state_23368__$1;
(statearr_23374_23400[(1)] = (8));

} else {
var statearr_23375_23401 = state_23368__$1;
(statearr_23375_23401[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (3))){
var inst_23366 = (state_23368[(2)]);
var state_23368__$1 = state_23368;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23368__$1,inst_23366);
} else {
if((state_val_23369 === (12))){
var state_23368__$1 = state_23368;
var statearr_23376_23402 = state_23368__$1;
(statearr_23376_23402[(2)] = null);

(statearr_23376_23402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (2))){
var inst_23345 = (state_23368[(7)]);
var state_23368__$1 = state_23368;
if(cljs.core.truth_(inst_23345)){
var statearr_23377_23403 = state_23368__$1;
(statearr_23377_23403[(1)] = (4));

} else {
var statearr_23378_23404 = state_23368__$1;
(statearr_23378_23404[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (11))){
var inst_23359 = cljs.core.async.close_BANG_.call(null,ch);
var state_23368__$1 = state_23368;
var statearr_23379_23405 = state_23368__$1;
(statearr_23379_23405[(2)] = inst_23359);

(statearr_23379_23405[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (9))){
var state_23368__$1 = state_23368;
if(cljs.core.truth_(close_QMARK_)){
var statearr_23380_23406 = state_23368__$1;
(statearr_23380_23406[(1)] = (11));

} else {
var statearr_23381_23407 = state_23368__$1;
(statearr_23381_23407[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (5))){
var inst_23345 = (state_23368[(7)]);
var state_23368__$1 = state_23368;
var statearr_23382_23408 = state_23368__$1;
(statearr_23382_23408[(2)] = inst_23345);

(statearr_23382_23408[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (10))){
var inst_23364 = (state_23368[(2)]);
var state_23368__$1 = state_23368;
var statearr_23383_23409 = state_23368__$1;
(statearr_23383_23409[(2)] = inst_23364);

(statearr_23383_23409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23369 === (8))){
var inst_23345 = (state_23368[(7)]);
var inst_23355 = cljs.core.next.call(null,inst_23345);
var inst_23345__$1 = inst_23355;
var state_23368__$1 = (function (){var statearr_23384 = state_23368;
(statearr_23384[(7)] = inst_23345__$1);

return statearr_23384;
})();
var statearr_23385_23410 = state_23368__$1;
(statearr_23385_23410[(2)] = null);

(statearr_23385_23410[(1)] = (2));


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
});})(c__19796__auto__))
;
return ((function (switch__19775__auto__,c__19796__auto__){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_23389 = [null,null,null,null,null,null,null,null];
(statearr_23389[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_23389[(1)] = (1));

return statearr_23389;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_23368){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_23368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e23390){if((e23390 instanceof Object)){
var ex__19779__auto__ = e23390;
var statearr_23391_23411 = state_23368;
(statearr_23391_23411[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23412 = state_23368;
state_23368 = G__23412;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_23368){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_23368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto__))
})();
var state__19798__auto__ = (function (){var statearr_23392 = f__19797__auto__.call(null);
(statearr_23392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto__);

return statearr_23392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto__))
);

return c__19796__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17426__auto__ = (((_ == null))?null:_);
var m__17427__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,_);
} else {
var m__17427__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23634 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23634 = (function (mult,ch,cs,meta23635){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23635 = meta23635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23636,meta23635__$1){
var self__ = this;
var _23636__$1 = this;
return (new cljs.core.async.t_cljs$core$async23634(self__.mult,self__.ch,self__.cs,meta23635__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23634.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23636){
var self__ = this;
var _23636__$1 = this;
return self__.meta23635;
});})(cs))
;

cljs.core.async.t_cljs$core$async23634.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23634.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23634.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23634.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23634.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23634.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23634.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23635","meta23635",197348723,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23634.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23634.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23634";

cljs.core.async.t_cljs$core$async23634.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async23634");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23634 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23634(mult__$1,ch__$1,cs__$1,meta23635){
return (new cljs.core.async.t_cljs$core$async23634(mult__$1,ch__$1,cs__$1,meta23635));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23634(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19796__auto___23855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___23855,cs,m,dchan,dctr,done){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___23855,cs,m,dchan,dctr,done){
return (function (state_23767){
var state_val_23768 = (state_23767[(1)]);
if((state_val_23768 === (7))){
var inst_23763 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23769_23856 = state_23767__$1;
(statearr_23769_23856[(2)] = inst_23763);

(statearr_23769_23856[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (20))){
var inst_23668 = (state_23767[(7)]);
var inst_23678 = cljs.core.first.call(null,inst_23668);
var inst_23679 = cljs.core.nth.call(null,inst_23678,(0),null);
var inst_23680 = cljs.core.nth.call(null,inst_23678,(1),null);
var state_23767__$1 = (function (){var statearr_23770 = state_23767;
(statearr_23770[(8)] = inst_23679);

return statearr_23770;
})();
if(cljs.core.truth_(inst_23680)){
var statearr_23771_23857 = state_23767__$1;
(statearr_23771_23857[(1)] = (22));

} else {
var statearr_23772_23858 = state_23767__$1;
(statearr_23772_23858[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (27))){
var inst_23710 = (state_23767[(9)]);
var inst_23708 = (state_23767[(10)]);
var inst_23639 = (state_23767[(11)]);
var inst_23715 = (state_23767[(12)]);
var inst_23715__$1 = cljs.core._nth.call(null,inst_23708,inst_23710);
var inst_23716 = cljs.core.async.put_BANG_.call(null,inst_23715__$1,inst_23639,done);
var state_23767__$1 = (function (){var statearr_23773 = state_23767;
(statearr_23773[(12)] = inst_23715__$1);

return statearr_23773;
})();
if(cljs.core.truth_(inst_23716)){
var statearr_23774_23859 = state_23767__$1;
(statearr_23774_23859[(1)] = (30));

} else {
var statearr_23775_23860 = state_23767__$1;
(statearr_23775_23860[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (1))){
var state_23767__$1 = state_23767;
var statearr_23776_23861 = state_23767__$1;
(statearr_23776_23861[(2)] = null);

(statearr_23776_23861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (24))){
var inst_23668 = (state_23767[(7)]);
var inst_23685 = (state_23767[(2)]);
var inst_23686 = cljs.core.next.call(null,inst_23668);
var inst_23648 = inst_23686;
var inst_23649 = null;
var inst_23650 = (0);
var inst_23651 = (0);
var state_23767__$1 = (function (){var statearr_23777 = state_23767;
(statearr_23777[(13)] = inst_23651);

(statearr_23777[(14)] = inst_23649);

(statearr_23777[(15)] = inst_23650);

(statearr_23777[(16)] = inst_23685);

(statearr_23777[(17)] = inst_23648);

return statearr_23777;
})();
var statearr_23778_23862 = state_23767__$1;
(statearr_23778_23862[(2)] = null);

(statearr_23778_23862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (39))){
var state_23767__$1 = state_23767;
var statearr_23782_23863 = state_23767__$1;
(statearr_23782_23863[(2)] = null);

(statearr_23782_23863[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (4))){
var inst_23639 = (state_23767[(11)]);
var inst_23639__$1 = (state_23767[(2)]);
var inst_23640 = (inst_23639__$1 == null);
var state_23767__$1 = (function (){var statearr_23783 = state_23767;
(statearr_23783[(11)] = inst_23639__$1);

return statearr_23783;
})();
if(cljs.core.truth_(inst_23640)){
var statearr_23784_23864 = state_23767__$1;
(statearr_23784_23864[(1)] = (5));

} else {
var statearr_23785_23865 = state_23767__$1;
(statearr_23785_23865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (15))){
var inst_23651 = (state_23767[(13)]);
var inst_23649 = (state_23767[(14)]);
var inst_23650 = (state_23767[(15)]);
var inst_23648 = (state_23767[(17)]);
var inst_23664 = (state_23767[(2)]);
var inst_23665 = (inst_23651 + (1));
var tmp23779 = inst_23649;
var tmp23780 = inst_23650;
var tmp23781 = inst_23648;
var inst_23648__$1 = tmp23781;
var inst_23649__$1 = tmp23779;
var inst_23650__$1 = tmp23780;
var inst_23651__$1 = inst_23665;
var state_23767__$1 = (function (){var statearr_23786 = state_23767;
(statearr_23786[(13)] = inst_23651__$1);

(statearr_23786[(14)] = inst_23649__$1);

(statearr_23786[(15)] = inst_23650__$1);

(statearr_23786[(18)] = inst_23664);

(statearr_23786[(17)] = inst_23648__$1);

return statearr_23786;
})();
var statearr_23787_23866 = state_23767__$1;
(statearr_23787_23866[(2)] = null);

(statearr_23787_23866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (21))){
var inst_23689 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23791_23867 = state_23767__$1;
(statearr_23791_23867[(2)] = inst_23689);

(statearr_23791_23867[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (31))){
var inst_23715 = (state_23767[(12)]);
var inst_23719 = done.call(null,null);
var inst_23720 = cljs.core.async.untap_STAR_.call(null,m,inst_23715);
var state_23767__$1 = (function (){var statearr_23792 = state_23767;
(statearr_23792[(19)] = inst_23719);

return statearr_23792;
})();
var statearr_23793_23868 = state_23767__$1;
(statearr_23793_23868[(2)] = inst_23720);

(statearr_23793_23868[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (32))){
var inst_23710 = (state_23767[(9)]);
var inst_23708 = (state_23767[(10)]);
var inst_23709 = (state_23767[(20)]);
var inst_23707 = (state_23767[(21)]);
var inst_23722 = (state_23767[(2)]);
var inst_23723 = (inst_23710 + (1));
var tmp23788 = inst_23708;
var tmp23789 = inst_23709;
var tmp23790 = inst_23707;
var inst_23707__$1 = tmp23790;
var inst_23708__$1 = tmp23788;
var inst_23709__$1 = tmp23789;
var inst_23710__$1 = inst_23723;
var state_23767__$1 = (function (){var statearr_23794 = state_23767;
(statearr_23794[(22)] = inst_23722);

(statearr_23794[(9)] = inst_23710__$1);

(statearr_23794[(10)] = inst_23708__$1);

(statearr_23794[(20)] = inst_23709__$1);

(statearr_23794[(21)] = inst_23707__$1);

return statearr_23794;
})();
var statearr_23795_23869 = state_23767__$1;
(statearr_23795_23869[(2)] = null);

(statearr_23795_23869[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (40))){
var inst_23735 = (state_23767[(23)]);
var inst_23739 = done.call(null,null);
var inst_23740 = cljs.core.async.untap_STAR_.call(null,m,inst_23735);
var state_23767__$1 = (function (){var statearr_23796 = state_23767;
(statearr_23796[(24)] = inst_23739);

return statearr_23796;
})();
var statearr_23797_23870 = state_23767__$1;
(statearr_23797_23870[(2)] = inst_23740);

(statearr_23797_23870[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (33))){
var inst_23726 = (state_23767[(25)]);
var inst_23728 = cljs.core.chunked_seq_QMARK_.call(null,inst_23726);
var state_23767__$1 = state_23767;
if(inst_23728){
var statearr_23798_23871 = state_23767__$1;
(statearr_23798_23871[(1)] = (36));

} else {
var statearr_23799_23872 = state_23767__$1;
(statearr_23799_23872[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (13))){
var inst_23658 = (state_23767[(26)]);
var inst_23661 = cljs.core.async.close_BANG_.call(null,inst_23658);
var state_23767__$1 = state_23767;
var statearr_23800_23873 = state_23767__$1;
(statearr_23800_23873[(2)] = inst_23661);

(statearr_23800_23873[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (22))){
var inst_23679 = (state_23767[(8)]);
var inst_23682 = cljs.core.async.close_BANG_.call(null,inst_23679);
var state_23767__$1 = state_23767;
var statearr_23801_23874 = state_23767__$1;
(statearr_23801_23874[(2)] = inst_23682);

(statearr_23801_23874[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (36))){
var inst_23726 = (state_23767[(25)]);
var inst_23730 = cljs.core.chunk_first.call(null,inst_23726);
var inst_23731 = cljs.core.chunk_rest.call(null,inst_23726);
var inst_23732 = cljs.core.count.call(null,inst_23730);
var inst_23707 = inst_23731;
var inst_23708 = inst_23730;
var inst_23709 = inst_23732;
var inst_23710 = (0);
var state_23767__$1 = (function (){var statearr_23802 = state_23767;
(statearr_23802[(9)] = inst_23710);

(statearr_23802[(10)] = inst_23708);

(statearr_23802[(20)] = inst_23709);

(statearr_23802[(21)] = inst_23707);

return statearr_23802;
})();
var statearr_23803_23875 = state_23767__$1;
(statearr_23803_23875[(2)] = null);

(statearr_23803_23875[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (41))){
var inst_23726 = (state_23767[(25)]);
var inst_23742 = (state_23767[(2)]);
var inst_23743 = cljs.core.next.call(null,inst_23726);
var inst_23707 = inst_23743;
var inst_23708 = null;
var inst_23709 = (0);
var inst_23710 = (0);
var state_23767__$1 = (function (){var statearr_23804 = state_23767;
(statearr_23804[(9)] = inst_23710);

(statearr_23804[(10)] = inst_23708);

(statearr_23804[(20)] = inst_23709);

(statearr_23804[(27)] = inst_23742);

(statearr_23804[(21)] = inst_23707);

return statearr_23804;
})();
var statearr_23805_23876 = state_23767__$1;
(statearr_23805_23876[(2)] = null);

(statearr_23805_23876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (43))){
var state_23767__$1 = state_23767;
var statearr_23806_23877 = state_23767__$1;
(statearr_23806_23877[(2)] = null);

(statearr_23806_23877[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (29))){
var inst_23751 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23807_23878 = state_23767__$1;
(statearr_23807_23878[(2)] = inst_23751);

(statearr_23807_23878[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (44))){
var inst_23760 = (state_23767[(2)]);
var state_23767__$1 = (function (){var statearr_23808 = state_23767;
(statearr_23808[(28)] = inst_23760);

return statearr_23808;
})();
var statearr_23809_23879 = state_23767__$1;
(statearr_23809_23879[(2)] = null);

(statearr_23809_23879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (6))){
var inst_23699 = (state_23767[(29)]);
var inst_23698 = cljs.core.deref.call(null,cs);
var inst_23699__$1 = cljs.core.keys.call(null,inst_23698);
var inst_23700 = cljs.core.count.call(null,inst_23699__$1);
var inst_23701 = cljs.core.reset_BANG_.call(null,dctr,inst_23700);
var inst_23706 = cljs.core.seq.call(null,inst_23699__$1);
var inst_23707 = inst_23706;
var inst_23708 = null;
var inst_23709 = (0);
var inst_23710 = (0);
var state_23767__$1 = (function (){var statearr_23810 = state_23767;
(statearr_23810[(9)] = inst_23710);

(statearr_23810[(10)] = inst_23708);

(statearr_23810[(20)] = inst_23709);

(statearr_23810[(29)] = inst_23699__$1);

(statearr_23810[(30)] = inst_23701);

(statearr_23810[(21)] = inst_23707);

return statearr_23810;
})();
var statearr_23811_23880 = state_23767__$1;
(statearr_23811_23880[(2)] = null);

(statearr_23811_23880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (28))){
var inst_23726 = (state_23767[(25)]);
var inst_23707 = (state_23767[(21)]);
var inst_23726__$1 = cljs.core.seq.call(null,inst_23707);
var state_23767__$1 = (function (){var statearr_23812 = state_23767;
(statearr_23812[(25)] = inst_23726__$1);

return statearr_23812;
})();
if(inst_23726__$1){
var statearr_23813_23881 = state_23767__$1;
(statearr_23813_23881[(1)] = (33));

} else {
var statearr_23814_23882 = state_23767__$1;
(statearr_23814_23882[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (25))){
var inst_23710 = (state_23767[(9)]);
var inst_23709 = (state_23767[(20)]);
var inst_23712 = (inst_23710 < inst_23709);
var inst_23713 = inst_23712;
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23713)){
var statearr_23815_23883 = state_23767__$1;
(statearr_23815_23883[(1)] = (27));

} else {
var statearr_23816_23884 = state_23767__$1;
(statearr_23816_23884[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (34))){
var state_23767__$1 = state_23767;
var statearr_23817_23885 = state_23767__$1;
(statearr_23817_23885[(2)] = null);

(statearr_23817_23885[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (17))){
var state_23767__$1 = state_23767;
var statearr_23818_23886 = state_23767__$1;
(statearr_23818_23886[(2)] = null);

(statearr_23818_23886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (3))){
var inst_23765 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23767__$1,inst_23765);
} else {
if((state_val_23768 === (12))){
var inst_23694 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23819_23887 = state_23767__$1;
(statearr_23819_23887[(2)] = inst_23694);

(statearr_23819_23887[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (2))){
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(4),ch);
} else {
if((state_val_23768 === (23))){
var state_23767__$1 = state_23767;
var statearr_23820_23888 = state_23767__$1;
(statearr_23820_23888[(2)] = null);

(statearr_23820_23888[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (35))){
var inst_23749 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23821_23889 = state_23767__$1;
(statearr_23821_23889[(2)] = inst_23749);

(statearr_23821_23889[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (19))){
var inst_23668 = (state_23767[(7)]);
var inst_23672 = cljs.core.chunk_first.call(null,inst_23668);
var inst_23673 = cljs.core.chunk_rest.call(null,inst_23668);
var inst_23674 = cljs.core.count.call(null,inst_23672);
var inst_23648 = inst_23673;
var inst_23649 = inst_23672;
var inst_23650 = inst_23674;
var inst_23651 = (0);
var state_23767__$1 = (function (){var statearr_23822 = state_23767;
(statearr_23822[(13)] = inst_23651);

(statearr_23822[(14)] = inst_23649);

(statearr_23822[(15)] = inst_23650);

(statearr_23822[(17)] = inst_23648);

return statearr_23822;
})();
var statearr_23823_23890 = state_23767__$1;
(statearr_23823_23890[(2)] = null);

(statearr_23823_23890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (11))){
var inst_23668 = (state_23767[(7)]);
var inst_23648 = (state_23767[(17)]);
var inst_23668__$1 = cljs.core.seq.call(null,inst_23648);
var state_23767__$1 = (function (){var statearr_23824 = state_23767;
(statearr_23824[(7)] = inst_23668__$1);

return statearr_23824;
})();
if(inst_23668__$1){
var statearr_23825_23891 = state_23767__$1;
(statearr_23825_23891[(1)] = (16));

} else {
var statearr_23826_23892 = state_23767__$1;
(statearr_23826_23892[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (9))){
var inst_23696 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23827_23893 = state_23767__$1;
(statearr_23827_23893[(2)] = inst_23696);

(statearr_23827_23893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (5))){
var inst_23646 = cljs.core.deref.call(null,cs);
var inst_23647 = cljs.core.seq.call(null,inst_23646);
var inst_23648 = inst_23647;
var inst_23649 = null;
var inst_23650 = (0);
var inst_23651 = (0);
var state_23767__$1 = (function (){var statearr_23828 = state_23767;
(statearr_23828[(13)] = inst_23651);

(statearr_23828[(14)] = inst_23649);

(statearr_23828[(15)] = inst_23650);

(statearr_23828[(17)] = inst_23648);

return statearr_23828;
})();
var statearr_23829_23894 = state_23767__$1;
(statearr_23829_23894[(2)] = null);

(statearr_23829_23894[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (14))){
var state_23767__$1 = state_23767;
var statearr_23830_23895 = state_23767__$1;
(statearr_23830_23895[(2)] = null);

(statearr_23830_23895[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (45))){
var inst_23757 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23831_23896 = state_23767__$1;
(statearr_23831_23896[(2)] = inst_23757);

(statearr_23831_23896[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (26))){
var inst_23699 = (state_23767[(29)]);
var inst_23753 = (state_23767[(2)]);
var inst_23754 = cljs.core.seq.call(null,inst_23699);
var state_23767__$1 = (function (){var statearr_23832 = state_23767;
(statearr_23832[(31)] = inst_23753);

return statearr_23832;
})();
if(inst_23754){
var statearr_23833_23897 = state_23767__$1;
(statearr_23833_23897[(1)] = (42));

} else {
var statearr_23834_23898 = state_23767__$1;
(statearr_23834_23898[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (16))){
var inst_23668 = (state_23767[(7)]);
var inst_23670 = cljs.core.chunked_seq_QMARK_.call(null,inst_23668);
var state_23767__$1 = state_23767;
if(inst_23670){
var statearr_23835_23899 = state_23767__$1;
(statearr_23835_23899[(1)] = (19));

} else {
var statearr_23836_23900 = state_23767__$1;
(statearr_23836_23900[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (38))){
var inst_23746 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23837_23901 = state_23767__$1;
(statearr_23837_23901[(2)] = inst_23746);

(statearr_23837_23901[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (30))){
var state_23767__$1 = state_23767;
var statearr_23838_23902 = state_23767__$1;
(statearr_23838_23902[(2)] = null);

(statearr_23838_23902[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (10))){
var inst_23651 = (state_23767[(13)]);
var inst_23649 = (state_23767[(14)]);
var inst_23657 = cljs.core._nth.call(null,inst_23649,inst_23651);
var inst_23658 = cljs.core.nth.call(null,inst_23657,(0),null);
var inst_23659 = cljs.core.nth.call(null,inst_23657,(1),null);
var state_23767__$1 = (function (){var statearr_23839 = state_23767;
(statearr_23839[(26)] = inst_23658);

return statearr_23839;
})();
if(cljs.core.truth_(inst_23659)){
var statearr_23840_23903 = state_23767__$1;
(statearr_23840_23903[(1)] = (13));

} else {
var statearr_23841_23904 = state_23767__$1;
(statearr_23841_23904[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (18))){
var inst_23692 = (state_23767[(2)]);
var state_23767__$1 = state_23767;
var statearr_23842_23905 = state_23767__$1;
(statearr_23842_23905[(2)] = inst_23692);

(statearr_23842_23905[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (42))){
var state_23767__$1 = state_23767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23767__$1,(45),dchan);
} else {
if((state_val_23768 === (37))){
var inst_23639 = (state_23767[(11)]);
var inst_23735 = (state_23767[(23)]);
var inst_23726 = (state_23767[(25)]);
var inst_23735__$1 = cljs.core.first.call(null,inst_23726);
var inst_23736 = cljs.core.async.put_BANG_.call(null,inst_23735__$1,inst_23639,done);
var state_23767__$1 = (function (){var statearr_23843 = state_23767;
(statearr_23843[(23)] = inst_23735__$1);

return statearr_23843;
})();
if(cljs.core.truth_(inst_23736)){
var statearr_23844_23906 = state_23767__$1;
(statearr_23844_23906[(1)] = (39));

} else {
var statearr_23845_23907 = state_23767__$1;
(statearr_23845_23907[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23768 === (8))){
var inst_23651 = (state_23767[(13)]);
var inst_23650 = (state_23767[(15)]);
var inst_23653 = (inst_23651 < inst_23650);
var inst_23654 = inst_23653;
var state_23767__$1 = state_23767;
if(cljs.core.truth_(inst_23654)){
var statearr_23846_23908 = state_23767__$1;
(statearr_23846_23908[(1)] = (10));

} else {
var statearr_23847_23909 = state_23767__$1;
(statearr_23847_23909[(1)] = (11));

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
});})(c__19796__auto___23855,cs,m,dchan,dctr,done))
;
return ((function (switch__19775__auto__,c__19796__auto___23855,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19776__auto__ = null;
var cljs$core$async$mult_$_state_machine__19776__auto____0 = (function (){
var statearr_23851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23851[(0)] = cljs$core$async$mult_$_state_machine__19776__auto__);

(statearr_23851[(1)] = (1));

return statearr_23851;
});
var cljs$core$async$mult_$_state_machine__19776__auto____1 = (function (state_23767){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_23767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e23852){if((e23852 instanceof Object)){
var ex__19779__auto__ = e23852;
var statearr_23853_23910 = state_23767;
(statearr_23853_23910[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23911 = state_23767;
state_23767 = G__23911;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19776__auto__ = function(state_23767){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19776__auto____1.call(this,state_23767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19776__auto____0;
cljs$core$async$mult_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19776__auto____1;
return cljs$core$async$mult_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___23855,cs,m,dchan,dctr,done))
})();
var state__19798__auto__ = (function (){var statearr_23854 = f__19797__auto__.call(null);
(statearr_23854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___23855);

return statearr_23854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___23855,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23912 = [];
var len__17829__auto___23915 = arguments.length;
var i__17830__auto___23916 = (0);
while(true){
if((i__17830__auto___23916 < len__17829__auto___23915)){
args23912.push((arguments[i__17830__auto___23916]));

var G__23917 = (i__17830__auto___23916 + (1));
i__17830__auto___23916 = G__23917;
continue;
} else {
}
break;
}

var G__23914 = args23912.length;
switch (G__23914) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23912.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m);
} else {
var m__17427__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,state_map);
} else {
var m__17427__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17426__auto__ = (((m == null))?null:m);
var m__17427__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,m,mode);
} else {
var m__17427__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17836__auto__ = [];
var len__17829__auto___23929 = arguments.length;
var i__17830__auto___23930 = (0);
while(true){
if((i__17830__auto___23930 < len__17829__auto___23929)){
args__17836__auto__.push((arguments[i__17830__auto___23930]));

var G__23931 = (i__17830__auto___23930 + (1));
i__17830__auto___23930 = G__23931;
continue;
} else {
}
break;
}

var argseq__17837__auto__ = ((((3) < args__17836__auto__.length))?(new cljs.core.IndexedSeq(args__17836__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17837__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23923){
var map__23924 = p__23923;
var map__23924__$1 = ((((!((map__23924 == null)))?((((map__23924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23924):map__23924);
var opts = map__23924__$1;
var statearr_23926_23932 = state;
(statearr_23926_23932[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23924,map__23924__$1,opts){
return (function (val){
var statearr_23927_23933 = state;
(statearr_23927_23933[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23924,map__23924__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23928_23934 = state;
(statearr_23928_23934[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23919){
var G__23920 = cljs.core.first.call(null,seq23919);
var seq23919__$1 = cljs.core.next.call(null,seq23919);
var G__23921 = cljs.core.first.call(null,seq23919__$1);
var seq23919__$2 = cljs.core.next.call(null,seq23919__$1);
var G__23922 = cljs.core.first.call(null,seq23919__$2);
var seq23919__$3 = cljs.core.next.call(null,seq23919__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23920,G__23921,G__23922,seq23919__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async24098 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24098 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta24099){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta24099 = meta24099;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24100,meta24099__$1){
var self__ = this;
var _24100__$1 = this;
return (new cljs.core.async.t_cljs$core$async24098(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta24099__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_24100){
var self__ = this;
var _24100__$1 = this;
return self__.meta24099;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta24099","meta24099",-964559483,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async24098.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24098.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24098";

cljs.core.async.t_cljs$core$async24098.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24098");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async24098 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async24098(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24099){
return (new cljs.core.async.t_cljs$core$async24098(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta24099));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async24098(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19796__auto___24261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___24261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___24261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_24198){
var state_val_24199 = (state_24198[(1)]);
if((state_val_24199 === (7))){
var inst_24116 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24200_24262 = state_24198__$1;
(statearr_24200_24262[(2)] = inst_24116);

(statearr_24200_24262[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (20))){
var inst_24128 = (state_24198[(7)]);
var state_24198__$1 = state_24198;
var statearr_24201_24263 = state_24198__$1;
(statearr_24201_24263[(2)] = inst_24128);

(statearr_24201_24263[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (27))){
var state_24198__$1 = state_24198;
var statearr_24202_24264 = state_24198__$1;
(statearr_24202_24264[(2)] = null);

(statearr_24202_24264[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (1))){
var inst_24104 = (state_24198[(8)]);
var inst_24104__$1 = calc_state.call(null);
var inst_24106 = (inst_24104__$1 == null);
var inst_24107 = cljs.core.not.call(null,inst_24106);
var state_24198__$1 = (function (){var statearr_24203 = state_24198;
(statearr_24203[(8)] = inst_24104__$1);

return statearr_24203;
})();
if(inst_24107){
var statearr_24204_24265 = state_24198__$1;
(statearr_24204_24265[(1)] = (2));

} else {
var statearr_24205_24266 = state_24198__$1;
(statearr_24205_24266[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (24))){
var inst_24172 = (state_24198[(9)]);
var inst_24158 = (state_24198[(10)]);
var inst_24151 = (state_24198[(11)]);
var inst_24172__$1 = inst_24151.call(null,inst_24158);
var state_24198__$1 = (function (){var statearr_24206 = state_24198;
(statearr_24206[(9)] = inst_24172__$1);

return statearr_24206;
})();
if(cljs.core.truth_(inst_24172__$1)){
var statearr_24207_24267 = state_24198__$1;
(statearr_24207_24267[(1)] = (29));

} else {
var statearr_24208_24268 = state_24198__$1;
(statearr_24208_24268[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (4))){
var inst_24119 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24119)){
var statearr_24209_24269 = state_24198__$1;
(statearr_24209_24269[(1)] = (8));

} else {
var statearr_24210_24270 = state_24198__$1;
(statearr_24210_24270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (15))){
var inst_24145 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24145)){
var statearr_24211_24271 = state_24198__$1;
(statearr_24211_24271[(1)] = (19));

} else {
var statearr_24212_24272 = state_24198__$1;
(statearr_24212_24272[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (21))){
var inst_24150 = (state_24198[(12)]);
var inst_24150__$1 = (state_24198[(2)]);
var inst_24151 = cljs.core.get.call(null,inst_24150__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24152 = cljs.core.get.call(null,inst_24150__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24153 = cljs.core.get.call(null,inst_24150__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_24198__$1 = (function (){var statearr_24213 = state_24198;
(statearr_24213[(13)] = inst_24152);

(statearr_24213[(12)] = inst_24150__$1);

(statearr_24213[(11)] = inst_24151);

return statearr_24213;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_24198__$1,(22),inst_24153);
} else {
if((state_val_24199 === (31))){
var inst_24180 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24180)){
var statearr_24214_24273 = state_24198__$1;
(statearr_24214_24273[(1)] = (32));

} else {
var statearr_24215_24274 = state_24198__$1;
(statearr_24215_24274[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (32))){
var inst_24157 = (state_24198[(14)]);
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24198__$1,(35),out,inst_24157);
} else {
if((state_val_24199 === (33))){
var inst_24150 = (state_24198[(12)]);
var inst_24128 = inst_24150;
var state_24198__$1 = (function (){var statearr_24216 = state_24198;
(statearr_24216[(7)] = inst_24128);

return statearr_24216;
})();
var statearr_24217_24275 = state_24198__$1;
(statearr_24217_24275[(2)] = null);

(statearr_24217_24275[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (13))){
var inst_24128 = (state_24198[(7)]);
var inst_24135 = inst_24128.cljs$lang$protocol_mask$partition0$;
var inst_24136 = (inst_24135 & (64));
var inst_24137 = inst_24128.cljs$core$ISeq$;
var inst_24138 = (inst_24136) || (inst_24137);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24138)){
var statearr_24218_24276 = state_24198__$1;
(statearr_24218_24276[(1)] = (16));

} else {
var statearr_24219_24277 = state_24198__$1;
(statearr_24219_24277[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (22))){
var inst_24157 = (state_24198[(14)]);
var inst_24158 = (state_24198[(10)]);
var inst_24156 = (state_24198[(2)]);
var inst_24157__$1 = cljs.core.nth.call(null,inst_24156,(0),null);
var inst_24158__$1 = cljs.core.nth.call(null,inst_24156,(1),null);
var inst_24159 = (inst_24157__$1 == null);
var inst_24160 = cljs.core._EQ_.call(null,inst_24158__$1,change);
var inst_24161 = (inst_24159) || (inst_24160);
var state_24198__$1 = (function (){var statearr_24220 = state_24198;
(statearr_24220[(14)] = inst_24157__$1);

(statearr_24220[(10)] = inst_24158__$1);

return statearr_24220;
})();
if(cljs.core.truth_(inst_24161)){
var statearr_24221_24278 = state_24198__$1;
(statearr_24221_24278[(1)] = (23));

} else {
var statearr_24222_24279 = state_24198__$1;
(statearr_24222_24279[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (36))){
var inst_24150 = (state_24198[(12)]);
var inst_24128 = inst_24150;
var state_24198__$1 = (function (){var statearr_24223 = state_24198;
(statearr_24223[(7)] = inst_24128);

return statearr_24223;
})();
var statearr_24224_24280 = state_24198__$1;
(statearr_24224_24280[(2)] = null);

(statearr_24224_24280[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (29))){
var inst_24172 = (state_24198[(9)]);
var state_24198__$1 = state_24198;
var statearr_24225_24281 = state_24198__$1;
(statearr_24225_24281[(2)] = inst_24172);

(statearr_24225_24281[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (6))){
var state_24198__$1 = state_24198;
var statearr_24226_24282 = state_24198__$1;
(statearr_24226_24282[(2)] = false);

(statearr_24226_24282[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (28))){
var inst_24168 = (state_24198[(2)]);
var inst_24169 = calc_state.call(null);
var inst_24128 = inst_24169;
var state_24198__$1 = (function (){var statearr_24227 = state_24198;
(statearr_24227[(7)] = inst_24128);

(statearr_24227[(15)] = inst_24168);

return statearr_24227;
})();
var statearr_24228_24283 = state_24198__$1;
(statearr_24228_24283[(2)] = null);

(statearr_24228_24283[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (25))){
var inst_24194 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24229_24284 = state_24198__$1;
(statearr_24229_24284[(2)] = inst_24194);

(statearr_24229_24284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (34))){
var inst_24192 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24230_24285 = state_24198__$1;
(statearr_24230_24285[(2)] = inst_24192);

(statearr_24230_24285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (17))){
var state_24198__$1 = state_24198;
var statearr_24231_24286 = state_24198__$1;
(statearr_24231_24286[(2)] = false);

(statearr_24231_24286[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (3))){
var state_24198__$1 = state_24198;
var statearr_24232_24287 = state_24198__$1;
(statearr_24232_24287[(2)] = false);

(statearr_24232_24287[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (12))){
var inst_24196 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24198__$1,inst_24196);
} else {
if((state_val_24199 === (2))){
var inst_24104 = (state_24198[(8)]);
var inst_24109 = inst_24104.cljs$lang$protocol_mask$partition0$;
var inst_24110 = (inst_24109 & (64));
var inst_24111 = inst_24104.cljs$core$ISeq$;
var inst_24112 = (inst_24110) || (inst_24111);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24112)){
var statearr_24233_24288 = state_24198__$1;
(statearr_24233_24288[(1)] = (5));

} else {
var statearr_24234_24289 = state_24198__$1;
(statearr_24234_24289[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (23))){
var inst_24157 = (state_24198[(14)]);
var inst_24163 = (inst_24157 == null);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24163)){
var statearr_24235_24290 = state_24198__$1;
(statearr_24235_24290[(1)] = (26));

} else {
var statearr_24236_24291 = state_24198__$1;
(statearr_24236_24291[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (35))){
var inst_24183 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
if(cljs.core.truth_(inst_24183)){
var statearr_24237_24292 = state_24198__$1;
(statearr_24237_24292[(1)] = (36));

} else {
var statearr_24238_24293 = state_24198__$1;
(statearr_24238_24293[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (19))){
var inst_24128 = (state_24198[(7)]);
var inst_24147 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24128);
var state_24198__$1 = state_24198;
var statearr_24239_24294 = state_24198__$1;
(statearr_24239_24294[(2)] = inst_24147);

(statearr_24239_24294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (11))){
var inst_24128 = (state_24198[(7)]);
var inst_24132 = (inst_24128 == null);
var inst_24133 = cljs.core.not.call(null,inst_24132);
var state_24198__$1 = state_24198;
if(inst_24133){
var statearr_24240_24295 = state_24198__$1;
(statearr_24240_24295[(1)] = (13));

} else {
var statearr_24241_24296 = state_24198__$1;
(statearr_24241_24296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (9))){
var inst_24104 = (state_24198[(8)]);
var state_24198__$1 = state_24198;
var statearr_24242_24297 = state_24198__$1;
(statearr_24242_24297[(2)] = inst_24104);

(statearr_24242_24297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (5))){
var state_24198__$1 = state_24198;
var statearr_24243_24298 = state_24198__$1;
(statearr_24243_24298[(2)] = true);

(statearr_24243_24298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (14))){
var state_24198__$1 = state_24198;
var statearr_24244_24299 = state_24198__$1;
(statearr_24244_24299[(2)] = false);

(statearr_24244_24299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (26))){
var inst_24158 = (state_24198[(10)]);
var inst_24165 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_24158);
var state_24198__$1 = state_24198;
var statearr_24245_24300 = state_24198__$1;
(statearr_24245_24300[(2)] = inst_24165);

(statearr_24245_24300[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (16))){
var state_24198__$1 = state_24198;
var statearr_24246_24301 = state_24198__$1;
(statearr_24246_24301[(2)] = true);

(statearr_24246_24301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (38))){
var inst_24188 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24247_24302 = state_24198__$1;
(statearr_24247_24302[(2)] = inst_24188);

(statearr_24247_24302[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (30))){
var inst_24152 = (state_24198[(13)]);
var inst_24158 = (state_24198[(10)]);
var inst_24151 = (state_24198[(11)]);
var inst_24175 = cljs.core.empty_QMARK_.call(null,inst_24151);
var inst_24176 = inst_24152.call(null,inst_24158);
var inst_24177 = cljs.core.not.call(null,inst_24176);
var inst_24178 = (inst_24175) && (inst_24177);
var state_24198__$1 = state_24198;
var statearr_24248_24303 = state_24198__$1;
(statearr_24248_24303[(2)] = inst_24178);

(statearr_24248_24303[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (10))){
var inst_24104 = (state_24198[(8)]);
var inst_24124 = (state_24198[(2)]);
var inst_24125 = cljs.core.get.call(null,inst_24124,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_24126 = cljs.core.get.call(null,inst_24124,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_24127 = cljs.core.get.call(null,inst_24124,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_24128 = inst_24104;
var state_24198__$1 = (function (){var statearr_24249 = state_24198;
(statearr_24249[(16)] = inst_24127);

(statearr_24249[(7)] = inst_24128);

(statearr_24249[(17)] = inst_24126);

(statearr_24249[(18)] = inst_24125);

return statearr_24249;
})();
var statearr_24250_24304 = state_24198__$1;
(statearr_24250_24304[(2)] = null);

(statearr_24250_24304[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (18))){
var inst_24142 = (state_24198[(2)]);
var state_24198__$1 = state_24198;
var statearr_24251_24305 = state_24198__$1;
(statearr_24251_24305[(2)] = inst_24142);

(statearr_24251_24305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (37))){
var state_24198__$1 = state_24198;
var statearr_24252_24306 = state_24198__$1;
(statearr_24252_24306[(2)] = null);

(statearr_24252_24306[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24199 === (8))){
var inst_24104 = (state_24198[(8)]);
var inst_24121 = cljs.core.apply.call(null,cljs.core.hash_map,inst_24104);
var state_24198__$1 = state_24198;
var statearr_24253_24307 = state_24198__$1;
(statearr_24253_24307[(2)] = inst_24121);

(statearr_24253_24307[(1)] = (10));


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
});})(c__19796__auto___24261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19775__auto__,c__19796__auto___24261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19776__auto__ = null;
var cljs$core$async$mix_$_state_machine__19776__auto____0 = (function (){
var statearr_24257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24257[(0)] = cljs$core$async$mix_$_state_machine__19776__auto__);

(statearr_24257[(1)] = (1));

return statearr_24257;
});
var cljs$core$async$mix_$_state_machine__19776__auto____1 = (function (state_24198){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_24198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e24258){if((e24258 instanceof Object)){
var ex__19779__auto__ = e24258;
var statearr_24259_24308 = state_24198;
(statearr_24259_24308[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24258;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24309 = state_24198;
state_24198 = G__24309;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19776__auto__ = function(state_24198){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19776__auto____1.call(this,state_24198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19776__auto____0;
cljs$core$async$mix_$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19776__auto____1;
return cljs$core$async$mix_$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___24261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19798__auto__ = (function (){var statearr_24260 = f__19797__auto__.call(null);
(statearr_24260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___24261);

return statearr_24260;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___24261,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17427__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v,ch);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args24310 = [];
var len__17829__auto___24313 = arguments.length;
var i__17830__auto___24314 = (0);
while(true){
if((i__17830__auto___24314 < len__17829__auto___24313)){
args24310.push((arguments[i__17830__auto___24314]));

var G__24315 = (i__17830__auto___24314 + (1));
i__17830__auto___24314 = G__24315;
continue;
} else {
}
break;
}

var G__24312 = args24310.length;
switch (G__24312) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24310.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17426__auto__ = (((p == null))?null:p);
var m__17427__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17426__auto__)]);
if(!((m__17427__auto__ == null))){
return m__17427__auto__.call(null,p,v);
} else {
var m__17427__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17427__auto____$1 == null))){
return m__17427__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args24318 = [];
var len__17829__auto___24443 = arguments.length;
var i__17830__auto___24444 = (0);
while(true){
if((i__17830__auto___24444 < len__17829__auto___24443)){
args24318.push((arguments[i__17830__auto___24444]));

var G__24445 = (i__17830__auto___24444 + (1));
i__17830__auto___24444 = G__24445;
continue;
} else {
}
break;
}

var G__24320 = args24318.length;
switch (G__24320) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24318.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16771__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16771__auto__)){
return or__16771__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16771__auto__,mults){
return (function (p1__24317_SHARP_){
if(cljs.core.truth_(p1__24317_SHARP_.call(null,topic))){
return p1__24317_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__24317_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16771__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async24321 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24321 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta24322){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta24322 = meta24322;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_24323,meta24322__$1){
var self__ = this;
var _24323__$1 = this;
return (new cljs.core.async.t_cljs$core$async24321(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta24322__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_24323){
var self__ = this;
var _24323__$1 = this;
return self__.meta24322;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24321.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24321.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta24322","meta24322",1854836484,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async24321.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24321.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24321";

cljs.core.async.t_cljs$core$async24321.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24321");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async24321 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async24321(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24322){
return (new cljs.core.async.t_cljs$core$async24321(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta24322));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async24321(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19796__auto___24447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___24447,mults,ensure_mult,p){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___24447,mults,ensure_mult,p){
return (function (state_24395){
var state_val_24396 = (state_24395[(1)]);
if((state_val_24396 === (7))){
var inst_24391 = (state_24395[(2)]);
var state_24395__$1 = state_24395;
var statearr_24397_24448 = state_24395__$1;
(statearr_24397_24448[(2)] = inst_24391);

(statearr_24397_24448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (20))){
var state_24395__$1 = state_24395;
var statearr_24398_24449 = state_24395__$1;
(statearr_24398_24449[(2)] = null);

(statearr_24398_24449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (1))){
var state_24395__$1 = state_24395;
var statearr_24399_24450 = state_24395__$1;
(statearr_24399_24450[(2)] = null);

(statearr_24399_24450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (24))){
var inst_24374 = (state_24395[(7)]);
var inst_24383 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_24374);
var state_24395__$1 = state_24395;
var statearr_24400_24451 = state_24395__$1;
(statearr_24400_24451[(2)] = inst_24383);

(statearr_24400_24451[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (4))){
var inst_24326 = (state_24395[(8)]);
var inst_24326__$1 = (state_24395[(2)]);
var inst_24327 = (inst_24326__$1 == null);
var state_24395__$1 = (function (){var statearr_24401 = state_24395;
(statearr_24401[(8)] = inst_24326__$1);

return statearr_24401;
})();
if(cljs.core.truth_(inst_24327)){
var statearr_24402_24452 = state_24395__$1;
(statearr_24402_24452[(1)] = (5));

} else {
var statearr_24403_24453 = state_24395__$1;
(statearr_24403_24453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (15))){
var inst_24368 = (state_24395[(2)]);
var state_24395__$1 = state_24395;
var statearr_24404_24454 = state_24395__$1;
(statearr_24404_24454[(2)] = inst_24368);

(statearr_24404_24454[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (21))){
var inst_24388 = (state_24395[(2)]);
var state_24395__$1 = (function (){var statearr_24405 = state_24395;
(statearr_24405[(9)] = inst_24388);

return statearr_24405;
})();
var statearr_24406_24455 = state_24395__$1;
(statearr_24406_24455[(2)] = null);

(statearr_24406_24455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (13))){
var inst_24350 = (state_24395[(10)]);
var inst_24352 = cljs.core.chunked_seq_QMARK_.call(null,inst_24350);
var state_24395__$1 = state_24395;
if(inst_24352){
var statearr_24407_24456 = state_24395__$1;
(statearr_24407_24456[(1)] = (16));

} else {
var statearr_24408_24457 = state_24395__$1;
(statearr_24408_24457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (22))){
var inst_24380 = (state_24395[(2)]);
var state_24395__$1 = state_24395;
if(cljs.core.truth_(inst_24380)){
var statearr_24409_24458 = state_24395__$1;
(statearr_24409_24458[(1)] = (23));

} else {
var statearr_24410_24459 = state_24395__$1;
(statearr_24410_24459[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (6))){
var inst_24376 = (state_24395[(11)]);
var inst_24374 = (state_24395[(7)]);
var inst_24326 = (state_24395[(8)]);
var inst_24374__$1 = topic_fn.call(null,inst_24326);
var inst_24375 = cljs.core.deref.call(null,mults);
var inst_24376__$1 = cljs.core.get.call(null,inst_24375,inst_24374__$1);
var state_24395__$1 = (function (){var statearr_24411 = state_24395;
(statearr_24411[(11)] = inst_24376__$1);

(statearr_24411[(7)] = inst_24374__$1);

return statearr_24411;
})();
if(cljs.core.truth_(inst_24376__$1)){
var statearr_24412_24460 = state_24395__$1;
(statearr_24412_24460[(1)] = (19));

} else {
var statearr_24413_24461 = state_24395__$1;
(statearr_24413_24461[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (25))){
var inst_24385 = (state_24395[(2)]);
var state_24395__$1 = state_24395;
var statearr_24414_24462 = state_24395__$1;
(statearr_24414_24462[(2)] = inst_24385);

(statearr_24414_24462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (17))){
var inst_24350 = (state_24395[(10)]);
var inst_24359 = cljs.core.first.call(null,inst_24350);
var inst_24360 = cljs.core.async.muxch_STAR_.call(null,inst_24359);
var inst_24361 = cljs.core.async.close_BANG_.call(null,inst_24360);
var inst_24362 = cljs.core.next.call(null,inst_24350);
var inst_24336 = inst_24362;
var inst_24337 = null;
var inst_24338 = (0);
var inst_24339 = (0);
var state_24395__$1 = (function (){var statearr_24415 = state_24395;
(statearr_24415[(12)] = inst_24339);

(statearr_24415[(13)] = inst_24337);

(statearr_24415[(14)] = inst_24336);

(statearr_24415[(15)] = inst_24361);

(statearr_24415[(16)] = inst_24338);

return statearr_24415;
})();
var statearr_24416_24463 = state_24395__$1;
(statearr_24416_24463[(2)] = null);

(statearr_24416_24463[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (3))){
var inst_24393 = (state_24395[(2)]);
var state_24395__$1 = state_24395;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24395__$1,inst_24393);
} else {
if((state_val_24396 === (12))){
var inst_24370 = (state_24395[(2)]);
var state_24395__$1 = state_24395;
var statearr_24417_24464 = state_24395__$1;
(statearr_24417_24464[(2)] = inst_24370);

(statearr_24417_24464[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (2))){
var state_24395__$1 = state_24395;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24395__$1,(4),ch);
} else {
if((state_val_24396 === (23))){
var state_24395__$1 = state_24395;
var statearr_24418_24465 = state_24395__$1;
(statearr_24418_24465[(2)] = null);

(statearr_24418_24465[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (19))){
var inst_24376 = (state_24395[(11)]);
var inst_24326 = (state_24395[(8)]);
var inst_24378 = cljs.core.async.muxch_STAR_.call(null,inst_24376);
var state_24395__$1 = state_24395;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24395__$1,(22),inst_24378,inst_24326);
} else {
if((state_val_24396 === (11))){
var inst_24336 = (state_24395[(14)]);
var inst_24350 = (state_24395[(10)]);
var inst_24350__$1 = cljs.core.seq.call(null,inst_24336);
var state_24395__$1 = (function (){var statearr_24419 = state_24395;
(statearr_24419[(10)] = inst_24350__$1);

return statearr_24419;
})();
if(inst_24350__$1){
var statearr_24420_24466 = state_24395__$1;
(statearr_24420_24466[(1)] = (13));

} else {
var statearr_24421_24467 = state_24395__$1;
(statearr_24421_24467[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (9))){
var inst_24372 = (state_24395[(2)]);
var state_24395__$1 = state_24395;
var statearr_24422_24468 = state_24395__$1;
(statearr_24422_24468[(2)] = inst_24372);

(statearr_24422_24468[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (5))){
var inst_24333 = cljs.core.deref.call(null,mults);
var inst_24334 = cljs.core.vals.call(null,inst_24333);
var inst_24335 = cljs.core.seq.call(null,inst_24334);
var inst_24336 = inst_24335;
var inst_24337 = null;
var inst_24338 = (0);
var inst_24339 = (0);
var state_24395__$1 = (function (){var statearr_24423 = state_24395;
(statearr_24423[(12)] = inst_24339);

(statearr_24423[(13)] = inst_24337);

(statearr_24423[(14)] = inst_24336);

(statearr_24423[(16)] = inst_24338);

return statearr_24423;
})();
var statearr_24424_24469 = state_24395__$1;
(statearr_24424_24469[(2)] = null);

(statearr_24424_24469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (14))){
var state_24395__$1 = state_24395;
var statearr_24428_24470 = state_24395__$1;
(statearr_24428_24470[(2)] = null);

(statearr_24428_24470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (16))){
var inst_24350 = (state_24395[(10)]);
var inst_24354 = cljs.core.chunk_first.call(null,inst_24350);
var inst_24355 = cljs.core.chunk_rest.call(null,inst_24350);
var inst_24356 = cljs.core.count.call(null,inst_24354);
var inst_24336 = inst_24355;
var inst_24337 = inst_24354;
var inst_24338 = inst_24356;
var inst_24339 = (0);
var state_24395__$1 = (function (){var statearr_24429 = state_24395;
(statearr_24429[(12)] = inst_24339);

(statearr_24429[(13)] = inst_24337);

(statearr_24429[(14)] = inst_24336);

(statearr_24429[(16)] = inst_24338);

return statearr_24429;
})();
var statearr_24430_24471 = state_24395__$1;
(statearr_24430_24471[(2)] = null);

(statearr_24430_24471[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (10))){
var inst_24339 = (state_24395[(12)]);
var inst_24337 = (state_24395[(13)]);
var inst_24336 = (state_24395[(14)]);
var inst_24338 = (state_24395[(16)]);
var inst_24344 = cljs.core._nth.call(null,inst_24337,inst_24339);
var inst_24345 = cljs.core.async.muxch_STAR_.call(null,inst_24344);
var inst_24346 = cljs.core.async.close_BANG_.call(null,inst_24345);
var inst_24347 = (inst_24339 + (1));
var tmp24425 = inst_24337;
var tmp24426 = inst_24336;
var tmp24427 = inst_24338;
var inst_24336__$1 = tmp24426;
var inst_24337__$1 = tmp24425;
var inst_24338__$1 = tmp24427;
var inst_24339__$1 = inst_24347;
var state_24395__$1 = (function (){var statearr_24431 = state_24395;
(statearr_24431[(12)] = inst_24339__$1);

(statearr_24431[(13)] = inst_24337__$1);

(statearr_24431[(14)] = inst_24336__$1);

(statearr_24431[(17)] = inst_24346);

(statearr_24431[(16)] = inst_24338__$1);

return statearr_24431;
})();
var statearr_24432_24472 = state_24395__$1;
(statearr_24432_24472[(2)] = null);

(statearr_24432_24472[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (18))){
var inst_24365 = (state_24395[(2)]);
var state_24395__$1 = state_24395;
var statearr_24433_24473 = state_24395__$1;
(statearr_24433_24473[(2)] = inst_24365);

(statearr_24433_24473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24396 === (8))){
var inst_24339 = (state_24395[(12)]);
var inst_24338 = (state_24395[(16)]);
var inst_24341 = (inst_24339 < inst_24338);
var inst_24342 = inst_24341;
var state_24395__$1 = state_24395;
if(cljs.core.truth_(inst_24342)){
var statearr_24434_24474 = state_24395__$1;
(statearr_24434_24474[(1)] = (10));

} else {
var statearr_24435_24475 = state_24395__$1;
(statearr_24435_24475[(1)] = (11));

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
});})(c__19796__auto___24447,mults,ensure_mult,p))
;
return ((function (switch__19775__auto__,c__19796__auto___24447,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_24439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24439[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_24439[(1)] = (1));

return statearr_24439;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_24395){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_24395);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e24440){if((e24440 instanceof Object)){
var ex__19779__auto__ = e24440;
var statearr_24441_24476 = state_24395;
(statearr_24441_24476[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24477 = state_24395;
state_24395 = G__24477;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_24395){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_24395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___24447,mults,ensure_mult,p))
})();
var state__19798__auto__ = (function (){var statearr_24442 = f__19797__auto__.call(null);
(statearr_24442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___24447);

return statearr_24442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___24447,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args24478 = [];
var len__17829__auto___24481 = arguments.length;
var i__17830__auto___24482 = (0);
while(true){
if((i__17830__auto___24482 < len__17829__auto___24481)){
args24478.push((arguments[i__17830__auto___24482]));

var G__24483 = (i__17830__auto___24482 + (1));
i__17830__auto___24482 = G__24483;
continue;
} else {
}
break;
}

var G__24480 = args24478.length;
switch (G__24480) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24478.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args24485 = [];
var len__17829__auto___24488 = arguments.length;
var i__17830__auto___24489 = (0);
while(true){
if((i__17830__auto___24489 < len__17829__auto___24488)){
args24485.push((arguments[i__17830__auto___24489]));

var G__24490 = (i__17830__auto___24489 + (1));
i__17830__auto___24489 = G__24490;
continue;
} else {
}
break;
}

var G__24487 = args24485.length;
switch (G__24487) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24485.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args24492 = [];
var len__17829__auto___24563 = arguments.length;
var i__17830__auto___24564 = (0);
while(true){
if((i__17830__auto___24564 < len__17829__auto___24563)){
args24492.push((arguments[i__17830__auto___24564]));

var G__24565 = (i__17830__auto___24564 + (1));
i__17830__auto___24564 = G__24565;
continue;
} else {
}
break;
}

var G__24494 = args24492.length;
switch (G__24494) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24492.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19796__auto___24567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___24567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___24567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24533){
var state_val_24534 = (state_24533[(1)]);
if((state_val_24534 === (7))){
var state_24533__$1 = state_24533;
var statearr_24535_24568 = state_24533__$1;
(statearr_24535_24568[(2)] = null);

(statearr_24535_24568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (1))){
var state_24533__$1 = state_24533;
var statearr_24536_24569 = state_24533__$1;
(statearr_24536_24569[(2)] = null);

(statearr_24536_24569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (4))){
var inst_24497 = (state_24533[(7)]);
var inst_24499 = (inst_24497 < cnt);
var state_24533__$1 = state_24533;
if(cljs.core.truth_(inst_24499)){
var statearr_24537_24570 = state_24533__$1;
(statearr_24537_24570[(1)] = (6));

} else {
var statearr_24538_24571 = state_24533__$1;
(statearr_24538_24571[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (15))){
var inst_24529 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
var statearr_24539_24572 = state_24533__$1;
(statearr_24539_24572[(2)] = inst_24529);

(statearr_24539_24572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (13))){
var inst_24522 = cljs.core.async.close_BANG_.call(null,out);
var state_24533__$1 = state_24533;
var statearr_24540_24573 = state_24533__$1;
(statearr_24540_24573[(2)] = inst_24522);

(statearr_24540_24573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (6))){
var state_24533__$1 = state_24533;
var statearr_24541_24574 = state_24533__$1;
(statearr_24541_24574[(2)] = null);

(statearr_24541_24574[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (3))){
var inst_24531 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24533__$1,inst_24531);
} else {
if((state_val_24534 === (12))){
var inst_24519 = (state_24533[(8)]);
var inst_24519__$1 = (state_24533[(2)]);
var inst_24520 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_24519__$1);
var state_24533__$1 = (function (){var statearr_24542 = state_24533;
(statearr_24542[(8)] = inst_24519__$1);

return statearr_24542;
})();
if(cljs.core.truth_(inst_24520)){
var statearr_24543_24575 = state_24533__$1;
(statearr_24543_24575[(1)] = (13));

} else {
var statearr_24544_24576 = state_24533__$1;
(statearr_24544_24576[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (2))){
var inst_24496 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_24497 = (0);
var state_24533__$1 = (function (){var statearr_24545 = state_24533;
(statearr_24545[(7)] = inst_24497);

(statearr_24545[(9)] = inst_24496);

return statearr_24545;
})();
var statearr_24546_24577 = state_24533__$1;
(statearr_24546_24577[(2)] = null);

(statearr_24546_24577[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (11))){
var inst_24497 = (state_24533[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_24533,(10),Object,null,(9));
var inst_24506 = chs__$1.call(null,inst_24497);
var inst_24507 = done.call(null,inst_24497);
var inst_24508 = cljs.core.async.take_BANG_.call(null,inst_24506,inst_24507);
var state_24533__$1 = state_24533;
var statearr_24547_24578 = state_24533__$1;
(statearr_24547_24578[(2)] = inst_24508);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24533__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (9))){
var inst_24497 = (state_24533[(7)]);
var inst_24510 = (state_24533[(2)]);
var inst_24511 = (inst_24497 + (1));
var inst_24497__$1 = inst_24511;
var state_24533__$1 = (function (){var statearr_24548 = state_24533;
(statearr_24548[(7)] = inst_24497__$1);

(statearr_24548[(10)] = inst_24510);

return statearr_24548;
})();
var statearr_24549_24579 = state_24533__$1;
(statearr_24549_24579[(2)] = null);

(statearr_24549_24579[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (5))){
var inst_24517 = (state_24533[(2)]);
var state_24533__$1 = (function (){var statearr_24550 = state_24533;
(statearr_24550[(11)] = inst_24517);

return statearr_24550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24533__$1,(12),dchan);
} else {
if((state_val_24534 === (14))){
var inst_24519 = (state_24533[(8)]);
var inst_24524 = cljs.core.apply.call(null,f,inst_24519);
var state_24533__$1 = state_24533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24533__$1,(16),out,inst_24524);
} else {
if((state_val_24534 === (16))){
var inst_24526 = (state_24533[(2)]);
var state_24533__$1 = (function (){var statearr_24551 = state_24533;
(statearr_24551[(12)] = inst_24526);

return statearr_24551;
})();
var statearr_24552_24580 = state_24533__$1;
(statearr_24552_24580[(2)] = null);

(statearr_24552_24580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (10))){
var inst_24501 = (state_24533[(2)]);
var inst_24502 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_24533__$1 = (function (){var statearr_24553 = state_24533;
(statearr_24553[(13)] = inst_24501);

return statearr_24553;
})();
var statearr_24554_24581 = state_24533__$1;
(statearr_24554_24581[(2)] = inst_24502);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24533__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24534 === (8))){
var inst_24515 = (state_24533[(2)]);
var state_24533__$1 = state_24533;
var statearr_24555_24582 = state_24533__$1;
(statearr_24555_24582[(2)] = inst_24515);

(statearr_24555_24582[(1)] = (5));


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
});})(c__19796__auto___24567,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19775__auto__,c__19796__auto___24567,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_24559 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24559[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_24559[(1)] = (1));

return statearr_24559;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_24533){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_24533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e24560){if((e24560 instanceof Object)){
var ex__19779__auto__ = e24560;
var statearr_24561_24583 = state_24533;
(statearr_24561_24583[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24584 = state_24533;
state_24533 = G__24584;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_24533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_24533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___24567,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19798__auto__ = (function (){var statearr_24562 = f__19797__auto__.call(null);
(statearr_24562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___24567);

return statearr_24562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___24567,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args24586 = [];
var len__17829__auto___24642 = arguments.length;
var i__17830__auto___24643 = (0);
while(true){
if((i__17830__auto___24643 < len__17829__auto___24642)){
args24586.push((arguments[i__17830__auto___24643]));

var G__24644 = (i__17830__auto___24643 + (1));
i__17830__auto___24643 = G__24644;
continue;
} else {
}
break;
}

var G__24588 = args24586.length;
switch (G__24588) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24586.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19796__auto___24646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___24646,out){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___24646,out){
return (function (state_24618){
var state_val_24619 = (state_24618[(1)]);
if((state_val_24619 === (7))){
var inst_24598 = (state_24618[(7)]);
var inst_24597 = (state_24618[(8)]);
var inst_24597__$1 = (state_24618[(2)]);
var inst_24598__$1 = cljs.core.nth.call(null,inst_24597__$1,(0),null);
var inst_24599 = cljs.core.nth.call(null,inst_24597__$1,(1),null);
var inst_24600 = (inst_24598__$1 == null);
var state_24618__$1 = (function (){var statearr_24620 = state_24618;
(statearr_24620[(7)] = inst_24598__$1);

(statearr_24620[(9)] = inst_24599);

(statearr_24620[(8)] = inst_24597__$1);

return statearr_24620;
})();
if(cljs.core.truth_(inst_24600)){
var statearr_24621_24647 = state_24618__$1;
(statearr_24621_24647[(1)] = (8));

} else {
var statearr_24622_24648 = state_24618__$1;
(statearr_24622_24648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (1))){
var inst_24589 = cljs.core.vec.call(null,chs);
var inst_24590 = inst_24589;
var state_24618__$1 = (function (){var statearr_24623 = state_24618;
(statearr_24623[(10)] = inst_24590);

return statearr_24623;
})();
var statearr_24624_24649 = state_24618__$1;
(statearr_24624_24649[(2)] = null);

(statearr_24624_24649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (4))){
var inst_24590 = (state_24618[(10)]);
var state_24618__$1 = state_24618;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24618__$1,(7),inst_24590);
} else {
if((state_val_24619 === (6))){
var inst_24614 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
var statearr_24625_24650 = state_24618__$1;
(statearr_24625_24650[(2)] = inst_24614);

(statearr_24625_24650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (3))){
var inst_24616 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24618__$1,inst_24616);
} else {
if((state_val_24619 === (2))){
var inst_24590 = (state_24618[(10)]);
var inst_24592 = cljs.core.count.call(null,inst_24590);
var inst_24593 = (inst_24592 > (0));
var state_24618__$1 = state_24618;
if(cljs.core.truth_(inst_24593)){
var statearr_24627_24651 = state_24618__$1;
(statearr_24627_24651[(1)] = (4));

} else {
var statearr_24628_24652 = state_24618__$1;
(statearr_24628_24652[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (11))){
var inst_24590 = (state_24618[(10)]);
var inst_24607 = (state_24618[(2)]);
var tmp24626 = inst_24590;
var inst_24590__$1 = tmp24626;
var state_24618__$1 = (function (){var statearr_24629 = state_24618;
(statearr_24629[(10)] = inst_24590__$1);

(statearr_24629[(11)] = inst_24607);

return statearr_24629;
})();
var statearr_24630_24653 = state_24618__$1;
(statearr_24630_24653[(2)] = null);

(statearr_24630_24653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (9))){
var inst_24598 = (state_24618[(7)]);
var state_24618__$1 = state_24618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24618__$1,(11),out,inst_24598);
} else {
if((state_val_24619 === (5))){
var inst_24612 = cljs.core.async.close_BANG_.call(null,out);
var state_24618__$1 = state_24618;
var statearr_24631_24654 = state_24618__$1;
(statearr_24631_24654[(2)] = inst_24612);

(statearr_24631_24654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (10))){
var inst_24610 = (state_24618[(2)]);
var state_24618__$1 = state_24618;
var statearr_24632_24655 = state_24618__$1;
(statearr_24632_24655[(2)] = inst_24610);

(statearr_24632_24655[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24619 === (8))){
var inst_24590 = (state_24618[(10)]);
var inst_24598 = (state_24618[(7)]);
var inst_24599 = (state_24618[(9)]);
var inst_24597 = (state_24618[(8)]);
var inst_24602 = (function (){var cs = inst_24590;
var vec__24595 = inst_24597;
var v = inst_24598;
var c = inst_24599;
return ((function (cs,vec__24595,v,c,inst_24590,inst_24598,inst_24599,inst_24597,state_val_24619,c__19796__auto___24646,out){
return (function (p1__24585_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__24585_SHARP_);
});
;})(cs,vec__24595,v,c,inst_24590,inst_24598,inst_24599,inst_24597,state_val_24619,c__19796__auto___24646,out))
})();
var inst_24603 = cljs.core.filterv.call(null,inst_24602,inst_24590);
var inst_24590__$1 = inst_24603;
var state_24618__$1 = (function (){var statearr_24633 = state_24618;
(statearr_24633[(10)] = inst_24590__$1);

return statearr_24633;
})();
var statearr_24634_24656 = state_24618__$1;
(statearr_24634_24656[(2)] = null);

(statearr_24634_24656[(1)] = (2));


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
});})(c__19796__auto___24646,out))
;
return ((function (switch__19775__auto__,c__19796__auto___24646,out){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_24638 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24638[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_24638[(1)] = (1));

return statearr_24638;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_24618){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_24618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e24639){if((e24639 instanceof Object)){
var ex__19779__auto__ = e24639;
var statearr_24640_24657 = state_24618;
(statearr_24640_24657[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24618);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24658 = state_24618;
state_24618 = G__24658;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_24618){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_24618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___24646,out))
})();
var state__19798__auto__ = (function (){var statearr_24641 = f__19797__auto__.call(null);
(statearr_24641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___24646);

return statearr_24641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___24646,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args24659 = [];
var len__17829__auto___24708 = arguments.length;
var i__17830__auto___24709 = (0);
while(true){
if((i__17830__auto___24709 < len__17829__auto___24708)){
args24659.push((arguments[i__17830__auto___24709]));

var G__24710 = (i__17830__auto___24709 + (1));
i__17830__auto___24709 = G__24710;
continue;
} else {
}
break;
}

var G__24661 = args24659.length;
switch (G__24661) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24659.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19796__auto___24712 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___24712,out){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___24712,out){
return (function (state_24685){
var state_val_24686 = (state_24685[(1)]);
if((state_val_24686 === (7))){
var inst_24667 = (state_24685[(7)]);
var inst_24667__$1 = (state_24685[(2)]);
var inst_24668 = (inst_24667__$1 == null);
var inst_24669 = cljs.core.not.call(null,inst_24668);
var state_24685__$1 = (function (){var statearr_24687 = state_24685;
(statearr_24687[(7)] = inst_24667__$1);

return statearr_24687;
})();
if(inst_24669){
var statearr_24688_24713 = state_24685__$1;
(statearr_24688_24713[(1)] = (8));

} else {
var statearr_24689_24714 = state_24685__$1;
(statearr_24689_24714[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (1))){
var inst_24662 = (0);
var state_24685__$1 = (function (){var statearr_24690 = state_24685;
(statearr_24690[(8)] = inst_24662);

return statearr_24690;
})();
var statearr_24691_24715 = state_24685__$1;
(statearr_24691_24715[(2)] = null);

(statearr_24691_24715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (4))){
var state_24685__$1 = state_24685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24685__$1,(7),ch);
} else {
if((state_val_24686 === (6))){
var inst_24680 = (state_24685[(2)]);
var state_24685__$1 = state_24685;
var statearr_24692_24716 = state_24685__$1;
(statearr_24692_24716[(2)] = inst_24680);

(statearr_24692_24716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (3))){
var inst_24682 = (state_24685[(2)]);
var inst_24683 = cljs.core.async.close_BANG_.call(null,out);
var state_24685__$1 = (function (){var statearr_24693 = state_24685;
(statearr_24693[(9)] = inst_24682);

return statearr_24693;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24685__$1,inst_24683);
} else {
if((state_val_24686 === (2))){
var inst_24662 = (state_24685[(8)]);
var inst_24664 = (inst_24662 < n);
var state_24685__$1 = state_24685;
if(cljs.core.truth_(inst_24664)){
var statearr_24694_24717 = state_24685__$1;
(statearr_24694_24717[(1)] = (4));

} else {
var statearr_24695_24718 = state_24685__$1;
(statearr_24695_24718[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (11))){
var inst_24662 = (state_24685[(8)]);
var inst_24672 = (state_24685[(2)]);
var inst_24673 = (inst_24662 + (1));
var inst_24662__$1 = inst_24673;
var state_24685__$1 = (function (){var statearr_24696 = state_24685;
(statearr_24696[(10)] = inst_24672);

(statearr_24696[(8)] = inst_24662__$1);

return statearr_24696;
})();
var statearr_24697_24719 = state_24685__$1;
(statearr_24697_24719[(2)] = null);

(statearr_24697_24719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (9))){
var state_24685__$1 = state_24685;
var statearr_24698_24720 = state_24685__$1;
(statearr_24698_24720[(2)] = null);

(statearr_24698_24720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (5))){
var state_24685__$1 = state_24685;
var statearr_24699_24721 = state_24685__$1;
(statearr_24699_24721[(2)] = null);

(statearr_24699_24721[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (10))){
var inst_24677 = (state_24685[(2)]);
var state_24685__$1 = state_24685;
var statearr_24700_24722 = state_24685__$1;
(statearr_24700_24722[(2)] = inst_24677);

(statearr_24700_24722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24686 === (8))){
var inst_24667 = (state_24685[(7)]);
var state_24685__$1 = state_24685;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24685__$1,(11),out,inst_24667);
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
});})(c__19796__auto___24712,out))
;
return ((function (switch__19775__auto__,c__19796__auto___24712,out){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_24704 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24704[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_24704[(1)] = (1));

return statearr_24704;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_24685){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_24685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e24705){if((e24705 instanceof Object)){
var ex__19779__auto__ = e24705;
var statearr_24706_24723 = state_24685;
(statearr_24706_24723[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24724 = state_24685;
state_24685 = G__24724;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_24685){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_24685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___24712,out))
})();
var state__19798__auto__ = (function (){var statearr_24707 = f__19797__auto__.call(null);
(statearr_24707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___24712);

return statearr_24707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___24712,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24732 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24732 = (function (map_LT_,f,ch,meta24733){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24733 = meta24733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24734,meta24733__$1){
var self__ = this;
var _24734__$1 = this;
return (new cljs.core.async.t_cljs$core$async24732(self__.map_LT_,self__.f,self__.ch,meta24733__$1));
});

cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24734){
var self__ = this;
var _24734__$1 = this;
return self__.meta24733;
});

cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24735 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24735 = (function (map_LT_,f,ch,meta24733,_,fn1,meta24736){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24733 = meta24733;
this._ = _;
this.fn1 = fn1;
this.meta24736 = meta24736;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24735.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24737,meta24736__$1){
var self__ = this;
var _24737__$1 = this;
return (new cljs.core.async.t_cljs$core$async24735(self__.map_LT_,self__.f,self__.ch,self__.meta24733,self__._,self__.fn1,meta24736__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24735.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24737){
var self__ = this;
var _24737__$1 = this;
return self__.meta24736;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24735.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24735.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24735.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24735.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24725_SHARP_){
return f1.call(null,(((p1__24725_SHARP_ == null))?null:self__.f.call(null,p1__24725_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24735.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24733","meta24733",-1251270002,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24732","cljs.core.async/t_cljs$core$async24732",839683051,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24736","meta24736",686430530,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24735.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24735.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24735";

cljs.core.async.t_cljs$core$async24735.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24735");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24735 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24735(map_LT___$1,f__$1,ch__$1,meta24733__$1,___$2,fn1__$1,meta24736){
return (new cljs.core.async.t_cljs$core$async24735(map_LT___$1,f__$1,ch__$1,meta24733__$1,___$2,fn1__$1,meta24736));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24735(self__.map_LT_,self__.f,self__.ch,self__.meta24733,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16759__auto__ = ret;
if(cljs.core.truth_(and__16759__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16759__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24732.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24732.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24733","meta24733",-1251270002,null)], null);
});

cljs.core.async.t_cljs$core$async24732.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24732.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24732";

cljs.core.async.t_cljs$core$async24732.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24732");
});

cljs.core.async.__GT_t_cljs$core$async24732 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24732(map_LT___$1,f__$1,ch__$1,meta24733){
return (new cljs.core.async.t_cljs$core$async24732(map_LT___$1,f__$1,ch__$1,meta24733));
});

}

return (new cljs.core.async.t_cljs$core$async24732(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24741 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24741 = (function (map_GT_,f,ch,meta24742){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24742 = meta24742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24743,meta24742__$1){
var self__ = this;
var _24743__$1 = this;
return (new cljs.core.async.t_cljs$core$async24741(self__.map_GT_,self__.f,self__.ch,meta24742__$1));
});

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24743){
var self__ = this;
var _24743__$1 = this;
return self__.meta24742;
});

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24741.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24741.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24742","meta24742",-1457606822,null)], null);
});

cljs.core.async.t_cljs$core$async24741.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24741.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24741";

cljs.core.async.t_cljs$core$async24741.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24741");
});

cljs.core.async.__GT_t_cljs$core$async24741 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24741(map_GT___$1,f__$1,ch__$1,meta24742){
return (new cljs.core.async.t_cljs$core$async24741(map_GT___$1,f__$1,ch__$1,meta24742));
});

}

return (new cljs.core.async.t_cljs$core$async24741(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24747 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24747 = (function (filter_GT_,p,ch,meta24748){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24748 = meta24748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24749,meta24748__$1){
var self__ = this;
var _24749__$1 = this;
return (new cljs.core.async.t_cljs$core$async24747(self__.filter_GT_,self__.p,self__.ch,meta24748__$1));
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24749){
var self__ = this;
var _24749__$1 = this;
return self__.meta24748;
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24747.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24747.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24748","meta24748",1983021707,null)], null);
});

cljs.core.async.t_cljs$core$async24747.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24747.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24747";

cljs.core.async.t_cljs$core$async24747.cljs$lang$ctorPrWriter = (function (this__17369__auto__,writer__17370__auto__,opt__17371__auto__){
return cljs.core._write.call(null,writer__17370__auto__,"cljs.core.async/t_cljs$core$async24747");
});

cljs.core.async.__GT_t_cljs$core$async24747 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24747(filter_GT___$1,p__$1,ch__$1,meta24748){
return (new cljs.core.async.t_cljs$core$async24747(filter_GT___$1,p__$1,ch__$1,meta24748));
});

}

return (new cljs.core.async.t_cljs$core$async24747(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24750 = [];
var len__17829__auto___24794 = arguments.length;
var i__17830__auto___24795 = (0);
while(true){
if((i__17830__auto___24795 < len__17829__auto___24794)){
args24750.push((arguments[i__17830__auto___24795]));

var G__24796 = (i__17830__auto___24795 + (1));
i__17830__auto___24795 = G__24796;
continue;
} else {
}
break;
}

var G__24752 = args24750.length;
switch (G__24752) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24750.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19796__auto___24798 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___24798,out){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___24798,out){
return (function (state_24773){
var state_val_24774 = (state_24773[(1)]);
if((state_val_24774 === (7))){
var inst_24769 = (state_24773[(2)]);
var state_24773__$1 = state_24773;
var statearr_24775_24799 = state_24773__$1;
(statearr_24775_24799[(2)] = inst_24769);

(statearr_24775_24799[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24774 === (1))){
var state_24773__$1 = state_24773;
var statearr_24776_24800 = state_24773__$1;
(statearr_24776_24800[(2)] = null);

(statearr_24776_24800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24774 === (4))){
var inst_24755 = (state_24773[(7)]);
var inst_24755__$1 = (state_24773[(2)]);
var inst_24756 = (inst_24755__$1 == null);
var state_24773__$1 = (function (){var statearr_24777 = state_24773;
(statearr_24777[(7)] = inst_24755__$1);

return statearr_24777;
})();
if(cljs.core.truth_(inst_24756)){
var statearr_24778_24801 = state_24773__$1;
(statearr_24778_24801[(1)] = (5));

} else {
var statearr_24779_24802 = state_24773__$1;
(statearr_24779_24802[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24774 === (6))){
var inst_24755 = (state_24773[(7)]);
var inst_24760 = p.call(null,inst_24755);
var state_24773__$1 = state_24773;
if(cljs.core.truth_(inst_24760)){
var statearr_24780_24803 = state_24773__$1;
(statearr_24780_24803[(1)] = (8));

} else {
var statearr_24781_24804 = state_24773__$1;
(statearr_24781_24804[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24774 === (3))){
var inst_24771 = (state_24773[(2)]);
var state_24773__$1 = state_24773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24773__$1,inst_24771);
} else {
if((state_val_24774 === (2))){
var state_24773__$1 = state_24773;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24773__$1,(4),ch);
} else {
if((state_val_24774 === (11))){
var inst_24763 = (state_24773[(2)]);
var state_24773__$1 = state_24773;
var statearr_24782_24805 = state_24773__$1;
(statearr_24782_24805[(2)] = inst_24763);

(statearr_24782_24805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24774 === (9))){
var state_24773__$1 = state_24773;
var statearr_24783_24806 = state_24773__$1;
(statearr_24783_24806[(2)] = null);

(statearr_24783_24806[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24774 === (5))){
var inst_24758 = cljs.core.async.close_BANG_.call(null,out);
var state_24773__$1 = state_24773;
var statearr_24784_24807 = state_24773__$1;
(statearr_24784_24807[(2)] = inst_24758);

(statearr_24784_24807[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24774 === (10))){
var inst_24766 = (state_24773[(2)]);
var state_24773__$1 = (function (){var statearr_24785 = state_24773;
(statearr_24785[(8)] = inst_24766);

return statearr_24785;
})();
var statearr_24786_24808 = state_24773__$1;
(statearr_24786_24808[(2)] = null);

(statearr_24786_24808[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24774 === (8))){
var inst_24755 = (state_24773[(7)]);
var state_24773__$1 = state_24773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24773__$1,(11),out,inst_24755);
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
});})(c__19796__auto___24798,out))
;
return ((function (switch__19775__auto__,c__19796__auto___24798,out){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_24790 = [null,null,null,null,null,null,null,null,null];
(statearr_24790[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_24790[(1)] = (1));

return statearr_24790;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_24773){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_24773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e24791){if((e24791 instanceof Object)){
var ex__19779__auto__ = e24791;
var statearr_24792_24809 = state_24773;
(statearr_24792_24809[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24791;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24810 = state_24773;
state_24773 = G__24810;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_24773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_24773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___24798,out))
})();
var state__19798__auto__ = (function (){var statearr_24793 = f__19797__auto__.call(null);
(statearr_24793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___24798);

return statearr_24793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___24798,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24811 = [];
var len__17829__auto___24814 = arguments.length;
var i__17830__auto___24815 = (0);
while(true){
if((i__17830__auto___24815 < len__17829__auto___24814)){
args24811.push((arguments[i__17830__auto___24815]));

var G__24816 = (i__17830__auto___24815 + (1));
i__17830__auto___24815 = G__24816;
continue;
} else {
}
break;
}

var G__24813 = args24811.length;
switch (G__24813) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24811.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19796__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto__){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto__){
return (function (state_24983){
var state_val_24984 = (state_24983[(1)]);
if((state_val_24984 === (7))){
var inst_24979 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_24985_25026 = state_24983__$1;
(statearr_24985_25026[(2)] = inst_24979);

(statearr_24985_25026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (20))){
var inst_24949 = (state_24983[(7)]);
var inst_24960 = (state_24983[(2)]);
var inst_24961 = cljs.core.next.call(null,inst_24949);
var inst_24935 = inst_24961;
var inst_24936 = null;
var inst_24937 = (0);
var inst_24938 = (0);
var state_24983__$1 = (function (){var statearr_24986 = state_24983;
(statearr_24986[(8)] = inst_24936);

(statearr_24986[(9)] = inst_24935);

(statearr_24986[(10)] = inst_24960);

(statearr_24986[(11)] = inst_24938);

(statearr_24986[(12)] = inst_24937);

return statearr_24986;
})();
var statearr_24987_25027 = state_24983__$1;
(statearr_24987_25027[(2)] = null);

(statearr_24987_25027[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (1))){
var state_24983__$1 = state_24983;
var statearr_24988_25028 = state_24983__$1;
(statearr_24988_25028[(2)] = null);

(statearr_24988_25028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (4))){
var inst_24924 = (state_24983[(13)]);
var inst_24924__$1 = (state_24983[(2)]);
var inst_24925 = (inst_24924__$1 == null);
var state_24983__$1 = (function (){var statearr_24989 = state_24983;
(statearr_24989[(13)] = inst_24924__$1);

return statearr_24989;
})();
if(cljs.core.truth_(inst_24925)){
var statearr_24990_25029 = state_24983__$1;
(statearr_24990_25029[(1)] = (5));

} else {
var statearr_24991_25030 = state_24983__$1;
(statearr_24991_25030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (15))){
var state_24983__$1 = state_24983;
var statearr_24995_25031 = state_24983__$1;
(statearr_24995_25031[(2)] = null);

(statearr_24995_25031[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (21))){
var state_24983__$1 = state_24983;
var statearr_24996_25032 = state_24983__$1;
(statearr_24996_25032[(2)] = null);

(statearr_24996_25032[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (13))){
var inst_24936 = (state_24983[(8)]);
var inst_24935 = (state_24983[(9)]);
var inst_24938 = (state_24983[(11)]);
var inst_24937 = (state_24983[(12)]);
var inst_24945 = (state_24983[(2)]);
var inst_24946 = (inst_24938 + (1));
var tmp24992 = inst_24936;
var tmp24993 = inst_24935;
var tmp24994 = inst_24937;
var inst_24935__$1 = tmp24993;
var inst_24936__$1 = tmp24992;
var inst_24937__$1 = tmp24994;
var inst_24938__$1 = inst_24946;
var state_24983__$1 = (function (){var statearr_24997 = state_24983;
(statearr_24997[(8)] = inst_24936__$1);

(statearr_24997[(9)] = inst_24935__$1);

(statearr_24997[(11)] = inst_24938__$1);

(statearr_24997[(12)] = inst_24937__$1);

(statearr_24997[(14)] = inst_24945);

return statearr_24997;
})();
var statearr_24998_25033 = state_24983__$1;
(statearr_24998_25033[(2)] = null);

(statearr_24998_25033[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (22))){
var state_24983__$1 = state_24983;
var statearr_24999_25034 = state_24983__$1;
(statearr_24999_25034[(2)] = null);

(statearr_24999_25034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (6))){
var inst_24924 = (state_24983[(13)]);
var inst_24933 = f.call(null,inst_24924);
var inst_24934 = cljs.core.seq.call(null,inst_24933);
var inst_24935 = inst_24934;
var inst_24936 = null;
var inst_24937 = (0);
var inst_24938 = (0);
var state_24983__$1 = (function (){var statearr_25000 = state_24983;
(statearr_25000[(8)] = inst_24936);

(statearr_25000[(9)] = inst_24935);

(statearr_25000[(11)] = inst_24938);

(statearr_25000[(12)] = inst_24937);

return statearr_25000;
})();
var statearr_25001_25035 = state_24983__$1;
(statearr_25001_25035[(2)] = null);

(statearr_25001_25035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (17))){
var inst_24949 = (state_24983[(7)]);
var inst_24953 = cljs.core.chunk_first.call(null,inst_24949);
var inst_24954 = cljs.core.chunk_rest.call(null,inst_24949);
var inst_24955 = cljs.core.count.call(null,inst_24953);
var inst_24935 = inst_24954;
var inst_24936 = inst_24953;
var inst_24937 = inst_24955;
var inst_24938 = (0);
var state_24983__$1 = (function (){var statearr_25002 = state_24983;
(statearr_25002[(8)] = inst_24936);

(statearr_25002[(9)] = inst_24935);

(statearr_25002[(11)] = inst_24938);

(statearr_25002[(12)] = inst_24937);

return statearr_25002;
})();
var statearr_25003_25036 = state_24983__$1;
(statearr_25003_25036[(2)] = null);

(statearr_25003_25036[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (3))){
var inst_24981 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24983__$1,inst_24981);
} else {
if((state_val_24984 === (12))){
var inst_24969 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_25004_25037 = state_24983__$1;
(statearr_25004_25037[(2)] = inst_24969);

(statearr_25004_25037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (2))){
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24983__$1,(4),in$);
} else {
if((state_val_24984 === (23))){
var inst_24977 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_25005_25038 = state_24983__$1;
(statearr_25005_25038[(2)] = inst_24977);

(statearr_25005_25038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (19))){
var inst_24964 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_25006_25039 = state_24983__$1;
(statearr_25006_25039[(2)] = inst_24964);

(statearr_25006_25039[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (11))){
var inst_24935 = (state_24983[(9)]);
var inst_24949 = (state_24983[(7)]);
var inst_24949__$1 = cljs.core.seq.call(null,inst_24935);
var state_24983__$1 = (function (){var statearr_25007 = state_24983;
(statearr_25007[(7)] = inst_24949__$1);

return statearr_25007;
})();
if(inst_24949__$1){
var statearr_25008_25040 = state_24983__$1;
(statearr_25008_25040[(1)] = (14));

} else {
var statearr_25009_25041 = state_24983__$1;
(statearr_25009_25041[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (9))){
var inst_24971 = (state_24983[(2)]);
var inst_24972 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24983__$1 = (function (){var statearr_25010 = state_24983;
(statearr_25010[(15)] = inst_24971);

return statearr_25010;
})();
if(cljs.core.truth_(inst_24972)){
var statearr_25011_25042 = state_24983__$1;
(statearr_25011_25042[(1)] = (21));

} else {
var statearr_25012_25043 = state_24983__$1;
(statearr_25012_25043[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (5))){
var inst_24927 = cljs.core.async.close_BANG_.call(null,out);
var state_24983__$1 = state_24983;
var statearr_25013_25044 = state_24983__$1;
(statearr_25013_25044[(2)] = inst_24927);

(statearr_25013_25044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (14))){
var inst_24949 = (state_24983[(7)]);
var inst_24951 = cljs.core.chunked_seq_QMARK_.call(null,inst_24949);
var state_24983__$1 = state_24983;
if(inst_24951){
var statearr_25014_25045 = state_24983__$1;
(statearr_25014_25045[(1)] = (17));

} else {
var statearr_25015_25046 = state_24983__$1;
(statearr_25015_25046[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (16))){
var inst_24967 = (state_24983[(2)]);
var state_24983__$1 = state_24983;
var statearr_25016_25047 = state_24983__$1;
(statearr_25016_25047[(2)] = inst_24967);

(statearr_25016_25047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24984 === (10))){
var inst_24936 = (state_24983[(8)]);
var inst_24938 = (state_24983[(11)]);
var inst_24943 = cljs.core._nth.call(null,inst_24936,inst_24938);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24983__$1,(13),out,inst_24943);
} else {
if((state_val_24984 === (18))){
var inst_24949 = (state_24983[(7)]);
var inst_24958 = cljs.core.first.call(null,inst_24949);
var state_24983__$1 = state_24983;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24983__$1,(20),out,inst_24958);
} else {
if((state_val_24984 === (8))){
var inst_24938 = (state_24983[(11)]);
var inst_24937 = (state_24983[(12)]);
var inst_24940 = (inst_24938 < inst_24937);
var inst_24941 = inst_24940;
var state_24983__$1 = state_24983;
if(cljs.core.truth_(inst_24941)){
var statearr_25017_25048 = state_24983__$1;
(statearr_25017_25048[(1)] = (10));

} else {
var statearr_25018_25049 = state_24983__$1;
(statearr_25018_25049[(1)] = (11));

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
});})(c__19796__auto__))
;
return ((function (switch__19775__auto__,c__19796__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19776__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19776__auto____0 = (function (){
var statearr_25022 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25022[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19776__auto__);

(statearr_25022[(1)] = (1));

return statearr_25022;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19776__auto____1 = (function (state_24983){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_24983);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e25023){if((e25023 instanceof Object)){
var ex__19779__auto__ = e25023;
var statearr_25024_25050 = state_24983;
(statearr_25024_25050[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24983);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25051 = state_24983;
state_24983 = G__25051;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19776__auto__ = function(state_24983){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19776__auto____1.call(this,state_24983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19776__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19776__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto__))
})();
var state__19798__auto__ = (function (){var statearr_25025 = f__19797__auto__.call(null);
(statearr_25025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto__);

return statearr_25025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto__))
);

return c__19796__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args25052 = [];
var len__17829__auto___25055 = arguments.length;
var i__17830__auto___25056 = (0);
while(true){
if((i__17830__auto___25056 < len__17829__auto___25055)){
args25052.push((arguments[i__17830__auto___25056]));

var G__25057 = (i__17830__auto___25056 + (1));
i__17830__auto___25056 = G__25057;
continue;
} else {
}
break;
}

var G__25054 = args25052.length;
switch (G__25054) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25052.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args25059 = [];
var len__17829__auto___25062 = arguments.length;
var i__17830__auto___25063 = (0);
while(true){
if((i__17830__auto___25063 < len__17829__auto___25062)){
args25059.push((arguments[i__17830__auto___25063]));

var G__25064 = (i__17830__auto___25063 + (1));
i__17830__auto___25063 = G__25064;
continue;
} else {
}
break;
}

var G__25061 = args25059.length;
switch (G__25061) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25059.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args25066 = [];
var len__17829__auto___25117 = arguments.length;
var i__17830__auto___25118 = (0);
while(true){
if((i__17830__auto___25118 < len__17829__auto___25117)){
args25066.push((arguments[i__17830__auto___25118]));

var G__25119 = (i__17830__auto___25118 + (1));
i__17830__auto___25118 = G__25119;
continue;
} else {
}
break;
}

var G__25068 = args25066.length;
switch (G__25068) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25066.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19796__auto___25121 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___25121,out){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___25121,out){
return (function (state_25092){
var state_val_25093 = (state_25092[(1)]);
if((state_val_25093 === (7))){
var inst_25087 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25094_25122 = state_25092__$1;
(statearr_25094_25122[(2)] = inst_25087);

(statearr_25094_25122[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (1))){
var inst_25069 = null;
var state_25092__$1 = (function (){var statearr_25095 = state_25092;
(statearr_25095[(7)] = inst_25069);

return statearr_25095;
})();
var statearr_25096_25123 = state_25092__$1;
(statearr_25096_25123[(2)] = null);

(statearr_25096_25123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (4))){
var inst_25072 = (state_25092[(8)]);
var inst_25072__$1 = (state_25092[(2)]);
var inst_25073 = (inst_25072__$1 == null);
var inst_25074 = cljs.core.not.call(null,inst_25073);
var state_25092__$1 = (function (){var statearr_25097 = state_25092;
(statearr_25097[(8)] = inst_25072__$1);

return statearr_25097;
})();
if(inst_25074){
var statearr_25098_25124 = state_25092__$1;
(statearr_25098_25124[(1)] = (5));

} else {
var statearr_25099_25125 = state_25092__$1;
(statearr_25099_25125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (6))){
var state_25092__$1 = state_25092;
var statearr_25100_25126 = state_25092__$1;
(statearr_25100_25126[(2)] = null);

(statearr_25100_25126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (3))){
var inst_25089 = (state_25092[(2)]);
var inst_25090 = cljs.core.async.close_BANG_.call(null,out);
var state_25092__$1 = (function (){var statearr_25101 = state_25092;
(statearr_25101[(9)] = inst_25089);

return statearr_25101;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25092__$1,inst_25090);
} else {
if((state_val_25093 === (2))){
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25092__$1,(4),ch);
} else {
if((state_val_25093 === (11))){
var inst_25072 = (state_25092[(8)]);
var inst_25081 = (state_25092[(2)]);
var inst_25069 = inst_25072;
var state_25092__$1 = (function (){var statearr_25102 = state_25092;
(statearr_25102[(10)] = inst_25081);

(statearr_25102[(7)] = inst_25069);

return statearr_25102;
})();
var statearr_25103_25127 = state_25092__$1;
(statearr_25103_25127[(2)] = null);

(statearr_25103_25127[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (9))){
var inst_25072 = (state_25092[(8)]);
var state_25092__$1 = state_25092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25092__$1,(11),out,inst_25072);
} else {
if((state_val_25093 === (5))){
var inst_25069 = (state_25092[(7)]);
var inst_25072 = (state_25092[(8)]);
var inst_25076 = cljs.core._EQ_.call(null,inst_25072,inst_25069);
var state_25092__$1 = state_25092;
if(inst_25076){
var statearr_25105_25128 = state_25092__$1;
(statearr_25105_25128[(1)] = (8));

} else {
var statearr_25106_25129 = state_25092__$1;
(statearr_25106_25129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (10))){
var inst_25084 = (state_25092[(2)]);
var state_25092__$1 = state_25092;
var statearr_25107_25130 = state_25092__$1;
(statearr_25107_25130[(2)] = inst_25084);

(statearr_25107_25130[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25093 === (8))){
var inst_25069 = (state_25092[(7)]);
var tmp25104 = inst_25069;
var inst_25069__$1 = tmp25104;
var state_25092__$1 = (function (){var statearr_25108 = state_25092;
(statearr_25108[(7)] = inst_25069__$1);

return statearr_25108;
})();
var statearr_25109_25131 = state_25092__$1;
(statearr_25109_25131[(2)] = null);

(statearr_25109_25131[(1)] = (2));


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
});})(c__19796__auto___25121,out))
;
return ((function (switch__19775__auto__,c__19796__auto___25121,out){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_25113 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25113[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_25113[(1)] = (1));

return statearr_25113;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_25092){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_25092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e25114){if((e25114 instanceof Object)){
var ex__19779__auto__ = e25114;
var statearr_25115_25132 = state_25092;
(statearr_25115_25132[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25133 = state_25092;
state_25092 = G__25133;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_25092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_25092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___25121,out))
})();
var state__19798__auto__ = (function (){var statearr_25116 = f__19797__auto__.call(null);
(statearr_25116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___25121);

return statearr_25116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___25121,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args25134 = [];
var len__17829__auto___25204 = arguments.length;
var i__17830__auto___25205 = (0);
while(true){
if((i__17830__auto___25205 < len__17829__auto___25204)){
args25134.push((arguments[i__17830__auto___25205]));

var G__25206 = (i__17830__auto___25205 + (1));
i__17830__auto___25205 = G__25206;
continue;
} else {
}
break;
}

var G__25136 = args25134.length;
switch (G__25136) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25134.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19796__auto___25208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___25208,out){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___25208,out){
return (function (state_25174){
var state_val_25175 = (state_25174[(1)]);
if((state_val_25175 === (7))){
var inst_25170 = (state_25174[(2)]);
var state_25174__$1 = state_25174;
var statearr_25176_25209 = state_25174__$1;
(statearr_25176_25209[(2)] = inst_25170);

(statearr_25176_25209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (1))){
var inst_25137 = (new Array(n));
var inst_25138 = inst_25137;
var inst_25139 = (0);
var state_25174__$1 = (function (){var statearr_25177 = state_25174;
(statearr_25177[(7)] = inst_25138);

(statearr_25177[(8)] = inst_25139);

return statearr_25177;
})();
var statearr_25178_25210 = state_25174__$1;
(statearr_25178_25210[(2)] = null);

(statearr_25178_25210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (4))){
var inst_25142 = (state_25174[(9)]);
var inst_25142__$1 = (state_25174[(2)]);
var inst_25143 = (inst_25142__$1 == null);
var inst_25144 = cljs.core.not.call(null,inst_25143);
var state_25174__$1 = (function (){var statearr_25179 = state_25174;
(statearr_25179[(9)] = inst_25142__$1);

return statearr_25179;
})();
if(inst_25144){
var statearr_25180_25211 = state_25174__$1;
(statearr_25180_25211[(1)] = (5));

} else {
var statearr_25181_25212 = state_25174__$1;
(statearr_25181_25212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (15))){
var inst_25164 = (state_25174[(2)]);
var state_25174__$1 = state_25174;
var statearr_25182_25213 = state_25174__$1;
(statearr_25182_25213[(2)] = inst_25164);

(statearr_25182_25213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (13))){
var state_25174__$1 = state_25174;
var statearr_25183_25214 = state_25174__$1;
(statearr_25183_25214[(2)] = null);

(statearr_25183_25214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (6))){
var inst_25139 = (state_25174[(8)]);
var inst_25160 = (inst_25139 > (0));
var state_25174__$1 = state_25174;
if(cljs.core.truth_(inst_25160)){
var statearr_25184_25215 = state_25174__$1;
(statearr_25184_25215[(1)] = (12));

} else {
var statearr_25185_25216 = state_25174__$1;
(statearr_25185_25216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (3))){
var inst_25172 = (state_25174[(2)]);
var state_25174__$1 = state_25174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25174__$1,inst_25172);
} else {
if((state_val_25175 === (12))){
var inst_25138 = (state_25174[(7)]);
var inst_25162 = cljs.core.vec.call(null,inst_25138);
var state_25174__$1 = state_25174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25174__$1,(15),out,inst_25162);
} else {
if((state_val_25175 === (2))){
var state_25174__$1 = state_25174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25174__$1,(4),ch);
} else {
if((state_val_25175 === (11))){
var inst_25154 = (state_25174[(2)]);
var inst_25155 = (new Array(n));
var inst_25138 = inst_25155;
var inst_25139 = (0);
var state_25174__$1 = (function (){var statearr_25186 = state_25174;
(statearr_25186[(7)] = inst_25138);

(statearr_25186[(10)] = inst_25154);

(statearr_25186[(8)] = inst_25139);

return statearr_25186;
})();
var statearr_25187_25217 = state_25174__$1;
(statearr_25187_25217[(2)] = null);

(statearr_25187_25217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (9))){
var inst_25138 = (state_25174[(7)]);
var inst_25152 = cljs.core.vec.call(null,inst_25138);
var state_25174__$1 = state_25174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25174__$1,(11),out,inst_25152);
} else {
if((state_val_25175 === (5))){
var inst_25138 = (state_25174[(7)]);
var inst_25147 = (state_25174[(11)]);
var inst_25139 = (state_25174[(8)]);
var inst_25142 = (state_25174[(9)]);
var inst_25146 = (inst_25138[inst_25139] = inst_25142);
var inst_25147__$1 = (inst_25139 + (1));
var inst_25148 = (inst_25147__$1 < n);
var state_25174__$1 = (function (){var statearr_25188 = state_25174;
(statearr_25188[(11)] = inst_25147__$1);

(statearr_25188[(12)] = inst_25146);

return statearr_25188;
})();
if(cljs.core.truth_(inst_25148)){
var statearr_25189_25218 = state_25174__$1;
(statearr_25189_25218[(1)] = (8));

} else {
var statearr_25190_25219 = state_25174__$1;
(statearr_25190_25219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (14))){
var inst_25167 = (state_25174[(2)]);
var inst_25168 = cljs.core.async.close_BANG_.call(null,out);
var state_25174__$1 = (function (){var statearr_25192 = state_25174;
(statearr_25192[(13)] = inst_25167);

return statearr_25192;
})();
var statearr_25193_25220 = state_25174__$1;
(statearr_25193_25220[(2)] = inst_25168);

(statearr_25193_25220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (10))){
var inst_25158 = (state_25174[(2)]);
var state_25174__$1 = state_25174;
var statearr_25194_25221 = state_25174__$1;
(statearr_25194_25221[(2)] = inst_25158);

(statearr_25194_25221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25175 === (8))){
var inst_25138 = (state_25174[(7)]);
var inst_25147 = (state_25174[(11)]);
var tmp25191 = inst_25138;
var inst_25138__$1 = tmp25191;
var inst_25139 = inst_25147;
var state_25174__$1 = (function (){var statearr_25195 = state_25174;
(statearr_25195[(7)] = inst_25138__$1);

(statearr_25195[(8)] = inst_25139);

return statearr_25195;
})();
var statearr_25196_25222 = state_25174__$1;
(statearr_25196_25222[(2)] = null);

(statearr_25196_25222[(1)] = (2));


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
});})(c__19796__auto___25208,out))
;
return ((function (switch__19775__auto__,c__19796__auto___25208,out){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_25200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25200[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_25200[(1)] = (1));

return statearr_25200;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_25174){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_25174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e25201){if((e25201 instanceof Object)){
var ex__19779__auto__ = e25201;
var statearr_25202_25223 = state_25174;
(statearr_25202_25223[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25224 = state_25174;
state_25174 = G__25224;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_25174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_25174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___25208,out))
})();
var state__19798__auto__ = (function (){var statearr_25203 = f__19797__auto__.call(null);
(statearr_25203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___25208);

return statearr_25203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___25208,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args25225 = [];
var len__17829__auto___25299 = arguments.length;
var i__17830__auto___25300 = (0);
while(true){
if((i__17830__auto___25300 < len__17829__auto___25299)){
args25225.push((arguments[i__17830__auto___25300]));

var G__25301 = (i__17830__auto___25300 + (1));
i__17830__auto___25300 = G__25301;
continue;
} else {
}
break;
}

var G__25227 = args25225.length;
switch (G__25227) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25225.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19796__auto___25303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19796__auto___25303,out){
return (function (){
var f__19797__auto__ = (function (){var switch__19775__auto__ = ((function (c__19796__auto___25303,out){
return (function (state_25269){
var state_val_25270 = (state_25269[(1)]);
if((state_val_25270 === (7))){
var inst_25265 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25271_25304 = state_25269__$1;
(statearr_25271_25304[(2)] = inst_25265);

(statearr_25271_25304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (1))){
var inst_25228 = [];
var inst_25229 = inst_25228;
var inst_25230 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_25269__$1 = (function (){var statearr_25272 = state_25269;
(statearr_25272[(7)] = inst_25229);

(statearr_25272[(8)] = inst_25230);

return statearr_25272;
})();
var statearr_25273_25305 = state_25269__$1;
(statearr_25273_25305[(2)] = null);

(statearr_25273_25305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (4))){
var inst_25233 = (state_25269[(9)]);
var inst_25233__$1 = (state_25269[(2)]);
var inst_25234 = (inst_25233__$1 == null);
var inst_25235 = cljs.core.not.call(null,inst_25234);
var state_25269__$1 = (function (){var statearr_25274 = state_25269;
(statearr_25274[(9)] = inst_25233__$1);

return statearr_25274;
})();
if(inst_25235){
var statearr_25275_25306 = state_25269__$1;
(statearr_25275_25306[(1)] = (5));

} else {
var statearr_25276_25307 = state_25269__$1;
(statearr_25276_25307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (15))){
var inst_25259 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25277_25308 = state_25269__$1;
(statearr_25277_25308[(2)] = inst_25259);

(statearr_25277_25308[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (13))){
var state_25269__$1 = state_25269;
var statearr_25278_25309 = state_25269__$1;
(statearr_25278_25309[(2)] = null);

(statearr_25278_25309[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (6))){
var inst_25229 = (state_25269[(7)]);
var inst_25254 = inst_25229.length;
var inst_25255 = (inst_25254 > (0));
var state_25269__$1 = state_25269;
if(cljs.core.truth_(inst_25255)){
var statearr_25279_25310 = state_25269__$1;
(statearr_25279_25310[(1)] = (12));

} else {
var statearr_25280_25311 = state_25269__$1;
(statearr_25280_25311[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (3))){
var inst_25267 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25269__$1,inst_25267);
} else {
if((state_val_25270 === (12))){
var inst_25229 = (state_25269[(7)]);
var inst_25257 = cljs.core.vec.call(null,inst_25229);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25269__$1,(15),out,inst_25257);
} else {
if((state_val_25270 === (2))){
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25269__$1,(4),ch);
} else {
if((state_val_25270 === (11))){
var inst_25237 = (state_25269[(10)]);
var inst_25233 = (state_25269[(9)]);
var inst_25247 = (state_25269[(2)]);
var inst_25248 = [];
var inst_25249 = inst_25248.push(inst_25233);
var inst_25229 = inst_25248;
var inst_25230 = inst_25237;
var state_25269__$1 = (function (){var statearr_25281 = state_25269;
(statearr_25281[(11)] = inst_25247);

(statearr_25281[(7)] = inst_25229);

(statearr_25281[(8)] = inst_25230);

(statearr_25281[(12)] = inst_25249);

return statearr_25281;
})();
var statearr_25282_25312 = state_25269__$1;
(statearr_25282_25312[(2)] = null);

(statearr_25282_25312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (9))){
var inst_25229 = (state_25269[(7)]);
var inst_25245 = cljs.core.vec.call(null,inst_25229);
var state_25269__$1 = state_25269;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25269__$1,(11),out,inst_25245);
} else {
if((state_val_25270 === (5))){
var inst_25237 = (state_25269[(10)]);
var inst_25233 = (state_25269[(9)]);
var inst_25230 = (state_25269[(8)]);
var inst_25237__$1 = f.call(null,inst_25233);
var inst_25238 = cljs.core._EQ_.call(null,inst_25237__$1,inst_25230);
var inst_25239 = cljs.core.keyword_identical_QMARK_.call(null,inst_25230,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_25240 = (inst_25238) || (inst_25239);
var state_25269__$1 = (function (){var statearr_25283 = state_25269;
(statearr_25283[(10)] = inst_25237__$1);

return statearr_25283;
})();
if(cljs.core.truth_(inst_25240)){
var statearr_25284_25313 = state_25269__$1;
(statearr_25284_25313[(1)] = (8));

} else {
var statearr_25285_25314 = state_25269__$1;
(statearr_25285_25314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (14))){
var inst_25262 = (state_25269[(2)]);
var inst_25263 = cljs.core.async.close_BANG_.call(null,out);
var state_25269__$1 = (function (){var statearr_25287 = state_25269;
(statearr_25287[(13)] = inst_25262);

return statearr_25287;
})();
var statearr_25288_25315 = state_25269__$1;
(statearr_25288_25315[(2)] = inst_25263);

(statearr_25288_25315[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (10))){
var inst_25252 = (state_25269[(2)]);
var state_25269__$1 = state_25269;
var statearr_25289_25316 = state_25269__$1;
(statearr_25289_25316[(2)] = inst_25252);

(statearr_25289_25316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25270 === (8))){
var inst_25237 = (state_25269[(10)]);
var inst_25229 = (state_25269[(7)]);
var inst_25233 = (state_25269[(9)]);
var inst_25242 = inst_25229.push(inst_25233);
var tmp25286 = inst_25229;
var inst_25229__$1 = tmp25286;
var inst_25230 = inst_25237;
var state_25269__$1 = (function (){var statearr_25290 = state_25269;
(statearr_25290[(14)] = inst_25242);

(statearr_25290[(7)] = inst_25229__$1);

(statearr_25290[(8)] = inst_25230);

return statearr_25290;
})();
var statearr_25291_25317 = state_25269__$1;
(statearr_25291_25317[(2)] = null);

(statearr_25291_25317[(1)] = (2));


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
});})(c__19796__auto___25303,out))
;
return ((function (switch__19775__auto__,c__19796__auto___25303,out){
return (function() {
var cljs$core$async$state_machine__19776__auto__ = null;
var cljs$core$async$state_machine__19776__auto____0 = (function (){
var statearr_25295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25295[(0)] = cljs$core$async$state_machine__19776__auto__);

(statearr_25295[(1)] = (1));

return statearr_25295;
});
var cljs$core$async$state_machine__19776__auto____1 = (function (state_25269){
while(true){
var ret_value__19777__auto__ = (function (){try{while(true){
var result__19778__auto__ = switch__19775__auto__.call(null,state_25269);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19778__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19778__auto__;
}
break;
}
}catch (e25296){if((e25296 instanceof Object)){
var ex__19779__auto__ = e25296;
var statearr_25297_25318 = state_25269;
(statearr_25297_25318[(5)] = ex__19779__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19777__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25319 = state_25269;
state_25269 = G__25319;
continue;
} else {
return ret_value__19777__auto__;
}
break;
}
});
cljs$core$async$state_machine__19776__auto__ = function(state_25269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19776__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19776__auto____1.call(this,state_25269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19776__auto____0;
cljs$core$async$state_machine__19776__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19776__auto____1;
return cljs$core$async$state_machine__19776__auto__;
})()
;})(switch__19775__auto__,c__19796__auto___25303,out))
})();
var state__19798__auto__ = (function (){var statearr_25298 = f__19797__auto__.call(null);
(statearr_25298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19796__auto___25303);

return statearr_25298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19798__auto__);
});})(c__19796__auto___25303,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map
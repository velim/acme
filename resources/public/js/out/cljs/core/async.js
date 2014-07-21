// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10951 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10951 = (function (f,fn_handler,meta10952){
this.f = f;
this.fn_handler = fn_handler;
this.meta10952 = meta10952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10951.cljs$lang$type = true;
cljs.core.async.t10951.cljs$lang$ctorStr = "cljs.core.async/t10951";
cljs.core.async.t10951.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10951");
});
cljs.core.async.t10951.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10951.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10951.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10953){var self__ = this;
var _10953__$1 = this;return self__.meta10952;
});
cljs.core.async.t10951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10953,meta10952__$1){var self__ = this;
var _10953__$1 = this;return (new cljs.core.async.t10951(self__.f,self__.fn_handler,meta10952__$1));
});
cljs.core.async.__GT_t10951 = (function __GT_t10951(f__$1,fn_handler__$1,meta10952){return (new cljs.core.async.t10951(f__$1,fn_handler__$1,meta10952));
});
}
return (new cljs.core.async.t10951(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10955 = buff;if(G__10955)
{var bit__4038__auto__ = null;if(cljs.core.truth_((function (){var or__3394__auto__ = bit__4038__auto__;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return G__10955.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10955.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10955);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10955);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_10956 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10956);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10956);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3382__auto__ = ret;if(cljs.core.truth_(and__3382__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3382__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4236__auto___10957 = n;var x_10958 = 0;while(true){
if((x_10958 < n__4236__auto___10957))
{(a[x_10958] = 0);
{
var G__10959 = (x_10958 + 1);
x_10958 = G__10959;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10960 = (i + 1);
i = G__10960;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10964 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10964 = (function (flag,alt_flag,meta10965){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10965 = meta10965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10964.cljs$lang$type = true;
cljs.core.async.t10964.cljs$lang$ctorStr = "cljs.core.async/t10964";
cljs.core.async.t10964.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10964");
});
cljs.core.async.t10964.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10964.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10964.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10964.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10966){var self__ = this;
var _10966__$1 = this;return self__.meta10965;
});
cljs.core.async.t10964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10966,meta10965__$1){var self__ = this;
var _10966__$1 = this;return (new cljs.core.async.t10964(self__.flag,self__.alt_flag,meta10965__$1));
});
cljs.core.async.__GT_t10964 = (function __GT_t10964(flag__$1,alt_flag__$1,meta10965){return (new cljs.core.async.t10964(flag__$1,alt_flag__$1,meta10965));
});
}
return (new cljs.core.async.t10964(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10970 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10970 = (function (cb,flag,alt_handler,meta10971){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10971 = meta10971;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10970.cljs$lang$type = true;
cljs.core.async.t10970.cljs$lang$ctorStr = "cljs.core.async/t10970";
cljs.core.async.t10970.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10970");
});
cljs.core.async.t10970.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10970.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10970.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10970.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10972){var self__ = this;
var _10972__$1 = this;return self__.meta10971;
});
cljs.core.async.t10970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10972,meta10971__$1){var self__ = this;
var _10972__$1 = this;return (new cljs.core.async.t10970(self__.cb,self__.flag,self__.alt_handler,meta10971__$1));
});
cljs.core.async.__GT_t10970 = (function __GT_t10970(cb__$1,flag__$1,alt_handler__$1,meta10971){return (new cljs.core.async.t10970(cb__$1,flag__$1,alt_handler__$1,meta10971));
});
}
return (new cljs.core.async.t10970(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10973_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10973_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3394__auto__ = wport;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10974 = (i + 1);
i = G__10974;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3394__auto__ = ret;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3382__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3382__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3382__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10975){var map__10977 = p__10975;var map__10977__$1 = ((cljs.core.seq_QMARK_.call(null,map__10977))?cljs.core.apply.call(null,cljs.core.hash_map,map__10977):map__10977);var opts = map__10977__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10975 = null;if (arguments.length > 1) {
  p__10975 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10975);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10978){
var ports = cljs.core.first(arglist__10978);
var p__10975 = cljs.core.rest(arglist__10978);
return alts_BANG___delegate(ports,p__10975);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10986 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10986 = (function (ch,f,map_LT_,meta10987){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10987 = meta10987;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10986.cljs$lang$type = true;
cljs.core.async.t10986.cljs$lang$ctorStr = "cljs.core.async/t10986";
cljs.core.async.t10986.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10986");
});
cljs.core.async.t10986.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10986.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10986.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10986.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10989 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10989 = (function (fn1,_,meta10987,ch,f,map_LT_,meta10990){
this.fn1 = fn1;
this._ = _;
this.meta10987 = meta10987;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10990 = meta10990;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10989.cljs$lang$type = true;
cljs.core.async.t10989.cljs$lang$ctorStr = "cljs.core.async/t10989";
cljs.core.async.t10989.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10989");
});
cljs.core.async.t10989.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10989.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10979_SHARP_){return f1.call(null,(((p1__10979_SHARP_ == null))?null:self__.f.call(null,p1__10979_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10991){var self__ = this;
var _10991__$1 = this;return self__.meta10990;
});
cljs.core.async.t10989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10991,meta10990__$1){var self__ = this;
var _10991__$1 = this;return (new cljs.core.async.t10989(self__.fn1,self__._,self__.meta10987,self__.ch,self__.f,self__.map_LT_,meta10990__$1));
});
cljs.core.async.__GT_t10989 = (function __GT_t10989(fn1__$1,___$2,meta10987__$1,ch__$2,f__$2,map_LT___$2,meta10990){return (new cljs.core.async.t10989(fn1__$1,___$2,meta10987__$1,ch__$2,f__$2,map_LT___$2,meta10990));
});
}
return (new cljs.core.async.t10989(fn1,___$1,self__.meta10987,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3382__auto__ = ret;if(cljs.core.truth_(and__3382__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3382__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t10986.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10986.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10986.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10988){var self__ = this;
var _10988__$1 = this;return self__.meta10987;
});
cljs.core.async.t10986.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10988,meta10987__$1){var self__ = this;
var _10988__$1 = this;return (new cljs.core.async.t10986(self__.ch,self__.f,self__.map_LT_,meta10987__$1));
});
cljs.core.async.__GT_t10986 = (function __GT_t10986(ch__$1,f__$1,map_LT___$1,meta10987){return (new cljs.core.async.t10986(ch__$1,f__$1,map_LT___$1,meta10987));
});
}
return (new cljs.core.async.t10986(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10995 = (function (ch,f,map_GT_,meta10996){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10996 = meta10996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10995.cljs$lang$type = true;
cljs.core.async.t10995.cljs$lang$ctorStr = "cljs.core.async/t10995";
cljs.core.async.t10995.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t10995");
});
cljs.core.async.t10995.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10995.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10995.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10995.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10995.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10995.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10997){var self__ = this;
var _10997__$1 = this;return self__.meta10996;
});
cljs.core.async.t10995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10997,meta10996__$1){var self__ = this;
var _10997__$1 = this;return (new cljs.core.async.t10995(self__.ch,self__.f,self__.map_GT_,meta10996__$1));
});
cljs.core.async.__GT_t10995 = (function __GT_t10995(ch__$1,f__$1,map_GT___$1,meta10996){return (new cljs.core.async.t10995(ch__$1,f__$1,map_GT___$1,meta10996));
});
}
return (new cljs.core.async.t10995(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11001 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11001 = (function (ch,p,filter_GT_,meta11002){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11002 = meta11002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11001.cljs$lang$type = true;
cljs.core.async.t11001.cljs$lang$ctorStr = "cljs.core.async/t11001";
cljs.core.async.t11001.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t11001");
});
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11001.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11003){var self__ = this;
var _11003__$1 = this;return self__.meta11002;
});
cljs.core.async.t11001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11003,meta11002__$1){var self__ = this;
var _11003__$1 = this;return (new cljs.core.async.t11001(self__.ch,self__.p,self__.filter_GT_,meta11002__$1));
});
cljs.core.async.__GT_t11001 = (function __GT_t11001(ch__$1,p__$1,filter_GT___$1,meta11002){return (new cljs.core.async.t11001(ch__$1,p__$1,filter_GT___$1,meta11002));
});
}
return (new cljs.core.async.t11001(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6161__auto___11086 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_11065){var state_val_11066 = (state_11065[1]);if((state_val_11066 === 1))
{var state_11065__$1 = state_11065;var statearr_11067_11087 = state_11065__$1;(statearr_11067_11087[2] = null);
(statearr_11067_11087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11066 === 2))
{var state_11065__$1 = state_11065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11065__$1,4,ch);
} else
{if((state_val_11066 === 3))
{var inst_11063 = (state_11065[2]);var state_11065__$1 = state_11065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11065__$1,inst_11063);
} else
{if((state_val_11066 === 4))
{var inst_11047 = (state_11065[7]);var inst_11047__$1 = (state_11065[2]);var inst_11048 = (inst_11047__$1 == null);var state_11065__$1 = (function (){var statearr_11068 = state_11065;(statearr_11068[7] = inst_11047__$1);
return statearr_11068;
})();if(cljs.core.truth_(inst_11048))
{var statearr_11069_11088 = state_11065__$1;(statearr_11069_11088[1] = 5);
} else
{var statearr_11070_11089 = state_11065__$1;(statearr_11070_11089[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11066 === 5))
{var inst_11050 = cljs.core.async.close_BANG_.call(null,out);var state_11065__$1 = state_11065;var statearr_11071_11090 = state_11065__$1;(statearr_11071_11090[2] = inst_11050);
(statearr_11071_11090[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11066 === 6))
{var inst_11047 = (state_11065[7]);var inst_11052 = p.call(null,inst_11047);var state_11065__$1 = state_11065;if(cljs.core.truth_(inst_11052))
{var statearr_11072_11091 = state_11065__$1;(statearr_11072_11091[1] = 8);
} else
{var statearr_11073_11092 = state_11065__$1;(statearr_11073_11092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11066 === 7))
{var inst_11061 = (state_11065[2]);var state_11065__$1 = state_11065;var statearr_11074_11093 = state_11065__$1;(statearr_11074_11093[2] = inst_11061);
(statearr_11074_11093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11066 === 8))
{var inst_11047 = (state_11065[7]);var state_11065__$1 = state_11065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11065__$1,11,out,inst_11047);
} else
{if((state_val_11066 === 9))
{var state_11065__$1 = state_11065;var statearr_11075_11094 = state_11065__$1;(statearr_11075_11094[2] = null);
(statearr_11075_11094[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11066 === 10))
{var inst_11058 = (state_11065[2]);var state_11065__$1 = (function (){var statearr_11076 = state_11065;(statearr_11076[8] = inst_11058);
return statearr_11076;
})();var statearr_11077_11095 = state_11065__$1;(statearr_11077_11095[2] = null);
(statearr_11077_11095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11066 === 11))
{var inst_11055 = (state_11065[2]);var state_11065__$1 = state_11065;var statearr_11078_11096 = state_11065__$1;(statearr_11078_11096[2] = inst_11055);
(statearr_11078_11096[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_11082 = [null,null,null,null,null,null,null,null,null];(statearr_11082[0] = state_machine__6147__auto__);
(statearr_11082[1] = 1);
return statearr_11082;
});
var state_machine__6147__auto____1 = (function (state_11065){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_11065);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e11083){if((e11083 instanceof Object))
{var ex__6150__auto__ = e11083;var statearr_11084_11097 = state_11065;(statearr_11084_11097[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11098 = state_11065;
state_11065 = G__11098;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_11065){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_11065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_11085 = f__6162__auto__.call(null);(statearr_11085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___11086);
return statearr_11085;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6161__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_11250){var state_val_11251 = (state_11250[1]);if((state_val_11251 === 1))
{var state_11250__$1 = state_11250;var statearr_11252_11289 = state_11250__$1;(statearr_11252_11289[2] = null);
(statearr_11252_11289[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 2))
{var state_11250__$1 = state_11250;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11250__$1,4,in$);
} else
{if((state_val_11251 === 3))
{var inst_11248 = (state_11250[2]);var state_11250__$1 = state_11250;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11250__$1,inst_11248);
} else
{if((state_val_11251 === 4))
{var inst_11196 = (state_11250[7]);var inst_11196__$1 = (state_11250[2]);var inst_11197 = (inst_11196__$1 == null);var state_11250__$1 = (function (){var statearr_11253 = state_11250;(statearr_11253[7] = inst_11196__$1);
return statearr_11253;
})();if(cljs.core.truth_(inst_11197))
{var statearr_11254_11290 = state_11250__$1;(statearr_11254_11290[1] = 5);
} else
{var statearr_11255_11291 = state_11250__$1;(statearr_11255_11291[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 5))
{var inst_11199 = cljs.core.async.close_BANG_.call(null,out);var state_11250__$1 = state_11250;var statearr_11256_11292 = state_11250__$1;(statearr_11256_11292[2] = inst_11199);
(statearr_11256_11292[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 6))
{var inst_11196 = (state_11250[7]);var inst_11201 = f.call(null,inst_11196);var inst_11206 = cljs.core.seq.call(null,inst_11201);var inst_11207 = inst_11206;var inst_11208 = null;var inst_11209 = 0;var inst_11210 = 0;var state_11250__$1 = (function (){var statearr_11257 = state_11250;(statearr_11257[8] = inst_11210);
(statearr_11257[9] = inst_11208);
(statearr_11257[10] = inst_11207);
(statearr_11257[11] = inst_11209);
return statearr_11257;
})();var statearr_11258_11293 = state_11250__$1;(statearr_11258_11293[2] = null);
(statearr_11258_11293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 7))
{var inst_11246 = (state_11250[2]);var state_11250__$1 = state_11250;var statearr_11259_11294 = state_11250__$1;(statearr_11259_11294[2] = inst_11246);
(statearr_11259_11294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 8))
{var inst_11210 = (state_11250[8]);var inst_11209 = (state_11250[11]);var inst_11212 = (inst_11210 < inst_11209);var inst_11213 = inst_11212;var state_11250__$1 = state_11250;if(cljs.core.truth_(inst_11213))
{var statearr_11260_11295 = state_11250__$1;(statearr_11260_11295[1] = 10);
} else
{var statearr_11261_11296 = state_11250__$1;(statearr_11261_11296[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 9))
{var inst_11243 = (state_11250[2]);var state_11250__$1 = (function (){var statearr_11262 = state_11250;(statearr_11262[12] = inst_11243);
return statearr_11262;
})();var statearr_11263_11297 = state_11250__$1;(statearr_11263_11297[2] = null);
(statearr_11263_11297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 10))
{var inst_11210 = (state_11250[8]);var inst_11208 = (state_11250[9]);var inst_11215 = cljs.core._nth.call(null,inst_11208,inst_11210);var state_11250__$1 = state_11250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11250__$1,13,out,inst_11215);
} else
{if((state_val_11251 === 11))
{var inst_11221 = (state_11250[13]);var inst_11207 = (state_11250[10]);var inst_11221__$1 = cljs.core.seq.call(null,inst_11207);var state_11250__$1 = (function (){var statearr_11267 = state_11250;(statearr_11267[13] = inst_11221__$1);
return statearr_11267;
})();if(inst_11221__$1)
{var statearr_11268_11298 = state_11250__$1;(statearr_11268_11298[1] = 14);
} else
{var statearr_11269_11299 = state_11250__$1;(statearr_11269_11299[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 12))
{var inst_11241 = (state_11250[2]);var state_11250__$1 = state_11250;var statearr_11270_11300 = state_11250__$1;(statearr_11270_11300[2] = inst_11241);
(statearr_11270_11300[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 13))
{var inst_11210 = (state_11250[8]);var inst_11208 = (state_11250[9]);var inst_11207 = (state_11250[10]);var inst_11209 = (state_11250[11]);var inst_11217 = (state_11250[2]);var inst_11218 = (inst_11210 + 1);var tmp11264 = inst_11208;var tmp11265 = inst_11207;var tmp11266 = inst_11209;var inst_11207__$1 = tmp11265;var inst_11208__$1 = tmp11264;var inst_11209__$1 = tmp11266;var inst_11210__$1 = inst_11218;var state_11250__$1 = (function (){var statearr_11271 = state_11250;(statearr_11271[14] = inst_11217);
(statearr_11271[8] = inst_11210__$1);
(statearr_11271[9] = inst_11208__$1);
(statearr_11271[10] = inst_11207__$1);
(statearr_11271[11] = inst_11209__$1);
return statearr_11271;
})();var statearr_11272_11301 = state_11250__$1;(statearr_11272_11301[2] = null);
(statearr_11272_11301[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 14))
{var inst_11221 = (state_11250[13]);var inst_11223 = cljs.core.chunked_seq_QMARK_.call(null,inst_11221);var state_11250__$1 = state_11250;if(inst_11223)
{var statearr_11273_11302 = state_11250__$1;(statearr_11273_11302[1] = 17);
} else
{var statearr_11274_11303 = state_11250__$1;(statearr_11274_11303[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 15))
{var state_11250__$1 = state_11250;var statearr_11275_11304 = state_11250__$1;(statearr_11275_11304[2] = null);
(statearr_11275_11304[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 16))
{var inst_11239 = (state_11250[2]);var state_11250__$1 = state_11250;var statearr_11276_11305 = state_11250__$1;(statearr_11276_11305[2] = inst_11239);
(statearr_11276_11305[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 17))
{var inst_11221 = (state_11250[13]);var inst_11225 = cljs.core.chunk_first.call(null,inst_11221);var inst_11226 = cljs.core.chunk_rest.call(null,inst_11221);var inst_11227 = cljs.core.count.call(null,inst_11225);var inst_11207 = inst_11226;var inst_11208 = inst_11225;var inst_11209 = inst_11227;var inst_11210 = 0;var state_11250__$1 = (function (){var statearr_11277 = state_11250;(statearr_11277[8] = inst_11210);
(statearr_11277[9] = inst_11208);
(statearr_11277[10] = inst_11207);
(statearr_11277[11] = inst_11209);
return statearr_11277;
})();var statearr_11278_11306 = state_11250__$1;(statearr_11278_11306[2] = null);
(statearr_11278_11306[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 18))
{var inst_11221 = (state_11250[13]);var inst_11230 = cljs.core.first.call(null,inst_11221);var state_11250__$1 = state_11250;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11250__$1,20,out,inst_11230);
} else
{if((state_val_11251 === 19))
{var inst_11236 = (state_11250[2]);var state_11250__$1 = state_11250;var statearr_11279_11307 = state_11250__$1;(statearr_11279_11307[2] = inst_11236);
(statearr_11279_11307[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11251 === 20))
{var inst_11221 = (state_11250[13]);var inst_11232 = (state_11250[2]);var inst_11233 = cljs.core.next.call(null,inst_11221);var inst_11207 = inst_11233;var inst_11208 = null;var inst_11209 = 0;var inst_11210 = 0;var state_11250__$1 = (function (){var statearr_11280 = state_11250;(statearr_11280[8] = inst_11210);
(statearr_11280[9] = inst_11208);
(statearr_11280[10] = inst_11207);
(statearr_11280[11] = inst_11209);
(statearr_11280[15] = inst_11232);
return statearr_11280;
})();var statearr_11281_11308 = state_11250__$1;(statearr_11281_11308[2] = null);
(statearr_11281_11308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_11285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11285[0] = state_machine__6147__auto__);
(statearr_11285[1] = 1);
return statearr_11285;
});
var state_machine__6147__auto____1 = (function (state_11250){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_11250);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e11286){if((e11286 instanceof Object))
{var ex__6150__auto__ = e11286;var statearr_11287_11309 = state_11250;(statearr_11287_11309[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11250);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11310 = state_11250;
state_11250 = G__11310;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_11250){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_11250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_11288 = f__6162__auto__.call(null);(statearr_11288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto__);
return statearr_11288;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return c__6161__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6161__auto___11391 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_11370){var state_val_11371 = (state_11370[1]);if((state_val_11371 === 1))
{var state_11370__$1 = state_11370;var statearr_11372_11392 = state_11370__$1;(statearr_11372_11392[2] = null);
(statearr_11372_11392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 2))
{var state_11370__$1 = state_11370;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11370__$1,4,from);
} else
{if((state_val_11371 === 3))
{var inst_11368 = (state_11370[2]);var state_11370__$1 = state_11370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11370__$1,inst_11368);
} else
{if((state_val_11371 === 4))
{var inst_11353 = (state_11370[7]);var inst_11353__$1 = (state_11370[2]);var inst_11354 = (inst_11353__$1 == null);var state_11370__$1 = (function (){var statearr_11373 = state_11370;(statearr_11373[7] = inst_11353__$1);
return statearr_11373;
})();if(cljs.core.truth_(inst_11354))
{var statearr_11374_11393 = state_11370__$1;(statearr_11374_11393[1] = 5);
} else
{var statearr_11375_11394 = state_11370__$1;(statearr_11375_11394[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 5))
{var state_11370__$1 = state_11370;if(cljs.core.truth_(close_QMARK_))
{var statearr_11376_11395 = state_11370__$1;(statearr_11376_11395[1] = 8);
} else
{var statearr_11377_11396 = state_11370__$1;(statearr_11377_11396[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 6))
{var inst_11353 = (state_11370[7]);var state_11370__$1 = state_11370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11370__$1,11,to,inst_11353);
} else
{if((state_val_11371 === 7))
{var inst_11366 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11378_11397 = state_11370__$1;(statearr_11378_11397[2] = inst_11366);
(statearr_11378_11397[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 8))
{var inst_11357 = cljs.core.async.close_BANG_.call(null,to);var state_11370__$1 = state_11370;var statearr_11379_11398 = state_11370__$1;(statearr_11379_11398[2] = inst_11357);
(statearr_11379_11398[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 9))
{var state_11370__$1 = state_11370;var statearr_11380_11399 = state_11370__$1;(statearr_11380_11399[2] = null);
(statearr_11380_11399[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 10))
{var inst_11360 = (state_11370[2]);var state_11370__$1 = state_11370;var statearr_11381_11400 = state_11370__$1;(statearr_11381_11400[2] = inst_11360);
(statearr_11381_11400[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11371 === 11))
{var inst_11363 = (state_11370[2]);var state_11370__$1 = (function (){var statearr_11382 = state_11370;(statearr_11382[8] = inst_11363);
return statearr_11382;
})();var statearr_11383_11401 = state_11370__$1;(statearr_11383_11401[2] = null);
(statearr_11383_11401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_11387 = [null,null,null,null,null,null,null,null,null];(statearr_11387[0] = state_machine__6147__auto__);
(statearr_11387[1] = 1);
return statearr_11387;
});
var state_machine__6147__auto____1 = (function (state_11370){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_11370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e11388){if((e11388 instanceof Object))
{var ex__6150__auto__ = e11388;var statearr_11389_11402 = state_11370;(statearr_11389_11402[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11370);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11388;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11403 = state_11370;
state_11370 = G__11403;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_11370){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_11370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_11390 = f__6162__auto__.call(null);(statearr_11390[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___11391);
return statearr_11390;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6161__auto___11490 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_11468){var state_val_11469 = (state_11468[1]);if((state_val_11469 === 1))
{var state_11468__$1 = state_11468;var statearr_11470_11491 = state_11468__$1;(statearr_11470_11491[2] = null);
(statearr_11470_11491[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11469 === 2))
{var state_11468__$1 = state_11468;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11468__$1,4,ch);
} else
{if((state_val_11469 === 3))
{var inst_11466 = (state_11468[2]);var state_11468__$1 = state_11468;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11468__$1,inst_11466);
} else
{if((state_val_11469 === 4))
{var inst_11449 = (state_11468[7]);var inst_11449__$1 = (state_11468[2]);var inst_11450 = (inst_11449__$1 == null);var state_11468__$1 = (function (){var statearr_11471 = state_11468;(statearr_11471[7] = inst_11449__$1);
return statearr_11471;
})();if(cljs.core.truth_(inst_11450))
{var statearr_11472_11492 = state_11468__$1;(statearr_11472_11492[1] = 5);
} else
{var statearr_11473_11493 = state_11468__$1;(statearr_11473_11493[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11469 === 5))
{var inst_11452 = cljs.core.async.close_BANG_.call(null,tc);var inst_11453 = cljs.core.async.close_BANG_.call(null,fc);var state_11468__$1 = (function (){var statearr_11474 = state_11468;(statearr_11474[8] = inst_11452);
return statearr_11474;
})();var statearr_11475_11494 = state_11468__$1;(statearr_11475_11494[2] = inst_11453);
(statearr_11475_11494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11469 === 6))
{var inst_11449 = (state_11468[7]);var inst_11455 = p.call(null,inst_11449);var state_11468__$1 = state_11468;if(cljs.core.truth_(inst_11455))
{var statearr_11476_11495 = state_11468__$1;(statearr_11476_11495[1] = 9);
} else
{var statearr_11477_11496 = state_11468__$1;(statearr_11477_11496[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11469 === 7))
{var inst_11464 = (state_11468[2]);var state_11468__$1 = state_11468;var statearr_11478_11497 = state_11468__$1;(statearr_11478_11497[2] = inst_11464);
(statearr_11478_11497[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11469 === 8))
{var inst_11461 = (state_11468[2]);var state_11468__$1 = (function (){var statearr_11479 = state_11468;(statearr_11479[9] = inst_11461);
return statearr_11479;
})();var statearr_11480_11498 = state_11468__$1;(statearr_11480_11498[2] = null);
(statearr_11480_11498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11469 === 9))
{var state_11468__$1 = state_11468;var statearr_11481_11499 = state_11468__$1;(statearr_11481_11499[2] = tc);
(statearr_11481_11499[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11469 === 10))
{var state_11468__$1 = state_11468;var statearr_11482_11500 = state_11468__$1;(statearr_11482_11500[2] = fc);
(statearr_11482_11500[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11469 === 11))
{var inst_11449 = (state_11468[7]);var inst_11459 = (state_11468[2]);var state_11468__$1 = state_11468;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11468__$1,8,inst_11459,inst_11449);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_11486 = [null,null,null,null,null,null,null,null,null,null];(statearr_11486[0] = state_machine__6147__auto__);
(statearr_11486[1] = 1);
return statearr_11486;
});
var state_machine__6147__auto____1 = (function (state_11468){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_11468);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e11487){if((e11487 instanceof Object))
{var ex__6150__auto__ = e11487;var statearr_11488_11501 = state_11468;(statearr_11488_11501[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11468);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11487;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11502 = state_11468;
state_11468 = G__11502;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_11468){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_11468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_11489 = f__6162__auto__.call(null);(statearr_11489[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___11490);
return statearr_11489;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6161__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_11549){var state_val_11550 = (state_11549[1]);if((state_val_11550 === 7))
{var inst_11545 = (state_11549[2]);var state_11549__$1 = state_11549;var statearr_11551_11567 = state_11549__$1;(statearr_11551_11567[2] = inst_11545);
(statearr_11551_11567[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 6))
{var inst_11535 = (state_11549[7]);var inst_11538 = (state_11549[8]);var inst_11542 = f.call(null,inst_11535,inst_11538);var inst_11535__$1 = inst_11542;var state_11549__$1 = (function (){var statearr_11552 = state_11549;(statearr_11552[7] = inst_11535__$1);
return statearr_11552;
})();var statearr_11553_11568 = state_11549__$1;(statearr_11553_11568[2] = null);
(statearr_11553_11568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 5))
{var inst_11535 = (state_11549[7]);var state_11549__$1 = state_11549;var statearr_11554_11569 = state_11549__$1;(statearr_11554_11569[2] = inst_11535);
(statearr_11554_11569[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 4))
{var inst_11538 = (state_11549[8]);var inst_11538__$1 = (state_11549[2]);var inst_11539 = (inst_11538__$1 == null);var state_11549__$1 = (function (){var statearr_11555 = state_11549;(statearr_11555[8] = inst_11538__$1);
return statearr_11555;
})();if(cljs.core.truth_(inst_11539))
{var statearr_11556_11570 = state_11549__$1;(statearr_11556_11570[1] = 5);
} else
{var statearr_11557_11571 = state_11549__$1;(statearr_11557_11571[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11550 === 3))
{var inst_11547 = (state_11549[2]);var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11549__$1,inst_11547);
} else
{if((state_val_11550 === 2))
{var state_11549__$1 = state_11549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11549__$1,4,ch);
} else
{if((state_val_11550 === 1))
{var inst_11535 = init;var state_11549__$1 = (function (){var statearr_11558 = state_11549;(statearr_11558[7] = inst_11535);
return statearr_11558;
})();var statearr_11559_11572 = state_11549__$1;(statearr_11559_11572[2] = null);
(statearr_11559_11572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_11563 = [null,null,null,null,null,null,null,null,null];(statearr_11563[0] = state_machine__6147__auto__);
(statearr_11563[1] = 1);
return statearr_11563;
});
var state_machine__6147__auto____1 = (function (state_11549){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_11549);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e11564){if((e11564 instanceof Object))
{var ex__6150__auto__ = e11564;var statearr_11565_11573 = state_11549;(statearr_11565_11573[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11574 = state_11549;
state_11549 = G__11574;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_11549){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_11549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_11566 = f__6162__auto__.call(null);(statearr_11566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto__);
return statearr_11566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return c__6161__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6161__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_11636){var state_val_11637 = (state_11636[1]);if((state_val_11637 === 1))
{var inst_11616 = cljs.core.seq.call(null,coll);var inst_11617 = inst_11616;var state_11636__$1 = (function (){var statearr_11638 = state_11636;(statearr_11638[7] = inst_11617);
return statearr_11638;
})();var statearr_11639_11657 = state_11636__$1;(statearr_11639_11657[2] = null);
(statearr_11639_11657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 2))
{var inst_11617 = (state_11636[7]);var state_11636__$1 = state_11636;if(cljs.core.truth_(inst_11617))
{var statearr_11640_11658 = state_11636__$1;(statearr_11640_11658[1] = 4);
} else
{var statearr_11641_11659 = state_11636__$1;(statearr_11641_11659[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 3))
{var inst_11634 = (state_11636[2]);var state_11636__$1 = state_11636;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11636__$1,inst_11634);
} else
{if((state_val_11637 === 4))
{var inst_11617 = (state_11636[7]);var inst_11620 = cljs.core.first.call(null,inst_11617);var state_11636__$1 = state_11636;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11636__$1,7,ch,inst_11620);
} else
{if((state_val_11637 === 5))
{var state_11636__$1 = state_11636;if(cljs.core.truth_(close_QMARK_))
{var statearr_11642_11660 = state_11636__$1;(statearr_11642_11660[1] = 8);
} else
{var statearr_11643_11661 = state_11636__$1;(statearr_11643_11661[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 6))
{var inst_11632 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11644_11662 = state_11636__$1;(statearr_11644_11662[2] = inst_11632);
(statearr_11644_11662[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 7))
{var inst_11617 = (state_11636[7]);var inst_11622 = (state_11636[2]);var inst_11623 = cljs.core.next.call(null,inst_11617);var inst_11617__$1 = inst_11623;var state_11636__$1 = (function (){var statearr_11645 = state_11636;(statearr_11645[7] = inst_11617__$1);
(statearr_11645[8] = inst_11622);
return statearr_11645;
})();var statearr_11646_11663 = state_11636__$1;(statearr_11646_11663[2] = null);
(statearr_11646_11663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 8))
{var inst_11627 = cljs.core.async.close_BANG_.call(null,ch);var state_11636__$1 = state_11636;var statearr_11647_11664 = state_11636__$1;(statearr_11647_11664[2] = inst_11627);
(statearr_11647_11664[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 9))
{var state_11636__$1 = state_11636;var statearr_11648_11665 = state_11636__$1;(statearr_11648_11665[2] = null);
(statearr_11648_11665[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11637 === 10))
{var inst_11630 = (state_11636[2]);var state_11636__$1 = state_11636;var statearr_11649_11666 = state_11636__$1;(statearr_11649_11666[2] = inst_11630);
(statearr_11649_11666[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_11653 = [null,null,null,null,null,null,null,null,null];(statearr_11653[0] = state_machine__6147__auto__);
(statearr_11653[1] = 1);
return statearr_11653;
});
var state_machine__6147__auto____1 = (function (state_11636){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_11636);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e11654){if((e11654 instanceof Object))
{var ex__6150__auto__ = e11654;var statearr_11655_11667 = state_11636;(statearr_11655_11667[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11636);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11668 = state_11636;
state_11636 = G__11668;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_11636){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_11636);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_11656 = f__6162__auto__.call(null);(statearr_11656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto__);
return statearr_11656;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return c__6161__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11670 = {};return obj11670;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3382__auto__ = _;if(and__3382__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4015__auto__ = (((_ == null))?null:_);return (function (){var or__3394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11672 = {};return obj11672;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11896 = (function (cs,ch,mult,meta11897){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11897 = meta11897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11896.cljs$lang$type = true;
cljs.core.async.t11896.cljs$lang$ctorStr = "cljs.core.async/t11896";
cljs.core.async.t11896.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t11896");
});})(cs))
;
cljs.core.async.t11896.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11896.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11896.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11896.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11896.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11896.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11898){var self__ = this;
var _11898__$1 = this;return self__.meta11897;
});})(cs))
;
cljs.core.async.t11896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11898,meta11897__$1){var self__ = this;
var _11898__$1 = this;return (new cljs.core.async.t11896(self__.cs,self__.ch,self__.mult,meta11897__$1));
});})(cs))
;
cljs.core.async.__GT_t11896 = ((function (cs){
return (function __GT_t11896(cs__$1,ch__$1,mult__$1,meta11897){return (new cljs.core.async.t11896(cs__$1,ch__$1,mult__$1,meta11897));
});})(cs))
;
}
return (new cljs.core.async.t11896(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6161__auto___12119 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_12033){var state_val_12034 = (state_12033[1]);if((state_val_12034 === 32))
{var inst_11901 = (state_12033[7]);var inst_11977 = (state_12033[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12033,31,Object,null,30);var inst_11984 = cljs.core.async.put_BANG_.call(null,inst_11977,inst_11901,done);var state_12033__$1 = state_12033;var statearr_12035_12120 = state_12033__$1;(statearr_12035_12120[2] = inst_11984);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12033__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 1))
{var state_12033__$1 = state_12033;var statearr_12036_12121 = state_12033__$1;(statearr_12036_12121[2] = null);
(statearr_12036_12121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 33))
{var inst_11990 = (state_12033[9]);var inst_11992 = cljs.core.chunked_seq_QMARK_.call(null,inst_11990);var state_12033__$1 = state_12033;if(inst_11992)
{var statearr_12037_12122 = state_12033__$1;(statearr_12037_12122[1] = 36);
} else
{var statearr_12038_12123 = state_12033__$1;(statearr_12038_12123[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 2))
{var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12033__$1,4,ch);
} else
{if((state_val_12034 === 34))
{var state_12033__$1 = state_12033;var statearr_12039_12124 = state_12033__$1;(statearr_12039_12124[2] = null);
(statearr_12039_12124[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 3))
{var inst_12031 = (state_12033[2]);var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12033__$1,inst_12031);
} else
{if((state_val_12034 === 35))
{var inst_12015 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12040_12125 = state_12033__$1;(statearr_12040_12125[2] = inst_12015);
(statearr_12040_12125[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 4))
{var inst_11901 = (state_12033[7]);var inst_11901__$1 = (state_12033[2]);var inst_11902 = (inst_11901__$1 == null);var state_12033__$1 = (function (){var statearr_12041 = state_12033;(statearr_12041[7] = inst_11901__$1);
return statearr_12041;
})();if(cljs.core.truth_(inst_11902))
{var statearr_12042_12126 = state_12033__$1;(statearr_12042_12126[1] = 5);
} else
{var statearr_12043_12127 = state_12033__$1;(statearr_12043_12127[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 36))
{var inst_11990 = (state_12033[9]);var inst_11994 = cljs.core.chunk_first.call(null,inst_11990);var inst_11995 = cljs.core.chunk_rest.call(null,inst_11990);var inst_11996 = cljs.core.count.call(null,inst_11994);var inst_11969 = inst_11995;var inst_11970 = inst_11994;var inst_11971 = inst_11996;var inst_11972 = 0;var state_12033__$1 = (function (){var statearr_12044 = state_12033;(statearr_12044[10] = inst_11972);
(statearr_12044[11] = inst_11971);
(statearr_12044[12] = inst_11970);
(statearr_12044[13] = inst_11969);
return statearr_12044;
})();var statearr_12045_12128 = state_12033__$1;(statearr_12045_12128[2] = null);
(statearr_12045_12128[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 5))
{var inst_11908 = cljs.core.deref.call(null,cs);var inst_11909 = cljs.core.seq.call(null,inst_11908);var inst_11910 = inst_11909;var inst_11911 = null;var inst_11912 = 0;var inst_11913 = 0;var state_12033__$1 = (function (){var statearr_12046 = state_12033;(statearr_12046[14] = inst_11912);
(statearr_12046[15] = inst_11911);
(statearr_12046[16] = inst_11913);
(statearr_12046[17] = inst_11910);
return statearr_12046;
})();var statearr_12047_12129 = state_12033__$1;(statearr_12047_12129[2] = null);
(statearr_12047_12129[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 37))
{var inst_11990 = (state_12033[9]);var inst_11999 = cljs.core.first.call(null,inst_11990);var state_12033__$1 = (function (){var statearr_12048 = state_12033;(statearr_12048[18] = inst_11999);
return statearr_12048;
})();var statearr_12049_12130 = state_12033__$1;(statearr_12049_12130[2] = null);
(statearr_12049_12130[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 6))
{var inst_11961 = (state_12033[19]);var inst_11960 = cljs.core.deref.call(null,cs);var inst_11961__$1 = cljs.core.keys.call(null,inst_11960);var inst_11962 = cljs.core.count.call(null,inst_11961__$1);var inst_11963 = cljs.core.reset_BANG_.call(null,dctr,inst_11962);var inst_11968 = cljs.core.seq.call(null,inst_11961__$1);var inst_11969 = inst_11968;var inst_11970 = null;var inst_11971 = 0;var inst_11972 = 0;var state_12033__$1 = (function (){var statearr_12050 = state_12033;(statearr_12050[10] = inst_11972);
(statearr_12050[11] = inst_11971);
(statearr_12050[20] = inst_11963);
(statearr_12050[12] = inst_11970);
(statearr_12050[13] = inst_11969);
(statearr_12050[19] = inst_11961__$1);
return statearr_12050;
})();var statearr_12051_12131 = state_12033__$1;(statearr_12051_12131[2] = null);
(statearr_12051_12131[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 38))
{var inst_12012 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12052_12132 = state_12033__$1;(statearr_12052_12132[2] = inst_12012);
(statearr_12052_12132[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 7))
{var inst_12029 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12053_12133 = state_12033__$1;(statearr_12053_12133[2] = inst_12029);
(statearr_12053_12133[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 39))
{var inst_11990 = (state_12033[9]);var inst_12008 = (state_12033[2]);var inst_12009 = cljs.core.next.call(null,inst_11990);var inst_11969 = inst_12009;var inst_11970 = null;var inst_11971 = 0;var inst_11972 = 0;var state_12033__$1 = (function (){var statearr_12054 = state_12033;(statearr_12054[10] = inst_11972);
(statearr_12054[11] = inst_11971);
(statearr_12054[12] = inst_11970);
(statearr_12054[13] = inst_11969);
(statearr_12054[21] = inst_12008);
return statearr_12054;
})();var statearr_12055_12134 = state_12033__$1;(statearr_12055_12134[2] = null);
(statearr_12055_12134[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 8))
{var inst_11912 = (state_12033[14]);var inst_11913 = (state_12033[16]);var inst_11915 = (inst_11913 < inst_11912);var inst_11916 = inst_11915;var state_12033__$1 = state_12033;if(cljs.core.truth_(inst_11916))
{var statearr_12056_12135 = state_12033__$1;(statearr_12056_12135[1] = 10);
} else
{var statearr_12057_12136 = state_12033__$1;(statearr_12057_12136[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 40))
{var inst_11999 = (state_12033[18]);var inst_12000 = (state_12033[2]);var inst_12001 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12002 = cljs.core.async.untap_STAR_.call(null,m,inst_11999);var state_12033__$1 = (function (){var statearr_12058 = state_12033;(statearr_12058[22] = inst_12000);
(statearr_12058[23] = inst_12001);
return statearr_12058;
})();var statearr_12059_12137 = state_12033__$1;(statearr_12059_12137[2] = inst_12002);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12033__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 9))
{var inst_11958 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12060_12138 = state_12033__$1;(statearr_12060_12138[2] = inst_11958);
(statearr_12060_12138[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 41))
{var inst_11901 = (state_12033[7]);var inst_11999 = (state_12033[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12033,40,Object,null,39);var inst_12006 = cljs.core.async.put_BANG_.call(null,inst_11999,inst_11901,done);var state_12033__$1 = state_12033;var statearr_12061_12139 = state_12033__$1;(statearr_12061_12139[2] = inst_12006);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12033__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 10))
{var inst_11911 = (state_12033[15]);var inst_11913 = (state_12033[16]);var inst_11919 = cljs.core._nth.call(null,inst_11911,inst_11913);var inst_11920 = cljs.core.nth.call(null,inst_11919,0,null);var inst_11921 = cljs.core.nth.call(null,inst_11919,1,null);var state_12033__$1 = (function (){var statearr_12062 = state_12033;(statearr_12062[24] = inst_11920);
return statearr_12062;
})();if(cljs.core.truth_(inst_11921))
{var statearr_12063_12140 = state_12033__$1;(statearr_12063_12140[1] = 13);
} else
{var statearr_12064_12141 = state_12033__$1;(statearr_12064_12141[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 42))
{var state_12033__$1 = state_12033;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12033__$1,45,dchan);
} else
{if((state_val_12034 === 11))
{var inst_11930 = (state_12033[25]);var inst_11910 = (state_12033[17]);var inst_11930__$1 = cljs.core.seq.call(null,inst_11910);var state_12033__$1 = (function (){var statearr_12065 = state_12033;(statearr_12065[25] = inst_11930__$1);
return statearr_12065;
})();if(inst_11930__$1)
{var statearr_12066_12142 = state_12033__$1;(statearr_12066_12142[1] = 16);
} else
{var statearr_12067_12143 = state_12033__$1;(statearr_12067_12143[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 43))
{var state_12033__$1 = state_12033;var statearr_12068_12144 = state_12033__$1;(statearr_12068_12144[2] = null);
(statearr_12068_12144[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 12))
{var inst_11956 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12069_12145 = state_12033__$1;(statearr_12069_12145[2] = inst_11956);
(statearr_12069_12145[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 44))
{var inst_12026 = (state_12033[2]);var state_12033__$1 = (function (){var statearr_12070 = state_12033;(statearr_12070[26] = inst_12026);
return statearr_12070;
})();var statearr_12071_12146 = state_12033__$1;(statearr_12071_12146[2] = null);
(statearr_12071_12146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 13))
{var inst_11920 = (state_12033[24]);var inst_11923 = cljs.core.async.close_BANG_.call(null,inst_11920);var state_12033__$1 = state_12033;var statearr_12072_12147 = state_12033__$1;(statearr_12072_12147[2] = inst_11923);
(statearr_12072_12147[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 45))
{var inst_12023 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12076_12148 = state_12033__$1;(statearr_12076_12148[2] = inst_12023);
(statearr_12076_12148[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 14))
{var state_12033__$1 = state_12033;var statearr_12077_12149 = state_12033__$1;(statearr_12077_12149[2] = null);
(statearr_12077_12149[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 15))
{var inst_11912 = (state_12033[14]);var inst_11911 = (state_12033[15]);var inst_11913 = (state_12033[16]);var inst_11910 = (state_12033[17]);var inst_11926 = (state_12033[2]);var inst_11927 = (inst_11913 + 1);var tmp12073 = inst_11912;var tmp12074 = inst_11911;var tmp12075 = inst_11910;var inst_11910__$1 = tmp12075;var inst_11911__$1 = tmp12074;var inst_11912__$1 = tmp12073;var inst_11913__$1 = inst_11927;var state_12033__$1 = (function (){var statearr_12078 = state_12033;(statearr_12078[14] = inst_11912__$1);
(statearr_12078[15] = inst_11911__$1);
(statearr_12078[16] = inst_11913__$1);
(statearr_12078[27] = inst_11926);
(statearr_12078[17] = inst_11910__$1);
return statearr_12078;
})();var statearr_12079_12150 = state_12033__$1;(statearr_12079_12150[2] = null);
(statearr_12079_12150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 16))
{var inst_11930 = (state_12033[25]);var inst_11932 = cljs.core.chunked_seq_QMARK_.call(null,inst_11930);var state_12033__$1 = state_12033;if(inst_11932)
{var statearr_12080_12151 = state_12033__$1;(statearr_12080_12151[1] = 19);
} else
{var statearr_12081_12152 = state_12033__$1;(statearr_12081_12152[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 17))
{var state_12033__$1 = state_12033;var statearr_12082_12153 = state_12033__$1;(statearr_12082_12153[2] = null);
(statearr_12082_12153[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 18))
{var inst_11954 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12083_12154 = state_12033__$1;(statearr_12083_12154[2] = inst_11954);
(statearr_12083_12154[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 19))
{var inst_11930 = (state_12033[25]);var inst_11934 = cljs.core.chunk_first.call(null,inst_11930);var inst_11935 = cljs.core.chunk_rest.call(null,inst_11930);var inst_11936 = cljs.core.count.call(null,inst_11934);var inst_11910 = inst_11935;var inst_11911 = inst_11934;var inst_11912 = inst_11936;var inst_11913 = 0;var state_12033__$1 = (function (){var statearr_12084 = state_12033;(statearr_12084[14] = inst_11912);
(statearr_12084[15] = inst_11911);
(statearr_12084[16] = inst_11913);
(statearr_12084[17] = inst_11910);
return statearr_12084;
})();var statearr_12085_12155 = state_12033__$1;(statearr_12085_12155[2] = null);
(statearr_12085_12155[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 20))
{var inst_11930 = (state_12033[25]);var inst_11940 = cljs.core.first.call(null,inst_11930);var inst_11941 = cljs.core.nth.call(null,inst_11940,0,null);var inst_11942 = cljs.core.nth.call(null,inst_11940,1,null);var state_12033__$1 = (function (){var statearr_12086 = state_12033;(statearr_12086[28] = inst_11941);
return statearr_12086;
})();if(cljs.core.truth_(inst_11942))
{var statearr_12087_12156 = state_12033__$1;(statearr_12087_12156[1] = 22);
} else
{var statearr_12088_12157 = state_12033__$1;(statearr_12088_12157[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 21))
{var inst_11951 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12089_12158 = state_12033__$1;(statearr_12089_12158[2] = inst_11951);
(statearr_12089_12158[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 22))
{var inst_11941 = (state_12033[28]);var inst_11944 = cljs.core.async.close_BANG_.call(null,inst_11941);var state_12033__$1 = state_12033;var statearr_12090_12159 = state_12033__$1;(statearr_12090_12159[2] = inst_11944);
(statearr_12090_12159[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 23))
{var state_12033__$1 = state_12033;var statearr_12091_12160 = state_12033__$1;(statearr_12091_12160[2] = null);
(statearr_12091_12160[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 24))
{var inst_11930 = (state_12033[25]);var inst_11947 = (state_12033[2]);var inst_11948 = cljs.core.next.call(null,inst_11930);var inst_11910 = inst_11948;var inst_11911 = null;var inst_11912 = 0;var inst_11913 = 0;var state_12033__$1 = (function (){var statearr_12092 = state_12033;(statearr_12092[29] = inst_11947);
(statearr_12092[14] = inst_11912);
(statearr_12092[15] = inst_11911);
(statearr_12092[16] = inst_11913);
(statearr_12092[17] = inst_11910);
return statearr_12092;
})();var statearr_12093_12161 = state_12033__$1;(statearr_12093_12161[2] = null);
(statearr_12093_12161[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 25))
{var inst_11972 = (state_12033[10]);var inst_11971 = (state_12033[11]);var inst_11974 = (inst_11972 < inst_11971);var inst_11975 = inst_11974;var state_12033__$1 = state_12033;if(cljs.core.truth_(inst_11975))
{var statearr_12094_12162 = state_12033__$1;(statearr_12094_12162[1] = 27);
} else
{var statearr_12095_12163 = state_12033__$1;(statearr_12095_12163[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 26))
{var inst_11961 = (state_12033[19]);var inst_12019 = (state_12033[2]);var inst_12020 = cljs.core.seq.call(null,inst_11961);var state_12033__$1 = (function (){var statearr_12096 = state_12033;(statearr_12096[30] = inst_12019);
return statearr_12096;
})();if(inst_12020)
{var statearr_12097_12164 = state_12033__$1;(statearr_12097_12164[1] = 42);
} else
{var statearr_12098_12165 = state_12033__$1;(statearr_12098_12165[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 27))
{var inst_11972 = (state_12033[10]);var inst_11970 = (state_12033[12]);var inst_11977 = cljs.core._nth.call(null,inst_11970,inst_11972);var state_12033__$1 = (function (){var statearr_12099 = state_12033;(statearr_12099[8] = inst_11977);
return statearr_12099;
})();var statearr_12100_12166 = state_12033__$1;(statearr_12100_12166[2] = null);
(statearr_12100_12166[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 28))
{var inst_11990 = (state_12033[9]);var inst_11969 = (state_12033[13]);var inst_11990__$1 = cljs.core.seq.call(null,inst_11969);var state_12033__$1 = (function (){var statearr_12104 = state_12033;(statearr_12104[9] = inst_11990__$1);
return statearr_12104;
})();if(inst_11990__$1)
{var statearr_12105_12167 = state_12033__$1;(statearr_12105_12167[1] = 33);
} else
{var statearr_12106_12168 = state_12033__$1;(statearr_12106_12168[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 29))
{var inst_12017 = (state_12033[2]);var state_12033__$1 = state_12033;var statearr_12107_12169 = state_12033__$1;(statearr_12107_12169[2] = inst_12017);
(statearr_12107_12169[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 30))
{var inst_11972 = (state_12033[10]);var inst_11971 = (state_12033[11]);var inst_11970 = (state_12033[12]);var inst_11969 = (state_12033[13]);var inst_11986 = (state_12033[2]);var inst_11987 = (inst_11972 + 1);var tmp12101 = inst_11971;var tmp12102 = inst_11970;var tmp12103 = inst_11969;var inst_11969__$1 = tmp12103;var inst_11970__$1 = tmp12102;var inst_11971__$1 = tmp12101;var inst_11972__$1 = inst_11987;var state_12033__$1 = (function (){var statearr_12108 = state_12033;(statearr_12108[10] = inst_11972__$1);
(statearr_12108[11] = inst_11971__$1);
(statearr_12108[12] = inst_11970__$1);
(statearr_12108[13] = inst_11969__$1);
(statearr_12108[31] = inst_11986);
return statearr_12108;
})();var statearr_12109_12170 = state_12033__$1;(statearr_12109_12170[2] = null);
(statearr_12109_12170[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12034 === 31))
{var inst_11977 = (state_12033[8]);var inst_11978 = (state_12033[2]);var inst_11979 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11980 = cljs.core.async.untap_STAR_.call(null,m,inst_11977);var state_12033__$1 = (function (){var statearr_12110 = state_12033;(statearr_12110[32] = inst_11978);
(statearr_12110[33] = inst_11979);
return statearr_12110;
})();var statearr_12111_12171 = state_12033__$1;(statearr_12111_12171[2] = inst_11980);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12033__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_12115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12115[0] = state_machine__6147__auto__);
(statearr_12115[1] = 1);
return statearr_12115;
});
var state_machine__6147__auto____1 = (function (state_12033){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_12033);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e12116){if((e12116 instanceof Object))
{var ex__6150__auto__ = e12116;var statearr_12117_12172 = state_12033;(statearr_12117_12172[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12173 = state_12033;
state_12033 = G__12173;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_12033){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_12033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_12118 = f__6162__auto__.call(null);(statearr_12118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___12119);
return statearr_12118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12175 = {};return obj12175;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3382__auto__ = m;if(and__3382__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4015__auto__ = (((m == null))?null:m);return (function (){var or__3394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12285 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12286){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta12286 = meta12286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12285.cljs$lang$type = true;
cljs.core.async.t12285.cljs$lang$ctorStr = "cljs.core.async/t12285";
cljs.core.async.t12285.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t12285");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12285.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12285.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12285.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12285.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12285.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12285.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12285.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12285.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12285.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12287){var self__ = this;
var _12287__$1 = this;return self__.meta12286;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12287,meta12286__$1){var self__ = this;
var _12287__$1 = this;return (new cljs.core.async.t12285(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12286__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12285 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12285(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12286){return (new cljs.core.async.t12285(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12286));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12285(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6161__auto___12394 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_12352){var state_val_12353 = (state_12352[1]);if((state_val_12353 === 1))
{var inst_12291 = (state_12352[7]);var inst_12291__$1 = calc_state.call(null);var inst_12292 = cljs.core.seq_QMARK_.call(null,inst_12291__$1);var state_12352__$1 = (function (){var statearr_12354 = state_12352;(statearr_12354[7] = inst_12291__$1);
return statearr_12354;
})();if(inst_12292)
{var statearr_12355_12395 = state_12352__$1;(statearr_12355_12395[1] = 2);
} else
{var statearr_12356_12396 = state_12352__$1;(statearr_12356_12396[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 2))
{var inst_12291 = (state_12352[7]);var inst_12294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12291);var state_12352__$1 = state_12352;var statearr_12357_12397 = state_12352__$1;(statearr_12357_12397[2] = inst_12294);
(statearr_12357_12397[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 3))
{var inst_12291 = (state_12352[7]);var state_12352__$1 = state_12352;var statearr_12358_12398 = state_12352__$1;(statearr_12358_12398[2] = inst_12291);
(statearr_12358_12398[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 4))
{var inst_12291 = (state_12352[7]);var inst_12297 = (state_12352[2]);var inst_12298 = cljs.core.get.call(null,inst_12297,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12299 = cljs.core.get.call(null,inst_12297,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12300 = cljs.core.get.call(null,inst_12297,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12301 = inst_12291;var state_12352__$1 = (function (){var statearr_12359 = state_12352;(statearr_12359[8] = inst_12301);
(statearr_12359[9] = inst_12300);
(statearr_12359[10] = inst_12299);
(statearr_12359[11] = inst_12298);
return statearr_12359;
})();var statearr_12360_12399 = state_12352__$1;(statearr_12360_12399[2] = null);
(statearr_12360_12399[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 5))
{var inst_12301 = (state_12352[8]);var inst_12304 = cljs.core.seq_QMARK_.call(null,inst_12301);var state_12352__$1 = state_12352;if(inst_12304)
{var statearr_12361_12400 = state_12352__$1;(statearr_12361_12400[1] = 7);
} else
{var statearr_12362_12401 = state_12352__$1;(statearr_12362_12401[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 6))
{var inst_12350 = (state_12352[2]);var state_12352__$1 = state_12352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12352__$1,inst_12350);
} else
{if((state_val_12353 === 7))
{var inst_12301 = (state_12352[8]);var inst_12306 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12301);var state_12352__$1 = state_12352;var statearr_12363_12402 = state_12352__$1;(statearr_12363_12402[2] = inst_12306);
(statearr_12363_12402[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 8))
{var inst_12301 = (state_12352[8]);var state_12352__$1 = state_12352;var statearr_12364_12403 = state_12352__$1;(statearr_12364_12403[2] = inst_12301);
(statearr_12364_12403[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 9))
{var inst_12309 = (state_12352[12]);var inst_12309__$1 = (state_12352[2]);var inst_12310 = cljs.core.get.call(null,inst_12309__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12311 = cljs.core.get.call(null,inst_12309__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12312 = cljs.core.get.call(null,inst_12309__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_12352__$1 = (function (){var statearr_12365 = state_12352;(statearr_12365[13] = inst_12312);
(statearr_12365[14] = inst_12311);
(statearr_12365[12] = inst_12309__$1);
return statearr_12365;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12352__$1,10,inst_12310);
} else
{if((state_val_12353 === 10))
{var inst_12316 = (state_12352[15]);var inst_12317 = (state_12352[16]);var inst_12315 = (state_12352[2]);var inst_12316__$1 = cljs.core.nth.call(null,inst_12315,0,null);var inst_12317__$1 = cljs.core.nth.call(null,inst_12315,1,null);var inst_12318 = (inst_12316__$1 == null);var inst_12319 = cljs.core._EQ_.call(null,inst_12317__$1,change);var inst_12320 = (inst_12318) || (inst_12319);var state_12352__$1 = (function (){var statearr_12366 = state_12352;(statearr_12366[15] = inst_12316__$1);
(statearr_12366[16] = inst_12317__$1);
return statearr_12366;
})();if(cljs.core.truth_(inst_12320))
{var statearr_12367_12404 = state_12352__$1;(statearr_12367_12404[1] = 11);
} else
{var statearr_12368_12405 = state_12352__$1;(statearr_12368_12405[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 11))
{var inst_12316 = (state_12352[15]);var inst_12322 = (inst_12316 == null);var state_12352__$1 = state_12352;if(cljs.core.truth_(inst_12322))
{var statearr_12369_12406 = state_12352__$1;(statearr_12369_12406[1] = 14);
} else
{var statearr_12370_12407 = state_12352__$1;(statearr_12370_12407[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 12))
{var inst_12312 = (state_12352[13]);var inst_12331 = (state_12352[17]);var inst_12317 = (state_12352[16]);var inst_12331__$1 = inst_12312.call(null,inst_12317);var state_12352__$1 = (function (){var statearr_12371 = state_12352;(statearr_12371[17] = inst_12331__$1);
return statearr_12371;
})();if(cljs.core.truth_(inst_12331__$1))
{var statearr_12372_12408 = state_12352__$1;(statearr_12372_12408[1] = 17);
} else
{var statearr_12373_12409 = state_12352__$1;(statearr_12373_12409[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 13))
{var inst_12348 = (state_12352[2]);var state_12352__$1 = state_12352;var statearr_12374_12410 = state_12352__$1;(statearr_12374_12410[2] = inst_12348);
(statearr_12374_12410[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 14))
{var inst_12317 = (state_12352[16]);var inst_12324 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12317);var state_12352__$1 = state_12352;var statearr_12375_12411 = state_12352__$1;(statearr_12375_12411[2] = inst_12324);
(statearr_12375_12411[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 15))
{var state_12352__$1 = state_12352;var statearr_12376_12412 = state_12352__$1;(statearr_12376_12412[2] = null);
(statearr_12376_12412[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 16))
{var inst_12327 = (state_12352[2]);var inst_12328 = calc_state.call(null);var inst_12301 = inst_12328;var state_12352__$1 = (function (){var statearr_12377 = state_12352;(statearr_12377[8] = inst_12301);
(statearr_12377[18] = inst_12327);
return statearr_12377;
})();var statearr_12378_12413 = state_12352__$1;(statearr_12378_12413[2] = null);
(statearr_12378_12413[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 17))
{var inst_12331 = (state_12352[17]);var state_12352__$1 = state_12352;var statearr_12379_12414 = state_12352__$1;(statearr_12379_12414[2] = inst_12331);
(statearr_12379_12414[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 18))
{var inst_12312 = (state_12352[13]);var inst_12311 = (state_12352[14]);var inst_12317 = (state_12352[16]);var inst_12334 = cljs.core.empty_QMARK_.call(null,inst_12312);var inst_12335 = inst_12311.call(null,inst_12317);var inst_12336 = cljs.core.not.call(null,inst_12335);var inst_12337 = (inst_12334) && (inst_12336);var state_12352__$1 = state_12352;var statearr_12380_12415 = state_12352__$1;(statearr_12380_12415[2] = inst_12337);
(statearr_12380_12415[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 19))
{var inst_12339 = (state_12352[2]);var state_12352__$1 = state_12352;if(cljs.core.truth_(inst_12339))
{var statearr_12381_12416 = state_12352__$1;(statearr_12381_12416[1] = 20);
} else
{var statearr_12382_12417 = state_12352__$1;(statearr_12382_12417[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 20))
{var inst_12316 = (state_12352[15]);var state_12352__$1 = state_12352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12352__$1,23,out,inst_12316);
} else
{if((state_val_12353 === 21))
{var state_12352__$1 = state_12352;var statearr_12383_12418 = state_12352__$1;(statearr_12383_12418[2] = null);
(statearr_12383_12418[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 22))
{var inst_12309 = (state_12352[12]);var inst_12345 = (state_12352[2]);var inst_12301 = inst_12309;var state_12352__$1 = (function (){var statearr_12384 = state_12352;(statearr_12384[8] = inst_12301);
(statearr_12384[19] = inst_12345);
return statearr_12384;
})();var statearr_12385_12419 = state_12352__$1;(statearr_12385_12419[2] = null);
(statearr_12385_12419[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12353 === 23))
{var inst_12342 = (state_12352[2]);var state_12352__$1 = state_12352;var statearr_12386_12420 = state_12352__$1;(statearr_12386_12420[2] = inst_12342);
(statearr_12386_12420[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_12390 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12390[0] = state_machine__6147__auto__);
(statearr_12390[1] = 1);
return statearr_12390;
});
var state_machine__6147__auto____1 = (function (state_12352){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_12352);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e12391){if((e12391 instanceof Object))
{var ex__6150__auto__ = e12391;var statearr_12392_12421 = state_12352;(statearr_12392_12421[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12352);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12391;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12422 = state_12352;
state_12352 = G__12422;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_12352){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_12352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_12393 = f__6162__auto__.call(null);(statearr_12393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___12394);
return statearr_12393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj12424 = {};return obj12424;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3382__auto__ = p;if(and__3382__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3382__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4015__auto__ = (((p == null))?null:p);return (function (){var or__3394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3382__auto__ = p;if(and__3382__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4015__auto__ = (((p == null))?null:p);return (function (){var or__3394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3382__auto__ = p;if(and__3382__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4015__auto__ = (((p == null))?null:p);return (function (){var or__3394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3382__auto__ = p;if(and__3382__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3382__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4015__auto__ = (((p == null))?null:p);return (function (){var or__3394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3394__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3394__auto__,mults){
return (function (p1__12425_SHARP_){if(cljs.core.truth_(p1__12425_SHARP_.call(null,topic)))
{return p1__12425_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__12425_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3394__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12550 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12550 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12551){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12551 = meta12551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12550.cljs$lang$type = true;
cljs.core.async.t12550.cljs$lang$ctorStr = "cljs.core.async/t12550";
cljs.core.async.t12550.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cljs.core.async/t12550");
});})(mults,ensure_mult))
;
cljs.core.async.t12550.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12550.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12550.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12550.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12550.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12550.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12550.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12550.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12552){var self__ = this;
var _12552__$1 = this;return self__.meta12551;
});})(mults,ensure_mult))
;
cljs.core.async.t12550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12552,meta12551__$1){var self__ = this;
var _12552__$1 = this;return (new cljs.core.async.t12550(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12551__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12550 = ((function (mults,ensure_mult){
return (function __GT_t12550(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12551){return (new cljs.core.async.t12550(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12551));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12550(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6161__auto___12674 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_12626){var state_val_12627 = (state_12626[1]);if((state_val_12627 === 1))
{var state_12626__$1 = state_12626;var statearr_12628_12675 = state_12626__$1;(statearr_12628_12675[2] = null);
(statearr_12628_12675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 2))
{var state_12626__$1 = state_12626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12626__$1,4,ch);
} else
{if((state_val_12627 === 3))
{var inst_12624 = (state_12626[2]);var state_12626__$1 = state_12626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12626__$1,inst_12624);
} else
{if((state_val_12627 === 4))
{var inst_12555 = (state_12626[7]);var inst_12555__$1 = (state_12626[2]);var inst_12556 = (inst_12555__$1 == null);var state_12626__$1 = (function (){var statearr_12629 = state_12626;(statearr_12629[7] = inst_12555__$1);
return statearr_12629;
})();if(cljs.core.truth_(inst_12556))
{var statearr_12630_12676 = state_12626__$1;(statearr_12630_12676[1] = 5);
} else
{var statearr_12631_12677 = state_12626__$1;(statearr_12631_12677[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 5))
{var inst_12562 = cljs.core.deref.call(null,mults);var inst_12563 = cljs.core.vals.call(null,inst_12562);var inst_12564 = cljs.core.seq.call(null,inst_12563);var inst_12565 = inst_12564;var inst_12566 = null;var inst_12567 = 0;var inst_12568 = 0;var state_12626__$1 = (function (){var statearr_12632 = state_12626;(statearr_12632[8] = inst_12567);
(statearr_12632[9] = inst_12568);
(statearr_12632[10] = inst_12566);
(statearr_12632[11] = inst_12565);
return statearr_12632;
})();var statearr_12633_12678 = state_12626__$1;(statearr_12633_12678[2] = null);
(statearr_12633_12678[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 6))
{var inst_12555 = (state_12626[7]);var inst_12605 = (state_12626[12]);var inst_12603 = (state_12626[13]);var inst_12603__$1 = topic_fn.call(null,inst_12555);var inst_12604 = cljs.core.deref.call(null,mults);var inst_12605__$1 = cljs.core.get.call(null,inst_12604,inst_12603__$1);var state_12626__$1 = (function (){var statearr_12634 = state_12626;(statearr_12634[12] = inst_12605__$1);
(statearr_12634[13] = inst_12603__$1);
return statearr_12634;
})();if(cljs.core.truth_(inst_12605__$1))
{var statearr_12635_12679 = state_12626__$1;(statearr_12635_12679[1] = 19);
} else
{var statearr_12636_12680 = state_12626__$1;(statearr_12636_12680[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 7))
{var inst_12622 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12637_12681 = state_12626__$1;(statearr_12637_12681[2] = inst_12622);
(statearr_12637_12681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 8))
{var inst_12567 = (state_12626[8]);var inst_12568 = (state_12626[9]);var inst_12570 = (inst_12568 < inst_12567);var inst_12571 = inst_12570;var state_12626__$1 = state_12626;if(cljs.core.truth_(inst_12571))
{var statearr_12641_12682 = state_12626__$1;(statearr_12641_12682[1] = 10);
} else
{var statearr_12642_12683 = state_12626__$1;(statearr_12642_12683[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 9))
{var inst_12601 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12643_12684 = state_12626__$1;(statearr_12643_12684[2] = inst_12601);
(statearr_12643_12684[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 10))
{var inst_12567 = (state_12626[8]);var inst_12568 = (state_12626[9]);var inst_12566 = (state_12626[10]);var inst_12565 = (state_12626[11]);var inst_12573 = cljs.core._nth.call(null,inst_12566,inst_12568);var inst_12574 = cljs.core.async.muxch_STAR_.call(null,inst_12573);var inst_12575 = cljs.core.async.close_BANG_.call(null,inst_12574);var inst_12576 = (inst_12568 + 1);var tmp12638 = inst_12567;var tmp12639 = inst_12566;var tmp12640 = inst_12565;var inst_12565__$1 = tmp12640;var inst_12566__$1 = tmp12639;var inst_12567__$1 = tmp12638;var inst_12568__$1 = inst_12576;var state_12626__$1 = (function (){var statearr_12644 = state_12626;(statearr_12644[8] = inst_12567__$1);
(statearr_12644[9] = inst_12568__$1);
(statearr_12644[14] = inst_12575);
(statearr_12644[10] = inst_12566__$1);
(statearr_12644[11] = inst_12565__$1);
return statearr_12644;
})();var statearr_12645_12685 = state_12626__$1;(statearr_12645_12685[2] = null);
(statearr_12645_12685[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 11))
{var inst_12579 = (state_12626[15]);var inst_12565 = (state_12626[11]);var inst_12579__$1 = cljs.core.seq.call(null,inst_12565);var state_12626__$1 = (function (){var statearr_12646 = state_12626;(statearr_12646[15] = inst_12579__$1);
return statearr_12646;
})();if(inst_12579__$1)
{var statearr_12647_12686 = state_12626__$1;(statearr_12647_12686[1] = 13);
} else
{var statearr_12648_12687 = state_12626__$1;(statearr_12648_12687[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 12))
{var inst_12599 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12649_12688 = state_12626__$1;(statearr_12649_12688[2] = inst_12599);
(statearr_12649_12688[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 13))
{var inst_12579 = (state_12626[15]);var inst_12581 = cljs.core.chunked_seq_QMARK_.call(null,inst_12579);var state_12626__$1 = state_12626;if(inst_12581)
{var statearr_12650_12689 = state_12626__$1;(statearr_12650_12689[1] = 16);
} else
{var statearr_12651_12690 = state_12626__$1;(statearr_12651_12690[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 14))
{var state_12626__$1 = state_12626;var statearr_12652_12691 = state_12626__$1;(statearr_12652_12691[2] = null);
(statearr_12652_12691[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 15))
{var inst_12597 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12653_12692 = state_12626__$1;(statearr_12653_12692[2] = inst_12597);
(statearr_12653_12692[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 16))
{var inst_12579 = (state_12626[15]);var inst_12583 = cljs.core.chunk_first.call(null,inst_12579);var inst_12584 = cljs.core.chunk_rest.call(null,inst_12579);var inst_12585 = cljs.core.count.call(null,inst_12583);var inst_12565 = inst_12584;var inst_12566 = inst_12583;var inst_12567 = inst_12585;var inst_12568 = 0;var state_12626__$1 = (function (){var statearr_12654 = state_12626;(statearr_12654[8] = inst_12567);
(statearr_12654[9] = inst_12568);
(statearr_12654[10] = inst_12566);
(statearr_12654[11] = inst_12565);
return statearr_12654;
})();var statearr_12655_12693 = state_12626__$1;(statearr_12655_12693[2] = null);
(statearr_12655_12693[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 17))
{var inst_12579 = (state_12626[15]);var inst_12588 = cljs.core.first.call(null,inst_12579);var inst_12589 = cljs.core.async.muxch_STAR_.call(null,inst_12588);var inst_12590 = cljs.core.async.close_BANG_.call(null,inst_12589);var inst_12591 = cljs.core.next.call(null,inst_12579);var inst_12565 = inst_12591;var inst_12566 = null;var inst_12567 = 0;var inst_12568 = 0;var state_12626__$1 = (function (){var statearr_12656 = state_12626;(statearr_12656[16] = inst_12590);
(statearr_12656[8] = inst_12567);
(statearr_12656[9] = inst_12568);
(statearr_12656[10] = inst_12566);
(statearr_12656[11] = inst_12565);
return statearr_12656;
})();var statearr_12657_12694 = state_12626__$1;(statearr_12657_12694[2] = null);
(statearr_12657_12694[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 18))
{var inst_12594 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12658_12695 = state_12626__$1;(statearr_12658_12695[2] = inst_12594);
(statearr_12658_12695[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 19))
{var state_12626__$1 = state_12626;var statearr_12659_12696 = state_12626__$1;(statearr_12659_12696[2] = null);
(statearr_12659_12696[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 20))
{var state_12626__$1 = state_12626;var statearr_12660_12697 = state_12626__$1;(statearr_12660_12697[2] = null);
(statearr_12660_12697[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 21))
{var inst_12619 = (state_12626[2]);var state_12626__$1 = (function (){var statearr_12661 = state_12626;(statearr_12661[17] = inst_12619);
return statearr_12661;
})();var statearr_12662_12698 = state_12626__$1;(statearr_12662_12698[2] = null);
(statearr_12662_12698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 22))
{var inst_12616 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12663_12699 = state_12626__$1;(statearr_12663_12699[2] = inst_12616);
(statearr_12663_12699[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 23))
{var inst_12603 = (state_12626[13]);var inst_12607 = (state_12626[2]);var inst_12608 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12603);var state_12626__$1 = (function (){var statearr_12664 = state_12626;(statearr_12664[18] = inst_12607);
return statearr_12664;
})();var statearr_12665_12700 = state_12626__$1;(statearr_12665_12700[2] = inst_12608);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12626__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12627 === 24))
{var inst_12555 = (state_12626[7]);var inst_12605 = (state_12626[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12626,23,Object,null,22);var inst_12612 = cljs.core.async.muxch_STAR_.call(null,inst_12605);var state_12626__$1 = state_12626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12626__$1,25,inst_12612,inst_12555);
} else
{if((state_val_12627 === 25))
{var inst_12614 = (state_12626[2]);var state_12626__$1 = state_12626;var statearr_12666_12701 = state_12626__$1;(statearr_12666_12701[2] = inst_12614);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12626__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_12670 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12670[0] = state_machine__6147__auto__);
(statearr_12670[1] = 1);
return statearr_12670;
});
var state_machine__6147__auto____1 = (function (state_12626){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_12626);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e12671){if((e12671 instanceof Object))
{var ex__6150__auto__ = e12671;var statearr_12672_12702 = state_12626;(statearr_12672_12702[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12703 = state_12626;
state_12626 = G__12703;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_12626){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_12626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_12673 = f__6162__auto__.call(null);(statearr_12673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___12674);
return statearr_12673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6161__auto___12840 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_12810){var state_val_12811 = (state_12810[1]);if((state_val_12811 === 1))
{var state_12810__$1 = state_12810;var statearr_12812_12841 = state_12810__$1;(statearr_12812_12841[2] = null);
(statearr_12812_12841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 2))
{var inst_12773 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12774 = 0;var state_12810__$1 = (function (){var statearr_12813 = state_12810;(statearr_12813[7] = inst_12774);
(statearr_12813[8] = inst_12773);
return statearr_12813;
})();var statearr_12814_12842 = state_12810__$1;(statearr_12814_12842[2] = null);
(statearr_12814_12842[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 3))
{var inst_12808 = (state_12810[2]);var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12810__$1,inst_12808);
} else
{if((state_val_12811 === 4))
{var inst_12774 = (state_12810[7]);var inst_12776 = (inst_12774 < cnt);var state_12810__$1 = state_12810;if(cljs.core.truth_(inst_12776))
{var statearr_12815_12843 = state_12810__$1;(statearr_12815_12843[1] = 6);
} else
{var statearr_12816_12844 = state_12810__$1;(statearr_12816_12844[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 5))
{var inst_12794 = (state_12810[2]);var state_12810__$1 = (function (){var statearr_12817 = state_12810;(statearr_12817[9] = inst_12794);
return statearr_12817;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12810__$1,12,dchan);
} else
{if((state_val_12811 === 6))
{var state_12810__$1 = state_12810;var statearr_12818_12845 = state_12810__$1;(statearr_12818_12845[2] = null);
(statearr_12818_12845[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 7))
{var state_12810__$1 = state_12810;var statearr_12819_12846 = state_12810__$1;(statearr_12819_12846[2] = null);
(statearr_12819_12846[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 8))
{var inst_12792 = (state_12810[2]);var state_12810__$1 = state_12810;var statearr_12820_12847 = state_12810__$1;(statearr_12820_12847[2] = inst_12792);
(statearr_12820_12847[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 9))
{var inst_12774 = (state_12810[7]);var inst_12787 = (state_12810[2]);var inst_12788 = (inst_12774 + 1);var inst_12774__$1 = inst_12788;var state_12810__$1 = (function (){var statearr_12821 = state_12810;(statearr_12821[10] = inst_12787);
(statearr_12821[7] = inst_12774__$1);
return statearr_12821;
})();var statearr_12822_12848 = state_12810__$1;(statearr_12822_12848[2] = null);
(statearr_12822_12848[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 10))
{var inst_12778 = (state_12810[2]);var inst_12779 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12810__$1 = (function (){var statearr_12823 = state_12810;(statearr_12823[11] = inst_12778);
return statearr_12823;
})();var statearr_12824_12849 = state_12810__$1;(statearr_12824_12849[2] = inst_12779);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12810__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 11))
{var inst_12774 = (state_12810[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12810,10,Object,null,9);var inst_12783 = chs__$1.call(null,inst_12774);var inst_12784 = done.call(null,inst_12774);var inst_12785 = cljs.core.async.take_BANG_.call(null,inst_12783,inst_12784);var state_12810__$1 = state_12810;var statearr_12825_12850 = state_12810__$1;(statearr_12825_12850[2] = inst_12785);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12810__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 12))
{var inst_12796 = (state_12810[12]);var inst_12796__$1 = (state_12810[2]);var inst_12797 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12796__$1);var state_12810__$1 = (function (){var statearr_12826 = state_12810;(statearr_12826[12] = inst_12796__$1);
return statearr_12826;
})();if(cljs.core.truth_(inst_12797))
{var statearr_12827_12851 = state_12810__$1;(statearr_12827_12851[1] = 13);
} else
{var statearr_12828_12852 = state_12810__$1;(statearr_12828_12852[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 13))
{var inst_12799 = cljs.core.async.close_BANG_.call(null,out);var state_12810__$1 = state_12810;var statearr_12829_12853 = state_12810__$1;(statearr_12829_12853[2] = inst_12799);
(statearr_12829_12853[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 14))
{var inst_12796 = (state_12810[12]);var inst_12801 = cljs.core.apply.call(null,f,inst_12796);var state_12810__$1 = state_12810;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12810__$1,16,out,inst_12801);
} else
{if((state_val_12811 === 15))
{var inst_12806 = (state_12810[2]);var state_12810__$1 = state_12810;var statearr_12830_12854 = state_12810__$1;(statearr_12830_12854[2] = inst_12806);
(statearr_12830_12854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12811 === 16))
{var inst_12803 = (state_12810[2]);var state_12810__$1 = (function (){var statearr_12831 = state_12810;(statearr_12831[13] = inst_12803);
return statearr_12831;
})();var statearr_12832_12855 = state_12810__$1;(statearr_12832_12855[2] = null);
(statearr_12832_12855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_12836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12836[0] = state_machine__6147__auto__);
(statearr_12836[1] = 1);
return statearr_12836;
});
var state_machine__6147__auto____1 = (function (state_12810){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_12810);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e12837){if((e12837 instanceof Object))
{var ex__6150__auto__ = e12837;var statearr_12838_12856 = state_12810;(statearr_12838_12856[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12857 = state_12810;
state_12810 = G__12857;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_12810){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_12810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_12839 = f__6162__auto__.call(null);(statearr_12839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___12840);
return statearr_12839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6161__auto___12965 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_12941){var state_val_12942 = (state_12941[1]);if((state_val_12942 === 1))
{var inst_12912 = cljs.core.vec.call(null,chs);var inst_12913 = inst_12912;var state_12941__$1 = (function (){var statearr_12943 = state_12941;(statearr_12943[7] = inst_12913);
return statearr_12943;
})();var statearr_12944_12966 = state_12941__$1;(statearr_12944_12966[2] = null);
(statearr_12944_12966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12942 === 2))
{var inst_12913 = (state_12941[7]);var inst_12915 = cljs.core.count.call(null,inst_12913);var inst_12916 = (inst_12915 > 0);var state_12941__$1 = state_12941;if(cljs.core.truth_(inst_12916))
{var statearr_12945_12967 = state_12941__$1;(statearr_12945_12967[1] = 4);
} else
{var statearr_12946_12968 = state_12941__$1;(statearr_12946_12968[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12942 === 3))
{var inst_12939 = (state_12941[2]);var state_12941__$1 = state_12941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12941__$1,inst_12939);
} else
{if((state_val_12942 === 4))
{var inst_12913 = (state_12941[7]);var state_12941__$1 = state_12941;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12941__$1,7,inst_12913);
} else
{if((state_val_12942 === 5))
{var inst_12935 = cljs.core.async.close_BANG_.call(null,out);var state_12941__$1 = state_12941;var statearr_12947_12969 = state_12941__$1;(statearr_12947_12969[2] = inst_12935);
(statearr_12947_12969[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12942 === 6))
{var inst_12937 = (state_12941[2]);var state_12941__$1 = state_12941;var statearr_12948_12970 = state_12941__$1;(statearr_12948_12970[2] = inst_12937);
(statearr_12948_12970[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12942 === 7))
{var inst_12920 = (state_12941[8]);var inst_12921 = (state_12941[9]);var inst_12920__$1 = (state_12941[2]);var inst_12921__$1 = cljs.core.nth.call(null,inst_12920__$1,0,null);var inst_12922 = cljs.core.nth.call(null,inst_12920__$1,1,null);var inst_12923 = (inst_12921__$1 == null);var state_12941__$1 = (function (){var statearr_12949 = state_12941;(statearr_12949[8] = inst_12920__$1);
(statearr_12949[9] = inst_12921__$1);
(statearr_12949[10] = inst_12922);
return statearr_12949;
})();if(cljs.core.truth_(inst_12923))
{var statearr_12950_12971 = state_12941__$1;(statearr_12950_12971[1] = 8);
} else
{var statearr_12951_12972 = state_12941__$1;(statearr_12951_12972[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12942 === 8))
{var inst_12913 = (state_12941[7]);var inst_12920 = (state_12941[8]);var inst_12921 = (state_12941[9]);var inst_12922 = (state_12941[10]);var inst_12925 = (function (){var c = inst_12922;var v = inst_12921;var vec__12918 = inst_12920;var cs = inst_12913;return ((function (c,v,vec__12918,cs,inst_12913,inst_12920,inst_12921,inst_12922,state_val_12942){
return (function (p1__12858_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12858_SHARP_);
});
;})(c,v,vec__12918,cs,inst_12913,inst_12920,inst_12921,inst_12922,state_val_12942))
})();var inst_12926 = cljs.core.filterv.call(null,inst_12925,inst_12913);var inst_12913__$1 = inst_12926;var state_12941__$1 = (function (){var statearr_12952 = state_12941;(statearr_12952[7] = inst_12913__$1);
return statearr_12952;
})();var statearr_12953_12973 = state_12941__$1;(statearr_12953_12973[2] = null);
(statearr_12953_12973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12942 === 9))
{var inst_12921 = (state_12941[9]);var state_12941__$1 = state_12941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12941__$1,11,out,inst_12921);
} else
{if((state_val_12942 === 10))
{var inst_12933 = (state_12941[2]);var state_12941__$1 = state_12941;var statearr_12955_12974 = state_12941__$1;(statearr_12955_12974[2] = inst_12933);
(statearr_12955_12974[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12942 === 11))
{var inst_12913 = (state_12941[7]);var inst_12930 = (state_12941[2]);var tmp12954 = inst_12913;var inst_12913__$1 = tmp12954;var state_12941__$1 = (function (){var statearr_12956 = state_12941;(statearr_12956[7] = inst_12913__$1);
(statearr_12956[11] = inst_12930);
return statearr_12956;
})();var statearr_12957_12975 = state_12941__$1;(statearr_12957_12975[2] = null);
(statearr_12957_12975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_12961 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12961[0] = state_machine__6147__auto__);
(statearr_12961[1] = 1);
return statearr_12961;
});
var state_machine__6147__auto____1 = (function (state_12941){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_12941);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e12962){if((e12962 instanceof Object))
{var ex__6150__auto__ = e12962;var statearr_12963_12976 = state_12941;(statearr_12963_12976[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12977 = state_12941;
state_12941 = G__12977;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_12941){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_12941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_12964 = f__6162__auto__.call(null);(statearr_12964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___12965);
return statearr_12964;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6161__auto___13070 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_13047){var state_val_13048 = (state_13047[1]);if((state_val_13048 === 1))
{var inst_13024 = 0;var state_13047__$1 = (function (){var statearr_13049 = state_13047;(statearr_13049[7] = inst_13024);
return statearr_13049;
})();var statearr_13050_13071 = state_13047__$1;(statearr_13050_13071[2] = null);
(statearr_13050_13071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13048 === 2))
{var inst_13024 = (state_13047[7]);var inst_13026 = (inst_13024 < n);var state_13047__$1 = state_13047;if(cljs.core.truth_(inst_13026))
{var statearr_13051_13072 = state_13047__$1;(statearr_13051_13072[1] = 4);
} else
{var statearr_13052_13073 = state_13047__$1;(statearr_13052_13073[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13048 === 3))
{var inst_13044 = (state_13047[2]);var inst_13045 = cljs.core.async.close_BANG_.call(null,out);var state_13047__$1 = (function (){var statearr_13053 = state_13047;(statearr_13053[8] = inst_13044);
return statearr_13053;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13047__$1,inst_13045);
} else
{if((state_val_13048 === 4))
{var state_13047__$1 = state_13047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13047__$1,7,ch);
} else
{if((state_val_13048 === 5))
{var state_13047__$1 = state_13047;var statearr_13054_13074 = state_13047__$1;(statearr_13054_13074[2] = null);
(statearr_13054_13074[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13048 === 6))
{var inst_13042 = (state_13047[2]);var state_13047__$1 = state_13047;var statearr_13055_13075 = state_13047__$1;(statearr_13055_13075[2] = inst_13042);
(statearr_13055_13075[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13048 === 7))
{var inst_13029 = (state_13047[9]);var inst_13029__$1 = (state_13047[2]);var inst_13030 = (inst_13029__$1 == null);var inst_13031 = cljs.core.not.call(null,inst_13030);var state_13047__$1 = (function (){var statearr_13056 = state_13047;(statearr_13056[9] = inst_13029__$1);
return statearr_13056;
})();if(inst_13031)
{var statearr_13057_13076 = state_13047__$1;(statearr_13057_13076[1] = 8);
} else
{var statearr_13058_13077 = state_13047__$1;(statearr_13058_13077[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13048 === 8))
{var inst_13029 = (state_13047[9]);var state_13047__$1 = state_13047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13047__$1,11,out,inst_13029);
} else
{if((state_val_13048 === 9))
{var state_13047__$1 = state_13047;var statearr_13059_13078 = state_13047__$1;(statearr_13059_13078[2] = null);
(statearr_13059_13078[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13048 === 10))
{var inst_13039 = (state_13047[2]);var state_13047__$1 = state_13047;var statearr_13060_13079 = state_13047__$1;(statearr_13060_13079[2] = inst_13039);
(statearr_13060_13079[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13048 === 11))
{var inst_13024 = (state_13047[7]);var inst_13034 = (state_13047[2]);var inst_13035 = (inst_13024 + 1);var inst_13024__$1 = inst_13035;var state_13047__$1 = (function (){var statearr_13061 = state_13047;(statearr_13061[10] = inst_13034);
(statearr_13061[7] = inst_13024__$1);
return statearr_13061;
})();var statearr_13062_13080 = state_13047__$1;(statearr_13062_13080[2] = null);
(statearr_13062_13080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_13066 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13066[0] = state_machine__6147__auto__);
(statearr_13066[1] = 1);
return statearr_13066;
});
var state_machine__6147__auto____1 = (function (state_13047){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_13047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e13067){if((e13067 instanceof Object))
{var ex__6150__auto__ = e13067;var statearr_13068_13081 = state_13047;(statearr_13068_13081[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13067;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13082 = state_13047;
state_13047 = G__13082;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_13047){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_13047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_13069 = f__6162__auto__.call(null);(statearr_13069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___13070);
return statearr_13069;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6161__auto___13179 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_13154){var state_val_13155 = (state_13154[1]);if((state_val_13155 === 1))
{var inst_13131 = null;var state_13154__$1 = (function (){var statearr_13156 = state_13154;(statearr_13156[7] = inst_13131);
return statearr_13156;
})();var statearr_13157_13180 = state_13154__$1;(statearr_13157_13180[2] = null);
(statearr_13157_13180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 2))
{var state_13154__$1 = state_13154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13154__$1,4,ch);
} else
{if((state_val_13155 === 3))
{var inst_13151 = (state_13154[2]);var inst_13152 = cljs.core.async.close_BANG_.call(null,out);var state_13154__$1 = (function (){var statearr_13158 = state_13154;(statearr_13158[8] = inst_13151);
return statearr_13158;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13154__$1,inst_13152);
} else
{if((state_val_13155 === 4))
{var inst_13134 = (state_13154[9]);var inst_13134__$1 = (state_13154[2]);var inst_13135 = (inst_13134__$1 == null);var inst_13136 = cljs.core.not.call(null,inst_13135);var state_13154__$1 = (function (){var statearr_13159 = state_13154;(statearr_13159[9] = inst_13134__$1);
return statearr_13159;
})();if(inst_13136)
{var statearr_13160_13181 = state_13154__$1;(statearr_13160_13181[1] = 5);
} else
{var statearr_13161_13182 = state_13154__$1;(statearr_13161_13182[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 5))
{var inst_13134 = (state_13154[9]);var inst_13131 = (state_13154[7]);var inst_13138 = cljs.core._EQ_.call(null,inst_13134,inst_13131);var state_13154__$1 = state_13154;if(inst_13138)
{var statearr_13162_13183 = state_13154__$1;(statearr_13162_13183[1] = 8);
} else
{var statearr_13163_13184 = state_13154__$1;(statearr_13163_13184[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 6))
{var state_13154__$1 = state_13154;var statearr_13165_13185 = state_13154__$1;(statearr_13165_13185[2] = null);
(statearr_13165_13185[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 7))
{var inst_13149 = (state_13154[2]);var state_13154__$1 = state_13154;var statearr_13166_13186 = state_13154__$1;(statearr_13166_13186[2] = inst_13149);
(statearr_13166_13186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 8))
{var inst_13131 = (state_13154[7]);var tmp13164 = inst_13131;var inst_13131__$1 = tmp13164;var state_13154__$1 = (function (){var statearr_13167 = state_13154;(statearr_13167[7] = inst_13131__$1);
return statearr_13167;
})();var statearr_13168_13187 = state_13154__$1;(statearr_13168_13187[2] = null);
(statearr_13168_13187[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 9))
{var inst_13134 = (state_13154[9]);var state_13154__$1 = state_13154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13154__$1,11,out,inst_13134);
} else
{if((state_val_13155 === 10))
{var inst_13146 = (state_13154[2]);var state_13154__$1 = state_13154;var statearr_13169_13188 = state_13154__$1;(statearr_13169_13188[2] = inst_13146);
(statearr_13169_13188[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13155 === 11))
{var inst_13134 = (state_13154[9]);var inst_13143 = (state_13154[2]);var inst_13131 = inst_13134;var state_13154__$1 = (function (){var statearr_13170 = state_13154;(statearr_13170[7] = inst_13131);
(statearr_13170[10] = inst_13143);
return statearr_13170;
})();var statearr_13171_13189 = state_13154__$1;(statearr_13171_13189[2] = null);
(statearr_13171_13189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_13175 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13175[0] = state_machine__6147__auto__);
(statearr_13175[1] = 1);
return statearr_13175;
});
var state_machine__6147__auto____1 = (function (state_13154){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_13154);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e13176){if((e13176 instanceof Object))
{var ex__6150__auto__ = e13176;var statearr_13177_13190 = state_13154;(statearr_13177_13190[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13176;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13191 = state_13154;
state_13154 = G__13191;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_13154){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_13154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_13178 = f__6162__auto__.call(null);(statearr_13178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___13179);
return statearr_13178;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6161__auto___13326 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_13296){var state_val_13297 = (state_13296[1]);if((state_val_13297 === 1))
{var inst_13259 = (new Array(n));var inst_13260 = inst_13259;var inst_13261 = 0;var state_13296__$1 = (function (){var statearr_13298 = state_13296;(statearr_13298[7] = inst_13260);
(statearr_13298[8] = inst_13261);
return statearr_13298;
})();var statearr_13299_13327 = state_13296__$1;(statearr_13299_13327[2] = null);
(statearr_13299_13327[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 2))
{var state_13296__$1 = state_13296;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13296__$1,4,ch);
} else
{if((state_val_13297 === 3))
{var inst_13294 = (state_13296[2]);var state_13296__$1 = state_13296;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13296__$1,inst_13294);
} else
{if((state_val_13297 === 4))
{var inst_13264 = (state_13296[9]);var inst_13264__$1 = (state_13296[2]);var inst_13265 = (inst_13264__$1 == null);var inst_13266 = cljs.core.not.call(null,inst_13265);var state_13296__$1 = (function (){var statearr_13300 = state_13296;(statearr_13300[9] = inst_13264__$1);
return statearr_13300;
})();if(inst_13266)
{var statearr_13301_13328 = state_13296__$1;(statearr_13301_13328[1] = 5);
} else
{var statearr_13302_13329 = state_13296__$1;(statearr_13302_13329[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 5))
{var inst_13269 = (state_13296[10]);var inst_13264 = (state_13296[9]);var inst_13260 = (state_13296[7]);var inst_13261 = (state_13296[8]);var inst_13268 = (inst_13260[inst_13261] = inst_13264);var inst_13269__$1 = (inst_13261 + 1);var inst_13270 = (inst_13269__$1 < n);var state_13296__$1 = (function (){var statearr_13303 = state_13296;(statearr_13303[10] = inst_13269__$1);
(statearr_13303[11] = inst_13268);
return statearr_13303;
})();if(cljs.core.truth_(inst_13270))
{var statearr_13304_13330 = state_13296__$1;(statearr_13304_13330[1] = 8);
} else
{var statearr_13305_13331 = state_13296__$1;(statearr_13305_13331[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 6))
{var inst_13261 = (state_13296[8]);var inst_13282 = (inst_13261 > 0);var state_13296__$1 = state_13296;if(cljs.core.truth_(inst_13282))
{var statearr_13307_13332 = state_13296__$1;(statearr_13307_13332[1] = 12);
} else
{var statearr_13308_13333 = state_13296__$1;(statearr_13308_13333[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 7))
{var inst_13292 = (state_13296[2]);var state_13296__$1 = state_13296;var statearr_13309_13334 = state_13296__$1;(statearr_13309_13334[2] = inst_13292);
(statearr_13309_13334[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 8))
{var inst_13269 = (state_13296[10]);var inst_13260 = (state_13296[7]);var tmp13306 = inst_13260;var inst_13260__$1 = tmp13306;var inst_13261 = inst_13269;var state_13296__$1 = (function (){var statearr_13310 = state_13296;(statearr_13310[7] = inst_13260__$1);
(statearr_13310[8] = inst_13261);
return statearr_13310;
})();var statearr_13311_13335 = state_13296__$1;(statearr_13311_13335[2] = null);
(statearr_13311_13335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 9))
{var inst_13260 = (state_13296[7]);var inst_13274 = cljs.core.vec.call(null,inst_13260);var state_13296__$1 = state_13296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13296__$1,11,out,inst_13274);
} else
{if((state_val_13297 === 10))
{var inst_13280 = (state_13296[2]);var state_13296__$1 = state_13296;var statearr_13312_13336 = state_13296__$1;(statearr_13312_13336[2] = inst_13280);
(statearr_13312_13336[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 11))
{var inst_13276 = (state_13296[2]);var inst_13277 = (new Array(n));var inst_13260 = inst_13277;var inst_13261 = 0;var state_13296__$1 = (function (){var statearr_13313 = state_13296;(statearr_13313[12] = inst_13276);
(statearr_13313[7] = inst_13260);
(statearr_13313[8] = inst_13261);
return statearr_13313;
})();var statearr_13314_13337 = state_13296__$1;(statearr_13314_13337[2] = null);
(statearr_13314_13337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 12))
{var inst_13260 = (state_13296[7]);var inst_13284 = cljs.core.vec.call(null,inst_13260);var state_13296__$1 = state_13296;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13296__$1,15,out,inst_13284);
} else
{if((state_val_13297 === 13))
{var state_13296__$1 = state_13296;var statearr_13315_13338 = state_13296__$1;(statearr_13315_13338[2] = null);
(statearr_13315_13338[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 14))
{var inst_13289 = (state_13296[2]);var inst_13290 = cljs.core.async.close_BANG_.call(null,out);var state_13296__$1 = (function (){var statearr_13316 = state_13296;(statearr_13316[13] = inst_13289);
return statearr_13316;
})();var statearr_13317_13339 = state_13296__$1;(statearr_13317_13339[2] = inst_13290);
(statearr_13317_13339[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13297 === 15))
{var inst_13286 = (state_13296[2]);var state_13296__$1 = state_13296;var statearr_13318_13340 = state_13296__$1;(statearr_13318_13340[2] = inst_13286);
(statearr_13318_13340[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_13322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13322[0] = state_machine__6147__auto__);
(statearr_13322[1] = 1);
return statearr_13322;
});
var state_machine__6147__auto____1 = (function (state_13296){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_13296);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e13323){if((e13323 instanceof Object))
{var ex__6150__auto__ = e13323;var statearr_13324_13341 = state_13296;(statearr_13324_13341[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13296);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13342 = state_13296;
state_13296 = G__13342;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_13296){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_13296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_13325 = f__6162__auto__.call(null);(statearr_13325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___13326);
return statearr_13325;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6161__auto___13485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_13455){var state_val_13456 = (state_13455[1]);if((state_val_13456 === 1))
{var inst_13414 = [];var inst_13415 = inst_13414;var inst_13416 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13455__$1 = (function (){var statearr_13457 = state_13455;(statearr_13457[7] = inst_13415);
(statearr_13457[8] = inst_13416);
return statearr_13457;
})();var statearr_13458_13486 = state_13455__$1;(statearr_13458_13486[2] = null);
(statearr_13458_13486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 2))
{var state_13455__$1 = state_13455;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13455__$1,4,ch);
} else
{if((state_val_13456 === 3))
{var inst_13453 = (state_13455[2]);var state_13455__$1 = state_13455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13455__$1,inst_13453);
} else
{if((state_val_13456 === 4))
{var inst_13419 = (state_13455[9]);var inst_13419__$1 = (state_13455[2]);var inst_13420 = (inst_13419__$1 == null);var inst_13421 = cljs.core.not.call(null,inst_13420);var state_13455__$1 = (function (){var statearr_13459 = state_13455;(statearr_13459[9] = inst_13419__$1);
return statearr_13459;
})();if(inst_13421)
{var statearr_13460_13487 = state_13455__$1;(statearr_13460_13487[1] = 5);
} else
{var statearr_13461_13488 = state_13455__$1;(statearr_13461_13488[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 5))
{var inst_13419 = (state_13455[9]);var inst_13423 = (state_13455[10]);var inst_13416 = (state_13455[8]);var inst_13423__$1 = f.call(null,inst_13419);var inst_13424 = cljs.core._EQ_.call(null,inst_13423__$1,inst_13416);var inst_13425 = cljs.core.keyword_identical_QMARK_.call(null,inst_13416,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_13426 = (inst_13424) || (inst_13425);var state_13455__$1 = (function (){var statearr_13462 = state_13455;(statearr_13462[10] = inst_13423__$1);
return statearr_13462;
})();if(cljs.core.truth_(inst_13426))
{var statearr_13463_13489 = state_13455__$1;(statearr_13463_13489[1] = 8);
} else
{var statearr_13464_13490 = state_13455__$1;(statearr_13464_13490[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 6))
{var inst_13415 = (state_13455[7]);var inst_13440 = inst_13415.length;var inst_13441 = (inst_13440 > 0);var state_13455__$1 = state_13455;if(cljs.core.truth_(inst_13441))
{var statearr_13466_13491 = state_13455__$1;(statearr_13466_13491[1] = 12);
} else
{var statearr_13467_13492 = state_13455__$1;(statearr_13467_13492[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 7))
{var inst_13451 = (state_13455[2]);var state_13455__$1 = state_13455;var statearr_13468_13493 = state_13455__$1;(statearr_13468_13493[2] = inst_13451);
(statearr_13468_13493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 8))
{var inst_13419 = (state_13455[9]);var inst_13423 = (state_13455[10]);var inst_13415 = (state_13455[7]);var inst_13428 = inst_13415.push(inst_13419);var tmp13465 = inst_13415;var inst_13415__$1 = tmp13465;var inst_13416 = inst_13423;var state_13455__$1 = (function (){var statearr_13469 = state_13455;(statearr_13469[11] = inst_13428);
(statearr_13469[7] = inst_13415__$1);
(statearr_13469[8] = inst_13416);
return statearr_13469;
})();var statearr_13470_13494 = state_13455__$1;(statearr_13470_13494[2] = null);
(statearr_13470_13494[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 9))
{var inst_13415 = (state_13455[7]);var inst_13431 = cljs.core.vec.call(null,inst_13415);var state_13455__$1 = state_13455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13455__$1,11,out,inst_13431);
} else
{if((state_val_13456 === 10))
{var inst_13438 = (state_13455[2]);var state_13455__$1 = state_13455;var statearr_13471_13495 = state_13455__$1;(statearr_13471_13495[2] = inst_13438);
(statearr_13471_13495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 11))
{var inst_13419 = (state_13455[9]);var inst_13423 = (state_13455[10]);var inst_13433 = (state_13455[2]);var inst_13434 = [];var inst_13435 = inst_13434.push(inst_13419);var inst_13415 = inst_13434;var inst_13416 = inst_13423;var state_13455__$1 = (function (){var statearr_13472 = state_13455;(statearr_13472[12] = inst_13435);
(statearr_13472[13] = inst_13433);
(statearr_13472[7] = inst_13415);
(statearr_13472[8] = inst_13416);
return statearr_13472;
})();var statearr_13473_13496 = state_13455__$1;(statearr_13473_13496[2] = null);
(statearr_13473_13496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 12))
{var inst_13415 = (state_13455[7]);var inst_13443 = cljs.core.vec.call(null,inst_13415);var state_13455__$1 = state_13455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13455__$1,15,out,inst_13443);
} else
{if((state_val_13456 === 13))
{var state_13455__$1 = state_13455;var statearr_13474_13497 = state_13455__$1;(statearr_13474_13497[2] = null);
(statearr_13474_13497[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 14))
{var inst_13448 = (state_13455[2]);var inst_13449 = cljs.core.async.close_BANG_.call(null,out);var state_13455__$1 = (function (){var statearr_13475 = state_13455;(statearr_13475[14] = inst_13448);
return statearr_13475;
})();var statearr_13476_13498 = state_13455__$1;(statearr_13476_13498[2] = inst_13449);
(statearr_13476_13498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13456 === 15))
{var inst_13445 = (state_13455[2]);var state_13455__$1 = state_13455;var statearr_13477_13499 = state_13455__$1;(statearr_13477_13499[2] = inst_13445);
(statearr_13477_13499[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_13481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13481[0] = state_machine__6147__auto__);
(statearr_13481[1] = 1);
return statearr_13481;
});
var state_machine__6147__auto____1 = (function (state_13455){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_13455);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e13482){if((e13482 instanceof Object))
{var ex__6150__auto__ = e13482;var statearr_13483_13500 = state_13455;(statearr_13483_13500[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13501 = state_13455;
state_13455 = G__13501;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_13455){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_13455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_13484 = f__6162__auto__.call(null);(statearr_13484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___13485);
return statearr_13484;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map
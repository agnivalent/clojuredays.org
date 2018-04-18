// Compiled by ClojureScript 1.7.228 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__12205__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12206__i = 0, G__12206__a = new Array(arguments.length -  0);
while (G__12206__i < G__12206__a.length) {G__12206__a[G__12206__i] = arguments[G__12206__i + 0]; ++G__12206__i;}
  args = new cljs.core.IndexedSeq(G__12206__a,0);
} 
return G__12205__delegate.call(this,args);};
G__12205.cljs$lang$maxFixedArity = 0;
G__12205.cljs$lang$applyTo = (function (arglist__12207){
var args = cljs.core.seq(arglist__12207);
return G__12205__delegate(args);
});
G__12205.cljs$core$IFn$_invoke$arity$variadic = G__12205__delegate;
return G__12205;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__12208__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__12208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12209__i = 0, G__12209__a = new Array(arguments.length -  0);
while (G__12209__i < G__12209__a.length) {G__12209__a[G__12209__i] = arguments[G__12209__i + 0]; ++G__12209__i;}
  args = new cljs.core.IndexedSeq(G__12209__a,0);
} 
return G__12208__delegate.call(this,args);};
G__12208.cljs$lang$maxFixedArity = 0;
G__12208.cljs$lang$applyTo = (function (arglist__12210){
var args = cljs.core.seq(arglist__12210);
return G__12208__delegate(args);
});
G__12208.cljs$core$IFn$_invoke$arity$variadic = G__12208__delegate;
return G__12208;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});

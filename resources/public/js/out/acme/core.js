// Compiled by ClojureScript 0.0-2138
goog.provide('acme.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
acme.core.widget = (function widget(p__9398,owner,opts){var map__9403 = p__9398;var map__9403__$1 = ((cljs.core.seq_QMARK_.call(null,map__9403))?cljs.core.apply.call(null,cljs.core.hash_map,map__9403):map__9403);var name = cljs.core.get.call(null,map__9403__$1,new cljs.core.Keyword(null,"name","name",1017277949));if(typeof acme.core.t9404 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t9404 = (function (name,map__9403,opts,owner,p__9398,widget,meta9405){
this.name = name;
this.map__9403 = map__9403;
this.opts = opts;
this.owner = owner;
this.p__9398 = p__9398;
this.widget = widget;
this.meta9405 = meta9405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t9404.cljs$lang$type = true;
acme.core.t9404.cljs$lang$ctorStr = "acme.core/t9404";
acme.core.t9404.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"acme.core/t9404");
});
acme.core.t9404.prototype.om$core$IRender$ = true;
acme.core.t9404.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return React.DOM.li(null,self__.name);
});
acme.core.t9404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9406){var self__ = this;
var _9406__$1 = this;return self__.meta9405;
});
acme.core.t9404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9406,meta9405__$1){var self__ = this;
var _9406__$1 = this;return (new acme.core.t9404(self__.name,self__.map__9403,self__.opts,self__.owner,self__.p__9398,self__.widget,meta9405__$1));
});
acme.core.__GT_t9404 = (function __GT_t9404(name__$1,map__9403__$2,opts__$1,owner__$1,p__9398__$1,widget__$1,meta9405){return (new acme.core.t9404(name__$1,map__9403__$2,opts__$1,owner__$1,p__9398__$1,widget__$1,meta9405));
});
}
return (new acme.core.t9404(name,map__9403__$1,opts,owner,p__9398,widget,null));
});
acme.core.widget_list = (function widget_list(p__9407){var map__9412 = p__9407;var map__9412__$1 = ((cljs.core.seq_QMARK_.call(null,map__9412))?cljs.core.apply.call(null,cljs.core.hash_map,map__9412):map__9412);var widgets = cljs.core.get.call(null,map__9412__$1,new cljs.core.Keyword(null,"widgets","widgets",2354242081));if(typeof acme.core.t9413 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t9413 = (function (widgets,map__9412,p__9407,widget_list,meta9414){
this.widgets = widgets;
this.map__9412 = map__9412;
this.p__9407 = p__9407;
this.widget_list = widget_list;
this.meta9414 = meta9414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t9413.cljs$lang$type = true;
acme.core.t9413.cljs$lang$ctorStr = "acme.core/t9413";
acme.core.t9413.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"acme.core/t9413");
});
acme.core.t9413.prototype.om$core$IRender$ = true;
acme.core.t9413.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,acme.core.widget,self__.widgets));
});
acme.core.t9413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9415){var self__ = this;
var _9415__$1 = this;return self__.meta9414;
});
acme.core.t9413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9415,meta9414__$1){var self__ = this;
var _9415__$1 = this;return (new acme.core.t9413(self__.widgets,self__.map__9412,self__.p__9407,self__.widget_list,meta9414__$1));
});
acme.core.__GT_t9413 = (function __GT_t9413(widgets__$1,map__9412__$2,p__9407__$1,widget_list__$1,meta9414){return (new acme.core.t9413(widgets__$1,map__9412__$2,p__9407__$1,widget_list__$1,meta9414));
});
}
return (new acme.core.t9413(widgets,map__9412__$1,p__9407,widget_list,null));
});
acme.core.fetch_widgets = (function fetch_widgets(url){var c = cljs.core.async.chan.call(null);var c__6161__auto___9474 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_9460){var state_val_9461 = (state_9460[1]);if((state_val_9461 === 6))
{var inst_9458 = (state_9460[2]);var state_9460__$1 = state_9460;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9460__$1,inst_9458);
} else
{if((state_val_9461 === 5))
{var inst_9454 = (state_9460[2]);var inst_9455 = cljs.core.get.call(null,inst_9454,new cljs.core.Keyword(null,"body","body",1016933652));var inst_9456 = cljs.core.vec.call(null,inst_9455);var state_9460__$1 = state_9460;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9460__$1,6,c,inst_9456);
} else
{if((state_val_9461 === 4))
{var inst_9448 = (state_9460[7]);var state_9460__$1 = state_9460;var statearr_9462_9475 = state_9460__$1;(statearr_9462_9475[2] = inst_9448);
(statearr_9462_9475[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9461 === 3))
{var inst_9448 = (state_9460[7]);var inst_9451 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9448);var state_9460__$1 = state_9460;var statearr_9463_9476 = state_9460__$1;(statearr_9463_9476[2] = inst_9451);
(statearr_9463_9476[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9461 === 2))
{var inst_9448 = (state_9460[7]);var inst_9448__$1 = (state_9460[2]);var inst_9449 = cljs.core.seq_QMARK_.call(null,inst_9448__$1);var state_9460__$1 = (function (){var statearr_9464 = state_9460;(statearr_9464[7] = inst_9448__$1);
return statearr_9464;
})();if(inst_9449)
{var statearr_9465_9477 = state_9460__$1;(statearr_9465_9477[1] = 3);
} else
{var statearr_9466_9478 = state_9460__$1;(statearr_9466_9478[1] = 4);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9461 === 1))
{var inst_9446 = cljs_http.client.get.call(null,url);var state_9460__$1 = state_9460;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9460__$1,2,inst_9446);
} else
{return null;
}
}
}
}
}
}
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_9470 = [null,null,null,null,null,null,null,null];(statearr_9470[0] = state_machine__6147__auto__);
(statearr_9470[1] = 1);
return statearr_9470;
});
var state_machine__6147__auto____1 = (function (state_9460){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_9460);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e9471){if((e9471 instanceof Object))
{var ex__6150__auto__ = e9471;var statearr_9472_9479 = state_9460;(statearr_9472_9479[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9460);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9471;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9480 = state_9460;
state_9460 = G__9480;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_9460){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_9460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_9473 = f__6162__auto__.call(null);(statearr_9473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto___9474);
return statearr_9473;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return c;
});
acme.core.widget_box = (function widget_box(app,owner,opts){if(typeof acme.core.t9523 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t9523 = (function (opts,owner,app,widget_box,meta9524){
this.opts = opts;
this.owner = owner;
this.app = app;
this.widget_box = widget_box;
this.meta9524 = meta9524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t9523.cljs$lang$type = true;
acme.core.t9523.cljs$lang$ctorStr = "acme.core/t9523";
acme.core.t9523.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"acme.core/t9523");
});
acme.core.t9523.prototype.om$core$IRender$ = true;
acme.core.t9523.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;React.DOM.h1(null,"Widgets");
return om.core.build.call(null,acme.core.widget_list,self__.app);
});
acme.core.t9523.prototype.om$core$IWillMount$ = true;
acme.core.t9523.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var c__6161__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6162__auto__ = (function (){var switch__6146__auto__ = (function (state_9547){var state_val_9548 = (state_9547[1]);if((state_val_9548 === 8))
{var inst_9539 = (state_9547[2]);var state_9547__$1 = (function (){var statearr_9549 = state_9547;(statearr_9549[7] = inst_9539);
return statearr_9549;
})();var statearr_9550_9564 = state_9547__$1;(statearr_9550_9564[2] = null);
(statearr_9550_9564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9548 === 7))
{var inst_9531 = (state_9547[2]);var inst_9532 = cljs.core.pr_str.call(null,inst_9531);var inst_9533 = console.log(inst_9532);var inst_9534 = (function (){var widgets = inst_9531;return ((function (widgets,inst_9531,inst_9532,inst_9533,state_val_9548){
return (function (p1__9481_SHARP_){return cljs.core.assoc.call(null,p1__9481_SHARP_,new cljs.core.Keyword(null,"widgets","widgets",2354242081),widgets);
});
;})(widgets,inst_9531,inst_9532,inst_9533,state_val_9548))
})();var inst_9535 = om.core.update_BANG_.call(null,self__.app,inst_9534);var inst_9536 = new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9537 = cljs.core.async.timeout.call(null,inst_9536);var state_9547__$1 = (function (){var statearr_9551 = state_9547;(statearr_9551[8] = inst_9535);
(statearr_9551[9] = inst_9533);
return statearr_9551;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9547__$1,8,inst_9537);
} else
{if((state_val_9548 === 6))
{var inst_9543 = (state_9547[2]);var state_9547__$1 = state_9547;var statearr_9552_9565 = state_9547__$1;(statearr_9552_9565[2] = inst_9543);
(statearr_9552_9565[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9548 === 5))
{var state_9547__$1 = state_9547;var statearr_9553_9566 = state_9547__$1;(statearr_9553_9566[2] = null);
(statearr_9553_9566[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9548 === 4))
{var inst_9528 = new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9529 = acme.core.fetch_widgets.call(null,inst_9528);var state_9547__$1 = state_9547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9547__$1,7,inst_9529);
} else
{if((state_val_9548 === 3))
{var inst_9545 = (state_9547[2]);var state_9547__$1 = state_9547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9547__$1,inst_9545);
} else
{if((state_val_9548 === 2))
{var state_9547__$1 = state_9547;if(true)
{var statearr_9554_9567 = state_9547__$1;(statearr_9554_9567[1] = 4);
} else
{var statearr_9555_9568 = state_9547__$1;(statearr_9555_9568[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_9548 === 1))
{var state_9547__$1 = state_9547;var statearr_9556_9569 = state_9547__$1;(statearr_9556_9569[2] = null);
(statearr_9556_9569[1] = 2);
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
});return ((function (switch__6146__auto__){
return (function() {
var state_machine__6147__auto__ = null;
var state_machine__6147__auto____0 = (function (){var statearr_9560 = [null,null,null,null,null,null,null,null,null,null];(statearr_9560[0] = state_machine__6147__auto__);
(statearr_9560[1] = 1);
return statearr_9560;
});
var state_machine__6147__auto____1 = (function (state_9547){while(true){
var ret_value__6148__auto__ = (function (){try{while(true){
var result__6149__auto__ = switch__6146__auto__.call(null,state_9547);if(cljs.core.keyword_identical_QMARK_.call(null,result__6149__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6149__auto__;
}
break;
}
}catch (e9561){if((e9561 instanceof Object))
{var ex__6150__auto__ = e9561;var statearr_9562_9570 = state_9547;(statearr_9562_9570[5] = ex__6150__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e9561;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6148__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__9571 = state_9547;
state_9547 = G__9571;
continue;
}
} else
{return ret_value__6148__auto__;
}
break;
}
});
state_machine__6147__auto__ = function(state_9547){
switch(arguments.length){
case 0:
return state_machine__6147__auto____0.call(this);
case 1:
return state_machine__6147__auto____1.call(this,state_9547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6147__auto____0;
state_machine__6147__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6147__auto____1;
return state_machine__6147__auto__;
})()
;})(switch__6146__auto__))
})();var state__6163__auto__ = (function (){var statearr_9563 = f__6162__auto__.call(null);(statearr_9563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6161__auto__);
return statearr_9563;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6163__auto__);
}));
return c__6161__auto__;
});
acme.core.t9523.prototype.om$core$IInitState$ = true;
acme.core.t9523.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",2354242081)], null),(function (){return cljs.core.PersistentVector.EMPTY;
}));
});
acme.core.t9523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9525){var self__ = this;
var _9525__$1 = this;return self__.meta9524;
});
acme.core.t9523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9525,meta9524__$1){var self__ = this;
var _9525__$1 = this;return (new acme.core.t9523(self__.opts,self__.owner,self__.app,self__.widget_box,meta9524__$1));
});
acme.core.__GT_t9523 = (function __GT_t9523(opts__$1,owner__$1,app__$1,widget_box__$1,meta9524){return (new acme.core.t9523(opts__$1,owner__$1,app__$1,widget_box__$1,meta9524));
});
}
return (new acme.core.t9523(opts,owner,app,widget_box,null));
});
acme.core.om_app = (function om_app(app,owner){if(typeof acme.core.t9575 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t9575 = (function (owner,app,om_app,meta9576){
this.owner = owner;
this.app = app;
this.om_app = om_app;
this.meta9576 = meta9576;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t9575.cljs$lang$type = true;
acme.core.t9575.cljs$lang$ctorStr = "acme.core/t9575";
acme.core.t9575.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"acme.core/t9575");
});
acme.core.t9575.prototype.om$core$IRender$ = true;
acme.core.t9575.prototype.om$core$IRender$render$arity$1 = (function (this__4917__auto__){var self__ = this;
var this__4917__auto____$1 = this;return React.DOM.div(null,om.core.build.call(null,acme.core.widget_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",1014020321),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",4249291397),10000], null)], null)));
});
acme.core.t9575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9577){var self__ = this;
var _9577__$1 = this;return self__.meta9576;
});
acme.core.t9575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9577,meta9576__$1){var self__ = this;
var _9577__$1 = this;return (new acme.core.t9575(self__.owner,self__.app,self__.om_app,meta9576__$1));
});
acme.core.__GT_t9575 = (function __GT_t9575(owner__$1,app__$1,om_app__$1,meta9576){return (new acme.core.t9575(owner__$1,app__$1,om_app__$1,meta9576));
});
}
return (new acme.core.t9575(owner,app,om_app,null));
});
acme.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.root.call(null,acme.core.app_state,acme.core.om_app,document.getElementById("content"));

//# sourceMappingURL=core.js.map
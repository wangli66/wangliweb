(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d6a6ebb"],{"0d69":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{height:"500px"},attrs:{id:"test"}},[i("wang-leaflet",{ref:"leaflet"},[i("wl-base-layer",{ref:"base1",attrs:{defaultTileServe:["skymapImage"]}}),i("wl-base-layer",{ref:"base2",attrs:{defaultTileServe:["skymapTopography"]}}),i("wl-edit-layer",{ref:"edit1"}),i("wl-edit-layer",{ref:"edit2"})],1)],1)},s=[],r=i("e11e"),n=i.n(r),h=(i("9d1c"),i("9266"),i("9f76"),i("5a1f"),{data:function(){return{name:"test..."}},methods:{show:function(){var t=this.$refs.leaflet.getMap(),e=this.$refs.base1.getBaseLayer(),i=this.$refs.base2.getBaseLayer();e=e.getLayers(),i=i.getLayers(),n.a.control.sideBySide(e[0],i[0]).addTo(t)}},mounted:function(){var t=this;this.$nextTick((function(){t.show()}))}}),o=h,l=o,d=i("2877"),f=Object(d["a"])(l,a,s,!1,null,"b456d40e",null);e["default"]=f.exports},"946a":function(t,e,i){},"9d1c":function(t,e,i){var a,s,r=i("e11e");function n(t,e,i,a){e.split(" ").forEach((function(e){r.DomEvent.on(t,e,i,a)}))}function h(t,e,i,a){e.split(" ").forEach((function(e){r.DomEvent.off(t,e,i,a)}))}function o(t){return"oninput"in t?"input":"change"}function l(){a=this._map.dragging.enabled(),s=this._map.tap&&this._map.tap.enabled(),this._map.dragging.disable(),this._map.tap&&this._map.tap.disable()}function d(t){this._refocusOnMap(t),a&&this._map.dragging.enable(),s&&this._map.tap.enable()}function f(t){return"undefined"===t?[]:Array.isArray(t)?t:[t]}function u(){}i("ffcc"),i("946a"),r.Control.SideBySide=r.Control.extend({options:{thumbSize:42,padding:0},initialize:function(t,e,i){this.setLeftLayers(t),this.setRightLayers(e),r.setOptions(this,i)},getPosition:function(){var t=this._range.value,e=(.5-t)*(2*this.options.padding+this.options.thumbSize);return this._map.getSize().x*t+e},setPosition:u,includes:r.Mixin.Events,addTo:function(t){this.remove(),this._map=t;var e=this._container=r.DomUtil.create("div","leaflet-sbs",t._controlContainer);this._divider=r.DomUtil.create("div","leaflet-sbs-divider",e);var i=this._range=r.DomUtil.create("input","leaflet-sbs-range",e);return i.type="range",i.min=0,i.max=1,i.step="any",i.value=.5,i.style.paddingLeft=i.style.paddingRight=this.options.padding+"px",this._addEvents(),this._updateLayers(),this},remove:function(){return this._map?(this._leftLayer&&(this._leftLayer.getContainer().style.clip=""),this._rightLayer&&(this._rightLayer.getContainer().style.clip=""),this._removeEvents(),r.DomUtil.remove(this._container),this._map=null,this):this},setLeftLayers:function(t){return this._leftLayers=f(t),this._updateLayers(),this},setRightLayers:function(t){return this._rightLayers=f(t),this._updateLayers(),this},_updateClip:function(){var t=this._map,e=t.containerPointToLayerPoint([0,0]),i=t.containerPointToLayerPoint(t.getSize()),a=e.x+this.getPosition(),s=this.getPosition();this._divider.style.left=s+"px",this.fire("dividermove",{x:s});var r="rect("+[e.y,a,i.y,e.x].join("px,")+"px)",n="rect("+[e.y,i.x,i.y,a].join("px,")+"px)";this._leftLayer&&(this._leftLayer.getContainer().style.clip=r),this._rightLayer&&(this._rightLayer.getContainer().style.clip=n)},_updateLayers:function(){if(!this._map)return this;var t=this._leftLayer,e=this._rightLayer;this._leftLayer=this._rightLayer=null,this._leftLayers.forEach((function(t){this._map.hasLayer(t)&&(this._leftLayer=t)}),this),this._rightLayers.forEach((function(t){this._map.hasLayer(t)&&(this._rightLayer=t)}),this),t!==this._leftLayer&&(t&&this.fire("leftlayerremove",{layer:t}),this._leftLayer&&this.fire("leftlayeradd",{layer:this._leftLayer})),e!==this._rightLayer&&(e&&this.fire("rightlayerremove",{layer:e}),this._rightLayer&&this.fire("rightlayeradd",{layer:this._rightLayer})),this._updateClip()},_addEvents:function(){var t=this._range,e=this._map;e&&t&&(e.on("move",this._updateClip,this),e.on("layeradd layerremove",this._updateLayers,this),n(t,o(t),this._updateClip,this),n(t,r.Browser.touch?"touchstart":"mousedown",l,this),n(t,r.Browser.touch?"touchend":"mouseup",d,this))},_removeEvents:function(){var t=this._range,e=this._map;t&&(h(t,o(t),this._updateClip,this),h(t,r.Browser.touch?"touchstart":"mousedown",l,this),h(t,r.Browser.touch?"touchend":"mouseup",d,this)),e&&(e.off("layeradd layerremove",this._updateLayers,this),e.off("move",this._updateClip,this))}}),r.control.sideBySide=function(t,e,i){return new r.Control.SideBySide(t,e,i)},t.exports=r.Control.SideBySide},ffcc:function(t,e,i){}}]);
//# sourceMappingURL=chunk-6d6a6ebb.deb585dd.js.map
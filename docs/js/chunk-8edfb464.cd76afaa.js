(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8edfb464"],{2061:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-tooltip",{attrs:{effect:"light"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("el-input",{attrs:{type:"textarea",rows:"8"},model:{value:e.wkt,callback:function(t){e.wkt=t},expression:"wkt"}})],1),n("el-button",{on:{click:function(t){return e.handleSetShape("wkt")}}},[e._v("设置区域wkt")])],1),n("el-divider",{attrs:{direction:"vertical"}}),n("el-tooltip",{attrs:{effect:"light"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("el-input",{attrs:{type:"textarea",rows:"8"},model:{value:e.geoJson,callback:function(t){e.geoJson=t},expression:"geoJson"}})],1),n("el-button",{on:{click:function(t){return e.handleSetShape("json")}}},[e._v("设置区域geoJson")])],1),n("el-divider",{attrs:{direction:"vertical"}}),n("el-tooltip",{attrs:{effect:"light"}},[n("div",{attrs:{slot:"content"},slot:"content"},[n("el-input",{attrs:{type:"textarea",rows:"8"},model:{value:e.defaultStyle,callback:function(t){e.defaultStyle=t},expression:"defaultStyle"}})],1),n("el-button",{on:{click:function(t){return e.handleSetStyle()}}},[e._v("设置绘制图形的样式")])],1),e._v(" 设置样式后，重新绘制的图形即生效 "),n("div",{staticClass:"self-divider"}),n("el-button",{on:{click:function(t){return e.handleDrawShape("rectangle",!0)}}},[e._v("绘制矩形（单个）")]),n("el-button",{on:{click:function(t){return e.handleDrawShape("polygon",!0)}}},[e._v("绘制多边形（单个）")]),n("el-button",{on:{click:function(t){return e.handleDrawShape("circle",!0)}}},[e._v("绘制圆形（单个）")]),n("el-button",{on:{click:function(t){return e.handleDrawShape("polyline",!0)}}},[e._v("绘制线段（单个）")]),n("el-button",{on:{click:function(t){return e.handleClearDraw()}}},[e._v("清除绘制图层")]),n("el-button",{on:{click:function(t){return e.handleDrawShape("rectangle",!1)}}},[e._v("绘制矩形（多个）")]),n("el-button",{on:{click:function(t){return e.handleDrawShape("polygon",!1)}}},[e._v("绘制多边形（多个）")]),n("el-button",{on:{click:function(t){return e.handleClearDraw(!1)}}},[e._v("结束编辑多个图形")]),n("div",{staticClass:"self-divider"}),e._v(" 面积（绘制的时候计算面积）： "),n("el-button",{on:{click:function(t){return e.handleDrawShape("polygon",!0,!0)}}},[e._v("计算多边形")]),n("el-button",{on:{click:function(t){return e.handleDrawShape("polyline",!0,!0)}}},[e._v("计算多线段")]),n("div",{staticStyle:{height:"500px","margin-top":"10px"}},[n("wang-leaflet",[n("wl-base-layer",{ref:"baseLayer"}),n("wl-edit-layer",{ref:"editLayer"})],1)],1)],1)},l=[],r=(n("ac1f"),n("5319"),n("5a1f")),o={data:function(){return{wkt:"POLYGON ((112.346191 27.819731, 112.346191 31.508435, 119.069824 31.508435, 119.069824 27.819731, 112.346191 27.819731))",geoJson:'{\n    "type": "Polygon",\n    "coordinates": [\n        [\n            [112.346191, 27.819731],\n            [112.946191, 32.508435],\n            [119.969824, 32.508435],\n            [119.069824, 27.819731],\n            [112.346191, 27.819731]\n        ]\n    ]\n}',drawShapeMore:!1,defaultStyle:'{\n    "weight": 2,\n    "color": "#f00",\n    "opacity": 0.9,\n    "fillColor": "#f00",\n    "fillOpacity": 0\n}'}},computed:{spaceStyle:function(){var e=this.defaultStyle;return e=e.replace(/\s*/g,""),e=JSON.parse(e),e}},methods:{handleSetStyle:function(){var e=this.$refs.editLayer;e.setDrawStyle(this.spaceStyle),this.$message({message:"颜色设置成功",type:"success"})},handleChange:function(){this.drawShapeMore=!this.drawShapeMore},handleDrawShape:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=this.$refs.editLayer;return t&&a.clearEditLayers(),a.setDrawShapeMore(!t),a.setEditType(e,n),a.setEditable(!0),!1},handleClearDraw:function(e){var t=this.$refs.editLayer;0!=e&&t.clearEditLayers(),t.setEditable(!1)},handleSetShape:function(e){var t="";if("wkt"===e)t=r.parse(this.wkt);else{var n=this.geoJson;n=n.replace(/\s*/g,""),t=JSON.parse(n),t={type:"Feature",properties:{},geometry:t}}var a=this.$refs.editLayer,l=a.setGeojsonParams(t,{style:this.spaceStyle});a.fitBounds(l)}}},i=o,c=i,s=(n("f72f"),n("2877")),u=Object(s["a"])(c,a,l,!1,null,"575e47c9",null);t["default"]=u.exports},de68:function(e,t,n){},f72f:function(e,t,n){"use strict";n("de68")}}]);
//# sourceMappingURL=chunk-8edfb464.cd76afaa.js.map
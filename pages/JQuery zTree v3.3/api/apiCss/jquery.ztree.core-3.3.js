/*
 * JQuery zTree core 3.3
 * http://zTree.me/
 *
 * Copyright (c) 2010 Hunter.z
 *
 * Licensed same as jquery - MIT License
 * http://www.opensource.org/licenses/mit-license.php
 *
 * email: hunter.z@263.net
 * Date: 2012-07-16
 */
(function(k){var B,C,D,E,F,G,p={},H={},q={},L=0,I={treeId:"",treeObj:null,view:{addDiyDom:null,autoCancelSelected:!0,dblClickExpand:!0,expandSpeed:"fast",fontCss:{},nameIsHTML:!1,selectedMulti:!0,showIcon:!0,showLine:!0,showTitle:!0},data:{key:{children:"children",name:"name",title:"",url:"url"},simpleData:{enable:!1,idKey:"id",pIdKey:"pId",rootPId:null},keep:{parent:!1,leaf:!1}},async:{enable:!1,contentType:"application/x-www-form-urlencoded",type:"post",dataType:"text",url:"",autoParam:[],otherParam:[],
dataFilter:null},callback:{beforeAsync:null,beforeClick:null,beforeRightClick:null,beforeMouseDown:null,beforeMouseUp:null,beforeExpand:null,beforeCollapse:null,beforeRemove:null,onAsyncError:null,onAsyncSuccess:null,onNodeCreated:null,onClick:null,onRightClick:null,onMouseDown:null,onMouseUp:null,onExpand:null,onCollapse:null,onRemove:null}},r=[function(b){var a=b.treeObj,c=e.event;a.unbind(c.NODECREATED);a.bind(c.NODECREATED,function(a,c,g){j.apply(b.callback.onNodeCreated,[a,c,g])});a.unbind(c.CLICK);
a.bind(c.CLICK,function(a,c,g,l,e){j.apply(b.callback.onClick,[c,g,l,e])});a.unbind(c.EXPAND);a.bind(c.EXPAND,function(a,c,g){j.apply(b.callback.onExpand,[a,c,g])});a.unbind(c.COLLAPSE);a.bind(c.COLLAPSE,function(a,c,g){j.apply(b.callback.onCollapse,[a,c,g])});a.unbind(c.ASYNC_SUCCESS);a.bind(c.ASYNC_SUCCESS,function(a,c,g,l){j.apply(b.callback.onAsyncSuccess,[a,c,g,l])});a.unbind(c.ASYNC_ERROR);a.bind(c.ASYNC_ERROR,function(a,c,g,l,e,h){j.apply(b.callback.onAsyncError,[a,c,g,l,e,h])})}],s=[function(b){var a=
i.getCache(b);a||(a={},i.setCache(b,a));a.nodes=[];a.doms=[]}],t=[function(b,a,c,d,f,g){if(c){var l=b.data.key.children;c.level=a;c.tId=b.treeId+"_"+ ++L;c.parentTId=d?d.tId:null;if(c[l]&&c[l].length>0){if(typeof c.open=="string")c.open=j.eqs(c.open,"true");c.open=!!c.open;c.isParent=!0;c.zAsync=!0}else{c.open=!1;if(typeof c.isParent=="string")c.isParent=j.eqs(c.isParent,"true");c.isParent=!!c.isParent;c.zAsync=!c.isParent}c.isFirstNode=f;c.isLastNode=g;c.getParentNode=function(){return i.getNodeCache(b,
c.parentTId)};c.getPreNode=function(){return i.getPreNode(b,c)};c.getNextNode=function(){return i.getNextNode(b,c)};c.isAjaxing=!1;i.fixPIdKeyValue(b,c)}}],u=[function(b){var a=b.target,c=p[b.data.treeId],d="",f=null,g="",l="",h=null,m=null,k=null;if(j.eqs(b.type,"mousedown"))l="mousedown";else if(j.eqs(b.type,"mouseup"))l="mouseup";else if(j.eqs(b.type,"contextmenu"))l="contextmenu";else if(j.eqs(b.type,"click"))if(j.eqs(a.tagName,"span")&&a.getAttribute("treeNode"+e.id.SWITCH)!==null)d=a.parentNode.id,
g="switchNode";else{if(k=j.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+e.id.A}]))d=k.parentNode.id,g="clickNode"}else if(j.eqs(b.type,"dblclick")&&(l="dblclick",k=j.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+e.id.A}])))d=k.parentNode.id,g="switchNode";if(l.length>0&&d.length==0&&(k=j.getMDom(c,a,[{tagName:"a",attrName:"treeNode"+e.id.A}])))d=k.parentNode.id;if(d.length>0)switch(f=i.getNodeCache(c,d),g){case "switchNode":f.isParent?j.eqs(b.type,"click")||j.eqs(b.type,"dblclick")&&j.apply(c.view.dblClickExpand,
[c.treeId,f],c.view.dblClickExpand)?h=B:g="":g="";break;case "clickNode":h=C}switch(l){case "mousedown":m=D;break;case "mouseup":m=E;break;case "dblclick":m=F;break;case "contextmenu":m=G}return{stop:!1,node:f,nodeEventType:g,nodeEventCallback:h,treeEventType:l,treeEventCallback:m}}],v=[function(b){var a=i.getRoot(b);a||(a={},i.setRoot(b,a));a[b.data.key.children]=[];a.expandTriggerFlag=!1;a.curSelectedList=[];a.noSelection=!0;a.createdNodes=[]}],w=[],x=[],y=[],z=[],A=[],i={addNodeCache:function(b,
a){i.getCache(b).nodes[a.tId]=a},addAfterA:function(b){x.push(b)},addBeforeA:function(b){w.push(b)},addInnerAfterA:function(b){z.push(b)},addInnerBeforeA:function(b){y.push(b)},addInitBind:function(b){r.push(b)},addInitCache:function(b){s.push(b)},addInitNode:function(b){t.push(b)},addInitProxy:function(b){u.push(b)},addInitRoot:function(b){v.push(b)},addNodesData:function(b,a,c){var d=b.data.key.children;a[d]||(a[d]=[]);if(a[d].length>0)a[d][a[d].length-1].isLastNode=!1,h.setNodeLineIcos(b,a[d][a[d].length-
1]);a.isParent=!0;a[d]=a[d].concat(c)},addSelectedNode:function(b,a){var c=i.getRoot(b);i.isSelectedNode(b,a)||c.curSelectedList.push(a)},addCreatedNode:function(b,a){(b.callback.onNodeCreated||b.view.addDiyDom)&&i.getRoot(b).createdNodes.push(a)},addZTreeTools:function(b){A.push(b)},exSetting:function(b){k.extend(!0,I,b)},fixPIdKeyValue:function(b,a){b.data.simpleData.enable&&(a[b.data.simpleData.pIdKey]=a.parentTId?a.getParentNode()[b.data.simpleData.idKey]:b.data.simpleData.rootPId)},getAfterA:function(b,
a,c){for(var d=0,f=x.length;d<f;d++)x[d].apply(this,arguments)},getBeforeA:function(b,a,c){for(var d=0,f=w.length;d<f;d++)w[d].apply(this,arguments)},getInnerAfterA:function(b,a,c){for(var d=0,f=z.length;d<f;d++)z[d].apply(this,arguments)},getInnerBeforeA:function(b,a,c){for(var d=0,f=y.length;d<f;d++)y[d].apply(this,arguments)},getCache:function(b){return q[b.treeId]},getNextNode:function(b,a){if(!a)return null;for(var c=b.data.key.children,d=a.parentTId?a.getParentNode():i.getRoot(b),f=0,g=d[c].length-
1;f<=g;f++)if(d[c][f]===a)return f==g?null:d[c][f+1];return null},getNodeByParam:function(b,a,c,d){if(!a||!c)return null;for(var f=b.data.key.children,g=0,l=a.length;g<l;g++){if(a[g][c]==d)return a[g];var e=i.getNodeByParam(b,a[g][f],c,d);if(e)return e}return null},getNodeCache:function(b,a){if(!a)return null;var c=q[b.treeId].nodes[a];return c?c:null},getNodes:function(b){return i.getRoot(b)[b.data.key.children]},getNodesByParam:function(b,a,c,d){if(!a||!c)return[];for(var f=b.data.key.children,
g=[],l=0,e=a.length;l<e;l++)a[l][c]==d&&g.push(a[l]),g=g.concat(i.getNodesByParam(b,a[l][f],c,d));return g},getNodesByParamFuzzy:function(b,a,c,d){if(!a||!c)return[];for(var f=b.data.key.children,g=[],l=0,e=a.length;l<e;l++)typeof a[l][c]=="string"&&a[l][c].indexOf(d)>-1&&g.push(a[l]),g=g.concat(i.getNodesByParamFuzzy(b,a[l][f],c,d));return g},getNodesByFilter:function(b,a,c,d,f){if(!a)return d?null:[];for(var g=b.data.key.children,l=d?null:[],e=0,h=a.length;e<h;e++){if(j.apply(c,[a[e],f],!1)){if(d)return a[e];
l.push(a[e])}var k=i.getNodesByFilter(b,a[e][g],c,d,f);if(d&&k)return k;l=d?k:l.concat(k)}return l},getPreNode:function(b,a){if(!a)return null;for(var c=b.data.key.children,d=a.parentTId?a.getParentNode():i.getRoot(b),f=0,g=d[c].length;f<g;f++)if(d[c][f]===a)return f==0?null:d[c][f-1];return null},getRoot:function(b){return b?H[b.treeId]:null},getSetting:function(b){return p[b]},getSettings:function(){return p},getTitleKey:function(b){return b.data.key.title===""?b.data.key.name:b.data.key.title},
getZTreeTools:function(b){return(b=this.getRoot(this.getSetting(b)))?b.treeTools:null},initCache:function(b){for(var a=0,c=s.length;a<c;a++)s[a].apply(this,arguments)},initNode:function(b,a,c,d,f,g){for(var l=0,e=t.length;l<e;l++)t[l].apply(this,arguments)},initRoot:function(b){for(var a=0,c=v.length;a<c;a++)v[a].apply(this,arguments)},isSelectedNode:function(b,a){for(var c=i.getRoot(b),d=0,f=c.curSelectedList.length;d<f;d++)if(a===c.curSelectedList[d])return!0;return!1},removeNodeCache:function(b,
a){var c=b.data.key.children;if(a[c])for(var d=0,f=a[c].length;d<f;d++)arguments.callee(b,a[c][d]);delete i.getCache(b).nodes[a.tId]},removeSelectedNode:function(b,a){for(var c=i.getRoot(b),d=0,f=c.curSelectedList.length;d<f;d++)if(a===c.curSelectedList[d]||!i.getNodeCache(b,c.curSelectedList[d].tId))c.curSelectedList.splice(d,1),d--,f--},setCache:function(b,a){q[b.treeId]=a},setRoot:function(b,a){H[b.treeId]=a},setZTreeTools:function(b,a){for(var c=0,d=A.length;c<d;c++)A[c].apply(this,arguments)},
transformToArrayFormat:function(b,a){if(!a)return[];var c=b.data.key.children,d=[];if(j.isArray(a))for(var f=0,g=a.length;f<g;f++)d.push(a[f]),a[f][c]&&(d=d.concat(i.transformToArrayFormat(b,a[f][c])));else d.push(a),a[c]&&(d=d.concat(i.transformToArrayFormat(b,a[c])));return d},transformTozTreeFormat:function(b,a){var c,d,f=b.data.simpleData.idKey,g=b.data.simpleData.pIdKey,l=b.data.key.children;if(!f||f==""||!a)return[];if(j.isArray(a)){var e=[],h=[];for(c=0,d=a.length;c<d;c++)h[a[c][f]]=a[c];for(c=
0,d=a.length;c<d;c++)h[a[c][g]]&&a[c][f]!=a[c][g]?(h[a[c][g]][l]||(h[a[c][g]][l]=[]),h[a[c][g]][l].push(a[c])):e.push(a[c]);return e}else return[a]}},n={bindEvent:function(b){for(var a=0,c=r.length;a<c;a++)r[a].apply(this,arguments)},bindTree:function(b){var a={treeId:b.treeId},b=b.treeObj;b.unbind("click",n.proxy);b.bind("click",a,n.proxy);b.unbind("dblclick",n.proxy);b.bind("dblclick",a,n.proxy);b.unbind("mouseover",n.proxy);b.bind("mouseover",a,n.proxy);b.unbind("mouseout",n.proxy);b.bind("mouseout",
a,n.proxy);b.unbind("mousedown",n.proxy);b.bind("mousedown",a,n.proxy);b.unbind("mouseup",n.proxy);b.bind("mouseup",a,n.proxy);b.unbind("contextmenu",n.proxy);b.bind("contextmenu",a,n.proxy)},doProxy:function(b){for(var a=[],c=0,d=u.length;c<d;c++){var f=u[c].apply(this,arguments);a.push(f);if(f.stop)break}return a},proxy:function(b){var a=i.getSetting(b.data.treeId);if(!j.uCanDo(a,b))return!0;for(var c=n.doProxy(b),d=!0,f=!1,g=0,l=c.length;g<l;g++){var e=c[g];e.nodeEventCallback&&(f=!0,d=e.nodeEventCallback.apply(e,
[b,e.node])&&d);e.treeEventCallback&&(f=!0,d=e.treeEventCallback.apply(e,[b,e.node])&&d)}try{f&&k("input:focus").length==0&&j.noSel(a)}catch(h){}return d}};B=function(b,a){var c=p[b.data.treeId];if(a.open){if(j.apply(c.callback.beforeCollapse,[c.treeId,a],!0)==!1)return!0}else if(j.apply(c.callback.beforeExpand,[c.treeId,a],!0)==!1)return!0;i.getRoot(c).expandTriggerFlag=!0;h.switchNode(c,a);return!0};C=function(b,a){var c=p[b.data.treeId],d=c.view.autoCancelSelected&&b.ctrlKey&&i.isSelectedNode(c,
a)?0:c.view.autoCancelSelected&&b.ctrlKey&&c.view.selectedMulti?2:1;if(j.apply(c.callback.beforeClick,[c.treeId,a,d],!0)==!1)return!0;d===0?h.cancelPreSelectedNode(c,a):h.selectNode(c,a,d===2);c.treeObj.trigger(e.event.CLICK,[b,c.treeId,a,d]);return!0};D=function(b,a){var c=p[b.data.treeId];j.apply(c.callback.beforeMouseDown,[c.treeId,a],!0)&&j.apply(c.callback.onMouseDown,[b,c.treeId,a]);return!0};E=function(b,a){var c=p[b.data.treeId];j.apply(c.callback.beforeMouseUp,[c.treeId,a],!0)&&j.apply(c.callback.onMouseUp,
[b,c.treeId,a]);return!0};F=function(b,a){var c=p[b.data.treeId];j.apply(c.callback.beforeDblClick,[c.treeId,a],!0)&&j.apply(c.callback.onDblClick,[b,c.treeId,a]);return!0};G=function(b,a){var c=p[b.data.treeId];j.apply(c.callback.beforeRightClick,[c.treeId,a],!0)&&j.apply(c.callback.onRightClick,[b,c.treeId,a]);return typeof c.callback.onRightClick!="function"};var j={apply:function(b,a,c){return typeof b=="function"?b.apply(K,a?a:[]):c},canAsync:function(b,a){var c=b.data.key.children;return b.async.enable&&
a&&a.isParent&&!(a.zAsync||a[c]&&a[c].length>0)},clone:function(b){var a;if(b instanceof Array){a=[];for(var c=b.length;c--;)a[c]=arguments.callee(b[c]);return a}else if(typeof b=="function")return b;else if(b instanceof Object){a={};for(c in b)a[c]=arguments.callee(b[c]);return a}else return b},eqs:function(b,a){return b.toLowerCase()===a.toLowerCase()},isArray:function(b){return Object.prototype.toString.apply(b)==="[object Array]"},getMDom:function(b,a,c){if(!a)return null;for(;a&&a.id!==b.treeId;){for(var d=
0,f=c.length;a.tagName&&d<f;d++)if(j.eqs(a.tagName,c[d].tagName)&&a.getAttribute(c[d].attrName)!==null)return a;a=a.parentNode}return null},noSel:function(b){if(i.getRoot(b).noSelection)try{window.getSelection?window.getSelection().removeAllRanges():document.selection.empty()}catch(a){}},uCanDo:function(){return!0}},h={addNodes:function(b,a,c,d){if(!b.data.keep.leaf||!a||a.isParent)if(j.isArray(c)||(c=[c]),b.data.simpleData.enable&&(c=i.transformTozTreeFormat(b,c)),a){var f=k("#"+a.tId+e.id.SWITCH),
g=k("#"+a.tId+e.id.ICON),l=k("#"+a.tId+e.id.UL);if(!a.open)h.replaceSwitchClass(a,f,e.folder.CLOSE),h.replaceIcoClass(a,g,e.folder.CLOSE),a.open=!1,l.css({display:"none"});i.addNodesData(b,a,c);h.createNodes(b,a.level+1,c,a);d||h.expandCollapseParentNode(b,a,!0)}else i.addNodesData(b,i.getRoot(b),c),h.createNodes(b,0,c,null)},appendNodes:function(b,a,c,d,f,g){if(!c)return[];for(var e=[],j=b.data.key.children,k=0,n=c.length;k<n;k++){var o=c[k];if(f){var p=(d?d:i.getRoot(b))[j].length==c.length&&k==
0;i.initNode(b,a,o,d,p,k==c.length-1,g);i.addNodeCache(b,o)}p=[];o[j]&&o[j].length>0&&(p=h.appendNodes(b,a+1,o[j],o,f,g&&o.open));g&&(h.makeDOMNodeMainBefore(e,b,o),h.makeDOMNodeLine(e,b,o),i.getBeforeA(b,o,e),h.makeDOMNodeNameBefore(e,b,o),i.getInnerBeforeA(b,o,e),h.makeDOMNodeIcon(e,b,o),i.getInnerAfterA(b,o,e),h.makeDOMNodeNameAfter(e,b,o),i.getAfterA(b,o,e),o.isParent&&o.open&&h.makeUlHtml(b,o,e,p.join("")),h.makeDOMNodeMainAfter(e,b,o),i.addCreatedNode(b,o))}return e},appendParentULDom:function(b,
a){var c=[],d=k("#"+a.tId),f=k("#"+a.tId+e.id.UL),g=h.appendNodes(b,a.level+1,a[b.data.key.children],a,!1,!0);h.makeUlHtml(b,a,c,g.join(""));!d.get(0)&&a.parentTId&&(h.appendParentULDom(b,a.getParentNode()),d=k("#"+a.tId));f.get(0)&&f.remove();d.append(c.join(""))},asyncNode:function(b,a,c,d){var f,g;if(a&&!a.isParent)return j.apply(d),!1;else if(a&&a.isAjaxing)return!1;else if(j.apply(b.callback.beforeAsync,[b.treeId,a],!0)==!1)return j.apply(d),!1;if(a)a.isAjaxing=!0,k("#"+a.tId+e.id.ICON).attr({style:"",
"class":"button ico_loading"});var l=b.async.contentType=="application/json",i=l?"{":"",m="";for(f=0,g=b.async.autoParam.length;a&&f<g;f++){var n=b.async.autoParam[f].split("="),o=n;n.length>1&&(o=n[1],n=n[0]);l?(m=typeof a[n]=="string"?'"':"",i+='"'+o+('":'+m+a[n]).replace(/'/g,"\\'")+m+","):i+=o+("="+a[n]).replace(/&/g,"%26")+"&"}if(j.isArray(b.async.otherParam))for(f=0,g=b.async.otherParam.length;f<g;f+=2)l?(m=typeof b.async.otherParam[f+1]=="string"?'"':"",i+='"'+b.async.otherParam[f]+('":'+m+
b.async.otherParam[f+1]).replace(/'/g,"\\'")+m+","):i+=b.async.otherParam[f]+("="+b.async.otherParam[f+1]).replace(/&/g,"%26")+"&";else for(var p in b.async.otherParam)l?(m=typeof b.async.otherParam[p]=="string"?'"':"",i+='"'+p+('":'+m+b.async.otherParam[p]).replace(/'/g,"\\'")+m+","):i+=p+("="+b.async.otherParam[p]).replace(/&/g,"%26")+"&";i.length>1&&(i=i.substring(0,i.length-1));l&&(i+="}");k.ajax({contentType:b.async.contentType,type:b.async.type,url:j.apply(b.async.url,[b.treeId,a],b.async.url),
data:i,dataType:b.async.dataType,success:function(f){var g=[];try{g=!f||f.length==0?[]:typeof f=="string"?eval("("+f+")"):f}catch(l){}if(a)a.isAjaxing=null,a.zAsync=!0;h.setNodeLineIcos(b,a);g&&g!==""?(g=j.apply(b.async.dataFilter,[b.treeId,a,g],g),h.addNodes(b,a,g?j.clone(g):[],!!c)):h.addNodes(b,a,[],!!c);b.treeObj.trigger(e.event.ASYNC_SUCCESS,[b.treeId,a,f]);j.apply(d)},error:function(c,d,f){if(a)a.isAjaxing=null;h.setNodeLineIcos(b,a);b.treeObj.trigger(e.event.ASYNC_ERROR,[b.treeId,a,c,d,f])}});
return!0},cancelPreSelectedNode:function(b,a){for(var c=i.getRoot(b).curSelectedList,d=c.length-1;d>=0;d--)if(!a||a===c[d])if(k("#"+c[d].tId+e.id.A).removeClass(e.node.CURSELECTED),h.setNodeName(b,c[d]),a){i.removeSelectedNode(b,a);break}if(!a)i.getRoot(b).curSelectedList=[]},createNodeCallback:function(b){if(b.callback.onNodeCreated||b.view.addDiyDom)for(var a=i.getRoot(b);a.createdNodes.length>0;){var c=a.createdNodes.shift();j.apply(b.view.addDiyDom,[b.treeId,c]);b.callback.onNodeCreated&&b.treeObj.trigger(e.event.NODECREATED,
[b.treeId,c])}},createNodes:function(b,a,c,d){if(c&&c.length!=0){var f=i.getRoot(b),g=b.data.key.children,g=!d||d.open||!!k("#"+d[g][0].tId).get(0);f.createdNodes=[];a=h.appendNodes(b,a,c,d,!0,g);d?(d=k("#"+d.tId+e.id.UL),d.get(0)&&d.append(a.join(""))):b.treeObj.append(a.join(""));h.createNodeCallback(b)}},expandCollapseNode:function(b,a,c,d,f){var g=i.getRoot(b),l=b.data.key.children;if(a){if(g.expandTriggerFlag){var J=f,f=function(){J&&J();a.open?b.treeObj.trigger(e.event.EXPAND,[b.treeId,a]):
b.treeObj.trigger(e.event.COLLAPSE,[b.treeId,a])};g.expandTriggerFlag=!1}if(a.open==c)j.apply(f,[]);else{if(!a.open&&a.isParent&&(!k("#"+a.tId+e.id.UL).get(0)||a[l]&&a[l].length>0&&!k("#"+a[l][0].tId).get(0)))h.appendParentULDom(b,a),h.createNodeCallback(b);var c=k("#"+a.tId+e.id.UL),g=k("#"+a.tId+e.id.SWITCH),m=k("#"+a.tId+e.id.ICON);a.isParent?(a.open=!a.open,a.iconOpen&&a.iconClose&&m.attr("style",h.makeNodeIcoStyle(b,a)),a.open?(h.replaceSwitchClass(a,g,e.folder.OPEN),h.replaceIcoClass(a,m,e.folder.OPEN),
d==!1||b.view.expandSpeed==""?(c.show(),j.apply(f,[])):a[l]&&a[l].length>0?c.slideDown(b.view.expandSpeed,f):(c.show(),j.apply(f,[]))):(h.replaceSwitchClass(a,g,e.folder.CLOSE),h.replaceIcoClass(a,m,e.folder.CLOSE),d==!1||b.view.expandSpeed==""||!(a[l]&&a[l].length>0)?(c.hide(),j.apply(f,[])):c.slideUp(b.view.expandSpeed,f))):j.apply(f,[])}}else j.apply(f,[])},expandCollapseParentNode:function(b,a,c,d,f){a&&(a.parentTId?(h.expandCollapseNode(b,a,c,d),a.parentTId&&h.expandCollapseParentNode(b,a.getParentNode(),
c,d,f)):h.expandCollapseNode(b,a,c,d,f))},expandCollapseSonNode:function(b,a,c,d,f){var g=i.getRoot(b),e=b.data.key.children,g=a?a[e]:g[e],e=a?!1:d,j=i.getRoot(b).expandTriggerFlag;i.getRoot(b).expandTriggerFlag=!1;if(g)for(var k=0,n=g.length;k<n;k++)g[k]&&h.expandCollapseSonNode(b,g[k],c,e);i.getRoot(b).expandTriggerFlag=j;h.expandCollapseNode(b,a,c,d,f)},makeDOMNodeIcon:function(b,a,c){var d=a.data.key.name,d=a.view.nameIsHTML?c[d]:c[d].replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
b.push("<span id='",c.tId,e.id.ICON,"' title='' treeNode",e.id.ICON," class='",h.makeNodeIcoClass(a,c),"' style='",h.makeNodeIcoStyle(a,c),"'></span><span id='",c.tId,e.id.SPAN,"'>",d,"</span>")},makeDOMNodeLine:function(b,a,c){b.push("<span id='",c.tId,e.id.SWITCH,"' title='' class='",h.makeNodeLineClass(a,c),"' treeNode",e.id.SWITCH,"></span>")},makeDOMNodeMainAfter:function(b){b.push("</li>")},makeDOMNodeMainBefore:function(b,a,c){b.push("<li id='",c.tId,"' class='level",c.level,"' tabindex='0' hidefocus='true' treenode>")},
makeDOMNodeNameAfter:function(b){b.push("</a>")},makeDOMNodeNameBefore:function(b,a,c){var d=i.getTitleKey(a),f=h.makeNodeUrl(a,c),g=h.makeNodeFontCss(a,c),l=[],k;for(k in g)l.push(k,":",g[k],";");b.push("<a id='",c.tId,e.id.A,"' class='level",c.level,"' treeNode",e.id.A,' onclick="',c.click||"",'" ',f!=null&&f.length>0?"href='"+f+"'":""," target='",h.makeNodeTarget(c),"' style='",l.join(""),"'");j.apply(a.view.showTitle,[a.treeId,c],a.view.showTitle)&&c[d]&&b.push("title='",c[d].replace(/'/g,"&#39;").replace(/</g,
"&lt;").replace(/>/g,"&gt;"),"'");b.push(">")},makeNodeFontCss:function(b,a){var c=j.apply(b.view.fontCss,[b.treeId,a],b.view.fontCss);return c&&typeof c!="function"?c:{}},makeNodeIcoClass:function(b,a){var c=["ico"];a.isAjaxing||(c[0]=(a.iconSkin?a.iconSkin+"_":"")+c[0],a.isParent?c.push(a.open?e.folder.OPEN:e.folder.CLOSE):c.push(e.folder.DOCU));return"button "+c.join("_")},makeNodeIcoStyle:function(b,a){var c=[];if(!a.isAjaxing){var d=a.isParent&&a.iconOpen&&a.iconClose?a.open?a.iconOpen:a.iconClose:
a.icon;d&&c.push("background:url(",d,") 0 0 no-repeat;");(b.view.showIcon==!1||!j.apply(b.view.showIcon,[b.treeId,a],!0))&&c.push("width:0px;height:0px;")}return c.join("")},makeNodeLineClass:function(b,a){var c=[];b.view.showLine?a.level==0&&a.isFirstNode&&a.isLastNode?c.push(e.line.ROOT):a.level==0&&a.isFirstNode?c.push(e.line.ROOTS):a.isLastNode?c.push(e.line.BOTTOM):c.push(e.line.CENTER):c.push(e.line.NOLINE);a.isParent?c.push(a.open?e.folder.OPEN:e.folder.CLOSE):c.push(e.folder.DOCU);return h.makeNodeLineClassEx(a)+
c.join("_")},makeNodeLineClassEx:function(b){return"button level"+b.level+" switch "},makeNodeTarget:function(b){return b.target||"_blank"},makeNodeUrl:function(b,a){var c=b.data.key.url;return a[c]?a[c]:null},makeUlHtml:function(b,a,c,d){c.push("<ul id='",a.tId,e.id.UL,"' class='level",a.level," ",h.makeUlLineClass(b,a),"' style='display:",a.open?"block":"none","'>");c.push(d);c.push("</ul>")},makeUlLineClass:function(b,a){return b.view.showLine&&!a.isLastNode?e.line.LINE:""},removeChildNodes:function(b,
a){if(a){var c=b.data.key.children,d=a[c];if(d){for(var f=0,g=d.length;f<g;f++)i.removeNodeCache(b,d[f]);i.removeSelectedNode(b);delete a[c];b.data.keep.parent?k("#"+a.tId+e.id.UL).empty():(a.isParent=!1,a.open=!1,c=k("#"+a.tId+e.id.SWITCH),d=k("#"+a.tId+e.id.ICON),h.replaceSwitchClass(a,c,e.folder.DOCU),h.replaceIcoClass(a,d,e.folder.DOCU),k("#"+a.tId+e.id.UL).remove())}}},setFirstNode:function(b,a){var c=b.data.key.children;if(a[c].length>0)a[c][0].isFirstNode=!0},setLastNode:function(b,a){var c=
b.data.key.children,d=a[c].length;if(d>0)a[c][d-1].isLastNode=!0},removeNode:function(b,a){var c=i.getRoot(b),d=b.data.key.children,f=a.parentTId?a.getParentNode():c;a.isFirstNode=!1;a.isLastNode=!1;a.getPreNode=function(){return null};a.getNextNode=function(){return null};k("#"+a.tId).remove();i.removeNodeCache(b,a);i.removeSelectedNode(b,a);for(var g=0,l=f[d].length;g<l;g++)if(f[d][g].tId==a.tId){f[d].splice(g,1);break}h.setFirstNode(b,f);h.setLastNode(b,f);var j,g=f[d].length;if(!b.data.keep.parent&&
g==0)f.isParent=!1,f.open=!1,g=k("#"+f.tId+e.id.UL),l=k("#"+f.tId+e.id.SWITCH),j=k("#"+f.tId+e.id.ICON),h.replaceSwitchClass(f,l,e.folder.DOCU),h.replaceIcoClass(f,j,e.folder.DOCU),g.css("display","none");else if(b.view.showLine&&g>0){var m=f[d][g-1],g=k("#"+m.tId+e.id.UL),l=k("#"+m.tId+e.id.SWITCH);j=k("#"+m.tId+e.id.ICON);f==c?f[d].length==1?h.replaceSwitchClass(m,l,e.line.ROOT):(c=k("#"+f[d][0].tId+e.id.SWITCH),h.replaceSwitchClass(f[d][0],c,e.line.ROOTS),h.replaceSwitchClass(m,l,e.line.BOTTOM)):
h.replaceSwitchClass(m,l,e.line.BOTTOM);g.removeClass(e.line.LINE)}},replaceIcoClass:function(b,a,c){if(a&&!b.isAjaxing&&(b=a.attr("class"),b!=void 0)){b=b.split("_");switch(c){case e.folder.OPEN:case e.folder.CLOSE:case e.folder.DOCU:b[b.length-1]=c}a.attr("class",b.join("_"))}},replaceSwitchClass:function(b,a,c){if(a){var d=a.attr("class");if(d!=void 0){d=d.split("_");switch(c){case e.line.ROOT:case e.line.ROOTS:case e.line.CENTER:case e.line.BOTTOM:case e.line.NOLINE:d[0]=h.makeNodeLineClassEx(b)+
c;break;case e.folder.OPEN:case e.folder.CLOSE:case e.folder.DOCU:d[1]=c}a.attr("class",d.join("_"));c!==e.folder.DOCU?a.removeAttr("disabled"):a.attr("disabled","disabled")}}},selectNode:function(b,a,c){c||h.cancelPreSelectedNode(b);k("#"+a.tId+e.id.A).addClass(e.node.CURSELECTED);i.addSelectedNode(b,a)},setNodeFontCss:function(b,a){var c=k("#"+a.tId+e.id.A),d=h.makeNodeFontCss(b,a);d&&c.css(d)},setNodeLineIcos:function(b,a){if(a){var c=k("#"+a.tId+e.id.SWITCH),d=k("#"+a.tId+e.id.UL),f=k("#"+a.tId+
e.id.ICON),g=h.makeUlLineClass(b,a);g.length==0?d.removeClass(e.line.LINE):d.addClass(g);c.attr("class",h.makeNodeLineClass(b,a));a.isParent?c.removeAttr("disabled"):c.attr("disabled","disabled");f.removeAttr("style");f.attr("style",h.makeNodeIcoStyle(b,a));f.attr("class",h.makeNodeIcoClass(b,a))}},setNodeName:function(b,a){var c=b.data.key.name,d=i.getTitleKey(b),f=k("#"+a.tId+e.id.SPAN);f.empty();b.view.nameIsHTML?f.html(a[c]):f.text(a[c]);j.apply(b.view.showTitle,[b.treeId,a],b.view.showTitle)&&
k("#"+a.tId+e.id.A).attr("title",!a[d]?"":a[d])},setNodeTarget:function(b){k("#"+b.tId+e.id.A).attr("target",h.makeNodeTarget(b))},setNodeUrl:function(b,a){var c=k("#"+a.tId+e.id.A),d=h.makeNodeUrl(b,a);d==null||d.length==0?c.removeAttr("href"):c.attr("href",d)},switchNode:function(b,a){a.open||!j.canAsync(b,a)?h.expandCollapseNode(b,a,!a.open):b.async.enable?h.asyncNode(b,a)||h.expandCollapseNode(b,a,!a.open):a&&h.expandCollapseNode(b,a,!a.open)}};k.fn.zTree={consts:{event:{NODECREATED:"ztree_nodeCreated",
CLICK:"ztree_click",EXPAND:"ztree_expand",COLLAPSE:"ztree_collapse",ASYNC_SUCCESS:"ztree_async_success",ASYNC_ERROR:"ztree_async_error"},id:{A:"_a",ICON:"_ico",SPAN:"_span",SWITCH:"_switch",UL:"_ul"},line:{ROOT:"root",ROOTS:"roots",CENTER:"center",BOTTOM:"bottom",NOLINE:"noline",LINE:"line"},folder:{OPEN:"open",CLOSE:"close",DOCU:"docu"},node:{CURSELECTED:"curSelectedNode"}},_z:{tools:j,view:h,event:n,data:i},getZTreeObj:function(b){return(b=i.getZTreeTools(b))?b:null},init:function(b,a,c){var d=
j.clone(I);k.extend(!0,d,a);d.treeId=b.attr("id");d.treeObj=b;d.treeObj.empty();p[d.treeId]=d;if(k.browser.msie&&parseInt(k.browser.version)<7)d.view.expandSpeed="";i.initRoot(d);b=i.getRoot(d);a=d.data.key.children;c=c?j.clone(j.isArray(c)?c:[c]):[];b[a]=d.data.simpleData.enable?i.transformTozTreeFormat(d,c):c;i.initCache(d);n.bindTree(d);n.bindEvent(d);c={setting:d,addNodes:function(a,b,c){function e(){h.addNodes(d,a,i,c==!0)}if(!b)return null;a||(a=null);if(a&&!a.isParent&&d.data.keep.leaf)return null;
var i=j.clone(j.isArray(b)?b:[b]);j.canAsync(d,a)?h.asyncNode(d,a,c,e):e();return i},cancelSelectedNode:function(a){h.cancelPreSelectedNode(this.setting,a)},expandAll:function(a){a=!!a;h.expandCollapseSonNode(this.setting,null,a,!0);return a},expandNode:function(a,b,c,e,m){if(!a||!a.isParent)return null;b!==!0&&b!==!1&&(b=!a.open);if((m=!!m)&&b&&j.apply(d.callback.beforeExpand,[d.treeId,a],!0)==!1)return null;else if(m&&!b&&j.apply(d.callback.beforeCollapse,[d.treeId,a],!0)==!1)return null;b&&a.parentTId&&
h.expandCollapseParentNode(this.setting,a.getParentNode(),b,!1);if(b===a.open&&!c)return null;i.getRoot(d).expandTriggerFlag=m;c?h.expandCollapseSonNode(this.setting,a,b,!0,function(){e!==!1&&k("#"+a.tId).focus().blur()}):(a.open=!b,h.switchNode(this.setting,a),e!==!1&&k("#"+a.tId).focus().blur());return b},getNodes:function(){return i.getNodes(this.setting)},getNodeByParam:function(a,b,c){return!a?null:i.getNodeByParam(this.setting,c?c[this.setting.data.key.children]:i.getNodes(this.setting),a,b)},
getNodeByTId:function(a){return i.getNodeCache(this.setting,a)},getNodesByParam:function(a,b,c){return!a?null:i.getNodesByParam(this.setting,c?c[this.setting.data.key.children]:i.getNodes(this.setting),a,b)},getNodesByParamFuzzy:function(a,b,c){return!a?null:i.getNodesByParamFuzzy(this.setting,c?c[this.setting.data.key.children]:i.getNodes(this.setting),a,b)},getNodesByFilter:function(a,b,c,d){b=!!b;return!a||typeof a!="function"?b?null:[]:i.getNodesByFilter(this.setting,c?c[this.setting.data.key.children]:
i.getNodes(this.setting),a,b,d)},getNodeIndex:function(a){if(!a)return null;for(var b=d.data.key.children,c=a.parentTId?a.getParentNode():i.getRoot(this.setting),e=0,h=c[b].length;e<h;e++)if(c[b][e]==a)return e;return-1},getSelectedNodes:function(){for(var a=[],b=i.getRoot(this.setting).curSelectedList,c=0,d=b.length;c<d;c++)a.push(b[c]);return a},isSelectedNode:function(a){return i.isSelectedNode(this.setting,a)},reAsyncChildNodes:function(a,b,c){if(this.setting.async.enable){var d=!a;d&&(a=i.getRoot(this.setting));
b=="refresh"&&(a[this.setting.data.key.children]=[],d?this.setting.treeObj.empty():k("#"+a.tId+e.id.UL).empty());h.asyncNode(this.setting,d?null:a,!!c)}},refresh:function(){this.setting.treeObj.empty();var a=i.getRoot(this.setting),b=a[this.setting.data.key.children];i.initRoot(this.setting);a[this.setting.data.key.children]=b;i.initCache(this.setting);h.createNodes(this.setting,0,a[this.setting.data.key.children])},removeChildNodes:function(a){if(!a)return null;var b=a[d.data.key.children];h.removeChildNodes(d,
a);return b?b:null},removeNode:function(a,b){a&&(b=!!b,b&&j.apply(d.callback.beforeRemove,[d.treeId,a],!0)==!1||(h.removeNode(d,a),b&&this.setting.treeObj.trigger(e.event.REMOVE,[d.treeId,a])))},selectNode:function(a,b){a&&j.uCanDo(this.setting)&&(b=d.view.selectedMulti&&b,a.parentTId?h.expandCollapseParentNode(this.setting,a.getParentNode(),!0,!1,function(){k("#"+a.tId).focus().blur()}):k("#"+a.tId).focus().blur(),h.selectNode(this.setting,a,b))},transformTozTreeNodes:function(a){return i.transformTozTreeFormat(this.setting,
a)},transformToArray:function(a){return i.transformToArrayFormat(this.setting,a)},updateNode:function(a){a&&k("#"+a.tId).get(0)&&j.uCanDo(this.setting)&&(h.setNodeName(this.setting,a),h.setNodeTarget(a),h.setNodeUrl(this.setting,a),h.setNodeLineIcos(this.setting,a),h.setNodeFontCss(this.setting,a))}};b.treeTools=c;i.setZTreeTools(d,c);b[a]&&b[a].length>0?h.createNodes(d,0,b[a]):d.async.enable&&d.async.url&&d.async.url!==""&&h.asyncNode(d);return c}};var K=k.fn.zTree,e=K.consts})(jQuery);
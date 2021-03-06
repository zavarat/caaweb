﻿; 
(function(){

define(function(require){
  function doChart(chartDivId){
            var plot = $.jqplot(chartDivId, [
                [[2,1], [4,2], [6,3], [3,4]],
                [[5,1], [1,2], [3,3], [4,4]],
                [[4,1], [7,2], [1,3], [2,4]]], {
                seriesDefaults: {
                    renderer:$.jqplot.BarRenderer,
                    // Show point labels to the right ('e'ast) of each bar.
                    // edgeTolerance of -15 allows labels flow outside the grid
                    // up to 15 pixels.  If they flow out more than that, they
                    // will be hidden.
                    pointLabels: { show: true, location: 'e', edgeTolerance: -15 },
                    // Rotate the bar shadow as if bar is lit from top right.
                    shadowAngle: 135,
                    // Here's where we tell the chart it is oriented horizontally.
                    rendererOptions: {
                        barDirection: 'horizontal'
                    }
                },
                axes: {
                    yaxis: {
                        renderer: $.jqplot.CategoryAxisRenderer
                    }
                }
            });
          return plot;
  }
  var initialize = function($view, config){
    //main function here=============================
    $view.bind("selfDomReady", function(){
    
    //requirejs's config path is relate with index html page
    requirejs.config({
        paths: {//do not need .css, .js in each paths
          'jqplot-css': './cmps/jqplot/jquery.jqplot.min',
          'excanvas': './cmps/jqplot/excanvas.min',
          'jqplot': './cmps/jqplot/jquery.jqplot.min',
          'jqplot-highlighter': './cmps/jqplot/plugins/jqplot.highlighter',
          'jqplot-barRenderer': './cmps/jqplot/plugins/jqplot.barRenderer.min',
          'jqplot-categoryAxisRenderer': './cmps/jqplot/plugins/jqplot.categoryAxisRenderer.min',
          'jqplot-pointLabels': './cmps/jqplot/plugins/jqplot.pointLabels.min'
        },
        shim: {//dependency
            'jqplot-highlighter': ['jqplot'],
            "jqplot-barRenderer": ['jqplot'],
            "jqplot-categoryAxisRenderer": ['jqplot'],
            "jqplot-pointLabels": ['jqplot']
        }
    });
    var requireLibs = [];
    requireLibs.push("css!jqplot-css");
    if ($.browser.msie && parseInt($.browser.version) < 9) {
        requireLibs.push("excanvas");
    }
    requireLibs.push("jqplot");
    requireLibs.push("jqplot-barRenderer");
    requireLibs.push("jqplot-highlighter");
    requireLibs.push("jqplot-categoryAxisRenderer");
    requireLibs.push("jqplot-pointLabels");
    
    require(requireLibs, function(){
    
            var id = $view.id;
            var chartDivId = id+"_chartDiv";
            var $chartDiv = $view.find("#"+chartDivId);
            var chartHeight = 300;
            var chartHeightOffset = 250;
            var chartWidthOffset = 20;
            $chartDiv.height(chartHeight); 
            var plot;// = doChart(chartDivId);
            
            //redraw plot after view resize
            function doResize(){
                if($view.isFullscreen==true){
                    $chartDiv.height($view.height() - chartHeightOffset); 
                }else{
                    $chartDiv.height(chartHeight);
                }
                $chartDiv.width($view.width() - chartWidthOffset); 
                try{
                    if(plot!=undefined){
                        plot.destroy();
                    }
                    plot = doChart(chartDivId);
                    /*
                    //official method will cause failed result
                    if(plot==undefined){
                        plot = doChart(chartDivId);
                    }else{
                        plot.replot( {resetAxes: true, clear: true} );
                    }
                    */
                }catch(e){}
            }
            
            $view.bind("resize", function(e, type){
               //if(type!="lazyResize"){
                    doResize();
               //}
               e.stopPropagation();
            });
            doResize();
            
        }); 
    });
    //main function here=============================

  };

  return {
    init: initialize
  };

});


}());


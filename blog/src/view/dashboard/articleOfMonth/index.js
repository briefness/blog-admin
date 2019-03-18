import React, { Component } from 'react';
import G2 from '@antv/g2';

const data = [{
	month: '1月',
	value: 3
}, {
	month: '2月',
	value: 4
}, {
	month: '3月',
	value: 3
}, {
	month: '4月',
	value: 5
}, {
	month: '5月',
	value: 5
}, {
	month: '6月',
	value: 6
}, {
	month: '7月',
	value: 7
}, {
	month: '8月',
	value: 9
}, {
	month: '9月',
	value: 13
}, {
	month: '10月',
	value: 7
}, {
	month: '11月',
	value: 9
}, {
	month: '12月',
	value: 13
}];
class ArticleOfMonthChart extends Component {

	componentDidMount() {
		var chart = new G2.Chart({
	    container: 'articleOfMonthChart',
			forceFit: true,
			padding: [30, 30, 40, 40]
	  });
	  chart.source(data);
	  chart.scale('value', {
	    min: 0
	  });
	  chart.scale('month', {
	    range: [0, 1]
	  });
	  chart.tooltip({
	    crosshairs: {
	      type: 'line'
	    },
			// 自定义容器模版(ADD:没有起作用)
			containerTpl: '<div class="g2-tooltip">'
			  + '<div class="g2-tooltip-title" style="margin-bottom: 4px;">{title}</div>'
			  + '<ul class="g2-tooltip-list"></ul>'
			  + '</div>',
			// 自定义cell模版
			itemTpl: "<li data-index={index}>" +
				"<span style=\"background-color:{color};width:8px;height:8px;border-radius:50%;display:inline-block;margin-right:8px;\"></span>" +
				"发布了<span class=\"ml6 f16 mr6\" style=\"color: #64F591;\""+
				">{value}</span>篇文章" +
				"</li>"
	  });
	  chart.line().position('month*value');
	  chart.point().position('month*value').size(4).shape('circle').style({
	    stroke: '#fff',
	    lineWidth: 1
	  });
	  chart.render();
  }
  render() {
    return (
			<div id="articleOfMonthChart" className="bgwh mt20"></div>
    );
  }
}

export default ArticleOfMonthChart;

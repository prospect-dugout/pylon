"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verticalLinerPlugin = void 0;
var verticalLinerPlugin = exports.verticalLinerPlugin = {
  id: 'verticalLiner',
  afterInit: function afterInit(chart) {
    chart.verticalLiner = {};
  },
  afterEvent: function afterEvent(chart, args) {
    var inChartArea = args.inChartArea;
    chart.verticalLiner = {
      draw: inChartArea
    };
  },
  beforeTooltipDraw: function beforeTooltipDraw(chart, args) {
    var draw = chart.verticalLiner.draw;
    if (!draw) return;
    var ctx = chart.ctx;
    var _chart$chartArea = chart.chartArea,
      top = _chart$chartArea.top,
      bottom = _chart$chartArea.bottom;
    var tooltip = args.tooltip;
    var x = tooltip === null || tooltip === void 0 ? void 0 : tooltip.caretX;
    if (!x) return;
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
    ctx.strokeStyle = '#ebe2e2';
    ctx.stroke();
    ctx.restore();
  }
};
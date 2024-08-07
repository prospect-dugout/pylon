export const verticalLinerPlugin = {
  id: 'verticalLiner',
  afterInit: (chart: any) => {
    chart.verticalLiner = {};
  },
  afterEvent: (chart: any, args: any) => {
    const {inChartArea} = args;
    chart.verticalLiner = {draw: inChartArea};
  },
  beforeTooltipDraw: (chart: any, args: any) => {
    const {draw} = chart.verticalLiner;
    if (!draw) return;

    const {ctx} = chart;
    const {top, bottom} = chart.chartArea;
    const {tooltip} = args;
    const x = tooltip?.caretX;
    if (!x) return;

    ctx.save();

    ctx.beginPath();
    ctx.moveTo(x, top);
    ctx.lineTo(x, bottom);
    ctx.strokeStyle = '#ebe2e2';
    ctx.stroke();

    ctx.restore();
  },
};

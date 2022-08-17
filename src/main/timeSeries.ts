export default class TimeSeries {
  xValues: any[];

  yValues: any[];

  constructor(xValues: any[], yValues: any[]) {
    this.xValues = xValues;
    this.yValues = yValues;
  }
}

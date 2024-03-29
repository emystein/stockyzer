export default class TimeSeries {
  dates: string[];

  values: string[];

  constructor(dates: string[], values: string[]) {
    this.dates = dates;
    this.values = values;
  }

  isEmpty = () => {
    return this.values.length === 0;
  };
}

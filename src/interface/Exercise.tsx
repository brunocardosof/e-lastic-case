export interface Exercise {
  id: number;
  name: string;
  series: number;
  seriesExecuted: number;
  repetitions: number;
  repetitionsExecuted: number;
  timeExecuted: string;
  alreadyExecuted: boolean;
  dataChart: number[];
}

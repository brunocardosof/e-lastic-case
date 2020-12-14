export class Exercise {
  public id: number;
  public name: string;
  public series: number;
  public maxStrenght: number;
  public seriesExecuted: number;
  public repetitions: number;
  public repetitionsExecuted: number;
  public timeExecuted: string;
  public alreadyExecuted: boolean;
  public dataChart: number[];

  clean(exerciseName: string) {
    this.id = 0;
    this.name = exerciseName;
    this.series = 1;
    this.maxStrenght = 0;
    this.seriesExecuted = 0;
    this.repetitions = 1;
    this.repetitionsExecuted = 0;
    this.alreadyExecuted = false;
    this.dataChart = [0];
  }
  create(exercise: any, dataChart: number[]) {
    this.id = exercise.id;
    this.name = exercise.name;
    this.maxStrenght = 40;
    this.repetitions = exercise.repetitions;
    this.repetitionsExecuted = 1;
    this.series = exercise.series;
    this.seriesExecuted = 1;
    this.alreadyExecuted = true;
    this.dataChart = [...dataChart];
  }
}

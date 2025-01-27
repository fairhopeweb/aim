export interface IRun<T> {
  params: IRunParams;
  props: {
    experiment: string | null;
    name: string;
    creation_time: number;
    end_time: number;
  };
  created_at: number;
  traces: T[];
  hash: string;
}

export interface IParamTrace {
  metric_name: string;
  context: { [key: string]: unknown };
  last_value: { last: number | string };
}

export interface IMetricTrace {
  metric_name: string;
  context: { [key: string]: unknown };
  slice: number[];
  values: ITraceData;
  iters: ITraceData;
  epochs: ITraceData;
  timestamps: ITraceData;
  x_axis_values?: ITraceData;
  x_axis_iters?: ITraceData;
}

export interface IRunParam {
  [key: string]: any;
}

export interface ITraceData {
  blob: ArrayBuffer;
  dtype: string;
  shape: number;
  _type: string;
}

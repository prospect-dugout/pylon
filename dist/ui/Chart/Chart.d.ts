import { FunctionalComponent } from 'preact';
import { ChartConfiguration } from 'chart.js/auto';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
type Props = {
    config: ChartConfiguration;
};
export declare const Chart: FunctionalComponent<Props>;
export {};

import {FunctionalComponent, h} from 'preact';
import {useEffect, useRef, useState} from 'preact/hooks';
import {Chart as ChartComponent, ChartConfiguration} from 'chart.js/auto';
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';

type Props = {
  config: ChartConfiguration;
};

export const Chart: FunctionalComponent<Props> = ({
  config,
  ...props
}: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [chart, setChart] = useState<ChartComponent>();

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }
    if (canvasRef.current) {
      setChart(new ChartComponent(canvasRef.current, config));
    }
  }, []);

  useEffect(() => {
    if (chart) {
      chart.data = config?.data;
      chart.update();
    }
  }, [config.data]);

  return (
    <div
      css={`
        width: 100%;
      `}
      {...props}
    >
      <canvas
        ref={canvasRef}
        css={`
          height: 100%;
          width: 100%;
        `}
      />
    </div>
  );
};

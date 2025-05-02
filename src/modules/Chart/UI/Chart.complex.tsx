import * as React from 'react';
import { ScaleLinear, ScalePoint } from 'd3-scale';
import { styled } from '@mui/material/styles';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { LinePlot } from '@mui/x-charts/LineChart';
import { ChartsYAxis } from '@mui/x-charts/ChartsYAxis';
import { useDrawingArea, useYScale, useXScale } from '@mui/x-charts/hooks';

const StyledPath = styled('path')(({ theme }) => ({
  fill: 'none',
  stroke: theme.palette.text.primary,
  shapeRendering: 'crispEdges',
  strokeWidth: 1,
  pointerEvents: 'none',
  strokeDasharray: '4 2',
}));

const StyledText = styled('text')(({ theme }) => ({
  stroke: 'none',
  fill: theme.palette.text.primary,
  fontSize: 12,
  shapeRendering: 'crispEdges',
}));

function Crosshair({ svgRef }: { svgRef: React.RefObject<SVGSVGElement | null> }) {
  const { left, top, width, height } = useDrawingArea();
  const yScale = useYScale('left_axis_id') as ScaleLinear<number, number>;
  const xScale = useXScale() as ScalePoint<number>;

  const [mousePos, setMousePos] = React.useState<{ x: number; y: number } | null>(null);

  React.useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onMouseMove = (e: MouseEvent) => {
      const x = e.offsetX;
      const y = e.offsetY;
      if (x < left || x > left + width || y < top || y > top + height) {
        setMousePos(null);
        return;
      }
      setMousePos({ x, y });
    };

    const onMouseLeave = () => setMousePos(null);

    svg.addEventListener('mousemove', onMouseMove);
    svg.addEventListener('mouseleave', onMouseLeave);

    return () => {
      svg.removeEventListener('mousemove', onMouseMove);
      svg.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [left, top, width, height, svgRef]);

  if (!mousePos) return null;

  const yValue = yScale.invert(mousePos.y).toFixed(1);
  const xDomain = xScale.domain();
  const xStep = xDomain.reduce((prev, curr) =>
    Math.abs(xScale(curr)! - mousePos.x) < Math.abs(xScale(prev)! - mousePos.x) ? curr : prev
  );

  const xPos = xScale(xStep);

  return (
    <>
      {/* Horizontal line */}
      <StyledPath d={`M ${left} ${mousePos.y} H ${left + width}`} />
      {/* Vertical line */}
      {xPos && <StyledPath d={`M ${xPos} ${top} V ${top + height}`} />}

      {/* Y value */}
      <StyledText x={left + 5} y={mousePos.y - 5}>
        Y: {yValue}
      </StyledText>

      {/* X value */}
      {xPos && (
        <StyledText x={xPos + 1} y={top + 15}>
          X: {xStep}
        </StyledText>
      )}
    </>
  );
}

export default function CombinedChart() {
  const svgRef = React.useRef<SVGSVGElement>(null);

  return (
    <ResponsiveChartContainer
      ref={svgRef}
      margin={{ top: 30, left: 50, right: 20, bottom: 30 }}
      height={300}
      series={[
        {
          type: 'line',
          data: [2, 5.5, 2, 8.5, 1.5, 5, null, null, null],
          yAxisId: 'left_axis_id',
        },
        {
          type: 'line',
          data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
          yAxisId: 'left_axis_id',
        },
        {
          type: 'line',
          data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
          yAxisId: 'left_axis_id',
        },
      ]}
      xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16], scaleType: 'point' }]}
      yAxis={[{ id: 'left_axis_id' }]}
    >
      <LinePlot />
      <ChartsYAxis position="left" axisId="left_axis_id" />
      <Crosshair svgRef={svgRef} />
    </ResponsiveChartContainer>
  );
}

import { SVGProps } from 'react';

interface CircularProgressBarProps extends SVGProps<SVGSVGElement> {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
}

const CircularProgressBar = ({
  percentage,
  size = 50,
  strokeWidth = 5,
  strokeColor = 'currentColor',
  ...props
}: CircularProgressBarProps) => {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 10);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashoffset =
    circumference - (normalizedPercentage / 10) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} {...props}>
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="transparent"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={dashoffset}
        strokeLinecap="round"
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        alignmentBaseline="central"
        fontSize="16"
        fill="currentColor"
      >
        {Math.round(normalizedPercentage * 10) / 10}
      </text>
    </svg>
  );
};

export default CircularProgressBar;

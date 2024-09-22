"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface iAppProps {
  data: {
    date: string;
    revenue: number;
  }[];
}

interface AggregatedData {
  date: string;
  revenue: number;
}

const aggregateData = (
  data: { date: string; revenue: number }[]
): AggregatedData[] => {
  const aggregated = data.reduce(
    (acc: Record<string, number>, curr: { date: string; revenue: number }) => {
      if (acc[curr.date]) {
        acc[curr.date] += curr.revenue;
      } else {
        acc[curr.date] = curr.revenue;
      }
      return acc;
    },
    {}
  );

  return Object.keys(aggregated).map((date) => ({
    date,
    revenue: aggregated[date],
  }));
};

export function Chart({ data }: iAppProps) {
  const processedData = aggregateData(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={processedData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        {/* Define the gradient for the area fill */}
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
            <stop offset="75%" stopColor="#3b82f6" stopOpacity={0.05} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
        <XAxis
          dataKey="date"
          tick={{ fontSize: 12, fill: "#6b7280" }} // Styled X-axis ticks
          tickLine={false}
          axisLine={{ stroke: "#d1d5db" }} // Styled X-axis line
        />
        <YAxis
          tick={{ fontSize: 12, fill: "#6b7280" }} // Styled Y-axis ticks
          tickLine={false}
          axisLine={{ stroke: "#d1d5db" }} // Styled Y-axis line
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#f3f4f6",
            borderColor: "#d1d5db",
            borderRadius: 8,
            padding: 10,
          }}
          labelStyle={{ color: "#6b7280" }}
          formatter={(value: number) => [`$${value.toFixed(2)}`, "Revenue"]}
        />
        <Legend verticalAlign="top" height={36} />
        <Area
          type="monotone"
          dataKey="revenue"
          stroke="#3b82f6"
          fillOpacity={1}
          fill="url(#colorRevenue)" // Gradient fill for the area
          strokeWidth={2}
          activeDot={{ r: 8 }}
          dot={{ r: 4, fill: "#3b82f6" }} // Custom dot styling
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

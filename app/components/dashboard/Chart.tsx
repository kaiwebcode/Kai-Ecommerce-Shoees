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
      acc[curr.date] = (acc[curr.date] || 0) + curr.revenue;
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
    <div className="w-full">
      <ResponsiveContainer
        width="100%"
        height={400}
        className="md:h-96 sm:h-80 h-64" // Adjust height based on screen size
      >
        <AreaChart
          data={processedData}
        >
          <defs>
            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#3b82f6" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickLine={false}
            axisLine={{ stroke: "#d1d5db" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            tickLine={false}
            axisLine={{ stroke: "#d1d5db" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#f3f4f6",
              borderColor: "#d1d5db",
              borderRadius: 8,
              padding: 10,
            }}
            labelStyle={{ color: "#6b7280" }}
            formatter={(value: number) => [`₹${value.toFixed(2)}`, "Revenue"]} // Replaced with Rupees symbol
          />
          <Legend verticalAlign="top" height={36} />
          <Area
            type="monotone"
            dataKey="revenue"
            stroke="#3b82f6"
            fillOpacity={1}
            fill="url(#colorRevenue)"
            strokeWidth={2}
            activeDot={{ r: 8 }}
            dot={{ r: 4, fill: "#3b82f6" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

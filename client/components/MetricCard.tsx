import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  statusText: string;
  description: string;
}

export function MetricCard({
  title,
  value,
  change,
  isPositive,
  statusText,
  description,
}: MetricCardProps) {
  const TrendIcon = isPositive ? TrendingUp : TrendingDown;

  return (
    <Card className="border-2 border-border bg-card shadow-sm hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-6 py-6">
        {/* Top Section */}
        <div className="flex flex-col gap-1.5 px-6">
          <div className="flex items-center justify-between gap-1.5">
            <h3 className="flex-1 text-sm font-normal text-muted-foreground">
              {title}
            </h3>
            <div className="flex items-center justify-center gap-1 px-2 py-0.5 h-[22px] rounded-md border border-border">
              <TrendIcon className="w-4 h-4 text-foreground" />
              <span className="text-xs font-semibold text-foreground">
                {change}
              </span>
            </div>
          </div>
          <div className="text-2xl font-semibold text-card-foreground leading-8">
            {value}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-1.5 px-6">
          <div className="flex items-center gap-1">
            <span className="text-sm font-medium text-card-foreground">
              {statusText}
            </span>
            <TrendIcon className="w-4 h-4 text-card-foreground" />
          </div>
          <p className="text-sm font-normal text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}

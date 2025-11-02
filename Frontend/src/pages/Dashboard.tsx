import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { KanbanBoard } from "@/components/dashboard/KanbanBoard";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { CheckSquare, Clock, Users, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Overview of your tasks and productivity
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Tasks"
          value="24"
          icon={CheckSquare}
          trend="+12%"
          trendUp={true}
        />
        <StatsCard
          title="In Progress"
          value="8"
          icon={Clock}
          trend="+5%"
          trendUp={true}
        />
        <StatsCard
          title="Team Members"
          value="12"
          icon={Users}
          trend="+2"
          trendUp={true}
        />
        <StatsCard
          title="Completion Rate"
          value="87%"
          icon={TrendingUp}
          trend="+3%"
          trendUp={true}
        />
      </div>

      <Card className="card-elevated">
        <CardHeader>
          <CardTitle>Task Board</CardTitle>
        </CardHeader>
        <CardContent>
          <KanbanBoard />
        </CardContent>
      </Card>
    </div>
  );
}

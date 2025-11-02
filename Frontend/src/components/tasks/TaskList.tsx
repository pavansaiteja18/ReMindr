import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User } from "lucide-react";

interface TaskListProps {
  searchQuery: string;
}

const mockTasks = [
  {
    id: "1",
    title: "Design new landing page",
    description: "Create a modern, responsive landing page",
    assignee: "Sarah Johnson",
    dueDate: "2025-11-05",
    status: "todo",
    priority: "high",
  },
  {
    id: "2",
    title: "Fix authentication bug",
    description: "Users unable to login with Google",
    assignee: "Pavan Kumar",
    dueDate: "2025-11-03",
    status: "in-progress",
    priority: "high",
  },
  {
    id: "3",
    title: "Update API documentation",
    description: "Add examples for new endpoints",
    assignee: "Mike Chen",
    dueDate: "2025-11-07",
    status: "todo",
    priority: "medium",
  },
];

export const TaskList = ({ searchQuery }: TaskListProps) => {
  const filteredTasks = mockTasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-3">
      {filteredTasks.map((task) => (
        <Card key={task.id} className="card-elevated cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-semibold">{task.title}</h3>
                  <Badge 
                    variant={
                      task.priority === "high" ? "destructive" : 
                      task.priority === "medium" ? "default" : 
                      "secondary"
                    }
                  >
                    {task.priority}
                  </Badge>
                  <Badge variant="outline">
                    {task.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  {task.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {task.assignee}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {task.dueDate}
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

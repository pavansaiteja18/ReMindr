import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const mockTasks = {
  todo: [
    { id: "1", title: "Design new landing page", assignee: "Sarah", priority: "high" },
    { id: "2", title: "Update API documentation", assignee: "Mike", priority: "medium" },
  ],
  inProgress: [
    { id: "3", title: "Fix authentication bug", assignee: "Pavan", priority: "high" },
    { id: "4", title: "Implement dark mode", assignee: "Lisa", priority: "low" },
  ],
  done: [
    { id: "5", title: "Setup CI/CD pipeline", assignee: "John", priority: "medium" },
  ],
};

const columns = [
  { id: "todo", title: "To Do", tasks: mockTasks.todo },
  { id: "inProgress", title: "In Progress", tasks: mockTasks.inProgress },
  { id: "done", title: "Done", tasks: mockTasks.done },
];

export const KanbanBoard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {columns.map((column) => (
        <div key={column.id} className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-sm text-muted-foreground">
              {column.title}
            </h3>
            <Badge variant="secondary" className="rounded-full">
              {column.tasks.length}
            </Badge>
          </div>
          
          <div className="space-y-2">
            {column.tasks.map((task) => (
              <Card key={task.id} className="cursor-pointer hover:shadow-glow transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-medium text-sm mb-2">{task.title}</h4>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{task.assignee}</span>
                    <Badge 
                      variant={
                        task.priority === "high" ? "destructive" : 
                        task.priority === "medium" ? "default" : 
                        "secondary"
                      }
                      className="text-xs"
                    >
                      {task.priority}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { ExtractedTasksList } from "@/components/extract/ExtractedTasksList";

export default function Extract() {
  const [chatText, setChatText] = useState("");
  const [loading, setLoading] = useState(false);
  const [extractedTasks, setExtractedTasks] = useState<any[]>([]);

  const handleExtract = async () => {
    if (!chatText.trim()) {
      toast.error("Please enter some text to analyze");
      return;
    }

    setLoading(true);
    
    // Simulate AI extraction
    setTimeout(() => {
      const mockTasks = [
        {
          id: "1",
          title: "Fix API bug",
          owner: "Pavan",
          deadline: "2025-11-03",
          priority: "high",
        },
        {
          id: "2",
          title: "Update documentation",
          owner: "Sarah",
          deadline: "2025-11-05",
          priority: "medium",
        },
      ];
      
      setExtractedTasks(mockTasks);
      toast.success("Tasks extracted successfully!");
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Brain className="h-8 w-8 text-primary" />
          AI Extract
        </h1>
        <p className="text-muted-foreground mt-1">
          Paste chat conversations to automatically extract tasks and action items
        </p>
      </div>

      <Card className="card-elevated">
        <CardHeader>
          <CardTitle>Input Text</CardTitle>
          <CardDescription>
            Paste meeting notes, chat logs, or any text containing tasks
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            placeholder="Example: Pavan will fix the API bug by Monday. Sarah needs to update the docs by Wednesday..."
            value={chatText}
            onChange={(e) => setChatText(e.target.value)}
            className="min-h-[200px] font-mono text-sm"
          />
          
          <Button 
            onClick={handleExtract}
            disabled={loading}
            className="btn-gradient"
          >
            {loading ? (
              <>Processing...</>
            ) : (
              <>
                <Sparkles className="h-4 w-4 mr-2" />
                Extract Tasks
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {extractedTasks.length > 0 && (
        <ExtractedTasksList tasks={extractedTasks} />
      )}
    </div>
  );
}

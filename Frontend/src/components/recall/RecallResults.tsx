import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";

interface RecallResultsProps {
  results: {
    answer: string;
    sources: Array<{
      id: string;
      title: string;
      date: string;
      excerpt: string;
    }>;
  };
}

export const RecallResults = ({ results }: RecallResultsProps) => {
  return (
    <div className="space-y-4">
      <Card className="card-elevated bg-gradient-hero border-primary/20">
        <CardHeader>
          <CardTitle className="text-lg">Answer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-foreground leading-relaxed">{results.answer}</p>
        </CardContent>
      </Card>

      {results.sources.length > 0 && (
        <Card className="card-elevated">
          <CardHeader>
            <CardTitle className="text-lg">Sources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {results.sources.map((source) => (
              <Card key={source.id} className="hover:shadow-glow transition-shadow cursor-pointer">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium mb-1">{source.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                        {source.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {source.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

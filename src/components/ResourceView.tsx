
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FileText, FileQuestion, Video } from "lucide-react";
import { Subject } from "./SubjectGrid";
import { SubjectWithResources } from "@/data/subjects";
import subjects from "@/data/subjects";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface ResourceViewProps {
  subject: Subject;
  onBack: () => void;
}

const ResourceView = ({ subject, onBack }: ResourceViewProps) => {
  const isMobile = useIsMobile();
  // Find the full subject data with resources
  const subjectWithResources = subjects.find(s => s.id === subject.id) as SubjectWithResources;
  
  // Function to handle resource clicks
  const handleResourceClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-4 md:mb-6 flex-wrap gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="mr-2"
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h2 className="text-xl md:text-2xl font-heading font-semibold">
          {subject.name} <span className="text-sm text-gray-500 ml-2 block md:inline">{subject.code}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Notes Column */}
        <Card>
          <CardHeader className="bg-xnote-primary text-white rounded-t-lg p-3 md:p-4">
            <CardTitle className="flex items-center text-base md:text-lg">
              <FileText className="h-5 w-5 mr-2" />
              Notes
            </CardTitle>
            <CardDescription className="text-gray-200 text-xs md:text-sm">
              Module-wise notes
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 p-2 md:pt-4 md:p-4">
            <div className="space-y-2">
              {subjectWithResources.modules.map((module) => (
                <Button
                  key={module.id}
                  variant="outline"
                  className="w-full justify-start text-xs md:text-sm"
                  onClick={() => handleResourceClick(module.url)}
                >
                  {module.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* PYQs Column */}
        <Card>
          <CardHeader className="bg-xnote-secondary text-white rounded-t-lg p-3 md:p-4">
            <CardTitle className="flex items-center text-base md:text-lg">
              <FileQuestion className="h-5 w-5 mr-2" />
              Previous Year Questions
            </CardTitle>
            <CardDescription className="text-gray-200 text-xs md:text-sm">
              Internal and semester exams
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 p-2 md:pt-4 md:p-4">
            <div className="space-y-2">
              {subjectWithResources.exams.map((exam) => (
                <Button
                  key={exam.id}
                  variant="outline"
                  className="w-full justify-start text-xs md:text-sm"
                  onClick={() => handleResourceClick(exam.url)}
                >
                  {exam.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Videos Column */}
        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader className="bg-xnote-accent text-white rounded-t-lg p-3 md:p-4">
            <CardTitle className="flex items-center text-base md:text-lg">
              <Video className="h-5 w-5 mr-2" />
              One-Shot Videos
            </CardTitle>
            <CardDescription className="text-gray-200 text-xs md:text-sm">
              Module-wise video tutorials
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-3 p-2 md:pt-4 md:p-4">
            <div className="space-y-2">
              {subjectWithResources.videos.map((video) => (
                <Button
                  key={video.id}
                  variant="outline"
                  className="w-full justify-start text-xs md:text-sm"
                  onClick={() => handleResourceClick(video.url)}
                >
                  {video.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResourceView;

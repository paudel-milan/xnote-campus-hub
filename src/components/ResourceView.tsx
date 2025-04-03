
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, FileText, FileQuestion, Video } from "lucide-react";
import { Subject } from "./SubjectGrid";
import { cn } from "@/lib/utils";

// Define the Module type for notes
interface Module {
  id: string;
  name: string;
  url: string;
}

// Define the Exam type for PYQs
interface Exam {
  id: string;
  name: string;
  url: string;
}

// Define the VideoResource type
interface VideoResource {
  id: string;
  moduleNumber: number;
  name: string;
  url: string;
}

interface ResourceViewProps {
  subject: Subject;
  onBack: () => void;
}

const ResourceView = ({ subject, onBack }: ResourceViewProps) => {
  // Mock data for modules
  const modules: Module[] = [
    { id: "m1", name: "Module 1", url: "https://example.com/module1" },
    { id: "m2", name: "Module 2", url: "https://example.com/module2" },
    { id: "m3", name: "Module 3", url: "https://example.com/module3" },
    { id: "m4", name: "Module 4", url: "https://example.com/module4" },
    { id: "m5", name: "Module 5", url: "https://example.com/module5" },
  ];

  // Mock data for exams
  const exams: Exam[] = [
    { id: "cie1", name: "CIE 1", url: "https://example.com/cie1" },
    { id: "cie2", name: "CIE 2", url: "https://example.com/cie2" },
    { id: "cie3", name: "CIE 3", url: "https://example.com/cie3" },
    { id: "see", name: "SEE", url: "https://example.com/see" },
  ];

  // Mock data for videos
  const videos: VideoResource[] = [
    {
      id: "v1",
      moduleNumber: 1,
      name: "Module 1 Overview",
      url: "https://example.com/video1",
    },
    {
      id: "v2",
      moduleNumber: 2,
      name: "Module 2 Overview",
      url: "https://example.com/video2",
    },
    {
      id: "v3",
      moduleNumber: 3,
      name: "Module 3 Overview",
      url: "https://example.com/video3",
    },
    {
      id: "v4",
      moduleNumber: 4,
      name: "Module 4 Overview",
      url: "https://example.com/video4",
    },
    {
      id: "v5",
      moduleNumber: 5,
      name: "Module 5 Overview",
      url: "https://example.com/video5",
    },
  ];

  // Function to handle resource clicks
  const handleResourceClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          size="sm"
          className="mr-4"
          onClick={onBack}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h2 className="text-2xl font-heading font-semibold">
          {subject.name} <span className="text-sm text-gray-500 ml-2">{subject.code}</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Notes Column */}
        <Card>
          <CardHeader className="bg-xnote-primary text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Notes
            </CardTitle>
            <CardDescription className="text-gray-200">
              Module-wise notes
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              {modules.map((module) => (
                <Button
                  key={module.id}
                  variant="outline"
                  className="w-full justify-start"
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
          <CardHeader className="bg-xnote-secondary text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <FileQuestion className="h-5 w-5 mr-2" />
              Previous Year Questions
            </CardTitle>
            <CardDescription className="text-gray-200">
              Internal and semester exams
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              {exams.map((exam) => (
                <Button
                  key={exam.id}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleResourceClick(exam.url)}
                >
                  {exam.name}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Videos Column */}
        <Card>
          <CardHeader className="bg-xnote-accent text-white rounded-t-lg">
            <CardTitle className="flex items-center">
              <Video className="h-5 w-5 mr-2" />
              One-Shot Videos
            </CardTitle>
            <CardDescription className="text-gray-200">
              Module-wise video tutorials
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-2">
              {videos.map((video) => (
                <Button
                  key={video.id}
                  variant="outline"
                  className="w-full justify-start"
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

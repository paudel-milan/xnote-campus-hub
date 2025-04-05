
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Book } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Define the Subject type
export interface Subject {
  id: string;
  code: string;
  name: string;
  department: string;
  semester: string;
}

interface SubjectGridProps {
  subjects: Subject[];
  selectedDepartment: string;
  selectedSemester: string;
  onSelectSubject: (subject: Subject) => void;
}

const SubjectGrid = ({
  subjects,
  selectedDepartment,
  selectedSemester,
  onSelectSubject,
}: SubjectGridProps) => {
  // Filter subjects based on selected department and semester
  const filteredSubjects = subjects.filter(
    (subject) =>
      subject.department === selectedDepartment &&
      subject.semester === selectedSemester
  );

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl md:text-2xl font-heading font-semibold mb-4 md:mb-6">
        {subjects.find((s) => s.department === selectedDepartment)?.department.toUpperCase() || selectedDepartment.toUpperCase()} - 
        Semester {selectedSemester}
      </h2>
      
      {filteredSubjects.length === 0 ? (
        <div className="flex flex-col items-center justify-center p-6 md:p-12 text-center">
          <Book size={36} className="text-gray-400 mb-3 md:mb-4" />
          <h3 className="text-lg md:text-xl font-medium text-gray-600">No subjects found</h3>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            There are no subjects available for this department and semester combination.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {filteredSubjects.map((subject) => (
            <Card
              key={subject.id}
              className="hover:shadow-md transition-all cursor-pointer border-l-4 border-l-xnote-secondary grid-card-transition"
              onClick={() => onSelectSubject(subject)}
            >
              <CardHeader className="pb-2 p-4 sm:p-5">
                <CardTitle className="text-base md:text-lg font-medium">
                  {subject.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 sm:p-5 sm:pt-0">
                <p className="text-xs md:text-sm text-gray-600">{subject.code}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 sm:p-5 sm:pt-0">
                <p className="text-xs text-gray-500">Click to view resources</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default SubjectGrid;

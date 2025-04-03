
import { useState, useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SubjectGrid, { Subject } from "@/components/SubjectGrid";
import ResourceView from "@/components/ResourceView";
import subjects from "@/data/subjects";

const Index = () => {
  // State for selected department and semester
  const [selectedDepartment, setSelectedDepartment] = useLocalStorage<string>("xnote-department", "cse");
  const [selectedSemester, setSelectedSemester] = useLocalStorage<string>("xnote-semester", "1");
  
  // State for selected subject (when viewing resources)
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const handleSelectSubject = (subject: Subject) => {
    setSelectedSubject(subject);
  };

  const handleBackToSubjects = () => {
    setSelectedSubject(null);
  };

  return (
    <div className="min-h-screen bg-xnote-background">
      <Header 
        selectedDepartment={selectedDepartment}
        setSelectedDepartment={setSelectedDepartment}
      />
      
      <div className="flex w-full">
        <SidebarProvider className="w-full">
          <div className="flex w-full">
            <Sidebar 
              selectedSemester={selectedSemester}
              setSelectedSemester={setSelectedSemester}
            />
            
            <main className="flex-1 p-6">
              <div className="container mx-auto max-w-6xl">
                {selectedSubject ? (
                  <ResourceView 
                    subject={selectedSubject}
                    onBack={handleBackToSubjects}
                  />
                ) : (
                  <SubjectGrid 
                    subjects={subjects}
                    selectedDepartment={selectedDepartment}
                    selectedSemester={selectedSemester}
                    onSelectSubject={handleSelectSubject}
                  />
                )}
              </div>
            </main>
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
};

export default Index;

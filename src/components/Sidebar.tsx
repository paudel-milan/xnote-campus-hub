
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const semesters = [
  { id: "1", name: "1st Semester" },
  { id: "2", name: "2nd Semester" },
  { id: "3", name: "3rd Semester" },
  { id: "4", name: "4th Semester" },
  { id: "5", name: "5th Semester" },
  { id: "6", name: "6th Semester" },
  { id: "7", name: "7th Semester" },
  { id: "8", name: "8th Semester" },
];

interface SidebarProps {
  selectedSemester: string;
  setSelectedSemester: (semester: string) => void;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
}

const Sidebar = ({ selectedSemester, setSelectedSemester, isOpen, setIsOpen }: SidebarProps) => {
  const isMobile = useIsMobile();
  
  const toggleSidebar = () => {
    if (setIsOpen) {
      setIsOpen(!isOpen);
    }
  };

  // For mobile: show/hide sidebar based on isOpen prop
  if (isMobile) {
    return (
      <>
        <Button 
          variant="outline" 
          size="icon" 
          className="fixed bottom-4 left-4 z-40 md:hidden shadow-md bg-white"
          onClick={toggleSidebar}
        >
          <Menu size={20} />
          <span className="sr-only">Toggle Sidebar</span>
        </Button>
        
        <div className={`fixed inset-0 bg-black/50 z-30 md:hidden transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleSidebar}></div>
        
        <div className={`fixed left-0 top-0 bottom-0 w-[220px] bg-white border-r border-gray-200 p-4 z-40 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-heading font-medium text-lg">Semesters</h2>
            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X size={18} />
            </Button>
          </div>
          
          <div className="flex flex-col space-y-2">
            {semesters.map((semester) => (
              <Button
                key={semester.id}
                className={`w-full justify-start ${
                  selectedSemester === semester.id
                    ? "bg-xnote-secondary text-white"
                    : "bg-transparent text-gray-700 hover:bg-gray-100"
                }`}
                variant={selectedSemester === semester.id ? "default" : "ghost"}
                onClick={() => setSelectedSemester(semester.id)}
              >
                <span>{semester.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </>
    );
  }

  // Default desktop sidebar
  return (
    <div className="w-[220px] min-h-[calc(100vh-64px)] bg-white border-r border-gray-200 p-4 hidden md:block">
      <h2 className="font-heading font-medium text-lg mb-4">Semesters</h2>
      <div className="flex flex-col space-y-2">
        {semesters.map((semester) => (
          <Button
            key={semester.id}
            className={`w-full justify-start ${
              selectedSemester === semester.id
                ? "bg-xnote-secondary text-white"
                : "bg-transparent text-gray-700 hover:bg-gray-100"
            }`}
            variant={selectedSemester === semester.id ? "default" : "ghost"}
            onClick={() => setSelectedSemester(semester.id)}
          >
            <span>{semester.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

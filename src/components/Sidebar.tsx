
import { Button } from "@/components/ui/button";

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
}

const Sidebar = ({ selectedSemester, setSelectedSemester }: SidebarProps) => {
  return (
    <div className="w-[220px] min-h-[calc(100vh-64px)] bg-white border-r border-gray-200 p-4">
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

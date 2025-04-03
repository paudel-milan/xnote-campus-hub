
import { Button } from "@/components/ui/button";
import { 
  Sidebar as ShadcnSidebar, 
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";

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
    <ShadcnSidebar className="border-r border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Semesters</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {semesters.map((semester) => (
                <SidebarMenuItem key={semester.id}>
                  <SidebarMenuButton
                    className={`w-full ${
                      selectedSemester === semester.id
                        ? "bg-xnote-secondary text-white"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedSemester(semester.id)}
                  >
                    <span>{semester.name}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </ShadcnSidebar>
  );
};

export default Sidebar;

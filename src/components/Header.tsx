
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

const departments = [
  { id: "cse", name: "CSE" },
  { id: "civil", name: "CIVIL" },
  { id: "ece", name: "ECE" },
  { id: "ise", name: "ISE" },
  { id: "aiml", name: "AIML" },
  { id: "aids", name: "AIDS" },
];

interface HeaderProps {
  selectedDepartment: string;
  setSelectedDepartment: (department: string) => void;
}

const Header = ({ selectedDepartment, setSelectedDepartment }: HeaderProps) => {
  return (
    <header className="bg-xnote-primary text-white p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-heading font-bold">XNote</h1>
            <p className="text-sm opacity-80">Campus Hub</p>
          </div>
          
          <nav className="hidden md:flex items-center space-x-1">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                variant={selectedDepartment === dept.id ? "default" : "ghost"}
                className={`${
                  selectedDepartment === dept.id
                    ? "bg-white text-xnote-primary"
                    : "text-white hover:bg-white/10"
                }`}
                onClick={() => setSelectedDepartment(dept.id)}
              >
                {dept.name}
              </Button>
            ))}
          </nav>
          
          <div className="md:hidden">
            <select
              className="bg-white text-xnote-primary p-2 rounded"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
            >
              {departments.map((dept) => (
                <option key={dept.id} value={dept.id}>
                  {dept.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

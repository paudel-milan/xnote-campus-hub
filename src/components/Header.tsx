
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu } from "lucide-react";
import { useState } from "react";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-xnote-primary text-white p-3 md:p-4 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-heading font-bold">XNote</h1>
            <p className="text-xs md:text-sm opacity-80">Campus Hub</p>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {departments.map((dept) => (
              <Button
                key={dept.id}
                variant={selectedDepartment === dept.id ? "default" : "ghost"}
                className={`${
                  selectedDepartment === dept.id
                    ? "bg-white text-xnote-primary"
                    : "text-white hover:bg-white/10"
                } text-sm`}
                onClick={() => setSelectedDepartment(dept.id)}
              >
                {dept.name}
              </Button>
            ))}
          </nav>
          
          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white">
                  {departments.find(d => d.id === selectedDepartment)?.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-white">
                {departments.map((dept) => (
                  <DropdownMenuItem 
                    key={dept.id}
                    className={selectedDepartment === dept.id ? "bg-xnote-primary/10 font-medium" : ""}
                    onClick={() => setSelectedDepartment(dept.id)}
                  >
                    {dept.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

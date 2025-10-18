import { useState } from "react";
import acLogo from "@/assets/ac-logo.png";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Briefcase, Code2, User, Mail } from "lucide-react";

interface NavigationProps {
  onLogoClick: () => void;
}

const Navigation = ({ onLogoClick }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Experience", href: "#experience", icon: Briefcase },
    { label: "Skills", href: "#skills", icon: Code2 },
    { label: "Work", href: "#projects", icon: User },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={onLogoClick}
            className="flex items-center hover:opacity-70 transition-opacity"
            aria-label="Open terminal"
          >
            <img src={acLogo} alt="AC Logo" className="h-10 w-auto" />
          </button>

          {/* Desktop Navigation with Dock */}
          <div className="hidden md:flex items-center">
            <Dock magnification={60} distance={100} panelHeight={48}>
              {navItems.map((item) => (
                <DockItem key={item.label}>
                  <DockLabel>{item.label}</DockLabel>
                  <DockIcon>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="w-full h-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={item.label}
                    >
                      <item.icon className="w-5 h-5" />
                    </button>
                  </DockIcon>
                </DockItem>
              ))}
            </Dock>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

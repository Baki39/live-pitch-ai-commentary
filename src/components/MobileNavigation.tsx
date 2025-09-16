import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Settings, 
  BarChart3, 
  Users, 
  Play,
  Menu,
  X
} from "lucide-react";

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { id: 'home', icon: Home, label: 'Početna', path: '/' },
    { id: 'teams', icon: Users, label: 'Timovi', path: '/teams' },
    { id: 'live', icon: Play, label: 'Live Stream', path: '/live-dashboard' },
    { id: 'analytics', icon: BarChart3, label: 'Analitika', path: '/analytics' },
    { id: 'settings', icon: Settings, label: 'Postavke', path: '/settings' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button - Fixed position for easy thumb access */}
      <Button
        variant="live"
        size="lg"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Navigation Panel */}
          <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 md:hidden">
            <div className="p-6 space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">Navigacija</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Button
                      key={item.id}
                      variant={isActive ? "default" : "outline"}
                      className="h-16 flex flex-col items-center justify-center space-y-2 text-sm"
                      onClick={() => handleNavigation(item.path)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Button>
                  );
                })}
              </div>
              
              {/* Quick Actions */}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => handleNavigation('/live-dashboard')}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Pokreni Live Stream
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
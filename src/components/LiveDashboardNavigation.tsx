import { useState } from "react";
import { 
  Camera, 
  Mic, 
  Users, 
  BarChart3, 
  Settings,
  Play,
  Target,
  Timer
} from "lucide-react";

interface LiveDashboardNavigationProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

export const LiveDashboardNavigation = ({ selectedTab, onTabChange }: LiveDashboardNavigationProps) => {
  const navItems = [
    { id: 'setup', icon: Settings, label: 'Postavke' },
    { id: 'teams', icon: Users, label: 'Timovi' },
    { id: 'tracking', icon: Target, label: 'Tracking' },
    { id: 'live', icon: Play, label: 'Live' },
    { id: 'analytics', icon: BarChart3, label: 'Analitika' }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-background/80 backdrop-blur-md border-t border-border/50">
        <div className="flex items-center justify-around px-2 py-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = selectedTab === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                  isActive 
                    ? 'bg-green-500/20 text-green-400 shadow-lg shadow-green-500/20' 
                    : 'text-muted-foreground/70 hover:text-green-300 hover:bg-green-500/10'
                }`}
              >
                <Icon 
                  className={`w-5 h-5 transition-all duration-200 ${
                    isActive ? 'scale-110' : 'scale-100'
                  }`} 
                />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
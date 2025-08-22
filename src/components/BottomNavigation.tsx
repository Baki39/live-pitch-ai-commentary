import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Settings, 
  BarChart3, 
  Users, 
  Play,
  Camera,
  Mic
} from "lucide-react";

export const BottomNavigation = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navItems = [
    { id: 'home', icon: Home, label: 'Početna' },
    { id: 'teams', icon: Users, label: 'Timovi' },
    { id: 'live', icon: Play, label: 'Live', special: true },
    { id: 'analytics', icon: BarChart3, label: 'Analitika' },
    { id: 'settings', icon: Settings, label: 'Postavke' }
  ];

  return (
    <Card className="fixed bottom-4 left-4 right-4 z-50 bg-card/80 backdrop-blur-md border-border/50 mx-auto max-w-md">
      <div className="flex items-center justify-around p-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          if (item.special) {
            return (
              <Button
                key={item.id}
                variant="live"
                size="lg"
                className="rounded-full w-14 h-14 shadow-lg"
                onClick={() => setActiveTab(item.id)}
              >
                <Icon className="w-6 h-6" />
              </Button>
            );
          }
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 min-w-0 ${
                isActive ? 'text-field-light' : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab(item.id)}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-field-light' : ''}`} />
              <span className="text-xs">{item.label}</span>
            </Button>
          );
        })}
      </div>
    </Card>
  );
};
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { User, Crown, Settings } from "lucide-react";

interface FootballHeaderProps {
  user?: {
    name: string;
    plan: 'free' | 'premium' | 'pro';
  } | null;
}

export const FootballHeader = ({ user }: FootballHeaderProps) => {
  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'premium': return 'bg-referee-yellow text-stadium-dark';
      case 'pro': return 'bg-gradient-hero text-primary-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <header className="w-full bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-field rounded-lg flex items-center justify-center">
            <span className="text-goalpost font-bold text-lg">⚽</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">AI Komentator</h1>
            <p className="text-xs text-muted-foreground">Fudbalski Live Stream</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {user ? (
            <>
              <Badge className={getPlanColor(user.plan)}>
                {user.plan === 'pro' && <Crown className="w-3 h-3 mr-1" />}
                {user.plan.toUpperCase()}
              </Badge>
              <Button variant="ghost" size="sm">
                <User className="w-4 h-4 mr-2" />
                {user.name}
              </Button>
            </>
          ) : (
            <Button variant="hero" size="sm">
              Prijavite se
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
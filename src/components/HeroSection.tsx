import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Camera, Mic, Zap } from "lucide-react";
import stadiumHero from "@/assets/stadium-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${stadiumHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-field-green via-field-light to-goalpost bg-clip-text text-transparent leading-tight">
              AI Fudbalski
              <br />
              <span className="text-goalpost">Komentator</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolucionarna AI platforma za profesionalno komentiranje fudbalskih utakmica u realnom vremenu. 
              Kombinira naprednu computer vision tehnologiju sa prirodnim jezičkim modelima za potpuno automatsko 
              praćenje igrača, analizu taktike i energično komentiranje na bosanskom jeziku.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" className="w-full sm:w-auto">
              <Play className="w-6 h-6 mr-3" />
              POKRENI LIVE STREAM
            </Button>
            <Button variant="outline" size="xl" className="w-full sm:w-auto border-field-light text-field-light hover:bg-field-green/10">
              <Camera className="w-5 h-5 mr-2" />
              Pogledaj Demo Utakmicu
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <Card className="px-6 py-3 bg-card/40 backdrop-blur-sm border-field-light/20 hover:bg-card/60 transition-all">
              <div className="flex items-center space-x-3 text-sm font-medium">
                <div className="w-8 h-8 bg-gradient-field rounded-full flex items-center justify-center">
                  <Camera className="w-4 h-4 text-background" />
                </div>
                <span>Multi-Player AI Tracking</span>
              </div>
            </Card>
            <Card className="px-6 py-3 bg-card/40 backdrop-blur-sm border-field-light/20 hover:bg-card/60 transition-all">
              <div className="flex items-center space-x-3 text-sm font-medium">
                <div className="w-8 h-8 bg-gradient-field rounded-full flex items-center justify-center">
                  <Mic className="w-4 h-4 text-background" />
                </div>
                <span>Neural Voice Commentary</span>
              </div>
            </Card>
            <Card className="px-6 py-3 bg-card/40 backdrop-blur-sm border-field-light/20 hover:bg-card/60 transition-all">
              <div className="flex items-center space-x-3 text-sm font-medium">
                <div className="w-8 h-8 bg-gradient-field rounded-full flex items-center justify-center">
                  <Zap className="w-4 h-4 text-background" />
                </div>
                <span>Live Analytics Engine</span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Camera, 
  Mic, 
  Users, 
  BarChart3, 
  Globe, 
  Save, 
  Zap, 
  Target,
  MessageSquare,
  Settings,
  Shield,
  Smartphone
} from "lucide-react";

export const FeaturesGrid = () => {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-field-light" />,
      title: "AI Camera Tracking",
      description: "Tapnite na igrača na kameri za automatsko praćenje tokom cijele utakmice."
    },
    {
      icon: <Target className="w-8 h-8 text-field-light" />,
      title: "Kalibracija Terena",
      description: "Automatska kalibracija terena, golova i linija pomoću napredne AI tehnologije."
    },
    {
      icon: <Mic className="w-8 h-8 text-field-light" />,
      title: "Live AI Komentiranje",
      description: "Profesionalno komentiranje u realnom vremenu sa različitim stilovima i glasovima."
    },
    {
      icon: <Users className="w-8 h-8 text-field-light" />,
      title: "Tim Management",
      description: "Dodajte timove, igrače i brojeve za kompletno praćenje utakmice."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-field-light" />,
      title: "Stilovi Komentarisanja",
      description: "Izaberite između energičnog, profesionalnog, emotivnog i drugih stilova."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-field-light" />,
      title: "Detaljana Analitika",
      description: "Šutevi, golovi, korneri, posjed lopte i sveobuhvatne statistike."
    },
    {
      icon: <Globe className="w-8 h-8 text-field-light" />,
      title: "Live Streaming",
      description: "Podijelite uživo na sve popularne društvene mreže direktno iz aplikacije."
    },
    {
      icon: <Save className="w-8 h-8 text-field-light" />,
      title: "Auto Save",
      description: "Automatsko snimanje u galeriju bez trošenja memorije na aplikaciji."
    },
    {
      icon: <Zap className="w-8 h-8 text-field-light" />,
      title: "Pause & Resume",
      description: "Pauzirajte i nastavite - AI pamti sve i nastavlja tamo gdje ste stali."
    },
    {
      icon: <Settings className="w-8 h-8 text-field-light" />,
      title: "Fleksibilna Konfiguracija",
      description: "Prilagodite AI modele, jezike i osobine komentarisanja po želji."
    },
    {
      icon: <Shield className="w-8 h-8 text-field-light" />,
      title: "Sigurnost Podataka",
      description: "Vaši snimci i podaci su bezbijedno čuvani sa enkripcionom zaštitom."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-field-light" />,
      title: "Mobilna Optimizacija",
      description: "Dizajnirana za mobilne uređaje sa intuitivnim touch kontrolama."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Napredne <span className="text-field-light">funkcije</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Kombinacija najnovijih AI tehnologija za potpuno automatsko praćenje i komentiranje fudbalskih utakmica.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="transition-all duration-300 hover:shadow-card-glow hover:scale-105 bg-card/60 backdrop-blur-sm border-border/50"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 bg-gradient-field rounded-lg flex items-center justify-center mb-4 stadium-glow">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
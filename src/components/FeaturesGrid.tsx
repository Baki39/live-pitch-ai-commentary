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
      title: "Multi-Player AI Tracking",
      description: "Napredni computer vision algoritmi automatski prepoznaju i prate do 22 igrača istovremeno. Jednostavno tapnite na igrača da ga označite - AI će ga pratiti kroz cijelu utakmicu koristeći biomechaniku kretanja i prepoznavanje lica."
    },
    {
      icon: <Target className="w-8 h-8 text-field-light" />,
      title: "Smart Field Calibration",
      description: "Automatska 3D kalibracija fudbalskog terena uz prepoznavanje linija, golova, kornera i ofsajd pozicija. AI mapira kompletnu geometriju terena za precizno mjerenje udaljenosti, brzine i pozicioniranje igrača u realnom prostoru."
    },
    {
      icon: <Mic className="w-8 h-8 text-field-light" />,
      title: "Neural Voice Commentary",
      description: "Napredni GPT-4o model kombinovan sa custom sports modelom generiše profesionalno komentiranje u realnom vremenu. Prirodni bosanski jezik sa sportskim žargonom, emotivnim reakcijama na golove i taktičkim analizama."
    },
    {
      icon: <Users className="w-8 h-8 text-field-light" />,
      title: "Tim Management",
      description: "Dodajte timove, igrače i brojeve za kompletno praćenje utakmice."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-field-light" />,
      title: "Personalized Commentary Styles",
      description: "6 različitih stilova komentarisanja: Energični (kao Dragan Stojković), Profesionalni (BBC stil), Emotivni (južnoamerički), Analitički (taktički), Lokalni (prijateljski) i Dramatični (finale Svjetskog prvenstva)."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-field-light" />,
      title: "Live Analytics Engine",
      description: "Sveobuhvatna analiza utakmice u realnom vremenu: heat mape igrača, brzina trčanja, preciznost dodavanja, šutevi po zonama, posjed lopte po sektorima, pressing intenzitet i xG (Expected Goals) statistike sa vizualnim prikazom."
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
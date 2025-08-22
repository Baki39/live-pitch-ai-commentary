import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Crown, Star, Zap } from "lucide-react";

export const PricingSection = () => {
  const plans = [
    {
      name: "Mjesečno",
      price: "29",
      period: "/mjesec",
      description: "Perfektno za lokalne timove",
      features: [
        "AI komentiranje uživo",
        "Osnovno tracking igrača",
        "HD video recording",
        "Basic analitika",
        "5 utakmica mjesečno",
        "Email podrška"
      ],
      buttonText: "Počni mjesečno",
      variant: "field" as const,
      icon: <Star className="w-5 h-5" />
    },
    {
      name: "Godišnje",
      price: "299",
      originalPrice: "348",
      period: "/godina",
      description: "Najbolja vrijednost za klubove",
      features: [
        "Sve iz mjesečnog plana",
        "Napredni AI tracking",
        "4K video recording",
        "Detaljana analitika",
        "Neograničene utakmice",
        "Prilagođeni glasovi",
        "Prioritetna podrška",
        "Export podataka"
      ],
      buttonText: "Počni godišnje",
      variant: "hero" as const,
      popular: true,
      savings: "Uštedite 2 mjeseca!",
      icon: <Crown className="w-5 h-5" />
    },
    {
      name: "Pro Liga",
      price: "99",
      period: "/mjesec",
      description: "Za profesionalne klubove",
      features: [
        "Sve iz godišnjeg plana",
        "Multi-camera setup",
        "Advanced AI modeli",
        "Real-time statistike",
        "Broadcast kvaliteta",
        "Custom branding",
        "API pristup",
        "Dedicirani account manager"
      ],
      buttonText: "Kontaktiraj prodaju",
      variant: "premium" as const,
      icon: <Zap className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Izaberite svoj <span className="text-field-light">plan</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Od lokalnih prijateljskih utakmica do profesionalnih liga - imamo plan za svaki nivo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative transition-all duration-300 hover:shadow-card-glow ${
                plan.popular ? 'ring-2 ring-field-light shadow-field-glow scale-105' : ''
              }`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-referee-yellow text-stadium-dark">
                  NAJPOPULARNIJI
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-gradient-field rounded-lg flex items-center justify-center">
                    {plan.icon}
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center">
                    {plan.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through mr-2">
                        €{plan.originalPrice}
                      </span>
                    )}
                    <span className="text-4xl font-bold text-field-light">€{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <Badge variant="secondary" className="text-xs">
                      {plan.savings}
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-field-light flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </CardContent>

              <CardFooter>
                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Svi planovi uključuju 7-dnevni besplatni trial. Nema skrivenih troškova.
          </p>
        </div>
      </div>
    </section>
  );
};
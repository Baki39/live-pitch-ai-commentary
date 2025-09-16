import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { 
  Play, 
  Pause, 
  Square, 
  Camera, 
  Mic, 
  Users, 
  BarChart3, 
  Settings, 
  Target,
  Timer,
  Volume2,
  Share2,
  Save,
  CalendarCheck,
  MapPin,
  Zap,
  Eye,
  ArrowLeft
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LiveDashboardNavigation } from "@/components/LiveDashboardNavigation";
import stadiumHero from "@/assets/stadium-hero.jpg";

const LiveDashboard = () => {
  const navigate = useNavigate();
  const [isLiveActive, setIsLiveActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [selectedTab, setSelectedTab] = useState("setup");
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleStartLive = () => {
    setIsLiveActive(true);
    setSelectedTab("live");
  };

  const handlePauseLive = () => {
    setIsPaused(!isPaused);
  };

  const handleStopLive = () => {
    setIsLiveActive(false);
    setIsPaused(false);
    setSelectedTab("setup");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-field rounded-lg flex items-center justify-center">
                <span className="text-goalpost font-bold text-lg">⚽</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Live Stream Dashboard</h1>
                <p className="text-xs text-muted-foreground">Profesionalni AI Komentator</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {isLiveActive && (
              <Badge variant="destructive" className="animate-pulse">
                <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
                UŽIVO
              </Badge>
            )}
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Dijeli
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="setup">Postavke</TabsTrigger>
            <TabsTrigger value="teams">Timovi</TabsTrigger>
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
            <TabsTrigger value="live">Live Stream</TabsTrigger>
            <TabsTrigger value="analytics">Analitika</TabsTrigger>
          </TabsList>

          {/* Setup Tab */}
          <TabsContent value="setup" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Camera Setup */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Camera className="w-5 h-5" />
                    <span>Kamera Postavke</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
                    {!isCameraActive ? (
                      <>
                        {/* Stadium background image */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                          style={{ backgroundImage: `url(${stadiumHero})` }}
                        >
                          <div className="absolute inset-0 bg-black/30" />
                        </div>
                        
                        {/* Camera activation overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center space-y-3 bg-black/60 rounded-lg p-6 backdrop-blur-sm">
                            <Camera className="w-12 h-12 mx-auto text-white" />
                            <p className="text-sm text-white font-medium">Kamera nije aktivirana</p>
                            <Button 
                              variant="default" 
                              size="sm"
                              onClick={() => setIsCameraActive(true)}
                              className="bg-green-600 hover:bg-green-700"
                            >
                              Aktiviraj Kameru
                            </Button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                        <div className="text-center space-y-3">
                          <div className="w-12 h-12 mx-auto bg-green-500 rounded-full flex items-center justify-center">
                            <Camera className="w-6 h-6 text-white" />
                          </div>
                          <p className="text-sm text-white font-medium">Kamera je aktivna</p>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => setIsCameraActive(false)}
                          >
                            Deaktiviraj Kameru
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label>Rezolucija</Label>
                    <Select defaultValue="1080p">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="720p">720p HD</SelectItem>
                        <SelectItem value="1080p">1080p Full HD</SelectItem>
                        <SelectItem value="4k">4K Ultra HD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Commentary Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Mic className="w-5 h-5" />
                    <span>Komentator Postavke</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Glas Komentatora</Label>
                    <Select defaultValue="marko">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marko">Marko - Duboki glas</SelectItem>
                        <SelectItem value="ana">Ana - Ženski glas</SelectItem>
                        <SelectItem value="nikola">Nikola - Energičan glas</SelectItem>
                        <SelectItem value="stefan">Stefan - Profesionalan glas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Jezik Komentara</Label>
                    <Select defaultValue="bs">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bs">Bosanski</SelectItem>
                        <SelectItem value="sr">Srpski</SelectItem>
                        <SelectItem value="hr">Hrvatski</SelectItem>
                        <SelectItem value="en">Engleski</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Stil Komentarisanja</Label>
                    <Select defaultValue="energetic">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="energetic">Energično</SelectItem>
                        <SelectItem value="professional">Profesionalno</SelectItem>
                        <SelectItem value="emotional">Sa Emocijama</SelectItem>
                        <SelectItem value="analytical">Analitičko</SelectItem>
                        <SelectItem value="casual">Opušteno</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Volume2 className="w-4 h-4" />
                    <Label>Glasnoća: 85%</Label>
                  </div>
                </CardContent>
              </Card>

              {/* Field Calibration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Target className="w-5 h-5" />
                    <span>Kalibracija Terena</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      Kalibriraj teren pomjeranjem kamere od lijevog do desnog gola
                    </p>
                    <Button variant="outline" className="w-full">
                      <Target className="w-4 h-4 mr-2" />
                      Pokreni Auto-Kalibraciju
                    </Button>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="space-y-1">
                      <p className="font-medium">Lijevi Gol</p>
                      <p className="text-muted-foreground">Nije kalibiran</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Desni Gol</p>
                      <p className="text-muted-foreground">Nije kalibiran</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Match Settings */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CalendarCheck className="w-5 h-5" />
                    <span>Postavke Utakmice</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Naziv Utakmice</Label>
                    <Input placeholder="Npr. Prijateljska utakmica - Lokalni turnir" />
                  </div>
                  <div className="space-y-2">
                    <Label>Lokacija</Label>
                    <Input placeholder="Naziv stadiona ili lokacije" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="space-y-2">
                      <Label>Trajanje poluvremena</Label>
                      <Select defaultValue="45">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="30">30 minuta</SelectItem>
                          <SelectItem value="45">45 minuta</SelectItem>
                          <SelectItem value="90">90 minuta</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Broj poluvremena</Label>
                      <Select defaultValue="2">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 poluvrijeme</SelectItem>
                          <SelectItem value="2">2 poluvremena</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Teams Tab */}
          <TabsContent value="teams" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Team A */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                    <span>Tim A (Lijeva strana)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Naziv Tima</Label>
                    <Input placeholder="Unesite naziv tima" />
                  </div>
                  <div className="space-y-2">
                    <Label>Boja Dresa</Label>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded border-2 border-ring cursor-pointer" />
                      <div className="w-8 h-8 bg-red-500 rounded cursor-pointer" />
                      <div className="w-8 h-8 bg-green-500 rounded cursor-pointer" />
                      <div className="w-8 h-8 bg-yellow-500 rounded cursor-pointer" />
                      <div className="w-8 h-8 bg-white rounded border cursor-pointer" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Igrači (11)</Label>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div key={num} className="flex space-x-2">
                        <Input 
                          placeholder={`Igrač ${num}`} 
                          className="flex-1"
                        />
                        <Input 
                          placeholder="Br."
                          className="w-16"
                          type="number"
                          max="99"
                        />
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      + Dodaj više igrača
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Team B */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded-full" />
                    <span>Tim B (Desna strana)</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Naziv Tima</Label>
                    <Input placeholder="Unesite naziv tima" />
                  </div>
                  <div className="space-y-2">
                    <Label>Boja Dresa</Label>
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-blue-500 rounded cursor-pointer" />
                      <div className="w-8 h-8 bg-red-500 rounded border-2 border-ring cursor-pointer" />
                      <div className="w-8 h-8 bg-green-500 rounded cursor-pointer" />
                      <div className="w-8 h-8 bg-yellow-500 rounded cursor-pointer" />
                      <div className="w-8 h-8 bg-white rounded border cursor-pointer" />
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-3">
                    <Label>Igrači (11)</Label>
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div key={num} className="flex space-x-2">
                        <Input 
                          placeholder={`Igrač ${num}`} 
                          className="flex-1"
                        />
                        <Input 
                          placeholder="Br."
                          className="w-16"
                          type="number"
                          max="99"
                        />
                      </div>
                    ))}
                    <Button variant="outline" size="sm" className="w-full">
                      + Dodaj više igrača
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Player Tracking Tab */}
          <TabsContent value="tracking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5" />
                  <span>AI Player Tracking</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center space-y-2">
                        <Eye className="w-12 h-12 mx-auto text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Aktiviraj kameru za početak trackinga</p>
                        <Button variant="outline" size="sm">
                          <Camera className="w-4 h-4 mr-2" />
                          Aktiviraj Tracking
                        </Button>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <p>1. Tapni na igrača na ekranu da ga označiš</p>
                      <p>2. Upiši ime i broj igrača</p>
                      <p>3. Ponovi za sve igrače</p>
                      <p>4. AI će automatski pratiti sve označene igrače</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-medium">Trackovan Igrači</h4>
                    <div className="space-y-2">
                      {[
                        { name: "Marko Petrović", number: 10, team: "A", color: "blue" },
                        { name: "Ana Milić", number: 7, team: "B", color: "red" },
                      ].map((player, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`w-3 h-3 bg-${player.color}-500 rounded-full`} />
                            <span className="font-medium">{player.name}</span>
                            <Badge variant="outline">#{player.number}</Badge>
                          </div>
                          <Badge variant="secondary">Tim {player.team}</Badge>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full">
                      + Dodaj Novog Igrača
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Live Stream Tab */}
          <TabsContent value="live" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Stream */}
              <div className="lg:col-span-2 space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="aspect-video bg-black rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {!isLiveActive ? (
                          <div className="text-center space-y-4">
                            <div className="w-20 h-20 bg-field-green rounded-full flex items-center justify-center mx-auto">
                              <Play className="w-10 h-10 text-white ml-1" />
                            </div>
                            <div>
                              <h3 className="text-white text-xl font-bold mb-2">Spremno za Live Stream</h3>
                              <p className="text-white/70">Pritisnite dugme ispod da pokrenete live komentiranje</p>
                            </div>
                            <Button onClick={handleStartLive} size="lg" variant="hero" className="mt-4">
                              <Play className="w-5 h-5 mr-2" />
                              POKRENI LIVE STREAM
                            </Button>
                          </div>
                        ) : (
                          <div className="w-full h-full bg-gradient-to-br from-field-green to-field-light flex items-center justify-center">
                            <div className="text-center space-y-2">
                              <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                                <div className="w-6 h-6 bg-white rounded-full" />
                              </div>
                              <p className="text-white font-bold text-lg">UŽIVO</p>
                              <p className="text-white/80">AI Komentator je aktivan</p>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Live Controls Overlay */}
                      {isLiveActive && (
                        <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3">
                          <Button 
                            variant={isPaused ? "hero" : "outline"} 
                            size="sm"
                            onClick={handlePauseLive}
                          >
                            {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
                          </Button>
                          <Button variant="destructive" size="sm" onClick={handleStopLive}>
                            <Square className="w-4 h-4" />
                          </Button>
                          <Button variant="outline" size="sm">
                            <Save className="w-4 h-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Live Stats */}
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Timer className="w-5 h-5" />
                      <span>Live Statistike</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center space-y-2">
                      <div className="text-3xl font-bold">45:32</div>
                      <p className="text-sm text-muted-foreground">Trenutno vrijeme</p>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Golovi</span>
                        <span className="font-bold">2 - 1</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Šutevi</span>
                        <span>8 - 5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Korneri</span>
                        <span>3 - 2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Žuti kartoni</span>
                        <span>1 - 2</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Zadnji Komentari</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="text-sm space-y-1">
                      <p className="font-medium">45:32</p>
                      <p className="text-muted-foreground">"Odličan šut Petrovića, ali vratar je bio na mjestu!"</p>
                    </div>
                    <Separator />
                    <div className="text-sm space-y-1">
                      <p className="font-medium">44:15</p>
                      <p className="text-muted-foreground">"Korner za domaći tim, prilika za izjednačenje!"</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Match Stats */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="w-5 h-5" />
                    <span>Statistike Utakmice</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span>Posjed lopte</span>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm">60%</span>
                        <div className="w-16 h-2 bg-muted rounded-full">
                          <div className="w-3/5 h-full bg-field-green rounded-full" />
                        </div>
                        <span className="text-sm">40%</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Ukupno šuteva</span>
                      <span className="font-bold">13 - 8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Šutevi u okvir</span>
                      <span className="font-bold">6 - 3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Preciznost dodavanja</span>
                      <span className="font-bold">85% - 78%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Player Performance */}
              <Card>
                <CardHeader>
                  <CardTitle>Top Igrači</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { name: "Marko P.", team: "A", stat: "3 šuta", metric: "Napadač" },
                    { name: "Ana M.", team: "B", stat: "5 odbrana", metric: "Vezista" },
                    { name: "Stefan K.", team: "A", stat: "92% pas", metric: "Defanzivac" },
                  ].map((player, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className={`w-3 h-3 ${player.team === 'A' ? 'bg-blue-500' : 'bg-red-500'} rounded-full`} />
                        <div>
                          <p className="font-medium text-sm">{player.name}</p>
                          <p className="text-xs text-muted-foreground">{player.metric}</p>
                        </div>
                      </div>
                      <Badge variant="outline">{player.stat}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Live Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Ključni Događaji</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    { time: "45+2", event: "GOL! Marko Petrović", team: "A" },
                    { time: "38", event: "Žuti karton - Ana Milić", team: "B" },
                    { time: "23", event: "GOL! Stefan Kovač", team: "B" },
                    { time: "15", event: "GOL! Nikola Jović", team: "A" },
                  ].map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Badge variant="outline" className="text-xs">{event.time}'</Badge>
                      <div className="flex-1">
                        <p className="text-sm">{event.event}</p>
                        <div className="flex items-center space-x-1 mt-1">
                          <div className={`w-2 h-2 ${event.team === 'A' ? 'bg-blue-500' : 'bg-red-500'} rounded-full`} />
                          <span className="text-xs text-muted-foreground">Tim {event.team}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Mobile Bottom Navigation */}
      <LiveDashboardNavigation 
        selectedTab={selectedTab} 
        onTabChange={setSelectedTab} 
      />
      
      {/* Spacer for mobile navigation */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default LiveDashboard;
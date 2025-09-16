import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Shield, AlertTriangle, Users } from "lucide-react";
import heroImage from "@/assets/hero-emergency.jpg";

const Index = () => {
  const navigate = useNavigate();

  const handleOpenApp = () => {
    navigate("/role-selection");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-50 to-blue-50">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2">
          <Shield className="h-8 w-8 text-primary" />
          <h1 className="text-2xl font-bold text-foreground">DisasterAlert</h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-foreground">Stay</span>{" "}
                <span className="bg-gradient-to-r from-emergency to-warning bg-clip-text text-transparent">
                  Alert
                </span>
                <br />
                <span className="text-foreground">Stay</span>{" "}
                <span className="bg-gradient-to-r from-info to-safe bg-clip-text text-transparent">
                  Safe
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Advanced disaster monitoring and alert system connecting citizens and analysts 
                for rapid emergency response and community safety.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                variant="hero"
                onClick={handleOpenApp}
                className="text-lg px-8 py-6 h-auto"
              >
                Open the App
                <AlertTriangle className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 h-auto"
              >
                Learn More
                <Users className="h-5 w-5" />
              </Button>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-emergency/10 rounded-lg flex items-center justify-center mx-auto">
                  <AlertTriangle className="h-6 w-6 text-emergency" />
                </div>
                <h3 className="font-semibold">Real-time Alerts</h3>
                <p className="text-sm text-muted-foreground">Instant notifications for your area</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-info" />
                </div>
                <h3 className="font-semibold">Community Driven</h3>
                <p className="text-sm text-muted-foreground">Powered by citizen reports</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-safe/10 rounded-lg flex items-center justify-center mx-auto">
                  <Shield className="h-6 w-6 text-safe" />
                </div>
                <h3 className="font-semibold">Expert Analysis</h3>
                <p className="text-sm text-muted-foreground">Professional monitoring and response</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Emergency response and disaster monitoring" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-safe rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">System Active</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
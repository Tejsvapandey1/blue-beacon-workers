import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Users, BarChart3, Upload, MapPin, MessageSquare, TrendingUp, ArrowLeft } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-3xl font-bold text-center mb-2">Choose Your Role</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto">
            Select how you'd like to participate in our disaster alert system
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Citizen Card */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/citizen")}>
            <div className="absolute inset-0 bg-gradient-to-br from-info/5 to-safe/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-info/10 rounded-2xl flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-info" />
              </div>
              <CardTitle className="text-2xl">Citizen</CardTitle>
              <CardDescription className="text-base">
                Report incidents and receive location-based alerts
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Upload className="h-5 w-5 text-info" />
                  <span className="text-sm">Upload geotagged photos</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-info" />
                  <span className="text-sm">Get spatially focused notifications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-emergency rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-sm">Receive emergency alerts</span>
                </div>
              </div>
              <Button variant="info" className="w-full mt-6">
                Continue as Citizen
              </Button>
            </CardContent>
          </Card>

          {/* Analyst Card */}
          <Card className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/analyst")}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-emergency/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <CardHeader className="relative">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl">Analyst</CardTitle>
              <CardDescription className="text-base">
                Monitor hotspots and analyze social media data
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-sm">India Map Interactive Hotspot</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <span className="text-sm">Social Media Classification</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="text-sm">Advanced analytics dashboard</span>
                </div>
              </div>
              <Button variant="default" className="w-full mt-6">
                Continue as Analyst
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Info Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-semibold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-black">
              Citizens contribute real-time data through photo uploads and location sharing, 
              while analysts monitor patterns and confirm potential disasters to trigger 
              community-wide alerts for enhanced public safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
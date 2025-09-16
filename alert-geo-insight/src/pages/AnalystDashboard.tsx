import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Map, 
  MessageSquare, 
  TrendingUp, 
  AlertTriangle,
  Users,
  Activity,
  Eye,
  CheckCircle,
  XCircle,
  Clock
} from "lucide-react";
import mapImage from "@/assets/india-map-hotspots.jpg";

const AnalystDashboard = () => {
  const navigate = useNavigate();
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>(null);

  const hotspots = [
    { id: 1, location: "Mumbai, Maharashtra", severity: "High", reports: 47, status: "Active" },
    { id: 2, location: "Chennai, Tamil Nadu", severity: "Medium", reports: 23, status: "Monitoring" },
    { id: 3, location: "Kolkata, West Bengal", severity: "Low", reports: 12, status: "Resolved" },
    { id: 4, location: "Hyderabad, Telangana", severity: "Medium", reports: 31, status: "Active" }
  ];

  const socialMediaPosts = [
    {
      id: 1,
      content: "Heavy flooding in sector 15, water level rising rapidly! #emergency",
      classification: "Relevant",
      confidence: 0.94,
      source: "Twitter",
      timestamp: "2 minutes ago",
      location: "Mumbai"
    },
    {
      id: 2,
      content: "Just had lunch at this amazing restaurant downtown",
      classification: "Irrelevant", 
      confidence: 0.89,
      source: "Instagram",
      timestamp: "5 minutes ago",
      location: "Delhi"
    },
    {
      id: 3,
      content: "Roads blocked due to fallen trees after storm, avoid main highway",
      classification: "Relevant",
      confidence: 0.91,
      source: "Facebook",
      timestamp: "8 minutes ago",
      location: "Chennai"
    },
    {
      id: 4,
      content: "Beautiful sunset today, great weather!",
      classification: "Irrelevant",
      confidence: 0.87,
      source: "Twitter", 
      timestamp: "12 minutes ago",
      location: "Bangalore"
    }
  ];

  const stats = [
    { label: "Active Hotspots", value: "12", change: "+3", icon: AlertTriangle, color: "emergency" },
    { label: "Reports Today", value: "156", change: "+24", icon: Users, color: "info" },
    { label: "System Accuracy", value: "94.2%", change: "+1.2%", icon: Activity, color: "safe" },
    { label: "Posts Analyzed", value: "2.4K", change: "+320", icon: MessageSquare, color: "primary" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/role-selection")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Role Selection
          </Button>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Analyst Dashboard</h1>
              <p className="text-muted-foreground">Monitor hotspots and analyze social media data</p>
            </div>
            <Badge variant="outline" className="px-3 py-1">
              <div className="w-2 h-2 bg-safe rounded-full mr-2 animate-pulse"></div>
              System Online
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={`text-xs ${
                      stat.change.startsWith('+') ? 'text-safe' : 'text-emergency'
                    }`}>
                      {stat.change} from yesterday
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    stat.color === 'emergency' ? 'bg-emergency/10' :
                    stat.color === 'info' ? 'bg-info/10' :
                    stat.color === 'safe' ? 'bg-safe/10' : 'bg-primary/10'
                  }`}>
                    <stat.icon className={`h-6 w-6 ${
                      stat.color === 'emergency' ? 'text-emergency' :
                      stat.color === 'info' ? 'text-info' :
                      stat.color === 'safe' ? 'text-safe' : 'text-primary'
                    }`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="map" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="map" className="flex items-center gap-2">
              <Map className="h-4 w-4" />
              India Map Interactive Hotspot
            </TabsTrigger>
            <TabsTrigger value="social" className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Social Media Classification
            </TabsTrigger>
          </TabsList>

          {/* Map Tab */}
          <TabsContent value="map" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Map */}
              <div className="lg:col-span-2">
                <Card className="h-[600px]">
                  <CardHeader>
                    <CardTitle>Disaster Hotspots Map</CardTitle>
                    <CardDescription>Real-time monitoring of high-risk areas across India</CardDescription>
                  </CardHeader>
                  <CardContent className="h-full">
                    <div className="relative h-full bg-slate-100 rounded-lg overflow-hidden">
                      <img 
                        src={mapImage} 
                        alt="India map with disaster hotspots"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      
                      {/* Hotspot Markers */}
                      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-emergency rounded-full animate-pulse cursor-pointer"
                           onClick={() => setSelectedHotspot("Mumbai")}></div>
                      <div className="absolute top-2/3 left-1/3 w-3 h-3 bg-warning rounded-full animate-pulse cursor-pointer"
                           onClick={() => setSelectedHotspot("Chennai")}></div>
                      <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-safe rounded-full cursor-pointer"
                           onClick={() => setSelectedHotspot("Kolkata")}></div>
                      
                      {/* Map Legend */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-3 bg-emergency rounded-full"></div>
                          <span>High Risk</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-3 bg-warning rounded-full"></div>
                          <span>Medium Risk</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-3 h-3 bg-safe rounded-full"></div>
                          <span>Low Risk</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Hotspots List */}
              <div>
                <Card className="h-[600px]">
                  <CardHeader>
                    <CardTitle>Active Hotspots</CardTitle>
                    <CardDescription>Current high-priority areas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {hotspots.map((hotspot) => (
                      <div 
                        key={hotspot.id}
                        className="p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors cursor-pointer"
                        onClick={() => setSelectedHotspot(hotspot.location)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-sm">{hotspot.location}</h4>
                          <Badge variant={
                            hotspot.severity === 'High' ? 'destructive' :
                            hotspot.severity === 'Medium' ? 'secondary' : 'outline'
                          }>
                            {hotspot.severity}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <span>{hotspot.reports} reports</span>
                          <span>{hotspot.status}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Social Media Tab */}
          <TabsContent value="social" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Social Media Classification</CardTitle>
                    <CardDescription>AI-powered filtering of disaster-related content</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">
                      <TrendingUp className="h-3 w-3 mr-1" />
                      94.2% Accuracy
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {socialMediaPosts.map((post) => (
                    <div 
                      key={post.id}
                      className="flex items-start gap-4 p-4 rounded-lg border bg-card"
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        post.classification === 'Relevant' ? 'bg-safe/10' : 'bg-muted'
                      }`}>
                        {post.classification === 'Relevant' ? 
                          <CheckCircle className="h-5 w-5 text-safe" /> :
                          <XCircle className="h-5 w-5 text-muted-foreground" />
                        }
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge variant={post.classification === 'Relevant' ? 'default' : 'secondary'}>
                              {post.classification}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {Math.round(post.confidence * 100)}% confidence
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Clock className="h-3 w-3" />
                            {post.timestamp}
                          </div>
                        </div>
                        <p className="text-sm mb-2">{post.content}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span>Source: {post.source}</span>
                          <span>Location: {post.location}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AnalystDashboard;
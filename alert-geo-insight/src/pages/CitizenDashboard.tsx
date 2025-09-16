import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Upload, 
  Bell, 
  MapPin, 
  AlertTriangle, 
  ArrowLeft, 
  Camera, 
  CheckCircle,
  Clock
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CitizenDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [uploadedPhotos, setUploadedPhotos] = useState<number>(0);
  const [hasEmergencyAlert, setHasEmergencyAlert] = useState(false);

  const handlePhotoUpload = () => {
    setUploadedPhotos(prev => prev + 1);
    toast({
      title: "Photo uploaded successfully",
      description: "Your geotagged photo has been submitted for analysis.",
    });
  };

  const simulateEmergencyAlert = () => {
    setHasEmergencyAlert(true);
    toast({
      title: "Emergency Alert Triggered",
      description: "There is actually a calamity in your area.",
      variant: "destructive",
    });
  };

  const notifications = [
    {
      id: 1,
      type: "warning",
      title: "Weather Advisory",
      message: "Heavy rainfall expected in your area within 2 hours",
      time: "10 minutes ago",
      location: "2.3 km from your location"
    },
    {
      id: 2,
      type: "info",
      title: "Community Update",
      message: "New emergency shelter opened at Community Center",
      time: "1 hour ago",
      location: "1.8 km from your location"
    },
    {
      id: 3,
      type: "safe",
      title: "All Clear",
      message: "Previous flood warning has been lifted for your area",
      time: "3 hours ago",
      location: "Your area"
    }
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
              <h1 className="text-3xl font-bold">Citizen Dashboard</h1>
              <p className="text-muted-foreground">Report incidents and stay informed</p>
            </div>
            <Badge variant="outline" className="px-3 py-1">
              <div className="w-2 h-2 bg-safe rounded-full mr-2"></div>
              Status: Active
            </Badge>
          </div>
        </div>

        {/* Emergency Alert */}
        {hasEmergencyAlert && (
          <Card className="mb-8 border-emergency bg-emergency/5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-emergency animate-pulse" />
                <div>
                  <CardTitle className="text-emergency">EMERGENCY ALERT</CardTitle>
                  <CardDescription className="text-emergency/80">
                    There is actually a calamity in your area.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="bg-emergency/10 rounded-lg p-4">
                <p className="font-medium text-emergency mb-2">
                  Immediate Action Required
                </p>
                <p className="text-sm text-emergency/80">
                  A confirmed disaster has been detected in your vicinity. Please follow emergency protocols and stay safe. 
                  Evacuation routes are available through the emergency services app.
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Action Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Upload Photos */}
          <Card className="group hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-info/10 rounded-lg flex items-center justify-center">
                  <Upload className="h-6 w-6 text-info" />
                </div>
                <div>
                  <CardTitle>Upload Geotagged Photos</CardTitle>
                  <CardDescription>Report incidents with location data</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="border-2 border-dashed border-muted rounded-lg p-8 text-center group-hover:border-info/50 transition-colors">
                <Camera className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-sm text-muted-foreground mb-4">
                  Drop photos here or click to upload
                </p>
                <Button onClick={handlePhotoUpload} variant="info">
                  Select Photos
                </Button>
              </div>
              {uploadedPhotos > 0 && (
                <div className="flex items-center gap-2 text-sm text-safe">
                  <CheckCircle className="h-4 w-4" />
                  {uploadedPhotos} photo(s) uploaded successfully
                </div>
              )}
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                    <Bell className="h-6 w-6 text-warning" />
                  </div>
                  <div>
                    <CardTitle>Spatially Focused Notifications</CardTitle>
                    <CardDescription>Alerts for your area</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary">{notifications.length}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <Button 
                variant="warning" 
                className="w-full mb-4"
                onClick={simulateEmergencyAlert}
              >
                Simulate Emergency Alert
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                (For demonstration purposes)
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Notifications */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Notifications</CardTitle>
            <CardDescription>Location-based alerts and updates</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {notifications.map((notification) => (
              <div 
                key={notification.id}
                className="flex items-start gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  notification.type === 'warning' ? 'bg-warning/10' :
                  notification.type === 'info' ? 'bg-info/10' : 'bg-safe/10'
                }`}>
                  {notification.type === 'warning' && <AlertTriangle className="h-5 w-5 text-warning" />}
                  {notification.type === 'info' && <Bell className="h-5 w-5 text-info" />}
                  {notification.type === 'safe' && <CheckCircle className="h-5 w-5 text-safe" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-medium">{notification.title}</h4>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {notification.time}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {notification.location}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CitizenDashboard;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Shield, Mail, Link as LinkIcon, Scan, CheckCircle, XCircle, AlertCircle, Globe, MapPin } from "lucide-react";

const Dashboard = () => {
  const [emailText, setEmailText] = useState("");
  const [urlText, setUrlText] = useState("");
  const [emailResult, setEmailResult] = useState<any>(null);
  const [urlResult, setUrlResult] = useState<any>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeEmail = async () => {
    setIsAnalyzing(true);
    // TODO: Implement actual AI analysis with Supabase backend
    setTimeout(() => {
      setEmailResult(null);
      setIsAnalyzing(false);
    }, 2000);
  };

  const analyzeUrl = async () => {
    setIsAnalyzing(true);
    // TODO: Implement actual AI analysis with Supabase backend
    setTimeout(() => {
      setUrlResult(null);
      setIsAnalyzing(false);
    }, 2000);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "safe": return "text-safe-green";
      case "suspicious": return "text-warning";
      case "dangerous": return "text-danger-red";
      default: return "text-muted-foreground";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "safe": return <CheckCircle className="h-5 w-5" />;
      case "suspicious": return <AlertCircle className="h-5 w-5" />;
      case "dangerous": return <XCircle className="h-5 w-5" />;
      default: return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">AI Detection Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Analyze emails and URLs for phishing threats using advanced AI models
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="h-8 w-8 text-cyber-blue" />
          <span className="text-sm font-medium text-muted-foreground">Real-time Protection</span>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Today's Scans</p>
                <p className="text-2xl font-bold text-primary">0</p>
              </div>
              <Scan className="h-8 w-8 text-cyber-blue" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Threats Blocked</p>
                <p className="text-2xl font-bold text-danger-red">0</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-danger-red" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Safe Communications</p>
                <p className="text-2xl font-bold text-safe-green">0</p>
              </div>
              <CheckCircle className="h-8 w-8 text-safe-green" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Analysis Interface */}
      <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-cyber-blue" />
            <span>AI-Powered Threat Analysis</span>
          </CardTitle>
          <CardDescription>
            Use our Sentence-BERT and CNN models to detect phishing emails and malicious URLs
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="email" className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>Email Analysis</span>
              </TabsTrigger>
              <TabsTrigger value="url" className="flex items-center space-x-2">
                <LinkIcon className="h-4 w-4" />
                <span>URL Analysis</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="email" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="email-content">Email Content</Label>
                <Textarea
                  id="email-content"
                  placeholder="Paste the email content here for analysis..."
                  className="min-h-[200px]"
                  value={emailText}
                  onChange={(e) => setEmailText(e.target.value)}
                />
              </div>
              <Button 
                onClick={analyzeEmail}
                disabled={!emailText.trim() || isAnalyzing}
                className="bg-cyber-blue hover:bg-cyber-blue-dark text-white"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Email"}
              </Button>

              {emailResult && (
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getRiskColor(emailResult.riskLevel)}`}>
                      {getRiskIcon(emailResult.riskLevel)}
                      <span>Analysis Result: {emailResult.riskLevel.toUpperCase()}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Confidence Level:</span>
                      <Badge variant="outline">{emailResult.confidence}%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Phishing Score:</span>
                      <Badge variant="outline">{(emailResult.phishingScore * 100).toFixed(1)}%</Badge>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Detected Threats:</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {emailResult.threats.map((threat: string, index: number) => (
                          <Badge key={index} variant="destructive">{threat}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <Label className="text-sm font-medium">Recommendation:</Label>
                      <p className="text-sm text-muted-foreground mt-1">{emailResult.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="url" className="space-y-4 mt-6">
              <div className="space-y-2">
                <Label htmlFor="url-input">URL to Analyze</Label>
                <Input
                  id="url-input"
                  placeholder="https://example.com/suspicious-link"
                  value={urlText}
                  onChange={(e) => setUrlText(e.target.value)}
                />
              </div>
              <Button 
                onClick={analyzeUrl}
                disabled={!urlText.trim() || isAnalyzing}
                className="bg-cyber-blue hover:bg-cyber-blue-dark text-white"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze URL"}
              </Button>

              {urlResult && (
                <Card className="mt-4">
                  <CardHeader>
                    <CardTitle className={`flex items-center space-x-2 ${getRiskColor(urlResult.riskLevel)}`}>
                      {getRiskIcon(urlResult.riskLevel)}
                      <span>Analysis Result: {urlResult.riskLevel.toUpperCase()}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Confidence Level:</span>
                      <Badge variant="outline">{urlResult.confidence}%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Malicious Score:</span>
                      <Badge variant="outline">{(urlResult.maliciousScore * 100).toFixed(1)}%</Badge>
                    </div>
                    <div>
                      <Label className="text-sm font-medium">Detected Threats:</Label>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {urlResult.threats.map((threat: string, index: number) => (
                          <Badge key={index} variant="destructive">{threat}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <Label className="text-sm font-medium">Recommendation:</Label>
                      <p className="text-sm text-muted-foreground mt-1">{urlResult.recommendation}</p>
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Threat Origin Section */}
      <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Globe className="h-5 w-5 text-cyber-blue" />
            <span>Threat Origin Map</span>
          </CardTitle>
          <CardDescription>
            Real-time visualization of global threat sources and attack patterns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* Map Placeholder */}
            <div className="relative w-full h-96 bg-card border border-border rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-card">
                <div className="text-center space-y-4">
                  <Globe className="h-16 w-16 text-cyber-blue mx-auto" />
                  <div>
                    <h3 className="text-lg font-semibold text-primary">World Map Integration</h3>
                    <p className="text-sm text-muted-foreground max-w-md">
                      Connect your Mapbox account to display real-time threat origins and geographic attack patterns
                    </p>
                  </div>
                  <Button variant="outline" className="mt-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    Setup Map Integration
                  </Button>
                </div>
              </div>
            </div>

            {/* Threat Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Active Threat Sources</p>
                      <p className="text-xl font-bold text-danger-red">0</p>
                    </div>
                    <AlertTriangle className="h-6 w-6 text-danger-red" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Countries Monitored</p>
                      <p className="text-xl font-bold text-cyber-blue">0</p>
                    </div>
                    <Globe className="h-6 w-6 text-cyber-blue" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Blocked Locations</p>
                      <p className="text-xl font-bold text-safe-green">0</p>
                    </div>
                    <Shield className="h-6 w-6 text-safe-green" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
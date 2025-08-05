import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, AlertTriangle, Shield, Clock, Users } from "lucide-react";

const Analytics = () => {
  // Mock data for analytics
  const detectionStats = {
    totalScans: 1247,
    threatsBlocked: 156,
    accuracy: 94.8,
    falsePositives: 12
  };

  const recentThreats = [
    { id: 1, type: "Email", threat: "Credential Harvesting", time: "2 minutes ago", severity: "high" },
    { id: 2, type: "URL", threat: "Domain Spoofing", time: "15 minutes ago", severity: "medium" },
    { id: 3, type: "Email", threat: "Business Email Compromise", time: "1 hour ago", severity: "high" },
    { id: 4, type: "URL", threat: "Malware Distribution", time: "2 hours ago", severity: "critical" },
    { id: 5, type: "Email", threat: "Social Engineering", time: "3 hours ago", severity: "medium" },
  ];

  const threatTrends = [
    { category: "Credential Harvesting", count: 45, trend: "+12%" },
    { category: "Domain Spoofing", count: 38, trend: "+8%" },
    { category: "Business Email Compromise", count: 28, trend: "-5%" },
    { category: "Malware Distribution", count: 22, trend: "+15%" },
    { category: "Social Engineering", count: 18, trend: "+3%" },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical": return "bg-red-500";
      case "high": return "bg-orange-500";
      case "medium": return "bg-yellow-500";
      case "low": return "bg-green-500";
      default: return "bg-gray-500";
    }
  };

  const getSeverityBadgeVariant = (severity: string) => {
    switch (severity) {
      case "critical": return "destructive";
      case "high": return "destructive";
      case "medium": return "outline";
      case "low": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Monitor phishing detection trends and system performance
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <BarChart3 className="h-8 w-8 text-cyber-blue" />
          <span className="text-sm font-medium text-muted-foreground">Live Analytics</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Scans</p>
                <p className="text-2xl font-bold text-primary">{detectionStats.totalScans.toLocaleString()}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +15% from last week
                </p>
              </div>
              <Shield className="h-8 w-8 text-cyber-blue" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Threats Blocked</p>
                <p className="text-2xl font-bold text-danger-red">{detectionStats.threatsBlocked}</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +8% from last week
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-danger-red" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Detection Accuracy</p>
                <p className="text-2xl font-bold text-safe-green">{detectionStats.accuracy}%</p>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  +2.1% from last month
                </p>
              </div>
              <BarChart3 className="h-8 w-8 text-safe-green" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">False Positives</p>
                <p className="text-2xl font-bold text-warning">{detectionStats.falsePositives}</p>
                <p className="text-xs text-red-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1 rotate-180" />
                  -25% from last week
                </p>
              </div>
              <AlertTriangle className="h-8 w-8 text-warning" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Threats */}
        <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-cyber-blue" />
              <span>Recent Threats Detected</span>
            </CardTitle>
            <CardDescription>Latest phishing attempts blocked by the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentThreats.map((threat) => (
                <div key={threat.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className={`w-2 h-2 rounded-full ${getSeverityColor(threat.severity)}`} />
                    <div>
                      <p className="font-medium text-sm">{threat.threat}</p>
                      <p className="text-xs text-muted-foreground">{threat.type} • {threat.time}</p>
                    </div>
                  </div>
                  <Badge variant={getSeverityBadgeVariant(threat.severity)}>
                    {threat.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Threat Trends */}
        <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-cyber-blue" />
              <span>Threat Category Trends</span>
            </CardTitle>
            <CardDescription>Most common phishing attack types this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {threatTrends.map((trend, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-cyber-blue-light rounded-full">
                      <span className="text-xs font-bold text-cyber-blue-dark">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{trend.category}</p>
                      <p className="text-xs text-muted-foreground">{trend.count} incidents</p>
                    </div>
                  </div>
                  <Badge 
                    variant={trend.trend.startsWith('+') ? "destructive" : "secondary"}
                    className={trend.trend.startsWith('+') ? "text-red-700" : "text-green-700"}
                  >
                    {trend.trend}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* System Performance */}
      <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-cyber-blue" />
            <span>AI Model Performance</span>
          </CardTitle>
          <CardDescription>Real-time performance metrics of detection models</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-lg text-primary">Sentence-BERT Model</h3>
              <p className="text-2xl font-bold text-cyber-blue mt-2">96.3%</p>
              <p className="text-sm text-muted-foreground">Email Detection Accuracy</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-lg text-primary">CNN Model</h3>
              <p className="text-2xl font-bold text-cyber-blue mt-2">93.1%</p>
              <p className="text-sm text-muted-foreground">URL Detection Accuracy</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <h3 className="font-semibold text-lg text-primary">Combined System</h3>
              <p className="text-2xl font-bold text-cyber-blue mt-2">94.8%</p>
              <p className="text-sm text-muted-foreground">Overall Accuracy</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Analytics;
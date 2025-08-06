import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, AlertTriangle, Shield, Clock, Users } from "lucide-react";

const Analytics = () => {
  // TODO: Replace with real data from Supabase
  const detectionStats = {
    totalScans: 0,
    threatsBlocked: 0,
    accuracy: 0,
    falsePositives: 0
  };

  const recentThreats: any[] = [];

  const threatTrends: any[] = [];

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
                <p className="text-2xl font-bold text-primary">{detectionStats.totalScans}</p>
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
            <div className="text-center py-8 text-muted-foreground">
              <p>No threat data available. Connect to start monitoring.</p>
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
            <div className="text-center py-8 text-muted-foreground">
              <p>No trend data available. Connect to start monitoring.</p>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
};

export default Analytics;
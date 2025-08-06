import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Flag, MessageSquare, AlertTriangle, CheckCircle, Clock, University } from "lucide-react";

const Community = () => {
  const [reportText, setReportText] = useState("");
  const [reportUrl, setReportUrl] = useState("");

  // TODO: Replace with real data from Supabase
  const recentReports: any[] = [];

  const topContributors: any[] = [];

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    // Report submission logic will be implemented after Supabase integration
    console.log("Report submitted:", { reportText, reportUrl });
    setReportText("");
    setReportUrl("");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "verified": return "text-safe-green";
      case "investigating": return "text-warning";
      case "false-positive": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified": return "secondary";
      case "investigating": return "outline";
      case "false-positive": return "secondary";
      default: return "outline";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-primary">Community Reports</h1>
          <p className="text-muted-foreground mt-2">
            Collaborate with the university community to identify and report phishing threats
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Users className="h-8 w-8 text-cyber-blue" />
          <span className="text-sm font-medium text-muted-foreground">Community Powered</span>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Reports</p>
                <p className="text-2xl font-bold text-primary">0</p>
              </div>
              <Flag className="h-8 w-8 text-cyber-blue" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Contributors</p>
                <p className="text-2xl font-bold text-primary">0</p>
              </div>
              <Users className="h-8 w-8 text-cyber-blue" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Verified Threats</p>
                <p className="text-2xl font-bold text-danger-red">0</p>
              </div>
              <CheckCircle className="h-8 w-8 text-safe-green" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Universities Protected</p>
                <p className="text-2xl font-bold text-cyber-blue">0</p>
              </div>
              <University className="h-8 w-8 text-cyber-blue" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {/* Report Submission */}
        <div>
          <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Flag className="h-5 w-5 text-cyber-blue" />
                <span>Report Suspicious Activity</span>
              </CardTitle>
              <CardDescription>
                Help protect the community by reporting phishing emails and malicious URLs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitReport} className="space-y-4">
                <Tabs defaultValue="email" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="email">Report Email</TabsTrigger>
                    <TabsTrigger value="url">Report URL</TabsTrigger>
                  </TabsList>
                  <TabsContent value="email" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="email-report">Suspicious Email Content</Label>
                      <Textarea
                        id="email-report"
                        placeholder="Paste the suspicious email content here..."
                        className="min-h-[150px]"
                        value={reportText}
                        onChange={(e) => setReportText(e.target.value)}
                      />
                    </div>
                  </TabsContent>
                  <TabsContent value="url" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <Label htmlFor="url-report">Suspicious URL</Label>
                      <Input
                        id="url-report"
                        placeholder="https://suspicious-website.com"
                        value={reportUrl}
                        onChange={(e) => setReportUrl(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="url-description">Description</Label>
                      <Textarea
                        id="url-description"
                        placeholder="Describe where you found this URL and why it seems suspicious..."
                        className="min-h-[100px]"
                        value={reportText}
                        onChange={(e) => setReportText(e.target.value)}
                      />
                    </div>
                  </TabsContent>
                </Tabs>
                <Button 
                  type="submit" 
                  className="w-full bg-cyber-blue hover:bg-cyber-blue-dark text-white"
                  disabled={!reportText.trim() && !reportUrl.trim()}
                >
                  Submit Report
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Recent Reports */}
          <Card className="mt-6 shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <MessageSquare className="h-5 w-5 text-cyber-blue" />
                <span>Recent Community Reports</span>
              </CardTitle>
              <CardDescription>Latest phishing reports from the community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-muted-foreground">
                <p>No community reports yet. Be the first to submit a report!</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default Community;
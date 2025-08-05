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

  // Mock data for community reports
  const recentReports = [
    {
      id: 1,
      type: "email",
      title: "Fake Microsoft Security Alert",
      reporter: "Alice Johnson",
      university: "State University",
      status: "verified",
      time: "2 hours ago",
      description: "Received email claiming Microsoft account was compromised...",
      votes: 15,
    },
    {
      id: 2,
      type: "url",
      title: "Suspicious Banking Login Page",
      reporter: "Bob Smith",
      university: "Tech Institute",
      status: "investigating",
      time: "4 hours ago",
      description: "Found this fake bank website that looks identical to real one...",
      votes: 23,
    },
    {
      id: 3,
      type: "email",
      title: "University IT Phishing Email",
      reporter: "Carol Davis",
      university: "Metro College",
      status: "verified",
      time: "1 day ago",
      description: "Email pretending to be from IT asking for password reset...",
      votes: 8,
    },
  ];

  const topContributors = [
    { name: "Alice Johnson", university: "State University", reports: 24, reputation: 156 },
    { name: "Bob Smith", university: "Tech Institute", reports: 19, reputation: 142 },
    { name: "Carol Davis", university: "Metro College", reports: 16, reputation: 128 },
    { name: "David Wilson", university: "City University", reports: 12, reputation: 95 },
    { name: "Emma Brown", university: "Science Academy", reports: 10, reputation: 87 },
  ];

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
                <p className="text-2xl font-bold text-primary">1,247</p>
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
                <p className="text-2xl font-bold text-primary">156</p>
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
                <p className="text-2xl font-bold text-danger-red">89</p>
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
                <p className="text-2xl font-bold text-cyber-blue">23</p>
              </div>
              <University className="h-8 w-8 text-cyber-blue" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Submission */}
        <div className="lg:col-span-2">
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
              <div className="space-y-4">
                {recentReports.map((report) => (
                  <div key={report.id} className="border rounded-lg p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center justify-center w-8 h-8 bg-cyber-blue-light rounded-full">
                          {report.type === "email" ? (
                            <AlertTriangle className="h-4 w-4 text-cyber-blue-dark" />
                          ) : (
                            <Flag className="h-4 w-4 text-cyber-blue-dark" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">{report.title}</h4>
                          <p className="text-xs text-muted-foreground">
                            By {report.reporter} from {report.university}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={getStatusBadge(report.status)}>
                          {report.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{report.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{report.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Verify ({report.votes})
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-3 w-3 mr-1" />
                          Discuss
                        </Button>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {report.type.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Top Contributors */}
        <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-cyber-blue" />
              <span>Top Contributors</span>
            </CardTitle>
            <CardDescription>Community members making a difference</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topContributors.map((contributor, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center justify-center w-8 h-8 bg-cyber-blue-light rounded-full">
                      <span className="text-xs font-bold text-cyber-blue-dark">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-sm">{contributor.name}</p>
                      <p className="text-xs text-muted-foreground">{contributor.university}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-primary">{contributor.reports} reports</p>
                    <p className="text-xs text-muted-foreground">{contributor.reputation} rep</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Community;
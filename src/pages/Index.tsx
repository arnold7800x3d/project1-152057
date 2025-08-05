import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Brain, Users, BarChart3, AlertTriangle, CheckCircle, Zap } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced Sentence-BERT and CNN models analyze emails and URLs for sophisticated threat detection."
    },
    {
      icon: Shield,
      title: "Real-Time Protection",
      description: "Instant analysis and blocking of phishing attempts before they reach your inbox."
    },
    {
      icon: Users,
      title: "Community Reporting",
      description: "Collaborate with university communities to identify and share emerging threats."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Monitor detection trends, accuracy metrics, and system performance in real-time."
    }
  ];

  const stats = [
    { value: "94.8%", label: "Detection Accuracy" },
    { value: "1,247", label: "Threats Blocked" },
    { value: "23", label: "Universities Protected" },
    { value: "156", label: "Active Users" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background via-cyber-blue-light/10 to-cyber-blue-light/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <Shield className="h-16 w-16 text-cyber-blue" />
          </div>
          <h1 className="text-5xl font-bold text-primary mb-6">
            PhishGuard AI
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Protect your university community from phishing attacks with our advanced AI-powered detection system. 
            Real-time email and URL analysis using cutting-edge machine learning models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue-dark text-white px-8">
                Get Started Free
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="px-8">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-cyber-blue">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Advanced AI Protection for Universities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive phishing detection system combines multiple AI models to provide 
              unparalleled protection against cyber threats.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow" style={{ boxShadow: 'var(--shadow-card)' }}>
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <feature.icon className="h-12 w-12 text-cyber-blue" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-4">How PhishGuard AI Works</h2>
            <p className="text-lg text-muted-foreground">
              Our dual-model approach ensures comprehensive protection
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="h-6 w-6 text-cyber-blue" />
                  <span>Sentence-BERT Email Analysis</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Our advanced neural network analyzes email content by converting messages into 
                  high-dimensional vectors and comparing them to known phishing patterns using 
                  cosine similarity.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-safe-green" />
                  <span>96.3% Email Detection Accuracy</span>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg" style={{ boxShadow: 'var(--shadow-card)' }}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Zap className="h-6 w-6 text-cyber-blue" />
                  <span>CNN URL Detection</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Character-level Convolutional Neural Network examines URL patterns to identify 
                  domain spoofing, typosquatting, and other malicious link characteristics.
                </p>
                <div className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-safe-green" />
                  <span>93.1% URL Detection Accuracy</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyber-blue-dark to-cyber-blue">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Protect Your University?
          </h2>
          <p className="text-xl text-cyber-blue-light mb-8 max-w-2xl mx-auto">
            Join thousands of students and staff already protected by PhishGuard AI. 
            Start detecting and blocking phishing threats today.
          </p>
          <Link to="/signup">
            <Button size="lg" variant="secondary" className="px-8">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-8 w-8 text-cyber-blue" />
          </div>
          <p className="text-muted-foreground">
            PhishGuard AI - Securing university communications with advanced artificial intelligence
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

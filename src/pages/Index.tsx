import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, FileCheck, Users, Lock, Globe, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Janam Mrityu</span>
          </div>
          <div className="flex gap-3">
            <Link to="/auth/user">
              <Button variant="ghost">Citizen Login</Button>
            </Link>
            <Link to="/auth/admin">
              <Button variant="outline">Admin Login</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background z-0" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Secure Birth & Death Registration for{" "}
                <span className="text-primary">Rural India</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Blockchain-powered, tamper-proof vital records accessible from anywhere, even offline
              </p>
              <div className="flex gap-4">
                <Link to="/auth/user">
                  <Button size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                    Register Now
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
              <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <span>Works Offline</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Rural community"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Janam Mrityu?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for rural communities with technology that ensures security, accessibility, and trust
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Blockchain Security</CardTitle>
                <CardDescription>
                  Tamper-proof records secured by distributed ledger technology
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <FileCheck className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Official Recognition</CardTitle>
                <CardDescription>
                  Integrated with local authorities for legal validity
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-accent/50 transition-colors">
              <CardHeader>
                <Smartphone className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Mobile & Offline</CardTitle>
                <CardDescription>
                  Works on any device, even in low or no network conditions
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <Lock className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Privacy First</CardTitle>
                <CardDescription>
                  Your data is encrypted and only accessible to authorized parties
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <Globe className="h-12 w-12 text-secondary mb-4" />
                <CardTitle>Web3 Enabled</CardTitle>
                <CardDescription>
                  Citizens own and control their vital records forever
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-accent/50 transition-colors">
              <CardHeader>
                <Users className="h-12 w-12 text-accent mb-4" />
                <CardTitle>Easy Access</CardTitle>
                <CardDescription>
                  Simple interface designed for all literacy levels
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-br from-primary to-accent text-primary-foreground overflow-hidden relative">
            <div className="absolute inset-0 bg-grid-white/10" />
            <CardContent className="p-12 relative z-10">
              <div className="max-w-3xl mx-auto text-center space-y-6">
                <h2 className="text-4xl font-bold">Ready to Get Started?</h2>
                <p className="text-xl opacity-90">
                  Join thousands of citizens already using secure digital registration
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link to="/auth/user">
                    <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                      Citizen Registration
                    </Button>
                  </Link>
                  <Link to="/auth/admin">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background/10 hover:bg-background/20 border-primary-foreground/30">
                      Admin Access
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Janam Mrityu. Empowering rural communities with secure digital identity.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

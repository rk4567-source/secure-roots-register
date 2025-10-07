import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminAuth = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate admin auth
    setTimeout(() => {
      setLoading(false);
      toast.success("Admin access granted!");
      navigate("/dashboard/admin");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>
        
        <Card className="shadow-xl border-2">
          <CardHeader className="space-y-3">
            <div className="flex justify-center">
              <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center">
                <ShieldCheck className="h-6 w-6 text-secondary" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">
              Admin Portal
            </CardTitle>
            <CardDescription className="text-center">
              Authorized access for government officials and administrators
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="adminId">Admin ID</Label>
                <Input id="adminId" placeholder="Enter your admin ID" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="••••••••" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="otp">2FA Code (if enabled)</Label>
                <Input id="otp" placeholder="6-digit code" />
              </div>

              <Button type="submit" className="w-full" variant="default" disabled={loading}>
                {loading ? "Verifying..." : "Login to Admin Portal"}
              </Button>

              <div className="text-center text-xs text-muted-foreground pt-2">
                This portal is for authorized personnel only. Unauthorized access is prohibited.
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminAuth;

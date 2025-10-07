import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, ArrowLeft, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const BirthRegistration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Birth registration submitted successfully! Awaiting admin approval.");
      navigate("/dashboard/user");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <nav className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Birth Registration</span>
          </div>
          <Link to="/dashboard/user">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Card>
          <CardHeader>
            <CardTitle>Register a Birth</CardTitle>
            <CardDescription>
              Fill in the details below. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Child Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Child Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="childName">Child's Full Name *</Label>
                    <Input id="childName" placeholder="Enter full name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="birthDate">Date of Birth *</Label>
                    <Input id="birthDate" type="date" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="birthPlace">Place of Birth *</Label>
                    <Input id="birthPlace" placeholder="Hospital/Home" required />
                  </div>
                </div>
              </div>

              {/* Parent Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Parent Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Father's Name *</Label>
                    <Input id="fatherName" placeholder="Full name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="motherName">Mother's Name *</Label>
                    <Input id="motherName" placeholder="Full name" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="parentContact">Contact Number *</Label>
                    <Input id="parentContact" type="tel" placeholder="10-digit number" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="parentEmail">Email (Optional)</Label>
                    <Input id="parentEmail" type="email" placeholder="email@example.com" />
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Address Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Permanent Address *</Label>
                  <Input id="address" placeholder="House number, street" required />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="village">Village/Town *</Label>
                    <Input id="village" placeholder="Village name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="district">District *</Label>
                    <Input id="district" placeholder="District" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State *</Label>
                    <Input id="state" placeholder="State" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pincode">PIN Code *</Label>
                  <Input id="pincode" placeholder="6-digit PIN" maxLength={6} required />
                </div>
              </div>

              {/* Supporting Documents */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Supporting Documents</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="hospitalCert">Hospital Certificate (if applicable)</Label>
                  <Input id="hospitalCert" type="file" accept=".pdf,.jpg,.jpeg,.png" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="parentId">Parent ID Proof *</Label>
                  <Input id="parentId" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-4 pt-4">
                <Button type="submit" className="flex-1" disabled={loading}>
                  <Save className="h-4 w-4 mr-2" />
                  {loading ? "Submitting..." : "Submit Registration"}
                </Button>
                <Link to="/dashboard/user" className="flex-1">
                  <Button type="button" variant="outline" className="w-full">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BirthRegistration;

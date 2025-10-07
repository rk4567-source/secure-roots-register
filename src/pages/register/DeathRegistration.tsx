import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Shield, ArrowLeft, Save } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useState } from "react";

const DeathRegistration = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Death registration submitted successfully! Awaiting admin approval.");
      navigate("/dashboard/user");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      <nav className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Death Registration</span>
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
            <CardTitle>Register a Death</CardTitle>
            <CardDescription>
              Fill in the details below. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Deceased Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Deceased Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deceasedName">Deceased's Full Name *</Label>
                    <Input id="deceasedName" placeholder="Enter full name" required />
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
                    <Label htmlFor="deathDate">Date of Death *</Label>
                    <Input id="deathDate" type="date" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="age">Age at Death *</Label>
                    <Input id="age" type="number" placeholder="Years" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deathPlace">Place of Death *</Label>
                    <Input id="deathPlace" placeholder="Hospital/Home" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="causeOfDeath">Cause of Death *</Label>
                    <Input id="causeOfDeath" placeholder="Medical cause" required />
                  </div>
                </div>
              </div>

              {/* Informant Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Informant Information</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="informantName">Informant's Name *</Label>
                    <Input id="informantName" placeholder="Full name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="relationship">Relationship to Deceased *</Label>
                    <Select required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="spouse">Spouse</SelectItem>
                        <SelectItem value="child">Son/Daughter</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                        <SelectItem value="sibling">Sibling</SelectItem>
                        <SelectItem value="other">Other Relative</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="informantContact">Contact Number *</Label>
                    <Input id="informantContact" type="tel" placeholder="10-digit number" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="informantEmail">Email (Optional)</Label>
                    <Input id="informantEmail" type="email" placeholder="email@example.com" />
                  </div>
                </div>
              </div>

              {/* Address Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold border-b pb-2">Address Information</h3>
                
                <div className="space-y-2">
                  <Label htmlFor="address">Deceased's Last Address *</Label>
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
                  <Label htmlFor="medicalCert">Medical Certificate *</Label>
                  <Input id="medicalCert" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="informantId">Informant ID Proof *</Label>
                  <Input id="informantId" type="file" accept=".pdf,.jpg,.jpeg,.png" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="deceasedId">Deceased's ID (if available)</Label>
                  <Input id="deceasedId" type="file" accept=".pdf,.jpg,.jpeg,.png" />
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

export default DeathRegistration;

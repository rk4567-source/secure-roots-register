import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, FileText, Plus, LogOut, Download, Eye } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const UserDashboard = () => {
  const navigate = useNavigate();
  const [records] = useState([
    { id: 1, type: "Birth", name: "Rajesh Kumar", date: "2024-01-15", status: "approved", registrationNo: "BR/2024/001234" },
    { id: 2, type: "Death", name: "Lakshmi Devi", date: "2023-12-10", status: "pending", registrationNo: "DR/2023/005678" },
  ]);

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-background">
      {/* Header */}
      <nav className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Janam Mrityu</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">Welcome, Citizen</span>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Records</CardDescription>
              <CardTitle className="text-3xl">2</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Approved</CardDescription>
              <CardTitle className="text-3xl text-secondary">1</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pending</CardDescription>
              <CardTitle className="text-3xl text-accent">1</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>My Registrations</CardTitle>
                <CardDescription>View and manage your birth and death records</CardDescription>
              </div>
              <div className="flex gap-2">
                <Link to="/register/birth">
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Register Birth
                  </Button>
                </Link>
                <Link to="/register/death">
                  <Button variant="secondary">
                    <Plus className="h-4 w-4 mr-2" />
                    Register Death
                  </Button>
                </Link>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <TabsList>
                <TabsTrigger value="all">All Records</TabsTrigger>
                <TabsTrigger value="birth">Birth</TabsTrigger>
                <TabsTrigger value="death">Death</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4 mt-6">
                {records.map((record) => (
                  <Card key={record.id} className="border-2">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Badge variant={record.type === "Birth" ? "default" : "secondary"}>
                              {record.type}
                            </Badge>
                            <Badge variant={record.status === "approved" ? "default" : "outline"} className={record.status === "approved" ? "bg-secondary" : ""}>
                              {record.status === "approved" ? "Approved" : "Pending Review"}
                            </Badge>
                          </div>
                          <h3 className="text-lg font-semibold">{record.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            Registration Date: {record.date}
                          </p>
                          <p className="text-sm font-mono text-muted-foreground">
                            Reg. No: {record.registrationNo}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          {record.status === "approved" && (
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Download
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              
              <TabsContent value="birth">
                <div className="text-center py-12 text-muted-foreground">
                  Filter by birth records
                </div>
              </TabsContent>
              
              <TabsContent value="death">
                <div className="text-center py-12 text-muted-foreground">
                  Filter by death records
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDashboard;

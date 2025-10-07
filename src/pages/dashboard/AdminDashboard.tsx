import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck, FileText, LogOut, Check, X, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [pendingRecords, setPendingRecords] = useState([
    { id: 1, type: "Birth", name: "Amit Sharma", applicant: "Priya Sharma", date: "2024-01-20", village: "Rampur" },
    { id: 2, type: "Death", name: "Govind Prasad", applicant: "Suresh Prasad", date: "2024-01-18", village: "Lakshmipur" },
    { id: 3, type: "Birth", name: "Anjali Devi", applicant: "Ramesh Kumar", date: "2024-01-19", village: "Rampur" },
  ]);

  const handleLogout = () => {
    toast.success("Logged out from admin portal");
    navigate("/");
  };

  const handleApprove = (id: number, name: string) => {
    setPendingRecords(pendingRecords.filter(r => r.id !== id));
    toast.success(`Registration for ${name} approved successfully`);
  };

  const handleReject = (id: number, name: string) => {
    setPendingRecords(pendingRecords.filter(r => r.id !== id));
    toast.error(`Registration for ${name} rejected`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/5 to-background">
      {/* Header */}
      <nav className="border-b bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-6 w-6 text-secondary" />
            <span className="text-lg font-bold">Admin Portal - Janam Mrityu</span>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="bg-secondary/10">
              <ShieldCheck className="h-3 w-3 mr-1" />
              Administrator
            </Badge>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Pending Review</CardDescription>
              <CardTitle className="text-3xl text-accent">{pendingRecords.length}</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Approved Today</CardDescription>
              <CardTitle className="text-3xl text-secondary">12</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Total Records</CardDescription>
              <CardTitle className="text-3xl">1,247</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Active Users</CardDescription>
              <CardTitle className="text-3xl">856</CardTitle>
            </CardHeader>
          </Card>
        </div>

        {/* Main Content */}
        <Card>
          <CardHeader>
            <CardTitle>Registration Management</CardTitle>
            <CardDescription>Review and approve birth and death registrations</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending" className="w-full">
              <TabsList>
                <TabsTrigger value="pending">
                  Pending ({pendingRecords.length})
                </TabsTrigger>
                <TabsTrigger value="approved">Approved</TabsTrigger>
                <TabsTrigger value="all">All Records</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="space-y-4 mt-6">
                {pendingRecords.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    No pending registrations
                  </div>
                ) : (
                  pendingRecords.map((record) => (
                    <Card key={record.id} className="border-2 border-accent/20">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="space-y-2 flex-1">
                            <div className="flex items-center gap-3">
                              <Badge variant={record.type === "Birth" ? "default" : "secondary"}>
                                {record.type} Certificate
                              </Badge>
                              <Badge variant="outline">Pending Review</Badge>
                            </div>
                            <h3 className="text-lg font-semibold">Subject: {record.name}</h3>
                            <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                              <div>
                                <span className="font-medium">Applicant:</span> {record.applicant}
                              </div>
                              <div>
                                <span className="font-medium">Village:</span> {record.village}
                              </div>
                              <div>
                                <span className="font-medium">Date:</span> {record.date}
                              </div>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              Review
                            </Button>
                            <Button 
                              variant="default" 
                              size="sm" 
                              className="bg-secondary hover:bg-secondary/90"
                              onClick={() => handleApprove(record.id, record.name)}
                            >
                              <Check className="h-4 w-4 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleReject(record.id, record.name)}
                            >
                              <X className="h-4 w-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </TabsContent>
              
              <TabsContent value="approved">
                <div className="text-center py-12 text-muted-foreground">
                  Approved registrations will appear here
                </div>
              </TabsContent>
              
              <TabsContent value="all">
                <div className="text-center py-12 text-muted-foreground">
                  All system records
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

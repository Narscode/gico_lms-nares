import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock } from "lucide-react";
import { Header } from "@/components/Header";

const page = () => {
  return (
    <main className="overflow-y-auto">
      <Header />

      {/* MAIN CONTENT */}
      <div className="p-6">
        <Card className="border-2 border-gray-950/10">
          <CardContent className="p-6">
            <Alert className="bg-blue-50 border-blue-200">
              <Clock className="h-6 w-6 text-blue-600" />
              <AlertTitle className="text-blue-800">Results Pending</AlertTitle>
              <AlertDescription className="text-blue-700">
                You will receive your results within a week!
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default page; 
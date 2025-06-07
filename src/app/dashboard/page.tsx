import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, Pencil, BookOpen } from "lucide-react";
import { Header } from "@/components/Header";
import Link from "next/link";

const page = () => {
  return (
    <main className="overflow-y-auto">
      <Header />

      {/* TEST CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {/* Listening Test Card */}
        <Card className="border-2 border-gray-950/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Headphones className="h-6 w-6 text-blue-600" />
              <CardTitle>Listening Test</CardTitle>
            </div>
            <CardDescription>
              Test your ability to understand spoken language
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="h-32 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <Headphones className="h-12 w-12 text-blue-600" />
            </div>
            <Button asChild className="w-full" variant="cta">
              <Link href="/listening">Take Test</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Writing Test Card */}
        <Card className="border-2 border-gray-950/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Pencil className="h-6 w-6 text-blue-600" />
              <CardTitle>Writing Test</CardTitle>
            </div>
            <CardDescription>
              Demonstrate your writing skills in the target language
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="h-32 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <Pencil className="h-12 w-12 text-blue-600" />
            </div>
            <Button className="w-full" variant="cta">
              Take Test
            </Button>
          </CardContent>
        </Card>

        {/* Reading Test Card */}
        <Card className="border-2 border-gray-950/10">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              <CardTitle>Reading Test</CardTitle>
            </div>
            <CardDescription>
              Assess your reading comprehension skills for long form texts
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="h-32 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
              <BookOpen className="h-12 w-12 text-blue-600" />
            </div>
            <Button className="w-full" variant="cta">
              Take Test
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default page;

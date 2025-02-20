import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BrainCircuit } from "lucide-react";
import { LineChart } from "lucide-react";
import { ScrollText } from "lucide-react";
import { NotebookPen } from "lucide-react";
import { StarsIcon } from "lucide-react";
import { SignedIn } from '@clerk/nextjs'
import { faqs } from "@/data/faqs";
import { Accordion,AccordionContent,AccordionItem,AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="grid-background"></div>

      {/* Features Section */}
      <section className="mt-20 text-center px-6 lg:px-16">
        <SignedIn>
          <div className="mt-8">
            <Link href={'/interview'}>
              <Button className="px-8 py-5 text-xl rounded-lg shadow-lg hover:from-blue-900 hover:to-indigo-900 transform transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300">

                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">Start Quiz</span>

              </Button>
            </Link>
          </div>
        </SignedIn>
        <h2 className="text-6xl mt-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-600 to-gray-800 mb-10">
          Why QuizLY?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* AI-Powered Quizzes Card */}

          <Card className="border-2 hover:border-primary transition-colors duration-300"
          >
            <CardContent className="pt-6 text-center flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                <BrainCircuit className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2"> AI-Powered Quizzes</h3>
                <p className="text-muted-foreground">
                  Test your knowledge, learn, and improve with personalized AI-generated quizzes tailored just for you.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Real-Time Feedback Card */}

          <Card className="border-2 hover:border-primary transition-colors duration-300"
          >
            <CardContent className="pt-6 text-center flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                <NotebookPen className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2"> Real-Time Improvement Tip</h3>
                <p className="text-muted-foreground">
                  Instant feedback to track your progress and provide tips on how to improve with each quiz you take.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Leaderboards Card */}

          <Card className="border-2 hover:border-primary transition-colors duration-300"
          >
            <CardContent className="pt-6 text-center flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                <LineChart className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2"> Track Your Progress</h3>
                <p className="text-muted-foreground">
                  Track your progress with detailed quiz reports that highlight your strengths and areas for improvement.
                </p>
              </div>
            </CardContent>
          </Card>


          {/* Quiz History Card */}

          <Card className="border-2 hover:border-primary transition-colors duration-300"
          >
            <CardContent className="pt-6 text-center flex flex-col items-center">
              <div className="flex flex-col items-center justify-center">
                <ScrollText className="w-10 h-10 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">  Check Your Quiz History</h3>
                <p className="text-muted-foreground">
                  Review your quiz history, check your past performance, and continue improving where needed.
                </p>
              </div>
            </CardContent>
          </Card>



        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our platform
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger> {faq.question} </AccordionTrigger>
                  <AccordionContent>{faq.answer} </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from 'react'
import StatsCards from './_components/stats-cards'
import PerformanceChart from './_components/performance-chart'
import QuizList from './_components/quiz-list'
import { getAssessments } from '@/actions/interview'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

async function InterviewPage() {
  const {isOnboarded} = await getUserOnboardingStatus();
   if(!isOnboarded){
      redirect('/onboarding')
    }
  const assessments = await getAssessments();
  
  return (
    <div>
      <Link href="/">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-6xl font-bold gradient-title">
        Quiz Challenge
        </h1>
      </div>
      <div className="space-y-6">
        <StatsCards assessments={assessments} />
        <PerformanceChart assessments={assessments} />
        <QuizList assessments={assessments} />
      </div>
    </div>
  )
}

export default InterviewPage

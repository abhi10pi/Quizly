import React from 'react'
import { industries } from '@/data/industries'
import OnBoardingForm from './_components/onboarding-form'
import { getUserOnboardingStatus } from '@/actions/user'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

async function OnboardingPage() {
  const {isOnboarded} = await getUserOnboardingStatus();
  if(isOnboarded){
    redirect('/')
  }
  return (
    <div>
      <Link href="/">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
       </Link>
     <OnBoardingForm industries={industries}/>
    </div>
  )
}

export default OnboardingPage

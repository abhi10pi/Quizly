import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { LayoutDashboard } from 'lucide-react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { checkUser } from '@/lib/checkUser'

async function Header () {
    await checkUser()
  
    return (
        <header>
            <nav className='container mx-auto px-4 h-16 flex  items-center justify-between'>
                <Link href={"/"}>
                    <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-500 to-yellow-400 
                           hover:from-red-500 hover:to-purple-500 transition-all duration-500 ease-in-out
                             drop-shadow-2xl transform hover:scale-110 tracking-wide font-[Pacifico] shadow-lg">
                        QuizLY
                    </h1>
                </Link>
                <div className='flex space-x-2 md:space-x-4 justify-center items-center'>
                    <div>
                        <SignedIn>
                            <Link href={"/"}>
                                <Button variant="outline">
                                    <LayoutDashboard className='h-4 w-4' />
                                    <span className='hidden md:block'>DashBoard</span>

                                </Button>
                            </Link>
                        </SignedIn>
                    </div>
                    <SignedOut>
                        <SignInButton >
                            <Button variant="outline">Sign In</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <UserButton
                            appearance={{
                                elements: {
                                    avatarBox: "w-10 h-10",
                                    userButtonPopoverCard: "shadow-xl",
                                    userPreviewMainIdentifier: "font-semibold"
                                },
                            }}
                            afterSignOutUrl='/'
                        />
                    </SignedIn>

                </div>
            </nav>
        </header>
    )
}

export default Header


import { Button } from '@/components/ui/Button'
import { Rocket } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center relative overflow-hidden">
      <div className="relative z-10 flex flex-col items-center space-y-4">
        <Rocket className="h-20 w-20 text-purple-400 mb-4 animate-bounce" />
        
        <h1 className="text-6xl sm:text-8xl font-bold text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">
          404
        </h1>
        
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
          Lost in Space
        </h2>
        
        <p className="max-w-md text-slate-400">
          It seems you've drifted off into an unknown quadrant. The page you're looking for doesn't exist.
        </p>
        
        <Link href="/">
          <Button className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-transform hover:scale-105">
            Return to Home Base
          </Button>
        </Link>
      </div>
    </div>
  )
}

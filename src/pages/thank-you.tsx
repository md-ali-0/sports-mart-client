import { Button } from "@/components/ui/button"
import { CircleCheckIcon } from "lucide-react"
import { Link } from "react-router-dom"

const ThankYouPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md text-center">
        <CircleCheckIcon className="mx-auto h-12 w-12 text-green-500" />
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Thank You</h1>
        <p className="mt-4 text-muted-foreground">Your payment was successful!</p>
        <Button asChild className="mt-6">
          <Link
            to={'/'}
          >
            Go to Homepage
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default ThankYouPage
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

function Navbar() {
  return (
    <nav className="flex items-center px-4 shadow py-2">
      <h1 className="font-extrabold text-3xl">BOATIFUL</h1>
      <ul className="flex items-center ml-auto gap-2">
        <li className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className="p-0 h-auto w-auto m-0 overflow-hidden rounded-md"
                >
                  <Image
                    className="h-9 w-auto"
                    src="/az-flag.svg"
                    alt="American Flag"
                    width={1200}
                    height={674}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-extrabold">AZ NATIVE</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li className="flex items-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="p-0 h-auto w-auto m-0">
                  <Image
                    className="h-9 w-auto"
                    src="/american-flag.png"
                    alt="American Flag"
                    width={1200}
                    height={674}
                  />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="font-extrabold">PROUDLY WORKING IN THE USA</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
        <li className="flex items-center">
          <Link href="/">
            <Button variant="outline">Home</Button>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/about">
            <Button variant="outline">About</Button>
          </Link>
        </li>
        <li className="flex items-center">
          <Link href="/contact">
            <Button>Contact</Button>
          </Link>
        </li>
        <li className="flex items-center">
          <ModeToggle />
        </li>
      </ul>
    </nav>
  )
}

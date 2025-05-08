import AppearingHeader from '@/components/appearing-header'
import LakeVideo from '@/components/lake-video'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="overflow-y-auto">
      <header className="relative">
        <LakeVideo />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="sticky -top-26">
            <AppearingHeader />
          </div>
        </div>
      </header>
      <section className="flex">
        <div className="text-center flex flex-col gap-16 py-32 w-1/2">
          <h1 className="font-extrabold text-7xl text-white">We take boats</h1>
          <h1 className="font-extrabold text-2xl text-white">
            and turn them into
          </h1>
          <h1 className="font-extrabold text-7xl text-white">Lake Monsters</h1>
        </div>
        <div className="text-center flex items-center justify-center w-1/2">
          <div className="h-1/2 w-1/2 flex items-center justify-center border">
            Picture here
          </div>
        </div>
      </section>
      <section className="text-center flex flex-col gap-16 py-32">
        <h1 className="font-extrabold text-7xl text-white">
          Shut up an take my money
        </h1>
        <Link href="/shop">
          <Button>Shop</Button>
        </Link>
      </section>
      <section className="h-[1000px]">Hey there</section>
      <section className="h-[1000px]">Hey there</section>
      <section className="h-[1000px]">Hey there</section>
    </div>
  )
}

import logoImage from '@/assets/logo.svg'
import { Button } from '@/components/button'
import { Input } from '@/components/input'

export const Home = () => {
  return (
    <main className="h-screen bg-gray-600">
      <header className="flex items-center justify-center bg-gray-700 pb-20 pt-[4.5rem]">
        <img src={logoImage} alt="logo" />
      </header>

      <div className="-mt-7 px-80">
        <section className="flex items-center justify-between gap-2">
          <Input />

          <Button />
        </section>
      </div>
    </main>
  )
}

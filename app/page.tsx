import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle'
import InputText from '@/components/InputText/InputText'
import { Welcome } from '@/components/Welcome/Welcome'

export default function HomePage() {
  return (
    <>
      <Welcome />
      <InputText />
      <ColorSchemeToggle />
    </>
  )
}

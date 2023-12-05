import PageNavigator from './components/pageNavigator/PageNavigator'
import PageContentAbout from './components/aboutPage/PageContentAbout'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-black">
      <PageNavigator />
      <PageContentAbout />
    </main>
  )
}

import Image from 'next/image'
import Hero from './Component/Hero'
import Authors from './Component/Authors'
import TrendingTopics from './Component/TrendingTopics'
import AudioSection from './Component/AudioSection'

export default function Home() {
  return (
  <>
  <Hero />
  <Authors />
  <TrendingTopics/>
  <AudioSection />
  </>
  )
}

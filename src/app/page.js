import Image from 'next/image'
import Hero from './Component/Hero'
import Authors from './Component/Authors'
import TrendingTopics from './Component/TrendingTopics'
import AudioSection from './Component/AudioSection'
import LatestArticle from './Component/LatestArticle'

export default function Home() {
  return (
    <>
      <Hero />
      <Authors />
      <TrendingTopics />
      <AudioSection />
      <LatestArticle />
    </>
  )
}

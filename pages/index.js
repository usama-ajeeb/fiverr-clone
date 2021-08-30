import Head from 'next/head'
import Footer from '../components/footer/Footer'
import GigDisplay from '../components/Gig/GigDisplay'
import Header from '../components/Header'
import Sidebar from '../components/sidebar/Sidebar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Fiverr clone</title>
        <link
          rel='icon'
          href='http://assetsv2.fiverrcdn.com/assets/favicon-32x32-23d4a3fd56a87eaf5a93ddf35a220811.png'
        />
      </Head>
      <header>
        <Header />
      </header>
      <main className='flex mx-auto gap-x-28 w-[1361px] mb-8 mt-14'>
        <Sidebar />
        <GigDisplay />
      </main>
      <footer className='bg-white shadow-md py-12'>
        <Footer />
      </footer>
    </div>
  )
}

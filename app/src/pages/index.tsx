import type { NextPage } from "next"
import Head from "next/head"
import { HomeView } from "../views"

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Home | Oceanview</title>
        <meta
          name="description"
          content="Oceanview - Merchant tools for the Solana blockchain"
        />
      </Head>
      <HomeView />
    </div>
  )
}

export default Home

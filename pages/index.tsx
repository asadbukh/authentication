import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  const { data: session, status } = useSession()

  const [content, setContent] = useState()

  console.log("session", session);
  console.log("status", status);



  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/protected");
      const json = await res.json()
      console.log(json)
      if (json.content) setContent(json.content)
    }
    fetchData()

  }, [session])


  return (

    <Layout>
      <div className={styles.container}>
        {session ? content : "you must sign in to view this content"}
      </div >
    </Layout>
  )
}

export default Home

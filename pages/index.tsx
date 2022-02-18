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

  const user = {
    email: session?.user?.email,
    name: session?.user?.name,
    // email: "aasassskh",
    // name: "jasasdh",
  }

  useEffect(() => {
    const fetchData = async () => {
      await fetch("/api/user", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      // const json = await res.json()
      // console.log(json)
      // if (json) setContent(json)
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

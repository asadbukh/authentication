import { useSession } from 'next-auth/react'
import { stringify } from 'querystring'
import React from 'react'
import Layout from '../components/Layout'

const About = () => {

    const { data } = useSession()

    return (
        <Layout>
            <div>{JSON.stringify(data, null, 1)}</div>
        </Layout>
    )
}

export default About
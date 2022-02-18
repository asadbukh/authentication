import React from 'react'
import Footer from './Footer'
import Header from './Header'


interface Props {
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <main style={{ height: 'calc(100vh - 160px)' }}>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout
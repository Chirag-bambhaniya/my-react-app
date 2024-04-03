import React from 'react'
import Sidebar from '../../layout/Sidebar';
import Navbar from '../../layout/NavBar';

export default function Dashboard() {
    console.log('Dashboard Page')
  return (
    <>
        <header>
            <Sidebar/>
            <Navbar/>
        </header>
        <main style={{ marginTop: "58px" }}>
                <div className="container pt-4">
                    <h1>Dashboard</h1>
                </div>
            </main>
    </>
  )
}

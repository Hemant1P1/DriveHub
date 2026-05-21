import React from 'react'
import SlideBar from '../../Views/HomeView/SlideBar'
import Section from '../../Views/HomeView/Section'
import ContactPage from '../../Views/HomeView/ContactPage'
import AboutUs from '../../Views/HomeView/AboutUs'

export default function Home() {
  return (
    <>
    <h1>Home Page</h1>
    <SlideBar />
    <Section />
    <ContactPage />
    <AboutUs />
    </>
  )
}

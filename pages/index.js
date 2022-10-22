import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Cover from './components/Cover'
import About from './components/About'
import Service from './components/Service'
import Skills from './components/Skill'
import Counter from './components/Counter'
import Carousel from './components/Carousel'
import Price from './components/Price'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
   <Cover/>
   <About/>
   <Skills/>
    <Counter/>
    <Carousel/>
    <Price/>
    <Contact/>
    <Footer/>

    </>
    )
}

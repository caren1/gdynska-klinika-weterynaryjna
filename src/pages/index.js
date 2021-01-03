import * as React from "react"
import './index.css'
import "@fontsource/playfair-display"
import "@fontsource/lato"
import "@fontsource/lato/300.css"

import Layout from '../components/Layout/Layout'
import Intro from '../components/Intro/Intro'

// ENTRY (logo i tytuł ; cała strona)
// NAVBAR - pierwsza strona Oferta, Klinika, Blog, Kadra, Profilaktyka, Kontakt ; mobilne menu te same linki tylko że na modalu
// INTRO (zdjęcie + opis + godziny otwarcia + zadzwoń)
// ABOUT (generalne info o klinice, kiedy założona, kto szefo)
// OFERTA -> Po kliknięciu szczegóły danej kategorii
// PROFILAKTYKA (podział na dwa przeciwpasożytnicza / kalendarz sczepień)
// KADRA -> po kliknięciu szczegóły o danej osobie
// PARTNERZY (więcej o PPW, więcej o możliwościach VetiCover i VetiRaty)
// FOOTER(kontakt) - zawsze na widoku (mapka, adres, telefony, maile ; bez formularza)

const IndexPage = () => {
  return (
    <Layout><Intro /></Layout>
  )
}

export default IndexPage

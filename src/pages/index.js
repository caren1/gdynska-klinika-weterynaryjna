import * as React from "react"
import './index.css'
import "@fontsource/playfair-display"
import "@fontsource/playfair-display/500.css"
import "@fontsource/playfair-display/600.css"
import "@fontsource/playfair-display/700.css"
import "@fontsource/lato"
import "@fontsource/lato/300.css"

import Layout from '../components/Layout/Layout'
import Intro from '../components/Intro/Intro'
import Offer from '../components/Offer/Offer'

// ENTRY (logo i tytuł ; cała strona)
// NAVBAR - pierwsza strona Oferta, Klinika, Blog, Kadra, Profilaktyka, Kontakt ; mobilne menu te same linki tylko że na modalu
// INTRO (zdjęcie + opis + godziny otwarcia + zadzwoń)
// OFERTA -> Po kliknięciu szczegóły danej kategorii
// ABOUT (generalne info o klinice, kiedy założona, kto szefo)
// KADRA -> po kliknięciu szczegóły o danej osobie
// PARTNERZY (więcej o PPW, więcej o możliwościach VetiCover i VetiRaty)
// FOOTER(kontakt) - zawsze na widoku (mapka, adres, telefony, maile ; bez formularza)

const IndexPage = () => {
  return (
    <Layout>
      <Intro />
      <Offer />
    </Layout>
  )
}

export default IndexPage

import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Form from './components/Form';
import Cards from "./components/Cards"

const tabWeapons = [
  {
   name: "Ak-47",
   imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/AK-47_type_II_noBG.png/1920px-AK-47_type_II_noBG.png",
   description: "Connu pour sa fiabilité, sa simplicité de fonctionnement et sa puissance de feu.",
   type: "Assault Riffle",
   caliber: "7,62mm",
  },
  {
    name: "M4A1",
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/PEO_M4_Carbine_RAS_M68_CCO.png/300px-PEO_M4_Carbine_RAS_M68_CCO.png",
    description: "Version évoluée du fusil M16, utilisé par les forces armées américaines et de nombreux autres pays, apprécié pour sa compacité et sa polyvalence",
    type: "Assault Riffle",
    caliber: "5,56mm",
   },
   {
    name: "Colt M1911",
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/2/26/M1911A1.png",
    description: "Conçu par John Browning, il a été utilisé comme pistolet de service par les forces armées américaines pendant de nombreuses années.",
    type: "Handgun",
    caliber: ".45ACP",
   },
   {
    name: "Remington Model 700 (R700)",
    imgSrc:"https://cdnb.artstation.com/p/assets/images/images/055/627/505/large/hao-liu-render4.jpg?1667391702",
    description: "Réputé pour sa précision, largement utilisé par les tireurs d'élite et les chasseurs pour la précision à longue distance.",
    type: "Bolt Action Riffle",
    caliber: ".308",
   },
   {
    name: "M9 (Beretta 92)",
    imgSrc:"https://i.pinimg.com/originals/64/f5/10/64f51036ea64b02c39d537e5d1158957.jpg",
    description: "Adopté par les forces armées américaines comme pistolet de service standard depuis 1985.",
    type: "Handgun",
    caliber: "9mm",
   },
   {
    name: "Uzi",
    imgSrc:"https://cdna.artstation.com/p/assets/images/images/029/221/900/large/ryzin-art-17.jpg?1596826538",
    description: "Compact et largement utilisé par les forces de sécurité, les versions plus récentes sont chambrées en 9mm.",
    type: "SMG",
    caliber: "9mm",
   },
   {
    name: "SIG 716",
    imgSrc:"https://rare-gallery.com/uploads/posts/4566249-gun-photography-sig-suppressors.jpg",
    description: "Version du SIG SG 550 adaptée pour le calibre .308, utilisée par les forces militaires et les forces spéciales.",
    type: "DMR",
    caliber: ".308",
   },
   {
    name: "FN SCAR 17S",
    imgSrc:"https://p.turbosquid.com/ts-thumb/lu/XvUFNB/EA/tbrender001_viewport/png/1632436579/600x600/fit_q87/c1169cf3db3e52efd436df6693a526d64abadef1/tbrender001_viewport.jpg",
    description: "Utilisé par les forces spéciales et les unités de combat, offrant une grande modularité et une précision élevée.",
    type: "DMR",
    caliber: ".308",
   },
];



function App() {
  

  return (
    <>
    <div className="header">
      <Header/>
    </div>
      <Form/>
    <div className="container">
      <Cards table={tabWeapons}/>
    </div>
      
    </>
  )
}

export default App

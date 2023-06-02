import { useState } from 'react'
import './App.css'
import Caca from './components/caca';

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
    imgSrc:"dzqd",
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
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Remington_Model_700.JPG/280px-Remington_Model_700.JPG",
    description: "Réputé pour sa précision, largement utilisé par les tireurs d'élite et les chasseurs pour la précision à longue distance.",
    type: "Precision Riffle",
    caliber: ".308",
   },
   {
    name: "M9 (Beretta 92)",
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/M9-pistolet.jpg/800px-M9-pistolet.jpg",
    description: "Adopté par les forces armées américaines comme pistolet de service standard depuis 1985.",
    type: "Handgun",
    caliber: "9mm",
   },
   {
    name: "Uzi",
    imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Uzi_1.jpg/280px-Uzi_1.jpg",
    description: "Compact et largement utilisé par les forces de sécurité, les versions plus récentes sont chambrées en 9mm.",
    type: "SMG",
    caliber: "9mm",
   },
   {
    name: "SIG 716",
    imgSrc:"https://www.provencetir.com/2413-large_default/sig-716-patrol-noir-c308-win.jpg",
    description: "Version du SIG SG 550 adaptée pour le calibre .308, utilisée par les forces militaires et les forces spéciales.",
    type: "DMR",
    caliber: ".308",
   },
   {
    name: "FN SCAR 17S",
    imgSrc:"https://www.luxguns.com/wp-content/uploads/2015/04/3005-FN-SCAR-17S-.308win-Black-Semi-Auto.jpg",
    description: "Utilisé par les forces spéciales et les unités de combat, offrant une grande modularité et une précision élevée.",
    type: "DMR",
    caliber: ".308",
   },
];



function App() {
  

  return (
    <>
      <Caca/>
    </>
  )
}

export default App

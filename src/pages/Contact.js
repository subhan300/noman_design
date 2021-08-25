import React from 'react'
import "../components/menu/menu.css"

import AddressComponent from "../components/address_component/address_component"
import LepastaComponent from "../components/lepasta_component/Lepasta_Component"


import Navbar from '../components/Global-components/Navbar'
// import Menu_banner from '../components/menu/menu_banner/Menu_banner'
import Contact_banner from '../components/contact/Contact_banner'
import Contactus_section1 from "../components/contact/Contactus_section1"
import Contact_banner_bottom from '../components/contact/contact_banner_bottom/Contact_banner_bottom'
import Footer from "../components/Global-components/Footer"
function menu() {
    return (
        <div className="menu">
              <Navbar />
              <Contact_banner banner_title="Contact"></Contact_banner>
              <Contactus_section1 />
             
              {/* <Contact_banner_bottom /> */}
             <div className="space_height"></div>
               <AddressComponent />
              <LepastaComponent />
              
              <Footer />
             
                    
                   
                   
                
            
        </div>
    )
}

export default menu

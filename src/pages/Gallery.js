import React from 'react'
import Navbar from '../components/Global-components/Navbar'

// Gallery Components imports
import GalleryBanner from '../components/Gallery-screen/GalleryBanner'
import GallerySub from '../components/Gallery-screen/GallerySub'

function Gallery() {
    return (
        <div>
            <Navbar/>
            <GalleryBanner/>
            <GallerySub/>
        </div>
    )
}

export default Gallery

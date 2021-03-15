import { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';
import { useSelector } from 'react-redux';

import "./gallery.scss";

function Gallery(props) {
    const [images, setImages] = useState();
    const [isLoaded, setIsLoaded] = useState(false);

    const currentLanguage = useSelector((state) => state.language.language);
    const currentCountry = props.country;

    useEffect(() => {
    if (currentCountry) {
        const places = currentCountry.localizations[currentLanguage].places;

        const imagesList = [];
        places.forEach((el) => {
            imagesList.push({
                original: el.imageURL,
                thumbnail: el.imageURL,
                originalTitle: el.name,
                thumbnailTitle: el.name,
                description: el.description,

                thumbnailLabel: el.name,
                originalAlt: "place",
                thumbnailAlt: "place"
                })

        });
        setImages(imagesList);
        setIsLoaded(true)

    }
    }, [currentLanguage])

    const titleList = {
        "EN": "Sights",
        "RU": "Достопримечательности",
        "BE": "Славутасці",
    };

    const sectionTitle = titleList[currentLanguage];
    return(
        <div>
            <h1 className="gallery-title">{sectionTitle}</h1>
            {isLoaded && <ImageGallery items={images} />}
        </div>  
    )
}

export default Gallery;


import css from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({items, onClick}) {
    return (
        <ul className={css.gallery}>
            {items.map(({ id, urls, slug }) => (
                <li key={id} className={css.imageGallery}>
                    <ImageCard imgLink={urls}
                        imgDescr={slug}
                        onClick={onClick}/>
                </li>
            ))

            }
        </ul>
    )
}
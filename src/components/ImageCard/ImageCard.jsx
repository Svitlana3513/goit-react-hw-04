import css from './ImageCard.module.css';

export default function ImageCard({imgLink:{small,regular}, imgDescr, onClick}) {
    const handleClick = () => {
        onClick(small);
    }
    return (
        <div>
            <img className={css.img}
                src={small}
                alt={imgDescr}
                onClick={handleClick} />
        </div>
    )
}
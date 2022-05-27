import tileStyles from '../../styles/HRI/tile.module.css'
import utilStyles from '../../styles/utils.module.css'
import Link from 'next/link'

export default function Tile ({ image, label, link, tileHeight, tileWidth}){
  return (
    <>
      <Link href={link}>
        <div className={`${tileStyles.tile} ${tileStyles.tint}`} style={{backgroundImage: `url(${image})`, height: `${tileHeight}px`, width: `${tileWidth}px`}}>
          <h2 className={`${utilStyles.headingLg} ${tileStyles.text}`}>
            {label}
          </h2>
        </div>
      </Link>
    </>
  );
}
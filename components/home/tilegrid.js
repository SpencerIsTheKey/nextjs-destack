import Tile from "./tile";
import gridStyles from "../../styles/HRI/grid.module.css"
/**
 * 
 * @param {gridDimsensions} String Dimensions of grid to display. '[col]x[row]'
 * @param {images} Array of image urls for background. Left to right, then top to bottom
 * @param {links} Array of link urls for tiles. Left to right, then top to bottom
 * @param {labels} Array of text labels for tiles. Left to right, then top to bottom
 * @param {gridHeight} int height of grid object in px
 * @param {gridWidth} int width of grid object in px
 * @param {gridMargins} int width of margin between tiles in px
 * @returns Grid of Tile Objects
 */

export default function TileGrid({ gridDimensions, images, links, labels, tileHeight, tileWidth, gridMargins }) {
  let gridDims = gridDimensions.split("x");
  if(gridDims.length != 2 || gridDims[0].length < 1 || gridDims[1] < 1)
    throw "Invalid format for  GridDimensions";

  let gridCols = parseInt(gridDims[0]);
  let gridRows = parseInt(gridDims[1]);
  let tileNum = gridCols*gridRows;

  if( images.length != tileNum || links.length != tileNum || labels.length != tileNum)
    throw "Invalid content number";

  let tileMargin = gridMargins / 2;

  let gridHeight = (tileHeight + gridMargins) * gridRows;
  let gridWidth = (tileWidth + gridMargins) * gridCols;


  return(
    <>
      <div className={gridStyles.gridWrapper} 
        style={{
          margin: gridMargins,
          height: gridHeight,
          width: gridWidth,
        }}
      >
        {
          labels.map((label, idx) => (
            <Tile 
            label={label}
            image={images[idx]}
            link={links[idx]}
            tileHeight={parseInt(tileHeight)}
            tileWidth={parseInt(tileWidth)}
            style={{
              margin: `${tileMargin}px`,
            }}
            />
          ))
        }
      </div>
    </>
  );
}
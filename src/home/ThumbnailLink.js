import { Link } from "react-router-dom";

function ThumbnailLink(props) {
  return (
    <Link to={`/${props.pageName}/${props.pageName}.html`}>
      <img
        src={props.lowResThumb}
        srcSet={`${props.highResThumb} ${2 * props.width}w,
                 ${props.lowResThumb} ${props.width}w`}
        sizes={`(min-width: 481px) 25vw,
100vw`}
        alt={props.alt}
        width={props.width}
        height={props.height}
      />
    </Link>
  );
}

export default ThumbnailLink;

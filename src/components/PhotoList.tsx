import Photo from "./Photo"

type Props = {
  photos: any
  setZoomInPhoto: any
}

const PhotoList = (props: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 place-items-center px-4">
      {props.photos.map((photo: any) => (
        <Photo dados={photo} setZoomInPhoto={props.setZoomInPhoto} />
      ))}
    </div>
  )
}

export default PhotoList
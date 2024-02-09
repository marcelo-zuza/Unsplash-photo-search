
type Props = {
  photo: any
  setZoomInPhoto: any
}

const PhotoZoom = (props: Props) => {
  return (
    <div>
      <div className="px-4 fixed top-0 inset-0 z-50 w-full h-full bg-neutral-900 bg-opacity-90" onClick={() => props.setZoomInPhoto(null)}>
        <div className="flex flex-1 align-middle items-center justify-center">
        <img src={props.photo.urls.regular} className="h-screen" alt="Foto"/>
        </div>
      </div>
    </div>
  )
}

export default PhotoZoom
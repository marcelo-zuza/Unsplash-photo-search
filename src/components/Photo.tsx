
type Props = {
    dados: any
    setZoomInPhoto: any

}

const Photo = (props: Props) => {
  return (
    <div onClick={() => props.setZoomInPhoto(props.dados)}>
        <img src={props.dados.urls.small} alt={props.dados.alt_description} className="py-4 px-2 cursor-pointer" />
    </div>
  )
}

export default Photo
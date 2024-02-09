// components
import PhotoList from "./components/PhotoList"
import PhotoZoom from "./components/PhotoZoom"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"
//
import axios from "axios"
import { useEffect, useState } from "react"

const App = () => {

  const [query, setQuery] = useState<string>('')
  const [category, setCategory] = useState<string>('')
  const [photos, setPhotos] = useState<any>([])
  const [zoomInPhoto, setZoomInPhoto] = useState<any>(null)
  const [activateSearch, setActivateSearch] = useState<boolean>(false)

  const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY;
  const api: string = `https://api.unsplash.com/photos/?client_id=${apiKey}`
  const api2: string = "https://api.unsplash.com/search/photos/?client_id=${apiKey}"
  

  const fetchData = async (query: any, category: any) => {
    if(query || category){
      let searchQuery: any = query

      if(query && category){
        searchQuery = `${query} ${category}`
      }else if(category){
        searchQuery = category
      }
      const response = await axios.get(api2, {
        params: {
          client_id: apiKey,
          query: searchQuery
        },
      })
      
      setPhotos(response.data.results)
      return
    }




    const response = await axios.get(api, {
      params: {
        client_id: apiKey,
      }
    })
    setPhotos(response.data) 
  }

  useEffect(() => {
    fetchData(query, category)
  }, [])

  useEffect(() => {
    if(activateSearch){
      fetchData(query, category)
      setActivateSearch(false)
    }
  })

  return (
<div className="bg-neutral-900 font-roboto">
  <div className="flex flex-col justify-center content-center items-center">
        <div className="bg-white mx-12 px-4 py-8 flex flex-col justify-center items-center content-center">
          <h1 className="text-5xl text-black text-center py-4">Search photos from Unplash API</h1>
          <h2 className="text-2xl hover:underline duration-500 "><a href="http://" target="_blank" rel="noopener noreferrer">by Marcelo Zuza</a></h2>

            <SearchBar setQuery={setQuery} setCategory={setCategory} setActivateSearch={setActivateSearch} query={query} activateSearch={activateSearch} />
            <PhotoList photos={photos} setZoomInPhoto={setZoomInPhoto} />
            {zoomInPhoto && <PhotoZoom photo={zoomInPhoto} setZoomInPhoto={setZoomInPhoto} />}
        </div>
  </div>
  <Footer />
</div>
  )
}

export default App
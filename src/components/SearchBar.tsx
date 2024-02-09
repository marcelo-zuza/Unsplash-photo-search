interface Props {
  setQuery: any;
  setCategory: any;
  setActivateSearch: any;
  query: any;
  activateSearch: boolean

}

const SearchBar = (props: Props) => {


  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
       props.setActivateSearch(true);
    }
  };

  const categories: any = [
    "Nature",
    "People",
    "Technology",
    "Animals",
    "Sports"

  ]

  return (
<div className="">
    <div className="flex flex-1 items-center py-4">
      <div className="content-center">
        <select className="py-2 px-2 mx-2 text-white bg-neutral-600 rounded font-bold" name="" id="" onChange={(e) => {props.setCategory(e.target.value), props.setActivateSearch(true), props.setQuery('')}}>
          {categories.map((category: any) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input className="border-2 border-neutral-400 rounded py-1 px-4" type="text" placeholder="Search" value={props.query} onChange={(e) => props.setQuery(e.target.value)} onKeyPress={handleKeyPress}/>

        <button className="bg-blue-500 hover:bg-blue-700 duration-500 text-white font-bold py-1 px-2 mx-1 rounded" onClick={() => props.setActivateSearch(true)}>Search</button>
      </div>

    </div>
    <div className="flex flex-1 mb-4">
        {props.activateSearch && <p className="text-center">Loading...</p>}
      </div>
</div>
  )
}

export default SearchBar
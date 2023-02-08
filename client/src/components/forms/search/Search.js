import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons/faSearch";

export const Search = (props)=>{
    const {placeholder, handleSubmit,search,setSearch}=props;
    return (
        <div>
            <form className="flex space-x-3" onSubmit={handleSubmit}>
                <input type="text"
                    className="rounded px-4 py-2 w-full text-gray-900 text-sm"
                    placeholder={placeholder}
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
                <button type="submit">
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
            </form>
        </div>
    );
}
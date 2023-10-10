import { useSearchParams } from "react-router-dom"
import { createSearchParams } from "react-router-dom";

const SearchParams = () => {

    const [queryParam, setQueryParam] = useSearchParams();
    const value = queryParam.get('type');
    setQueryParam(
        createSearchParams({
            frunt: 'hello',
            xinchao: 'hi'
        })
    )

    return (
        <div>
           
        </div>
    )
}

export default SearchParams

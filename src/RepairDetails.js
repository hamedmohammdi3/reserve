import {useHistory, useParams} from "react-router-dom";
import useFetch from "./pages/use/useFetch";

const RepairDetails = () => {
    const { id } = useParams();
    const {data: person, loading, error} = useFetch("http://localhost:8000/repair/"+id);
    const history = useHistory();
    const handleClick = ()=>{
        fetch("http://localhost:8000/repair/"+person.id,{
            method:"DELETE"
        }).then( ()=>{
                console.log("is deleted");
                history.push("/");
        }

        )
    }
  return(
      <div className="blog-details">
          {loading && <div>Loading......</div>}
          {error && <div>{error}</div>}
          {person && (
               <article>
                   <h2>{person.title}</h2>
                   <p>{person.body}</p>
                   <button onClick={handleClick}>delete</button>
               </article>
          )}
      </div>
  );
}
export default RepairDetails;
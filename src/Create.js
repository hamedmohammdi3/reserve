import {useState} from "react";
import {useHistory} from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const handelSubmit = (e) =>{
        e.preventDefault();
        setLoading(true);

        const repair ={title, body}
        console.log(repair);
    setTimeout( () => {     fetch("http://localhost:8000/repair",{
            method:"POST",
            headers:{"content-type": "application/json"},
            body: JSON.stringify(repair)
        }).then(() => {
                console.log("created");
                setLoading(false);
               // history.go(-1);
                history.push("/");
            }
        ).catch(
            console.log(e)
        )
    },1000);
    }

    return(
      <div className="create">
          <h2>Add New Repair</h2>
          <form onSubmit={handelSubmit}>
              <label>Repair Title</label>
              <input
              type="text"
              required
              value={title}
              onChange={(e)=> setTitle(e.target.value)}
              ></input>
              <label>Repair Body</label>
              <input
                  type="text"
                  required
                  value={body}
                  onChange={(e)=> setBody(e.target.value)}
              ></input>
              <label>Repair Type</label>
              <select>
                  <option value="car">car</option>
                  <option value="bic">bic</option>
              </select>
              {!loading &&<button>add Repair</button>}
              {loading &&<button disabled>adding Repair....</button>}
          </form>
      </div>
  );
}
export default Create;
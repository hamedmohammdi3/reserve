import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import validation from "../validation/validation";

const useInsert = (url,object) => {
    //const [loading, setLoading] = useState(false);
   // const history = useHistory();
     //e.preventDefault();
      //  setLoading(true);
        console.log(object);
    validation(url,object);
    setTimeout( () => {     fetch(url,{
            method:"POST",
            headers:{"content-type": "application/json"},
            body: JSON.stringify(object)
        }).then(() => {
                console.log("created");
               // setLoading(false);
                // history.go(-1);
               // history.push("/");
            }
        ).catch(
            console.log(e)
        )
        },1000);
    }
export default useInsert;


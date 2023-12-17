import {Button, Form, Tab, Table} from "react-bootstrap";
import React, {useState} from "react";
import useFetch from "../use/useFetch";
import useUpdate from "../use/useUpdate";

const DefineAndEditSection = () => {
    const {data : sections , loading, error} = useFetch("http://localhost:8000/section");
    console.log("this is swctions"+sections);
    const [sectionArray, setSectionArray] = useState(sections);
    const handelSubmit = (e) =>{
        e.preventDefault();
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useUpdate("http://localhost:8000/section",sectionArray);
    }


    return(<></>

   /*   <Form  onSubmit={handelSubmit}>
          <div className="table-container" style={{marginTop: '70px'}}>
              <table className="table table-striped mb-5">
                  <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">عنوان</th>
                      <th scope="col">فعال</th>
                  </tr>
                  </thead>
                  <tbody>
                 { sectionArray !== null && sections.map(((section)=>(
                      <tr>
                          <th>{section.id}</th>
                          <td>
                             {/!* <input
                                  value={section.title}
                                  onChange={(e)=> section(e.target.value)}
                              ></input>*!/}</td>
                          <td>{section.active}</td>
                      </tr>
                  )))

                  }
                  </tbody>
              </table>
              <div className="m-5 mt-0">
                  <button type="button" className="btn btn-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                           className="bi bi-plus-lg" viewBox="0 0 16 16">
                          <path fill-rule="evenodd"
                                d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"></path>
                      </svg></button>
                  <button type="button" className="btn btn-danger">-</button>
              </div>
          </div>
        <button>ثبت</button>
      </Form>*/
   );
}
export default DefineAndEditSection;
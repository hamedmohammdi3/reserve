import validation from "../validation/validation";

const useUpdate = (url,object) => {
    console.log(object);
    validation(url,object);
   fetch(url,{
        method:"PUT",
        headers:{"content-type": "application/json"},
        body: JSON.stringify(object)
    }).then(() => {
            console.log("UPDATE");
        }
    ).catch(
    );
}
export default useUpdate;

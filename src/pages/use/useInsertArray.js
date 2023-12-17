import useInsert from "./useInsert";
import validation from "../validation/validation";

const useInsertArray = (url,object) => {
    validation(url,object);
     object.map((obj) => (
         // eslint-disable-next-line react-hooks/rules-of-hooks
         useInsert(url, obj)
     ))
}
export default useInsertArray;
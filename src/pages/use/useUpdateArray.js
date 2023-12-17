import useUpdate from "./useUpdate";
import validation from "../validation/validation";

const useUpdateArray = (url,object) => {
  validation(url,object);
  object.map((obj)=>(
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useUpdate(url,obj)
  ))
}
export default useUpdateArray;
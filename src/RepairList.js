import {Link} from "react-router-dom";

const RepairList = ({ persons, title, handelDelete}) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {persons.map((person)=>(
            <div className="blog-preview" key={person.id}>
                <Link to={`/repair/${person.id}`}>
                <h2>{person.title}</h2>
                <p>description human {person.body}</p>
                </Link>
            </div>
    )) }
        </div>

    );

}
export default RepairList;
import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <div className="siDesc">
        <h1 className="siTitle">{item.startDate}</h1>
        <span className="siDistance">{item.endDate}m from center</span>
        <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
    </div>
  );
};

export default SearchItem;

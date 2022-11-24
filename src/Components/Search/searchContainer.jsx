import { connect } from "react-redux";
import { getDataThunk } from "../../Store/searchReducer";
import Search from "./search";

const mapStateToProps = (state) => ({
  name: state.search.name,
  country: state.search.country,
});

const SearchContainer = connect(mapStateToProps, { getDataThunk })(Search);

export default SearchContainer;

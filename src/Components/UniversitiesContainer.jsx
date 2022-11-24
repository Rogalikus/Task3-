import { connect } from "react-redux";
import { Universities } from "./Universities";
import { actions } from "../Store/searchReducer";

const mapStateToProps = (state) => ({
  universityData: state.search.universityData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    delData: () => {
      dispatch(actions.delData());
    },
  };
};
const UniversitiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Universities);

export default UniversitiesContainer;

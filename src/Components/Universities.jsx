import { UniversitiesTemplate } from "./UniversitiesTemplate";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const Universities = (props) => {
  const [savedUni, setUni] = useState([]);
  const isIncluded = (uni) => {
    return savedUni.some((item) => item.name === uni.name);
  };
  const handleSave = (uni) => {
    if (isIncluded(uni)) {
      setUni((prevState) => prevState.filter((item) => item.name !== uni.name));
    } else {
      setUni((prevState) => [...prevState, uni]);
    }
  };
  return (
    <div>
      <div>Favorite Universities - {savedUni.length}</div>
      {props.universityData ? (
        <div>
          <div>
            <button onClick={props.delData}> Clear Results</button>
          </div>
          {props.universityData.map((data, index) => (
            <UniversitiesTemplate
              data={data}
              isIncluded={isIncluded}
              handleSave={handleSave}
              key={data.id}
              index={index}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

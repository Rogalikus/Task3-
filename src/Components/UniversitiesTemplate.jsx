import { prepareDataForValidation } from "formik";
import React, { useEffect, useState } from "react";
import style from "./UniversitiesTemplate.module.css";

export const UniversitiesTemplate = React.memo(
  ({ isIncluded, handleSave, data, ...props }) => {
    const [checked, setChecked] = useState(isIncluded(data));
    const handleOnChange = () => {
      handleSave(data);
      setChecked((prevState) => !prevState);
    };
    return (
      <div>
        <table border="2" className={style.wrapper}>
          <thead>
            <tr>
              <th className={style.column1}>Number</th>
              <th className={style.column2}>Specs</th>
              <th className={style.column3}>Name</th>
              <th className={style.column4}>Favorite Universities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan="3" className={style.column1}>
                № {props.index + 1}
              </td>
              <td className={style.column2}> University Name </td>
              <td className={style.column3}> {data.name} </td>
              <td rowSpan="3" className={style.column4}>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={handleOnChange}
                />
              </td>
            </tr>
            <tr>
              <td className={style.column2}> Country </td>
              <td className={style.column3}> {data.country} </td>
            </tr>
            <tr>
              <td className={style.column2}>Web Pages</td>
              <td className={style.column3}>
                {" "}
                <a
                  className={style.text}
                  href={data.web_pages}
                  rel="noreferrer"
                  target={"_blank"}
                >
                  {data.web_pages}
                </a>{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
);

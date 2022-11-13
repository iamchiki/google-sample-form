import React from "react";

const Answer = ({ type, options }) => {
  const answerArr = ["0", "1", "-1"];
  return (
    <div>
      {type === "short-answer" && <input type="text" />}
      {type === "date" && <input type="date" />}
      {type === "multiple-choice" &&
        options.map((option) => {
          return (
            <div key={option.id}>
              <input
                type="checkbox"
                id={option.id}
                value={option.title}></input>
              <label htmlFor={option.id}>{option.title}</label>
            </div>
          );
        })}
      {type === "dropdown" && (
        <div>
          <ol>
            {answerArr.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ol>
          <select>
            {options.map((option) => {
              return <option value={option.title}>{+option.title + 1}</option>;
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default Answer;

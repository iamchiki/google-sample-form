import React from "react";
import styles from "./Answer.module.css";

const Answer = ({ type, options, is_required }) => {
  const answerArr = ["0", "1", "-1"];
  const isRequired = is_required === "yes" ? true : false;
  return (
    <div>
      {type === "short-answer" && (
        <input
          type="text"
          placeholder="short-answer text"
          className={styles["text-input"]}
          required={isRequired}
        />
      )}
      {type === "date" && <input type="date" required={isRequired} />}
      {type === "multiple-choice" &&
        options.map((option) => {
          return (
            <div key={option.id} className={styles["option-item"]}>
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
          <ol className={styles["list"]}>
            {answerArr.map((item) => {
              return (
                <li key={item} className={styles["option-item"]}>
                  {item}
                </li>
              );
            })}
          </ol>
          <select required={isRequired}>
            {options.map((option) => {
              return (
                <option key={option.id} value={option.title}>
                  {+option.title + 1}
                </option>
              );
            })}
          </select>
        </div>
      )}
    </div>
  );
};

export default Answer;

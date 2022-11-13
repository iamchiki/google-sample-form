import React from "react";
import Answer from "../Answer/Answer";

const QuestionCard = ({ questionDtl }) => {
  const { description, is_required, title, type, options } = questionDtl;
  return (
    <div className="card">
      <p>{title}</p>
      {description && <p>{description}</p>}
      <Answer type={type} options={options} is_required={is_required}></Answer>
    </div>
  );
};

export default QuestionCard;

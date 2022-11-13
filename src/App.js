import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import QuestionCard from "./components/QuestionCard/QuestionCard";

function App() {
  const [questions, setQuestions] = useState([]);
  const [form, setForm] = useState();

  useEffect(() => {
    const fetchFormDtl = async () => {
      const response = await fetch(
        "https://mocki.io/v1/1325ec22-b1c6-47cb-8950-c68aa9ff0c40"
      );
      const data = await response.json();
      console.log(data);
      setQuestions(data.questions);
      setForm(data);
    };
    fetchFormDtl();
  }, []);
  return (
    <div>
      <Card
        title={form?.form_title}
        description={form?.form_description}></Card>
      {form?.questions.map((question) => {
        return (
          <QuestionCard key={question.id} questionDtl={question}></QuestionCard>
        );
      })}
    </div>
  );
}

export default App;

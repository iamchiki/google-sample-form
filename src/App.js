import "./App.css";
import Card from "./components/Card/Card";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import useFormDetail from "./hooks/useFormDetail";

function App() {
  const { form } = useFormDetail();
  return (
    <div className="form-container">
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

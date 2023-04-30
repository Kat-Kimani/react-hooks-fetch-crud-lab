import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  // Update state by passing the array of questions to setQuestions
  //This displays the Questions
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((resp) => resp.json())
      .then((questions) => setQuestions(questions));
  }, []);

  // add this callback function
  function handleDeleteQuestion(deletedQuestion) {
    const updatedQuestions = questions.filter(
      (question) => question.id !== deletedQuestion.id
    );
    setQuestions(updatedQuestions);
  }

  function handleUpdateQuestion(updatedQuestions) {
    const updatedQue = questions.map((que) => {
      if (que.id === updatedQuestions.id) {
        return updatedQuestions;
      } else {
        return que;
      }
    });
    setQuestions(updatedQue);
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {/* display QuestionItem components here after fetching */}

        {questions.map((question) => (
          <QuestionItem
            key={question.id}
            question={question}
            onUpdateQuestion={handleUpdateQuestion}
            onDeleteQuestion={handleDeleteQuestion}
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;

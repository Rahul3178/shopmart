import React, { useEffect, useState } from "react";

const CustomerFeedbackCenter = () => {
  const [inputValue, setInputValue] = useState("");

  const [feedback, setFeedback] = useState(["Good Product"]);

  useEffect(() => {}, [feedback]);

  function HandleFeedback(e) {
    console.log(e.target.value, "Form handling");
    setFeedback((prevTodo) => [...prevTodo, inputValue]);
    alert("Feedback Submitted successfully");
  }

  return (
    <div className="row shadow m-5 p-3">
      <div className="col p-2">
        <h5>Customers Feedbacks</h5>
        {feedback.map((feed) => (
          <div className="d-flex justify-content-start gap-3">
            <span className="bi bi-person-circle"></span>
            <p>{feed}</p>
          </div>
        ))}
      </div>
      <div className="col d-flex justify-content-center p-2">
        {/* comments and feedback */}
        <div className="form me-2" style={{ width: "25rem" }}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="leave your feedback here"
            name="feedbackInput"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }}
          />

          <button
            className="btn btn-warning form-control mb-3"
            onClick={HandleFeedback}
          >
            Feedback
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CustomerFeedbackCenter;

import React, { useState, useEffect } from "react";

export default function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [score, setScore] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [nextLevelUnlocked, setNextLevelUnlocked] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes timer
  const [timeExpired, setTimeExpired] = useState(false);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (submitted) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          handleTimeExpired(); // Handle timer expiration
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [submitted]);

  useEffect(() => {
    if (!initialized) {
      resetQuiz();
      setInitialized(true);
    }
  }, [initialized]);

  const questions = [
    {
      id: 1,
      question: "What is the value of sin(90°)?",
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "0.5" },
        { id: 3, text: "1" },
        { id: 4, text: "Undefined" },
      ],
      correctOption: 3,
    },
    {
      id: 2,
      question: "If tan(θ) = 1, what is the value of θ?",
      options: [
        { id: 1, text: "30°" },
        { id: 2, text: "45°" },
        { id: 3, text: "60°" },
        { id: 4, text: "90°" },
      ],
      correctOption: 2,
    },
    {
      id: 3,
      question:
        "Which trigonometric function is equal to the ratio of the adjacent side to the hypotenuse?",
      options: [
        { id: 1, text: "Sine" },
        { id: 2, text: "Cosine" },
        { id: 3, text: "Tangent" },
        { id: 4, text: "Cosecant" },
      ],
      correctOption: 2,
    },
    {
      id: 4,
      question: "What is the period of the sine function?",
      options: [
        { id: 1, text: "π" },
        { id: 2, text: "2π" },
        { id: 3, text: "4π" },
        { id: 4, text: "π/2" },
      ],
      correctOption: 2,
    },
    {
      id: 5,
      question: "If sin(θ) = 3/5, what is cos(θ)?",
      options: [
        { id: 1, text: "3/5" },
        { id: 2, text: "4/5" },
        { id: 3, text: "5/3" },
        { id: 4, text: "5/4" },
      ],
      correctOption: 2,
    },
    {
      id: 6,
      question: "Which identity is true for all values of θ?",
      options: [
        { id: 1, text: "sin(θ) + cos(θ) = 1" },
        { id: 2, text: "tan(θ) = sin(θ)/cos(θ)" },
        { id: 3, text: "sin^2(θ) + cos^2(θ) = 2" },
        { id: 4, text: "cos(θ) = 1/sin(θ)" },
      ],
      correctOption: 2,
    },
    {
      id: 7,
      question: "What is the value of cos(0°)?",
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "Undefined" },
        { id: 4, text: "Infinity" },
      ],
      correctOption: 2,
    },
    {
      id: 8,
      question: "What is the value of sin(30°)?",
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "0.5" },
        { id: 3, text: "1" },
        { id: 4, text: "√3/2" },
      ],
      correctOption: 2,
    },
    {
      id: 9,
      question: "Which trigonometric function is not defined for 90°?",
      options: [
        { id: 1, text: "Sine" },
        { id: 2, text: "Cosine" },
        { id: 3, text: "Tangent" },
        { id: 4, text: "Secant" },
      ],
      correctOption: 3,
    },
    {
      id: 10,
      question: "What is the value of tan(45°)?",
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "√2" },
        { id: 4, text: "Infinity" },
      ],
      correctOption: 2,
    },
    {
      id: 11,
      question:
        "Which function gives the ratio of the opposite side to the adjacent side in a right triangle?",
      options: [
        { id: 1, text: "Sine" },
        { id: 2, text: "Cosine" },
        { id: 3, text: "Tangent" },
        { id: 4, text: "Secant" },
      ],
      correctOption: 3,
    },
    {
      id: 12,
      question: "What is the amplitude of the function y = 3 sin(x)?",
      options: [
        { id: 1, text: "1" },
        { id: 2, text: "3" },
        { id: 3, text: "0" },
        { id: 4, text: "π" },
      ],
      correctOption: 2,
    },
    {
      id: 13,
      question:
        "If sin(θ) = 1/2, what is cos(θ) when θ is in the first quadrant?",
      options: [
        { id: 1, text: "√3/2" },
        { id: 2, text: "1/2" },
        { id: 3, text: "√2/2" },
        { id: 4, text: "0" },
      ],
      correctOption: 1,
    },
    {
      id: 14,
      question: "What is the phase shift of the function y = sin(x - π/4)?",
      options: [
        { id: 1, text: "π/4 to the left" },
        { id: 2, text: "π/4 to the right" },
        { id: 3, text: "π/2 to the left" },
        { id: 4, text: "π/2 to the right" },
      ],
      correctOption: 2,
    },
    {
      id: 15,
      question: "What is the value of cos(60°)?",
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "0.5" },
        { id: 3, text: "√3/2" },
        { id: 4, text: "1" },
      ],
      correctOption: 2,
    },
    {
      id: 16,
      question: "What is the sum of sin^2(θ) and cos^2(θ) for any angle θ?",
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "2" },
        { id: 4, text: "sin(θ) + cos(θ)" },
      ],
      correctOption: 2,
    },
    {
      id: 17,
      question: "What is the cotangent of 45°?",
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "√2" },
        { id: 4, text: "Undefined" },
      ],
      correctOption: 2,
    },
    {
      id: 18,
      question: "Which of the following identities is true for all angles θ?",
      options: [
        { id: 1, text: "sin(θ) = cos(θ)" },
        { id: 2, text: "sin^2(θ) - cos^2(θ) = -1" },
        { id: 3, text: "sin^2(θ) + cos^2(θ) = 1" },
        { id: 4, text: "tan^2(θ) = 1 + cos^2(θ)" },
      ],
      correctOption: 3,
    },
    {
      id: 19,
      question: "What is the value of sin(180°)?",
      options: [
        { id: 1, text: "0" },
        { id: 2, text: "1" },
        { id: 3, text: "√3/2" },
        { id: 4, text: "-1" },
      ],
      correctOption: 1,
    },
    {
      id: 20,
      question: "Which function is periodic with a period of 2π?",
      options: [
        { id: 1, text: "Sine" },
        { id: 2, text: "Cosine" },
        { id: 3, text: "Tangent" },
        { id: 4, text: "All of the above" },
      ],
      correctOption: 4,
    },
  ];

  const questionSets = [
    questions.slice(0, 5),
    questions.slice(5, 10),
    questions.slice(10, 15),
    questions.slice(15, 20),
  ];

  const handleSubmit = async (autoSubmit = false) => {
    const currentQuestions = questionSets[currentSet - 1];

    if (!autoSubmit) {
      const unansweredQuestions = currentQuestions.filter(
        (q) => !selectedOptions[q.id]
      );
      if (unansweredQuestions.length > 0) {
        alert("Please answer all questions before submitting.");
        return;
      }
    }

    let totalScore = 0;

    currentQuestions.forEach((q) => {
      if (selectedOptions[q.id] && selectedOptions[q.id] === q.correctOption) {
        totalScore += 1;
      }
    });

    setScore(totalScore);
    setSubmitted(true);
    setShowFeedback(true);

    if (totalScore > 3) {
      setNextLevelUnlocked(true);
      await updateUserLevel();
    }
  };

  const handleOptionSelect = (questionId, optionId) => {
    if (!submitted) {
      setSelectedOptions({
        ...selectedOptions,
        [questionId]: optionId,
      });
    }
  };

  const getOptionText = (question, optionId) => {
    const option = question.options.find((o) => o.id === optionId);
    return option ? option.text : "";
  };

  const handleTimeExpired = () => {
    setTimeExpired(true);
    resetQuiz();
  };

  const resetQuiz = () => {
    setSelectedOptions({});
    setScore(0);
    setSubmitted(false);
    setShowFeedback(false);
    setNextLevelUnlocked(false);
    setCurrentSet((currentSet % 4) + 1); // Alternate between sets
    setTimeLeft(120); // Reset the timer
    setTimeExpired(false);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-blue-950 to-black min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-sky-200">
        Quiz on Trigonometry
      </h1>
      {!submitted && !timeExpired && (
        <div className="fixed top-4 right-4 bg-blue-950 p-4 rounded-md border border-black shadow-md shadow-sky-300">
          <div className="text-white text-lg font-semibold">
            Time left: {`${Math.floor(timeLeft / 60)}:${timeLeft % 60}`}
          </div>
        </div>
      )}
      {!submitted && !timeExpired && (
        <p className="font-semibold text-white rounded-md keyword-box border border-gray-300 p-4 bg-transparent mx-9">
          There are 5 questions on Trigonometry. You{" "}
          <span className="underline">
            must answer all the questions in a set before submitting.
          </span>
        </p>
      )}
      {!submitted && timeExpired && (
        <div className="flex flex-col items-center justify-center h-full">
          <p className="text-red-500 font-semibold mb-4">
            Time's up! Please take the quiz again.
          </p>
          <button
            onClick={resetQuiz}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Start Again
          </button>
        </div>
      )}
      {!submitted && !timeExpired ? (
        <div className="p-8 h-full">
          <div className="h-full">
            {questionSets[currentSet - 1].map((q, index) => (
              <div key={q.id} className="mb-4">
                <div className="bg-gradient-to-b from-gray-400 to-gray-300 shadow-md shadow-white rounded-xl p-4">
                  <p className="mb-2 font-semibold ">{`${index + 1}. ${
                    q.question
                  }`}</p>
                  <ul>
                    {q.options.map((option) => (
                      <li key={option.id} className="mb-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            value={option.id}
                            onChange={() => handleOptionSelect(q.id, option.id)}
                            className="mr-2"
                            checked={selectedOptions[q.id] === option.id}
                          />
                          {option.text}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            <div className="flex justify-center w-full mt-4">
              <button
                onClick={() => handleSubmit(false)}
                className="bg-blue-700 text-black font-semibold px-4 py-2 rounded"
                disabled={submitted}
              >
                Submit
              </button>
            </div>
            {showFeedback && (
              <div className="mt-4">
                <p className="text-green-500 text-2xl">Score: {score}/5</p>
              </div>
            )}
          </div>
        </div>
      ) : null}
      {submitted && !timeExpired && (
        <div className="mt-4 w-full h-full overflow-y-auto">
          <h3 className="text-2xl font-bold mb-2 text-center text-white ">
            Answer Sheet -{" "}
            <span className="text-2xl text-sky-300 font-semibold underline">
              Score: {score}/5
            </span>
          </h3>
          <div className="mb-4" style={{ margin: "20px" }}>
            {questionSets[currentSet - 1].map((q, index) => (
              <div key={q.id} className="mb-2 ml-10 mr-10">
                <div
                  className={`bg-gradient-to-b from-gray-300 to-gray-200 shadow-lg shadow-white rounded-lg p-4 ${
                    selectedOptions[q.id] === q.correctOption
                      ? "border-green-500 border-2"
                      : "border-red-500 border-2"
                  }`}
                >
                  <p className="mb-1 text-blue-800 font-medium">
                    Question: {`${index + 1}. ${q.question}`}
                  </p>
                  <p
                    className={`mb-1 font-semibold ${
                      selectedOptions[q.id] === q.correctOption
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    Your Answer: {getOptionText(q, selectedOptions[q.id])}
                  </p>
                  <p className="font-semibold">
                    Correct Answer: {getOptionText(q, q.correctOption)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 flex justify-center p-2 space-x-4">
            <button
              onClick={() => {
                resetQuiz();
              }}
              className="bg-blue-700 text-black font-semibold px-4 py-2 rounded mt-4"
            >
              Take Quiz Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

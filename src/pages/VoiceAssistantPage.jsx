// import React, { useState, useEffect, useRef } from "react";
// import imagesPath from "../data/imagesPath.json";
// import "../index.css";

// const VoiceAssistantPage = () => {
//   const [userInput, setUserInput] = useState("");
//   const [selectedTextPosition, setSelectedTextPosition] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [realTimeMessages, setRealTimeMessages] = useState([]);
//   const [selectedText, setSelectedText] = useState("");
//   const [aiResponses, setAiResponses] = useState([]);
//   const [chatId, setChatId] = useState("");
//   const [callId, setCallId] = useState("");
//   const [selectedChatbot, setSelectedChatbot] = useState("");

//   const fileId = "unique-file-id-1";

//   const chatbotNames = ["Chatbot 1", "Chatbot 2", "Chatbot 3"]; // Hardcoded values

//   useEffect(() => {
//     let eventSource;

//     const fetchMessages = () => {
//       eventSource = new EventSource(
//         `https://aiagents.cybergen.com/messages?chat_id=${chatId}`
//       );

//       eventSource.onmessage = (event) => {
//         const messageData = JSON.parse(event.data);
//         setRealTimeMessages((prevMessages) => [...prevMessages, messageData]);
//       };

//       eventSource.onerror = (event) => {
//         console.error("EventSource error:", event);
//       };
//     };

//     fetchMessages();

//     return () => {
//       if (eventSource) {
//         eventSource.close();
//       }
//     };
//   }, [chatId]);

//   useEffect(() => {
//     const handleSelectionChange = () => {
//       const selection = window.getSelection();

//       if (selection && selection.toString().length > 0) {
//         const selectedElement = selection.anchorNode.parentElement;

//         if (
//           selectedElement &&
//           selectedElement.classList.contains("selectable-text")
//         ) {
//           const container = selectedElement.closest(".relative");

//           if (container) {
//             const containerRect = container.getBoundingClientRect();

//             setSelectedTextPosition({
//               top: containerRect.bottom + window.scrollY - 17,
//               left: containerRect.left + containerRect.width / 2 - 5,
//             });

//             const selectedText = selection.toString();
//             setSelectedText(selectedText);
//           }
//         }
//       } else {
//         setSelectedTextPosition(null);
//         setSelectedText("");
//       }
//     };

//     document.addEventListener("selectionchange", handleSelectionChange);

//     return () => {
//       document.removeEventListener("selectionchange", handleSelectionChange);
//     };
//   }, []);

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   const handleSend = () => {
//     if (userInput.trim()) {
//       const newMessage = {
//         id: realTimeMessages.length + 1,
//         sender: "User",
//         text: userInput,
//         dateTimeStamp: new Date().toISOString(),
//       };

//       setRealTimeMessages((prevMessages) => [...prevMessages, newMessage]);

//       setAiResponses((prevResponses) => [
//         ...prevResponses,
//         { text: userInput, sender: "User" },
//       ]);

//       fetch(
//         `https://aiagents.cybergen.com/ai-response?query=${encodeURIComponent(
//           userInput
//         )}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setAiResponses((prevResponses) => [
//             ...prevResponses,
//             { text: data.response, sender: "AI" },
//           ]);
//         })
//         .catch((error) => console.error("Error fetching AI response:", error));

//       setUserInput("");
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   const handleAskAI = () => {
//     if (selectedText) {
//       fetch(
//         `https://aiagents.cybergen.com/ai-response?query=${encodeURIComponent(
//           selectedText
//         )}`,
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setAiResponses((prevResponses) => [
//             ...prevResponses,
//             { text: data.response, sender: "AI" },
//           ]);
//         })
//         .catch((error) => console.error("Error fetching AI response:", error));
//     }
//   };

//   const handleConnect = () => {
//     setChatId(callId);
//     setRealTimeMessages([]);
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div className="flex items-center justify-center bg-blue-600 text-white p-4 shadow-md">
//         <img src={imagesPath.Chat.logo} alt="Logo" className="w- h-24 mr-4" />
//         <h1 className="text-xl font-semibold">Chatbot</h1>
//       </div>

//       <div className="flex-1 p-4">
//         <div className="mb-8 mt-4 flex justify-between items-center">
//           <div
//             className="flex items-center rounded-[0.7675rem] p-2"
//             style={{
//               background:
//                 "linear-gradient(270deg, #00B7FE -10.19%, #5823FF 100%)",
//             }}
//           >
//             <img
//               src={imagesPath.Chat.icon}
//               alt="Select Chatbot"
//               className="w-6 h-6 text-white mr-2"
//             />

//             <select
//               value={selectedChatbot}
//               onChange={(e) => setSelectedChatbot(e.target.value)}
//               className="bg-[#82bcff] text-white p-2 rounded-[0.5rem] w-[15rem] placeholder-white mr-2 focus:outline-none"
//             >
//               <option value="" disabled>
//                 Select Chatbot
//               </option>
//               {chatbotNames.map((name, index) => (
//                 <option key={index} value={name}>
//                   {name}
//                 </option>
//               ))}
//             </select>

//             <button
//               className="flex items-center text-white p-2 rounded-[0.7675rem]"
//               style={{
//                 width: "5.60256rem",
//                 height: "2.07219rem",
//                 background:
//                   "linear-gradient(270deg, #00B7FE -10.19%, #5823FF 100%)",
//               }}
//               onClick={handleConnect}
//             >
//               Connect
//             </button>
//           </div>
//         </div>

//         <div
//           className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar"
//           style={{
//             backgroundImage: `url(${imagesPath.Chat.clientBackground})`,
//             backgroundSize: "cover",
//             width: "full",
//             height: "34.0625rem",
//             borderRadius: "0.9375rem",
//           }}
//         >
//           {aiResponses.map((response, index) => (
//             <div
//               key={index}
//               className={`text-[#333232] font-poppins text-base p-4 rounded-lg  ${
//                 response.sender === "User" ? "text-right" : "text-left"
//               }`}
//             >
//               <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
//                 {response.sender === "User" ? "User" : "AI response"}
//               </h3>
//               <div className="relative">
//                 <p className="mt-2 p-8 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal selectable-text">
//                   {response.text}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="relative ml-6 mt-[-10rem]">
//           <div className="relative flex items-center">
//             <input
//               type="text"
//               placeholder="Type your message..."
//               value={userInput}
//               onChange={handleInputChange}
//               onKeyPress={handleKeyPress}
//               className="w-[53.5rem] h-[3.9375rem] flex-shrink-0 rounded-full bg-white p-4 mt-20 shadow mr-4 text-[#333232] font-poppins text-[0.9375rem] font-normal"
//             />

//             <button
//               className="bg-blue-500 text-white rounded-full p-4 mt-20"
//               onClick={handleSend}
//             >
//               <img
//                 src={imagesPath.Chat.sendIcon}
//                 alt="Send"
//                 className="w-6 h-6"
//               />
//             </button>
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <FileNameModal onClose={handleCloseModal} onSave={handleSaveFileName} />
//       )}
//     </div>
//   );
// };

// export default VoiceAssistantPage;

import React, { useState, useEffect } from "react";
import imagesPath from "../data/imagesPath.json";
import "../index.css";

const VoiceAssistantPage = () => {
  const [userInput, setUserInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [realTimeMessages, setRealTimeMessages] = useState([]);
  const [selectedText, setSelectedText] = useState("");
  const [aiResponses, setAiResponses] = useState([]);
  const [chatId, setChatId] = useState("");
  const [selectedChatbot, setSelectedChatbot] = useState("");

  const chatbotOptions = [
    { name: "Chatbot 1", id: "66b22df549cdd1b1e3a410dd" },
    { name: "Chatbot 2", id: "66b5cc18dce6f275a6d220b5" },
  ];

  useEffect(() => {
    let eventSource;

    const fetchMessages = () => {
      if (chatId) {
        eventSource = new EventSource(
          `https://aiagents.cybergen.com/messages?chat_id=${chatId}`
        );

        eventSource.onmessage = (event) => {
          const messageData = JSON.parse(event.data);
          setRealTimeMessages((prevMessages) => [...prevMessages, messageData]);
        };

        eventSource.onerror = (event) => {
          console.error("EventSource error:", event);
        };
      }
    };

    fetchMessages();

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [chatId]);

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSend = () => {
    if (userInput.trim()) {
      const newMessage = {
        id: realTimeMessages.length + 1,
        sender: "User",
        text: userInput,
        dateTimeStamp: new Date().toISOString(),
      };

      setRealTimeMessages((prevMessages) => [...prevMessages, newMessage]);

      setAiResponses((prevResponses) => [
        ...prevResponses,
        { text: userInput, sender: "User" },
      ]);

      fetch(
        `https://aiagents.cybergen.com/ai-response?query=${encodeURIComponent(
          userInput
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setAiResponses((prevResponses) => [
            ...prevResponses,
            { text: data.response, sender: "AI" },
          ]);
        })
        .catch((error) => console.error("Error fetching AI response:", error));

      setUserInput("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const handleAskAI = () => {
    if (selectedText) {
      fetch(
        `https://aiagents.cybergen.com/ai-response?query=${encodeURIComponent(
          selectedText
        )}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setAiResponses((prevResponses) => [
            ...prevResponses,
            { text: data.response, sender: "AI" },
          ]);
        })
        .catch((error) => console.error("Error fetching AI response:", error));
    }
  };

  const handleConnect = () => {
    setRealTimeMessages([]);
  };

  const handleChatbotChange = (e) => {
    const selectedOption = chatbotOptions.find(
      (bot) => bot.name === e.target.value
    );
    setSelectedChatbot(e.target.value);
    setChatId(selectedOption ? selectedOption.id : "");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-between bg-blue-600 text-white p-4 shadow-md">
        <div className="flex items-center">
          <img
            src={imagesPath.Chat.logo}
            alt="Logo"
            className="w-36 h-24 mr-4"
          />
          <h1 className="text-xl font-semibold">Cybergen Chatbot</h1>
        </div>
        <div
          className="flex items-center p-4 rounded-md"
          style={{
            height: "7vh",
            width: "20vw",
            background:
              "linear-gradient(270deg, #00B7FE -10.19%, #5823FF 100%)",
          }}
        >
          <select
            value={selectedChatbot}
            onChange={handleChatbotChange}
            className="bg-[#82bcff] text-white p-2 rounded-[0.5rem] w-[15rem] placeholder-white mr-2 focus:outline-none"
          >
            <option value="" disabled>
              Select Chatbot
            </option>
            {chatbotOptions.map((bot) => (
              <option key={bot.id} value={bot.name}>
                {bot.name}
              </option>
            ))}
          </select>
          <button
            className="flex items-center text-white p-2 rounded-[0.7675rem]"
            style={{
              width: "5.60256rem",
              height: "2.07219rem",
              background:
                "linear-gradient(270deg, #00B7FE -10.19%, #5823FF 100%)",
            }}
            onClick={handleConnect}
          >
            Connect
          </button>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div
          className="relative bg-white shadow-md p-8 overflow-auto custom-scrollbar"
          style={{
            backgroundImage: `url(${imagesPath.Chat.clientBackground})`,
            backgroundSize: "cover",
            width: "full",
            height: "40.0625rem",
            borderRadius: "0.9375rem",
          }}
        >
          {aiResponses.map((response, index) => (
            <div
              key={index}
              className={`text-[#333232] font-poppins text-base p-4 rounded-lg  ${
                response.sender === "User" ? "text-right" : "text-left"
              }`}
            >
              <h3 className="text-customBlue font-poppins text-[1.12625rem] font-semibold leading-normal">
                {response.sender === "User" ? "User" : "AI response"}
              </h3>
              <div className="relative">
                <p className="mt-2 p-8 bg-white rounded-lg shadow text-[#333232] font-poppins text-[0.9375rem] font-normal selectable-text">
                  {response.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative ml-6 mt-[-10rem]">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="w-[90vw] h-[3.9375rem] flex-shrink-0 rounded-full bg-white p-4 mt-20 shadow mr-4 text-[#333232] font-poppins text-[0.9375rem] font-normal"
            />

            <button
              className="bg-blue-500 text-white rounded-full p-4 mt-20"
              onClick={handleSend}
            >
              <img
                src={imagesPath.Chat.sendIcon}
                alt="Send"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <FileNameModal onClose={handleCloseModal} onSave={handleSaveFileName} />
      )}
    </div>
  );
};

export default VoiceAssistantPage;

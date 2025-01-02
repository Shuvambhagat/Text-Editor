// import React, { useState } from "react";

// export default function TextForm(props) {
//   const [text, setText] = useState("Enter the text here");
//   // const [count, setCount] = useState(0);
//   const [font, setFont] = useState("Arial");
//   const [color, setColor] = useState("Black");
//   const [fontSize, setFontSize] = useState("16px");

//   const handleUppercase = () => {
//     setText(text.toUpperCase());
//   };

//   const handleLowercase = () => {
//     setText(text.toLowerCase());
//   };

//   const handleChange = (event) => {
//     setText(event.target.value);
//   };

//   const handleClear = () => {
//     setText("");
//   };

//   // const handleIncrement = () => {
//   //   setCount(count + 1);
//   // };

//   // const handleDecrement = () => {
//   //   setCount(count - 1);
//   // };

//   const handleFontChange = (event) => {
//     setFont(event.target.value);
//   };

//   const handleColorChange = (event) => {
//     setColor(event.target.value);
//   };

//   const handleFontSizeChange = (event) => {
//     const sizeMapping = {
//       small: "12px",
//       medium: "16px",
//       large: "20px",
//       xlarge: "24px",
//     };
//     setFontSize(sizeMapping[event.target.value]);
//   };

//   return (
//     <>
//       <div>
//         <h1>{props.heading || "Default Heading"}</h1>
//         <div className="mb-3">
//           <label htmlFor="exampleFormControlTextarea1" className="form-label">
//             Enter the Text
//           </label>
//           <textarea
//             value={text}
//             onChange={handleChange}
//             className="form-control"
//             id="exampleFormControlTextarea1"
//             placeholder="Enter the text"
//             style={{
//               height: "120px",
//               fontSize: fontSize,
//               resize: "none",
//               borderColor: "black",
//               fontFamily: font,
//               color: color,
//             }}
//           />
//         </div>
//         <div className="m-3" style={{ fontFamily: font }}>
        
//         <h2>Text Analysis Results</h2>
//         <p style={{fontFamily:"-moz-initial",borderColor:"black" }}>{text.split(' ').length} words and {text.length} characters</p>
       
//         {/* <p>Count: {count}</p> */}
        
//       </div>
//         <div>
//           <label htmlFor="fontSelect" className="form-label m-2">
//             Select Font:
//           </label>
//           <select
//             id="fontSelect"
//             className="form-select"
//             value={font}
//             onChange={handleFontChange}
//           >
//             <option value="Arial">Arial</option>
//             <option value="Verdana">Verdana</option>
//             <option value="Helvetica">Helvetica</option>
//             <option value="Times New Roman">Times New Roman</option>
//             <option value="Georgia">Georgia</option>
//             <option value="Courier New">Courier New</option>
//             <option value="Comic Sans MS">Comic Sans MS</option>
//             <option value="Poppins">Poppins</option>
//             <option value="Roboto">Roboto</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="fontSizeSelect" className="form-label m-2">
//             Select Font Size:
//           </label>
//           <select
//             id="fontSizeSelect"
//             className="form-select"
//             onChange={handleFontSizeChange}
//           >
//             <option value="small">Small</option>
//             <option value="medium">Medium</option>
//             <option value="large">Large</option>
//             <option value="xlarge">Extra Large</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="Colorselect" className="form-label m-2">
//             Select Text Color:
//           </label>
//           <select
//             id="Colorselect"
//             className="form-select"
//             value={color}
//             onChange={handleColorChange}
//           >
//             <option value="Red" style={{ color: "red" }}>
//               Red
//             </option>
//             <option value="Blue" style={{ color: "blue" }}>
//               Blue
//             </option>
//             <option value="Green" style={{ color: "green" }}>
//               Green
//             </option>
//             <option value="Pink" style={{ color: "pink" }}>
//               Pink
//             </option>
//             <option value="Black" style={{ color: "black" }}>
//               Black
//             </option>
//           </select>
//         </div>
//       </div>
//       <div className="m-3">
//         <button className="btn btn-primary mx-3" onClick={handleUppercase}>
//           Convert to Uppercase
//         </button>

//         <button className="btn btn-primary mx-1" onClick={handleLowercase}>
//           Convert to Lowercase
//         </button>

//         {/* <button className="btn btn-primary mx-1" onClick={handleIncrement}>
//           Increment
//         </button>

//         <button className="btn btn-primary mx-1" onClick={handleDecrement}>
//           Decrement
//         </button> */}

//         <button className="btn btn-danger mx-1" onClick={handleClear}>
//           Clear
//         </button>
//       </div>
      
//       <div>
//         {text}
//       </div>
//     </>
//   );
// }


import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");
  const [font, setFont] = useState("Arial");
  const [color, setColor] = useState("Black");
  const [fontSize, setFontSize] = useState("16px");

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText("");
  };

  const handleFontChange = (event) => {
    setFont(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleFontSizeChange = (event) => {
    const sizeMapping = {
      small: "12px",
      medium: "16px",
      large: "20px",
      xlarge: "24px",
    };
    setFontSize(sizeMapping[event.target.value]);
  };

  return (
    <>
      <div>
        <h1>{props.heading || "Default Heading"}</h1>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Enter the Text
          </label>
          <textarea
            value={text}
            onChange={handleChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Enter the text"
            style={{
              height: "120px",
              fontSize: fontSize,
              resize: "none",
              borderColor: "black",
              fontFamily: font,
              color: color,
            }}
          />
        </div>
        <div className="m-3" style={{ fontFamily: font }}>
          <h2>Text Analysis Results</h2>
          <p
            style={{
              fontFamily: "inherit",
              borderColor: "black",
            }}
          >
            {text.split(" ").filter((word) => word).length} words and {text.length} characters
          </p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="fontSelect" className="form-label m-2">
            Select Font:
          </label>
          <select
            id="fontSelect"
            className="form-select"
            value={font}
            onChange={handleFontChange}
          >
            <option value="Arial">Arial</option>
            <option value="Verdana">Verdana</option>
            <option value="Helvetica">Helvetica</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Georgia">Georgia</option>
            <option value="Courier New">Courier New</option>
            <option value="Comic Sans MS">Comic Sans MS</option>
            <option value="Poppins">Poppins</option>
            <option value="Roboto">Roboto</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="fontSizeSelect" className="form-label m-2">
            Select Font Size:
          </label>
          <select
            id="fontSizeSelect"
            className="form-select"
            onChange={handleFontSizeChange}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xlarge">Extra Large</option>
          </select>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="Colorselect" className="form-label m-2">
            Select Text Color:
          </label>
          <select
            id="Colorselect"
            className="form-select"
            value={color}
            onChange={handleColorChange}
          >
            <option value="Red" style={{ color: "red" }}>
              Red
            </option>
            <option value="Blue" style={{ color: "blue" }}>
              Blue
            </option>
            <option value="Green" style={{ color: "green" }}>
              Green
            </option>
            <option value="Pink" style={{ color: "pink" }}>
              Pink
            </option>
            <option value="Black" style={{ color: "black" }}>
              Black
            </option>
          </select>
        </div>
      </div>
      <div className="m-3">
        <button className="btn btn-primary mx-3" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div>{text}</div>
    </>
  );
}

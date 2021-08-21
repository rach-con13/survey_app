// import React, { useState } from "react";
// import "./multipleOptions.scss";
// import RadioField from "./RadioField/radioField";

// export default function MultipleChoice({ register, value }) {
//   const [options, setOptions] = useState([
//     {
//       value: "Option 1",
//       id: "option-1",
//     },
//     {
//       value: "Option 2",
//       id: "option-2",
//     },
//   ]);

//   const addNewOption = () => {
//     const newOption = {
//       value: `Option ${options.length + 1}`,
//       id: `option-${options.length + 1}`,
//     };
//     let updatedOptions = [...options, { ...newOption }];
//     setOptions(updatedOptions);
//   };
//   return (
//     <div className="container">
//       <div id="radioGroup" className="radio__group">
//         {options.map((option) => {
//           console.log(option.value);
//           return (
//             <RadioField
//               register={register("radio-option")}
//               key={option.id}
//               value={option.value}
//               id={option.id}
//               name="radio-option"
//             >
//               {/* <input
//                 {...register("radio-name")}
//                 value={option.value}
//                 className="radio__name"
//               /> */}
//             </RadioField>
//           );
//         })}
//         <p
//           onClick={addNewOption}
//           style={{ textAlign: "left", marginTop: "0.8rem", fontSize: "0.8rem" }}
//         >
//           Add Option
//         </p>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

function MotusGame() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [words, setWords] = useState([]);
  const [columns, setColumns] = useState([]);

  // let difficulte = [6, 7, 8, 9, 10];

  useEffect(() => {
    fetch("https://trouve-mot.fr/api/size/6/1 ")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWords(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  // useEffect(() => {
  //   if (words) {
  //     setColumns(words[0].name.split(""));
  //   }
  // }, [words]);

  console.log(words);
  console.log(columns);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <table className="t-style">
        <caption>
          <h1>{words[0].name}</h1>
        </caption>
        <tbody>
          {/* <tr>
            {columns.map((_, index) => (
              <td key={index}>.</td>
            ))}
          </tr> */}
          <tr id="ligne-0">
            <td id="position-00" className="indices">
              {words[0].name[0]}
            </td>
            <td id="position-01" className="indices"></td>
            <td id="position-02" className="indices"></td>
            <td id="position-03" className="indices"></td>
            <td id="position-04" className="indices"></td>
            <td id="position-05" className="indices"></td>
          </tr>
          <tr id="ligne-1">
            <td id="position-10" className="indices"></td>
            <td id="position-11" className="indices"></td>
            <td id="position-12" className="indices"></td>
            <td id="position-13" className="indices"></td>
            <td id="position-14" className="indices"></td>
            <td id="position-15" className="indices"></td>
          </tr>

          <tr id="ligne-2">
            <td id="position-20" className="indices"></td>
            <td id="position-21" className="indices"></td>
            <td id="position-22" className="indices"></td>
            <td id="position-23" className="indices"></td>
            <td id="position-24" className="indices"></td>
            <td id="position-25" className="indices"></td>
          </tr>
          <tr id="ligne-3">
            <td id="position-30" className="indices"></td>
            <td id="position-31" className="indices"></td>
            <td id="position-32" className="indices"></td>
            <td id="position-33" className="indices"></td>
            <td id="position-34" className="indices"></td>
            <td id="position-35" className="indices"></td>
          </tr>
          <tr id="ligne-4">
            <td id="position-40" className="indices"></td>
            <td id="position-41" className="indices"></td>
            <td id="position-42" className="indices"></td>
            <td id="position-43" className="indices"></td>
            <td id="position-44" className="indices"></td>
            <td id="position-45" className="indices"></td>
          </tr>
          <tr id="ligne-5">
            <td id="position-50" className="indices"></td>
            <td id="position-51" className="indices"></td>
            <td id="position-52" className="indices"></td>
            <td id="position-53" className="indices"></td>
            <td id="position-54" className="indices"></td>
            <td id="position-55" className="indices"></td>
          </tr>
          <tr></tr>
        </tbody>
      </table>
    );
  }
}

export default MotusGame;

// <---------------------------------- ---------------------------------------------->

// import React, { useState, useEffect } from "react";

// function MotusGame() {
//   const [word, setWord] = useState("");
//   const [columns, setColumns] = useState([]);

//   useEffect(() => {
//     // Simuler l'appel à l'API pour obtenir le mot
//     const fetchWord = async () => {
//       const response = await fetch("https://trouve-mot.fr/api/size/6/1");
//       const data = await response.json();
//       setWord(data);
//     };

//     fetchWord();
//   }, []);

//   console.log(word);

//   useEffect(() => {
//     if (word) {
//       setColumns(Array(word.length).fill(""));
//     }
//   }, [word]);

//   return (
//     <div>
//       <h1>Motus</h1>
//       <div className="grid">
//         {columns.map((_, index) => (
//           <div key={index} className="column">
//             <tr>
//               <td>{word[0].name}</td>
//               <td>{word[0].name}</td>
//               <td>{word[0].name}</td>
//               <td>{word[0].name}</td>
//               <td>{word[0].name}</td>
//             </tr>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MotusGame;

// <------------------------------------------------------------------------------------>

// import { useState, useEffect } from "react";

// const MotusGame = () => {
//   const [wordToGuess, setWordToGuess] = useState("");
//   const [attempts, setAttempts] = useState(6);
//   const [guess, setGuess] = useState("");
//   const [grid, setGrid] = useState(
//     Array(6)
//       .fill("")
//       .map(() => Array(5).fill(""))
//   );

//   console.log(wordToGuess);
//   console.log(attempts);
//   console.log(guess);
//   console.log(grid);

//   useEffect(() => {
//     fetchWord();
//   }, []);

//   const fetchWord = async () => {
//     try {
//       const response = await fetch("https://trouve-mot.fr/api/size/6/1"); // Remplace par l'URL de ton API
//       const data = await response.json();
//       setWordToGuess(data);
//     } catch (error) {
//       console.error("Erreur lors de la récupération du mot:", error);
//     }
//   };

//   const handleChange = (e) => {
//     setGuess(e.target.value);
//   };

//   const checkGuess = () => {
//     if (guess.length !== wordToGuess.length) {
//       alert(`Le mot doit avoir ${wordToGuess.length} lettres.`);
//       return;
//     }

//     const newGrid = [...grid];
//     const rowIndex = 6 - attempts;
//     for (let i = 0; i < wordToGuess.length; i++) {
//       if (guess[i] === wordToGuess[i]) {
//         newGrid[rowIndex][i] = { letter: guess[i], status: "correct" };
//       } else if (wordToGuess.includes(guess[i])) {
//         newGrid[rowIndex][i] = { letter: guess[i], status: "misplaced" };
//       } else {
//         newGrid[rowIndex][i] = { letter: guess[i], status: "incorrect" };
//       }
//     }

//     setGrid(newGrid);
//     setAttempts(attempts - 1);

//     if (guess === wordToGuess) {
//       alert("Félicitations ! Vous avez trouvé le mot !");
//     } else if (attempts === 1) {
//       alert(`Dommage ! Le mot était : ${wordToGuess}`);
//     }

//     setGuess("");
//   };

//   return (
//     <div className="App">
//       <div className="grid">
//         {grid.map((row, rowIndex) => (
//           <div key={rowIndex} className="row">
//             {row.map((cell, cellIndex) => (
//               <div key={cellIndex} className={`cell ${cell.status}`}>
//                 {cell.letter}
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//       <input
//         type="text"
//         value={guess}
//         onChange={handleChange}
//         maxLength={wordToGuess.length}
//       />
//       <button onClick={checkGuess}>Vérifier</button>
//     </div>
//   );
// };

// export default MotusGame;

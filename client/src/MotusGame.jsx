import { useState, useEffect } from "react";

function MotusGame() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [words, setWords] = useState([]);
  const [columns, setColumns] = useState([]);
  const [key, setKey] = useState([]);

  useEffect(() => {
    fetch("https://trouve-mot.fr/api/size/8/1 ")
      .then((response) => response.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setWords(result);
          setColumns(result[0].name.split(""));
          console.log(result);
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
  console.log(key);

  function handleKeyDown(event) {
    setKey(event.key);
    console.log(event.key);
  }
  // useEffect(() => {
  //   let td = document.querySelectorAll("td");
  //    cellules.forEach((td) => {
  //      td.tabIndex = "0";
  //    });
  // }, []);

  if (error) {
    return <div>Erreur : {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Chargement...</div>;
  } else {
    return (
      <table className="t-style" onKeyDown={handleKeyDown}>
        <caption>
          <h1>{words[0].name}</h1>
        </caption>
        <tbody>
          {
            <tr>
              {columns.map((td, index) => {
                if (columns[index] == key) {
                  return (
                    <td
                      key={index}
                      tabIndex={index}
                      style={{ background: "red" }}
                    >
                      {columns[index]}
                    </td>
                  );
                } else if (columns[index] !== key) {
                  return (
                    <td key={index} tabIndex={index}>
                      .
                    </td>
                  );
                } else if (words[0].name !== key) {
                  return (
                    <td
                      key={index}
                      tabIndex={index}
                      style={{ background: "yellow" }}
                    ></td>
                  );
                }
              })}
            </tr>
          }
          {/* <tr id="ligne-0">
            <td id="position-00" className="indices">
              {key}
            </td>
            <td id="position-01" className="indices">
              {key[0]}
            </td>
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
          </tr> */}
        </tbody>
      </table>
    );
  }
}

export default MotusGame;

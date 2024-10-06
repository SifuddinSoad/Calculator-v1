import styles from "./Calcontainer.module.css";
import Button from "./Button";
import { useState } from "react";

const Calcontainer = () => {
  let val = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "7",
    "8",
    "*",
    "0",
    "9",
    "=",
    ".",
  ];
  let [calVal, setCalVal] = useState("");
  const onClickHandle = (buttonName) => {
    if (buttonName === "C") {
      setCalVal("");
    } else if (buttonName === "=") {
      try {
        let result = eval(calVal);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      setCalVal(calVal + buttonName);
    }
  };

  return (
    <>
      <div className={styles.Calcontainer}>
        <input type="text" className={styles.Input} value={calVal} readOnly />
        <div className={styles.btncontainer}>
          {val.map((buttonName) => (
            <Button
              key={buttonName}
              buttonName={buttonName}
              onClickHandle={onClickHandle}
            ></Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Calcontainer;

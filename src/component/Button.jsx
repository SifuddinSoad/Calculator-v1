import styles from "./Button.module.css";
import "./Button.css";
const Button = ({ buttonName, onClickHandle }) => {
  return (
    <div className={styles.buttoncont}>
      <button
        type="button"
        className="btn btn-dark"
        id="btnstyle"
        onClick={() => onClickHandle(buttonName)}
      >
        {buttonName}
      </button>
    </div>
  );
};
export default Button;

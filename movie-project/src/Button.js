import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text }) {
  return <button className={styles.btn}>{text}</button>;
} // style을 개별 적용 하기 위함

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
// App.js 에서 Button을 가져오게끔 하기 위함

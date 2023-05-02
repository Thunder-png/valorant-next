// components/FontAwesomeIcon.js
import { FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const FontAwesomeIcon = (props) => <FAIcon {...props} />;

export default FontAwesomeIcon;

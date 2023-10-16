import { Button as AntButton } from "antd";
import * as PropTypes from "prop-types";

interface ButtonProps {
  onClick: () => void;
  text: string;
  type: "link" | "text" | "primary" | "default" | "dashed" | undefined;
  isLoading: boolean;
  disabled: boolean;
  htmlType: "button" | "submit";
}

const Button = ({
  onClick,
  text,
  type,
  isLoading,
  disabled,
  htmlType,
  ...rest
}: ButtonProps) => (
  <AntButton
    type={type}
    onClick={onClick}
    disabled={disabled}
    loading={isLoading}
    htmlType={htmlType}
    {...rest}
  >
    {text}
  </AntButton>
);
Button.defaultProps = {
  onClick: () => {},
  text: "no text",
  type: "primary",
  disabled: false,
  isLoading: false,
  htmlType: "button",
  additionalProps: {},
};
Button.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  htmlType: PropTypes.string,
  additionalProps: PropTypes.shape({}),
};
export default Button;

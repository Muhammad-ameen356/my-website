import PropTypes from "prop-types";
import {
  DeleteOutlined,
  EditOutlined,
  ShoppingOutlined,
  RightCircleFilled,
  BarChartOutlined,
  UserAddOutlined,
  FileDoneOutlined,
  PieChartFilled,
  CheckOutlined,
  WarningOutlined,
  CloseCircleFilled,
  EyeOutlined,
  DownloadOutlined,
  CloseOutlined,
  MinusCircleOutlined,
  PlusOutlined,
  UploadOutlined,
  UserOutlined,
  LockOutlined,
  DownOutlined,
  LogoutOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";

interface Props {
  name: string;
  classname: string;
  tooltipText: string;
}

const CustomIcon = ({ name, classname, tooltipText, ...rest }: Props) => {
  const IconType = {
    DeleteOutlined,
    EditOutlined,
    FileDoneOutlined,
    ShoppingOutlined,
    RightCircleFilled,
    BarChartOutlined,
    UserAddOutlined,
    PieChartFilled,
    CheckOutlined,
    WarningOutlined,
    CloseCircleFilled,
    EyeOutlined,
    DownloadOutlined,
    CloseOutlined,
    MinusCircleOutlined,
    PlusOutlined,
    UploadOutlined,
    UserOutlined,
    LockOutlined,
    DownOutlined,
    LogoutOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    SmileOutlined,
  };

  const GenericComponent = IconType[name as keyof typeof IconType];
  return (
    <Tooltip title={tooltipText}>
      <GenericComponent className={classname} {...rest} />
    </Tooltip>
  );
};

CustomIcon.defaultProps = {
  name: "EditOutlined",
  classname: "",
  additionalProps: {},
  tooltipText: "",
};

CustomIcon.propTypes = {
  name: PropTypes.string,
  classname: PropTypes.string,
  additionalProps: PropTypes.shape({}),
  tooltipText: PropTypes.string,
};

export default CustomIcon;

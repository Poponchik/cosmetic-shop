import React from "react";

const messageBarStyle = {
  position: "absolute",
  fontWeight: "700",
  borderRadius: "8px",
  padding: "20px",
  color: "white",
  backgroundColor: "white",
  boxShadow:" 0px 3px 16px rgba(0, 0, 0, 0.1)",
  marginTop: "80px",
  zIndex: '100000',
  display: "flex",
  justifyContent: "space-between",
}  as React.CSSProperties;;

const messageType = {
  success: "white",
  danger: "red",
  backgroundColor: "white",

};

const closeButtonStyle = {
  marginLeft: "15px",
  color: "black",
  fontWeight: "bold",
  fontSize: "22px",
  lineHeight: "20px",
  cursor: "pointer",
};

interface Message {
  type?: any;
  content?: any;
  deleteFlash?: any;
}

const Message = ({ type, content, deleteFlash } : Message) => {
  const style = { ...messageBarStyle, backgroundColor: messageType[type] };
  return (
    <div style={style}>
      {content}
      <span style={closeButtonStyle} onClick={deleteFlash}>
        &times;
      </span>
    </div>
  );
};

export default Message;

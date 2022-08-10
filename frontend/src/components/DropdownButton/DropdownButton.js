import React from "react";
import DropdownItem from "./DropdownItem";
const sampleData = new Array(7).fill("item name");
const DropdownButton = () => {
  const [open, setOpen] = React.useState(false);
  const drop = React.useRef(null);
  function handleClick(e) {
    if (!e.target.closest(`.${drop.current.className}`) && open) {
      setOpen(false);
    }
  }
  React.useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div
      className="dropdown"
      ref={drop}
      style={{
        position: "relative",
        margin: "16px",
        width: "auto",
        display: "inline-block"
      }}
    >
      <div
        className="dropdown-button"
        onClick={() => setOpen(open => !open)}
      >
        &#9776;  Menu
      </div>
      {open && <DropdownItem data={sampleData} setOpen={setOpen} />}
    </div>
  );
};

export default DropdownButton;

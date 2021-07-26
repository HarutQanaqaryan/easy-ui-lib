import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
  tableContainer: {
    display: "inline-block",
    width: "100%",
    maxWidth: "520px"
  },
  table: {
    display: "inline-block",
    maxHeight: "400px",
    backgroundColor: "#fff",
    flexDirection: "column",
    overflow: "auto",
    "&::-webkit-scrollbar": {
      width: "5px",
      height: "7px"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#1DD4CE",
      borderRadius: "10px"
    },
    "&::-webkit-scrollbar-track": {
      border: "5px solid white",
      backgroundColor: "#fff"
    }
  },
  tableHead: {
    width: "fit-content",
    display: "flex",
    flexDirection: "column",
    fontSize: "15px",
    fontWeight: "500"
  },
  tableBody: props => ({
    width: "fit-content",
    display: "flex",
    justifyContent: "space-evenly",
    flexDirection: "column",
    fontSize: props.tablesSize === "small" ? "14px" : "15px"
  }),
  tableRow: props => ({
    display: "flex",
    flexDirection: "row",
    height: props.tablesSize === "small" ? "13px" : "48px",
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: "10px",
    borderBottom: "1px solid #2C3E50",
    "&:hover": {
      backgroundColor: props.hover ? "#c1e9e8" : ""
    },
    backgroundColor: props.selected ? "#1DD4CE" : ""
  }),
  tableCell: {
    width: "80px",
    textAlign: "center",
    minWidth: "80px",
    height: "20px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    padding: "7px"
  },
  tableFooter: {
    display: "flex",
    height: "50px",
    backgroundColor: "white"
  },
  tablePagination: {
    borderBottom: "0.50px solid #2C3E50",
    width: "491px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  rowCountWrapper: {
    width: "200px",
    display: "flex",
    justifyContent: "space-evenly"
  },
  iconWrapper: {
    width: "70px"
  },
  ripple: {
    marginRight: "10px",
    cursor: "pointer",
    borderRadius: "50%",
    backgroundPosition: "center",
    transition: "background 0.8s",
    "&:hover": {
      fill: "#1DD4CE"
    },
    "&:active": {
      backgroundColor: "white",
      backgroundSize: "100%",
      transition: "background 0s"
    }
  }
});
export default useStyles;
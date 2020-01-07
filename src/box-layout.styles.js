const styles = theme => {
  return {
    layout_root: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: "25px"
    },
    ratingContainer: {
      fontWeight: "500",
      color: "#488581",
      display: "grid",
      width: "550px"
    },
    gridback: {
      background:
        "linear-gradient(148deg, #ffffff 30%, #d9dcdb 60%, #dcdcdc 87%)",
      padding: "12px 0px",
      color: "#000000",
      textAlign: "center"
    },

    RemoveMargin: {
      margin: "0!important"
    },
    kioskDoor: {
      cursor: "pointer"
    },

    "@media only screen and (min-width: 1024px) and (max-width:1440px) and (orientation:landscape)": {
      ratingContainer: {
        fontWeight: "500",
        color: "#488581",
        display: "grid",
        width: "400px"
      },
      gridback: {
        background:
          "linear-gradient(148deg, #ffffff 30%, #d9dcdb 60%, #dcdcdc 87%)",
        padding: "9px 0px",
        color: "#000000",
        textAlign: "center"
      },
      RemoveMargin: {
        margin: "0!important"
      },
      kioskDoor: {
        cursor: "pointer"
      },
      "@media only screen and (min-width: 1024px) and (max-width:1440px) and (orientation:landscape)": {
        ratingContainer: {
          fontWeight: "500",
          color: "#488581",
          display: "grid",
          width: "400px"
        },
        gridback: {
          background:
            "linear-gradient(148deg, #ffffff 30%, #d9dcdb 60%, #dcdcdc 87%)",
          padding: "9px 0px",
          color: "#000000",
          textAlign: "center"
        }
      },
      "@media only screen and (min-width:1280px) and (max-width:1366px) and (orientation:landscape)": {
        ratingContainer: {
          fontWeight: "500",
          color: "#488581",
          display: "grid",
          width: "300px"
        },
        gridback: {
          background:
            "linear-gradient(148deg, #ffffff 30%, #d9dcdb 60%, #dcdcdc 87%)",
          padding: "9px 0px",
          color: "#000000",
          textAlign: "center"
        }
      }
    }
  };
};

export default styles;

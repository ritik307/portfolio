// Image
import sidebarbg2 from "../../images/sidebarbg2.jpg";

export const styles = {
    root: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "hidden",
    },
    sidebar: {
      
      width: 400,
      height: "100%",
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.6)),url(${sidebarbg2})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    content: {
      padding: "0px",
      height: "100%",
      backgroundColor: "white",
    },
    overlay: {
      zIndex: 1,
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0,
      visibility: "hidden",
      transition: "opacity .3s ease-out, visibility .3s ease-out",
      backgroundColor: "rgba(0,0,0,.3)",
    },
    dragHandle: {
      zIndex: 1,
      
      position: "fixed",
      top: 0,
      bottom: 0,
    },
};
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html
      as="div"
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* Spinner */}
      <span className="canvas-loader"></span>

      {/* Progress Text */}
      <p
        style={{
          fontSize: 16,
          color: "#F1F1F1",
          fontWeight: 700,
          marginTop: 20,
          textAlign: "center",
        }}
      >
        {progress.toFixed(2)}% Loaded
      </p>
    </Html>
  );
};

export default Loader;








// import { Html, useProgress } from "@react-three/drei";

// const Loader = () => {
//   const { progress } = useProgress();
//   return (
//     <Html center className="text-xl font-normal text-center">
//       {progress}% Loaded
//     </Html>
//   );
// };

// export default Loader;

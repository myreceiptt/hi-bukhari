// External libraries
import React from "react";

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => (
  <div className="grid place-items-center h-screen">
    <h2 className="text-center text-lg font-semibold">{message}</h2>
  </div>
);

export default Loader;

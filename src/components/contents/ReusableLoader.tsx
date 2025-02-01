// External libraries
import React from "react";

interface LoaderProps {
  message: string;
}

const Loader: React.FC<LoaderProps> = ({ message }) => (
  <h2 className="text-left text-sm font-normal text-hitam-judul-body">
    <code className="px-1 py-0.5 rounded font-normal text-hitam-judul-body">
      {message}
    </code>
  </h2>
);

export default Loader;

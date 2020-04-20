import React from "react";

const Loading = Component => {
   return function WihLoadingComponent({ isLoading, ...props }) {
      if (!isLoading) return <Component {...props} />;
      return <p>Loading...</p>;
   };
};

export default Loading;

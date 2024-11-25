import React from "react";

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[500px] w-full drop-shadow-md h-full ">
      <div className="bg-white h-full w-full">{children}</div>
    </div>
  );
};

export default ClientLayout;

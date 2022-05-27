import React, { FC, ReactElement } from "react";

interface HeaderProps {
  title?: string;
}

const Header: FC<HeaderProps> = ({ title = "Header" }): ReactElement => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;

import React, { FC, ReactElement } from "react";

interface FooterProps {
  copysign: string;
}

const Footer: FC<FooterProps> = ({ copysign }): ReactElement => {
  return (
    <footer>
      <small>
        &copy; {copysign} {new Date().getFullYear()}
      </small>
    </footer>
  );
};

export default Footer;

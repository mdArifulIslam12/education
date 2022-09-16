import * as React from "react";
import {
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
        <Link
          to={to}
          {...props}
        >
          <span style={{ color: match ? "#000" : "#fff" }}>{children}</span>
        </Link>
    );
  }
  export default CustomLink
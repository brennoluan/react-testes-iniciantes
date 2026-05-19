import "./sub-heading.style.css";
import { useEffect, useState } from "react";

export function SubHeading({ children }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setDescription("Adicione um novo item");
    }, 500);
  });
  if (!children) return <></>;

  return (
    <div>
      <h2 className="subheading">
        {children}
        {!!description && <p>{description}</p>}
      </h2>
    </div>
  );
}

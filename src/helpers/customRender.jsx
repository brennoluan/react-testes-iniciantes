import { TodoContext } from "../components/TodoProvider/TodoContext.js";
import { render } from "@testing-library/react";

export default function customRender(component, values = {}) {
  return render(<TodoContext.Provider value={values}>{component}</TodoContext.Provider>);
}

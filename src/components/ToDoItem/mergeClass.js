export default function mergeClass(isItemCompleted) {
  const styles = ["todo-item"];
  if (isItemCompleted.completed) {
    styles.push("completed");
  }
  return styles.join(" ");
}

export function renderMessage(list, message) {
  const item = document.createElement("li");
  item.className = "gallery-state";
  item.textContent = message;
  list.replaceChildren(item);
}

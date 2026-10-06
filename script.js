const ex3_elem = document.getElementById("ex3_element");
const drop_zone = document.getElementById("ex3_two");

ex3_elem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

drop_zone.addEventListener("dragover", (e) => {
  e.preventDefault();
});

drop_zone.addEventListener("drop", (e) => {
  e.preventDefault();

  const id = e.dataTransfer.getData("text/plain");
  const dragged_element = document.getElementById(id);

  if (dragged_element) {
    drop_zone.appendChild(dragged_element);
    dragged_element.draggable = false;
    dragged_element.style.cursor = "default";
  }
});

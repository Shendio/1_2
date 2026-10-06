const ex3_elem = document.getElementById("ex3_element");
const drop_zones = [
  document.getElementById("ex3_one"),
  document.getElementById("ex3_two"),
];

ex3_elem.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

drop_zones.forEach((zone) => {
  zone.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  zone.addEventListener("drop", (e) => {
    e.preventDefault();

    const id = e.dataTransfer.getData("text/plain");
    const dragged_element = document.getElementById(id);

    if (dragged_element) {
      zone.appendChild(dragged_element);
    }
  });
});

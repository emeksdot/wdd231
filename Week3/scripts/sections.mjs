export function setSectionSelection(obj) {
  const sectionSelect = document.querySelector("#sectionNumber");
  //   obj.sections.forEach((section) => {
  obj.forEach((section) => {
    const option = document.createElement("option");
    option.value = section.sectionNumber;
    option.textContent = `${section.sectionNumber}`;
    sectionSelect.appendChild(option);
  });
}

// SORT TABLE
const table = document.querySelector("table");
const ths = table.querySelectorAll("th");

for (const th of ths) {
  th.addEventListener("click", () => {
    const dataType = th.classList[1];
    const tbodies = table.querySelectorAll("tbody");

    for (const tbody of tbodies) {
      const rows = tbody.querySelectorAll("tr");

      const rowData = [];
      for (const row of rows) {
        const cell = row.querySelector(`.${dataType}`);
        if (dataType === "year") {
          const year = parseInt(cell.textContent);
          rowData.push({ row, year });
        } else {
          const text = cell.firstElementChild.textContent;
          rowData.push({ row, data: text });
        }
      }

      const ascending = th.classList.contains("asc");
      rowData.sort((a, b) => {
        if (dataType === "year") {
          return ascending ? a.year - b.year : b.year - a.year;
        } else {
          return ascending
            ? a.data.localeCompare(b.data)
            : b.data.localeCompare(a.data);
        }
      });

      const newTbody = document.createElement("tbody");
      for (const { row } of rowData) {
        newTbody.appendChild(row);
      }
      tbody.parentNode.replaceChild(newTbody, tbody);
    }

    th.classList.toggle("asc");
  });
}

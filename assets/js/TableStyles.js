const pageBtn =
  "px-3 py-1 flex items-center border border-gray-300 rounded-lg cursor-pointer";
export default {
  table: {
    tableWrapper: "",
    tableHeaderClass: "bg-navyGray text-sm font-semibold",
    tableBodyClass: "mb-0",
    tableClass: "w-full",
    loadingClass:
      "inline-block w-6 h-6 rounded-full animate-spin border-4 border-solid border-ansGreen border-t-transparent",
    ascendingIcon: "fa fa-chevron-up",
    descendingIcon: "fa fa-chevron-down",
    ascendingClass: "sorted-asc",
    descendingClass: "sorted-desc",
    sortableIcon: "fa fa-sort",
    detailRowClass: "vuetable-detail-row",
    handleIcon: "fa fa-bars text-secondary",
    // eslint-disable-next-line no-unused-vars
    renderIcon(classes, options) {
      return `<i class="${classes.join(" ")}"></span>`;
    },
  },
  pagination: {
    wrapperClass: "font-mulish flex text-xs text-[#8D8D8D] gap-1",
    activeClass: "font-bold border border-oneGreen text-#187A33 bg-[#DEFFDE]",
    disabledClass: "opacity-50 disabled",
    pageClass: pageBtn,
    linkClass: pageBtn,
    paginationClass: "pagination",
    paginationInfoClass: "float-left",
    dropdownClass: "form-control",
    icons: {
      first: "icons icons-left-arrow",
      prev: "icons icons-left-angle",
      next: "icons icons-right-angle",
      last: "icons icons-right-arrow",
    },
  },
};

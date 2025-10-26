export const toggleSidebar = () => {
  const root = document.getElementById("root");
  if (root) {
    root.classList.toggle("showSidebar");
  }
};

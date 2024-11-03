document.addEventListener('DOMContentLoaded', () => {
  const stocksData = JSON.parse(stockContent);
  const userData = JSON.parse(userContent);
  const deleteButton = document.querySelector ('#btnDelete');
  const saveButton = document.querySelector ('#btnSave');
  generateUserList(userData, stocksData);
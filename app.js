document.addEventListener('DOMContentLoaded', () => {
  const stocksData = JSON.parse(stockContent);
  const userData = JSON.parse(userContent);
  const deleteButton = document.querySelector ('#btnDelete');
  const saveButton = document.querySelector ('#btnSave');
  generateUserList(userData, stocksData);
  
  deleteButton.addEventListener('click', (event) => {
    event.preventDefault();
    const userId = document.querySelector('#userID').value;
    const userIndex = userData.findIndex(user => user.id == userId);
    userData.splice(userIndex, 1);
    generateUserList(userData, stocksData);
});
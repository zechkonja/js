// Storage Controller
const StorageCtrl = (function () {

  // Public methods
  return {
    storeItem: function (item) {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
    },

    getItemsFromStorage: function () {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }

      return items;
    },

    updateItemStorage: function (item) {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }

      // MY WAY
      // items.forEach((storageItem) => {
      //   if(storageItem.id === item.id) {
      //     storageItem.name = item.name;
      //     storageItem.calories = item.calories;
      //   }
      // });
      // His way -> better because if object is bigger
      // my way will be difficulte to update
      items.forEach((storageItem, index) => {
        if (storageItem.id === item.id) {
          items.splice(index, 1, item);
        }
      });

      localStorage.setItem('items', JSON.stringify(items));
    },

    removeItemFromStorage: function (item) {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }

      let index = items.indexOf(item);
      items.splice(index, 1);

      localStorage.setItem('items', JSON.stringify(items));
    },

    removeAllFromStorage: function () {
      localStorage.removeItem('items');
    },
  };

})();

// UI Controller
const UICtrl = (function () {

  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    itemName: '#item-name',
    itemCalories: '#item-calories',
    totalCalories: '.total-calories',
    clearBtn: '.clear-btn',
  };

  // Public methods
  return {
    hideList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showList: function () {
      document.querySelector(UISelectors.itemList).style.display = 'block';
    },

    populateItemList: function (items) {
      let html = '';
      items.forEach(function (item) {
        html += `
          <li id="item-${item.id}" class="collection-item">
            <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
          </li>
        `;
      });

      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getSelectors: function () {
      return UISelectors;
    },

    getItemInput: function () {
      return {
        name: document.querySelector(UISelectors.itemName).value,
        calories: document.querySelector(UISelectors.itemCalories).value,
      };
    },

    addListItem: function (newItem) {
      // Show list
      this.showList();

      // Create li element
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${newItem.id}`;
      li.innerHTML = `
      <strong>${newItem.name}:</strong> <em>${newItem.calories} Calories</em>
      <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
      `;

      // Insert item
      // My Way
      // document.querySelector(UISelectors.itemList).append(li);
      // His way
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },

    updateListItem: function (item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);

      // Turn node list into array
      listItems = Array.from(listItems);

      listItems.forEach((listItem) => {
        const itemId = listItem.getAttribute('id');

        if (itemId === `item-${item.id}`) {
          document.querySelector(`#${itemId}`).innerHTML = `
          <strong>${item.name}:</strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
          `;
        }
      });

    },

    clearInput: function () {
      document.querySelector(UISelectors.itemName).value = '';
      document.querySelector(UISelectors.itemCalories).value = '';
    },

    showTotalCalories: function (totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },

    clearEditState: function () {
      UICtrl.clearInput();

      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';

      ItemCtrl.removeCurrentItem();
    },

    showEditState: function () {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },

    addItemToForm: function () {
      document.querySelector(UISelectors.itemName).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCalories).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },

    deleteListItem: function (item) {
      document.getElementById(`item-${item.id}`).remove();
    },

    removeItemsFromUi: function () {
      let itemList = document.querySelector(UISelectors.itemList);
      while (itemList.lastChild) {
        itemList.removeChild(itemList.lastChild);
      }
    },
  };
})();

// Item Controller
const ItemCtrl = (function () {
  // Item contructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data structure / State !!!
  const data = {
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0,
  };

  // Public methods
  return {
    logData: function () {
      return data;
    },

    getItems: function () {
      return data.items;
    },

    addItem: function (item) {
      let id = 0;

      // Create id
      if (data.items.length > 0) {
        id = data.items[data.items.length - 1].id + 1;
      } else {
        id = 0;
      }

      // Create new item
      newItem = new Item(id, item.name, parseInt(item.calories));

      // Add to items array
      data.items.push(newItem);

      return newItem;
    },

    getTotalCalories: function () {
      let total = 0;
      data.items.forEach((item) => {
        total += parseInt(item.calories);
      });
      data.totalCalories = total;

      return data.totalCalories;
    },

    getItemById: function (id) {
      let found = 0;
      data.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },

    updateItem: function (input) {
      let found = null;
      data.items.forEach((item) => {
        if (item.id === data.currentItem.id) {
          item.name = input.name;
          item.calories = parseInt(input.calories);
          found = item;
        }
      });

      return found;
    },

    setCurrentItem: function (item) {
      data.currentItem = item;
    },

    getCurrentItem: function () {
      return data.currentItem;
    },

    deleteItem: function () {
      let currentItem = ItemCtrl.getCurrentItem();

      let indexForRemove = data.items.indexOf(currentItem);
      data.items.splice(indexForRemove, 1);

      return currentItem;
    },

    removeAllItems: function () {
      // My way
      // data.items.splice(0, data.items.length);
      // His way
      data.items = [];
    },

    removeCurrentItem: function () {
      data.currentItem = null;
    },
  };
})();

//App Controller
const App = (function (ItemCtrl, StorageCtrl, UICtrl) {
  // Load event listeners
  const loadEventListeners = function () {
    const UISelectors = UICtrl.getSelectors();

    //Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Edit icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    // Delete item event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

    // back item event
    document.querySelector(UISelectors.backBtn).addEventListener('click', backBtn);

    // Clear all items
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearItems);

    // Disable submit on enter
    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    e.preventDefault();

    // Get form input from UI Controller
    const input = UICtrl.getItemInput();

    // Check for name and calorie input
    if (input.name !== '' && input.calories !== '') {
      // Add item!
      const newItem = ItemCtrl.addItem(input);

      // Add item to UI list
      UICtrl.addListItem(newItem);

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      //Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Store in local Storage
      StorageCtrl.storeItem(newItem);

      // Clear fields
      UICtrl.clearInput();
    }
  };

  // Clik edit item
  const itemEditClick = function (e) {
    e.preventDefault();
    if (e.target.classList.contains('edit-item')) {
      // Get list item id
      const listId = e.target.parentElement.parentElement.id;

      // Break into an array
      const listIdArray = listId.split('-');

      // Get actual id
      const id = parseInt(listIdArray[1]);

      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // Set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form
      UICtrl.addItemToForm();

    }
  };

  const itemUpdateSubmit = function (e) {
    e.preventDefault();

    //Get item input
    const input = UICtrl.getItemInput();

    // Update item
    const updatedItem = ItemCtrl.updateItem(input);

    // Update UI
    UICtrl.updateListItem(updatedItem);

    // Update storage
    StorageCtrl.updateItemStorage(updatedItem);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();
  };

  const backBtn = function (e) {
    e.preventDefault();

    UICtrl.clearEditState();
  };

  const itemDeleteSubmit = function (e) {
    e.preventDefault();

    // delete item
    const deletedItem = ItemCtrl.deleteItem();

    // Remove from UI
    UICtrl.deleteListItem(deletedItem);

    // Remove from storage
    StorageCtrl.removeItemFromStorage(deletedItem);

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.clearEditState();
  };

  const clearItems = function (e) {
    e.preventDefault();

    // Remove all items from data.items
    const removedAllItems = ItemCtrl.removeAllItems();

    // Remove from UI
    UICtrl.removeItemsFromUi();

    // Clear from Storage
    StorageCtrl.removeAllFromStorage();

    // Get total calories
    const totalCalories = ItemCtrl.getTotalCalories();

    //Add total calories to UI
    UICtrl.showTotalCalories(totalCalories);

    UICtrl.hideList();
  };

  // Public methods
  return {
    init: function () {
      // Clear edit state / Set inital state
      UICtrl.clearEditState();

      // Fetch items from data structure
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();

      //Add total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load event listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, StorageCtrl, UICtrl);

App.init();

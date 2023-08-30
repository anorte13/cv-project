//Takes a a parameter 'arrayOfObjects' which is the a state variable that holds an array of objects.
//item & obj recieve the key names for localStorage objects to be able to read and update.
//setState receives the setState function from within the component.

export const deleteWork = (arrayOfObjects, item, obj, setState) => {
  const items = [...arrayOfObjects];
  const id = items.length - 1;
  const deletedItem = items.pop();

  if (deletedItem && deletedItem.id) {
    const storedData = JSON.parse(localStorage.getItem(obj)) || {
      arrayOfObjects: [],
    };

    const updatedItems = storedData[obj].filter(
      (item) => item.id !== deletedItem.id
    );
    storedData[obj] = updatedItems;
    localStorage.setItem(obj, JSON.stringify({ [obj]: updatedItems }));
    localStorage.removeItem(`${item}${id}`);
  }

  setState({
    [obj]: items,
  });
};

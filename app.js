const addButton = document.getElementById('addButton')

let list = document.getElementById('list')

let listItems = [];


addButton.addEventListener('click', pushToArray = () => {
  let postBoxValue = document.getElementById('postBox').value;
    listItems.unshift(postBoxValue);
    postBoxValue = null;
    publishPost();
})

const publishPost = () => {
    let liElement= document.createElement('LI');
    let content = listItems[0];
    liElement.append(content);
    list.appendChild(liElement);
    list.insertBefore(liElement, list.childNodes[0])
}

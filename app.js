//creates listItems array
const listItems = [];

//creates delete button
const $delete = "<button class='delete'>Delete</button>"

// //creates done button
// const $done = "<button>Done</button>"
//
// //creates important button
// const $important = "<button>Important</button>"

//adds click event listener to addButton that triggers pushToArray function
$( '#addButton').click(event => {
  pushToArray();
});

//adds keyup event listener that triggers pushToArray function if event.which(which keyboard key was pressed) == 13(key code for enter)
$( '#postBox').keyup(event => {
  if (event.which == 13) {
    pushToArray();
  }
})



//creates publishPost function
// stores <ul>
// creates and stores list element
// stores listItems array[0] to content var
//append content into list element
//append list element into list
//append delete, complete, and important buttons to list element
//calls all 3 buttons so they have functionality when clicked
const publishPost = () => {
  let $list = $('#list');
  let $listElement = $("<li>");
  let $content = listItems[listItems.length-1];
  $listElement.append($content);
  $list.prepend($listElement);
  $listElement.append($delete)
  deleteButton();
}
//creates pushToArray function
// stores input value
//push postBoxValue into list items array
//set postBox value to null
//call publishPost function
const pushToArray = () => {
  let $postBoxValue = $('#postBox').val();
  listItems.push($postBoxValue);
  $('#postBox').val(null);
  publishPost();
}


const deleteButton = () => {
  $('.delete').click((event) => {
    $(event.target).parent().remove();
  })
};

/////////////////////////////////
// const addButton = document.getElementById('addButton')
//
// let list = document.getElementById('list')
//
// let listItems = [];
//
//
// postButton.addEventListener('click', pushToArray = () => {
//   let postBoxValue = document.getElementById('postBox').value;
//     listItems.unshift(postBoxValue);
//     postBoxValue = null;
//     publishPost();
// })
//
// const publishPost = () => {
//     let liElement= document.createElement('LI');
//     let content = madePosts[0];
//     liElement.append(content);
//     list.appendChild(liElement);
//     list.insertBefore(liElement, list.childNodes[0])
// }

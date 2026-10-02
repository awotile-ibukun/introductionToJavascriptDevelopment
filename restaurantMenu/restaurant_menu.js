const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((breakfast, index) => {
    return(`<p> Item ${index + 1}: ${breakfast} </p>`)
}).join("")

document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// traverse the mainCourseMenu Array. 

let mainCourseMenuItemsHTML = " ";
mainCourseMenu.forEach( (item, index) => {
    mainCourseMenuItemsHTML += `<p>Item ${index + 1}: ${item} </p>`

});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseMenuItemsHTML;

let dessertMenuItemSHTML = '';
for(let i = 0; i < dessertMenu.length; i++){
    dessertMenuItemSHTML +=  `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertMenuItemSHTML;
import{r as o,h as r}from"./index-7619d89c.js";const e=class{constructor(r){o(this,r),this.items=[{text:"Companies",icon:"organization",iconColor:"rgb(var(--color-blue-default)"},{text:"Deals",icon:"money",iconColor:"rgb(var(--color-green-default))"},{text:"Agreements",icon:"handshake",iconColor:"rgb(var(--color-pink-default))"},{text:"Todos",icon:"today",iconColor:"rgb(var(--color-teal-default))"},{text:"History",icon:"comments",iconColor:"rgb(var(--color-grey-light))"},{separator:!0},{text:"Coworkers",icon:"gender_neutral_user",iconColor:"rgb(var(--color-orange-light))"},{text:"Persons",icon:"user_group_man_man",iconColor:"rgb(var(--color-yellow-dark)"}]}render(){return r("limel-menu",{items:this.items,badgeIcons:!0,gridLayout:!0},r("limel-button",{label:"Menu",slot:"trigger"}))}};e.style=":host{--menu-surface-width:min(\n      calc(100vw - 4rem),\n      40rem\n  )}";export{e as limel_example_menu_grid}
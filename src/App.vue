<template>
  <div class="text-black dark:text-white bg-white dark:bg-zinc-900">
    <RouterView></RouterView>
  </div>
</template>

<!-- Global Styles -->
<style>
* {
  font-family: 'Lobster', sans-serif;
  font-size: 23px;
  color: inherit;
  background-color: transparent;
  margin: 0px;
  padding: 0px;
}

h1 {
  font-size: 57px;
  text-align: center;
}

input {
  margin: 5px;
  padding: 5px;
  border-radius: 0px;
  border-width: 3px;
}
input:focus {
  outline: 0px;
}

button {
  margin: 5px;
  padding: 5px;
  border-radius: 0px;
  border-width: 3px;
  border-color: #333;
  font-size: 1.2rem;
}
</style>

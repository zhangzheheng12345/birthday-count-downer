<template>
  <RouterView></RouterView>
</template>

<!-- Global Styles -->
<style>
* {
  font-family: 'Lobster', sans-serif;
  font-size: 23px;
  margin: 0px;
  padding: 0px;
}

@media (prefers-color-scheme:dark) {
  * {
    color: #000;
    background-color: #fff;
  }
}

h1 {
  font-size: 4rem;
  margin: 10px;
  text-align: center;
}

input {
  margin: 5px;
  padding: 5px;
  border-radius: 0px;
  border-width: 3px;
  border-color: #333;
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
  background-color: #fff;
  color: #000;
  font-size: 1.2rem;
}

.float {
  position: fixed;
  right: 20px;
  top: 13px;
  z-index: 100;
}
</style>

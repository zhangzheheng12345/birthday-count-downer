<template>
  <RouterView></RouterView>
</template>

<!-- Global Styles -->
<style>
* {
  font-family: 'Lobster', sans-serif;
  font-size: 23px;
  color: #000;
  margin: 0px;
  padding: 0px;
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
  border-color: #000;
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

@media (prefers-color-scheme: dark) {
  * {
    color: #fff;
    background-color: #222;
  }
  button {
    border-color: #fff;
  }
  input {
    border-color: #fff;
  }
  h1 {
    border-color: #fff;
  }
}
</style>

<template>
  <RouterView></RouterView>
</template>

<!-- Global Styles -->
<style>
@import url('https://fonts.cdnfonts.com/css/gogh');
@import url('https://fonts.cdnfonts.com/css/effra-trial?styles=133480');

* {
  font-family: 'Effra Trial', sans-serif;
  font-size: 18px;
  margin: 0px;
  padding: 0px;
}

h1 {
  font-family: 'Gogh', sans-serif;
  font-size: 3.6rem;
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
}

.float {
  position: fixed;
  right: 10px;
  top: 10px;
}
</style>

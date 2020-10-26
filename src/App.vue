<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/inventory">Inventory</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

/*  */
#app button {
  outline: none;
  border: none;
  border-radius: 3px;
  padding: 5px;
  transition: all 0.25s ease;
}
#app button:hover, #app button:active {
  box-shadow: 0 0 3px rgba(0,0,0,0.35) inset;
}

#app button.button-yellow {
  background-color: #ffe680;
}
#app button.button-red {
  background-color: #de8787;
}

/* transitions */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

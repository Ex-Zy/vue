<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="collapse navbar-collapse">
        <div class="navbar-nav">
          <router-link to="/" tag="li" exact>
            <a class="nav-link" href="#">Home</a>
          </router-link>
          <router-link to="/users" tag="li" exact>
            <a class="nav-link" href="#">Список пользователей</a>
          </router-link>
          <router-link to="/add" tag="li" exact>
            <a href="#" class="nav-link">Добавить пользователя</a>
          </router-link>
        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    font-size: 20px;
  }
</style>

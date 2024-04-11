<template>
  <div class="default-layout">
    <div class="sidebar-content fixed">
      <SideBar />
    </div>

    <div class="main-content overflow-x-hidden">
      <header class="grid gap-5 grid-cols-5">
        <HeadMenu />
      </header>
      <main class="grid grid-cols-5 gap-5">
        <slot />
      </main>
    </div>
  </div>
</template>

<style>
body {
  background-color: rgba(242, 245, 250, 1);
}
.default-layout {
  max-width: 100vw;
  overflow: hidden;
}
.sidebar-content {
  background-color: white;
  border-color: rgba(218, 227, 248, 1);
  border-style: solid;
  border-right-width: 1px;
  display: fixed;
  max-width: 19vw;
  width: 100%;
  height: 100vh;
}

.main-content {
  display: inline-block;
  position: absolute;
  width: 81vw;
  height: 100vh;
  left: 19vw;
}

header {
  background-color: white;
  border-color: rgba(218, 227, 248, 1);
  border-style: solid;
  border-bottom-width: 1px;
  width: auto;
  height: 100%;
  max-height: 4.5rem;
  padding: 10px;
  text-align: center;
  overflow: hidden;
}

.sidebar {
  background-color: #eee;
  height: 100vh;
  padding: 10px;
}
main {
  padding: 1rem;
}
</style>

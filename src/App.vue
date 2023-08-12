<template>
  <div id="app">
    <side-bar />
    <MainBoard v-if="selectedBoard" :board="selectedBoard" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import SideBar from "./components/SideBar.vue";
import MainBoard from "@/components/MainBoard.vue";

export default defineComponent({
  name: "App",
  components: {
    MainBoard,
    SideBar,
  },
  computed: {
    selectedBoard() {
      const store = useStore();
      return (
        store.state.boards.find(
          (board: any) => board.id === store.state.selectedBoard
        ) || store.state.boards[0]
      );
    },
  },
});
</script>

<style lang="scss">
#app {
  display: flex;
}
</style>

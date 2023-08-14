<template>
  <div class="title-menu">
    <div class="title-menu__header">
      <svg
        class="title-menu__logo"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
      >
        <rect width="6" height="25" rx="2" fill="#635FC7" />
        <rect
          opacity="0.75"
          x="9"
          width="6"
          height="25"
          rx="2"
          fill="#635FC7"
        />
        <rect
          opacity="0.5"
          x="18"
          width="6"
          height="25"
          rx="2"
          fill="#635FC7"
        />
      </svg>
      <!-- TODO: If is for when no board is there. Build alternative for when no board is there -->
      <div
        class="title-menu__open-side-menu"
        @click="toggleSideMenu"
        v-if="selectedBoard"
      >
        <h2 class="heading-large title-menu__title">
          {{ selectedBoard.name }}
        </h2>
        <svg
          class="title-menu__open-icon"
          :class="{ 'title-menu__open-icon--opened': sideMenuOpen }"
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="7"
          viewBox="0 0 9 7"
          fill="none"
        >
          <path d="M1 1L5 5L9 1" stroke="#635FC7" stroke-width="2" />
        </svg>
      </div>
    </div>
    <div class="title-menu__options">
      <NewTask :board="selectedBoard" />
      <EditBoard :board="selectedBoard" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import NewTask from "./NewTask.vue";
import EditBoard from "./EditBoard.vue";
import { mapActions } from "vuex";

export default defineComponent({
  data() {
    return {
      menuOpen: false,
    };
  },
  computed: {
    selectedBoard(): any {
      const store = useStore();
      return store.state.selectedBoard;
    },
    sideMenuOpen(): boolean {
      const store = useStore();
      return store.state.sideMenuOpen;
    },
  },
  components: { NewTask, EditBoard },
  methods: {
    ...mapActions(["toggleSideMenu"]),
  },
});
</script>

<style lang="scss">
.title-menu {
  display: flex;
  justify-content: space-between;

  &__header {
    display: flex;
    align-items: center;
  }

  &__title {
    margin: 0 0 0 16px;
  }

  &__open-side-menu {
    display: flex;
    align-items: center;
  }

  &__open-icon {
    margin-left: 8px;
    // TODO: Check time
    transition: transform 0.4s;
    &--opened {
      transform: rotate(180deg);
    }
  }

  &__options {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>

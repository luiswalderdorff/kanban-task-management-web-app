<template>
  <div class="title-menu">
    <div class="title-menu__header">
      <svg
        v-if="$store.state.mobile"
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
      <div class="title-menu__open-side-menu" @click="toggleSideMenu">
        <h2 class="heading-large title-menu__title">
          <template v-if="board">{{ board.name }}</template>
          <template v-else>Create a Board</template>
        </h2>
        <svg
          class="title-menu__open-icon"
          :class="{ 'title-menu__open-icon--opened': sideMenuOpen }"
          v-if="$store.state.mobile"
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
      <NewTask :board="board" />
      <options-component
        type="Board"
        @edit-event="modalOpen = true"
        @delete-event="
          modalOpen = true;
          deleteBoard = true;
        "
      />
    </div>
    <BoardModal
      :board="board"
      :modalOpen="modalOpen"
      :deleteBoard="deleteBoard"
      @cancel-delete-event="
        deleteBoard = false;
        modalOpen = false;
      "
      @close-event="modalOpen = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NewTask from "./NewTask.vue";
import { mapActions } from "vuex";
import OptionsComponent from "./subcomponents/OptionsComponent.vue";
import BoardModal from "./subcomponents/BoardModal.vue";

export default defineComponent({
  data() {
    return {
      menuOpen: false,
      modalOpen: false,
      editBoard: false,
      deleteBoard: false,
    };
  },
  props: ["board"],
  computed: {
    sideMenuOpen(): boolean {
      return this.$store.state.sideMenuOpen;
    },
  },
  components: {
    NewTask,
    OptionsComponent,
    BoardModal,
  },
  methods: {
    ...mapActions(["toggleSideMenu"]),
    deleteBoardFunction() {
      this.$store.dispatch("deleteBoard", this.board.id);
    },
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

    @media only screen and (min-width: 768px) {
      font-size: 20px !important;
      margin: 0;
    }

    @media only screen and (min-width: 1200px) {
      font-size: 24px !important;
    }
  }

  &__open-side-menu {
    display: flex;
    align-items: center;
    cursor: pointer;

    @media only screen and (min-width: 768px) {
      cursor: initial;
    }
  }

  &__open-icon {
    margin-left: 8px;
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

  .dark-mode & {
    color: var(--white);
    background: var(--dark-grey);
  }
}
</style>

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
        v-if="board"
      >
        <h2 class="heading-large title-menu__title">
          {{ board.name }}
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
    <modal-component :content="modalOpen">
      <delete-component
        v-if="deleteBoard"
        @cancel-delete-event="
          deleteBoard = false;
          modalOpen = false;
        "
        @delete-confirmation-event="deleteBoardFunction()"
        type="board"
        :title="board.name"
      />
      <template v-else>
        <h2 class="heading-large">Edit Board</h2>
        <board-form
          :board="board"
          :edit="true"
          @close-event="modalOpen = false"
        />
      </template>
    </modal-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import NewTask from "./NewTask.vue";
import { mapActions } from "vuex";
import OptionsComponent from "./subcomponents/OptionsComponent.vue";
import BoardForm from "./subcomponents/BoardForm.vue";
import ModalComponent from "./subcomponents/ModalComponent.vue";
import DeleteComponent from "./subcomponents/DeleteComponent.vue";

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
      const store = useStore();
      return store.state.sideMenuOpen;
    },
  },
  components: {
    NewTask,
    OptionsComponent,
    BoardForm,
    ModalComponent,
    DeleteComponent,
  },
  methods: {
    ...mapActions(["toggleSideMenu"]),
    deleteBoardFunction() {
      console.log("123");
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

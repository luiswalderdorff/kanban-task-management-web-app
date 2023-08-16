<template>
  <modal-component :content="modalOpen">
    <delete-component
      v-if="deleteBoard"
      @cancel-delete-event="cancelDelete"
      @delete-confirmation-event="deleteBoardFunction"
      type="board"
      :title="board.name"
    />
    <template v-else>
      <h2 class="heading-large">Edit Board</h2>
      <board-form :board="board" :edit="true" @close-event="closeModal" />
    </template>
  </modal-component>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BoardForm from "./BoardForm.vue";
import ModalComponent from "./ModalComponent.vue";
import DeleteComponent from "./DeleteComponent.vue";

export default defineComponent({
  props: ["board", "modalOpen", "deleteBoard"],
  components: {
    BoardForm,
    ModalComponent,
    DeleteComponent,
  },
  methods: {
    closeModal() {
      this.$emit("close-event");
    },
    cancelDelete() {
      this.$emit("cancel-delete-event");
    },
    deleteBoardFunction() {
      this.$store.dispatch("deleteBoard", this.board.id);
      this.$emit("close-event");
    },
  },
});
</script>

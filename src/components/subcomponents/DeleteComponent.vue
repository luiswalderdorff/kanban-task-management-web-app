<template>
  <div class="delete-modal">
    <h2 class="heading-large delete-modal__heading">Delete this {{ type }}?</h2>
    <p class="body-large delete-modal__body">
      {{ bodyText }}
    </p>
    <button
      class="button button--destructive delete-modal__delete-button"
      @click="emitDeleteConfirmationEvent"
    >
      Delete
    </button>
    <button class="button button--secondary" @click="emitCancelDeleteEvent">
      Cancel
    </button>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["delete-confirmation-event", "cancel-delete-event"],
  props: ["type", "title"],
  methods: {
    emitDeleteConfirmationEvent() {
      this.$emit("delete-confirmation-event");
    },
    emitCancelDeleteEvent() {
      this.$emit("cancel-delete-event");
    },
  },
  computed: {
    bodyText() {
      if (this.type === "task") {
        return `Are you sure you want to delete the ‘${this.title}’ task and its subtasks? This action cannot be reversed.`;
      } else {
        return `Are you sure you want to delete the ‘${this.title}’ board? This action will remove all columns and tasks and cannot be reversed.`;
      }
    },
  },
});
</script>

<style lang="scss">
.delete-modal {
  &__heading {
    color: var(--red);
    margin-bottom: 24px;
  }

  &__body {
    color: var(--medium-grey) !important;
    margin-bottom: 24px;
  }

  &__delete-button {
    margin-bottom: 16px;
  }
}
</style>

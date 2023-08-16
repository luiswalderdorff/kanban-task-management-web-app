<template>
  <div class="delete-modal">
    <h2 class="heading-large delete-modal__heading">Delete this {{ type }}?</h2>
    <p class="body-large delete-modal__body">
      {{ bodyText }}
    </p>
    <div class="delete-modal__buttons">
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
    color: var(--red) !important;
    margin-bottom: 24px;
  }

  &__body {
    color: var(--medium-grey) !important;
    margin-bottom: 24px;
  }

  &__buttons {
    @media only screen and (min-width: 768px) {
      display: flex;
    }
  }

  &__delete-button {
    margin-bottom: 16px;
    @media only screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 16px;
    }
  }
}
</style>

<template>
  <div class="options">
    <svg
      class="options__open"
      xmlns="http://www.w3.org/2000/svg"
      width="5"
      height="20"
      viewBox="0 0 5 20"
      fill="none"
      @click="optionsOpened = !optionsOpened"
    >
      <circle cx="2.30769" cy="2.30769" r="2.30769" fill="#828FA3" />
      <circle cx="2.30769" cy="10.0001" r="2.30769" fill="#828FA3" />
      <circle cx="2.30769" cy="17.6925" r="2.30769" fill="#828FA3" />
    </svg>
    <div class="options__buttons" v-if="optionsOpened">
      <button class="options__button body-large" @click="emitEditEvent">
        <template v-if="!edit || type !== 'Task'">Edit {{ type }}</template>
        <template v-else> Stop Editing</template>
      </button>
      <button
        class="options__button options__button--danger body-large"
        @click="emitDeleteEvent"
      >
        Delete {{ type }}
      </button>
      <button
        v-if="type === 'Task'"
        class="options__button body-large"
        @click="emitCloseEvent"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["type"],
  emits: ["edit-event", "close-event", "delete-event"],
  data() {
    return {
      optionsOpened: false,
      edit: false,
    };
  },
  methods: {
    emitEditEvent() {
      this.optionsOpened = false;
      this.edit = !this.edit;
      this.$emit("edit-event", this.edit);
    },
    emitCloseEvent() {
      this.editTask = false;
      this.$emit("close-event");
    },
    emitDeleteEvent() {
      this.optionsOpened = false;
      this.$emit("delete-event");
    },
  },
});
</script>

<style lang="scss">
.options {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;

  &__buttons {
    position: absolute;
    top: 42px;
    right: 0;
    padding: 16px;
    width: 160px;
    border-radius: 8px;
    border: 2px solid var(--lines-light);
    background: var(--white);
    z-index: 2;
  }

  &__button {
    display: block;
    padding: 8px 0;
    color: var(--medium-grey) !important;
    width: 100%;
    text-align: left;
    border-bottom: 2px solid var(--lines-light);

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }

    &--danger {
      color: var(--red) !important;
    }
  }

  .dark-mode & {
    &__buttons {
      background-color: var(--dark-bg);
      border: 2px solid var(--lines-dark);
    }

    &__button {
      border-bottom: 2px solid var(--lines-dark);

      &:last-child {
        padding-bottom: 0;
        border-bottom: none;
      }
    }
  }
}
</style>

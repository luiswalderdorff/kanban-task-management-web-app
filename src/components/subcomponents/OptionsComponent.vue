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
        <template v-if="!edit">Edit {{ type }}</template>
        <template v-else> Stop Editing</template>
      </button>
      <button class="options__button options__button--danger body-large">
        Delete {{ type }}
      </button>
      <button class="options__button body-large" @click="emitCloseEvent">
        Close
      </button>
    </div>
    <!--<div class="modal">
      <h2 class="heading-large">Delete this {{ type }}?</h2>
      <p class="body-large">
        Are you sure you want to delete the ‘Platform Launch’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
    </div>-->
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: ["type"],
  emits: ["edit-event", "close-event"],
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
  },
});
</script>

<style lang="scss">
.options {
  position: relative;
  cursor: pointer;

  &__buttons {
    position: absolute;
    top: 42px;
    right: 0;
    padding: 16px;
    width: 160px;
    border-radius: 8px;
    border: 2px solid var(--lines-light);
    background: var(--white);
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
}
</style>

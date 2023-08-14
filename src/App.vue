<template>
  <div
    class="grid-container"
    :class="{ 'grid-container--darkened': isDarkened }"
  >
    <SideMenu v-if="sideMenuOpen" />
    <TitleMenu />
    <MainBoard v-if="selectedBoard" :board="selectedBoard" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideMenu from "./components/SideMenu.vue";
import MainBoard from "./components/MainBoard.vue";
import TitleMenu from "./components/TitleMenu.vue";
import { useStore, mapActions } from "vuex";
import { EventBus } from "./components/subcomponents/EventBus";

export default defineComponent({
  name: "App",
  components: {
    SideMenu,
    MainBoard,
    TitleMenu,
  },
  data() {
    return {
      isDarkened: false,
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
  created() {
    this.initializeSelectedBoard();
    EventBus.on("modal-open", () => {
      this.isDarkened = true;
    });
    EventBus.on("modal-close", () => {
      this.isDarkened = false;
    });
  },
  beforeUnmount() {
    EventBus.off("modal-open");
    EventBus.off("modal-close");
  },
  methods: {
    ...mapActions(["initializeSelectedBoard"]),
  },
});
</script>

<style lang="scss">
/* Color Variables */
:root {
  --black: #000112;
  --dark-grey: #2b2c37;
  --lines-dark: #3e3f4e;
  --lines-light: #e4ebfa;
  --main-purple: #635fc7;
  --main-purple-hover: #a8a4ff;
  --medium-grey: #828fa3;
  --red: #ea5555;
  --red-hover: #ff9898;
  --light-bg: #f4f7fd;
  --dark-bg: #20212c;
  --white: #ffffff;
}

/* Fonts */
@font-face {
  font-family: "MyCustomFont";
  font-style: normal;
  font-weight: 500;
  src: url("./assets/fonts/PlusJakartaSans-Medium.ttf") format("truetype");
}

@font-face {
  font-family: "MyCustomFont";
  font-style: bold;
  font-weight: 700;
  src: url("./assets/fonts/PlusJakartaSans-Bold.ttf") format("truetype");
}

body {
  font-family: "Plus Jakarta Sans", sans-serif;
  color: var(--black, #000112);
  margin: 0;
}

.heading-xl {
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;
}

.heading-large {
  font-size: 18px;
  font-weight: 700;
  margin-top: 0;
}

.heading-medium {
  font-size: 15px;
  font-weight: 700;
  margin-top: 0;
}

.heading-small {
  color: var(--medium-grey, #828fa3);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  margin-top: 0;
}

.body-large {
  color: var(--dark-grey, #2b2c37);
  font-size: 13px;
  font-weight: 500;
  line-height: 23px;
}

.body-medium {
  color: var(--dark-grey, #2b2c37);
  font-size: 12px;
  font-weight: 700;
}

/* Grid */
.grid-container {
  display: grid;
  flex-direction: column;
  grid-template-areas:
    "title-menu"
    "main-board";
  grid-template-rows: auto 1fr;
  min-height: 100vh;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    pointer-events: none;
  }
  &--darkened::after {
    opacity: 1;
    pointer-events: all;
  }
  @media only screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "side-menu title-menu"
      "side-menu main-board";
    height: 100vh;
  }
}

.side-menu {
  grid-area: side-menu;
}

.title-menu {
  grid-area: title-menu;
  padding: 16px;
}

.main-board {
  grid-area: main-board;
  padding: 16px;
}

/* Components */
button,
input[type="submit"],
input[type="reset"] {
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

.select-component {
  display: block;
  width: 100%;
  padding: 8px 14px;
  color: var(--black, #000112);
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);

  appearance: none;
  position: relative;
  background-image: url("./assets/icons/icon-chevron-down.svg");
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: calc(100% - 14px) center;
}

.checkboxes-component {
  padding: 0;
  &__task {
    border-radius: 4px;
    background: var(--light-bg);
    padding: 13px;
    margin: 0 16px 8px 0;
    display: block;
    position: relative;
    display: flex;
    align-items: center;
    transition: background 0.2s;

    &:hover {
      background: var(--main-purple-hover);
    }
  }
  &__checkbox {
    appearance: none;
    border-radius: 2px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background: var(--white, #fff);
    width: 16px;
    height: 16px;
    padding: 2px;
    position: relative;
    transition: background-color 0.2s;
    margin: 0;

    &:checked {
      background-color: var(--main-purple);

      & + .checkboxes-component__description {
        text-decoration: line-through;
        color: var(--medium-grey);
      }
    }
  }

  &__description {
    margin-left: 16px;
  }

  &__check-icon {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
  }
}

.input-component {
  @extend .body-large;
  display: block;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  background: var(--white, #fff);
  padding: 8px 16px;
  color: var(--black);
  box-sizing: border-box;
  margin-bottom: 12px;

  &::placeholder {
    color: var(--black);
    opacity: 0.25;
  }

  &:focus {
    outline: none !important;
    border: 2px solid var(--main-purple-hover);
  }
}

.modal-subheading {
  @extend .body-medium;
  color: var(--medium-grey);
  margin-bottom: 8px;
  display: block;
}

.list-editable {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  &__input {
    @extend .input-component;
    width: auto;
    flex-grow: 1;
    margin-bottom: 0;
  }

  &__remove {
    margin-left: 16px;
    height: 15px;
    width: 15px;
  }
}

.button {
  @extend .body-large;
  border-radius: 20px;
  width: 100%;
  font-weight: bold;
  padding: 9px 0;
  transition: background 0.2s;
  color: var(--white);
  background: var(--main-purple);

  &:hover {
    background: var(--main-purple-hover);
  }

  &--large {
    @extend .heading-medium;
    padding: 15px 0;
  }
  &--secondary {
    background: rgba(99, 95, 199, 0.1);
    color: var(--main-purple);

    &:hover {
      background: rgba(99, 95, 199, 0.25);
    }
  }

  &--destructive {
    background: var(--red);

    &:hover {
      background: var(--red-hover);
    }
  }
}
</style>

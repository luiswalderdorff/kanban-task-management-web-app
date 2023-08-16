<template>
  <div
    class="grid-container"
    :class="{ 'grid-container--darkened': isDarkened, 'dark-mode': darkMode }"
  >
    <SideMenu :selectedBoard="selectedBoard" />
    <TitleMenu :board="selectedBoard" />
    <MainBoard :board="selectedBoard" />
  </div>
</template>

<script lang="ts">
/* TODOS
side menu border disappears when scrolling main board on x axis
add hiding sidemenu

TODOS End
Check To Dos
Check warnings
Remove any anys
Test on mobile
Remove test data
*/
import { defineComponent } from "vue";
import SideMenu from "./components/SideMenu.vue";
import MainBoard from "./components/MainBoard.vue";
import TitleMenu from "./components/TitleMenu.vue";
import { mapActions } from "vuex";
import { EventBus } from "./services/EventBus";
import { Board } from "./types";

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
      selectedBoard: null as Board | null,
    };
  },
  computed: {
    sideMenuOpen(): boolean {
      return this.$store.state.sideMenuOpen;
    },
    boards(): Board[] {
      return this.$store.state.boards;
    },
    selectedBoardId(): string {
      return this.$store.state.selectedBoardId;
    },
    darkMode(): boolean {
      return this.$store.state.darkMode;
    },
  },
  created() {
    EventBus.on("modal-open", () => {
      this.isDarkened = true;
    });
    EventBus.on("modal-close", () => {
      this.isDarkened = false;
    });
    this.getBoardData();
    this.initializeSelectedBoard();
    if (this.$store.state.mobile) {
      this.$store.state.sideMenuOpen = false;
    }
  },
  beforeUnmount() {
    EventBus.off("modal-open");
    EventBus.off("modal-close");
  },
  methods: {
    ...mapActions(["initializeSelectedBoard"]),
    getBoardData() {
      this.selectedBoard = this.$store.state.boards.find(
        (board: Board) => board.id === this.$store.state.selectedBoardId
      );
    },
  },
  watch: {
    boards: {
      deep: true,
      handler() {
        this.getBoardData();
      },
    },
    selectedBoardId() {
      this.getBoardData();
    },
    // TODO: Remove later when all changes happen through mutations
    "$store.state": {
      handler(newValue) {
        localStorage.setItem("state", JSON.stringify(newValue));
      },
      deep: true,
    },
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
  --main-purple-hover-light: rgba(99, 95, 199, 0.1);
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

html {
  overflow: hidden;
}

body {
  font-family: "Plus Jakarta Sans", sans-serif;
  color: var(--black, #000112);
  margin: 0;
  overflow: hidden;
}

.heading-xl {
  font-size: 24px;
  font-weight: 700;
  margin-top: 0;

  .dark-mode & {
    color: var(--white);
  }
}

.heading-large {
  font-size: 18px;
  font-weight: 700;
  margin-top: 0;

  .dark-mode & {
    color: var(--white);
  }
}

.heading-medium {
  font-size: 15px;
  font-weight: 700;
  margin-top: 0;

  .dark-mode & {
    color: var(--white);
  }
}

.heading-small {
  color: var(--medium-grey, #828fa3);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2.4px;
  margin-top: 0;

  .dark-mode & {
    color: var(--white);
  }
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
  * {
    transition: color 0.3s, background-color 0.3s ease;
  }

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
      "side-menu-container title-menu"
      "side-menu-container main-board";
    height: 100vh;
  }
  @media only screen and (min-width: 1200px) {
    grid-template-columns: 300px 3fr;
  }
}

.side-menu-container {
  grid-area: side-menu-container;
  @media only screen and (min-width: 768px) {
    border-right: 1px solid var(--lines-light);

    .dark-mode & {
      border-right: 1px solid var(--lines-dark);
    }
  }
}

.title-menu {
  grid-area: title-menu;
  padding: 16px;

  @media only screen and (min-width: 768px) {
    padding: 16px 24px;
    border-bottom: 1px solid var(--lines-light);

    .dark-mode & {
      border-bottom: 1px solid var(--lines-dark);
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 24px;
  }
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
  color: var(--black);
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  cursor: pointer;
  appearance: none;
  position: relative;
  background-image: url("./assets/icons/icon-chevron-down.svg");
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: calc(100% - 14px) center;

  option {
    padding: 8px 14px;
  }

  .dark-mode & {
    color: var(--white);
    background-color: var(--dark-grey);
  }
}

.input-component {
  flex-grow: 1;
  position: relative;
  &__input {
    @extend .body-large;
    display: block;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(130, 143, 163, 0.25);
    background: var(--white);
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

    .dark-mode & {
      background: var(--dark-grey);
      color: var(--white);

      &::placeholder {
        color: var(--white);
      }
    }
  }
}

.modal-subheading {
  @extend .body-medium;
  color: var(--medium-grey);
  margin-bottom: 8px;
  display: block;

  .dark-mode & {
    color: var(--white);
  }
}

.list-editable {
  &__item {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  &__input {
    @extend .input-component__input;
    width: 100%;
    margin-bottom: 0;
  }

  &__remove {
    margin-left: 16px;
    height: 15px;
    width: 15px;

    &:hover {
      rect {
        transition: fill 0.2s;
        fill: var(--red);
      }
    }
  }
}

.input-error {
  border: 1px solid var(--red);
}

.error-text {
  position: absolute;
  top: 20px;
  right: 16px;
  transform: translateY(-50%);
  color: var(--red);
  background-color: var(--white);
  padding-left: 5px;

  .dark-mode & {
    background-color: var(--dark-grey);
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

    .dark-mode & {
      color: var(--main-purple);
      background: var(--white);
      transition: background 0.2s, color 0.2s;

      &:hover {
        background: var(--main-purple-hover);
        color: var(--white);
      }
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

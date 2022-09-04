<template>
  <div class="layout-topbar">
    <div class="search-container">
      <input
        class="search"
        id="searchleft"
        type="search"
        v-model="searchValue"
        placeholder="Search"
      />
      <label class="button searchbutton" for="searchleft"
        ><span class="mglass">&#9906;</span></label
      >
    </div>
    <button
      class="p-link layout-topbar-menu-button layout-topbar-button"
      v-styleclass="{
        selector: '@next',
        enterClass: 'hidden',
        enterActiveClass: 'scalein',
        leaveToClass: 'hidden',
        leaveActiveClass: 'fadeout',
        hideOnOutsideClick: true,
      }"
    >
      <i class="pi pi-ellipsis-v"></i>
    </button>
    <ul class="layout-topbar-menu hidden lg:flex origin-top">
      <li>
        <button class="p-link layout-topbar-button">
          <i class="pi pi-bell"></i>
          <span>Events</span>
        </button>
      </li>
      <li class="username">
        <span class="username-lg">John Doe</span><br />
        <span class="username-sm">admin</span>
      </li>
      <li>
        <img
          src="/images/avatar/stephenshaw.png"
          alt="Avatar"
          width="38"
          height="35"
          class="ml-3"
        />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: null,
    };
  },
  methods: {
    onMenuToggle(event) {
      this.$emit('menu-toggle', event);
    },
    onTopbarMenuToggle(event) {
      this.$emit('topbar-menu-toggle', event);
    },
    topbarImage() {
      return this.$appState.darkTheme
        ? 'images/logo-white.svg'
        : 'images/digilearn-logo.png';
    },
  },
  computed: {
    darkTheme() {
      return this.$appState.darkTheme;
    },
  },
};
</script>

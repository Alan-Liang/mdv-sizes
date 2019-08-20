<template>
  <div>
    <m-drawer
      ref="drawer"
      :class="{'drawer-dismissible': dismissible}"
      :modal="modal"
      :dismissible="dismissible"
      :open="drawerOpen"
      :key="modal"
    >
      <m-drawer-header slot="header" title="Hello" />
      <m-drawer-content>
        <m-drawer-list>
          <m-list-item activated>
            <m-icon icon="menu" slot="graphic"/>
            Hi
          </m-list-item>
          <m-list-item>
            <m-icon icon="menu" slot="graphic"/>
            2
          </m-list-item>
        </m-drawer-list>
      </m-drawer-content>
    </m-drawer>
    <m-drawer-scrim v-if="modal" />
    <div id="content">
      <m-top-app-bar ref="appbar" title="Hello World">
        <m-icon icon="menu" slot="navigation" />
      </m-top-app-bar>
      <m-top-app-bar-fixed-adjust>
        Hello World
      </m-top-app-bar-fixed-adjust>
    </div>
  </div>
</template>

<style lang="scss">
@import '../node_modules/material-components-vue/dist/top-app-bar/styles';
@import '../node_modules/material-components-vue/dist/drawer/styles';
@import '../node_modules/material-components-vue/dist/typography/styles';
@import '../node_modules/material-components-vue/dist/list/styles';
</style>

<style>
body {
  margin: 0;
}
</style>

<style scoped>
.mdc-drawer--dismissible.mdc-drawer--open ~ #content{
  margin-left: 255px;
}

.drawer-dismissible {
  position: fixed;
  top: 0;
  left: 0;
}
</style>

<script>
import Vue from 'vue'
import MTopAppBar from 'material-components-vue/dist/top-app-bar'
import MDrawer from 'material-components-vue/dist/drawer'
import MList from 'material-components-vue/dist/list'
import MIcon from 'material-components-vue/dist/icon'

;[
  MTopAppBar,
  MDrawer,
  MIcon,
  MList,
].forEach(component => Vue.use(component))

export default Vue.extend({
  data: function() {
    return {
      modal: false,
      dismissible: true,
      drawerOpen: false,
    }
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen
    },
  },
  mounted() {
    const media = window.matchMedia('(max-width: 720px)')

    const toggleMobile = () => {
      const isMobile = media.matches
      if (isMobile) {
        this.dismissible = false
        this.modal = true
      } else {
        this.modal = false
        this.dismissible = true
      }

      this.$nextTick(() => this.drawerOpen = !isMobile)
    }
    media.addListener(toggleMobile)
    toggleMobile()

    this.$refs.appbar.$on('nav', () => this.toggleDrawer())
  },
})
</script>
import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const SidebarMenuControl = defineStore('ControlSidebarMenu', () => {
  const state = reactive({
    miniState: false
  })

  function toggleSidebar() {
    state.miniState = !state.miniState
    console.log('miniState:', state.miniState)
  }

  return {
    state,
    toggleSidebar
  }
})

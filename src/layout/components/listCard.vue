<template>
  <div>
    <div class="w-72 sm-96 flex flex-col items-center">
      <div>
        <p class="text-xl text-brand-main font-light flex w-full justify-center">
          {{ props.title }}
        </p>
        <ul class="">
          <li class="mb-6 bg-black"></li>
          <li>
            <button class="rounded-sm text-white h-7 w-14 bg-brand-main hover:h-8 hover:w-16">
              Add
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title: string
    list: string
  }>(),
  {
    title: '---'
  }
)
</script>

<style scoped>
.tasks ::before {
  border: none;
}
</style>

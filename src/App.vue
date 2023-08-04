<script setup>
import HelloWorld from './components/HelloWorld.vue'
import img from '@/assets/1.jpg'
</script>

<template>
  <HelloWorld :url="img" :scale="3" :scroll="true" ></HelloWorld>
</template>


<template>
  <LayOut>
    <h2  class="text-[40px] underline text-[#3E435F]">Qualified Sick Leave</h2>
    <p><span class="text-[#3E435F]">Self Leave</span> <span class="text-[#0047CC]">Reason for Qualified Sick Leave (may not exceed 10 workdays or 80 hours)</span></p>

    <ul class="text-[16px] text-[#3E435F]">
      <li class="leading-[35px] flex items-center gap-[10px]">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.91416 8.1L4.51416 9.5L9.01416 14L19.0142 4L17.6142 2.6L9.01416 11.2L5.91416 8.1ZM18.0142 10C18.0142 14.4 14.4142 18 10.0142 18C5.61416 18 2.01416 14.4 2.01416 10C2.01416 5.6 5.61416 2 10.0142 2C10.8142 2 11.5142 2.1 12.2142 2.3L13.8142 0.7C12.6142 0.3 11.3142 0 10.0142 0C4.51416 0 0.0141602 4.5 0.0141602 10C0.0141602 15.5 4.51416 20 10.0142 20C15.5142 20 20.0142 15.5 20.0142 10H18.0142Z" fill="#3E435F"/>
        </svg>
        <span>Employee's own quarantine or isolation order under federal, state or local law</span>
      </li>
      <li class="leading-[35px] flex items-center gap-[10px]">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.91416 8.1L4.51416 9.5L9.01416 14L19.0142 4L17.6142 2.6L9.01416 11.2L5.91416 8.1ZM18.0142 10C18.0142 14.4 14.4142 18 10.0142 18C5.61416 18 2.01416 14.4 2.01416 10C2.01416 5.6 5.61416 2 10.0142 2C10.8142 2 11.5142 2.1 12.2142 2.3L13.8142 0.7C12.6142 0.3 11.3142 0 10.0142 0C4.51416 0 0.0141602 4.5 0.0141602 10C0.0141602 15.5 4.51416 20 10.0142 20C15.5142 20 20.0142 15.5 20.0142 10H18.0142Z" fill="#3E435F"/>
        </svg>
        <span>Employee's self-quarantine as advised by a health care provider</span>
      </li>
      <li class="leading-[35px] flex items-center gap-[10px]">
        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.91416 8.1L4.51416 9.5L9.01416 14L19.0142 4L17.6142 2.6L9.01416 11.2L5.91416 8.1ZM18.0142 10C18.0142 14.4 14.4142 18 10.0142 18C5.61416 18 2.01416 14.4 2.01416 10C2.01416 5.6 5.61416 2 10.0142 2C10.8142 2 11.5142 2.1 12.2142 2.3L13.8142 0.7C12.6142 0.3 11.3142 0 10.0142 0C4.51416 0 0.0141602 4.5 0.0141602 10C0.0141602 15.5 4.51416 20 10.0142 20C15.5142 20 20.0142 15.5 20.0142 10H18.0142Z" fill="#3E435F"/>
        </svg>
        <span>Employee is experiencing symptoms and seeking a medical diagnosis</span>
      </li>
    </ul>
    <FormItem/>
  </LayOut>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LayOut from './components/LayOut.vue'
import FormItem from './components/FormItem.vue'

export default {
  name: 'App',
  components: {
    LayOut,
    FormItem
  }
}
</script>

<style>
body {
  background-color: #F5F7FB;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

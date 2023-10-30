<template>
<div>
  <ul >
    <li>FFCRA Information</li>
    <li>FAQs</li>
    <li>Profile</li>
  </ul>
  <section>
    <slot></slot>
  </section>
  </div>
</template>

  <script>
  export default {
    name: 'LayOut',
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

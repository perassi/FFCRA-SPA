<template>
<div>
 
<div class="relative overflow-x-auto">
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div class="grid grid-cols-12 gap-4 bg-[#D6DDEB] px-[20px] py-[20px] text-[15px]">
    <div>Employee Name</div>
    <div>Regular Rate of Pay (hourly)</div>
    <div class="col-span-2">Hours of qualified sick leave</div>
    <div># of days qualified sick</div>
    <div class="col-span-3">Dates employee was out	Employee </div>
    <div class="col-span-1">Employee Total Sick Pay</div>
    <div class="col-span-1">Reimbursement per employee</div>
  </div>
  <div class="grid grid-cols-12 gap-4 ">
    <div>John Doe</div>
    <div>$20.00</div>
    <div class="col-span-2">80</div>
    <div>10</div>
    <div class="col-span-3">Dates employee was out	Employee </div>
    <div class="col-span-1">$1,600.00</div>
    <div class="col-span-1">$1,600.00</div>
  </div>
</div>

</div>



<form v-on:submit="didSubmitForm">
  <div v-for="(item, index) in items" :key="index">
    
    <label :for="`data[${index}]name`">name:</label>
    <input :name="`data[${index}]name`" required type="text" v-model="item.name">
    
    <label :for="`data[${index}]email`">email:</label>
    <input :name="`data[${index}]email`" required type="email" v-model="item.email">
    
    <label :for="`data[${index}]enabled`">enabled:</label>
    <input :name="`data[${index}]enabled`" type="checkbox" v-model="item.enabled">

    <button v-on:click="items.splice(index, 1)" type="button">
      &times;
    </button>
    
    <hr>
  </div>
  
  <button v-on:click="items.push({})" type="button">
    add
  </button>

  <br>
  
  <button type="submit">save</button>
</form>

<pre>{{ items }}</pre>
</div>
  </template>
  
  <script>
  
  export default {
    name: 'FormItem',
    components: {},
    data() {
    return {
      items: [
        {
          name: 'Test',
          email: 'text@example.com',
          enabled: true,
        },
      ],
    };
  },
  methods: {
   didSubmitForm(e) {
     e.preventDefault();
     
     const data = new FormData(e.target);
     
     console.log('Form data:', data);
   } 
  },
  }
  </script>
  
  <style> </style>
  
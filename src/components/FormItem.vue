<template>
<div>
 
<div class="relative overflow-x-auto">
  <form v-on:submit="didSubmitForm">

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <div class="grid grid-cols-16 gap-2 bg-[#D6DDEB] px-[20px] py-[20px] text-[15px]">
    <div class="col-span-2">Employee Name</div>
    <div class="col-span-2">Regular Rate of Pay (hourly)</div>
    <div class="col-span-2">Hours of qualified sick leave</div>
    <div class="col-span-2"># of days qualified sick</div>
    <div class="col-span-4">Dates employee was out	Employee </div>
    <div class="col-span-2">Employee Total Sick Pay</div>
    <div class="col-span-2">Reimbursement per employee</div>
  </div>
  <div class="grid grid-cols-16 gap-2 mt-[10px]" v-for="(item, index) in items" :key="index">
    <div class="col-span-2">
      <span class="flex items-center border-[#D1D7E3] border-[1px] h-[44px] text-[#f5f7fb] w-[90px] pl-[10px] rounded-[10px] bg-white gap-[3px] focus:outline-none overflow-hidden">
          $<input :name="`data[${index}]name`" v-model="item.name" required type="text" placeholder="Name" class="w-full h-full text-[#D1D7E3] focus:outline-none" >
      </span>
    </div>

    <div class="col-span-2">
      <span class="flex items-center border-[#D1D7E3] border-[1px] h-[44px] text-[#f5f7fb] w-[90px] pl-[10px] rounded-[10px] bg-white gap-[3px] focus:outline-none overflow-hidden">
          $<input  :name="`data[${index}]payRate`" v-model="item.payRate"  required type="text" placeholder="Name" class="w-full h-full text-[#D1D7E3] focus:outline-none" >
      </span>
    </div>
    <div class="col-span-2"> 
      <span class="flex items-center border-[#D1D7E3] border-[1px] h-[44px] text-[#f5f7fb] w-[90px] pl-[10px] rounded-[10px] bg-white gap-[3px] focus:outline-none overflow-hidden">
          $<input  :name="`data[${index}]sickHours`" v-model="item.sickHours"  required type="text" placeholder="Name" class="w-full h-full text-[#D1D7E3] focus:outline-none" >
      </span>
    </div>
    <div class="col-span-2"> 
      <span class="flex items-center border-[#D1D7E3] border-[1px] h-[44px] text-[#f5f7fb] w-[90px] pl-[10px] rounded-[10px] bg-white gap-[3px] focus:outline-none overflow-hidden">
          $<input  required type="text" placeholder="Name" class="w-full h-full text-[#D1D7E3] focus:outline-none" >
      </span>
    </div>

    <div class="col-span-4">
      <ul class="flex items-center gap-[10px]">
        <li class="text-[#3E435F] text-[15px]">from:</li>
        <li> <VueDatePicker v-model="date"/></li>
        <li class="text-[#3E435F] text-[15px]">to:</li>
        <li> <VueDatePicker v-model="date2"/></li>

      </ul>
    </div>
    <div class="col-span-2">
      <span class="text-[#0047CC] font-medium	">$1,600.00</span>
    </div>
    <div class="col-span-2">
            <span class="text-[#0047CC] font-medium	">$1,600.00</span>
    </div>
  </div>
</div>
</form>
<button v-on:click="items.push({  })" type="button">add additional employee</button>
</div>



<!-- <form v-on:submit="didSubmitForm">
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
</form> -->

<pre>{{ items }}</pre>
</div>
  </template>
  
  <script>
  
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css'


  export default {
    name: 'FormItem',
    components: { VueDatePicker },
    data() {
    return {
      items: [
        {
          name: '',
          payRate: '0',
          sickHours: "0",
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
  
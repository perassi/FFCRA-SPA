<template>
  <LayOut>
    <pre>{{ result }}</pre>

    <h2  class="text-[40px] underline text-[#3E435F] mb-[51px]">Qualified Sick Leave</h2>
    <FormItem name="selfLeave" title="Self Leave" subTitle="Reason for Qualified Sick Leave (may not exceed 10 workdays or 80 hours)" :list="selfLeaveList" @onDataChange="updateData"/>
    <div class="h-[2px] bg-[#0047CC] w-full my-[50px]"></div>
    <FormItem name="caringForOthers" title="Caring For Others" subTitle="Reason for Qualified Sick Leave, may not exceed 10 workdays or 80 hours" :list="selfLeaveList" @onDataChange="updateData"/>
    <div class="h-[2px] bg-[#0047CC] w-full my-[50px]"></div>
    <FormItem name="caringForOthers" title="Qualified Family Leave" subTitle="(up to 10 weeks expiring on December 31, 2020), first 10 days may be unpaid:" :list="selfLeaveList" @onDataChange="updateData"/>
  </LayOut>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import LayOut from './components/LayOut.vue'
import FormItem from './components/FormItem.vue'

export default {
  name: 'App',
  data: function () {
    return {
      selfLeaveList: ["Employee's own quarantine or isolation order under federal, state or local law", "Employee's self-quarantine as advised by a health care provider", 'Employee is experiencing symptoms and seeking a medical diagnosis'],
      result: {
        selfLeave: 0,
        caringForOthers: 0,
        qualifiedFamilyLeave: 0
      }
    }
  },
  methods: {
    updateData: function ({ name, value }) {
      this.result[name] = value
    }
  },
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

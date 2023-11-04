<template>
    <div class="flex gap-[33px] flex-col 2xl:flex-row">
      <section class="order-2 2xl:order-1">
        <h2  class="text-[40px] underline text-[#3E435F] mb-[46px] font-[600] leading-[66px]">Qualified Sick Leave</h2>
        <FormItem name="selfLeave" title="Self Leave" subTitle="Reason for Qualified Sick Leave (may not exceed 10 workdays or 80 hours)" :list="selfLeaveList" :twoThousandLogic="false" @onDataChange="updateData"/>
        <div class="h-[2px] bg-[#dde4f7] w-full my-[50px]"></div>
        <FormItem name="caringForOthers" title="Caring For Others" subTitle="Reason for Qualified Sick Leave, may not exceed 10 workdays or 80 hours" :list="caringForOthersList" :twoThousandLogic="true"  @onDataChange="updateData"/>
        <div class="h-[2px] bg-[#dde4f7] w-full my-[50px]"></div>
        <FormItem name="qualifiedFamilyLeave" title="Qualified Family Leave" subTitle="(up to 10 weeks expiring on December 31, 2020), first 10 days may be unpaid:" :twoThousandLogic="true"  :list="qualifiedFamilyLeave" @onDataChange="updateData"/>
      </section>
      <section class="order-1 2xl:order-2">
        <ul class="bg-[#FFFFFF] border-[#0047CC] border-[2px] rounded-[10px] min-w-[280px] pt-[10px] 2xl:mt-[117px]">
          <li class="text-[21px] font-[600] text-center mb-[21px] xl:max-w-[174px] m-auto">Money Back to the company</li>
           <li class="text-[18px] flex justify-between bg-[#F5F7FB] mx-[11px] px-[8px]"><span class="text-[#3E435F] text-[15px]">Self Leave</span> <span class="text-[#0047CC] text-[15px]">${{ result.selfLeave  }}</span></li>
           <li class="text-[18px] flex justify-between mx-[11px] px-[8px] my-[11px]"><span class="text-[#3E435F] text-[15px]">Caring For<br/> Others</span><span class="text-[#0047CC] text-[15px]">${{ result.caringForOthers }}</span></li>
           <li class="text-[18px] flex justify-between bg-[#F5F7FB] mx-[11px] px-[8px]"><span class="text-[#3E435F] text-[15px]">Qualified Family<br/>Leave</span><span class="text-[#0047CC] text-[15px]">${{ result.qualifiedFamilyLeave }}</span></li>
           <li class="bg-[#0047CC] text-[white] flex justify-between text-[16px] uppercase font-[600] pb-[9px] pt-[16px] px-[16px] mt-[15px]"><span>Total: </span><span>${{  Number(result.selfLeave) + Number(result.caringForOthers)  + Number(result.qualifiedFamilyLeave) }}</span></li>
        </ul>
      </section>
    </div>
  </template>
<script>
  import FormItem from '../components/FormItem.vue'
  
  export default {
    name: 'FFCRAInformation',
    data: function () {
      return {
        selfLeaveList: ["Employee's own quarantine or isolation order under federal, state or local law", "Employee's self-quarantine as advised by a health care provider", 'Employee is experiencing symptoms and seeking a medical diagnosis'],
        caringForOthersList: ["Employee is caring for another individual subject to quarantine or isolation order self-quarantine", "Employee is caring for son or daughter as a result of the child's school closing or other child care unavailable being unavailable"],
        qualifiedFamilyLeave: ["Employee must be employed for at least 30 days", "Employee is caring for his/her son or daughter as a result of the child's school closing or other child care being unavailable due to COVID-19"],
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
      FormItem
    }
  }
  </script>
  
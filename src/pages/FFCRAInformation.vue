<template>
  <div class="flex gap-[33px] flex-col 2xl:flex-row" v-if="render">
    <section class="order-2 2xl:order-1">
      <h2 class="text-[30px] xl:text-[40px] underline text-[#3E435F] mb-[2px] xl:mb-[46px] font-[600] leading-[66px]">
        Qualified Sick Leave</h2>
      <FormItem name="selfLeave" title="Self Leave"
                :response-collection="responseCollection"
                :doc-id="docId"
                :existing-items="selfLeaveItems"
                :collection="selfLeavesCollection"
                subTitle="Reason for Qualified Sick Leave (may not exceed 10 workdays or 80 hours)"
                :list="selfLeaveList" :twoThousandLogic="false" @onDataChange="updateData"/>
      <div class="h-[2px] bg-[#dde4f7] w-full my-[32px] xl:my-[50px]"></div>
      <FormItem name="caringForOthers" title="Caring For Others"
                :response-collection="responseCollection"
                :doc-id="docId"
                :existing-items="caringLeaveItems"
                :collection="caringLeavesCollection"
                subTitle="Reason for Qualified Sick Leave, may not exceed 10 workdays or 80 hours"
                :list="caringForOthersList" :twoThousandLogic="true" @onDataChange="updateData"/>
      <div class="h-[2px] bg-[#dde4f7] w-full my-[32px] my-[50px]"></div>
      <FormItem name="qualifiedFamilyLeave" title="Qualified Family Leave"
                :response-collection="responseCollection"
                :doc-id="docId"
                :existing-items="familyLeaveItems"
                :collection="familyLeavesCollection"
                subTitle="(up to 10 weeks expiring on December 31, 2020), first 10 days may be unpaid:"
                :twoThousandLogic="true" :list="qualifiedFamilyLeave" @onDataChange="updateData"/>
    </section>
    <section class="order-1 2xl:order-2">
      <ul class="bg-[#FFFFFF] border-[#0047CC] border-[2px] rounded-[10px] min-w-[280px] pt-[10px] 2xl:mt-[117px]">
        <li class="text-[21px] font-[600] text-center mb-[21px] xl:max-w-[174px] m-auto">Money Back to the company</li>
        <li class="text-[18px] flex justify-between bg-[#F5F7FB] mx-[11px] px-[19px] xl:px-[8px]"><span
            class="text-[#3E435F] text-[15px]">Self Leave</span> <span
            class="text-[#0047CC] text-[15px]">${{ result.selfLeave }}</span></li>
        <li class="text-[18px] flex justify-between mx-[11px] px-[19px] xl:px-[8px] my-[11px]"><span
            class="text-[#3E435F] text-[15px]">Caring For Others</span><span
            class="text-[#0047CC] text-[15px]">${{ result.caringForOthers }}</span></li>
        <li class="text-[18px] flex justify-between bg-[#F5F7FB] mx-[11px] px-[19px] xl:px-[8px]"><span
            class="text-[#3E435F] text-[15px]">Qualified Family Leave</span><span
            class="text-[#0047CC] text-[15px]">${{ result.qualifiedFamilyLeave }}</span></li>
        <li class="bg-[#0047CC] text-[white] flex justify-between text-[16px] uppercase font-[600] pb-[9px] pt-[12px] px-[27px] xl:px-[16px] mt-[22px] xl:mt-[15px]">
          <span>Total: </span><span>${{
            Number(result.selfLeave) + Number(result.caringForOthers) + Number(result.qualifiedFamilyLeave)
          }}</span></li>
      </ul>
    </section>
  </div>
</template>
<script>
import FormItem from '../components/FormItem.vue'
import {db} from "@/firebase";

export default {
  name: 'FFCRAInformation',
  data: function () {
    return {
      render: false,
      docId: "",
      responseCollection: 'ffcra-responses',

      selfLeavesCollection: 'self-leaves',
      selfLeaveItems: [],
      selfLeaveList: ["Employee's own quarantine or isolation order under federal, state or local law", "Employee's self-quarantine as advised by a health care provider", 'Employee is experiencing symptoms and seeking a medical diagnosis'],

      caringLeavesCollection: 'caring-leaves',
      caringLeaveItems: [],
      caringForOthersList: ["Employee is caring for another individual subject to quarantine or isolation order self-quarantine", "Employee is caring for son or daughter as a result of the child's school closing or other child care unavailable being unavailable"],

      familyLeavesCollection: 'family-leaves',
      familyLeaveItems: [],
      qualifiedFamilyLeave: ["Employee must be employed for at least 30 days", "Employee is caring for his/her son or daughter as a result of the child's school closing or other child care being unavailable due to COVID-19"],

      result: {
        selfLeave: 0,
        caringForOthers: 0,
        qualifiedFamilyLeave: 0
      }
    }
  },
  methods: {
    updateData: function ({name, value}) {
      this.result[name] = value
    },
    async populateSelfLeavesItems() {
      const snapshot = await db.collection(this.responseCollection).doc(this.docId)
          .collection(this.selfLeavesCollection).get();
      snapshot.forEach(doc => {
        this.selfLeaveItems.push({...doc.data(), id: doc.id})
      });
    },
    async populateCaringLeavesItems() {
      const snapshot = await db.collection(this.responseCollection).doc(this.docId)
          .collection(this.caringLeavesCollection).get();
      snapshot.forEach(doc => {
        this.caringLeaveItems.push({...doc.data(), id: doc.id})
      });
    },
    async populateFamilyLeavesItems() {
      const snapshot = await db.collection(this.responseCollection).doc(this.docId)
          .collection(this.familyLeavesCollection).get();
      snapshot.forEach(doc => {
        this.familyLeaveItems.push({...doc.data(), id: doc.id})
      });
    },
    async resolveDocId() {
      const snapshot = await db.collection(this.responseCollection)
          .where('Email', '==', 'dev@binaryforest.io')
          .orderBy('created_at', 'desc').limit(1).get();
      snapshot.forEach(doc => {
        this.docId = doc.id
      });
      console.log(this.docId)
    }
  },
  async mounted() {
    await this.resolveDocId();
    if (this.docId) {
      await this.populateSelfLeavesItems()
      await this.populateCaringLeavesItems()
      await this.populateFamilyLeavesItems()
      this.render = true
    }
  },
  components: {
    FormItem
  }
}
</script>
  
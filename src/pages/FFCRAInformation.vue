<template>
  <div class="flex gap-[33px] flex-col 2xl:flex-row 2xl:mr-[300px]" v-if="render">
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
      <p className="text-nowrap xl:flex sm:hidden gap-2 2xl:mt-[20px] 2xl:fixed font-[600] w-full items-center text-[18px] 2xl:w-[280px] justify-end cursor-pointer mb-[20px]"> <img v-bind:src="require('../assets/blue-support.svg')" /> <span>Need</span><span>help?</span>
        <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.906211 6.31844C0.953923 6.32618 1.00221 6.32975 1.05052 6.32913L9.27667 6.32912L9.0973 6.41255C8.92197 6.49554 8.76246 6.60848 8.62592 6.74627L6.3191 9.05309C6.01529 9.34311 5.96424 9.80967 6.19813 10.1585C6.47034 10.5303 6.99238 10.611 7.36416 10.3388C7.39419 10.3168 7.42274 10.2928 7.44957 10.267L11.621 6.09552C11.947 5.76989 11.9473 5.24165 11.6217 4.91565C11.6215 4.91544 11.6212 4.91521 11.621 4.915L7.44957 0.743534C7.12331 0.418186 6.59507 0.418915 6.2697 0.745176C6.24409 0.770856 6.22019 0.798179 6.19813 0.826962C5.96424 1.17583 6.01529 1.64238 6.3191 1.9324L8.62175 4.24339C8.74416 4.36593 8.88489 4.46868 9.0389 4.54791L9.28919 4.66054L1.09643 4.66054C0.670237 4.64471 0.296317 4.94243 0.216251 5.36135C0.142495 5.81617 0.451392 6.24465 0.906211 6.31844Z" fill="#3E435F"/>
        </svg>
        </p>

      <ul class="bg-[#FFFFFF] border-[#0047CC] border-[2px] rounded-[10px] min-w-[280px] pt-[10px] 2xl:mt-[117px] 2xl:fixed">
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
        const record = doc.data()
        record.from = record.from ? record.from.toDate() : null
        record.to = record.to ? record.to.toDate() : null
        this.selfLeaveItems.push({id: doc.id, ...record})
      });
    },
    async populateCaringLeavesItems() {
      const snapshot = await db.collection(this.responseCollection).doc(this.docId)
          .collection(this.caringLeavesCollection).get();
      snapshot.forEach(doc => {
        const record = doc.data()
        record.from = record.from ? record.from.toDate() : null
        record.to = record.to ? record.to.toDate() : null
        this.caringLeaveItems.push({...record, id: doc.id})
      });
    },
    async populateFamilyLeavesItems() {
      const snapshot = await db.collection(this.responseCollection).doc(this.docId)
          .collection(this.familyLeavesCollection).get();
      snapshot.forEach(doc => {
        const record = doc.data()
        record.from = record.from ? record.from.toDate() : null
        record.to = record.to ? record.to.toDate() : null
        this.familyLeaveItems.push({...record, id: doc.id})
      });
    },
    async resolveDocId() {
      const email = this.$route.query.email
      const snapshot = await db.collection(this.responseCollection)
          .where('Email', '==', email)
          .orderBy('created_at', 'desc').limit(1).get();
      snapshot.forEach(doc => {
        this.docId = doc.id
      });
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
  

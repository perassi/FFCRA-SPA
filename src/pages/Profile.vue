<template>
  <div class="flex gap-[33px] flex-col 2xl:flex-row">
    <section class="order-2 2xl:order-1">
      <h2 class="text-[30px] xl:text-[40px] underline text-[#3E435F] mb-[2px] xl:mb-[10px] font-[600] leading-[66px]">
        Profile</h2>
      <section v-if="docData">
        <ul class="bg-[#FFFFFF] min-w-[580px] pt-[10px] 2xl:mt-[117px]">
          <li class="text-[18px] flex justify-between bg-[#F5F7FB]"><span
              class="text-[#3E435F] font-[600] text-[15px]">Name</span> <span
              class="text-[#0047CC] text-[15px]">{{ docData.Name }}</span></li>
          <li class="text-[18px] flex justify-between my-[11px]"><span
              class="text-[#3E435F] font-[600] text-[15px]">Email</span><span
              class="text-[#0047CC] text-[15px]">{{ docData.Email }}</span></li>
          <li class="text-[18px] flex justify-between bg-[#F5F7FB]"><span
              class="text-[#3E435F] font-[600] text-[15px]">Phone</span><span
              class="text-[#0047CC] text-[15px]">{{ docData.Phone }}</span></li>
        </ul>
      </section>
    </section>
  </div>
</template>
<script>

import {db} from "@/firebase";

export default {
  name: 'FAQs',
  data: function () {
    return {
      responseCollection: 'ffcra-responses',
      docData: null
    }
  },
  methods: {
    async resolveDocId() {
      const email = this.$route.query.email
      const snapshot = await db.collection(this.responseCollection)
          .where('Email', '==', email)
          .orderBy('created_at', 'desc').limit(1).get();
      snapshot.forEach(doc => {
        this.docData = {id: doc.id, ...doc.data()}
      });
    }
  },
  async mounted() {
    await this.resolveDocId()
  },
  components: {}
}
</script>
   
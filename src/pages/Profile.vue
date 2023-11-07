<template>
  <div>Profile</div>
  <div v-if="docData">
    <div>Name: {{ docData.Name }}</div>
    <div>Email: {{ docData.Email }}</div>
    <div>Phone: {{ docData.Phone }}</div>
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
   
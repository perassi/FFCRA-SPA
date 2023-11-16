<template>
  <div>
    <p class="mb-[9px]"><span
        class="text-[#3E435F] text-[24px] text-[#3E435F] font-[600] mr-[12px] block xl:inline">{{ title }}</span> <span
        class="text-[#0047CC] text-[16px] italic">{{ subTitle }}</span></p>

    <ul class="text-[16px] text-[#3E435F] mb-[17px]">
      <li class="flex items-start xl:items-center gap-[10px]" v-for="(item, index) in list" :key="index">
        <svg width="21" height="20" class="w-[30px] h-[30px] xl:w-[21px] xl:h-[21px]" viewBox="0 0 21 20" fill="none"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M5.91416 8.1L4.51416 9.5L9.01416 14L19.0142 4L17.6142 2.6L9.01416 11.2L5.91416 8.1ZM18.0142 10C18.0142 14.4 14.4142 18 10.0142 18C5.61416 18 2.01416 14.4 2.01416 10C2.01416 5.6 5.61416 2 10.0142 2C10.8142 2 11.5142 2.1 12.2142 2.3L13.8142 0.7C12.6142 0.3 11.3142 0 10.0142 0C4.51416 0 0.0141602 4.5 0.0141602 10C0.0141602 15.5 4.51416 20 10.0142 20C15.5142 20 20.0142 15.5 20.0142 10H18.0142Z"
              fill="#3E435F"/>
        </svg>
        <span class="leading-[25px] xl:leading-[35px]">{{ item }}</span>
      </li>
    </ul>
    <div class="relativ">
      <form v-on:submit="didSubmitForm">
        <div class="relative overflow-scroll">
          <div
              class="grid grid-cols-16 gap-2 bg-[#D6DDEB] px-[20px] py-[20px] text-[15px] rounded-[10px] min-w-[965px]">
            <div class="col-span-2">Employee Name</div>
            <div class="col-span-2">Regular Rate of Pay (hourly)</div>
            <div class="col-span-2">Hours of qualified sick leave</div>
            <div class="col-span-2"># of days qualified sick</div>
            <div class="col-span-4">Dates employee was out</div>
            <div class="col-span-2">Employee Total Sick Pay</div>
            <div class="col-span-2">Reimbursement per employee</div>
          </div>
          <div
              class="grid grid-cols-16 gap-2 mt-[10px] border-[#0047CC] border-[1px] rounded-[10px] p-[7px] pl-[20px] min-h-[59px] min-w-[965px]"
              :class="{ 'bg-[white]': item.saved, 'border-[#D1D7E3]': item.saved }" v-for="(item, index) in items"
              :key="index">
            <div class="col-span-2">
      <span v-if="!item.saved"
            class="flex items-center border-[#D1D7E3] w-full border-[1px] h-[44px] text-[#D1D7E3] w-[90px] pl-[10px] rounded-[10px] bg-white gap-[3px] focus:outline-none overflow-hidden">
          <input :name="`data[${index}]name`" v-model="item.name" required type="text" placeholder="Name"
                 class="w-full h-full text-[#3E435F] focus:outline-none">
      </span>
              <span v-if="item.saved" class="leading-[44px]">{{ item.name }}</span>
            </div>
            <div class="col-span-2">
      <span v-if="!item.saved"
            class="flex items-center border-[#D1D7E3] border-[1px] h-[44px] text-[#3E435F] w-[90px] pl-[10px] rounded-[10px] bg-white gap-[3px] focus:outline-none overflow-hidden">
          $<input :name="`data[${index}]payRate`" v-model="item.payRate" min=0 oninput="validity.valid||(value='');"
                  required type="number" class="w-full h-full text-[#3E435F]  focus:outline-none">
      </span>
              <span v-if="item.saved" class="leading-[44px]">{{ item.payRate }}</span>
            </div>
            <div class="col-span-2">
      <span v-if="!item.saved"
            class="flex items-center border-[#D1D7E3] border-[1px] h-[44px] text-[#3E435F] w-[90px] pl-[10px] rounded-[10px] bg-white gap-[3px] focus:outline-none overflow-hidden">
          #<input :name="`data[${index}]sickHours`" v-model="item.sickHours" min=0 oninput="validity.valid||(value='');"
                  required type="number" class="w-full h-full text-[#3E435F]  focus:outline-none">
      </span>
              <span v-if="item.saved" class="leading-[44px]">{{ item.sickHours }}</span>
            </div>
            <div class="col-span-2">
      <span v-if="!item.saved"
            class="flex items-center border-[#D1D7E3] border-[1px] h-[44px] text-[#3E435F] w-[90px] pl-[10px] rounded-[10px] bg-white gap-[3px] focus:outline-none overflow-hidden">
          #<input :name="`data[${index}]sickDays`" v-model="item.sickDays" required min=0
                  oninput="validity.valid||(value='');" type="number"
                  class="w-full h-full text-[#3E435F]  focus:outline-none">
      </span>
              <span v-if="item.saved" class="leading-[44px]">{{ item.sickDays }}</span>
            </div>
            <div class="col-span-4 flex">
              <ul class="flex items-center gap-[10px]">
                <li>
                  <VueDatePicker v-model="item.from" :enable-time-picker="false" placeholder="From" :teleport="true"/>
                </li>
                <li>
                  <VueDatePicker v-model="item.to" :enable-time-picker="false" placeholder="To" :teleport="true"/>
                </li>
              </ul>
            </div>
            <div class="col-span-2 flex items-center">
              <span v-if="item.saved"
                    class="text-[#0047CC] font-medium	">${{ (item.payRate * item.sickHours).toFixed(0) }}</span>
            </div>
            <div class="col-span-2 flex items-center">
              <span v-if="item.saved" class="text-[#0047CC] font-medium	">${{
                  ((item.payRate * item.sickHours) < 2000 && twoThousandLogic) ? (67 / 100 * (item.payRate * item.sickHours)).toFixed(0) : (item.payRate * item.sickHours).toFixed(0)
                }}</span>
            </div>
            <div class="col-span-1 flex items-center">
              <ul class="flex gap-[10px] items-center">
                <li class="cursor-pointer">

                  <svg v-if="item.saved" width="19" height="18" viewBox="0 0 19 18" fill="none"
                       xmlns="http://www.w3.org/2000/svg" v-on:click="save(index,false)">
                    <g clip-path="url(#clip0_1_430)">
                      <path
                          d="M14.7705 9C14.3558 9 14.0205 9.336 14.0205 9.75V15.75C14.0205 16.1632 13.6845 16.5 13.2705 16.5H2.77051C2.35651 16.5 2.02051 16.1632 2.02051 15.75V5.25C2.02051 4.83675 2.35651 4.5 2.77051 4.5H8.77051C9.18526 4.5 9.52051 4.164 9.52051 3.75C9.52051 3.336 9.18526 3 8.77051 3H2.77051C1.53001 3 0.520508 4.0095 0.520508 5.25V15.75C0.520508 16.9905 1.53001 18 2.77051 18H13.2705C14.511 18 15.5205 16.9905 15.5205 15.75V9.75C15.5205 9.33525 15.1853 9 14.7705 9Z"
                          fill="#3E435F"/>
                      <path
                          d="M7.55249 8.31675C7.49999 8.36925 7.46474 8.436 7.44974 8.508L6.91948 11.16C6.89473 11.283 6.93373 11.4098 7.02223 11.499C7.09348 11.5703 7.18948 11.6085 7.28773 11.6085C7.31173 11.6085 7.33649 11.6063 7.36124 11.601L10.0125 11.0708C10.086 11.0558 10.1527 11.0205 10.2045 10.968L16.1385 5.034L13.4872 2.38275L7.55249 8.31675Z"
                          fill="#3E435F"/>
                      <path
                          d="M17.9715 0.548987C17.2403 -0.182263 16.0508 -0.182263 15.3203 0.548987L14.2823 1.58699L16.9335 4.23824L17.9715 3.20024C18.3255 2.84699 18.5205 2.37599 18.5205 1.87499C18.5205 1.37399 18.3255 0.902987 17.9715 0.548987Z"
                          fill="#3E435F"/>
                    </g>
                    <defs>
                      <clipPath id="clip0_1_430">
                        <rect width="18" height="18" fill="white" transform="translate(0.520508)"/>
                      </clipPath>
                    </defs>
                  </svg>

                  <svg v-if="!item.saved" width="18" height="17" viewBox="0 0 18 17" fill="none"
                       xmlns="http://www.w3.org/2000/svg" v-on:click="save(index,true)">
                    <path
                        d="M14.4753 0H2.5127C1.4142 0 0.520508 0.893695 0.520508 1.99219V15.0078C0.520508 16.1063 1.4142 17 2.5127 17H15.5283C16.6268 17 17.5205 16.1063 17.5205 15.0078V3.04526L14.4753 0ZM5.7334 1.32812H9.68457V3.85156H11.0127V1.32812H12.3408V4.51562C12.3408 4.88179 12.0429 5.17969 11.6768 5.17969H6.39746C6.0313 5.17969 5.7334 4.88179 5.7334 4.51562V1.32812ZM13.6689 15.6719H4.40527V9.82812C4.40527 9.46196 4.70317 9.16406 5.06934 9.16406H13.0049C13.371 9.16406 13.6689 9.46196 13.6689 9.82812V15.6719ZM16.1924 15.0078C16.1924 15.374 15.8945 15.6719 15.5283 15.6719H14.9971V9.82812C14.9971 8.72963 14.1034 7.83594 13.0049 7.83594H5.06934C3.97084 7.83594 3.07715 8.72963 3.07715 9.82812V15.6719H2.5127C2.14653 15.6719 1.84863 15.374 1.84863 15.0078V1.99219C1.84863 1.62602 2.14653 1.32812 2.5127 1.32812H4.40527V4.51562C4.40527 5.61412 5.29897 6.50781 6.39746 6.50781H11.6768C12.7753 6.50781 13.6689 5.61412 13.6689 4.51562V1.32812H13.9251L16.1924 3.59537V15.0078Z"
                        fill="#3E435F"/>
                  </svg>

                </li>
                <li class="cursor-pointer" v-on:click="deleteItem(index)">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M15.8333 5.83334C15.6123 5.83334 15.4003 5.92114 15.2441 6.07742C15.0878 6.2337 15 6.44566 15 6.66668V15.9925C14.9761 16.4139 14.7866 16.8088 14.4729 17.0912C14.1592 17.3735 13.7466 17.5205 13.325 17.5H6.67498C6.25339 17.5205 5.8408 17.3735 5.52707 17.0912C5.21334 16.8088 5.02389 16.4139 4.99998 15.9925V6.66668C4.99998 6.44566 4.91218 6.2337 4.7559 6.07742C4.59962 5.92114 4.38766 5.83334 4.16665 5.83334C3.94563 5.83334 3.73367 5.92114 3.57739 6.07742C3.42111 6.2337 3.33331 6.44566 3.33331 6.66668V15.9925C3.3571 16.856 3.72213 17.6749 4.34846 18.2699C4.97479 18.8648 5.81137 19.1873 6.67498 19.1667H13.325C14.1886 19.1873 15.0252 18.8648 15.6515 18.2699C16.2778 17.6749 16.6429 16.856 16.6666 15.9925V6.66668C16.6666 6.44566 16.5789 6.2337 16.4226 6.07742C16.2663 5.92114 16.0543 5.83334 15.8333 5.83334Z"
                        fill="#3E435F"/>
                    <path
                        d="M16.6667 3.33334H13.3333V1.66668C13.3333 1.44566 13.2455 1.2337 13.0893 1.07742C12.933 0.921141 12.721 0.833344 12.5 0.833344H7.5C7.27899 0.833344 7.06702 0.921141 6.91074 1.07742C6.75446 1.2337 6.66667 1.44566 6.66667 1.66668V3.33334H3.33333C3.11232 3.33334 2.90036 3.42114 2.74408 3.57742C2.5878 3.7337 2.5 3.94566 2.5 4.16668C2.5 4.38769 2.5878 4.59965 2.74408 4.75593C2.90036 4.91221 3.11232 5.00001 3.33333 5.00001H16.6667C16.8877 5.00001 17.0996 4.91221 17.2559 4.75593C17.4122 4.59965 17.5 4.38769 17.5 4.16668C17.5 3.94566 17.4122 3.7337 17.2559 3.57742C17.0996 3.42114 16.8877 3.33334 16.6667 3.33334ZM8.33333 3.33334V2.50001H11.6667V3.33334H8.33333Z"
                        fill="#3E435F"/>
                    <path
                        d="M9.16667 14.1667V8.33333C9.16667 8.11232 9.07887 7.90036 8.92259 7.74408C8.76631 7.5878 8.55435 7.5 8.33333 7.5C8.11232 7.5 7.90036 7.5878 7.74408 7.74408C7.5878 7.90036 7.5 8.11232 7.5 8.33333V14.1667C7.5 14.3877 7.5878 14.5996 7.74408 14.7559C7.90036 14.9122 8.11232 15 8.33333 15C8.55435 15 8.76631 14.9122 8.92259 14.7559C9.07887 14.5996 9.16667 14.3877 9.16667 14.1667Z"
                        fill="#3E435F"/>
                    <path
                        d="M12.5 14.1667V8.33333C12.5 8.11232 12.4122 7.90036 12.2559 7.74408C12.0996 7.5878 11.8877 7.5 11.6666 7.5C11.4456 7.5 11.2337 7.5878 11.0774 7.74408C10.9211 7.90036 10.8333 8.11232 10.8333 8.33333V14.1667C10.8333 14.3877 10.9211 14.5996 11.0774 14.7559C11.2337 14.9122 11.4456 15 11.6666 15C11.8877 15 12.0996 14.9122 12.2559 14.7559C12.4122 14.5996 12.5 14.3877 12.5 14.1667Z"
                        fill="#3E435F"/>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="showLoader" class="loader-center">
            <div role="status">
              <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                   viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"/>
                <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </form>
      <button class="text-[#0047CC] flex items-center gap-[10px] mt-[12px]" v-on:click="add()" type="button">
        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_1_421)">
            <path
                d="M7.5 0.635254C3.36425 0.635254 0 3.9995 0 8.13525C0 12.271 3.36425 15.6353 7.5 15.6353C11.6358 15.6353 15 12.2704 15 8.13525C15 4.00009 11.6358 0.635254 7.5 0.635254ZM7.5 14.4734C4.00562 14.4734 1.16188 11.6302 1.16188 8.13525C1.16188 4.64028 4.00562 1.79714 7.5 1.79714C10.9944 1.79714 13.8381 4.64028 13.8381 8.13525C13.8381 11.6302 10.995 14.4734 7.5 14.4734Z"
                fill="#0047CC"/>
            <path
                d="M10.4048 7.50203H8.08098V5.17826C8.08098 4.85758 7.8213 4.59731 7.50003 4.59731C7.17876 4.59731 6.91907 4.85758 6.91907 5.17826V7.50203H4.5953C4.27403 7.50203 4.01434 7.76231 4.01434 8.08299C4.01434 8.40367 4.27403 8.66395 4.5953 8.66395H6.91907V10.9877C6.91907 11.3084 7.17876 11.5687 7.50003 11.5687C7.8213 11.5687 8.08098 11.3084 8.08098 10.9877V8.66395H10.4048C10.726 8.66395 10.9857 8.40367 10.9857 8.08299C10.9857 7.76231 10.726 7.50203 10.4048 7.50203Z"
                fill="#0047CC"/>
          </g>
          <defs>
            <clipPath id="clip0_1_421">
              <rect width="15" height="15" fill="white" transform="translate(0 0.635254)"/>
            </clipPath>
          </defs>
        </svg>
        <span class="font-[500]">Add Employee</span>
      </button>
    </div>
  </div>
</template>

<style>
.loader-center {
  margin: auto;
  left: 50%;
  top: 50%;
  position: absolute;
}
</style>

<script>

import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
import {db} from '@/firebase'

export default {
  name: 'FormItem',
  props: {
    name: String,
    title: String,
    subTitle: String,
    list: Array,
    twoThousandLogic: Boolean,
    collection: String,
    existingItems: Array,
    docId: String,
    responseCollection: String
  },
  components: {VueDatePicker},
  data() {
    return {
      showLoader: false,
      items: [
        {
          id: '',
          name: '',
          payRate: 0,
          sickHours: 0,
          sickDays: 0,
          sickPay: 0,
          from: null,
          to: null,
          saved: false
        },
      ],
    };
  },
  watch: {
    items: {
      handler(list) {
        const data = list.filter(i => i.saved).map((l) => {
          return JSON.parse(JSON.stringify({...l, sickPay: (Number(l.payRate) * Number(l.sickHours))}))
        })
        const value = data.reduce((a, b) => a + (this.twoThousandLogic ? this.calc(b) : b.sickPay), 0).toFixed(0)
        this.$emit('onDataChange', {name: this.name, value})
      },
      deep: true,
    },
  },
  methods: {
    calc(item) {
      const sum = Number(item.payRate) * Number(item.sickHours);
      return Number((sum < 2000 ? 67 / 100 * sum : sum).toFixed(0));
    },
    add() {
      this.items.push(
          {
            id: '',
            name: '',
            payRate: 0,
            sickHours: 0,
            sickDays: 0,
            from: null,
            to: null,
            saved: false
          }
      )
    },
    async save(index, state) {
      this.showLoader = true
      this.items = this.items.map((item, i) => {
        if (i === index) {
          item.saved = state;
        } else {
          item.saved = true;
        }
        return item
      })
      const doc = {...this.items[index]}
      const id = doc.id
      delete doc['id']
      if (!id) {
        const response = await db.collection(this.responseCollection).doc(this.docId)
            .collection(this.collection).add(doc)
        this.items[index].id = response.id
      } else {
        await db.collection(this.responseCollection).doc(this.docId)
            .collection(this.collection).doc(id).update(doc)
      }
      await this.markStatus('IN_PROGRESS')
      this.showLoader = false
    },
    async deleteItem(index) {
      this.showLoader = true
      const doc = {...this.items[index]}
      const id = doc.id
      await db.collection(this.responseCollection).doc(this.docId)
          .collection(this.collection).doc(id).delete()
      this.items = this.items.filter((item, i) => i !== index)
      this.showLoader = false
    },
    async markStatus(status) {
      await db.collection(this.responseCollection).doc(this.docId).update({'leave_form_status': status, updated_at: new Date()})
    },
    didSubmitForm(e) {
      e.preventDefault();
    }
  },
  mounted() {
    if (this.existingItems) {
      this.items = [...this.existingItems]
    }
  }
}
</script>

<style></style>
  
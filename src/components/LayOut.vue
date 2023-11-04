<script>
export default {
  name: 'LayOut',
  props: {
    msg: String
  }
}
</script>


<template>
  <div class="flex flex-col xl:flex-row">
    <ul
      class="bg-[#0047CC]  2xl:min-w-[273px] xl:min-w-[273px] text-[16px] text-white pt-[16px] xl:pt-[26px] xl:min-h-[100vh]"
    >
      <li class="mb-[16px] xl:mb-[51px] pr-[19px] flex justify-between items-center">
        <div class="xl:hidden space-y-2 ml-[22px]">
          <div class="w-[25px] h-[2px] bg-[white]"></div>
          <div class="w-[25px] h-[2px] bg-[white]"></div>
          <div class="w-[25px] h-[2px] bg-[white]"></div>
        </div>
        <img v-bind:src="require('../assets/logo.svg')" />
        <div  class="xl:hidden">
          <img v-bind:src="require('../assets/support.svg')" />
        </div>
      </li>
      <li
        class="border-t-[#4C7EDB] border-t-[1px] py-[18px] flex pl-[14px] gap-[10px] font-[500]"
      >
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_187"
            style="mask-type: luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="19"
            height="19"
          >
            <path
              d="M0 -5.91278e-05H18.7038V18.7037H0V-5.91278e-05Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_187)">
            <path
              d="M16.6215 12.865C17.4772 11.6396 17.9732 10.1835 17.9732 8.62137C17.9732 4.26349 14.1133 0.730706 9.35187 0.730706C4.59048 0.730706 0.730591 4.26349 0.730591 8.62137C0.730591 10.4498 1.41032 12.1328 2.55078 13.4708L0.730591 17.9733L5.71391 15.7766C6.8193 16.2482 8.05185 16.512 9.35187 16.512C10.8673 16.512 12.2915 16.1542 13.5289 15.5257"
              stroke="white"
              stroke-width="1.46123"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.35205 7.92723V11.8726"
              stroke="white"
              stroke-width="1.46123"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.35195 4.67603C8.94844 4.67603 8.62134 5.00313 8.62134 5.40665C8.62134 5.81017 8.94844 6.13727 9.35195 6.13727C9.75547 6.13727 10.0826 5.81017 10.0826 5.40665C10.0826 5.00313 9.75547 4.67603 9.35195 4.67603Z"
              fill="white"
            />
          </g>
        </svg>
        <a href="/">FFCRA Information</a>
      </li>
      <li
        class="border-t-[#4C7EDB] border-t-[1px] py-[18px] flex pl-[14px] gap-[10px]"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_1_200"
            style="mask-type: luminance"
            maskUnits="userSpaceOnUse"
            x="0"
            y="-1"
            width="24"
            height="25"
          >
            <path
              d="M0.78418 -0.000364304H23.9194V23.1349H0.78418V-0.000364304Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_1_200)">
            <path
              d="M22.2166 17.3923L22.7516 20.6059L19.5379 20.0709C18.4277 20.7225 17.1354 21.0962 15.7549 21.0962C12.845 21.0962 10.3227 19.4361 9.08368 17.0109C13.1567 16.9391 16.4359 13.6152 16.4359 9.5254C16.4359 8.30086 16.1417 7.14455 15.6203 6.1238C15.665 6.12289 15.7098 6.12244 15.7549 6.12244C19.8899 6.12244 23.2418 9.47434 23.2418 13.6093C23.2418 14.9893 22.8681 16.2821 22.2166 17.3923Z"
              stroke="white"
              stroke-width="1.37573"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.2945 13.6095H15.2695"
              stroke="white"
              stroke-width="1.37573"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.2945 16.5863H12.2189"
              stroke="white"
              stroke-width="1.37573"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M19.2944 10.6327H16.4221"
              stroke="white"
              stroke-width="1.37573"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.4358 9.52564C16.4358 13.6154 13.1566 16.9393 9.08357 17.0112C9.03883 17.0121 8.9941 17.0125 8.94891 17.0125C7.56848 17.0125 6.27616 16.6388 5.16594 15.9872L1.9523 16.5222L2.48731 13.3086C1.83572 12.1984 1.46204 10.9056 1.46204 9.52564C1.46204 5.39066 4.81394 2.03876 8.94891 2.03876C11.8589 2.03876 14.3812 3.6989 15.6202 6.12403C16.1416 7.14478 16.4358 8.3011 16.4358 9.52564Z"
              stroke="white"
              stroke-width="1.37573"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.24359 7.39709C7.24359 6.45533 8.00705 5.69191 8.94878 5.69191C9.89054 5.69191 10.654 6.45533 10.654 7.39709C10.654 8.33886 9.89054 9.10228 8.94878 9.10228V11.0995"
              stroke="white"
              stroke-width="1.37573"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.94893 14.0368C9.30346 14.0368 9.64312 13.7251 9.62672 13.359C9.61027 12.9918 9.3289 12.6812 8.94893 12.6812C8.5944 12.6812 8.25474 12.993 8.27114 13.359C8.28759 13.7262 8.56896 14.0368 8.94893 14.0368Z"
              fill="white"
            />
          </g>
        </svg>
        <a href="/faqs">FAQs</a>
      </li>
      <li
        class="border-y-[#4C7EDB] border-y-[1px] py-[18px] flex pl-[14px] gap-[10px]"
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_220)">
            <path
              d="M17.4226 2.92892C15.5339 1.04019 13.0226 0 10.3516 0C7.68051 0 5.16922 1.04019 3.28049 2.92892C1.39175 4.81766 0.351562 7.32895 0.351562 10C0.351562 12.6711 1.39175 15.1823 3.28049 17.0711C5.16922 18.9598 7.68051 20 10.3516 20C13.0226 20 15.5339 18.9598 17.4226 17.0711C19.3114 15.1823 20.3516 12.6711 20.3516 10C20.3516 7.32895 19.3114 4.81766 17.4226 2.92892ZM4.69162 16.7694C5.02182 13.9282 7.4646 11.7346 10.3516 11.7346C11.8735 11.7346 13.3046 12.3276 14.3811 13.4039C15.2905 14.3135 15.8641 15.5011 16.0117 16.7693C14.4781 18.0536 12.5037 18.8281 10.3516 18.8281C8.19946 18.8281 6.22513 18.0537 4.69162 16.7694ZM10.3516 10.5276C8.67691 10.5276 7.3143 9.16504 7.3143 7.49039C7.3143 5.81558 8.67691 4.45312 10.3516 4.45312C12.0262 4.45312 13.3888 5.81558 13.3888 7.49039C13.3888 9.16504 12.0262 10.5276 10.3516 10.5276ZM17.0203 15.7787C16.7216 14.5747 16.0989 13.4647 15.2097 12.5754C14.4894 11.8552 13.6374 11.3148 12.7081 10.9763C13.8252 10.2187 14.5607 8.93875 14.5607 7.49039C14.5607 5.16953 12.6724 3.28125 10.3516 3.28125C8.0307 3.28125 6.14243 5.16953 6.14243 7.49039C6.14243 8.93951 6.87851 10.2199 7.99652 10.9773C7.14157 11.2889 6.3504 11.7706 5.66971 12.4048C4.68399 13.3228 3.99948 14.4933 3.6821 15.7777C2.33795 14.2282 1.52344 12.2075 1.52344 10C1.52344 5.13214 5.4837 1.17188 10.3516 1.17188C15.2194 1.17188 19.1797 5.13214 19.1797 10C19.1797 12.2079 18.3649 14.2291 17.0203 15.7787Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_1_220">
              <rect
                width="20"
                height="20"
                fill="white"
                transform="translate(0.351562)"
              />
            </clipPath>
          </defs>
        </svg>

        <a  href="/profile"> Profile </a>
      </li>
    </ul>
    <section class="p-[40px]">
      <slot></slot>
    </section>
  </div>
</template>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

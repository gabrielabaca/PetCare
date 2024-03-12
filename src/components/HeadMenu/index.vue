<template>
  <form action="#" method="get" class="col-start-1 col-span-3 search">
    <input
      type="text"
      class="border rounded-lg"
      placeholder="Search"
      name="search"
    />
  </form>

  <div
    class="col-start-5 head-buttons flex justify-end items-center text-center space-x-3 float-end"
  >
    <button>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7" clip-path="url(#clip0_1_17789)">
          <path
            d="M19.875 6.26999C20.575 6.66799 21.005 7.41299 21 8.21799V15.502C21 16.311 20.557 17.057 19.842 17.45L13.092 21.72C12.7574 21.9037 12.3818 22 12 22C11.6182 22 11.2426 21.9037 10.908 21.72L4.158 17.45C3.80817 17.2588 3.51612 16.9771 3.31241 16.6345C3.1087 16.2918 3.0008 15.9006 3 15.502V8.21699C3 7.40799 3.443 6.66299 4.158 6.26999L10.908 2.28999C11.2525 2.10002 11.6396 2.0004 12.033 2.0004C12.4264 2.0004 12.8135 2.10002 13.158 2.28999L19.908 6.26999H19.875Z"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 16V16.01"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M12 13C12.4498 13.0014 12.8868 12.8511 13.2407 12.5734C13.5945 12.2958 13.8444 11.907 13.95 11.4698C14.0557 11.0327 14.0109 10.5726 13.8229 10.1641C13.6349 9.75549 13.3147 9.42219 12.914 9.21801C12.5162 9.01422 12.0611 8.95103 11.6228 9.03873C11.1845 9.12642 10.7888 9.35984 10.5 9.70101"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </button>
    <button>
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.7" clip-path="url(#clip0_1_17794)">
          <path
            d="M10 5C10 4.46957 10.2107 3.96086 10.5858 3.58579C10.9609 3.21071 11.4696 3 12 3C12.5304 3 13.0391 3.21071 13.4142 3.58579C13.7893 3.96086 14 4.46957 14 5C15.1484 5.54303 16.1274 6.38833 16.8321 7.4453C17.5367 8.50227 17.9404 9.73107 18 11V14C18.0753 14.6217 18.2954 15.2171 18.6428 15.7381C18.9902 16.2592 19.4551 16.6914 20 17H4C4.54494 16.6914 5.00981 16.2592 5.35719 15.7381C5.70457 15.2171 5.92474 14.6217 6 14V11C6.05956 9.73107 6.4633 8.50227 7.16795 7.4453C7.8726 6.38833 8.85159 5.54303 10 5Z"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 17V18C9 18.7956 9.31607 19.5587 9.87868 20.1213C10.4413 20.6839 11.2044 21 12 21C12.7956 21 13.5587 20.6839 14.1213 20.1213C14.6839 19.5587 15 18.7956 15 18V17"
            stroke="#0B1C33"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    </button>
    <button
      class="bg-[#3788E5] pl-3 pr-3 pt-1 pb-1 rounded-lg text-white text-sm mt-[-5px]"
    >
      Add widget
    </button>
  </div>
</template>

<style scoped>
.search {
  width: 100%;
}
.search input {
  position: relative;
  line-height: 20px;
  font-size: 14px;
  background-image: url("icons/search.png");
  background-size: 18px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 10px 20px 10px 40px;
  width: 100%;
}
.search input::placeholder {
  color: rgba(11, 28, 51, 1);
}
.head-buttons svg {
  max-width: 30px;
  max-height: 30px;
}
</style>

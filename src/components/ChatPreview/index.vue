<template>
  <div
    class="rounded-lg p-4 pt-5 border mt-4 bg-white"
    style="max-height: 100%"
  >
    <div class="grid grid-cols-2 mb-2">
      <label class="text-[0.7rem]" for="select">CHAT</label>
    </div>
    <ul>
      <li
        v-for="(obj, key) in messages"
        :key="key"
        class="grid grid-cols-12 pr-2 hover:cursor-pointer mb-[1.2rem]"
      >
        <div class="relative col-end-2">
          <div class="absolute top-[1px] right-[-2px]">
            <div
              v-if="obj.online"
              class="w-2.5 h-2.5 rounded-full border-2 border-solid border-white bg-[#27A468]"
            ></div>
            <div
              v-else
              class="w-2.5 h-2.5 rounded-full border-2 border-solid border-white bg-[#E53761]"
            ></div>
          </div>
          <NuxtImg :src="`/img/chat/${obj.img}`" fit="contain" />
        </div>

        <div class="col-start-2 col-end-12 ml-2">
          <h3 class="text-[0.8rem] font-[520] mb-1">{{ obj.name }}</h3>
          <p class="text-[0.8rem] truncate text-[#0B1C33] opacity-70">
            {{ obj.last_message }}
          </p>
        </div>
        <div class="col-start-12 ml-4 mt-[-0.1rem]">
          <h3 class="text-[0.8rem] text-nowrap opacity-70" >
            {{ getDateFormat(obj.due_at) }}
          </h3>
          <div 
            v-if="obj.new_messages" 
            class="flex justify-center align-middle float-end mt-1 bg-[#E53761] h-5 w-5 text-[0.7rem]" 
            style="border-radius: 8px;"
          >
            <span class="text-white mt-auto mb-auto">{{ obj.new_messages }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  labelTitle: String,
  selected: { type: String, default: "By Type" },
});

interface User {
  img: string;
  name: string;
  last_message: string;
  due_at: number;
  new_messages: number | null;
  online: boolean | null;
}

const messages: User[] = [
  {
    img: "Brooks.png",
    name: "Helen Brooks",
    last_message:
      "Luna has been scratching her ears a lot lately and shaking her head. I checked her ears and they look red and inflamed. She also seems to be in pain when I touch them.",
    due_at: 1710096831,
    new_messages: 1,
    online: true,
  },
  {
    img: "Murphy.png",
    name: "Kathryn Murphy",
    last_message:
      "The best way to treat an ear infection is to visit your local vet clinic and get a prescription for ear drops. The ear drops will help clear the infection and reduce th",
    due_at: 1710096831,
    new_messages: 2,
    online: true,
  },
  {
    img: "Grey.png",
    name: "James Grey",
    last_message:
      "You should follow the instructions on the ear drops label, but usually you need to apply them twice a day for 7 to 10 days. You should clean her ears once a day, preferably before applying the ear drops",
    due_at: 1709751231,
    new_messages: null,
    online: false,
  },
  {
    img: "Brown.png",
    name: "Jim Brown",
    last_message: "Hi, I have a question about my cat.",
    due_at: 1709751231,
    new_messages: null,
    online: null,
  },
];

const getDateFormat = (epochTime: number) => {
  const messageDate = new Date(epochTime * 1000);
  const currentDate = new Date();

  if (messageDate.toDateString() === currentDate.toDateString()) {
    return `${messageDate.getHours()}:${messageDate.getMinutes()}`;
  } else {
    const daysDiference = Math.floor(
      (currentDate.getTime() - messageDate.getTime()) / (1000 * 3600 * 24),
    );

    if (daysDiference > 14) {
      const countWeeks = Math.floor(daysDiference / 7);
      return `${countWeeks} Weeks ago`;
    } else {
      const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return days[messageDate.getDay()];
    }
  }
};
</script>

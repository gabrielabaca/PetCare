import { ChatPreview } from '#build/components';

<template>
    <div class="col-start-1 col-span-3 rounded-lg pt-1 min-h-2 max-h-[100vh]">
      <ActivityStats />
      <HealtMonitoring />
    </div>
    <div class="col-start-4 col-span-2 rounded-lg pt-1 min-h-2 max-h-[100vh]">
      <Schedule />
      <ChatPreview />
    </div>
</template>

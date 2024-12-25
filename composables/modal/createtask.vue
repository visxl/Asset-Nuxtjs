<template>
  <Button @click="isOpen = true" size="sm" class="gap-1 cursor-pointer h-7">
    <Icon name="typcn:plus" class="w-4 h-4"/>
    <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Add Task </span>
  </Button>

  <UModal v-model="isOpen" class="flex">
    <!-- <button @click="toggleFullscreen" class="p-2 text-white bg-blue-500 rounded">
            Toggle Fullscreen
          </button> -->
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
  >
      <template #header>
        <div class="flex justify-between">
         
          <h1>Create Task</h1>
          <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false"/>
        </div>
      </template>

      <form @submit.prevent="createTask" class="flex flex-col gap-4">
        <div class="w-64">
          <label>Problem</label>
          <UInput v-model="task.problem" color="gray" variant="outline" placeholder="Problem..."/>
        </div>
        <div class="w-full">
          <label>Solution</label>
          <UInput v-model="task.solution" color="gray" variant="outline" placeholder="Solution..."/>
        </div>
        <div class="w-full">
          <label>Request By</label>
          <USelectMenu v-model="task.reqBy" :options="user" color="gray" variant="outline" placeholder="Request By..."/>
        </div>
        <div class="w-full">
          <label>Date</label>
          <UInput v-model="task.date" color="gray" type="date" variant="outline"/>
        </div>
        <div class="w-full">
          <label>From Time</label>
          <UInput v-model="task.fromTime" type="time" color="gray" variant="outline"/>
        </div>
        <div class="w-full">
          <label>To Time</label>
          <UInput v-model="task.toTime" type="time" color="gray" variant="outline"/>
        </div>
        <div class="w-full">
          <label>Office</label>
          <USelect v-model="task.office" :options="office" color="gray" variant="outline" placeholder="Office..."/>
        </div>
        <div class="w-full">
          <label>Status</label>
          <USelect v-model="task.status" :options="status" color="gray" variant="outline" placeholder="Status..."/>
        </div>
        <div class="flex gap-4">
          <UButton icon="ic:baseline-save-alt" color="gray" variant="ghost" type="submit">
            Save
          </UButton>
          <UButton icon="material-symbols:cancel-outline" color="gray" variant="ghost" @click="isOpen = false">
            Cancel
          </UButton>
        </div>
      </form>
    </UCard>
  </UModal>
</template>
  
<script setup>
    import { ref, computed } from "vue";
    import axios from "axios";
    import { useAppConfig } from '#app';

    const toast = useToast();
    const isOpen = ref(false);

    const office = ref([
        "Admin Office",
        "Claim Office",
        "Cashier",
        "CustomerService",
        "Finan Office",
        "Audit Office",
        "Tec Office",
        "Marketing Office",
        "IT Office",
        "TKO Office",
        "KCM Office",
        "BMC Office",
        "SHV Office",
        "PVG Office",
        "SR Office",
      ]);

    const status = ref(["true", "false"]);

    const user = [
    "កញ្ញា ទឺន សុលីដា",
    "លោកស្រី ប៊ន សំចរិយា",
    "លោកស្រី ស៊ុន សុផារី",
    "កញ្ញា ចន សោភ័ណ្ឌនារី",
    "លោកស្រី ថៃ ដានីន",
    "លោកស្រី នង ច័ន្ទវរលក្ខណ៍",
    "លោកស្រី ទួន សុខខេង",
    "លោកស្រី ស៊ុន សុវណ្ណគង្គា",
    "លោក ជា សុគន្ធា",
    "លោក អ៊ី ប៊ុនណា",
    "លោក ញ ប៊ុនថន",
    "លោក ណុច សាវិន",
    "លោក នី វីរៈ",
    "លោក ចាន់ ចំរើន",
    "លោក បូង ភារ៉ា",
    "លោក ហេង គាង",
    "កញ្ញា ជួរ ហ្គិចលាភ",
    "លោកស្រី រស់ រ័ត្នបូទុម",
    "លោកស្រី ចំណាន ច័ន្ទសុភ័ក្រ",
    "លោកស្រី ផាន់ ប៊ិនណា",
    "លោកស្រី ឥន្ទ ដួងច័ន្ទកេសរ",
    "លោក ហួយ សុខ",
    "កញ្ញា​ ព្រាប សុផល",
    "លោក ផាត់ ប៊ុនណា",
    "លោក នុត ស",
    "លោក យន សុខលី",
    "នុត ស្រីនិច",
    "លោក គាត ចិត្ត",
    "លោក កង ពុទ្ឋី",
    "លោក ស៊ីន បូផា",
    "លោក មឿង សេរី	",
    "លោក ហ៊ី រិទ្ធី",
    "លោក ផន ថុលសុវណ្ណវិបុល",
    "លោក អ៊ុង រតនៈ",
    "លោក ណៃ សីហា",
    "លោក សេរី វណ្ណៈ",
    "មាស វឌ្ឍនៈវិសាល",
  ];

    const task = ref({
      solution: "",
      problem: "",
      reqBy: "",
      date: "",
      fromTime: "",
      toTime: "",
      office: "",
      status: "",
    });

    const createTask = async () => {
      try {
          await axios.post("http://localhost:8081/api/task", task.value);
          isOpen.value = false;
          toast.add({ title: "Successfully Created Task!" });

          window.location.reload();
      } catch (error) {
        toast.add({ title: "Failed to Create Task!" });
      }
    };
</script>
  
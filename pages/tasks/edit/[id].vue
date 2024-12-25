<template>
    <div class="flex flex-col gap-2 mt-10 ml-12 mr-12">
      <!-- Page Title -->
      <header class="flex items-start justify-between">
        <div>
          <h1 class="text-gray-900 dark:text-gray-200">Modify Task</h1>
        </div>
      </header>
      <!-- Page Title End  -->
  
      <main>
        <section>
          <form @submit.prevent="updateTask" class="grid grid-cols-12 gap-4">
              <div class="grid col-span-6" >
                  <label for="">Problem</label>
                  <UInput v-model="task.problem" type="text" name="assetName" id="" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                  <label for="">Solution</label>
                  <UInput v-model="task.solution" type="text" name="model" id="" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                  <label for="">Request By</label>
                  <USelect v-model="task.reqBy" :options="user" type="text" name="brand" id="" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                  <label for="">Date</label>
                  <UInput v-model="task.date" type="date" name="code" id="" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                  <label for="">From Time</label>
                  <UInput v-model="task.fromTime" type="time" name="price" id="" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                  <label for="">To Time</label>
                  <UInput v-model="task.toTime" type="time" name="value" id="" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                  <label for="">Office</label>
                  <USelect v-model="task.office" :options="office" name="office" id="" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                  <label for="">Status</label>
                  <USelect v-model="task.status" :options="status" type="text" name="status" id="" size="lg"/>
              </div>
              <div class="flex justify-start col-span-12 gap-4 " >
                <UButton
                class="border"
                icon="ic:baseline-save-alt"
                color="gray"
                variant="ghost"
                type="submit"
                >Save</UButton
              >
              <UButton
                :to="'/tasks'"
                class="border"
                icon="material-symbols:cancel-outline"
                color="gray"
                variant="ghost"
                >Cancel</UButton
              >
              </div>
          </form>
        </section>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const task = ref({});
  
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

  const status = ref([
    "true",
    "false"
  ])
 
  const fetchTask = async (taskId) => {
    const response = await fetch(`http://localhost:8081/api/task/${taskId}`);
    task.value = await response.json();
  };
  
  const updateTask = async () => {
    const response = await fetch(`http://localhost:8081/api/task/${task.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task.value),
    });
  
    if (response.ok) {
      router.push('/tasks');
    }
  };
   
  onMounted(() => {
    const taskId = route.params.id;
    fetchTask(taskId);
  });
  
  </script>
  
<template>
  <Tabs default-value="all" class='w-full md:block'>
    <!-- Menu Button -->
    <div class="flex items-center">
      <TabsList>
        <TabsTrigger value="all" selected> All </TabsTrigger>
        <TabsTrigger value="weekly"> Weekly </TabsTrigger>
        <TabsTrigger value="monthly"> Monthly </TabsTrigger>
      </TabsList>
  
      <div class="flex items-center gap-2 ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="outline" size="sm" class="gap-1 h-7">
              <ListFilter class="h-3.5 w-3.5" />
              <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem >
              <button @click="selectStatus(true)">
                Active
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>Draft</DropdownMenuItem>
            <DropdownMenuItem> Archived </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Exporttask />
        <Createtask />
      </div>
    </div>
    <!-- Menu Button End -->
  
    <!-- Tab Content for All Tabs -->
    <TabsContent value="all">
      <Card>
        <CardHeader>
          <CardTitle>Task</CardTitle>
          <CardDescription> Total List Of All Task </CardDescription>
        </CardHeader>

        <CardContent>
          <div class="flex flex-col gap-3 sm:flex-row">
            <UInput v-model="searchProblem" placeholder="Search by problem" />
            <UInput v-model="searchReqBy" placeholder="Requested By" />
            <UInput v-model="selectDate" type="date" class="sm:w-48" />
            <USelect v-model="selectOffice" :options="office" class="sm:w-48" />
          </div>
          
          <Table class='w-full overflow-x-auto'>
            <TableHeader>
              <TableRow>
                <TableHead>Problem</TableHead>
                <TableHead class="hidden md:table-cell">Solution</TableHead>
                <TableHead class="hidden md:table-cell">Request By</TableHead>
                <TableHead>Date</TableHead>
                <TableHead class="hidden md:table-cell">From Time</TableHead>
                <TableHead class="hidden md:table-cell">To Time</TableHead>
                <TableHead class="hidden md:table-cell">Office</TableHead>
                <TableHead class="hidden md:table-cell">Status</TableHead>
                <TableHead>
                  <span class="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
              
            <TableBody v-for="task in tasks" :key="task.id">
              <TableRow class='overflow-x-auto'>
                <TableCell class="font-medium">{{ task.problem }}</TableCell>
                <TableCell class="hidden font-medium md:table-cell">{{ task.solution }}</TableCell>
                <TableCell class="hidden font-medium md:table-cell">{{ task.reqBy }}</TableCell>
                <TableCell class="font-medium">{{ formatDate(task.date) }}</TableCell>
                <TableCell class="hidden font-medium md:table-cell">{{ formatTime(task.fromTime) }}</TableCell>
                <TableCell class="hidden font-medium md:table-cell">{{ formatTime(task.toTime) }}</TableCell>
                <TableCell class="hidden font-medium md:table-cell">{{ task.office }}</TableCell>
                <TableCell class="hidden font-medium md:table-cell">
                  <Badge variant="outline" 
                    :class="
                      {
                       'text-green-500 dark:text-green-500': 
                        task.status === 1 || task.status === true,
                        'text-red-500 dark:text-red-500': 
                        task.status === 0 || task.status === false,
                      }"
                  >
                    {{ task.status === 1 || task.status === true ? "Complete" : "Pending" }}
                  </Badge>
                </TableCell>
                <TableCell>
                  <NuxtLink :to="`/tasks/edit/${task.id}`" class="flex justify-start align-middle">
                      <Icon name="lucide:edit" class="w-5 h-5" />
                  </NuxtLink>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <!-- Pagination -->
        <CardFooter>
          <div class="z-10 w-full mt-3">
            <div class="flex justify-center p-2 mb-2 md:justify-between">
              <div class="hidden w-full md:block ">
                <p class="mt-1.5 font-sans text-md text-gray-900 dark:text-gray-200">
                  Showing <span class='font-semibold'>1-10</span> of <span class='font-semibold'>{{ totalItems }}</span>
                </p>
                <p class="mt-1.5 font-sans text-md  text-gray-900 dark:text-gray-200">
                  Showing page <span class="font-semibold">{{ currentPage }}</span> of <span class="font-semibold">{{ totalPages }}</span> 
                </p>
              </div>
              <div class="flex items-center gap-4">

              <!-- Previous Button -->
                <button @click="changePage(currentPage - 1)" :disabled="currentPage === 1" type="button"
                  class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none dark:text-gray-50 hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <Icon name="mingcute:arrow-left-fill" class="w-4 h-4 text-black dark:text-gray-200" />
                </button>
                <!-- Page Buttons -->
                <div class="flex items-center gap-2">
                  <button v-for="page in paginatedPages" :key="page" @click="changePage(page)" type="button"
                    :class="[
                      'relative h-14 max-h-[30px] w-14 max-w-[30px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all',
                        currentPage === page
                        ? 'bg-green-500 text-gray-50 dark:bg-gray-600 dark:text-gray-50 shadow-md'
                        : 'bg-gray-50 text-gray-900 hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-600 dark:hover:bg-gray-800 active:bg-gray-900/20',
                    ]"
                  >
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                      {{ page }}
                    </span> 
                  </button>
                </div>
                <!-- Next Button -->
                <button @click="changePage(currentPage + 1)" :disabled="currentPage === totalPages" type="button"
                  class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none dark:text-gray-50 hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <Icon name="mingcute:arrow-right-fill" class="w-4 h-4 text-black dark:text-gray-200" />
                </button>
              </div>
            </div>
          </div>
        </CardFooter>
      <!-- Pagination End -->
      </Card>
    </TabsContent>
  <!-- Tab Content for All Tabs End -->
    
  <!-- Tab Content for Weekly Tabs -->
  <TabsContent value="weekly">
      <Card>
        <CardHeader>
          <CardTitle>Asset Over 250</CardTitle>
          <CardDescription> Total List Of Active Asset Over 250 </CardDescription>
        </CardHeader>
        <CardContent>
          <TableTaskWeeklyTable />
        </CardContent>
      </Card>
    </TabsContent>
  <!-- Tab Content for Weekly Tabs End -->

  <!-- Tab Content for Monthly Tabs -->
    <TabsContent value="monthly">
      <Card>
        <CardHeader>
          <CardTitle>Asset Over 250</CardTitle>
          <CardDescription> Total List Of Active Asset Over 250 </CardDescription>
        </CardHeader>
        <CardContent>
          <TableTaskMonthlyTable />
        </CardContent>
      </Card>
    </TabsContent>
  <!-- Tab Content for Monthly Tabs End -->
  </Tabs>
</template>
  
<script setup lang="ts">
    import { ListFilter } from 'lucide-vue-next'
    import { Badge } from '@/components/ui/badge'
    import { Button } from '@/components/ui/button'
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
    import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table'
    import { Tabs, TabsContent, TabsList, TabsTrigger, } from '@/components/ui/tabs'
    import { ref, computed, watchEffect } from "vue";
    import axios from "axios";
    import Createtask from '../modal/createtask.vue'
    import Exporttask from '../export/exporttask.vue'

    const selectStatus = ref();
    const selectOffice = ref();
    const selectType = ref();
    const selectDate = ref();
    const searchReqBy = ref();
    const searchProblem = ref()
    
    // Define reactive variables
    const tasks = ref<any[]>([]);
    const currentPage = ref<number>(1);
    const totalPages = ref<number>(0);
    const totalItems = ref<number>(0);
    const error = ref<string | null>(null);
    const maxPageButtons = 4;
    const toast = useToast();

    const office = [
      "",
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
    ];

    interface MultiSearch {
      problem: string;
      reqBy: string;
      date: string;
      office: string;
    }

    const multiSearch = ref<MultiSearch>({
      problem: '',
      reqBy: '',
      date: '',
      office: ''
    })


    // Perform the search function
    async function performSearch() {
      try {
        let url = 'http://localhost:8081/api/task/search'
        const data = multiSearch.value

        tasks.value = await $fetch(url, {
          method: 'GET',
          params: data  
        })
      } catch (error) {
        console.error('Error fetching tasks:', error)
      }
    }

    let debounceTimeout: NodeJS.Timeout | null = null

    watch(multiSearch, (newVal, oldVal) => {
      if (debounceTimeout) {
        clearTimeout(debounceTimeout)
      }
      debounceTimeout = setTimeout(() => {
        performSearch()
      }, 50) 
    }, { deep: true })

    function clearSearch() {
      window.location.reload();
    }

    const fetchTask = async () => {
      error.value = null;
    
      let url = `http://localhost:8081/api/task/page/${currentPage.value}`;
      if (selectOffice.value) {
        url = `http://localhost:8081/api/task/office?office=${selectOffice.value}`;
      } else if (selectStatus.value) {
        url = `http://localhost:8081/api/task/status?status=${selectStatus.value}`;
      } else if (selectType.value) {
        url = `http://localhost:8081/api/task/type?type=${selectType.value}`;
      } else if (selectDate.value) {
        url = `http://localhost:8081/api/task/date?date=${selectDate.value}`;
      } else if (searchReqBy.value) {
        url = `http://localhost:8081/api/task/reqBy?reqBy=${searchReqBy.value}`;
      } else if (searchProblem.value) {
        url = `http://localhost:8081/api/task/problem?problem=${searchProblem.value}`;
      }
    
      try {
        const response = await axios.get(url);
        const data = response.data;
    
        if ( selectOffice.value || selectStatus.value || selectType.value || selectDate.value || searchReqBy.value || searchProblem.value) {
          tasks.value = data;
        } else {
          totalPages.value = data.totalPages;
          totalItems.value = data.totalItems;
          tasks.value = data.task;
        }
      } catch (err) {
        error.value = "Failed to fetch data";
      }
    };
    
    // Delete Function
    const deleteTask = async (id: number) => {
      try {
        await axios.delete(`http://localhost:8081/api/task/${id}`);
        toast.add({ title: "Successfully deleted Task!" });
    
        window.location.reload();
      } catch (error) {
        toast.add({ title: "Failed to delete Task!" });
      }
    };
    
    // Watch for changes and fetch data
    watchEffect(() => {
      fetchTask();
    });
    
    // Change page function
    const changePage = (page: number) => {
      if (page < 1 || page > totalPages.value) return;
      currentPage.value = page;
      fetchTask();
    };
    
    // Compute pages to display
    const paginatedPages = computed(() => {
      const pages = [];
      let startPage = Math.max(
        currentPage.value - Math.floor(maxPageButtons / 2),
        1
      );
      let endPage = Math.min(startPage + maxPageButtons - 1, totalPages.value);
      if (endPage - startPage < maxPageButtons - 1) {
        startPage = Math.max(endPage - maxPageButtons + 1, 1);
      }
      for (let page = startPage; page <= endPage; page++) {
        pages.push(page);
      }
      return pages;
    });
    
    // Date Format to DD-MM-YYYY
    const formatDate = (dateString: string | null): string => {
      if (!dateString) {
        return "NA";
      }
    
      const [year, month, day] = dateString.split("-");
      return `${day}-${month}-${year}`;
    };

    // Time Format to HH-MM AM/PM
    const formatTime = (timeString: string | null): string => {
      if (!timeString) {
        // return - if null
        return "-";
      }
      const [hours, minutes] = timeString.split(":").map(Number);
      const date = new Date();
      date.setHours(hours, minutes);
      const formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });
      return formatter.format(date);
    };
</script>
  
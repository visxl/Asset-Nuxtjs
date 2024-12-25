<template>
    <Card>
      <CardHeader>
        <div class="flex flex-col justify-between gap-3 md:flex-row">
          <div class="flex flex-col gap-2">
            <CardTitle>Asset Over 250</CardTitle>
            <CardDescription>List Of All Asset Cost Over 250</CardDescription>
          </div>

          <div class="flex flex-col gap-3 md:flex-row">
            <UInput v-model="searchCode" placeholder="Search Account Code" class="sm:w-48" />
            <UInput v-model="searchPCName" placeholder="Search PC Name" class="sm:w-48" />
            <UInput v-model="selectDate" type="date" class="sm:w-48" />
            <USelect v-model="selectUser" :options="user" class="sm:w-48"/>
            <USelect v-model="selectOffice" :options="office" class="sm:w-48"/>
          </div>
        </div>
      </CardHeader>
  
      <CardContent>
        <Table class="w-full overflow-x-auto">
          <TableHeader>
            <TableRow>
              <TableHead>Asset Name</TableHead>
              <TableHead>Model</TableHead>
              <TableHead class="hidden md:table-cell">Brand</TableHead>
              <TableHead>Code</TableHead>
              <TableHead class="hidden md:table-cell">Price($)</TableHead>
              <TableHead class="hidden md:table-cell">Purchase Date</TableHead>
              <TableHead class="hidden md:table-cell">Condition</TableHead>
              <TableHead>User</TableHead>
              <TableHead class="hidden md:table-cell">Other</TableHead>
              <TableHead>Office</TableHead>
              <TableHead class="hidden md:table-cell">Status</TableHead>
                <TableHead>
                  <span class="sr-only">Actions</span>
                </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="asset in assets" :key="asset.id">
              <TableCell class="font-medium">{{ asset.assetName }}</TableCell>
              <TableCell class="font-medium">{{ asset.model }}</TableCell>
              <TableCell class="hidden font-medium md:table-cell">{{ asset.brand }}</TableCell>
              <TableCell class="font-medium">{{ asset.code }}</TableCell>
              <TableCell class="hidden font-medium md:table-cell">{{ asset.price || "-" }}</TableCell>
              <TableCell class="hidden font-medium md:table-cell">{{ formatDate(asset.date) || "-" }}</TableCell>
              <TableCell class="hidden font-medium md:table-cell">{{ asset.condition || "-" }}</TableCell>
              <TableCell class="font-medium">{{ asset.user }}</TableCell>
              <TableCell class="hidden md:table-cell">{{ asset.other || "-" }}</TableCell>
              <TableCell class="font-medium">{{ asset.office }}</TableCell>
              <TableCell class="hidden font-medium md:table-cell">
                <Badge variant="outline" :class="{'text-green-500 dark:text-green-500': asset.status === 1 || asset.status === true, 'text-red-500 dark:text-red-500': asset.status === 0 || asset.status === false,}">
                  {{ asset.status === 1 || asset.status === true ? "Active" : "Inactive"}}
                </Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Button size="sm" class="gap-1 cursor-pointer h-7">
                      <Icon name="mdi:dots-vertical" class="w-4 h-4 not-sr-only sm:sr-only"/>
                      <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Action </span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent class="px-2">
                    <NuxtLink :to="`/asset/over250/edit/${asset.id}`" class="flex justify-start py-1 align-middle">
                      <Icon name="lucide:edit" class="w-5 h-5 mr-3" />
                      <span>Edit</span>
                    </NuxtLink>
                    <NuxtLink :to="`/asset/over250/view/${asset.id}`" class="flex justify-start py-1 align-middle">
                      <Icon name="lucide:eye" class="w-5 h-5 mr-3" />
                      <span>View</span>
                    </NuxtLink>
                    <DropdownMenuSeparator />
                    <NuxtLink :to="`/asset/over250/view/${asset.id}`" class="flex justify-start py-1 align-middle">
                      <Icon name="lucide:trash" class="w-5 h-5 mr-3" />
                      <span>Delete</span>
                    </NuxtLink>
                  </DropdownMenuContent>
                </DropdownMenu>
                
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
  
        <!-- Pagination -->
        <CardFooter>
          <div class="z-10 w-full mt-3">
            <div class="flex justify-center md:justify-between">
              <div class="hidden w-full md:block">
                <p class="mt-1.5 font-sans text-md text-gray-900 dark:text-gray-200">
                  Showing <span class="font-semibold">1-10</span> of <span class="font-semibold">{{ totalItems }}</span>
                </p>
                <p class="mt-1.5 font-sans text-md text-gray-900 dark:text-gray-200">
                  Showing page <span class="font-semibold">{{ currentPage }}</span> of <span class="font-semibold">{{ totalPages }}</span>
                </p>
              </div>
              <div class="flex items-center gap-4">
                <!-- Previous Button -->
                <button
                  @click="changePage(currentPage - 1)"
                  :disabled="currentPage === 1"
                  type="button"
                  class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none dark:text-gray-50 hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <Icon name="mingcute:arrow-left-fill" class="w-4 h-4 text-black dark:text-gray-200"/>
                </button>
  
                <!-- Page Buttons -->
                <div class="flex items-center gap-2">
                  <button
                    v-for="page in paginatedPages"
                    :key="page"
                    @click="changePage(page)"
                    type="button"
                      :class="[
                        'relative h-14 max-h-[30px] w-14 max-w-[30px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase transition-all', currentPage === page
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
                <button
                  @click="changePage(currentPage + 1)"
                  :disabled="currentPage === totalPages"
                  type="button"
                  class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none dark:text-gray-50 hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  <Icon name="mingcute:arrow-right-fill" class="w-4 h-4 text-black dark:text-gray-200"/>
                </button>
              </div>
            </div>
          </div>
        </CardFooter>
        <!-- Pagination End -->
      </CardContent>
    </Card>
  </template>
  
  <script setup lang="ts">
      import { Badge } from "@/components/ui/badge";
      import { CardContent, CardFooter } from "@/components/ui/card";
      import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from "@/components/ui/table";
      import { ref, computed, watchEffect } from "vue";
      import axios from "axios";
      
      const searchCode = ref();
      const searchPCName = ref()
      const selectStatus = ref();
      const priceFilter = ref();
      const selectOffice = ref();
      const selectType = ref();
      const selectDate = ref();
      const selectUser = ref();
      
      // Define reactive variables
      const assets = ref<any[]>([]);
      const currentPage = ref<number>(1);
      const totalPages = ref<number>(0);
      const totalItems = ref<number>(0);
      const error = ref<string | null>(null);
        const items = [
          [{
            label: 'Profile',
            avatar: {
              src: 'https://avatars.githubusercontent.com/u/739984?v=4'
            }
          }]
        ]
      const user = [
        "",
        "ប្រើរួម",
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
        "Mail Server",
        "Data Server",
        "Database Server",
        "ប្រើរួម (DataBase Server)",
        "ទុកបម្រុង (Data Server)",
      ];
      const office = [
        "",
        "Admin Office",
        "Cashier",
        "CustomerService",
        "Claim Office",
        "Finan Office",
        "Audit Office",
        "Tec Office",
        "Marketing Office",
        "IT Office",
        "TKO Branch",
        "KCM Branch",
        "BMC Branch",
        "BTB Branch",
        "SHV Branch",
        "PVG Branch",
        "SR Branch",
      ];
      const type = ["", "OE", "OT", "TR"];
      const maxPageButtons = 4;
      const toast = useToast();
      const multiSearch = ref('')

      async function performSearch() {
        try {
          const response = await axios.get(
            `http://localhost:8081/api/asset/search?q=${encodeURIComponent(multiSearch.value)}`
          );
          assets.value = response.data.items;
        } catch (error) {
          console.error('Error Fetching Assets:', error);
        }
      }

      let debounceTimeout: ReturnType<typeof setTimeout>;
      watch(
        multiSearch,
        () => {
          if (debounceTimeout) clearTimeout(debounceTimeout);
          debounceTimeout = setTimeout(() => {
            performSearch();
          }, 300); // 300ms debounce
        }
      );
      
      // Fetch assets based on the filters and pagination
      const fetchAssets = async () => {
        error.value = null;
      
        let url = `http://localhost:8081/api/asset/page/${currentPage.value}`;
        if (searchCode.value) {
          url = `http://localhost:8081/api/asset/code?code=${searchCode.value}`;
        } else if (selectOffice.value) {
          url = `http://localhost:8081/api/asset/office?office=${selectOffice.value}`;
        } else if (priceFilter.value) {
          url = `http://localhost:8081/api/asset/${priceFilter.value}`;
        } else if (selectStatus.value) {
          url = `http://localhost:8081/api/asset/status?status=${selectStatus.value}`;
        } else if (selectType.value) {
          url = `http://localhost:8081/api/asset/type?type=${selectType.value}`;
        } else if (selectDate.value) {
          url = `http://localhost:8081/api/asset/date?date=${selectDate.value}`;
        } else if (selectUser.value) {
          url = `http://localhost:8081/api/asset/user?user=${selectUser.value}`;
        } else if (searchPCName.value) {
          url = `http://localhost:8081/api/asset/pcName?pcName=${searchPCName.value}`;
        }
      
        try {
          const response = await axios.get(url);
          const data = response.data;
      
          if ( searchCode.value || priceFilter.value || selectOffice.value || selectStatus.value || selectType.value || selectDate.value || selectUser.value || searchPCName.value ) {
            assets.value = data;
          } else {
            totalPages.value = data.totalPages;
            totalItems.value = data.totalItems;
            assets.value = data.asset;
          }
        } catch (err) {
          error.value = "Failed to fetch data";
        }
      };
      
      // Delete Function
      const deleteAsset = async (id: number) => {
        try {
          await axios.delete(`http://localhost:8081/api/asset/${id}`);
          toast.add({ title: "Successfully deleted Asset!" });
      
          window.location.reload();
        } catch (error) {
          toast.add({ title: "Failed to delete Asset!" });
        }
      };
      
      // Watch for changes and fetch data
      watchEffect(() => {
        fetchAssets();
      });
      
      // Change page function
      const changePage = (page: number) => {
        if (page < 1 || page > totalPages.value) return;
        currentPage.value = page;
        fetchAssets();
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
      
      // Search term
      const searchTerm = ref('');
      
      // Computed property for filtered data
      const filteredData = computed(() => {
        if (!searchTerm.value) return assets.value; // Return all data if search is empty
      
        // Filter data
        return assets.value.filter((row) => {
          // Convert each row to a string and check if it includes the search term (case-insensitive)
          return Object.values(row).some((value) =>
            String(value).toLowerCase().includes(searchTerm.value.toLowerCase())
          );
        });
      });
  </script>
  
<template>
    <div class="flex flex-col gap-2 mt-10 ml-12 mr-12">
      <!-- Page Title -->
      <header class="flex items-start justify-start">
        <div>
          <UButton :to="'/asset/over250'" class="pb-3" icon="ph:arrow-u-up-left-bold" color="gray" variant="ghost" />
        </div>
        <div>
          <h1 class="text-gray-900 dark:text-gray-200">Asset Details</h1>
        </div>
    </header>
    <!-- Page Title End  -->
  
    <main class="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
      <div class="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
        <div class="grid items-start gap-4 auto-rows-max lg:col-span-2 lg:gap-8">
          <!-- Asset name -->
          <Card>
              <CardHeader>
                <CardTitle class="text-xl">Name</CardTitle>
                <CardDescription>
                  ឈ្មោះទ្រព្យសម្បត្តិ និងប្រភេទទ្រព្យសម្បត្តិ
                </CardDescription>
              </CardHeader>
              <UDivider class="mb-3"/>
              <CardContent>
                <div class="grid gap-3">
                  <div>
                    <Label>Asset ID: </Label>
                    <span>{{ asset.id || "-"}}</span>
                  </div>
                  <div>
                    <Label>Name: </Label>
                    <span>{{ asset.name || "-"}}</span>
                  </div>
                  <div>
                    <Label>Asset Name: </Label>
                    <span>{{ asset.assetName || "-"}}</span>
                  </div>
                  <div>
                    <Label>Status: </Label>
                    <span>{{ asset.status === 1 || asset.status === true ? "Active" : "Inactive"}}</span>
                  </div>
                </div>
              </CardContent>
          </Card>
          <!-- Asset name End-->
          <div class="grid gap-8 md:grid-cols-2">
             <!-- Price Value Date -->
            <Card>
                <CardHeader>
                  <CardTitle class="text-lg">Price & Value</CardTitle>
                  <CardDescription>
                    តម្លៃនិងថ្ងៃទិញ
                  </CardDescription>
                </CardHeader>
                <UDivider class="mb-3"/>
                <CardContent class="grid gap-3">
                  <div>
                    <Label>Account Code: </Label>
                    <span>{{ asset.code || "-" }}</span>
                  </div>
                  <div>
                    <Label>Price: </Label>
                    <span>{{ asset.price + " $" }}</span>
                  </div>
                  <div>
                    <Label>Value: </Label>
                    <span>{{ asset.value || "-"}} </span>
                  </div>
                  <div>
                    <Label>Purchase Date: </Label>
                    <span>{{ asset.date || "-"}}</span>
                  </div>
                </CardContent>
            </Card>
            <!-- Price Value Date End-->
            <!-- User Information -->
            <Card>
                <CardHeader>
                  <CardTitle class="text-lg">User Information</CardTitle>
                  <CardDescription>
                    ព័ត៍មានអ្នកប្រើប្រាស់
                  </CardDescription>
                </CardHeader>
                <UDivider class="mb-3"/>
                <CardContent class="grid gap-3">
                  <div>
                    <Label>User: </Label>
                    <span>{{ asset.user || "-" }}</span>
                  </div>
                  <div>
                    <Label>Other: </Label>
                    <span>{{ asset.other || "-"}} </span>
                  </div>
                  <div>
                    <Label>Office: </Label>
                    <span>{{ asset.office || "-"}}</span>
                  </div>
                  <div>
                    <Label>Department: </Label>
                    <span>{{ asset.department || "-"}}</span>
                  </div>
                </CardContent>
            </Card>
            <!-- User Information End -->
          </div>
        </div>

        <div class="grid items-start gap-4 auto-rows-max lg:gap-8">
          <!-- PC Spec -->
          <Card>
              <CardHeader>
                <CardTitle class="text-lg">PC Spec</CardTitle>
                <CardDescription>ព័ត៌មានកំព្យូទ័រ</CardDescription>
              </CardHeader>
              <UDivider class="mb-3"/>
              <CardContent>
                <div class="grid gap-3">
                  <div>
                    <label class="font-medium">Trademark: </label>
                    <span>{{ asset.model || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">Brand: </label>
                    <span>{{ asset.brand || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">Motherboard: </label>
                    <span>{{ asset.board || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">CPU: </label>
                    <span>{{ asset.cpu || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">Memory: </label>
                    <span>{{ asset.memory || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">Storage: </label>
                    <span>{{ asset.storage || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">PC Name: </label>
                    <span>{{ asset.pcName || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">IP Address: </label>
                    <span>{{ asset.ipAddress || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">Supplier: </label>
                    <span>{{ asset.supplier || "-"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">Access to Internet: </label>
                    <span>{{ asset.hasInternet === 1 || asset.status === true ? "Yes" : "No"}}</span>
                  </div>
                  <div>
                    <label class="font-medium">Operating System: </label>
                    <span>{{ asset.operatingSystem || "-"}}</span>
                  </div>
                </div>
              </CardContent>
          </Card>
          <!-- PC Spec End-->
        </div>
      </div>
    </main>
  </div>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const asset = ref({});

  const department = ref([
    "Adm&Fin Dept",
    "Claim Dept",
    "Tec Dept",
    "Mkt&Sale Dept",
    "Audit Dept",
    "IT Dept"
  ])
  
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

  const type = ref([
    "OE",
    "OT",
    "TR"
  ])

  const condition = ref([
    "ថ្មី",
    "មធ្យម",
    "ចាស់",
    "ខូច"
  ])
  
  const status = ref([
    "true",
    "false"
  ])
 
  const fetchAsset = async (assetId) => {
    const response = await fetch(`http://localhost:8081/api/asset/detail/${assetId}`);
    asset.value = await response.json();
  };
  
  const updateAsset = async () => {
    const response = await fetch(`http://localhost:8081/api/asset/${asset.value.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(asset.value),
    });
  
    if (response.ok) {
      router.push('/asset');
    }
  };
   
  onMounted(() => {
    const assetId = route.params.id;
    fetchAsset(assetId);
  });
  
  </script>
  
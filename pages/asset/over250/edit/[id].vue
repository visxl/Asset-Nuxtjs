<template>
  <div class="flex flex-col gap-2 mt-10 ml-12 mr-12">
    <!-- Page Title -->
    <header class="flex items-start justify-start">
      <div>
          <UButton :to="'/asset/over250'" class="pb-3" icon="ph:arrow-u-up-left-bold" color="gray" variant="ghost" />
        </div>
        <div>
          <h1 class="text-gray-900 dark:text-gray-200">Modify Asset</h1>
        </div>
    </header>
    <!-- Page Title End  -->

    <main>
      <section>
        <form @submit.prevent="updateAsset" class="grid gap-4 grid-col-1 md:grid-cols-3">
          <div class="col-span-2">
            <UButton class="w-auto mr-3 border" icon="ic:baseline-save-alt" color="gray" variant="ghost" type="submit">
              Save
            </UButton>
            <!-- <UButton :to="'/asset/over250'" class="w-24 border" icon="material-symbols:cancel-outline" color="gray" variant="ghost">
              Cancel
            </UButton> -->
          </div>
          
          <!-- Asset Name -->
          <Card class="col-span-2">
            <CardHeader>
              <CardTitle class="text-xl">Asset Name</CardTitle>
              <CardDescription>
                ឈ្មោះទ្រព្យសម្បត្តិ និងប្រភេទទ្រព្យសម្បត្តិ
              </CardDescription>
            </CardHeader>
            <UDivider class="mb-3"/>
            <CardContent class="flex flex-col gap-3">
              <div>
                <label >ID</label>
                <UInput v-model="asset.id" type="text" size="lg" disabled />
              </div>
              <div>
                <label >Name</label>
                <UInput v-model="asset.name" type="text" size="lg" required/>
              </div>
              <div>
                  <label >Asset Name</label>
                  <UInput v-model="asset.assetName" type="text" size="lg" required/>
              </div>
              <div>
                  <label >Status</label>
                  <USelect v-model="asset.status" :options="status" type="text" size="lg" required/>
              </div>
            </CardContent>
          </Card>
          <!-- Asset Name End -->
           
          <!-- PC Spec -->
          <Card class="col-span-2 row-span-2 md:col-span-1">
            <CardHeader>
              <CardTitle class="text-xl">PC Spec</CardTitle>
              <CardDescription>
                ព័ត៌មានកំព្យូទ័រ
              </CardDescription>
            </CardHeader>
            <UDivider class="mb-3"/>
            <CardContent class="flex flex-col gap-3">
              <div>
                <label >Trademark</label>
                <UInput v-model="asset.model" type="text" name="model" id="" size="lg"/>
              </div>
              <div>
                  <label >Brand</label>
                  <UInput v-model="asset.brand" type="text" name="brand" id="" size="lg"/>
              </div>
              <div>
                  <label >Motherboard</label>
                  <UInput v-model="asset.board" type="text" name="board" id="" size="lg" />
              </div>
              <div>
                  <label >CPU</label>
                  <UInput v-model="asset.cpu" type="text" name="cpu" id="" size="lg" />
              </div>
              <div>
                  <label >Memory/RAM</label>
                  <UInput v-model="asset.memory" type="text" name="cpu" id="" size="lg" />
              </div>
              <div>
                  <label >Storage</label>
                  <UInput v-model="asset.storage" type="text" name="cpu" id="" size="lg" />
              </div>
              <div>
                  <label >PC Name</label>
                  <UInput v-model="asset.pcName" type="text" name="cpu" id="" size="lg" />
              </div>
              <div>
                  <label >IP Address</label>
                  <UInput v-model="asset.ipAddress" type="text" name="cpu" id="" size="lg" />
              </div>
              <div>
                  <label >Supplier</label>
                  <UInput v-model="asset.supplier" type="text" name="cpu" id="" size="lg" />
              </div>
              <div>
                  <label >Access to Internet</label>
                  <USelect v-model="asset.hasInternet" :options="status" type="text" name="cpu" id="" size="lg" />
              </div>
              <div>
                  <label >Operating System</label>
                  <UInput v-model="asset.operatingSystem" type="text" name="cpu" id="" size="lg" />
              </div>
            </CardContent>
          </Card>
          <!-- PC Spec End -->
           
          <!-- Price and Date -->
          <Card class="col-span-2 md:col-span-1">
            <CardHeader>
              <CardTitle class="text-xl">Price & Purchase Date</CardTitle>
              <CardDescription>
                តម្លៃនិងថ្ងៃទិញ
              </CardDescription>
            </CardHeader>
            <UDivider class="mb-3"/>
            <CardContent class="flex flex-col gap-3">
              <div>
                <label >Account Code</label>
                <UInput v-model="asset.code" type="text" size="lg"/>
              </div>
              <div>
                <label >Price</label>
                <UInput v-model="asset.price" type="text" size="lg"/>
              </div>
              <div>
                  <label >Value</label>
                  <UInput v-model="asset.value" type="text" size="lg"/>
              </div>
              <div>
                  <label >Purchase Date</label>
                  <UInput v-model="asset.date" type="date" size="lg" />
              </div>
            </CardContent>
          </Card>
          <!-- Price and Date End -->
           
          <!-- User Info -->
          <Card class="col-span-2 md:col-span-1">
            <CardHeader>
              <CardTitle class="text-xl">User Information</CardTitle>
              <CardDescription>
                ព័ត៍មានអ្នកប្រើប្រាស់
              </CardDescription>
            </CardHeader>
            <UDivider class="mb-3"/>
            <CardContent class="flex flex-col gap-3">
              <div class="grid col-span-6" >
                <label >User</label>
                <UInput v-model="asset.user" type="text" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                <label >Other</label>
                <UInput v-model="asset.other" type="text" size="lg" />
              </div>
              <div class="grid col-span-6" >
                <label >Office</label>
                <USelect v-model="asset.office" :options="office" type="text" size="lg"/>
              </div>
              <div class="grid col-span-6" >
                <label >Department</label>
                <USelect v-model="asset.department" :options="department"  type="text" size="lg" />
              </div>
              
            </CardContent>
          </Card>
          <!-- User Info End -->
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
  "TKO Branch",
  "KCM Branch",
  "BMC Branch",
  "BTB Branch",
  "SHV Branch",
  "PVG Branch",
  "SR Branch",
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
    router.push('/asset/over250');
  }
};
 
onMounted(() => {
  const assetId = route.params.id;
  fetchAsset(assetId);
});

</script>

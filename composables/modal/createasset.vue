<template>
    <Button @click="isOpen = true" size="sm" class="gap-1 cursor-pointer h-7">
      <Icon name="typcn:plus" class="w-4 h-4"/>
      <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Add Asset </span>
    </Button>

    <UModal v-model="isOpen" class="flex" fullscreen>
      <UCard
        :ui="{
          ring: '',
          divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        }"
        
      >
        <template #header>
          <div class="flex justify-between">
            <h1>Create Asset</h1>
            <UButton
              color="gray"
              variant="ghost"
              icon="i-heroicons-x-mark-20-solid"
              class="-my-1"
              @click="isOpen = false"
            />
          </div>
        </template>

      <form class="flex flex-col gap-4" @submit.prevent="createAsset">
        <div class="w-full">
          <label>Name</label>
          <UInput v-model="asset.name"/>
        </div>
        <div class="w-full">
          <label>Asset Name</label>
          <USelect v-model="asset.assetName" :options="assetName" />
        </div>
        <div class="w-full">
          <label>Model</label>
          <UInput v-model="asset.model"/>
        </div>
        <div class="w-full">
          <label>Brand</label>
          <UInput v-model="asset.brand"/>
        </div>
        <div class="w-full">
          <label>Code</label>
          <UInput v-model="asset.code"/>
        </div>
        <div class="w-full">
          <label>Price</label>
          <UInput v-model="asset.price" type="number"/>
        </div>
        <div class="w-full">
          <label>Value</label>
          <UInput v-model="asset.value" type="number"/>
        </div>
        <div class="w-full">
          <label>Purchase Date</label>
          <UInput v-model="asset.date"/>
        </div>
        <div class="w-full">
          <label>Condition</label>
          <USelect v-model="asset.condition" :options="condition"/>
        </div>
        <div class="w-full">
          <label>User</label>
          <UInput v-model="asset.user"/>
        </div>
        <div class="w-full">
          <label>Other</label>
          <UInput v-model="asset.other"/>
        </div>
        <div class="w-full">
          <label>Office</label>
          <USelect v-model="asset.office" :options="office"/>
        </div>
        <div class="w-full">
          <label>Department</label>
          <USelect v-model="asset.department" :options="department"/>
        </div>
        <div class="w-full">
          <label>PC Name</label>
          <UInput v-model="asset.other"/>
        </div>
        <div class="w-full">
          <label>Type</label>
          <USelect v-model="asset.type" :options="type"/>
        </div>
        <div class="w-full">
          <label>Status</label>
          <USelect v-model="asset.status" :options="status"/>
        </div>
      </form>
    </UCard>
  </UModal>
</template>

<script setup>
    import { ref } from "vue";
    import axios from "axios";

    const toast = useToast();
    const isOpen = ref(false);

    const assetName = ref(["Monitor", "System Unit", "AIO", "Laptop", "UPS", "Printer", "Scanner"]);

    const condition = ref(["ថ្មី", "មធ្យម", "ចាស់", "ខូច"]);

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
    const department = ref([
      "Adm&Fin Dept",
      "Claim Dept",
      "Marketing Dept",
      "Tec Dept",
      "IT Dept",
      "Audit Dept",
    ])

    const type = ref(["OE", "OT"]);

    const status = ref(["true", "false"]);

    const asset = ref({
      name: "",
      assetName: "",
      model: "",
      brand: "",
      code: "",
      price: "",
      value: "",
      condition: "",
      date: "",
      user: "",
      other: "",
      office: "",
      department: "",
      pcName: "",
      status: ""
    })

    const createAsset = async () => {
      try {
        await axios.post(`http://localhost:8081/api/asset`, asset.value)
        isOpen.value = false
        toast.add({ title: "Successfully Create Asset!" })
      } catch (err) {
        toast.add({ title: "Failed To Create Asset!" })
      }
    }

</script>
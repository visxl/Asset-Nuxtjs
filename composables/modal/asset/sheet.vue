<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
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
      type,
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

<template>

  <Sheet>
    <SheetTrigger as-child>
      <Button size="sm" class="gap-1 cursor-pointer h-7">
        <Icon name="typcn:plus" class="w-4 h-4"/>
        <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Add Asset </span>
      </Button>
    </SheetTrigger>
    
    
    <SheetContent class="overflow-scroll">
      <SheetHeader>
        <SheetTitle>Create New Asset</SheetTitle>
      </SheetHeader>

      <Separator class="mt-4"/>
      
      <div class="flex flex-col">
        <form class="grid grid-cols-4" @submit.prevent="createAsset">
          <!-- Full-width row -->
          <div class="flex flex-row justify-start gap-4">
            <div class="">
              <label class="text-right">Name</label>
              <UInput v-model="asset.name" />
            </div>
            
            <!-- Two-column row -->
            <div class="grid items-center grid-cols-2 col-span-4">
              <label class="text-right">Asset Name</label>
              <USelect v-model="asset.assetName" :options="assetName" class="w-52"/>
            </div>
            <div class="grid items-center grid-cols-2 col-span-2">
              <label class="text-right">Model</label>
              <UInput v-model="asset.model" />
            </div>
          </div>

          <!-- Full-width row -->
          <div class="grid items-center grid-cols-2 col-span-4">
            <label class="text-right">Brand</label>
            <UInput v-model="asset.brand" />
          </div>

          <!-- Two-column row -->
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">Code</label>
            <UInput v-model="asset.code" />
          </div>
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">Price</label>
            <UInput v-model="asset.price" />
          </div>

          <!-- Two-column row -->
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">Value</label>
            <UInput v-model="asset.value" />
          </div>
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">Purchase Date</label>
            <UInput v-model="asset.date" />
          </div>

          <!-- Full-width row -->
          <div class="grid items-center grid-cols-2 col-span-4">
            <label class="text-right">Condition</label>
            <USelect v-model="asset.condition" :options="condition" />
          </div>

          <!-- Two-column row -->
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">User</label>
            <UInput v-model="asset.user" />
          </div>
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">Other</label>
            <UInput v-model="asset.other" />
          </div>

          <!-- Full-width row -->
          <div class="grid items-center grid-cols-2 col-span-4">
            <label class="text-right">Office</label>
            <USelect v-model="asset.office" :options="office" />
          </div>

          <!-- Two-column row -->
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">Department</label>
            <USelect v-model="asset.department" :options="department" />
          </div>
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">PC Name</label>
            <UInput v-model="asset.pcName" />
          </div>

          <!-- Two-column row -->
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">Type</label>
            <USelect v-model="asset.type" :options="type" />
          </div>
          <div class="grid items-center grid-cols-2 col-span-2">
            <label class="text-right">Status</label>
            <USelect v-model="asset.status" :options="status" />
          </div>

          <!-- Save button -->
          <div class="flex justify-end col-span-4 mt-2">
            <UButton icon="ic:baseline-save-alt" color="gray" variant="ghost" type="submit">
              Save
            </UButton>
          </div>
        </form>
      </div>

    </SheetContent>
  </Sheet>

</template>
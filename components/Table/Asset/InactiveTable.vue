<template>
  <Card>
    <CardHeader>
      <CardTitle>Asset Over 250</CardTitle>
      <CardDescription>List of All Inactive Asset Over 250</CardDescription>
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
            <TableCell class="hidden font-medium md:table-cell">{{
              asset.brand
            }}</TableCell>
            <TableCell class="font-medium">{{ asset.code }}</TableCell>
            <TableCell class="hidden font-medium md:table-cell">{{
              asset.price
            }}</TableCell>
            <TableCell class="hidden font-medium md:table-cell">{{
              formatDate(asset.date)
            }}</TableCell>
            <TableCell class="hidden font-medium md:table-cell">{{
              asset.condition
            }}</TableCell>
            <TableCell class="font-medium">{{ asset.user }}</TableCell>
            <TableCell class="hidden md:table-cell">{{ asset.other }}</TableCell>
            <TableCell class="font-medium">{{ asset.office }}</TableCell>
            <TableCell class="hidden font-medium md:table-cell">
              <Badge variant="outline" 
                :class="
                  {
                    'text-green-500 dark:text-green-500': 
                    asset.status === 1 || asset.status === true,
                    'text-red-500 dark:text-red-500': 
                    asset.status === 0 || asset.status === false,
                  }"
              >
                {{ asset.status === 1 || asset.status === true ? "Active" : "Inactive" }}
              </Badge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </CardContent>
  </Card>
</template>


<script setup lang="ts">
import axios from "axios";
import { ref, watchEffect, computed } from 'vue';

// Reactive array to store tasks
const assets = ref<any[]>([]);

// Fetch tasks from the API
const fetchAssets = async () => {
  let url = `http://localhost:8081/api/asset/status?status=0`;
  
  try {
    const response = await axios.get(url);
    assets.value = response.data; // Store the nested array data in the reactive variable
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

// Flatten the array of tasks
const flattenAssets = computed(() => assets.value.flat());

// Fetch data when the component is mounted
watchEffect(() => {
    fetchAssets();
});

// Date Format to DD-MM-YYYY
const formatDate = (dateString: string | null): string => {
  if (!dateString) {
    return "NA";
  }

  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
};
</script>

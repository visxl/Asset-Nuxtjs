<template>
    <CardContent>
        <Table class="w-full overflow-x-auto">
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Asset Name</TableHead>
                    <TableHead>User</TableHead>
                    <TableHead>PC Name</TableHead>
                    <TableHead>Office</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead class="hidden text-center md:table-cell">History</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                <!-- Loop over each asset in repairList -->
                <TableRow v-for="(asset, index) in repairList" :key="index">
                    <TableCell>{{ asset.id }}</TableCell>
                    <TableCell>{{ asset.assetName }}</TableCell>
                    <TableCell>{{ asset.user }}</TableCell>
                    <TableCell>{{ asset.pcName }}</TableCell>
                    <TableCell>{{ asset.office }}</TableCell>
                    <TableCell>{{ asset.department }}</TableCell>
                    <TableCell class="hidden text-center md:table-cell">
                        <!-- Expandable section for asset history -->
                        <details>
                            <summary>View History</summary>
                            <Table class="mt-2">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>ID</TableHead>
                                        <TableHead>Old Part Name</TableHead>
                                        <TableHead>New Part Name</TableHead>
                                        <TableHead>Serial Code</TableHead>
                                        <TableHead>Buy Date</TableHead>
                                        <TableHead>Broken Date</TableHead>
                                        <TableHead>Price</TableHead>
                                        <TableHead>Warranty</TableHead>
                                        <TableHead>Supplier</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow v-for="(history, historyIndex) in asset.history" :key="historyIndex">
                                        <TableCell class="font-medium text-left">{{ history.id }}</TableCell>
                                        <TableCell class="font-medium text-left">{{ history.oldPartName }}</TableCell>
                                        <TableCell class="font-medium text-left">{{ history.newPartName }}</TableCell>
                                        <TableCell class="font-medium text-left">{{ history.serialCode }}</TableCell>
                                        <TableCell class="font-medium text-left">{{ history.buyDate }}</TableCell>
                                        <TableCell class="font-medium text-left">{{ history.brokenDate }}</TableCell>
                                        <TableCell class="font-medium text-left">{{ history.price }}</TableCell>
                                        <TableCell class="font-medium text-left">{{ history.warranty }}</TableCell>
                                        <TableCell class="font-medium text-left">{{ history.supplier }}</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </details>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </CardContent>
</template>

<script setup lang="ts">
import axios from 'axios'
import { ref, watchEffect } from 'vue'

const repairList = ref<any[]>([])
const error = ref<string | null>(null)

const fetchRepairList = async () => {
    let url = `http://localhost:8081/api/repair`
    error.value = null
    try {
        const response = await axios.get(url)
        repairList.value = response.data
    } catch (err) {
        error.value = "Failed to fetch data"
    }
}

//   // Date Format to DD-MM-YYYY
//   const formatDate = (dateString: string | null): string => {
//     if (!dateString) {
//       return "NA";
//     }
  
//     const [year, month, day] = dateString.split("-");
//     return `${day}-${month}-${year}`;
//   };

watchEffect(() => {
    fetchRepairList()
})
</script>

<template>
  <div>
    <Button
      @click="exportToExcel"
      size="sm"
      variant="outline"
      class="gap-1 cursor-pointer h-7"
    >
      <Icon name="mingcute:file-fill" />
      <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
    </Button>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "#app";
import * as XLSX from "xlsx";
import { computed } from 'vue';

// Fetch the data
const { data } = await useFetch("http://localhost:8081/api/asset/report");

// Ensure the data is an array, or default to an empty array
const assets = computed(() => Array.isArray(data.value) ? data.value : []);

// Export to Excel function
const exportToExcel = () => {
  if (!assets.value.length) {
    alert("No data to export!");
    return;
  }

  // Convert the data to a worksheet
  const ws = XLSX.utils.json_to_sheet(assets.value);

  // Create a new workbook
  const wb = XLSX.utils.book_new();

  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, 'OE(All)');

  // Export the workbook as an XLSX file
  XLSX.writeFile(wb, 'List Asset Over 250.xlsx');
};
</script>

<template>
    <div>
      <Button
        @click="exportToExcel"
        size="sm"
        variant="outline"
        class="gap-1 cursor-pointer h-7"
      >
        <Icon name="mingcute:file-fill" />
        <span class="sr-only sm:not-sr-only sm:whitespace-nowrap"> Export </span>
      </Button>
    </div>
  </template>
  

<script setup lang="ts">
import { useFetch } from "#app";
import * as XLSX from "xlsx";

// Fetch the data
const { data } = await useFetch(
  "http://localhost:8081/api/task/report"
);

const exportToExcel = () => {
  if (!data.value || !Array.isArray(data.value)) {
    alert("No data to export!");
    return;
  }

  // Convert the data to a worksheet
  const ws = XLSX.utils.json_to_sheet(data.value);
  
  // Create a new workbook
  const wb = XLSX.utils.book_new();
  
  // Append the worksheet to the workbook
  XLSX.utils.book_append_sheet(wb, ws, '09');
  
  // Export the workbook as an XLSX file
  XLSX.writeFile(wb, 'Daily work.xlsx');
};
</script>

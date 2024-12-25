<template>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Problem</TableHead>
          <TableHead class="hidden md:table-cell">Request By</TableHead>
          <TableHead>Date</TableHead>
          <TableHead class="hidden md:table-cell">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody v-for="task in flattenedTasks" :key="task.id">
        <TableRow>
          <TableCell>{{ task.problem }}</TableCell>
          <TableCell>{{ task.reqBy || '-' }}</TableCell>
          <TableCell>{{ task.date || '-' }}</TableCell>
          <TableCell>{{ task.status === '1' ? 'Solved' : 'Pending' }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </template>
  
  <script setup lang="ts">
  import axios from "axios";
  import { ref, watchEffect, computed } from 'vue';
  
  // Reactive array to store tasks
  const tasks = ref<any[]>([]);
  
  // Fetch tasks from the API
  const fetchTasks = async () => {
    let url = `http://localhost:8081/api/task/monthly`;
    
    try {
      const response = await axios.get(url);
      tasks.value = response.data; // Store the nested array data in the reactive variable
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  
  // Flatten the array of tasks
  const flattenedTasks = computed(() => tasks.value.flat());
  
  // Fetch data when the component is mounted
  watchEffect(() => {
    fetchTasks();
  });
  </script>
  
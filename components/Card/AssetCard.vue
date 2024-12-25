<template>
  <Card class="overflow-hidden" v-for="asset in assets" :key="asset.id">
    <CardHeader class="flex flex-row items-start bg-muted/50">
      <div class="grid gap-0.5">
        <CardTitle class="flex items-center gap-2 text-lg group">
          Asset ID : {{ asset.id }}
        </CardTitle>
        <CardDescription>Date : {{ asset.date }}</CardDescription>
      </div>

      <div class="flex items-center gap-1 ml-auto">
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button size="icon" variant="outline" class="w-8 h-8">
              <MoreVertical class="h-3.5 w-3.5" />
              <span class="sr-only">More</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <NuxtLink
                :to="`/asset/over250/edit/${asset.id}`"
                class="flex w-full"
              >
              <span>Edit</span>
              </NuxtLink>
            </DropdownMenuItem>
            <DropdownMenuItem>Export</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Trash</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </CardHeader>

    <CardContent class="p-6 text-sm">
      <div class="grid gap-3">
        <div class="font-semibold">Asset Details</div>
        <ul class="grid gap-3">
          <li class="flex items-center justify-between">
            <span class="text-muted-foreground"> Name : {{ asset.name }}</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-muted-foreground">
              Asset Name : {{ asset.assetName }}</span
            >
          </li>
          <li class="flex items-center justify-between">
            <span class="text-muted-foreground">
              Model : {{ asset.model }}</span
            >
          </li>
          <li class="flex items-center justify-between">
            <span class="text-muted-foreground">
              Brand : {{ asset.brand }}</span
            >
          </li>
          <li class="flex items-center justify-between">
            <span class="text-muted-foreground"> Code : {{ asset.code }}</span>
          </li>
          <li class="flex items-center justify-between">
            <span class="text-muted-foreground">
              Condition : {{ asset.condition }}</span
            >
          </li>
        </ul>
        <Separator class="my-2" />
        <ul class="grid gap-3">
          <li class="flex items-center justify-between">
            <span class="text-muted-foreground">
              Price : {{ asset.price }}</span
            >
          </li>
          <li class="flex items-center justify-between">
            <span class="text-muted-foreground">
              Value : {{ asset.value }}</span
            >
          </li>
        </ul>
      </div>
      <Separator class="my-4" />
      <div class="grid gap-3">
        <div class="font-semibold">User Information</div>
        <dl class="grid gap-3">
          <div class="flex items-center justify-between">
            <dt class="text-muted-foreground">User : {{ asset.user }}</dt>
          </div>
          <div class="flex items-center justify-between">
            <dt class="text-muted-foreground">Other : {{ asset.other }}</dt>
          </div>
          <div class="flex items-center justify-between">
            <dt class="text-muted-foreground">Office : {{ asset.office }}</dt>
          </div>
          <div class="flex items-center justify-between">
            <dt class="text-muted-foreground">
              Department : {{ asset.department }}
            </dt>
          </div>
        </dl>
      </div>
    </CardContent>

    <CardFooter
      class="flex flex-row items-center px-6 py-3 border-t bg-muted/50"
    >
      <div class="text-xs text-muted-foreground">
        <!-- Updated <time dateTime="2023-11-23">November 23, 2023</time> -->
      </div>
      <Pagination class="w-auto ml-auto mr-0">
        <PaginationList class="gap-1">
          <!-- Previous Button -->
          <PaginationPrev
            @click="changePage(currentPage - 1)"
            :disabled="currentPage === 1"
            variant="outline"
            class="w-6 h-6"
          />

          <!-- Next Button -->
          <PaginationNext
            @click="changePage(currentPage + 1)"
            :disabled="currentPage === totalPages"
            variant="outline"
            class="w-6 h-6"
          />
        </PaginationList>
      </Pagination>
    </CardFooter>
  </Card>
</template>

<script setup lang="ts">
import { Separator } from "@/components/ui/separator";
import { MoreVertical } from "lucide-vue-next";

import axios from "axios";
import { ref, watchEffect, computed } from "vue";

const error = ref<string | null>(null);
const assets = ref<any>({});
const currentPage = ref<number>(1);
const totalPages = ref<number>(0);
const maxPageButtons = 4;

// Fetch asset details based on pagination
const fetchAssets = async () => {
  error.value = null;
  let url = `http://localhost:8081/api/asset/detail/page/${currentPage.value}`;

  try {
    const response = await axios.get(url);
    assets.value = response.data.asset;
    totalPages.value = response.data.totalPages;
  } catch (err) {
    error.value = "Failed to fetch data";
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
</script>

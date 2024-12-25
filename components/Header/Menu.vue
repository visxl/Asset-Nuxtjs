<template>
  <div class="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
    <header class="sticky top-0 z-30 flex items-center gap-4 px-4 border-b h-14 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
      <Sheet>
        <SheetTrigger as-child>
          <Button size="icon" variant="outline" class="sm:hidden">
            <PanelLeft class="w-5 h-5" />
            <span class="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" class="sm:max-w-xs">
          <nav class="grid gap-6 text-lg font-medium">
            <a href="#" class="flex items-center justify-center w-10 h-10 gap-2 text-lg font-semibold rounded-full group shrink-0 bg-primary text-primary-foreground md:text-base">
              <Package2 class="w-5 h-5 transition-all group-hover:scale-110" />
              <span class="sr-only">Acme Inc</span>
            </a>
            <a href="/" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Home class="w-5 h-5" />
              Dashboard
            </a>
            <a href="#" class="flex items-center gap-4 px-2.5 text-foreground">
              <ShoppingCart class="w-5 h-5" />
              Orders
            </a>
            <a href="/asset/over250" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Package class="w-5 h-5" />
              Office Asset
            </a>
            <a href="/tasks" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <Icon name='charm:book-open' />
              Daily Tasks
            </a>
            <a href="#" class="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground">
              <LineChart class="w-5 h-5" />
              Settings
            </a>
          </nav>
        </SheetContent>
      </Sheet>

      <Breadcrumb class="hidden md:flex">
        <BreadcrumbList>
          <!-- Home Link -->
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <a href="/">Dashboard</a>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <!-- Loop through breadcrumb items -->
          <template v-for="(item, index) in breadcrumbItems" :key="item.path">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink v-if="index < breadcrumbItems.length - 1" as-child>
                <a :href="item.path">{{ item.name }}</a>
              </BreadcrumbLink>
              <BreadcrumbPage v-else>
                {{ item.name }}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </template>
        </BreadcrumbList>
      </Breadcrumb>

      <div class="relative flex-1 ml-auto md:grow-0">
        <Search
          class="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
        />
        <Input
          type="search"
          placeholder="Search..."
          v-model="searchTerm"
          @keyup.enter="handleSearch"
          class="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="secondary" size="icon" class="rounded-full">
            <CircleUser class="w-5 h-5" />
            <span class="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  </div>
</template>

<script setup lang="ts">
import {
  CircleUser,
  Home,
  LineChart,
  Package,
  Package2,
  PanelLeft,
  Search,
  ShoppingCart,
} from "lucide-vue-next";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ref, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const searchTerm = ref('');
const router = useRouter();
const route = useRoute();
const toast = useToast();

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Split the path into segments and filter out empty segments
const pathSegments = route.path.split('/').filter(segment => segment);

// Generate breadcrumb data with paths for each segment and capitalize the names
const breadcrumbItems = computed(() =>
  pathSegments.map((segment, index) => ({
    name: capitalizeFirstLetter(segment),
    path: '/' + pathSegments.slice(0, index + 1).join('/'),
  }))
);

// Define keyword-to-route mapping
const keywordRoutes: Record<string, string> = {
  'null' : '/',
  dashboard: '/',
  orders: '/orders',
  assets: '/asset/over250',
  tasks: '/tasks',
  analytics: '/analytics',
  settings: '/setting',
};

// Handle search on Enter key or button click
const handleSearch = () => {
  const searchValue = searchTerm.value.trim().toLowerCase();
  const matchedRoute = Object.keys(keywordRoutes).find((key) =>
    key.includes(searchValue)
  );

  if (matchedRoute) {
    router.push(keywordRoutes[matchedRoute]);
    searchTerm.value = ''; 
  } else {
    toast.add({ title: "No Matching Found!" });
  }
};
</script>


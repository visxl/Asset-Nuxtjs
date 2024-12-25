<template>
    <Breadcrumb class="hidden md:flex">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink as-child>
            <a href="/">Dashboard</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink as-child>
            <a href="#">Office Assets</a>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Repair History</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  
    <Tabs default-value="all" class='w-full max-w-80 md:max-w-full'>
      <!-- Menu Button -->
      <div class="flex items-center">
        <TabsList>
          <TabsTrigger value="all"> All </TabsTrigger>
          <TabsTrigger value="active"> Active </TabsTrigger>
          <TabsTrigger value="inactive"> Inactive </TabsTrigger>
          <TabsTrigger value="broken"> Broken </TabsTrigger>
        </TabsList>
  
        <div class="flex items-center gap-2 ml-auto">
          <UInput
            type="text"
            size="sm"
            placeholder="Search..."
          />
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="sm" class="gap-1 h-7">
                <ListFilter class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem checked> Active </DropdownMenuItem>
              <DropdownMenuItem>Draft</DropdownMenuItem>
              <DropdownMenuItem> Archived </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Exportasset />
          <Createasset />
        </div>
      </div>
      <!-- Menu Button End -->
  
      <TabsContent value="all">
    <Card>
      <CardHeader>
        <CardTitle>Asset Over 250</CardTitle>
        <CardDescription>Repair History Of All Asset</CardDescription>
      </CardHeader>
      <TableRepair/>
    </Card>
  </TabsContent>
    </Tabs>
  </template>
  
  <script setup lang="ts">
  import { ListFilter } from 'lucide-vue-next'
  import { Button } from '@/components/ui/button'
  import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
  import { Tabs, TabsContent, TabsList, TabsTrigger, } from '@/components/ui/tabs'
  import Createasset from '../modal/createasset.vue'
  import Exportasset from '../export/exportasset.vue'
  
  
  </script>
  
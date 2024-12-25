<template>
    <Tabs default-value="over250" class='w-full max-w-80 md:max-w-full'>
      <!-- Menu Button -->
      <div class="flex items-center">
        <TabsList>
          <TabsTrigger value="over250"> Over 250 </TabsTrigger>
          <TabsTrigger value="under250"> Under 250 </TabsTrigger>
          <TabsTrigger value="inactive"> Inactive</TabsTrigger>
          <TabsTrigger value="broken"> Broken </TabsTrigger>
        </TabsList>
  
        <div class="flex items-center gap-2 ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <Button variant="outline" size="sm" class="gap-1 h-7">
                <ListFilter class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only sm:whitespace-nowrap">
                  Filter
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent >
              <DropdownMenuLabel>Filter by</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem checked> Active </DropdownMenuItem>
              <DropdownMenuItem>Draft</DropdownMenuItem>
              <DropdownMenuItem> Archived </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Exportasset />
          <Sheet />
          <Createasset />
        </div>
      </div>
      <!-- Menu Button End -->
  
      <TabsContent value="over250">
        <TableAssetOver250 />
      </TabsContent>
  
      <TabsContent value="under250">
        <TableAssetUnder250 />
      </TabsContent>
  
      <TabsContent value="inactive">
        <TableAssetInactiveTable/>
      </TabsContent>
  
      <TabsContent value="broken">
        <TableAssetBrokenTable/>
      </TabsContent>
  
    </Tabs>
  </template>
  
  <script setup lang="ts">
  import { ListFilter } from 'lucide-vue-next'
  import { Button } from '@/components/ui/button'
  import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
  import { Tabs, TabsContent, TabsList, TabsTrigger, } from '@/components/ui/tabs'
  import Createasset from '../modal/createasset.vue'
  import Exportasset from '../export/exportasset.vue'
  import Sheet from '../modal/asset/sheet.vue'

  </script>
  
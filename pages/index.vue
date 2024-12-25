<template>
  <div class="flex flex-col w-full bg-muted/40">
    <main
      class="grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3"
    >
      <div class="grid items-start gap-4 auto-rows-max md:gap-8 lg:col-span-2">
        <div
          class="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4"
        >
          <Card class="sm:col-span-2">
            <CardHeader class="pb-3">
              <CardTitle>Your Orders</CardTitle>
              <CardDescription class="max-w-lg leading-relaxed text-balance">
                Introducing Our Dynamic Orders Dashboard for Seamless Management
                and Insightful Analysis.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button>Create New Order</Button>
            </CardFooter>
          </Card>
          <!-- <Card>
            <CardHeader class="pb-2">
              <CardDescription>This Week</CardDescription>
              <CardTitle class="text-4xl"> $1329 </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-xs text-muted-foreground">
                +25% from last week
              </div>
            </CardContent>
            <CardFooter>
              <Progress :model-value="25" aria-label="25% increase" />
            </CardFooter>
          </Card> -->
          <!-- <Card>
            <CardHeader class="pb-2">
              <CardDescription>This Month</CardDescription>
              <CardTitle class="text-3xl"> $5,329 </CardTitle>
            </CardHeader>
            <CardContent>
              <div class="text-xs text-muted-foreground">
                +10% from last month
              </div>
            </CardContent>
            <CardFooter>
              <Progress :model-value="12" aria-label="12% increase" />
            </CardFooter>
          </Card> -->
        </div>
        <Tabs default-value="today">
          <div class="flex items-center">
            <TabsList>
              <TabsTrigger value="today"> Today </TabsTrigger>
              <TabsTrigger value="weekly"> Weekly </TabsTrigger>
              <TabsTrigger value="monthly"> Monthly </TabsTrigger>
            </TabsList>

            <div class="flex items-center gap-2 ml-auto">
              <DropdownMenu>
                <DropdownMenuTrigger as-child>
                  <Button
                    variant="outline"
                    size="sm"
                    class="gap-1 px-3 rounded-md h-7"
                  >
                    <ListFilter class="h-3.5 w-3.5" />
                    <span class="sr-only sm:not-sr-only">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <div class="flex space-x-2 items-top">
                      <Checkbox id="terms1" />
                      <label
                        for="terms2"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Fulfilled
                      </label>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div class="flex space-x-2 items-top">
                      <Checkbox id="terms1" />
                      <label
                        for="terms2"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Declined
                      </label>
                    </div>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <div class="flex space-x-2 items-top">
                      <Checkbox id="terms1" />
                      <label
                        for="terms2"
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Refunded
                      </label>
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button
                variant="outline"
                size="sm"
                class="gap-1 px-3 rounded-md h-7"
              >
                <File class="h-3.5 w-3.5" />
                <span class="sr-only sm:not-sr-only">Export</span>
              </Button>
            </div>
          </div>

          <TabsContent value="today">
            <Card>
              <CardHeader class="px-7">
                <CardTitle>Recent Tasks</CardTitle>
                <CardDescription> Latest tasks </CardDescription>
              </CardHeader>
              <CardContent>
                <TableTaskTodayTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="weekly">
            <Card>
              <CardHeader class="px-7">
                <CardTitle>Weekly Tasks</CardTitle>
                <CardDescription> Weekly tasks </CardDescription>
              </CardHeader>
              <CardContent>
                <TableTaskWeeklyTable />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="monthly">
            <Card>
              <CardHeader class="px-7">
                <CardTitle>Monthly Tasks</CardTitle>
                <CardDescription> Monthly tasks </CardDescription>
              </CardHeader>
              <CardContent>
                <TableTaskMonthlyTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <CardAssetCard />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import {
  File,
  ListFilter,
} from "lucide-vue-next";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
</script>

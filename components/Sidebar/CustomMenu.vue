<template>
  <div class="grid w-[300px] min-h-screen ">
    <div class="hidden border-r bg-muted/40 md:block">
      <div class="flex flex-col h-full max-h-screen gap-2">
        <div class="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <a href="/" class="flex items-center gap-2 font-semibold">
            <Package2 class="w-6 h-6" />
            <span class="">Acme Inc</span>
          </a>
          <Button variant="outline" size="icon" class="w-8 h-8 ml-auto">
            <Bell class="w-4 h-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div class="flex-1">
          <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <a
              href="/"
              class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <Home class="w-4 h-4" />
              Dashboard
            </a>
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <ShoppingCart class="w-4 h-4" />
              Orders
              <Badge class="flex items-center justify-center w-6 h-6 ml-auto rounded-full shrink-0">
                6
              </Badge>
            </a>
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg bg-muted text-primary hover:text-primary"
            >
              <Package class="w-4 h-4" />
              Products
            </a>
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <Users class="w-4 h-4" />
              Customers
            </a>
            <a
              href="#"
              class="flex items-center gap-3 px-3 py-2 transition-all rounded-lg text-muted-foreground hover:text-primary"
            >
              <LineChart class="w-4 h-4" />
              Analytics
            </a>
          </nav>
        </div>
        <div class="p-4 mt-auto">
          <Card>
            <CardHeader class="p-2 pt-0 md:p-4">
              <CardTitle>Upgrade to Pro</CardTitle>
              <CardDescription>
                Unlock all features and get unlimited access to our support
                team.
              </CardDescription>
            </CardHeader>
            <CardContent class="p-2 pt-0 md:p-4 md:pt-0">
              <Button size="sm" class="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Bell, Home, LineChart, Package, Package2, ShoppingCart, Users } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

</script>

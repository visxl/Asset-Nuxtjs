<template>
    <main class="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div class="grid w-full max-w-6xl gap-2 mx-auto">
        <h1 class="text-3xl font-semibold">
          Settings
        </h1>
      </div>
      <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
        <nav class="grid gap-4 text-sm text-muted-foreground">
          <a href="/setting">
            General
          </a>
          <a href="#" class="font-semibold text-primary">
            Security
          </a>
          <a href="#">
            Integrations
          </a>
          <a href="#">
            Support
          </a>
          <a href="#">
            Organizations
          </a>
          <a href="#">
            Advanced
          </a>
        </nav>
        <div class="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Username</CardTitle>
              <CardDescription>
                Used to identify your store in the marketplace.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <Input placeholder="Username" />
              </form>
            </CardContent>
            <CardFooter class="px-6 py-4 border-t">
              <Button>Save</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                The directory within your project, in which your plugins are
                located.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form class="flex flex-col gap-4">
                <Input
                  placeholder="Password"
                />
                <div class="flex items-center space-x-2">
                  <Checkbox id="include" default-checked />
                  <label
                    for="include"
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Show Password
                  </label>
                </div>
              </form>
            </CardContent>
            <CardFooter class="px-6 py-4 border-t">
              <Button>Save</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
</template>

<script setup>
    const loading = ref(false)
</script>
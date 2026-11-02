import {
  Box,
  ClientOnly,
  HStack,
  Heading,
  Skeleton,
  VStack,
} from "@chakra-ui/react"

import { ColorModeToggle } from "@lib/color-mode-toggle"
import { Button } from "@lib/button"
import { Checkbox } from "@lib/checkbox"
import { Progress } from "@lib/progress"
import { RadioGroup } from "@lib/radio-group"

export default function Page() {
  return (
    <Box textAlign="center" fontSize="xl" pt="30vh">
      <VStack gap="8">
        <img alt="chakra logo" src="/static/logo.svg" width="80" height="80" />
        <Heading size="2xl" letterSpacing="tight">
          Welcome to Chakra UI v3 + Vite
        </Heading>

        <HStack gap="10">
          <Checkbox>Checkbox</Checkbox>
          <RadioGroup labels={['Radio 1', 'Radio 2']}/>
        </HStack>

        <Progress width="300px" value={65}/>

        <HStack>
          <Button>Let's go!</Button>
          <Button variant="outline">bun install @chakra-ui/react</Button>
        </HStack>
      </VStack>

      <Box pos="absolute" top="4" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeToggle />
        </ClientOnly>
      </Box>
    </Box>
  )
}

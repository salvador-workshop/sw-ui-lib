import {
    Progress as ChakraProgress,
} from "@chakra-ui/react"

export function Progress({
    width,
    value,
}) {
    return (
        <ChakraProgress.Root width={width} value={value} striped>
            <ChakraProgress.Track>
                <ChakraProgress.Range />
            </ChakraProgress.Track>
        </ChakraProgress.Root>
    )
}

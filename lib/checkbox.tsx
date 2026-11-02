import {
    Checkbox as ChakraCheckbox,
} from "@chakra-ui/react"

export function Checkbox({
    children,
}) {
    return (
        <ChakraCheckbox.Root defaultChecked>
            <ChakraCheckbox.HiddenInput />
            <ChakraCheckbox.Control>
                <ChakraCheckbox.Indicator />
            </ChakraCheckbox.Control>
            <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
        </ChakraCheckbox.Root>
    )
}

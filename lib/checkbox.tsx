import {
    Checkbox as ChakraCheckbox,
} from "@chakra-ui/react"

export function Checkbox({
    children,
    defaultChecked,
}) {
    const defChecked = !!defaultChecked
    return (
        <ChakraCheckbox.Root defaultChecked={defChecked}>
            <ChakraCheckbox.HiddenInput />
            <ChakraCheckbox.Control>
                <ChakraCheckbox.Indicator />
            </ChakraCheckbox.Control>
            <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>
        </ChakraCheckbox.Root>
    )
}

import {
    Button as ChakraButton,
} from "@chakra-ui/react"

export function Button({
    children,
    variant,
}) {
    return (
        <ChakraButton variant={variant}>
            {children}
        </ChakraButton>
    )
}

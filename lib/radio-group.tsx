import {
    RadioGroup as ChakraRadioGroup,
} from "@chakra-ui/react"

function RadioGroupItem({
    value,
    children,
}) {
    return (
        <ChakraRadioGroup.Item value={value}>
            <ChakraRadioGroup.ItemHiddenInput />
            <ChakraRadioGroup.ItemControl>
                <ChakraRadioGroup.ItemIndicator />
            </ChakraRadioGroup.ItemControl>
            <ChakraRadioGroup.ItemText lineHeight="1">{children}</ChakraRadioGroup.ItemText>
        </ChakraRadioGroup.Item>
    )
}

export function RadioGroup({
    labels
}) {
    return (
        <ChakraRadioGroup.Root display="inline-flex" defaultValue="1">
            <RadioGroupItem value="1">{labels[0]}</RadioGroupItem>
            <RadioGroupItem value="2">{labels[1]}</RadioGroupItem>
        </ChakraRadioGroup.Root>
    )
}

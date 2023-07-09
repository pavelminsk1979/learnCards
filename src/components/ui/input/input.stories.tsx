
import {Meta, StoryObj} from "@storybook/react";
import {Input} from "./input.tsx";
/*import {action} from '@storybook/addon-actions'*/


const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            options: ['email', 'password', 'text'],

        },
    },
} satisfies Meta<typeof Input>;

export default meta
type Story = StoryObj<typeof meta>


export const Email: Story = {
    args: {
        type: 'email',
        label:'Input',
        disabled: false,
    },
}

export const Password: Story = {
    args: {
        type: 'password',
        label:'Input',
        disabled: false,
    },
}

export const Text: Story = {
    args: {
        type: 'text',
        label:'Input',
        disabled: false,
    },
}

export const TextError: Story = {
    args: {
        type: 'text',
        label:'Input',
        disabled: false,
        error:'Some Error!'
    },
}
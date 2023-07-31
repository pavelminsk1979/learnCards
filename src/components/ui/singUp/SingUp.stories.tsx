import {Meta, StoryObj} from '@storybook/react'


import {SingUp} from "./SingUp.tsx";

const meta = {
    title: 'Components/SingUp',
    component: SingUp,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<typeof SingUp>

export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = {
    args: {},
}
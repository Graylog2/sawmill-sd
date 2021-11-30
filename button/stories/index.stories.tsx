import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import "~/layout/stories";
import Button from "../src";

const Template = (args) => <Button {...args} />;

// BASE
export const DefaultButton = Template.bind({});
DefaultButton.args = { bsStyle: "default", children: "Click Me" };

export const DangerButton = Template.bind({});
DangerButton.args = { ...DefaultButton.args, bsStyle: "danger" };

export const LinkButton = Template.bind({});
LinkButton.args = { ...DefaultButton.args, bsStyle: "link" };

export const InfoButton = Template.bind({});
InfoButton.args = { ...DefaultButton.args, bsStyle: "info" };

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { ...DefaultButton.args, bsStyle: "primary" };

export const SuccessButton = Template.bind({});
SuccessButton.args = { ...DefaultButton.args, bsStyle: "success" };

export const WarningButton = Template.bind({});
WarningButton.args = { ...DefaultButton.args, bsStyle: "warning" };

// DISABLED
export const DisabledDefaultButton = Template.bind({});
DisabledDefaultButton.args = { ...DefaultButton.args, disabled: true };

export const DisabledDangerButton = Template.bind({});
DisabledDangerButton.args = { ...DangerButton.args, disabled: true };

export const DisabledLinkButton = Template.bind({});
DisabledLinkButton.args = { ...LinkButton.args, disabled: true };

export const DisabledInfoButton = Template.bind({});
DisabledInfoButton.args = { ...InfoButton.args, disabled: true };

export const DisabledPrimaryButton = Template.bind({});
DisabledPrimaryButton.args = { ...PrimaryButton.args, disabled: true };

export const DisabledSuccessButton = Template.bind({});
DisabledSuccessButton.args = { ...SuccessButton.args, disabled: true };

export const DisabledWarningButton = Template.bind({});
DisabledWarningButton.args = { ...WarningButton.args, disabled: true };

// DISABLED
export const ActiveDefaultButton = Template.bind({});
ActiveDefaultButton.args = { ...DefaultButton.args, active: true };

export const ActiveDangerButton = Template.bind({});
ActiveDangerButton.args = { ...DangerButton.args, active: true };

export const ActiveLinkButton = Template.bind({});
ActiveLinkButton.args = { ...LinkButton.args, active: true };

export const ActiveInfoButton = Template.bind({});
ActiveInfoButton.args = { ...InfoButton.args, active: true };

export const ActivePrimaryButton = Template.bind({});
ActivePrimaryButton.args = { ...PrimaryButton.args, active: true };

export const ActiveSuccessButton = Template.bind({});
ActiveSuccessButton.args = { ...SuccessButton.args, active: true };

export const ActiveWarningButton = Template.bind({});
ActiveWarningButton.args = { ...WarningButton.args, active: true };

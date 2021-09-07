import { Component, h, State } from '@stencil/core';
import { DockItem } from '../dock.types';

/**
 * Basic Example
 */
@Component({
    tag: 'limel-example-dock-basic',
    shadow: true,
})
export class DockBasicExample {
    @State()
    private disabled = false;

    @State()
    private readonly = false;

    @State()
    private dockItems: DockItem[] = [
        {
            value: 'contact',
            text: 'Customer contact',
            selectedColor: 'rgb(var(--color-orange-default))',
            selected: true,
            icon: 'meeting',
        },
        {
            value: 'requirement',
            text: 'Demand analysis',
            selectedColor: 'rgb(var(--color-sky-default))',
            icon: 'combo_chart',
        },
        {
            value: 'tender',
            text: 'Quote',
            selectedColor: 'rgb(var(--color-green-default))',
            icon: 'paper_plane',
        },
        {
            value: 'agreement',
            text: 'Agreement',
            selectedColor: 'rgb(var(--color-teal-default))',
            icon: 'agreement',
        },
        {
            value: 'rejected',
            text: 'Rejected',
            isOffProgress: true,
            selectedColor: 'rgb(var(--color-red-dark))',
            icon: 'do_not_disturb',
            iconColor: 'rgb(var(--color-red-dark))',
        },
        {
            value: 'onhold',
            text: 'On hold',
            isOffProgress: true,
            selectedColor: 'rgb(var(--color-coral-default))',
            icon: 'circled_pause',
            iconColor: 'rgb(var(--color-coral-default))',
        },
    ];

    public render() {
        return [
            <limel-dock
                dockItems={this.dockItems}
                onChange={this.handleChange}
                disabled={this.disabled}
                readonly={this.readonly}
            />,
            <limel-flex-container justify="end">
                <limel-checkbox
                    checked={this.disabled}
                    label="Disabled"
                    onChange={this.setDisabled}
                />
                <limel-checkbox
                    checked={this.readonly}
                    label="Readonly"
                    onChange={this.setReadonly}
                />
            </limel-flex-container>,
            <limel-example-value
                value={this.dockItems.find((i) => i.selected)}
            />,
        ];
    }

    private handleChange = (event: CustomEvent<DockItem>) => {
        this.dockItems = this.dockItems.map((item) => {
            return {
                ...item,
                selected: item.value === event.detail?.value,
            };
        });
    };

    private setDisabled = (event: CustomEvent<boolean>) => {
        event.stopPropagation();
        this.disabled = event.detail;
    };

    private setReadonly = (event: CustomEvent<boolean>) => {
        event.stopPropagation();
        this.readonly = event.detail;
    };
}

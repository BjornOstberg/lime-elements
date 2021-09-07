import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
} from '@stencil/core';
import { DockItem } from './dock.types';

/**
 * @exampleComponent limel-example-dock-basic

 */
@Component({
    tag: 'limel-dock',
    shadow: true,
    styleUrl: 'dock.scss',
})
export class Dock {
    @Element()
    public element: HTMLLimelDockElement;

    /**
     * What flow items to render
     */
    @Prop()
    public dockItems: DockItem[] = [];

    /**
     * Set to `true` to disable the progress flow.
     * Use `disabled` to indicate that the component can normally be interacted
     * with, but is currently disabled. This tells the user that if certain
     * requirements are met, the field may become enabled again.
     */
    @Prop()
    public disabled = false;

    /**
     * Disables the progress flow when `true`.
     * This does not visualize the component that much differently.
     * But since the component does not provide any feedback that users can
     * interact with the component, it makes it perfect for illustrative and
     * informative porpuses.
     */
    @Prop()
    public readonly = false;

    /**
     * Fired when a new value has been selected from the progress flow
     */
    @Event()
    public change: EventEmitter<DockItem>;

    private selectedItemIndex: number;

    public componentDidRender() {
        this.scrollToSelectedItem();
    }

    public render() {
        const regularDockItems = this.dockItems.filter((item) => {
            return !item.isOffProgress;
        });
        const endPhaseItems = this.dockItems.filter((item) => {
            return item.isOffProgress;
        });
        this.selectedItemIndex = regularDockItems.findIndex((item) => {
            return item.selected;
        });

        return [
            regularDockItems.map(this.renderRegularDockItem),
            endPhaseItems.map(this.renderEndPhaseItem),
        ];
    }

    private renderRegularDockItem = (
        item: DockItem,
        index: number,
        array: DockItem[]
    ) => {
        return (
            <limel-progress-flow-item
                class={{
                    'flow-item': true,
                    first: index === 0,
                    last: index === array.length - 1,
                    passed: index < this.selectedItemIndex,
                    selected: item.selected,
                }}
                style={this.getItemStyle(item)}
                disabled={this.disabled || this.readonly}
                readonly={this.readonly}
                item={item}
                onInteract={this.handleDockItemClick(item)}
            />
        );
    };

    private renderEndPhaseItem = (
        item: DockItem,
        index: number,
        array: DockItem[]
    ) => {
        return (
            <limel-progress-flow-item
                class={{
                    'flow-item': true,
                    'off-progress-item': true,
                    selected: item.selected,
                    'first-off-progress-item': index === 0,
                    'last-off-progress-item': index === array.length - 1,
                }}
                style={this.getItemStyle(item)}
                disabled={this.disabled || this.readonly}
                readonly={this.readonly}
                item={item}
                onInteract={this.handleDockItemClick(item)}
            />
        );
    };

    private handleDockItemClick = (dockItem: DockItem) => () => {
        if (!dockItem.selected && !dockItem.disabled && !this.disabled) {
            this.change.emit(dockItem);
        }
    };

    private getItemStyle(dockItem: DockItem) {
        const style: any = {};
        if (dockItem?.selectedColor) {
            style['--progress-flow-step-background-color--selected'] =
                dockItem.selectedColor;
        }

        if (dockItem?.passedColor) {
            style['--progress-flow-step-background-color--passed'] =
                dockItem.passedColor;
        }

        if (dockItem?.iconColor) {
            style['--progress-flow-icon-color--inactive'] = dockItem.iconColor;
        }

        return style;
    }

    private scrollToSelectedItem() {
        const selectedElement = this.getElementForSelectedItem();
        if (selectedElement) {
            const selectedItemLeftPosition =
                selectedElement.offsetLeft - this.element.offsetLeft;
            const selectedElementLeftPositionCentered =
                // eslint-disable-next-line no-magic-numbers
                selectedItemLeftPosition - this.element.offsetWidth / 2;
            const selectedElementCentered =
                selectedElementLeftPositionCentered +
                // eslint-disable-next-line no-magic-numbers
                selectedElement.offsetWidth / 2;
            this.element.scrollTo({
                behavior: 'smooth',
                left: selectedElementCentered,
            });
        }
    }

    private getElementForSelectedItem(): HTMLLimelDockItemElement {
        return this.element.shadowRoot.querySelector('.flow-item.selected');
    }
}

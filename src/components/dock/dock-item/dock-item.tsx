import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
    State,
} from '@stencil/core';
import { DockItem } from '../dock.types';

/**
 * @private
 */
@Component({
    tag: 'limel-dock-item',
    shadow: false,
    styleUrl: 'dock-item.scss',
})

// buttons in a menu component
export class DockItemMenu {
    @Element()
    public element: HTMLLimelDockItemElement;

    /**
     * The flow item that should be rendered
     */
    @Prop()
    public item: DockItem = null;

    /**
     * Fired when clicking on the flow item
     */
    @Event()
    public interact: EventEmitter<void>;

    @State()
    private isOpen = false;

    // @State()
    // private isTrigger = false;

    public render() {
        if (this.item.isPopover) {
            return this.renderPopover();
        }

        if (this.item.isCollapsible) {
            return this.renderCollapsible();
        }

        return this.renderButton();
    }

    private renderPopover() {
        return [
            <limel-popover open={this.isOpen} onClose={this.onPopoverClose}>
                /* <button
                    slot="trigger"
                    tabindex="0"
                    title={this.getToolTipText()}
                    type="button"
                    class={{
                        button: true,
                        selected: this.item?.selected,
                    }}
                    onClick={this.openPopover}
                >
                    {this.renderIcon()}
                    <span class="text">{this.item.text}</span>
                </button> */
                {this.renderButton()}
                <p style={{ margin: '0.5rem 1rem' }} tabindex="0">
                    Content
                </p>
            </limel-popover>,
        ];
    }

    private renderButton() {
        return [
            <button
                // slot="trigger"
                tabindex="0"
                title={this.getToolTipText()}
                type="button"
                class={{
                    button: true,
                    selected: this.item?.selected,
                }}
                onClick={this.handleClick}
            >
                {this.renderIcon()}
                <span class="text">{this.item.text}</span>
            </button>,
        ];
    }

    private openPopover = (event: MouseEvent) => {
        event.stopPropagation();
        this.isOpen = true;
    };

    private onPopoverClose = (event: CustomEvent) => {
        event.stopPropagation();
        this.isOpen = false;
    };

    private renderCollapsible() {
        return [
            <limel-collapsible-section header={this.item.text}>
                {this.renderButton()}
            </limel-collapsible-section>,
        ];
    }
    private getToolTipText() {
        if (!this.item.secondaryText) {
            return this.item.text;
        }

        return [this.item.text, this.item.secondaryText].join(' · ');
    }

    private handleClick = () => {
        this.interact.emit();
    };

    private renderIcon() {
        if (!this.item.icon) {
            return;
        }

        return <limel-icon name={this.item.icon} size="small" class="icon" />;
    }
}

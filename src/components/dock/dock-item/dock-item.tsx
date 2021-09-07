import {
    Component,
    Element,
    Event,
    EventEmitter,
    h,
    Prop,
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

    public render() {
        if (!this.item) {
            return;
        }

        return [
            <button
                tabindex="0"
                title={this.getToolTipText()}
                type="button"
                class={{
                    step: true,
                    selected: this.item?.selected,

                }}
                onClick={this.handleClick}

            >
                {this.renderIcon()}
                <span class="text">{this.item.text}</span>
                {this.renderDivider()}
            </button>,
            this.renderSecondaryText(),
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

    private renderSecondaryText() {
        if (!this.item?.secondaryText) {
            return;
        }

        return <div class="secondary-text">{this.item.secondaryText}</div>;
    }

    private renderIcon() {
        if (!this.item.icon) {
            return;
        }

        return <limel-icon name={this.item.icon} size="small" class="icon" />;
    }

    private renderDivider() {
        if (this.item.isOffProgress) {
            return;
        }

        return <div class="divider" />;
    }
}

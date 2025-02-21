import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'tp-info-bubble',
  styleUrl: 'tp-info-bubble.css',
  shadow: true,
})
export class TpInfoBubble {
  @Prop() content:string;
  render() {
    return (
      <Host>
        <tp-icon icon="info"></tp-icon>
        <div id="bubble">{this.content}</div>
      </Host>
    );
  }

}

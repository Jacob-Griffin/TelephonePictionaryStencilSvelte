import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitElement } from 'lit';
import { loadChildElements } from '../loader';

loadChildElements(['byfo-icon']);
/**
 * A tooltip-like element that has custom styling and appears immediately on hover
 */
@customElement('byfo-info-bubble')
export class ByfoInfoBubble extends LitElement {
  @property() content?: string;
  render() {
    return html`<byfo-icon icon="info"></byfo-icon>
      <div id="bubble">${this.content}</div>`;
  }
  static styles = css`
    :host {
      display: inline-flex;
      height: 1em;
      width: 1em;
      align-items: center;
    }

    #bubble {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      font-size: 1rem;

      width: max-content;
      max-width: min(30vw, 320px);
      margin-left: 0.5em;
      padding: 0.5rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 0.5rem #0007;

      color: var(--chat-from-text);
      background-color: var(--chat-from-backdrop);

      position: absolute;
      top: 0;
      left: 100%;

      opacity: 0;
      z-index: -2;
      transition: opacity 200ms ease, z-index 200ms ease;
    }

    byfo-icon {
      position: relative;
      top: 0.15em;
      display: inline-block;
      height: 1em;
      width: 1em;
    }

    byfo-icon:hover ~ #bubble {
      opacity: 1;
      z-index: 3000;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'byfo-info-bubble': ByfoInfoBubble;
  }
}

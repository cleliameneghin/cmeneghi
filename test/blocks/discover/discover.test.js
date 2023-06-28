import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import initDiscover from '../../../blocks/discover/discover';
import { setLibs } from '../../../scripts/utils.js';

document.body.innerHTML = await readFile({ path: './mocks/body.html' });
setLibs('/libs');

describe('This discover block', () => {
  it ('Adds Heading over Buttons only if it exists', async () => {
    const discover = document.querySelector('#discover-only');
    await initDiscover(discover);
    const p = discover.querySelector('p');
    expect(p).to.equal(null);
  });

  it('full Discover text is given when there', async () => {
    const discover = document.querySelector('#full-discover');
    await initDiscover(discover);
    const h2 = discover.querySelector('h2');
    expect(h2.textContent).to.equal('Titel Discover even more');  
  });
});

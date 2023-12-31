import { getLibs } from '../../scripts/utils.js';

export default async function init(el) {
  const headingParagraph = el.querySelector("p");
  const heading = headingParagraph?.textContent;
  if (heading) {
    headingParagraph.remove();
    const { createTag } = await import(`${getLibs()}/utils/utils.js`);
    const headingTag = createTag('h2', { class: 'discover-title' }, `${heading}`);
    el.prepend(headingTag);
  }
  
  const {decorateButtons} = await import(`${getLibs()}/utils/decorate.js`);
  decorateButtons(el);

}

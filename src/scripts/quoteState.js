export function getQuoteItems() {
  try {
    return JSON.parse(localStorage.getItem('quoteItems') || '[]');
  } catch {
    return [];
  }
}

export function saveQuoteItems(items) {
  localStorage.setItem('quoteItems', JSON.stringify(items));
  window.dispatchEvent(new Event('quote-items-updated'));
}

export function upsertQuoteItem(nextItem) {
  const items = getQuoteItems();
  const existing = items.find((item) => item.category === nextItem.category && item.product === nextItem.product);
  if (!existing) {
    items.push({ quantity: 1, ...nextItem });
    saveQuoteItems(items);
    return { added: true, items };
  }
  return { added: false, items };
}

export function bindAddToQuoteButtons() {
  const refreshState = () => {
    const items = getQuoteItems();
    document.querySelectorAll('.quote-state').forEach((node) => {
      const match = items.find((item) => item.category === node.dataset.category && item.product === node.dataset.product);
      node.textContent = match ? `Already in quote list · Qty ${match.quantity || 1}` : '';
    });
  };

  document.querySelectorAll('.add-to-quote').forEach((button) => {
    button.addEventListener('click', () => {
      const result = upsertQuoteItem({
        category: button.dataset.category,
        product: button.dataset.product,
        title: button.dataset.title,
      });
      button.textContent = result.added ? 'Added to Quote' : 'Already Added';
      setTimeout(() => {
        button.textContent = 'Add to Quote';
      }, 1600);
      refreshState();
    });
  });

  window.addEventListener('quote-items-updated', refreshState);
  refreshState();
}

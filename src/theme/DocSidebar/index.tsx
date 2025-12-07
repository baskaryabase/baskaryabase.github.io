import React from 'react';
import OriginalDocSidebar from '@theme-original/DocSidebar';
import { useAuth } from '../../context/AuthContext';
import { PROTECTED_DOCS } from '../../protected-docs';

export default function DocSidebar(props) {
  const { isLoggedIn } = useAuth();

  // Recursively filter sidebar items
  function filterItems(items) {
    if (!items) return [];
    return items
      .map((item) => {
        // If category, filter its items recursively
        // if (item.type === 'category' && Array.isArray(item.items)) {
        //   return { ...item, items: filterItems(item.items) };
        // }
        // If link, check href
        if (item.href) {
          for (const p of PROTECTED_DOCS) {
            if (item.href.startsWith(p)) return null;
          }
        }
        return item;
      })
      .filter(Boolean);
  }

  if (!isLoggedIn) {
    const filteredItems = filterItems(props.sidebar);
    console.log(filteredItems)
    return <OriginalDocSidebar {...props} items={filteredItems} />;
  }

  return <OriginalDocSidebar {...props} />;
}

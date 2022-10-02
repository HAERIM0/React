import React, { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the comtent of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm the comtent of the Section 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

export default function Tab() {
  const { currentItem, changeItem } = useTabs(1, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
}
